import { is_void, quote_prop_if_necessary } from '../../../utils/names';
import Attribute from '../../nodes/Attribute';
import Class from '../../nodes/Class';
import { stringify_attribute, stringify_class_attribute } from '../../utils/stringify_attribute';
import { get_slot_scope } from './shared/get_slot_scope';
import Renderer, { RenderOptions } from '../Renderer';
import Element from '../../nodes/Element';
import Text from '../../nodes/Text';
import { x } from 'code-red';

// source: https://gist.github.com/ArjanSchouten/0b8574a6ad7f5065a5e7
const boolean_attributes = new Set([
	'async',
	'autocomplete',
	'autofocus',
	'autoplay',
	'border',
	'challenge',
	'checked',
	'compact',
	'contenteditable',
	'controls',
	'default',
	'defer',
	'disabled',
	'formnovalidate',
	'frameborder',
	'hidden',
	'indeterminate',
	'ismap',
	'loop',
	'multiple',
	'muted',
	'nohref',
	'noresize',
	'noshade',
	'novalidate',
	'nowrap',
	'open',
	'readonly',
	'required',
	'reversed',
	'scoped',
	'scrolling',
	'seamless',
	'selected',
	'sortable',
	'spellcheck',
	'translate'
]);

export default function(node: Element, renderer: Renderer, options: RenderOptions & {
	slot_scopes: Map<any, any>;
}) {
	renderer.add_string(`<${node.name}`);

	// awkward special case
	let node_contents;
	let value;

	const contenteditable = (
		node.name !== 'textarea' &&
		node.name !== 'input' &&
		node.attributes.some((attribute) => attribute.name === 'contenteditable')
	);

	const slot = node.get_static_attribute_value('slot');
	const nearest_inline_component = node.find_nearest(/InlineComponent/);
	if (slot && nearest_inline_component) {
		const slot = node.attributes.find((attribute) => attribute.name === 'slot');
		const slot_name = (slot.chunks[0] as Text).data;
		const target = renderer.targets[renderer.targets.length - 1];
		target.slot_stack.push(slot_name);
		target.slots[slot_name] = '';

		const lets = node.lets;
		const seen = new Set(lets.map(l => l.name.name));

		nearest_inline_component.lets.forEach(l => {
			if (!seen.has(l.name.name)) lets.push(l);
		});

		options.slot_scopes.set(slot_name, get_slot_scope(node.lets));
	}

	const class_expression = node.classes.map((class_directive: Class) => {
		const { expression, name } = class_directive;
		const snippet = expression ? snip(expression) : `#ctx${quote_prop_if_necessary(name)}`;
		return `${snippet} ? "${name}" : ""`;
	}).join(', ');

	let add_class_attribute = class_expression ? true : false;

	if (node.attributes.find(attr => attr.is_spread)) {
		// TODO dry this out
		const args = [];
		node.attributes.forEach(attribute => {
			if (attribute.is_spread) {
				args.push(attribute.expression.node);
			} else {
				if (attribute.name === 'value' && node.name === 'textarea') {
					node_contents = stringify_attribute(attribute, true);
				} else if (attribute.is_true) {
					args.push(x`{ ${attribute.name}: true }`);
				} else if (
					boolean_attributes.has(attribute.name) &&
					attribute.chunks.length === 1 &&
					attribute.chunks[0].type !== 'Text'
				) {
					// a boolean attribute with one non-Text chunk
					args.push(x`{ ${attribute.name}: ${attribute.chunks[0].node} }`);
				} else if (attribute.name === 'class' && class_expression) {
					// Add class expression
					args.push(x`{ ${attribute.name}: [${stringify_class_attribute(attribute)}, ${class_expression}}].join(' ').trim() }`);
				} else {
					args.push(x`{ ${attribute.name}: ${attribute.name === 'class' ? stringify_class_attribute(attribute) : stringify_attribute(attribute, true)} }`);
				}
			}
		});

		renderer.add_expression(x`@spread([${args}])`);
	} else {
		node.attributes.forEach((attribute: Attribute) => {
			if (attribute.type !== 'Attribute') return;

			if (attribute.name === 'value' && node.name === 'textarea') {
				node_contents = stringify_attribute(attribute, true);
			} else if (attribute.is_true) {
				renderer.add_string(` ${attribute.name}`);
			} else if (
				boolean_attributes.has(attribute.name) &&
				attribute.chunks.length === 1 &&
				attribute.chunks[0].type !== 'Text'
			) {
				// a boolean attribute with one non-Text chunk
				throw new Error('here');
				renderer.add_expression(x`${attribute.chunks[0]} ? "${attribute.name}" : ""`);
			} else if (attribute.name === 'class' && class_expression) {
				add_class_attribute = false;
				renderer.add_string(` class="`);
				renderer.add_expression(x`[${stringify_class_attribute(attribute)}, ${class_expression}].join(' ').trim()`);
				renderer.add_string(`"`);
			} else if (attribute.chunks.length === 1 && attribute.chunks[0].type !== 'Text') {
				const { name } = attribute;
				const snippet = attribute.chunks[0].node;
				renderer.add_expression(x`@add_attribute("${name}", ${snippet}, ${boolean_attributes.has(name) ? 1 : 0})`);
			} else {
				renderer.add_string(` ${attribute.name}="`);
				attribute.chunks.forEach(chunk => {
					if (chunk.type === 'Text') renderer.add_string(chunk.data);
					else renderer.add_expression(x`@escape(${chunk.node})`);
				});
				renderer.add_string(`"`);
			}
		});
	}

	node.bindings.forEach(binding => {
		const { name, expression } = binding;

		if (binding.is_readonly) {
			return;
		}

		if (name === 'group') {
			// TODO server-render group bindings
		} else if (contenteditable && (name === 'textContent' || name === 'innerHTML')) {
			node_contents = expression.node;
			value = name === 'textContent' ? x`@escape($$value)` : x`$$value`;
		} else if (binding.name === 'value' && node.name === 'textarea') {
			const snippet = expression.node;
			node_contents = x`${snippet} || ""`;
		} else {
			const snippet = expression.node;
			renderer.add_expression(x`@add_attribute("${name}", ${snippet}, 1)`);
		}
	});

	// if (add_class_attribute) {
	// 	opening_tag += `\${@add_classes([${class_expression}].join(' ').trim())}`;
	// }

	renderer.add_string('>');

	if (node_contents !== undefined) {
		if (contenteditable) {
			renderer.push();
			renderer.render(node.children, options);
			const result = renderer.pop();

			renderer.add_expression(x`($$value => $$value === void 0 ? ${result} : ${node_contents})`);
		} else {
			renderer.add_expression(node_contents);
		}
	} else {
		renderer.render(node.children, options);
	}

	if (!is_void(node.name)) {
		renderer.add_string(`</${node.name}>`);
	}
}
