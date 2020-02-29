import { S as SvelteComponentDev, i as init, d as dispatch_dev, s as safe_not_equal, n as noop } from './index.d7f76d54.js';
import './index.5e2a01ed.js';
import { g as goto } from './app.26cd5c44.js';
import './index.e235fd0f.js';

/* src/routes/index.svelte generated by Svelte v3.12.0 */

function create_fragment(ctx) {
	const block = {
		c: noop,
		l: noop,
		m: noop,
		p: noop,
		i: noop,
		o: noop,
		d: noop
	};
	dispatch_dev("SvelteRegisterBlock", { block, id: create_fragment.name, type: "component", source: "", ctx });
	return block;
}

const version = '3.15.0';
const url = `/repl/hello-world?version=${version}`;
function preload() {
	this.redirect(302, url);
	return {}
}

function instance($$self) {
	if (typeof window !== 'undefined') {
		goto(url);
	}

	$$self.$capture_state = () => {
		return {};
	};

	$$self.$inject_state = $$props => {};

	return {};
}

class Index extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, []);
		dispatch_dev("SvelteRegisterComponent", { component: this, tagName: "Index", options, id: create_fragment.name });
	}
}

export default Index;
export { preload };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguNTg1ZDdiOWYuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9yb3V0ZXMvaW5kZXguc3ZlbHRlIl0sInNvdXJjZXNDb250ZW50IjpbIjxzY3JpcHQgY29udGV4dD1cIm1vZHVsZVwiPlxuXHRjb25zdCB2ZXJzaW9uID0gJzMuMTUuMCdcblx0Y29uc3QgdXJsID0gYC9yZXBsL2hlbGxvLXdvcmxkP3ZlcnNpb249JHt2ZXJzaW9ufWBcblx0ZXhwb3J0IGZ1bmN0aW9uIHByZWxvYWQoKSB7XG5cdFx0dGhpcy5yZWRpcmVjdCgzMDIsIHVybClcblx0XHRyZXR1cm4ge31cblx0fVxuPC9zY3JpcHQ+XG5cbjxzY3JpcHQ+XG5cdGltcG9ydCB7IGdvdG8gfSBmcm9tICdAc2FwcGVyL2FwcCdcblx0aWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG5cdFx0Z290byh1cmwpXG5cdH1cbjwvc2NyaXB0PlxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNDLE1BQU0sT0FBTyxHQUFHLFNBQVE7QUFDekIsTUFBTyxHQUFHLEdBQUcsQ0FBQywwQkFBMEIsRUFBRSxPQUFPLENBQUMsRUFBQztBQUNuRCxTQUFpQixPQUFPLEdBQUc7Q0FDekIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFDO0NBQ3ZCLE9BQU8sRUFBRTtDQUNUOzs7Q0FLRCxJQUFJLE9BQU8sTUFBTSxLQUFLLFdBQVcsRUFBRTtFQUNsQyxJQUFJLENBQUMsR0FBRyxFQUFDO0VBQ1Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=