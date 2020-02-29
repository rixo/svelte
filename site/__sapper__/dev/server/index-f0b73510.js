'use strict';

var index = require('./index-51e42f05.js');
require('./index-a5106ba9.js');
var app$1 = require('./app-c055a79b.js');
require('./index-7fbeb446.js');
require('yootils');
require('./Repl-57824559.js');
require('do-not-zip');

const isMac = typeof navigator !== 'undefined' && navigator.platform === 'MacIntel';

/* src/routes/repl/[id]/index.svelte generated by Svelte v3.12.0 */

const css = {
	code: ".repl-outer.svelte-126i8yp{position:relative;height:calc(100vh - var(--nav-h));--app-controls-h:5.6rem;--pane-controls-h:4.2rem;overflow:hidden;background-color:var(--back);padding:var(--app-controls-h) 0 0 0;box-sizing:border-box}.viewport.svelte-126i8yp{width:100%;height:100%}.mobile.svelte-126i8yp .viewport.svelte-126i8yp{width:200%;height:calc(100% - 42px);transition:transform 0.3s}.mobile.svelte-126i8yp .offset.svelte-126i8yp{transform:translate(-50%, 0)}.viewport.svelte-126i8yp .tab-content,.viewport.svelte-126i8yp .tab-content.visible{pointer-events:all;opacity:1}.viewport.svelte-126i8yp .tab-content{visibility:hidden}.viewport.svelte-126i8yp .tab-content.visible{visibility:visible}.zen-mode.svelte-126i8yp{position:fixed;width:100%;height:100%;top:0;z-index:111}.pane.svelte-126i8yp{width:100%;height:100% }.loading.svelte-126i8yp{text-align:center;color:var(--second);font-weight:400;margin:2em 0 0 0;opacity:0;animation:svelte-126i8yp-fade-in .4s;animation-delay:.2s;animation-fill-mode:both}@keyframes svelte-126i8yp-fade-in{0%{opacity:0 }100%{opacity:1 }}.input.svelte-126i8yp{padding:2.4em 0 0 0}.repl-outer.svelte-126i8yp{padding:0}.repl-outer.svelte-126i8yp .component-selector,.repl-outer.svelte-126i8yp .view-toggle{display:none !important}.repl-outer.svelte-126i8yp .tab-content{height:100% !important}.repl-outer.svelte-126i8yp .container > .container > .pane > section[slot]{padding-top:0 !important}",
	map: "{\"version\":3,\"file\":\"index.svelte\",\"sources\":[\"index.svelte\"],\"sourcesContent\":[\"<script context=\\\"module\\\">\\n\\texport function preload({ params, query }) {\\n\\t\\treturn {\\n\\t\\t\\tversion: query.version || '3',\\n\\t\\t\\tid: params.id\\n\\t\\t};\\n\\t}\\n</script>\\n\\n<script>\\n\\timport Repl from '@sveltejs/svelte-repl';\\n\\timport { onMount } from 'svelte';\\n\\timport { goto, stores } from '@sapper/app';\\n\\timport InputOutputToggle from '../../../components/Repl/InputOutputToggle.svelte';\\n\\timport AppControls from './_components/AppControls/index.svelte';\\n\\n\\texport let version;\\n\\texport let id;\\n\\n\\tconst { session } = stores();\\n\\n\\tlet repl;\\n\\tlet gist;\\n\\tlet name = 'Loading...';\\n\\tlet zen_mode = true;\\n\\tlet is_relaxed_gist = false;\\n\\tlet width = false ? window.innerWidth : 1000;\\n\\tlet checked = false;\\n\\n\\tfunction update_query_string(version) {\\n\\t\\tconst params = [];\\n\\n\\t\\tif (version !== 'latest') params.push(`version=${version}`);\\n\\n\\t\\tconst url = params.length > 0\\n\\t\\t\\t? `repl/${id}?${params.join('&')}`\\n\\t\\t\\t: `repl/${id}`;\\n\\n\\t\\thistory.replaceState({}, 'x', url);\\n\\t}\\n\\n\\t$: if (typeof history !== 'undefined') update_query_string(version);\\n\\n\\tfunction fetch_gist(id) {\\n\\t\\tif (gist && gist.uid === id) {\\n\\t\\t\\t// if the id changed because we just forked, don't refetch\\n\\t\\t\\treturn;\\n\\t\\t}\\n\\n\\t\\t// TODO handle `relaxed` logic\\n\\t\\tfetch(`repl/${id}.json`).then(r => {\\n\\t\\t\\tif (r.ok) {\\n\\t\\t\\t\\tr.json().then(data => {\\n\\t\\t\\t\\t\\tgist = data;\\n\\t\\t\\t\\t\\tname = data.name;\\n\\n\\t\\t\\t\\t\\tis_relaxed_gist = data.relaxed;\\n\\n\\t\\t\\t\\t\\tconst components = data.files.map(file => {\\n\\t\\t\\t\\t\\t\\tlet [name, type] = file.name.split('.');\\n\\t\\t\\t\\t\\t\\tif (type === 'html') type = 'svelte'; // TODO do this on the server\\n\\t\\t\\t\\t\\t\\treturn { name, type, source: file.source };\\n\\t\\t\\t\\t\\t});\\n\\n\\t\\t\\t\\t\\tcomponents.sort((a, b) => {\\n\\t\\t\\t\\t\\t\\tif (a.name === 'Game' && a.type === 'svelte') return -1;\\n\\t\\t\\t\\t\\t\\tif (b.name === 'Game' && b.type === 'svelte') return 1;\\n\\t\\t\\t\\t\\t\\tif (a.name === 'App' && a.type === 'svelte') return -1;\\n\\t\\t\\t\\t\\t\\tif (b.name === 'App' && b.type === 'svelte') return 1;\\n\\n\\t\\t\\t\\t\\t\\tif (a.type !== b.type) return a.type === 'svelte' ? -1 : 1;\\n\\n\\t\\t\\t\\t\\t\\treturn a.name < b.name ? -1 : 1;\\n\\t\\t\\t\\t\\t});\\n\\n\\t\\t\\t\\t\\trepl.set({ components });\\n\\t\\t\\t\\t});\\n\\t\\t\\t} else {\\n\\t\\t\\t\\tconsole.warn('TODO: 404 Gist');\\n\\t\\t\\t}\\n\\t\\t});\\n\\t}\\n\\n\\t$: if (false) fetch_gist(id);\\n\\n\\tonMount(() => {\\n\\t\\tif (version !== 'local') {\\n\\t\\t\\tfetch(`https://unpkg.com/svelte@${version || '3'}/package.json`)\\n\\t\\t\\t\\t.then(r => r.json())\\n\\t\\t\\t\\t.then(pkg => {\\n\\t\\t\\t\\t\\tversion = pkg.version;\\n\\t\\t\\t\\t});\\n\\t\\t}\\n\\t});\\n\\n\\tfunction handle_fork(event) {\\n\\t\\tconsole.log('> handle_fork', event);\\n\\t\\tgist = event.detail.gist;\\n\\t\\tgoto(`/repl/${gist.uid}?version=${version}`);\\n\\t}\\n\\n\\t$: svelteUrl = false && version === 'local' ?\\n\\t\\t`${location.origin}/repl/local` :\\n\\t\\t`https://unpkg.com/svelte@${version}`;\\n\\n\\tconst rollupUrl = `https://unpkg.com/rollup@1/dist/rollup.browser.js`;\\n\\n\\t// needed for context API example\\n\\tconst mapbox_setup = `window.MAPBOX_ACCESS_TOKEN = process.env.MAPBOX_ACCESS_TOKEN;`;\\n\\n\\t$: mobile = width < 540;\\n\\n\\t$: relaxed = is_relaxed_gist || ($session.user && gist && $session.user.uid === gist.owner);\\n</script>\\n\\n<style>\\n\\t.repl-outer {\\n\\t\\tposition: relative;\\n\\t\\theight: calc(100vh - var(--nav-h));\\n\\t\\t--app-controls-h: 5.6rem;\\n\\t\\t--pane-controls-h: 4.2rem;\\n\\t\\toverflow: hidden;\\n\\t\\tbackground-color: var(--back);\\n\\t\\tpadding: var(--app-controls-h) 0 0 0;\\n\\t\\t/* margin: 0 calc(var(--side-nav) * -1); */\\n\\t\\tbox-sizing: border-box;\\n\\t}\\n\\n\\t.viewport {\\n\\t\\twidth: 100%;\\n\\t\\theight: 100%;\\n\\t}\\n\\n\\t.mobile .viewport {\\n\\t\\twidth: 200%;\\n\\t\\theight: calc(100% - 42px);\\n\\t\\ttransition: transform 0.3s;\\n\\t}\\n\\n\\t.mobile .offset {\\n\\t\\ttransform: translate(-50%, 0);\\n\\t}\\n\\n\\t/* temp fix for #2499 and #2550 while waiting for a fix for https://github.com/sveltejs/svelte-repl/issues/8 */\\n\\n\\t.viewport :global(.tab-content),\\n\\t.viewport :global(.tab-content.visible) {\\n\\t\\tpointer-events: all;\\n\\t\\topacity: 1;\\n\\t}\\n\\t.viewport :global(.tab-content) {\\n\\t\\tvisibility: hidden;\\n\\t}\\n\\t.viewport :global(.tab-content.visible) {\\n\\t\\tvisibility: visible;\\n\\t}\\n\\n\\t.zen-mode {\\n\\t\\tposition: fixed;\\n\\t\\twidth: 100%;\\n\\t\\theight: 100%;\\n\\t\\ttop: 0;\\n\\t\\tz-index: 111;\\n\\t}\\n\\n\\t.pane { width: 100%; height: 100% }\\n\\n\\t.loading {\\n\\t\\ttext-align: center;\\n\\t\\tcolor: var(--second);\\n\\t\\tfont-weight: 400;\\n\\t\\tmargin: 2em 0 0 0;\\n\\t\\topacity: 0;\\n\\t\\tanimation: fade-in .4s;\\n\\t\\tanimation-delay: .2s;\\n\\t\\tanimation-fill-mode: both;\\n\\t}\\n\\n\\t@keyframes fade-in {\\n\\t\\t0%   { opacity: 0 }\\n\\t\\t100% { opacity: 1 }\\n\\t}\\n\\n\\t.input {\\n\\t\\tpadding: 2.4em 0 0 0;\\n\\t}\\n\\n\\t.repl-outer {\\n\\t\\tpadding: 0;\\n\\t}\\n\\t.repl-outer :global(.component-selector),\\n\\t.repl-outer :global(.view-toggle) {\\n\\t\\tdisplay: none !important;\\n\\t}\\n\\t.repl-outer :global(.tab-content) {\\n\\t\\theight: 100% !important;\\n\\t}\\n\\t.repl-outer :global(.container > .container > .pane > section[slot]) {\\n\\t\\tpadding-top: 0 !important;\\n\\t}\\n</style>\\n\\n<svelte:head>\\n\\t<title>{name} • REPL • Svelte</title>\\n\\n\\t<meta name=\\\"twitter:title\\\" content=\\\"Svelte REPL\\\">\\n\\t<meta name=\\\"twitter:description\\\" content=\\\"Cybernetically enhanced web apps\\\">\\n\\t<meta name=\\\"Description\\\" content=\\\"Interactive Svelte playground\\\">\\n</svelte:head>\\n\\n<svelte:window bind:innerWidth={width}/>\\n\\n<div class=\\\"repl-outer {zen_mode ? 'zen-mode' : ''}\\\" class:mobile>\\n\\t<!-- <AppControls\\n\\t\\t{gist}\\n\\t\\t{repl}\\n\\t\\tbind:name\\n\\t\\tbind:zen_mode\\n\\t\\ton:forked={handle_fork}\\n\\t/> -->\\n\\n\\t{#if false}\\n\\t\\t<div class=\\\"viewport\\\" class:offset={checked}>\\n\\t\\t\\t<Repl\\n\\t\\t\\t\\tbind:this={repl}\\n\\t\\t\\t\\tworkersUrl=\\\"workers\\\"\\n\\t\\t\\t\\t{svelteUrl}\\n\\t\\t\\t\\t{rollupUrl}\\n\\t\\t\\t\\t{relaxed}\\n\\t\\t\\t\\tfixed={mobile}\\n\\t\\t\\t\\tinjectedJS={mapbox_setup}\\n\\t\\t\\t/>\\n\\t\\t</div>\\n\\n\\t\\t{#if mobile}\\n\\t\\t\\t<InputOutputToggle bind:checked/>\\n\\t\\t{/if}\\n\\t{/if}\\n</div>\\n\"],\"names\":[],\"mappings\":\"AAoHC,WAAW,eAAC,CAAC,AACZ,QAAQ,CAAE,QAAQ,CAClB,MAAM,CAAE,KAAK,KAAK,CAAC,CAAC,CAAC,IAAI,OAAO,CAAC,CAAC,CAClC,gBAAgB,CAAE,MAAM,CACxB,iBAAiB,CAAE,MAAM,CACzB,QAAQ,CAAE,MAAM,CAChB,gBAAgB,CAAE,IAAI,MAAM,CAAC,CAC7B,OAAO,CAAE,IAAI,gBAAgB,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAEpC,UAAU,CAAE,UAAU,AACvB,CAAC,AAED,SAAS,eAAC,CAAC,AACV,KAAK,CAAE,IAAI,CACX,MAAM,CAAE,IAAI,AACb,CAAC,AAED,sBAAO,CAAC,SAAS,eAAC,CAAC,AAClB,KAAK,CAAE,IAAI,CACX,MAAM,CAAE,KAAK,IAAI,CAAC,CAAC,CAAC,IAAI,CAAC,CACzB,UAAU,CAAE,SAAS,CAAC,IAAI,AAC3B,CAAC,AAED,sBAAO,CAAC,OAAO,eAAC,CAAC,AAChB,SAAS,CAAE,UAAU,IAAI,CAAC,CAAC,CAAC,CAAC,AAC9B,CAAC,AAID,wBAAS,CAAC,AAAQ,YAAY,AAAC,CAC/B,wBAAS,CAAC,AAAQ,oBAAoB,AAAE,CAAC,AACxC,cAAc,CAAE,GAAG,CACnB,OAAO,CAAE,CAAC,AACX,CAAC,AACD,wBAAS,CAAC,AAAQ,YAAY,AAAE,CAAC,AAChC,UAAU,CAAE,MAAM,AACnB,CAAC,AACD,wBAAS,CAAC,AAAQ,oBAAoB,AAAE,CAAC,AACxC,UAAU,CAAE,OAAO,AACpB,CAAC,AAED,SAAS,eAAC,CAAC,AACV,QAAQ,CAAE,KAAK,CACf,KAAK,CAAE,IAAI,CACX,MAAM,CAAE,IAAI,CACZ,GAAG,CAAE,CAAC,CACN,OAAO,CAAE,GAAG,AACb,CAAC,AAED,KAAK,eAAC,CAAC,AAAC,KAAK,CAAE,IAAI,CAAE,MAAM,CAAE,IAAI,CAAC,CAAC,AAEnC,QAAQ,eAAC,CAAC,AACT,UAAU,CAAE,MAAM,CAClB,KAAK,CAAE,IAAI,QAAQ,CAAC,CACpB,WAAW,CAAE,GAAG,CAChB,MAAM,CAAE,GAAG,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CACjB,OAAO,CAAE,CAAC,CACV,SAAS,CAAE,sBAAO,CAAC,GAAG,CACtB,eAAe,CAAE,GAAG,CACpB,mBAAmB,CAAE,IAAI,AAC1B,CAAC,AAED,WAAW,sBAAQ,CAAC,AACnB,EAAE,AAAG,CAAC,AAAC,OAAO,CAAE,CAAC,CAAC,CAAC,AACnB,IAAI,AAAC,CAAC,AAAC,OAAO,CAAE,CAAC,CAAC,CAAC,AACpB,CAAC,AAED,MAAM,eAAC,CAAC,AACP,OAAO,CAAE,KAAK,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,AACrB,CAAC,AAED,WAAW,eAAC,CAAC,AACZ,OAAO,CAAE,CAAC,AACX,CAAC,AACD,0BAAW,CAAC,AAAQ,mBAAmB,AAAC,CACxC,0BAAW,CAAC,AAAQ,YAAY,AAAE,CAAC,AAClC,OAAO,CAAE,IAAI,CAAC,UAAU,AACzB,CAAC,AACD,0BAAW,CAAC,AAAQ,YAAY,AAAE,CAAC,AAClC,MAAM,CAAE,IAAI,CAAC,UAAU,AACxB,CAAC,AACD,0BAAW,CAAC,AAAQ,+CAA+C,AAAE,CAAC,AACrE,WAAW,CAAE,CAAC,CAAC,UAAU,AAC1B,CAAC\"}"
};

function preload({ params, query }) {
	return {
		version: query.version || '3',
		id: params.id
	};
}

const Index = index.create_ssr_component(($$result, $$props, $$bindings, $$slots) => {
	let $session;

	

	let { version, id } = $$props;

	const { session } = app$1.stores$1(); index.validate_store(session, 'session'); $session = index.get_store_value(session);
	let gist;
	let name = 'Loading...';
	let is_relaxed_gist = false;

	function update_query_string(version) {
		const params = [];

		if (version !== 'latest') params.push(`version=${version}`);

		const url = params.length > 0
			? `repl/${id}?${params.join('&')}`
			: `repl/${id}`;

		history.replaceState({}, 'x', url);
	}

	index.onMount(() => {
		if (version !== 'local') {
			fetch(`https://unpkg.com/svelte@${version || '3'}/package.json`)
				.then(r => r.json())
				.then(pkg => {
					version = pkg.version;
				});
		}
	});

	if ($$props.version === void 0 && $$bindings.version && version !== void 0) $$bindings.version(version);
	if ($$props.id === void 0 && $$bindings.id && id !== void 0) $$bindings.id(id);

	$$result.css.add(css);

	let $$settled;
	let $$rendered;

	do {
		$$settled = true;

		index.validate_store(session, 'session'); $session = index.get_store_value(session);

		if (typeof history !== 'undefined') update_query_string(version);
		let relaxed = is_relaxed_gist || ($session.user && gist && $session.user.uid === gist.owner);

		$$rendered = `${($$result.head += `<title>${index.escape(name)} • REPL • Svelte</title><meta name="twitter:title" content="Svelte REPL"><meta name="twitter:description" content="Cybernetically enhanced web apps"><meta name="Description" content="Interactive Svelte playground">`, "")}



		<div class="${[`repl-outer ${index.escape( 'zen-mode' )} svelte-126i8yp`,  ""].join(' ').trim() }">


			${  `` }
		</div>`;
	} while (!$$settled);

	return $$rendered;
});

exports.default = Index;
exports.preload = preload;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXgtZjBiNzM1MTAuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy91dGlscy9jb21wYXQuanMiLCIuLi8uLi8uLi9zcmMvcm91dGVzL3JlcGwvW2lkXS9pbmRleC5zdmVsdGUiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IGlzTWFjID0gdHlwZW9mIG5hdmlnYXRvciAhPT0gJ3VuZGVmaW5lZCcgJiYgbmF2aWdhdG9yLnBsYXRmb3JtID09PSAnTWFjSW50ZWwnO1xuIiwiPHNjcmlwdCBjb250ZXh0PVwibW9kdWxlXCI+XG5cdGV4cG9ydCBmdW5jdGlvbiBwcmVsb2FkKHsgcGFyYW1zLCBxdWVyeSB9KSB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdHZlcnNpb246IHF1ZXJ5LnZlcnNpb24gfHwgJzMnLFxuXHRcdFx0aWQ6IHBhcmFtcy5pZFxuXHRcdH07XG5cdH1cbjwvc2NyaXB0PlxuXG48c2NyaXB0PlxuXHRpbXBvcnQgUmVwbCBmcm9tICdAc3ZlbHRlanMvc3ZlbHRlLXJlcGwnO1xuXHRpbXBvcnQgeyBvbk1vdW50IH0gZnJvbSAnc3ZlbHRlJztcblx0aW1wb3J0IHsgZ290bywgc3RvcmVzIH0gZnJvbSAnQHNhcHBlci9hcHAnO1xuXHRpbXBvcnQgSW5wdXRPdXRwdXRUb2dnbGUgZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50cy9SZXBsL0lucHV0T3V0cHV0VG9nZ2xlLnN2ZWx0ZSc7XG5cdGltcG9ydCBBcHBDb250cm9scyBmcm9tICcuL19jb21wb25lbnRzL0FwcENvbnRyb2xzL2luZGV4LnN2ZWx0ZSc7XG5cblx0ZXhwb3J0IGxldCB2ZXJzaW9uO1xuXHRleHBvcnQgbGV0IGlkO1xuXG5cdGNvbnN0IHsgc2Vzc2lvbiB9ID0gc3RvcmVzKCk7XG5cblx0bGV0IHJlcGw7XG5cdGxldCBnaXN0O1xuXHRsZXQgbmFtZSA9ICdMb2FkaW5nLi4uJztcblx0bGV0IHplbl9tb2RlID0gdHJ1ZTtcblx0bGV0IGlzX3JlbGF4ZWRfZ2lzdCA9IGZhbHNlO1xuXHRsZXQgd2lkdGggPSBwcm9jZXNzLmJyb3dzZXIgPyB3aW5kb3cuaW5uZXJXaWR0aCA6IDEwMDA7XG5cdGxldCBjaGVja2VkID0gZmFsc2U7XG5cblx0ZnVuY3Rpb24gdXBkYXRlX3F1ZXJ5X3N0cmluZyh2ZXJzaW9uKSB7XG5cdFx0Y29uc3QgcGFyYW1zID0gW107XG5cblx0XHRpZiAodmVyc2lvbiAhPT0gJ2xhdGVzdCcpIHBhcmFtcy5wdXNoKGB2ZXJzaW9uPSR7dmVyc2lvbn1gKTtcblxuXHRcdGNvbnN0IHVybCA9IHBhcmFtcy5sZW5ndGggPiAwXG5cdFx0XHQ/IGByZXBsLyR7aWR9PyR7cGFyYW1zLmpvaW4oJyYnKX1gXG5cdFx0XHQ6IGByZXBsLyR7aWR9YDtcblxuXHRcdGhpc3RvcnkucmVwbGFjZVN0YXRlKHt9LCAneCcsIHVybCk7XG5cdH1cblxuXHQkOiBpZiAodHlwZW9mIGhpc3RvcnkgIT09ICd1bmRlZmluZWQnKSB1cGRhdGVfcXVlcnlfc3RyaW5nKHZlcnNpb24pO1xuXG5cdGZ1bmN0aW9uIGZldGNoX2dpc3QoaWQpIHtcblx0XHRpZiAoZ2lzdCAmJiBnaXN0LnVpZCA9PT0gaWQpIHtcblx0XHRcdC8vIGlmIHRoZSBpZCBjaGFuZ2VkIGJlY2F1c2Ugd2UganVzdCBmb3JrZWQsIGRvbid0IHJlZmV0Y2hcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHQvLyBUT0RPIGhhbmRsZSBgcmVsYXhlZGAgbG9naWNcblx0XHRmZXRjaChgcmVwbC8ke2lkfS5qc29uYCkudGhlbihyID0+IHtcblx0XHRcdGlmIChyLm9rKSB7XG5cdFx0XHRcdHIuanNvbigpLnRoZW4oZGF0YSA9PiB7XG5cdFx0XHRcdFx0Z2lzdCA9IGRhdGE7XG5cdFx0XHRcdFx0bmFtZSA9IGRhdGEubmFtZTtcblxuXHRcdFx0XHRcdGlzX3JlbGF4ZWRfZ2lzdCA9IGRhdGEucmVsYXhlZDtcblxuXHRcdFx0XHRcdGNvbnN0IGNvbXBvbmVudHMgPSBkYXRhLmZpbGVzLm1hcChmaWxlID0+IHtcblx0XHRcdFx0XHRcdGxldCBbbmFtZSwgdHlwZV0gPSBmaWxlLm5hbWUuc3BsaXQoJy4nKTtcblx0XHRcdFx0XHRcdGlmICh0eXBlID09PSAnaHRtbCcpIHR5cGUgPSAnc3ZlbHRlJzsgLy8gVE9ETyBkbyB0aGlzIG9uIHRoZSBzZXJ2ZXJcblx0XHRcdFx0XHRcdHJldHVybiB7IG5hbWUsIHR5cGUsIHNvdXJjZTogZmlsZS5zb3VyY2UgfTtcblx0XHRcdFx0XHR9KTtcblxuXHRcdFx0XHRcdGNvbXBvbmVudHMuc29ydCgoYSwgYikgPT4ge1xuXHRcdFx0XHRcdFx0aWYgKGEubmFtZSA9PT0gJ0dhbWUnICYmIGEudHlwZSA9PT0gJ3N2ZWx0ZScpIHJldHVybiAtMTtcblx0XHRcdFx0XHRcdGlmIChiLm5hbWUgPT09ICdHYW1lJyAmJiBiLnR5cGUgPT09ICdzdmVsdGUnKSByZXR1cm4gMTtcblx0XHRcdFx0XHRcdGlmIChhLm5hbWUgPT09ICdBcHAnICYmIGEudHlwZSA9PT0gJ3N2ZWx0ZScpIHJldHVybiAtMTtcblx0XHRcdFx0XHRcdGlmIChiLm5hbWUgPT09ICdBcHAnICYmIGIudHlwZSA9PT0gJ3N2ZWx0ZScpIHJldHVybiAxO1xuXG5cdFx0XHRcdFx0XHRpZiAoYS50eXBlICE9PSBiLnR5cGUpIHJldHVybiBhLnR5cGUgPT09ICdzdmVsdGUnID8gLTEgOiAxO1xuXG5cdFx0XHRcdFx0XHRyZXR1cm4gYS5uYW1lIDwgYi5uYW1lID8gLTEgOiAxO1xuXHRcdFx0XHRcdH0pO1xuXG5cdFx0XHRcdFx0cmVwbC5zZXQoeyBjb21wb25lbnRzIH0pO1xuXHRcdFx0XHR9KTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGNvbnNvbGUud2FybignVE9ETzogNDA0IEdpc3QnKTtcblx0XHRcdH1cblx0XHR9KTtcblx0fVxuXG5cdCQ6IGlmIChwcm9jZXNzLmJyb3dzZXIpIGZldGNoX2dpc3QoaWQpO1xuXG5cdG9uTW91bnQoKCkgPT4ge1xuXHRcdGlmICh2ZXJzaW9uICE9PSAnbG9jYWwnKSB7XG5cdFx0XHRmZXRjaChgaHR0cHM6Ly91bnBrZy5jb20vc3ZlbHRlQCR7dmVyc2lvbiB8fCAnMyd9L3BhY2thZ2UuanNvbmApXG5cdFx0XHRcdC50aGVuKHIgPT4gci5qc29uKCkpXG5cdFx0XHRcdC50aGVuKHBrZyA9PiB7XG5cdFx0XHRcdFx0dmVyc2lvbiA9IHBrZy52ZXJzaW9uO1xuXHRcdFx0XHR9KTtcblx0XHR9XG5cdH0pO1xuXG5cdGZ1bmN0aW9uIGhhbmRsZV9mb3JrKGV2ZW50KSB7XG5cdFx0Y29uc29sZS5sb2coJz4gaGFuZGxlX2ZvcmsnLCBldmVudCk7XG5cdFx0Z2lzdCA9IGV2ZW50LmRldGFpbC5naXN0O1xuXHRcdGdvdG8oYC9yZXBsLyR7Z2lzdC51aWR9P3ZlcnNpb249JHt2ZXJzaW9ufWApO1xuXHR9XG5cblx0JDogc3ZlbHRlVXJsID0gcHJvY2Vzcy5icm93c2VyICYmIHZlcnNpb24gPT09ICdsb2NhbCcgP1xuXHRcdGAke2xvY2F0aW9uLm9yaWdpbn0vcmVwbC9sb2NhbGAgOlxuXHRcdGBodHRwczovL3VucGtnLmNvbS9zdmVsdGVAJHt2ZXJzaW9ufWA7XG5cblx0Y29uc3Qgcm9sbHVwVXJsID0gYGh0dHBzOi8vdW5wa2cuY29tL3JvbGx1cEAxL2Rpc3Qvcm9sbHVwLmJyb3dzZXIuanNgO1xuXG5cdC8vIG5lZWRlZCBmb3IgY29udGV4dCBBUEkgZXhhbXBsZVxuXHRjb25zdCBtYXBib3hfc2V0dXAgPSBgd2luZG93Lk1BUEJPWF9BQ0NFU1NfVE9LRU4gPSBwcm9jZXNzLmVudi5NQVBCT1hfQUNDRVNTX1RPS0VOO2A7XG5cblx0JDogbW9iaWxlID0gd2lkdGggPCA1NDA7XG5cblx0JDogcmVsYXhlZCA9IGlzX3JlbGF4ZWRfZ2lzdCB8fCAoJHNlc3Npb24udXNlciAmJiBnaXN0ICYmICRzZXNzaW9uLnVzZXIudWlkID09PSBnaXN0Lm93bmVyKTtcbjwvc2NyaXB0PlxuXG48c3R5bGU+XG5cdC5yZXBsLW91dGVyIHtcblx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdFx0aGVpZ2h0OiBjYWxjKDEwMHZoIC0gdmFyKC0tbmF2LWgpKTtcblx0XHQtLWFwcC1jb250cm9scy1oOiA1LjZyZW07XG5cdFx0LS1wYW5lLWNvbnRyb2xzLWg6IDQuMnJlbTtcblx0XHRvdmVyZmxvdzogaGlkZGVuO1xuXHRcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2spO1xuXHRcdHBhZGRpbmc6IHZhcigtLWFwcC1jb250cm9scy1oKSAwIDAgMDtcblx0XHQvKiBtYXJnaW46IDAgY2FsYyh2YXIoLS1zaWRlLW5hdikgKiAtMSk7ICovXG5cdFx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcblx0fVxuXG5cdC52aWV3cG9ydCB7XG5cdFx0d2lkdGg6IDEwMCU7XG5cdFx0aGVpZ2h0OiAxMDAlO1xuXHR9XG5cblx0Lm1vYmlsZSAudmlld3BvcnQge1xuXHRcdHdpZHRoOiAyMDAlO1xuXHRcdGhlaWdodDogY2FsYygxMDAlIC0gNDJweCk7XG5cdFx0dHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3M7XG5cdH1cblxuXHQubW9iaWxlIC5vZmZzZXQge1xuXHRcdHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDApO1xuXHR9XG5cblx0LyogdGVtcCBmaXggZm9yICMyNDk5IGFuZCAjMjU1MCB3aGlsZSB3YWl0aW5nIGZvciBhIGZpeCBmb3IgaHR0cHM6Ly9naXRodWIuY29tL3N2ZWx0ZWpzL3N2ZWx0ZS1yZXBsL2lzc3Vlcy84ICovXG5cblx0LnZpZXdwb3J0IDpnbG9iYWwoLnRhYi1jb250ZW50KSxcblx0LnZpZXdwb3J0IDpnbG9iYWwoLnRhYi1jb250ZW50LnZpc2libGUpIHtcblx0XHRwb2ludGVyLWV2ZW50czogYWxsO1xuXHRcdG9wYWNpdHk6IDE7XG5cdH1cblx0LnZpZXdwb3J0IDpnbG9iYWwoLnRhYi1jb250ZW50KSB7XG5cdFx0dmlzaWJpbGl0eTogaGlkZGVuO1xuXHR9XG5cdC52aWV3cG9ydCA6Z2xvYmFsKC50YWItY29udGVudC52aXNpYmxlKSB7XG5cdFx0dmlzaWJpbGl0eTogdmlzaWJsZTtcblx0fVxuXG5cdC56ZW4tbW9kZSB7XG5cdFx0cG9zaXRpb246IGZpeGVkO1xuXHRcdHdpZHRoOiAxMDAlO1xuXHRcdGhlaWdodDogMTAwJTtcblx0XHR0b3A6IDA7XG5cdFx0ei1pbmRleDogMTExO1xuXHR9XG5cblx0LnBhbmUgeyB3aWR0aDogMTAwJTsgaGVpZ2h0OiAxMDAlIH1cblxuXHQubG9hZGluZyB7XG5cdFx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHRcdGNvbG9yOiB2YXIoLS1zZWNvbmQpO1xuXHRcdGZvbnQtd2VpZ2h0OiA0MDA7XG5cdFx0bWFyZ2luOiAyZW0gMCAwIDA7XG5cdFx0b3BhY2l0eTogMDtcblx0XHRhbmltYXRpb246IGZhZGUtaW4gLjRzO1xuXHRcdGFuaW1hdGlvbi1kZWxheTogLjJzO1xuXHRcdGFuaW1hdGlvbi1maWxsLW1vZGU6IGJvdGg7XG5cdH1cblxuXHRAa2V5ZnJhbWVzIGZhZGUtaW4ge1xuXHRcdDAlICAgeyBvcGFjaXR5OiAwIH1cblx0XHQxMDAlIHsgb3BhY2l0eTogMSB9XG5cdH1cblxuXHQuaW5wdXQge1xuXHRcdHBhZGRpbmc6IDIuNGVtIDAgMCAwO1xuXHR9XG5cblx0LnJlcGwtb3V0ZXIge1xuXHRcdHBhZGRpbmc6IDA7XG5cdH1cblx0LnJlcGwtb3V0ZXIgOmdsb2JhbCguY29tcG9uZW50LXNlbGVjdG9yKSxcblx0LnJlcGwtb3V0ZXIgOmdsb2JhbCgudmlldy10b2dnbGUpIHtcblx0XHRkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG5cdH1cblx0LnJlcGwtb3V0ZXIgOmdsb2JhbCgudGFiLWNvbnRlbnQpIHtcblx0XHRoZWlnaHQ6IDEwMCUgIWltcG9ydGFudDtcblx0fVxuXHQucmVwbC1vdXRlciA6Z2xvYmFsKC5jb250YWluZXIgPiAuY29udGFpbmVyID4gLnBhbmUgPiBzZWN0aW9uW3Nsb3RdKSB7XG5cdFx0cGFkZGluZy10b3A6IDAgIWltcG9ydGFudDtcblx0fVxuPC9zdHlsZT5cblxuPHN2ZWx0ZTpoZWFkPlxuXHQ8dGl0bGU+e25hbWV9IOKAoiBSRVBMIOKAoiBTdmVsdGU8L3RpdGxlPlxuXG5cdDxtZXRhIG5hbWU9XCJ0d2l0dGVyOnRpdGxlXCIgY29udGVudD1cIlN2ZWx0ZSBSRVBMXCI+XG5cdDxtZXRhIG5hbWU9XCJ0d2l0dGVyOmRlc2NyaXB0aW9uXCIgY29udGVudD1cIkN5YmVybmV0aWNhbGx5IGVuaGFuY2VkIHdlYiBhcHBzXCI+XG5cdDxtZXRhIG5hbWU9XCJEZXNjcmlwdGlvblwiIGNvbnRlbnQ9XCJJbnRlcmFjdGl2ZSBTdmVsdGUgcGxheWdyb3VuZFwiPlxuPC9zdmVsdGU6aGVhZD5cblxuPHN2ZWx0ZTp3aW5kb3cgYmluZDppbm5lcldpZHRoPXt3aWR0aH0vPlxuXG48ZGl2IGNsYXNzPVwicmVwbC1vdXRlciB7emVuX21vZGUgPyAnemVuLW1vZGUnIDogJyd9XCIgY2xhc3M6bW9iaWxlPlxuXHQ8IS0tIDxBcHBDb250cm9sc1xuXHRcdHtnaXN0fVxuXHRcdHtyZXBsfVxuXHRcdGJpbmQ6bmFtZVxuXHRcdGJpbmQ6emVuX21vZGVcblx0XHRvbjpmb3JrZWQ9e2hhbmRsZV9mb3JrfVxuXHQvPiAtLT5cblxuXHR7I2lmIHByb2Nlc3MuYnJvd3Nlcn1cblx0XHQ8ZGl2IGNsYXNzPVwidmlld3BvcnRcIiBjbGFzczpvZmZzZXQ9e2NoZWNrZWR9PlxuXHRcdFx0PFJlcGxcblx0XHRcdFx0YmluZDp0aGlzPXtyZXBsfVxuXHRcdFx0XHR3b3JrZXJzVXJsPVwid29ya2Vyc1wiXG5cdFx0XHRcdHtzdmVsdGVVcmx9XG5cdFx0XHRcdHtyb2xsdXBVcmx9XG5cdFx0XHRcdHtyZWxheGVkfVxuXHRcdFx0XHRmaXhlZD17bW9iaWxlfVxuXHRcdFx0XHRpbmplY3RlZEpTPXttYXBib3hfc2V0dXB9XG5cdFx0XHQvPlxuXHRcdDwvZGl2PlxuXG5cdFx0eyNpZiBtb2JpbGV9XG5cdFx0XHQ8SW5wdXRPdXRwdXRUb2dnbGUgYmluZDpjaGVja2VkLz5cblx0XHR7L2lmfVxuXHR7L2lmfVxuPC9kaXY+XG4iXSwibmFtZXMiOlsic3RvcmVzIiwib25Nb3VudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFPLE1BQU0sS0FBSyxHQUFHLE9BQU8sU0FBUyxLQUFLLFdBQVcsSUFBSSxTQUFTLENBQUMsUUFBUSxLQUFLLFVBQVUsQ0FBQzs7Ozs7Ozs7O0FDQ25GLFNBQVMsT0FBTyxDQUFDLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxFQUFFO0NBQzFDLE9BQU87RUFDTixPQUFPLEVBQUUsS0FBSyxDQUFDLE9BQU8sSUFBSSxHQUFHO0VBQzdCLEVBQUUsRUFBRSxNQUFNLENBQUMsRUFBRTtFQUNiLENBQUM7Q0FDRjs7Ozs7OztDQVVNLE1BQUksT0FBTyxFQUNQLGNBQUUsQ0FBQzs7Q0FFZCxNQUFNLEVBQUUsT0FBTyxFQUFFLEdBQUdBLGNBQU0sdUZBQUUsQ0FBQztDQUc3QixJQUFJLElBQUksQ0FBQztDQUNULElBQUksSUFBSSxHQUFHLFlBQVksQ0FBQztDQUV4QixJQUFJLGVBQWUsR0FBRyxLQUFLLENBQUM7O0NBSTVCLFNBQVMsbUJBQW1CLENBQUMsT0FBTyxFQUFFO0VBQ3JDLE1BQU0sTUFBTSxHQUFHLEVBQUUsQ0FBQzs7RUFFbEIsSUFBSSxPQUFPLEtBQUssUUFBUSxFQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxRQUFRLEVBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDOztFQUU1RCxNQUFNLEdBQUcsR0FBRyxNQUFNLENBQUMsTUFBTSxHQUFHLENBQUM7S0FDMUIsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7S0FDaEMsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQzs7RUFFaEIsT0FBTyxDQUFDLFlBQVksQ0FBQyxFQUFFLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0VBQ25DOztDQThDREMsYUFBTyxDQUFDLE1BQU07RUFDYixJQUFJLE9BQU8sS0FBSyxPQUFPLEVBQUU7R0FDeEIsS0FBSyxDQUFDLENBQUMseUJBQXlCLEVBQUUsT0FBTyxJQUFJLEdBQUcsQ0FBQyxhQUFhLENBQUMsQ0FBQztLQUM5RCxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztLQUNuQixJQUFJLENBQUMsR0FBRyxJQUFJO0tBQ1osT0FBTyxHQUFHLEdBQUcsQ0FBQyxPQUFPLENBQUM7S0FDdEIsQ0FBQyxDQUFDO0dBQ0o7RUFDRCxDQUFDLENBQUM7Ozs7Ozs7Ozs7Ozs7OztFQXBEQSxJQUFJLE9BQU8sT0FBTyxLQUFLLFdBQVcsRUFBRSxtQkFBbUIsQ0FBQyxPQUFPLENBQUMsQ0FBQztNQXVFakUsT0FBTyxHQUFHLGVBQWUsS0FBSyxRQUFRLENBQUMsSUFBSSxJQUFJLElBQUksSUFBSSxRQUFRLENBQUMsSUFBSSxDQUFDLEdBQUcsS0FBSyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7OzJEQTJGcEYsSUFBSTs7Ozs0Q0FTVyxZQUEwQixvQkFBUzs7O01BU3JEOzs7Ozs7Ozs7OyJ9
