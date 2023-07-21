import{s as K,a as j,o as C,b as M,c as B,d as Q}from"../chunks/scheduler.50dc1d72.js";import{S as X,i as Y,d as k,v as Z,s as x,e as g,c as $,a as E,t as v,b as I,f as b,g as R,h as y,j as ee,k as te,l as ne,m as D,n as h,o as oe,p as se,q as re,r as L,u as P,w as N,x as S,y as O}from"../chunks/index.1558d124.js";const ie=!0,ce="modulepreload",ae=function(o){return"/"+o},q={},w=function(e,t,l){if(!t||t.length===0)return e();const c=document.getElementsByTagName("link");return Promise.all(t.map(i=>{if(i=ae(i),i in q)return;q[i]=!0;const u=i.endsWith(".css"),a=u?'[rel="stylesheet"]':"";if(!!l)for(let _=c.length-1;_>=0;_--){const m=c[_];if(m.href===i&&(!u||m.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${i}"]${a}`))return;const s=document.createElement("link");if(s.rel=u?"stylesheet":ce,u||(s.as="script",s.crossOrigin=""),s.href=i,document.head.appendChild(s),u)return new Promise((_,m)=>{s.addEventListener("load",_),s.addEventListener("error",()=>m(new Error(`Unable to preload CSS for ${i}`)))})})).then(()=>e()).catch(i=>{const u=new Event("vite:preloadError",{cancelable:!0});if(u.payload=i,window.dispatchEvent(u),!u.defaultPrevented)throw i})},de={},ue=ie,le=".svelte-kit/generated/root.svelte";function U(o){let e,t,l;var c=o[1][0];function i(a){return{props:{data:a[3],form:a[2]},$$inline:!0}}c&&(e=y(c,i(o)),o[12](e));const u={c:function(){e&&P(e.$$.fragment),t=g()},l:function(n){e&&N(e.$$.fragment,n),t=g()},m:function(n,s){e&&S(e,n,s),E(n,t,s),l=!0},p:function(n,s){const _={};if(s&8&&(_.data=n[3]),s&4&&(_.form=n[2]),s&2&&c!==(c=n[1][0])){if(e){L();const m=e;v(m.$$.fragment,1,0,()=>{O(m,1)}),I()}c?(e=y(c,i(n)),n[12](e),P(e.$$.fragment),b(e.$$.fragment,1),S(e,t.parentNode,t)):e=null}else c&&e.$set(_)},i:function(n){l||(e&&b(e.$$.fragment,n),l=!0)},o:function(n){e&&v(e.$$.fragment,n),l=!1},d:function(n){n&&R(t),o[12](null),e&&O(e,n)}};return k("SvelteRegisterBlock",{block:u,id:U.name,type:"else",source:"(44:0) {:else}",ctx:o}),u}function W(o){let e,t,l;var c=o[1][0];function i(a){return{props:{data:a[3],$$slots:{default:[z]},$$scope:{ctx:a}},$$inline:!0}}c&&(e=y(c,i(o)),o[11](e));const u={c:function(){e&&P(e.$$.fragment),t=g()},l:function(n){e&&N(e.$$.fragment,n),t=g()},m:function(n,s){e&&S(e,n,s),E(n,t,s),l=!0},p:function(n,s){const _={};if(s&8&&(_.data=n[3]),s&8215&&(_.$$scope={dirty:s,ctx:n}),s&2&&c!==(c=n[1][0])){if(e){L();const m=e;v(m.$$.fragment,1,0,()=>{O(m,1)}),I()}c?(e=y(c,i(n)),n[11](e),P(e.$$.fragment),b(e.$$.fragment,1),S(e,t.parentNode,t)):e=null}else c&&e.$set(_)},i:function(n){l||(e&&b(e.$$.fragment,n),l=!0)},o:function(n){e&&v(e.$$.fragment,n),l=!1},d:function(n){n&&R(t),o[11](null),e&&O(e,n)}};return k("SvelteRegisterBlock",{block:u,id:W.name,type:"if",source:"(40:0) {#if constructors[1]}",ctx:o}),u}function z(o){let e,t,l;var c=o[1][1];function i(a){return{props:{data:a[4],form:a[2]},$$inline:!0}}c&&(e=y(c,i(o)),o[10](e));const u={c:function(){e&&P(e.$$.fragment),t=g()},l:function(n){e&&N(e.$$.fragment,n),t=g()},m:function(n,s){e&&S(e,n,s),E(n,t,s),l=!0},p:function(n,s){const _={};if(s&16&&(_.data=n[4]),s&4&&(_.form=n[2]),s&2&&c!==(c=n[1][1])){if(e){L();const m=e;v(m.$$.fragment,1,0,()=>{O(m,1)}),I()}c?(e=y(c,i(n)),n[10](e),P(e.$$.fragment),b(e.$$.fragment,1),S(e,t.parentNode,t)):e=null}else c&&e.$set(_)},i:function(n){l||(e&&b(e.$$.fragment,n),l=!0)},o:function(n){e&&v(e.$$.fragment,n),l=!1},d:function(n){n&&R(t),o[10](null),e&&O(e,n)}};return k("SvelteRegisterBlock",{block:u,id:z.name,type:"slot",source:"(41:1) <svelte:component this={constructors[0]} bind:this={components[0]} data={data_0}>",ctx:o}),u}function T(o){let e,t=o[6]&&V(o);const l={c:function(){e=ee("div"),t&&t.c(),this.h()},l:function(i){e=te(i,"DIV",{id:!0,"aria-live":!0,"aria-atomic":!0,style:!0});var u=ne(e);t&&t.l(u),u.forEach(R),this.h()},h:function(){D(e,"id","svelte-announcer"),D(e,"aria-live","assertive"),D(e,"aria-atomic","true"),h(e,"position","absolute"),h(e,"left","0"),h(e,"top","0"),h(e,"clip","rect(0 0 0 0)"),h(e,"clip-path","inset(50%)"),h(e,"overflow","hidden"),h(e,"white-space","nowrap"),h(e,"width","1px"),h(e,"height","1px"),Q(e,le,48,1,1110)},m:function(i,u){E(i,e,u),t&&t.m(e,null)},p:function(i,u){i[6]?t?t.p(i,u):(t=V(i),t.c(),t.m(e,null)):t&&(t.d(1),t=null)},d:function(i){i&&R(e),t&&t.d()}};return k("SvelteRegisterBlock",{block:l,id:T.name,type:"if",source:"(48:0) {#if mounted}",ctx:o}),l}function V(o){let e;const t={c:function(){e=oe(o[7])},l:function(c){e=se(c,o[7])},m:function(c,i){E(c,e,i)},p:function(c,i){i&128&&re(e,c[7])},d:function(c){c&&R(e)}};return k("SvelteRegisterBlock",{block:t,id:V.name,type:"if",source:"(50:2) {#if navigated}",ctx:o}),t}function A(o){let e,t,l,c,i;const u=[W,U],a=[];function n(m,f){return m[1][1]?0:1}e=n(o),t=a[e]=u[e](o);let s=o[5]&&T(o);const _={c:function(){t.c(),l=x(),s&&s.c(),c=g()},l:function(f){t.l(f),l=$(f),s&&s.l(f),c=g()},m:function(f,d){a[e].m(f,d),E(f,l,d),s&&s.m(f,d),E(f,c,d),i=!0},p:function(f,[d]){let p=e;e=n(f),e===p?a[e].p(f,d):(L(),v(a[p],1,1,()=>{a[p]=null}),I(),t=a[e],t?t.p(f,d):(t=a[e]=u[e](f),t.c()),b(t,1),t.m(l.parentNode,l)),f[5]?s?s.p(f,d):(s=T(f),s.c(),s.m(c.parentNode,c)):s&&(s.d(1),s=null)},i:function(f){i||(b(t),i=!0)},o:function(f){v(t),i=!1},d:function(f){f&&(R(l),R(c)),a[e].d(f),s&&s.d(f)}};return k("SvelteRegisterBlock",{block:_,id:A.name,type:"component",source:"",ctx:o}),_}function fe(o,e,t){let{$$slots:l={},$$scope:c}=e;Z("Root",l,[]);let{stores:i}=e,{page:u}=e,{constructors:a}=e,{components:n=[]}=e,{form:s}=e,{data_0:_=null}=e,{data_1:m=null}=e;j(i.page.notify);let f=!1,d=!1,p=null;C(()=>{const r=i.page.subscribe(()=>{f&&(t(6,d=!0),t(7,p=document.title||"untitled page"))});return t(5,f=!0),r}),o.$$.on_mount.push(function(){i===void 0&&!("stores"in e||o.$$.bound[o.$$.props.stores])&&console.warn("<Root> was created without expected prop 'stores'"),u===void 0&&!("page"in e||o.$$.bound[o.$$.props.page])&&console.warn("<Root> was created without expected prop 'page'"),a===void 0&&!("constructors"in e||o.$$.bound[o.$$.props.constructors])&&console.warn("<Root> was created without expected prop 'constructors'"),s===void 0&&!("form"in e||o.$$.bound[o.$$.props.form])&&console.warn("<Root> was created without expected prop 'form'")});const F=["stores","page","constructors","components","form","data_0","data_1"];Object.keys(e).forEach(r=>{!~F.indexOf(r)&&r.slice(0,2)!=="$$"&&r!=="slot"&&console.warn(`<Root> was created with unknown prop '${r}'`)});function G(r){B[r?"unshift":"push"](()=>{n[1]=r,t(0,n)})}function H(r){B[r?"unshift":"push"](()=>{n[0]=r,t(0,n)})}function J(r){B[r?"unshift":"push"](()=>{n[0]=r,t(0,n)})}return o.$$set=r=>{"stores"in r&&t(8,i=r.stores),"page"in r&&t(9,u=r.page),"constructors"in r&&t(1,a=r.constructors),"components"in r&&t(0,n=r.components),"form"in r&&t(2,s=r.form),"data_0"in r&&t(3,_=r.data_0),"data_1"in r&&t(4,m=r.data_1)},o.$capture_state=()=>({setContext:M,afterUpdate:j,onMount:C,browser:ue,stores:i,page:u,constructors:a,components:n,form:s,data_0:_,data_1:m,mounted:f,navigated:d,title:p}),o.$inject_state=r=>{"stores"in r&&t(8,i=r.stores),"page"in r&&t(9,u=r.page),"constructors"in r&&t(1,a=r.constructors),"components"in r&&t(0,n=r.components),"form"in r&&t(2,s=r.form),"data_0"in r&&t(3,_=r.data_0),"data_1"in r&&t(4,m=r.data_1),"mounted"in r&&t(5,f=r.mounted),"navigated"in r&&t(6,d=r.navigated),"title"in r&&t(7,p=r.title)},e&&"$$inject"in e&&o.$inject_state(e.$$inject),o.$$.update=()=>{o.$$.dirty&768&&i.page.set(u)},[n,a,s,_,m,f,d,p,i,u,G,H,J]}class he extends X{constructor(e){super(e),Y(this,e,fe,A,K,{stores:8,page:9,constructors:1,components:0,form:2,data_0:3,data_1:4}),k("SvelteRegisterComponent",{component:this,tagName:"Root",options:e,id:A.name})}get stores(){throw new Error("<Root>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set stores(e){throw new Error("<Root>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get page(){throw new Error("<Root>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set page(e){throw new Error("<Root>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get constructors(){throw new Error("<Root>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set constructors(e){throw new Error("<Root>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get components(){throw new Error("<Root>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set components(e){throw new Error("<Root>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get form(){throw new Error("<Root>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set form(e){throw new Error("<Root>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get data_0(){throw new Error("<Root>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set data_0(e){throw new Error("<Root>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get data_1(){throw new Error("<Root>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set data_1(e){throw new Error("<Root>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}}const pe=[()=>w(()=>import("../nodes/0.4411e011.js"),["_app/immutable/nodes/0.4411e011.js","_app/immutable/chunks/scheduler.50dc1d72.js","_app/immutable/chunks/index.1558d124.js","_app/immutable/chunks/firebase.420b8590.js","_app/immutable/chunks/index.52347cb7.js","_app/immutable/assets/0.e00800db.css"]),()=>w(()=>import("../nodes/1.339d5e7e.js"),["_app/immutable/nodes/1.339d5e7e.js","_app/immutable/chunks/scheduler.50dc1d72.js","_app/immutable/chunks/index.1558d124.js","_app/immutable/chunks/singletons.d95380a7.js","_app/immutable/chunks/index.52347cb7.js"]),()=>w(()=>import("../nodes/2.48747447.js"),["_app/immutable/nodes/2.48747447.js","_app/immutable/chunks/firebase.420b8590.js","_app/immutable/chunks/index.52347cb7.js","_app/immutable/chunks/scheduler.50dc1d72.js","_app/immutable/chunks/index.1558d124.js","_app/immutable/chunks/globals.7f7f1b26.js","_app/immutable/chunks/handleExplore.26eb26b8.js"]),()=>w(()=>import("../nodes/3.b62967be.js"),["_app/immutable/nodes/3.b62967be.js","_app/immutable/chunks/firebase.420b8590.js","_app/immutable/chunks/index.52347cb7.js","_app/immutable/chunks/scheduler.50dc1d72.js","_app/immutable/chunks/index.1558d124.js","_app/immutable/chunks/globals.7f7f1b26.js"]),()=>w(()=>import("../nodes/4.dba6838d.js"),["_app/immutable/nodes/4.dba6838d.js","_app/immutable/chunks/scheduler.50dc1d72.js","_app/immutable/chunks/index.1558d124.js","_app/immutable/chunks/AuthCheck.e4a93936.js","_app/immutable/chunks/firebase.420b8590.js","_app/immutable/chunks/index.52347cb7.js","_app/immutable/chunks/createKeywords.1f7c83c2.js"]),()=>w(()=>import("../nodes/5.8966100c.js"),["_app/immutable/nodes/5.8966100c.js","_app/immutable/chunks/firebase.420b8590.js","_app/immutable/chunks/index.52347cb7.js","_app/immutable/chunks/scheduler.50dc1d72.js","_app/immutable/chunks/index.1558d124.js","_app/immutable/chunks/globals.7f7f1b26.js","_app/immutable/chunks/createKeywords.1f7c83c2.js"]),()=>w(()=>import("../nodes/6.46a0b03e.js"),["_app/immutable/nodes/6.46a0b03e.js","_app/immutable/chunks/firebase.420b8590.js","_app/immutable/chunks/index.52347cb7.js","_app/immutable/chunks/scheduler.50dc1d72.js","_app/immutable/chunks/index.1558d124.js","_app/immutable/chunks/CardUser.a5638e0b.js","_app/immutable/chunks/handleExplore.26eb26b8.js"]),()=>w(()=>import("../nodes/7.32f6e9c8.js"),["_app/immutable/nodes/7.32f6e9c8.js","_app/immutable/chunks/firebase.420b8590.js","_app/immutable/chunks/index.52347cb7.js","_app/immutable/chunks/scheduler.50dc1d72.js","_app/immutable/chunks/index.1558d124.js","_app/immutable/chunks/CardUser.a5638e0b.js","_app/immutable/chunks/handleExplore.26eb26b8.js","_app/immutable/chunks/AuthCheck.e4a93936.js"])],we=[],ge={"/":[2],"/menu/create":[4],"/menu/edit/[menuId]":[5],"/menu/[menuId]":[3],"/user/your-favorite":[7],"/user/[uid]":[6]},ve={handleError:({error:o})=>{console.error(o)}};export{ge as dictionary,ve as hooks,de as matchers,pe as nodes,he as root,we as server_loads};
