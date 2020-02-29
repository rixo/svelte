import { S as SvelteComponentDev, i as init, d as dispatch_dev, E as globals, s as safe_not_equal, W as add_render_callback, v as validate_store, r as component_subscribe, o as onMount, e as element, l as space, m as empty, c as claim_element, a as children, b as detach_dev, p as claim_space, f as attr_dev, Q as toggle_class, h as add_location, j as insert_dev, w as mount_component, x as transition_in, y as transition_out, B as check_outros, z as destroy_component, V as binding_callbacks, a4 as bind, T as listen_dev, k as append_dev, A as group_outros, a5 as add_flush_callback } from './index.d7f76d54.js';
import './index.5e2a01ed.js';
import { a as stores$1 } from './app.89b1ed12.js';
import './index.e235fd0f.js';
import { R as Repl } from './Repl.448c617a.js';
import { I as InputOutputToggle } from './InputOutputToggle.de7658d6.js';

const table = [];
for (let n = 0; n < 256; n++) {
	let c = n;
	for (let k = 0; k < 8; k++) {
		c = c & 1 ? 0xEDB88320 ^ (c >>> 1) : c >>> 1;
	}
	table[n] = c;
}

const isMac = typeof navigator !== 'undefined' && navigator.platform === 'MacIntel';

/* src/routes/repl/[id]/index.svelte generated by Svelte v3.12.0 */
const { console: console_1, window: window_1 } = globals;

const file = "src/routes/repl/[id]/index.svelte";

// (222:1) {#if true}
function create_if_block(ctx) {
	var div, t, if_block_anchor, current;

	let repl_1_props = {
		workersUrl: "workers",
		svelteUrl: ctx.svelteUrl,
		rollupUrl: ctx.rollupUrl,
		relaxed: ctx.relaxed,
		fixed: ctx.mobile,
		injectedJS: ctx.mapbox_setup
	};
	var repl_1 = new Repl({ props: repl_1_props, $$inline: true });

	ctx.repl_1_binding(repl_1);

	var if_block = (ctx.mobile) && create_if_block_1(ctx);

	const block = {
		c: function create() {
			div = element("div");
			repl_1.$$.fragment.c();
			t = space();
			if (if_block) if_block.c();
			if_block_anchor = empty();
			this.h();
		},

		l: function claim(nodes) {
			div = claim_element(nodes, "DIV", { class: true }, false);
			var div_nodes = children(div);

			repl_1.$$.fragment.l(div_nodes);
			div_nodes.forEach(detach_dev);
			t = claim_space(nodes);
			if (if_block) if_block.l(nodes);
			if_block_anchor = empty();
			this.h();
		},

		h: function hydrate() {
			attr_dev(div, "class", "viewport svelte-2xo5c6");
			toggle_class(div, "offset", ctx.checked);
			add_location(div, file, 222, 2, 4976);
		},

		m: function mount(target, anchor) {
			insert_dev(target, div, anchor);
			mount_component(repl_1, div, null);
			insert_dev(target, t, anchor);
			if (if_block) if_block.m(target, anchor);
			insert_dev(target, if_block_anchor, anchor);
			current = true;
		},

		p: function update(changed, ctx) {
			var repl_1_changes = {};
			if (changed.svelteUrl) repl_1_changes.svelteUrl = ctx.svelteUrl;
			if (changed.relaxed) repl_1_changes.relaxed = ctx.relaxed;
			if (changed.mobile) repl_1_changes.fixed = ctx.mobile;
			repl_1.$set(repl_1_changes);

			if (changed.checked) {
				toggle_class(div, "offset", ctx.checked);
			}

			if (ctx.mobile) {
				if (if_block) {
					if_block.p(changed, ctx);
					transition_in(if_block, 1);
				} else {
					if_block = create_if_block_1(ctx);
					if_block.c();
					transition_in(if_block, 1);
					if_block.m(if_block_anchor.parentNode, if_block_anchor);
				}
			} else if (if_block) {
				group_outros();
				transition_out(if_block, 1, 1, () => {
					if_block = null;
				});
				check_outros();
			}
		},

		i: function intro(local) {
			if (current) return;
			transition_in(repl_1.$$.fragment, local);

			transition_in(if_block);
			current = true;
		},

		o: function outro(local) {
			transition_out(repl_1.$$.fragment, local);
			transition_out(if_block);
			current = false;
		},

		d: function destroy(detaching) {
			if (detaching) {
				detach_dev(div);
			}

			ctx.repl_1_binding(null);

			destroy_component(repl_1);

			if (detaching) {
				detach_dev(t);
			}

			if (if_block) if_block.d(detaching);

			if (detaching) {
				detach_dev(if_block_anchor);
			}
		}
	};
	dispatch_dev("SvelteRegisterBlock", { block, id: create_if_block.name, type: "if", source: "(222:1) {#if true}", ctx });
	return block;
}

// (235:2) {#if mobile}
function create_if_block_1(ctx) {
	var updating_checked, current;

	function inputoutputtoggle_checked_binding(value) {
		ctx.inputoutputtoggle_checked_binding.call(null, value);
		updating_checked = true;
		add_flush_callback(() => updating_checked = false);
	}

	let inputoutputtoggle_props = {};
	if (ctx.checked !== void 0) {
		inputoutputtoggle_props.checked = ctx.checked;
	}
	var inputoutputtoggle = new InputOutputToggle({
		props: inputoutputtoggle_props,
		$$inline: true
	});

	binding_callbacks.push(() => bind(inputoutputtoggle, 'checked', inputoutputtoggle_checked_binding));

	const block = {
		c: function create() {
			inputoutputtoggle.$$.fragment.c();
		},

		l: function claim(nodes) {
			inputoutputtoggle.$$.fragment.l(nodes);
		},

		m: function mount(target, anchor) {
			mount_component(inputoutputtoggle, target, anchor);
			current = true;
		},

		p: function update(changed, ctx) {
			var inputoutputtoggle_changes = {};
			if (!updating_checked && changed.checked) {
				inputoutputtoggle_changes.checked = ctx.checked;
			}
			inputoutputtoggle.$set(inputoutputtoggle_changes);
		},

		i: function intro(local) {
			if (current) return;
			transition_in(inputoutputtoggle.$$.fragment, local);

			current = true;
		},

		o: function outro(local) {
			transition_out(inputoutputtoggle.$$.fragment, local);
			current = false;
		},

		d: function destroy(detaching) {
			destroy_component(inputoutputtoggle, detaching);
		}
	};
	dispatch_dev("SvelteRegisterBlock", { block, id: create_if_block_1.name, type: "if", source: "(235:2) {#if mobile}", ctx });
	return block;
}

function create_fragment(ctx) {
	var title_value, meta0, meta1, meta2, t, div, current, dispose;

	add_render_callback(ctx.onwindowresize);

	document.title = title_value = "" + ctx.name + " • REPL • Svelte";

	var if_block =  create_if_block(ctx);

	const block = {
		c: function create() {
			meta0 = element("meta");
			meta1 = element("meta");
			meta2 = element("meta");
			t = space();
			div = element("div");
			if (if_block) if_block.c();
			this.h();
		},

		l: function claim(nodes) {
			meta0 = claim_element(nodes, "META", { name: true, content: true }, false);
			var meta0_nodes = children(meta0);

			meta0_nodes.forEach(detach_dev);

			meta1 = claim_element(nodes, "META", { name: true, content: true }, false);
			var meta1_nodes = children(meta1);

			meta1_nodes.forEach(detach_dev);

			meta2 = claim_element(nodes, "META", { name: true, content: true }, false);
			var meta2_nodes = children(meta2);

			meta2_nodes.forEach(detach_dev);
			t = claim_space(nodes);

			div = claim_element(nodes, "DIV", { class: true }, false);
			var div_nodes = children(div);

			if (if_block) if_block.l(div_nodes);
			div_nodes.forEach(detach_dev);
			this.h();
		},

		h: function hydrate() {
			attr_dev(meta0, "name", "twitter:title");
			attr_dev(meta0, "content", "Svelte REPL");
			add_location(meta0, file, 205, 1, 4542);
			attr_dev(meta1, "name", "twitter:description");
			attr_dev(meta1, "content", "Cybernetically enhanced web apps");
			add_location(meta1, file, 206, 1, 4593);
			attr_dev(meta2, "name", "Description");
			attr_dev(meta2, "content", "Interactive Svelte playground");
			add_location(meta2, file, 207, 1, 4671);
			attr_dev(div, "class", "repl-outer " + (zen_mode ? 'zen-mode' : '') + " svelte-2xo5c6");
			toggle_class(div, "mobile", ctx.mobile);
			add_location(div, file, 212, 0, 4795);
			dispose = listen_dev(window_1, "resize", ctx.onwindowresize);
		},

		m: function mount(target, anchor) {
			append_dev(document.head, meta0);
			append_dev(document.head, meta1);
			append_dev(document.head, meta2);
			insert_dev(target, t, anchor);
			insert_dev(target, div, anchor);
			if (if_block) if_block.m(div, null);
			current = true;
		},

		p: function update(changed, ctx) {
			if ((!current || changed.name) && title_value !== (title_value = "" + ctx.name + " • REPL • Svelte")) {
				document.title = title_value;
			}

			if_block.p(changed, ctx);

			if (changed.mobile) {
				toggle_class(div, "mobile", ctx.mobile);
			}
		},

		i: function intro(local) {
			if (current) return;
			transition_in(if_block);
			current = true;
		},

		o: function outro(local) {
			transition_out(if_block);
			current = false;
		},

		d: function destroy(detaching) {
			detach_dev(meta0);
			detach_dev(meta1);
			detach_dev(meta2);

			if (detaching) {
				detach_dev(t);
				detach_dev(div);
			}

			if (if_block) if_block.d();
			dispose();
		}
	};
	dispatch_dev("SvelteRegisterBlock", { block, id: create_fragment.name, type: "component", source: "", ctx });
	return block;
}

function preload({ params, query }) {
	return {
		version: query.version || '3',
		id: params.id
	};
}

let zen_mode = true;

function instance($$self, $$props, $$invalidate) {
	let $session;

	

	let { version, id } = $$props;

	const { session } = stores$1(); validate_store(session, 'session'); component_subscribe($$self, session, $$value => { $session = $$value; $$invalidate('$session', $session); });

	let repl;
	let gist;
	let name = 'Loading...';
	let is_relaxed_gist = false;
	let width =  window.innerWidth ;
	let checked = false;

	function update_query_string(version) {
		const params = [];

		if (version !== 'latest') params.push(`version=${version}`);

		const url = params.length > 0
			? `repl/${id}?${params.join('&')}`
			: `repl/${id}`;

		history.replaceState({}, 'x', url);
	}

	function fetch_gist(id) {
		if (gist && gist.uid === id) {
			// if the id changed because we just forked, don't refetch
			return;
		}

		// TODO handle `relaxed` logic
		fetch(`repl/${id}.json`).then(r => {
			if (r.ok) {
				r.json().then(data => {
					$$invalidate('gist', gist = data);
					$$invalidate('name', name = data.name);

					$$invalidate('is_relaxed_gist', is_relaxed_gist = data.relaxed);

					const components = data.files.map(file => {
						let [name, type] = file.name.split('.');
						if (type === 'html') type = 'svelte'; // TODO do this on the server
						return { name, type, source: file.source };
					});

					components.sort((a, b) => {
						if (a.name === 'Game' && a.type === 'svelte') return -1;
						if (b.name === 'Game' && b.type === 'svelte') return 1;
						if (a.name === 'App' && a.type === 'svelte') return -1;
						if (b.name === 'App' && b.type === 'svelte') return 1;

						if (a.type !== b.type) return a.type === 'svelte' ? -1 : 1;

						return a.name < b.name ? -1 : 1;
					});

					repl.set({ components });
				});
			} else {
				console.warn('TODO: 404 Gist');
			}
		});
	}

	onMount(() => {
		if (version !== 'local') {
			fetch(`https://unpkg.com/svelte@${version || '3'}/package.json`)
				.then(r => r.json())
				.then(pkg => {
					$$invalidate('version', version = pkg.version);
				});
		}
	});

	const rollupUrl = `https://unpkg.com/rollup@1/dist/rollup.browser.js`;

	// needed for context API example
	const mapbox_setup = `window.MAPBOX_ACCESS_TOKEN = undefined;`;

	const writable_props = ['version', 'id'];
	Object.keys($$props).forEach(key => {
		if (!writable_props.includes(key) && !key.startsWith('$$')) console_1.warn(`<Index> was created with unknown prop '${key}'`);
	});

	function onwindowresize() {
		width = window_1.innerWidth; $$invalidate('width', width);
	}

	function repl_1_binding($$value) {
		binding_callbacks[$$value ? 'unshift' : 'push'](() => {
			$$invalidate('repl', repl = $$value);
		});
	}

	function inputoutputtoggle_checked_binding(value) {
		checked = value;
		$$invalidate('checked', checked);
	}

	$$self.$set = $$props => {
		if ('version' in $$props) $$invalidate('version', version = $$props.version);
		if ('id' in $$props) $$invalidate('id', id = $$props.id);
	};

	$$self.$capture_state = () => {
		return { version, id, repl, gist, name, zen_mode, is_relaxed_gist, width, checked, svelteUrl, mobile, relaxed, $session };
	};

	$$self.$inject_state = $$props => {
		if ('version' in $$props) $$invalidate('version', version = $$props.version);
		if ('id' in $$props) $$invalidate('id', id = $$props.id);
		if ('repl' in $$props) $$invalidate('repl', repl = $$props.repl);
		if ('gist' in $$props) $$invalidate('gist', gist = $$props.gist);
		if ('name' in $$props) $$invalidate('name', name = $$props.name);
		if ('zen_mode' in $$props) $$invalidate('zen_mode', zen_mode = $$props.zen_mode);
		if ('is_relaxed_gist' in $$props) $$invalidate('is_relaxed_gist', is_relaxed_gist = $$props.is_relaxed_gist);
		if ('width' in $$props) $$invalidate('width', width = $$props.width);
		if ('checked' in $$props) $$invalidate('checked', checked = $$props.checked);
		if ('svelteUrl' in $$props) $$invalidate('svelteUrl', svelteUrl = $$props.svelteUrl);
		if ('mobile' in $$props) $$invalidate('mobile', mobile = $$props.mobile);
		if ('relaxed' in $$props) $$invalidate('relaxed', relaxed = $$props.relaxed);
		if ('$session' in $$props) session.set($session);
	};

	let svelteUrl, mobile, relaxed;

	$$self.$$.update = ($$dirty = { version: 1, id: 1, width: 1, is_relaxed_gist: 1, $session: 1, gist: 1 }) => {
		if ($$dirty.version) { if (typeof history !== 'undefined') update_query_string(version); }
		if ($$dirty.id) { fetch_gist(id); }
		if ($$dirty.version) { $$invalidate('svelteUrl', svelteUrl =  version === 'local' ?
				`${location.origin}/repl/local` :
				`https://unpkg.com/svelte@${version}`); }
		if ($$dirty.width) { $$invalidate('mobile', mobile = width < 540); }
		if ($$dirty.is_relaxed_gist || $$dirty.$session || $$dirty.gist) { $$invalidate('relaxed', relaxed = is_relaxed_gist || ($session.user && gist && $session.user.uid === gist.owner)); }
	};

	return {
		version,
		id,
		session,
		repl,
		name,
		width,
		checked,
		rollupUrl,
		mapbox_setup,
		svelteUrl,
		mobile,
		relaxed,
		onwindowresize,
		repl_1_binding,
		inputoutputtoggle_checked_binding
	};
}

class Index extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, ["version", "id"]);
		dispatch_dev("SvelteRegisterComponent", { component: this, tagName: "Index", options, id: create_fragment.name });

		const { ctx } = this.$$;
		const props = options.props || {};
		if (ctx.version === undefined && !('version' in props)) {
			console_1.warn("<Index> was created without expected prop 'version'");
		}
		if (ctx.id === undefined && !('id' in props)) {
			console_1.warn("<Index> was created without expected prop 'id'");
		}
	}

	get version() {
		throw new Error("<Index>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set version(value) {
		throw new Error("<Index>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get id() {
		throw new Error("<Index>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set id(value) {
		throw new Error("<Index>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

export default Index;
export { preload };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguM2QyZjQ5MGUuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9kby1ub3QtemlwL2Rpc3QvaW5kZXguZXMuanMiLCIuLi8uLi8uLi9zcmMvdXRpbHMvY29tcGF0LmpzIiwiLi4vLi4vLi4vc3JjL3JvdXRlcy9yZXBsL1tpZF0vaW5kZXguc3ZlbHRlIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHRhYmxlID0gW107XG5mb3IgKGxldCBuID0gMDsgbiA8IDI1NjsgbisrKSB7XG5cdGxldCBjID0gbjtcblx0Zm9yIChsZXQgayA9IDA7IGsgPCA4OyBrKyspIHtcblx0XHRjID0gYyAmIDEgPyAweEVEQjg4MzIwIF4gKGMgPj4+IDEpIDogYyA+Pj4gMTtcblx0fVxuXHR0YWJsZVtuXSA9IGM7XG59XG5cbnZhciBjcmMzMiA9IGJ5dGVzID0+IHtcblx0bGV0IHN1bSA9IC0xO1xuXHRmb3IgKGNvbnN0IGJ5dGUgb2YgYnl0ZXMpIHtcblx0XHRzdW0gPSAoc3VtID4+PiA4KSBeIHRhYmxlWyhzdW0gXiBieXRlKSAmIDB4RkZdO1xuXHR9XG5cdHJldHVybiBzdW0gXiAtMTtcbn07XG5cbmNvbnN0IGludCA9IChuLCBsZW5ndGgpID0+IHtcblx0Y29uc3Qgb3V0ID0gW107XG5cdHdoaWxlIChsZW5ndGgtLSkge1xuXHRcdG91dC5wdXNoKG4gJiAweEZGKTtcblx0XHRuID4+Pj0gODtcblx0fVxuXHRyZXR1cm4gb3V0O1xufTtcblxuY29uc3QgdG9CeXRlcyA9IGRhdGEgPT4gdHlwZW9mIGRhdGEgPT09ICdzdHJpbmcnID8gWy4uLmRhdGFdLm1hcChjaGFyID0+IGNoYXIuY2hhckNvZGVBdCgwKSkgOiBkYXRhO1xuXG52YXIgdG9BcnJheSA9IGZpbGVzID0+IHtcblx0bGV0IGZpbGVEYXRhID0gW107XG5cdGNvbnN0IGNlbnRyYWxEaXJlY3RvcnkgPSBbXTtcblx0Zm9yIChjb25zdCB7IHBhdGgsIGRhdGEgfSBvZiBmaWxlcykge1xuXHRcdGNvbnN0IGRhdGFCeXRlcyA9IHRvQnl0ZXMoZGF0YSk7XG5cdFx0Y29uc3QgcGF0aEJ5dGVzID0gdG9CeXRlcyhwYXRoKTtcblx0XHRjb25zdCBjb21tb25IZWFkZXIgPSBbMHgwQSwgMHgwMCwgMHgwMCwgMHgwMCwgMHgwMCwgMHgwMCwgMHgwMCwgMHgwMCwgMHgwMCwgMHgwMCwgLi4uaW50KGNyYzMyKGRhdGFCeXRlcyksIDQpLCAuLi5pbnQoZGF0YUJ5dGVzLmxlbmd0aCwgNCksIC4uLmludChkYXRhQnl0ZXMubGVuZ3RoLCA0KSwgLi4uaW50KHBhdGhCeXRlcy5sZW5ndGgsIDIpLCAweDAwLCAweDAwXTtcblx0XHRjZW50cmFsRGlyZWN0b3J5LnB1c2goMHg1MCwgMHg0QiwgMHgwMSwgMHgwMiwgMHgxNCwgMHgwMCwgLi4uY29tbW9uSGVhZGVyLCAweDAwLCAweDAwLCAweDAwLCAweDAwLCAweDAwLCAweDAwLCAweDAwLCAweDAwLCAweDAwLCAweDAwLCAuLi5pbnQoZmlsZURhdGEubGVuZ3RoLCA0KSwgLi4ucGF0aEJ5dGVzKTtcblx0XHRmaWxlRGF0YSA9IFsuLi5maWxlRGF0YSwgMHg1MCwgMHg0QiwgMHgwMywgMHgwNCwgLi4uY29tbW9uSGVhZGVyLCAuLi5wYXRoQnl0ZXMsIC4uLmRhdGFCeXRlc107XG5cdH1cblx0cmV0dXJuIFsuLi5maWxlRGF0YSwgLi4uY2VudHJhbERpcmVjdG9yeSwgMHg1MCwgMHg0QiwgMHgwNSwgMHgwNiwgMHgwMCwgMHgwMCwgMHgwMCwgMHgwMCwgLi4uaW50KGZpbGVzLmxlbmd0aCwgMiksIC4uLmludChmaWxlcy5sZW5ndGgsIDIpLCAuLi5pbnQoY2VudHJhbERpcmVjdG9yeS5sZW5ndGgsIDQpLCAuLi5pbnQoZmlsZURhdGEubGVuZ3RoLCA0KSwgMHgwMCwgMHgwMF07XG59O1xuXG52YXIgdG9CbG9iID0gZmlsZXMgPT4gbmV3IEJsb2IoW1VpbnQ4QXJyYXkuZnJvbSh0b0FycmF5KGZpbGVzKSldLCB7IHR5cGU6ICdhcHBsaWNhdGlvbi96aXAnIH0pO1xuXG52YXIgdG9CdWZmZXIgPSBmaWxlcyA9PiBCdWZmZXIuZnJvbSh0b0FycmF5KGZpbGVzKSk7XG5cbnZhciB0b0F1dG8gPSBmaWxlcyA9PiAodHlwZW9mIEJsb2IgPT09ICd1bmRlZmluZWQnID8gdG9CdWZmZXIgOiB0b0Jsb2IpKGZpbGVzKTtcblxuZXhwb3J0IHsgdG9BcnJheSwgdG9BdXRvLCB0b0Jsb2IsIHRvQnVmZmVyIH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5lcy5qcy5tYXBcbiIsImV4cG9ydCBjb25zdCBpc01hYyA9IHR5cGVvZiBuYXZpZ2F0b3IgIT09ICd1bmRlZmluZWQnICYmIG5hdmlnYXRvci5wbGF0Zm9ybSA9PT0gJ01hY0ludGVsJztcbiIsIjxzY3JpcHQgY29udGV4dD1cIm1vZHVsZVwiPlxuXHRleHBvcnQgZnVuY3Rpb24gcHJlbG9hZCh7IHBhcmFtcywgcXVlcnkgfSkge1xuXHRcdHJldHVybiB7XG5cdFx0XHR2ZXJzaW9uOiBxdWVyeS52ZXJzaW9uIHx8ICczJyxcblx0XHRcdGlkOiBwYXJhbXMuaWRcblx0XHR9O1xuXHR9XG48L3NjcmlwdD5cblxuPHNjcmlwdD5cblx0aW1wb3J0IFJlcGwgZnJvbSAnQHN2ZWx0ZWpzL3N2ZWx0ZS1yZXBsJztcblx0aW1wb3J0IHsgb25Nb3VudCB9IGZyb20gJ3N2ZWx0ZSc7XG5cdGltcG9ydCB7IGdvdG8sIHN0b3JlcyB9IGZyb20gJ0BzYXBwZXIvYXBwJztcblx0aW1wb3J0IElucHV0T3V0cHV0VG9nZ2xlIGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvUmVwbC9JbnB1dE91dHB1dFRvZ2dsZS5zdmVsdGUnO1xuXHRpbXBvcnQgQXBwQ29udHJvbHMgZnJvbSAnLi9fY29tcG9uZW50cy9BcHBDb250cm9scy9pbmRleC5zdmVsdGUnO1xuXG5cdGV4cG9ydCBsZXQgdmVyc2lvbjtcblx0ZXhwb3J0IGxldCBpZDtcblxuXHRjb25zdCB7IHNlc3Npb24gfSA9IHN0b3JlcygpO1xuXG5cdGxldCByZXBsO1xuXHRsZXQgZ2lzdDtcblx0bGV0IG5hbWUgPSAnTG9hZGluZy4uLic7XG5cdGxldCB6ZW5fbW9kZSA9IHRydWU7XG5cdGxldCBpc19yZWxheGVkX2dpc3QgPSBmYWxzZTtcblx0bGV0IHdpZHRoID0gcHJvY2Vzcy5icm93c2VyID8gd2luZG93LmlubmVyV2lkdGggOiAxMDAwO1xuXHRsZXQgY2hlY2tlZCA9IGZhbHNlO1xuXG5cdGZ1bmN0aW9uIHVwZGF0ZV9xdWVyeV9zdHJpbmcodmVyc2lvbikge1xuXHRcdGNvbnN0IHBhcmFtcyA9IFtdO1xuXG5cdFx0aWYgKHZlcnNpb24gIT09ICdsYXRlc3QnKSBwYXJhbXMucHVzaChgdmVyc2lvbj0ke3ZlcnNpb259YCk7XG5cblx0XHRjb25zdCB1cmwgPSBwYXJhbXMubGVuZ3RoID4gMFxuXHRcdFx0PyBgcmVwbC8ke2lkfT8ke3BhcmFtcy5qb2luKCcmJyl9YFxuXHRcdFx0OiBgcmVwbC8ke2lkfWA7XG5cblx0XHRoaXN0b3J5LnJlcGxhY2VTdGF0ZSh7fSwgJ3gnLCB1cmwpO1xuXHR9XG5cblx0JDogaWYgKHR5cGVvZiBoaXN0b3J5ICE9PSAndW5kZWZpbmVkJykgdXBkYXRlX3F1ZXJ5X3N0cmluZyh2ZXJzaW9uKTtcblxuXHRmdW5jdGlvbiBmZXRjaF9naXN0KGlkKSB7XG5cdFx0aWYgKGdpc3QgJiYgZ2lzdC51aWQgPT09IGlkKSB7XG5cdFx0XHQvLyBpZiB0aGUgaWQgY2hhbmdlZCBiZWNhdXNlIHdlIGp1c3QgZm9ya2VkLCBkb24ndCByZWZldGNoXG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0Ly8gVE9ETyBoYW5kbGUgYHJlbGF4ZWRgIGxvZ2ljXG5cdFx0ZmV0Y2goYHJlcGwvJHtpZH0uanNvbmApLnRoZW4ociA9PiB7XG5cdFx0XHRpZiAoci5vaykge1xuXHRcdFx0XHRyLmpzb24oKS50aGVuKGRhdGEgPT4ge1xuXHRcdFx0XHRcdGdpc3QgPSBkYXRhO1xuXHRcdFx0XHRcdG5hbWUgPSBkYXRhLm5hbWU7XG5cblx0XHRcdFx0XHRpc19yZWxheGVkX2dpc3QgPSBkYXRhLnJlbGF4ZWQ7XG5cblx0XHRcdFx0XHRjb25zdCBjb21wb25lbnRzID0gZGF0YS5maWxlcy5tYXAoZmlsZSA9PiB7XG5cdFx0XHRcdFx0XHRsZXQgW25hbWUsIHR5cGVdID0gZmlsZS5uYW1lLnNwbGl0KCcuJyk7XG5cdFx0XHRcdFx0XHRpZiAodHlwZSA9PT0gJ2h0bWwnKSB0eXBlID0gJ3N2ZWx0ZSc7IC8vIFRPRE8gZG8gdGhpcyBvbiB0aGUgc2VydmVyXG5cdFx0XHRcdFx0XHRyZXR1cm4geyBuYW1lLCB0eXBlLCBzb3VyY2U6IGZpbGUuc291cmNlIH07XG5cdFx0XHRcdFx0fSk7XG5cblx0XHRcdFx0XHRjb21wb25lbnRzLnNvcnQoKGEsIGIpID0+IHtcblx0XHRcdFx0XHRcdGlmIChhLm5hbWUgPT09ICdHYW1lJyAmJiBhLnR5cGUgPT09ICdzdmVsdGUnKSByZXR1cm4gLTE7XG5cdFx0XHRcdFx0XHRpZiAoYi5uYW1lID09PSAnR2FtZScgJiYgYi50eXBlID09PSAnc3ZlbHRlJykgcmV0dXJuIDE7XG5cdFx0XHRcdFx0XHRpZiAoYS5uYW1lID09PSAnQXBwJyAmJiBhLnR5cGUgPT09ICdzdmVsdGUnKSByZXR1cm4gLTE7XG5cdFx0XHRcdFx0XHRpZiAoYi5uYW1lID09PSAnQXBwJyAmJiBiLnR5cGUgPT09ICdzdmVsdGUnKSByZXR1cm4gMTtcblxuXHRcdFx0XHRcdFx0aWYgKGEudHlwZSAhPT0gYi50eXBlKSByZXR1cm4gYS50eXBlID09PSAnc3ZlbHRlJyA/IC0xIDogMTtcblxuXHRcdFx0XHRcdFx0cmV0dXJuIGEubmFtZSA8IGIubmFtZSA/IC0xIDogMTtcblx0XHRcdFx0XHR9KTtcblxuXHRcdFx0XHRcdHJlcGwuc2V0KHsgY29tcG9uZW50cyB9KTtcblx0XHRcdFx0fSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRjb25zb2xlLndhcm4oJ1RPRE86IDQwNCBHaXN0Jyk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdH1cblxuXHQkOiBpZiAocHJvY2Vzcy5icm93c2VyKSBmZXRjaF9naXN0KGlkKTtcblxuXHRvbk1vdW50KCgpID0+IHtcblx0XHRpZiAodmVyc2lvbiAhPT0gJ2xvY2FsJykge1xuXHRcdFx0ZmV0Y2goYGh0dHBzOi8vdW5wa2cuY29tL3N2ZWx0ZUAke3ZlcnNpb24gfHwgJzMnfS9wYWNrYWdlLmpzb25gKVxuXHRcdFx0XHQudGhlbihyID0+IHIuanNvbigpKVxuXHRcdFx0XHQudGhlbihwa2cgPT4ge1xuXHRcdFx0XHRcdHZlcnNpb24gPSBwa2cudmVyc2lvbjtcblx0XHRcdFx0fSk7XG5cdFx0fVxuXHR9KTtcblxuXHRmdW5jdGlvbiBoYW5kbGVfZm9yayhldmVudCkge1xuXHRcdGNvbnNvbGUubG9nKCc+IGhhbmRsZV9mb3JrJywgZXZlbnQpO1xuXHRcdGdpc3QgPSBldmVudC5kZXRhaWwuZ2lzdDtcblx0XHRnb3RvKGAvcmVwbC8ke2dpc3QudWlkfT92ZXJzaW9uPSR7dmVyc2lvbn1gKTtcblx0fVxuXG5cdCQ6IHN2ZWx0ZVVybCA9IHByb2Nlc3MuYnJvd3NlciAmJiB2ZXJzaW9uID09PSAnbG9jYWwnID9cblx0XHRgJHtsb2NhdGlvbi5vcmlnaW59L3JlcGwvbG9jYWxgIDpcblx0XHRgaHR0cHM6Ly91bnBrZy5jb20vc3ZlbHRlQCR7dmVyc2lvbn1gO1xuXG5cdGNvbnN0IHJvbGx1cFVybCA9IGBodHRwczovL3VucGtnLmNvbS9yb2xsdXBAMS9kaXN0L3JvbGx1cC5icm93c2VyLmpzYDtcblxuXHQvLyBuZWVkZWQgZm9yIGNvbnRleHQgQVBJIGV4YW1wbGVcblx0Y29uc3QgbWFwYm94X3NldHVwID0gYHdpbmRvdy5NQVBCT1hfQUNDRVNTX1RPS0VOID0gcHJvY2Vzcy5lbnYuTUFQQk9YX0FDQ0VTU19UT0tFTjtgO1xuXG5cdCQ6IG1vYmlsZSA9IHdpZHRoIDwgNTQwO1xuXG5cdCQ6IHJlbGF4ZWQgPSBpc19yZWxheGVkX2dpc3QgfHwgKCRzZXNzaW9uLnVzZXIgJiYgZ2lzdCAmJiAkc2Vzc2lvbi51c2VyLnVpZCA9PT0gZ2lzdC5vd25lcik7XG48L3NjcmlwdD5cblxuPHN0eWxlPlxuXHQucmVwbC1vdXRlciB7XG5cdFx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHRcdGhlaWdodDogY2FsYygxMDB2aCAtIHZhcigtLW5hdi1oKSk7XG5cdFx0LS1hcHAtY29udHJvbHMtaDogNS42cmVtO1xuXHRcdC0tcGFuZS1jb250cm9scy1oOiA0LjJyZW07XG5cdFx0b3ZlcmZsb3c6IGhpZGRlbjtcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrKTtcblx0XHRwYWRkaW5nOiB2YXIoLS1hcHAtY29udHJvbHMtaCkgMCAwIDA7XG5cdFx0LyogbWFyZ2luOiAwIGNhbGModmFyKC0tc2lkZS1uYXYpICogLTEpOyAqL1xuXHRcdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG5cdH1cblxuXHQudmlld3BvcnQge1xuXHRcdHdpZHRoOiAxMDAlO1xuXHRcdGhlaWdodDogMTAwJTtcblx0fVxuXG5cdC5tb2JpbGUgLnZpZXdwb3J0IHtcblx0XHR3aWR0aDogMjAwJTtcblx0XHRoZWlnaHQ6IGNhbGMoMTAwJSAtIDQycHgpO1xuXHRcdHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzO1xuXHR9XG5cblx0Lm1vYmlsZSAub2Zmc2V0IHtcblx0XHR0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAwKTtcblx0fVxuXG5cdC8qIHRlbXAgZml4IGZvciAjMjQ5OSBhbmQgIzI1NTAgd2hpbGUgd2FpdGluZyBmb3IgYSBmaXggZm9yIGh0dHBzOi8vZ2l0aHViLmNvbS9zdmVsdGVqcy9zdmVsdGUtcmVwbC9pc3N1ZXMvOCAqL1xuXG5cdC52aWV3cG9ydCA6Z2xvYmFsKC50YWItY29udGVudCksXG5cdC52aWV3cG9ydCA6Z2xvYmFsKC50YWItY29udGVudC52aXNpYmxlKSB7XG5cdFx0cG9pbnRlci1ldmVudHM6IGFsbDtcblx0XHRvcGFjaXR5OiAxO1xuXHR9XG5cdC52aWV3cG9ydCA6Z2xvYmFsKC50YWItY29udGVudCkge1xuXHRcdHZpc2liaWxpdHk6IGhpZGRlbjtcblx0fVxuXHQudmlld3BvcnQgOmdsb2JhbCgudGFiLWNvbnRlbnQudmlzaWJsZSkge1xuXHRcdHZpc2liaWxpdHk6IHZpc2libGU7XG5cdH1cblxuXHQuemVuLW1vZGUge1xuXHRcdHBvc2l0aW9uOiBmaXhlZDtcblx0XHR3aWR0aDogMTAwJTtcblx0XHRoZWlnaHQ6IDEwMCU7XG5cdFx0dG9wOiAwO1xuXHRcdHotaW5kZXg6IDExMTtcblx0fVxuXG5cdC5wYW5lIHsgd2lkdGg6IDEwMCU7IGhlaWdodDogMTAwJSB9XG5cblx0LmxvYWRpbmcge1xuXHRcdHRleHQtYWxpZ246IGNlbnRlcjtcblx0XHRjb2xvcjogdmFyKC0tc2Vjb25kKTtcblx0XHRmb250LXdlaWdodDogNDAwO1xuXHRcdG1hcmdpbjogMmVtIDAgMCAwO1xuXHRcdG9wYWNpdHk6IDA7XG5cdFx0YW5pbWF0aW9uOiBmYWRlLWluIC40cztcblx0XHRhbmltYXRpb24tZGVsYXk6IC4ycztcblx0XHRhbmltYXRpb24tZmlsbC1tb2RlOiBib3RoO1xuXHR9XG5cblx0QGtleWZyYW1lcyBmYWRlLWluIHtcblx0XHQwJSAgIHsgb3BhY2l0eTogMCB9XG5cdFx0MTAwJSB7IG9wYWNpdHk6IDEgfVxuXHR9XG5cblx0LmlucHV0IHtcblx0XHRwYWRkaW5nOiAyLjRlbSAwIDAgMDtcblx0fVxuXG5cdC5yZXBsLW91dGVyIHtcblx0XHRwYWRkaW5nOiAwO1xuXHR9XG5cdC5yZXBsLW91dGVyIDpnbG9iYWwoLmNvbXBvbmVudC1zZWxlY3RvciksXG5cdC5yZXBsLW91dGVyIDpnbG9iYWwoLnZpZXctdG9nZ2xlKSB7XG5cdFx0ZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xuXHR9XG5cdC5yZXBsLW91dGVyIDpnbG9iYWwoLnRhYi1jb250ZW50KSB7XG5cdFx0aGVpZ2h0OiAxMDAlICFpbXBvcnRhbnQ7XG5cdH1cblx0LnJlcGwtb3V0ZXIgOmdsb2JhbCguY29udGFpbmVyIHNlY3Rpb24pIHtcblx0XHRwYWRkaW5nLXRvcDogMCAhaW1wb3J0YW50O1xuXHR9XG48L3N0eWxlPlxuXG48c3ZlbHRlOmhlYWQ+XG5cdDx0aXRsZT57bmFtZX0g4oCiIFJFUEwg4oCiIFN2ZWx0ZTwvdGl0bGU+XG5cblx0PG1ldGEgbmFtZT1cInR3aXR0ZXI6dGl0bGVcIiBjb250ZW50PVwiU3ZlbHRlIFJFUExcIj5cblx0PG1ldGEgbmFtZT1cInR3aXR0ZXI6ZGVzY3JpcHRpb25cIiBjb250ZW50PVwiQ3liZXJuZXRpY2FsbHkgZW5oYW5jZWQgd2ViIGFwcHNcIj5cblx0PG1ldGEgbmFtZT1cIkRlc2NyaXB0aW9uXCIgY29udGVudD1cIkludGVyYWN0aXZlIFN2ZWx0ZSBwbGF5Z3JvdW5kXCI+XG48L3N2ZWx0ZTpoZWFkPlxuXG48c3ZlbHRlOndpbmRvdyBiaW5kOmlubmVyV2lkdGg9e3dpZHRofS8+XG5cbjxkaXYgY2xhc3M9XCJyZXBsLW91dGVyIHt6ZW5fbW9kZSA/ICd6ZW4tbW9kZScgOiAnJ31cIiBjbGFzczptb2JpbGU+XG5cdDwhLS0gPEFwcENvbnRyb2xzXG5cdFx0e2dpc3R9XG5cdFx0e3JlcGx9XG5cdFx0YmluZDpuYW1lXG5cdFx0YmluZDp6ZW5fbW9kZVxuXHRcdG9uOmZvcmtlZD17aGFuZGxlX2Zvcmt9XG5cdC8+IC0tPlxuXG5cdHsjaWYgcHJvY2Vzcy5icm93c2VyfVxuXHRcdDxkaXYgY2xhc3M9XCJ2aWV3cG9ydFwiIGNsYXNzOm9mZnNldD17Y2hlY2tlZH0+XG5cdFx0XHQ8UmVwbFxuXHRcdFx0XHRiaW5kOnRoaXM9e3JlcGx9XG5cdFx0XHRcdHdvcmtlcnNVcmw9XCJ3b3JrZXJzXCJcblx0XHRcdFx0e3N2ZWx0ZVVybH1cblx0XHRcdFx0e3JvbGx1cFVybH1cblx0XHRcdFx0e3JlbGF4ZWR9XG5cdFx0XHRcdGZpeGVkPXttb2JpbGV9XG5cdFx0XHRcdGluamVjdGVkSlM9e21hcGJveF9zZXR1cH1cblx0XHRcdC8+XG5cdFx0PC9kaXY+XG5cblx0XHR7I2lmIG1vYmlsZX1cblx0XHRcdDxJbnB1dE91dHB1dFRvZ2dsZSBiaW5kOmNoZWNrZWQvPlxuXHRcdHsvaWZ9XG5cdHsvaWZ9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
