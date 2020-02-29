import{S as e,i as t,s as n,R as s,e as o,j as i,k as r,c as l,a,d as c,l as d,b as p,L as m,g as u,m as h,t as v,p as f,q as g,v as $,N as w,h as b,y as k,o as x,a3 as _,u as y,Q as j,$ as E,a0 as U}from"./index.4b91315e.js";import"./index.3fc4c05d.js";import{a as S}from"./app.5b72d019.js";import"./index.6646c9f6.js";import{R as A}from"./Repl.5dfff9ea.js";import{I as R}from"./InputOutputToggle.b94166c5.js";const T=[];for(let e=0;e<256;e++){let t=e;for(let e=0;e<8;e++)t=1&t?3988292384^t>>>1:t>>>1;T[e]=t}"undefined"!=typeof navigator&&navigator.platform;const{window:z}=_;function I(e){var t,n;function s(n){e.inputoutputtoggle_checked_binding.call(null,n),t=!0,U(()=>t=!1)}let o={};void 0!==e.checked&&(o.checked=e.checked);var i=new R({props:o});return j.push(()=>E(i,"checked",s)),{c(){i.$$.fragment.c()},l(e){i.$$.fragment.l(e)},m(e,t){h(i,e,t),n=!0},p(e,n){var s={};!t&&e.checked&&(s.checked=n.checked),i.$set(s)},i(e){n||(v(i.$$.fragment,e),n=!0)},o(e){f(i.$$.fragment,e),n=!1},d(e){g(i,e)}}}function L(e){var t,n,k,x,_,j,E,U;s(e.onwindowresize),document.title=t=e.name+" • REPL • Svelte";var S=function(e){var t,n,s,w;let b={workersUrl:"workers",svelteUrl:e.svelteUrl,rollupUrl:e.rollupUrl,relaxed:e.relaxed,fixed:e.mobile,injectedJS:e.mapbox_setup};var k=new A({props:b});e.repl_1_binding(k);var x=e.mobile&&I(e);return{c(){t=o("div"),k.$$.fragment.c(),n=i(),x&&x.c(),s=r(),this.h()},l(e){t=l(e,"DIV",{class:!0},!1);var o=a(t);k.$$.fragment.l(o),o.forEach(c),n=d(e),x&&x.l(e),s=r(),this.h()},h(){p(t,"class","viewport svelte-126i8yp"),m(t,"offset",e.checked)},m(e,o){u(e,t,o),h(k,t,null),u(e,n,o),x&&x.m(e,o),u(e,s,o),w=!0},p(e,n){var o={};e.svelteUrl&&(o.svelteUrl=n.svelteUrl),e.relaxed&&(o.relaxed=n.relaxed),e.mobile&&(o.fixed=n.mobile),k.$set(o),e.checked&&m(t,"offset",n.checked),n.mobile?x?(x.p(e,n),v(x,1)):((x=I(n)).c(),v(x,1),x.m(s.parentNode,s)):x&&(y(),f(x,1,1,()=>{x=null}),$())},i(e){w||(v(k.$$.fragment,e),v(x),w=!0)},o(e){f(k.$$.fragment,e),f(x),w=!1},d(o){o&&c(t),e.repl_1_binding(null),g(k),o&&c(n),x&&x.d(o),o&&c(s)}}}(e);return{c(){n=o("meta"),k=o("meta"),x=o("meta"),_=i(),j=o("div"),S&&S.c(),this.h()},l(e){n=l(e,"META",{name:!0,content:!0},!1),a(n).forEach(c),k=l(e,"META",{name:!0,content:!0},!1),a(k).forEach(c),x=l(e,"META",{name:!0,content:!0},!1),a(x).forEach(c),_=d(e),j=l(e,"DIV",{class:!0},!1);var t=a(j);S&&S.l(t),t.forEach(c),this.h()},h(){p(n,"name","twitter:title"),p(n,"content","Svelte REPL"),p(k,"name","twitter:description"),p(k,"content","Cybernetically enhanced web apps"),p(x,"name","Description"),p(x,"content","Interactive Svelte playground"),p(j,"class","repl-outer zen-mode svelte-126i8yp"),m(j,"mobile",e.mobile),U=w(z,"resize",e.onwindowresize)},m(e,t){b(document.head,n),b(document.head,k),b(document.head,x),u(e,_,t),u(e,j,t),S&&S.m(j,null),E=!0},p(e,n){E&&!e.name||t===(t=n.name+" • REPL • Svelte")||(document.title=t),S.p(e,n),e.mobile&&m(j,"mobile",n.mobile)},i(e){E||(v(S),E=!0)},o(e){f(S),E=!1},d(e){c(n),c(k),c(x),e&&(c(_),c(j)),S&&S.d(),U()}}}function O({params:e,query:t}){return{version:t.version||"3",id:e.id}}function D(e,t,n){let s,{version:o,id:i}=t;const{session:r}=S();let l,a;k(e,r,e=>{n("$session",s=e)});let c="Loading...",d=!1,p=window.innerWidth,m=!1;x(()=>{"local"!==o&&fetch(`https://unpkg.com/svelte@${o||"3"}/package.json`).then(e=>e.json()).then(e=>{n("version",o=e.version)})});let u,h,v;return e.$set=e=>{"version"in e&&n("version",o=e.version),"id"in e&&n("id",i=e.id)},e.$$.update=(e={version:1,id:1,width:1,is_relaxed_gist:1,$session:1,gist:1})=>{e.version&&"undefined"!=typeof history&&function(e){const t=[];"latest"!==e&&t.push(`version=${e}`);const n=t.length>0?`repl/${i}?${t.join("&")}`:`repl/${i}`;history.replaceState({},"x",n)}(o),e.id&&function(e){a&&a.uid===e||fetch(`repl/${e}.json`).then(e=>{e.ok?e.json().then(e=>{n("gist",a=e),n("name",c=e.name),n("is_relaxed_gist",d=e.relaxed);const t=e.files.map(e=>{let[t,n]=e.name.split(".");return"html"===n&&(n="svelte"),{name:t,type:n,source:e.source}});t.sort((e,t)=>"Game"===e.name&&"svelte"===e.type?-1:"Game"===t.name&&"svelte"===t.type?1:"App"===e.name&&"svelte"===e.type?-1:"App"===t.name&&"svelte"===t.type?1:e.type!==t.type?"svelte"===e.type?-1:1:e.name<t.name?-1:1),l.set({components:t})}):console.warn("TODO: 404 Gist")})}(i),e.version&&n("svelteUrl",u="local"===o?`${location.origin}/repl/local`:`https://unpkg.com/svelte@${o}`),e.width&&n("mobile",h=p<540),(e.is_relaxed_gist||e.$session||e.gist)&&n("relaxed",v=d||s.user&&a&&s.user.uid===a.owner)},{version:o,id:i,session:r,repl:l,name:c,width:p,checked:m,rollupUrl:"https://unpkg.com/rollup@1/dist/rollup.browser.js",mapbox_setup:"window.MAPBOX_ACCESS_TOKEN = undefined;",svelteUrl:u,mobile:h,relaxed:v,onwindowresize:function(){p=z.innerWidth,n("width",p)},repl_1_binding:function(e){j[e?"unshift":"push"](()=>{n("repl",l=e)})},inputoutputtoggle_checked_binding:function(e){n("checked",m=e)}}}export default class extends e{constructor(e){super(),t(this,e,D,L,n,["version","id"])}}export{O as preload};
