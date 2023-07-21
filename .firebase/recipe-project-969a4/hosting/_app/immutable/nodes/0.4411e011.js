import{s as Pe,e as Ze,v as qe,f as He,d as f,g as K,u as Ye,h as ze,i as We,n as Ue}from"../chunks/scheduler.50dc1d72.js";import{S as Fe,i as Je,d as H,v as Ke,j as d,s as $,o as le,k as h,l as g,z as oe,g as i,c as G,p as ie,m as s,a as I,A as u,B as _e,f as Qe,t as Xe,q as et}from"../chunks/index.1558d124.js";import{d as tt,a as at,s as st,b as lt,c as fe,u as de,G as Be,e as Ae,f as $e}from"../chunks/firebase.420b8590.js";async function Ge(l){const e=tt(at,`users/${l.uid}`),t={uid:l.uid,name:l.displayName??"annonymous",email:l.email,photoURL:l.photoURL,lastestSignIn:st()};try{await lt(e,t,{merge:!0}),console.log("Successfully writing user to the database!")}catch(o){console.error("Error writing to the database:",o)}}const m="src/routes/+layout.svelte";function he(l){var p;let e,t=((p=l[0])==null?void 0:p.displayName)+"",o;const v={c:function(){e=d("h1"),o=le(t),this.h()},l:function(n){e=h(n,"H1",{class:!0});var _=g(e);o=ie(_,t),_.forEach(i),this.h()},h:function(){s(e,"class","text-right text-base lg:text-lg my-auto mr-2 md:mr-3 lg:mr-4"),f(e,m,28,12,721)},m:function(n,_){I(n,e,_),u(e,o)},p:function(n,_){var r;_&1&&t!==(t=((r=n[0])==null?void 0:r.displayName)+"")&&et(o,t)},d:function(n){n&&i(e)}};return H("SvelteRegisterBlock",{block:v,id:he.name,type:"if",source:"(25:8) {#if $user}",ctx:l}),v}function Ve(l){let e,t;const o={c:function(){e=d("img"),this.h()},l:function(p){e=h(p,"IMG",{class:!0,src:!0,alt:!0}),this.h()},h:function(){s(e,"class","rounded-full opacity-80"),K(e.src,t="/icons/user.png")||s(e,"src",t),s(e,"alt","Profile"),f(e,m,41,20,1368)},m:function(p,a){I(p,e,a)},p:Ue,d:function(p){p&&i(e)}};return H("SvelteRegisterBlock",{block:o,id:Ve.name,type:"else",source:"(38:16) {:else}",ctx:l}),o}function Me(l){let e,t,o;const v={c:function(){e=d("img"),this.h()},l:function(a){e=h(a,"IMG",{class:!0,src:!0,alt:!0}),this.h()},h:function(){var a;s(e,"class","rounded-full"),K(e.src,t=l[0].photoURL)||s(e,"src",t),s(e,"alt",o=(a=l[0].displayName)==null?void 0:a.substring(0,1)),f(e,m,35,20,1141)},m:function(a,n){I(a,e,n)},p:function(a,n){var _;n&1&&!K(e.src,t=a[0].photoURL)&&s(e,"src",t),n&1&&o!==(o=(_=a[0].displayName)==null?void 0:_.substring(0,1))&&s(e,"alt",o)},d:function(a){a&&i(e)}};return H("SvelteRegisterBlock",{block:v,id:Me.name,type:"if",source:"(32:16) {#if $user}",ctx:l}),v}function Oe(l){let e,t,o="Sign in",v,p;const a={c:function(){e=d("li"),t=d("button"),t.textContent=o,this.h()},l:function(_){e=h(_,"LI",{});var r=g(e);t=h(r,"BUTTON",{class:!0,"data-svelte-h":!0}),oe(t)!=="svelte-1akmxch"&&(t.textContent=o),r.forEach(i),this.h()},h:function(){s(t,"class","text-base"),f(t,m,74,24,2582),f(e,m,73,20,2553)},m:function(_,r){I(_,e,r),u(e,t),v||(p=_e(t,"click",l[1],!1,!1,!1,!1),v=!0)},p:Ue,d:function(_){_&&i(e),v=!1,p()}};return H("SvelteRegisterBlock",{block:a,id:Oe.name,type:"else",source:"(70:16) {:else}",ctx:l}),a}function Te(l){let e,t,o,v,p,a,n,_="Your favorite",r,x,y,O="Sign out",L,T;const S={c:function(){e=d("li"),t=d("a"),o=le("Your menu"),p=$(),a=d("li"),n=d("a"),n.textContent=_,r=$(),x=d("li"),y=d("button"),y.textContent=O,this.h()},l:function(b){e=h(b,"LI",{});var w=g(e);t=h(w,"A",{href:!0,class:!0});var j=g(t);o=ie(j,"Your menu"),j.forEach(i),w.forEach(i),p=G(b),a=h(b,"LI",{});var Y=g(a);n=h(Y,"A",{href:!0,class:!0,"data-svelte-h":!0}),oe(n)!=="svelte-ef7hum"&&(n.textContent=_),Y.forEach(i),r=G(b),x=h(b,"LI",{});var z=g(x);y=h(z,"BUTTON",{class:!0,"data-svelte-h":!0}),oe(y)!=="svelte-u8jr27"&&(y.textContent=O),z.forEach(i),this.h()},h:function(){s(t,"href",v="/user/"+l[0].uid),s(t,"class","text-base"),f(t,m,55,24,1889),f(e,m,54,20,1860),s(n,"href","/user/your-favorite"),s(n,"class","text-base"),f(n,m,60,24,2078),f(a,m,59,20,2049),s(y,"class","text-base"),f(y,m,65,24,2273),f(x,m,64,20,2244)},m:function(b,w){I(b,e,w),u(e,t),u(t,o),I(b,p,w),I(b,a,w),u(a,n),I(b,r,w),I(b,x,w),u(x,y),L||(T=_e(y,"click",l[4],!1,!1,!1,!1),L=!0)},p:function(b,w){w&1&&v!==(v="/user/"+b[0].uid)&&s(t,"href",v)},d:function(b){b&&(i(e),i(p),i(a),i(r),i(x)),L=!1,T()}};return H("SvelteRegisterBlock",{block:S,id:Te.name,type:"if",source:"(51:16) {#if $user}",ctx:l}),S}function me(l){let e,t,o,v="Recipe",p,a,n,_,r,x,y,O,L,T,S,R,b,w,j,Y,z,W,D,P,U,pe,ne,Z,V,ve,re,q,M,be,F,ce,ge,k=l[0]&&he(l);function ye(A,c){return A[0]?Me:Ve}let Q=ye(l),N=Q(l);function ke(A,c){return A[0]?Te:Oe}let X=ke(l),B=X(l);const ue=l[3].default,C=Ze(ue,l,l[2],null),Ee={c:function(){e=d("div"),t=d("div"),o=d("a"),o.textContent=v,p=$(),a=d("div"),k&&k.c(),n=$(),_=d("div"),r=d("label"),N.c(),x=$(),y=d("ul"),B.c(),O=$(),L=d("div"),C&&C.c(),T=$(),S=d("footer"),R=d("div"),b=d("p"),w=le("created by NextZtepS "),j=d("br"),Y=le("Developer, Harvey Mudd College '26"),z=$(),W=d("div"),D=d("div"),P=d("a"),U=d("img"),ne=$(),Z=d("a"),V=d("img"),re=$(),q=d("a"),M=d("img"),this.h()},l:function(c){e=h(c,"DIV",{class:!0});var E=g(e);t=h(E,"DIV",{class:!0});var we=g(t);o=h(we,"A",{href:!0,class:!0,"data-svelte-h":!0}),oe(o)!=="svelte-hy37u"&&(o.textContent=v),we.forEach(i),p=G(E),a=h(E,"DIV",{class:!0});var ee=g(a);k&&k.l(ee),n=G(ee),_=h(ee,"DIV",{class:!0});var te=g(_);r=h(te,"LABEL",{tabindex:!0,class:!0});var Ie=g(r);N.l(Ie),Ie.forEach(i),x=G(te),y=h(te,"UL",{tabindex:!0,class:!0});var Se=g(y);B.l(Se),Se.forEach(i),te.forEach(i),ee.forEach(i),E.forEach(i),O=G(c),L=h(c,"DIV",{class:!0});var Ce=g(L);C&&C.l(Ce),Ce.forEach(i),T=G(c),S=h(c,"FOOTER",{class:!0});var ae=g(S);R=h(ae,"DIV",{});var Le=g(R);b=h(Le,"P",{class:!0});var se=g(b);w=ie(se,"created by NextZtepS "),j=h(se,"BR",{}),Y=ie(se,"Developer, Harvey Mudd College '26"),se.forEach(i),Le.forEach(i),z=G(ae),W=h(ae,"DIV",{});var Re=g(W);D=h(Re,"DIV",{class:!0});var J=g(D);P=h(J,"A",{href:!0});var xe=g(P);U=h(xe,"IMG",{alt:!0,src:!0,width:!0}),xe.forEach(i),ne=G(J),Z=h(J,"A",{href:!0});var De=g(Z);V=h(De,"IMG",{alt:!0,src:!0,width:!0}),De.forEach(i),re=G(J),q=h(J,"A",{href:!0});var Ne=g(q);M=h(Ne,"IMG",{alt:!0,src:!0,width:!0}),Ne.forEach(i),J.forEach(i),Re.forEach(i),ae.forEach(i),this.h()},h:function(){s(o,"href","/"),s(o,"class","btn btn-ghost normal-case text-2xl lg:text-3xl"),f(o,m,23,8,547),s(t,"class","navbar-start"),f(t,m,22,4,512),s(r,"tabindex","0"),s(r,"class","btn btn-ghost btn-circle avatar top-1"),f(r,m,33,12,1026),s(y,"tabindex","0"),s(y,"class","menu menu-md dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-auto"),f(y,m,49,12,1658),s(_,"class","dropdown dropdown-end"),f(_,m,30,8,842),s(a,"class","navbar-end"),f(a,m,26,4,664),s(e,"class","navbar bg-primary p-8"),f(e,m,21,0,472),s(L,"class","p-2 sm:px-4 sm:py-6 lg:px-6 lg:py-8"),f(L,m,84,0,2807),f(j,m,91,33,3027),s(b,"class","font-bold"),f(b,m,90,8,2972),f(R,m,89,4,2958),s(U,"alt","email"),K(U.src,pe="/icons/email.png")||s(U,"src",pe),s(U,"width","32"),f(U,m,97,16,3224),s(P,"href","mailto:natdanaiongarjvaja@gmail.com"),f(P,m,96,12,3161),s(V,"alt","github"),K(V.src,ve="/icons/github.png")||s(V,"src",ve),s(V,"width","32"),f(V,m,100,16,3363),s(Z,"href","https://github.com/NextZtepS"),f(Z,m,99,12,3307),s(M,"alt","github"),K(M.src,be="/icons/user.png")||s(M,"src",be),s(M,"width","32"),f(M,m,103,16,3504),s(q,"href","https://github.com/NextZtepS"),f(q,m,102,12,3448),s(D,"class","grid grid-flow-col gap-4"),f(D,m,95,8,3110),f(W,m,94,4,3096),s(S,"class","footer footer-center p-8 bg-secondary text-primary-content"),f(S,m,88,0,2878)},m:function(c,E){I(c,e,E),u(e,t),u(t,o),u(e,p),u(e,a),k&&k.m(a,null),u(a,n),u(a,_),u(_,r),N.m(r,null),u(_,x),u(_,y),B.m(y,null),I(c,O,E),I(c,L,E),C&&C.m(L,null),I(c,T,E),I(c,S,E),u(S,R),u(R,b),u(b,w),u(b,j),u(b,Y),u(S,z),u(S,W),u(W,D),u(D,P),u(P,U),u(D,ne),u(D,Z),u(Z,V),u(D,re),u(D,q),u(q,M),F=!0,ce||(ge=_e(o,"click",je,!1,!1,!1,!1),ce=!0)},p:function(c,[E]){c[0]?k?k.p(c,E):(k=he(c),k.c(),k.m(a,n)):k&&(k.d(1),k=null),Q===(Q=ye(c))&&N?N.p(c,E):(N.d(1),N=Q(c),N&&(N.c(),N.m(r,null))),X===(X=ke(c))&&B?B.p(c,E):(B.d(1),B=X(c),B&&(B.c(),B.m(y,null))),C&&C.p&&(!F||E&4)&&Ye(C,ue,c,c[2],F?We(ue,c[2],E,null):ze(c[2]),null)},i:function(c){F||(Qe(C,c),F=!0)},o:function(c){Xe(C,c),F=!1},d:function(c){c&&(i(e),i(O),i(L),i(T),i(S)),k&&k.d(),N.d(),B.d(),C&&C.d(c),ce=!1,ge()}};return H("SvelteRegisterBlock",{block:Ee,id:me.name,type:"component",source:"",ctx:l}),Ee}function je(){location.href="/"}function ot(l,e,t){let o;qe(de,"user"),He(l,de,r=>t(0,o=r));let{$$slots:v={},$$scope:p}=e;Ke("Layout",v,["default"]);async function a(){const r=new Be;await Ae(fe,r)}const n=[];Object.keys(e).forEach(r=>{!~n.indexOf(r)&&r.slice(0,2)!=="$$"&&r!=="slot"&&console.warn(`<Layout> was created with unknown prop '${r}'`)});const _=()=>$e(fe);return l.$$set=r=>{"$$scope"in r&&t(2,p=r.$$scope)},l.$capture_state=()=>({auth:fe,user:de,writeUser:Ge,GoogleAuthProvider:Be,signInWithPopup:Ae,signOut:$e,signInWithGoogle:a,forceReload:je,$user:o}),l.$$.update=()=>{l.$$.dirty&1&&o&&Ge(o)},[o,a,p,v,_]}class ct extends Fe{constructor(e){super(e),Je(this,e,ot,me,Pe,{}),H("SvelteRegisterComponent",{component:this,tagName:"Layout",options:e,id:me.name})}}export{ct as component};
