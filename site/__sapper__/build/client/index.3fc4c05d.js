import{s as n,n as t}from"./index.4b91315e.js";const e=[];function s(s,o=t){let c;const l=[];function i(t){if(n(s,t)&&(s=t,c)){const n=!e.length;for(let n=0;n<l.length;n+=1){const t=l[n];t[1](),e.push(t,s)}if(n){for(let n=0;n<e.length;n+=2)e[n][0](e[n+1]);e.length=0}}}return{set:i,update:function(n){i(n(s))},subscribe:function(n,e=t){const u=[n,e];return l.push(u),1===l.length&&(c=o(i)||t),n(s),()=>{const n=l.indexOf(u);-1!==n&&l.splice(n,1),0===l.length&&(c(),c=null)}}}}export{s as w};
