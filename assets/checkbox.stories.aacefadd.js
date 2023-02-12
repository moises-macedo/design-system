var U=Object.defineProperty;var i=(e,t)=>U(e,"name",{value:t,configurable:!0});import{r as o}from"./index.88812a24.js";import{a as w,$ as z}from"./index.module.800fdd87.js";import{r as B}from"./index.50136d4d.js";import{j as p,F as g,a as W}from"./jsx-runtime.5d77d083.js";import{I as F,r as q}from"./IconBase.esm.42eea616.js";import{T as K}from"./text.20d27c9b.js";import"./iframe.1d8b6b1f.js";function N(){return N=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},N.apply(this,arguments)}i(N,"_extends$1");function X(e,t=[]){let n=[];function r(c,f){const u=o.exports.createContext(f),d=n.length;n=[...n,f];function a(l){const{scope:h,children:b,...x}=l,y=(h==null?void 0:h[e][d])||u,$=o.exports.useMemo(()=>x,Object.values(x));return o.exports.createElement(y.Provider,{value:$},b)}i(a,"Provider");function m(l,h){const b=(h==null?void 0:h[e][d])||u,x=o.exports.useContext(b);if(x)return x;if(f!==void 0)return f;throw new Error(`\`${l}\` must be used within \`${c}\``)}return i(m,"useContext"),a.displayName=c+"Provider",[a,m]}i(r,"$c512c27ab02ef895$export$fd42f52fd3ae1109");const s=i(()=>{const c=n.map(f=>o.exports.createContext(f));return i(function(u){const d=(u==null?void 0:u[e])||c;return o.exports.useMemo(()=>({[`__scope${e}`]:{...u,[e]:d}}),[u,d])},"useScope")},"createScope");return s.scopeName=e,[r,H(s,...t)]}i(X,"$c512c27ab02ef895$export$50c7b4e9d9f19c1");function H(...e){const t=e[0];if(e.length===1)return t;const n=i(()=>{const r=e.map(s=>({useScope:s(),scopeName:s.scopeName}));return i(function(c){const f=r.reduce((u,{useScope:d,scopeName:a})=>{const l=d(c)[`__scope${a}`];return{...u,...l}},{});return o.exports.useMemo(()=>({[`__scope${t.scopeName}`]:f}),[f])},"useComposedScopes")},"createScope1");return n.scopeName=t.scopeName,n}i(H,"$c512c27ab02ef895$var$composeContextScopes");function A(e,t,{checkForDefaultPrevented:n=!0}={}){return i(function(s){if(e==null||e(s),n===!1||!s.defaultPrevented)return t==null?void 0:t(s)},"handleEvent")}i(A,"$e42e1063c40fb3ef$export$b9ecd428b558ff10");function M(e){const t=o.exports.useRef(e);return o.exports.useEffect(()=>{t.current=e}),o.exports.useMemo(()=>(...n)=>{var r;return(r=t.current)===null||r===void 0?void 0:r.call(t,...n)},[])}i(M,"$b1b2314f5f9a1d84$export$25bec8c6f54ee79a");function Z({prop:e,defaultProp:t,onChange:n=i(()=>{},"onChange")}){const[r,s]=G({defaultProp:t,onChange:n}),c=e!==void 0,f=c?e:r,u=M(n),d=o.exports.useCallback(a=>{if(c){const l=typeof a=="function"?a(e):a;l!==e&&u(l)}else s(a)},[c,e,s,u]);return[f,d]}i(Z,"$71cd76cc60e0454e$export$6f32135080cb4c3");function G({defaultProp:e,onChange:t}){const n=o.exports.useState(e),[r]=n,s=o.exports.useRef(r),c=M(t);return o.exports.useEffect(()=>{s.current!==r&&(c(r),s.current=r)},[r,s,c]),n}i(G,"$71cd76cc60e0454e$var$useUncontrolledState");function J(e){const t=o.exports.useRef({value:e,previous:e});return o.exports.useMemo(()=>(t.current.value!==e&&(t.current.previous=t.current.value,t.current.value=e),t.current.previous),[e])}i(J,"$010c2913dbd2fe3d$export$5cae361ad82dce8b");const S=Boolean(globalThis==null?void 0:globalThis.document)?o.exports.useLayoutEffect:()=>{};function Q(e){const[t,n]=o.exports.useState(void 0);return S(()=>{if(e){n({width:e.offsetWidth,height:e.offsetHeight});const r=new ResizeObserver(s=>{if(!Array.isArray(s)||!s.length)return;const c=s[0];let f,u;if("borderBoxSize"in c){const d=c.borderBoxSize,a=Array.isArray(d)?d[0]:d;f=a.inlineSize,u=a.blockSize}else f=e.offsetWidth,u=e.offsetHeight;n({width:f,height:u})});return r.observe(e,{box:"border-box"}),()=>r.unobserve(e)}else n(void 0)},[e]),t}i(Q,"$db6c3485150b8e66$export$1ab7ae714698c4b8");function Y(e,t){return o.exports.useReducer((n,r)=>{const s=t[n][r];return s!=null?s:n},e)}i(Y,"$fe963b355347cc68$export$3e6543de14f8614f");const R=i(e=>{const{present:t,children:n}=e,r=V(t),s=typeof n=="function"?n({present:r.isPresent}):o.exports.Children.only(n),c=w(r.ref,s.ref);return typeof n=="function"||r.isPresent?o.exports.cloneElement(s,{ref:c}):null},"$921a889cee6df7e8$export$99c2b779aa4e8b8b");R.displayName="Presence";function V(e){const[t,n]=o.exports.useState(),r=o.exports.useRef({}),s=o.exports.useRef(e),c=o.exports.useRef("none"),f=e?"mounted":"unmounted",[u,d]=Y(f,{mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}});return o.exports.useEffect(()=>{const a=P(r.current);c.current=u==="mounted"?a:"none"},[u]),S(()=>{const a=r.current,m=s.current;if(m!==e){const h=c.current,b=P(a);e?d("MOUNT"):b==="none"||(a==null?void 0:a.display)==="none"?d("UNMOUNT"):d(m&&h!==b?"ANIMATION_OUT":"UNMOUNT"),s.current=e}},[e,d]),S(()=>{if(t){const a=i(l=>{const b=P(r.current).includes(l.animationName);l.target===t&&b&&B.exports.flushSync(()=>d("ANIMATION_END"))},"handleAnimationEnd"),m=i(l=>{l.target===t&&(c.current=P(r.current))},"handleAnimationStart");return t.addEventListener("animationstart",m),t.addEventListener("animationcancel",a),t.addEventListener("animationend",a),()=>{t.removeEventListener("animationstart",m),t.removeEventListener("animationcancel",a),t.removeEventListener("animationend",a)}}else d("ANIMATION_END")},[t,d]),{isPresent:["mounted","unmountSuspended"].includes(u),ref:o.exports.useCallback(a=>{a&&(r.current=getComputedStyle(a)),n(a)},[])}}i(V,"$921a889cee6df7e8$var$usePresence");function P(e){return(e==null?void 0:e.animationName)||"none"}i(P,"$921a889cee6df7e8$var$getAnimationName");function E(){return E=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},E.apply(this,arguments)}i(E,"_extends");const ee=["a","button","div","h2","h3","img","label","li","nav","ol","p","span","svg","ul"],I=ee.reduce((e,t)=>{const n=o.exports.forwardRef((r,s)=>{const{asChild:c,...f}=r,u=c?z:t;return o.exports.useEffect(()=>{window[Symbol.for("radix-ui")]=!0},[]),o.exports.createElement(u,E({},f,{ref:s}))});return n.displayName=`Primitive.${t}`,{...e,[t]:n}},{}),L="Checkbox",[te,ke]=X(L),[ne,re]=te(L),oe=o.exports.forwardRef((e,t)=>{const{__scopeCheckbox:n,name:r,checked:s,defaultChecked:c,required:f,disabled:u,value:d="on",onCheckedChange:a,...m}=e,[l,h]=o.exports.useState(null),b=w(t,v=>h(v)),x=o.exports.useRef(!1),y=l?Boolean(l.closest("form")):!0,[$=!1,D]=Z({prop:s,defaultProp:c,onChange:a});return o.exports.createElement(ne,{scope:n,state:$,disabled:u},o.exports.createElement(I.button,N({type:"button",role:"checkbox","aria-checked":k($)?"mixed":$,"aria-required":f,"data-state":T($),"data-disabled":u?"":void 0,disabled:u,value:d},m,{ref:b,onKeyDown:A(e.onKeyDown,v=>{v.key==="Enter"&&v.preventDefault()}),onClick:A(e.onClick,v=>{D(O=>k(O)?!0:!O),y&&(x.current=v.isPropagationStopped(),x.current||v.stopPropagation())})})),y&&o.exports.createElement(ae,{control:l,bubbles:!x.current,name:r,value:d,checked:$,required:f,disabled:u,style:{transform:"translateX(-100%)"}}))}),se="CheckboxIndicator",ce=o.exports.forwardRef((e,t)=>{const{__scopeCheckbox:n,forceMount:r,...s}=e,c=re(se,n);return o.exports.createElement(R,{present:r||k(c.state)||c.state===!0},o.exports.createElement(I.span,N({"data-state":T(c.state),"data-disabled":c.disabled?"":void 0},s,{ref:t,style:{pointerEvents:"none",...e.style}})))}),ae=i(e=>{const{control:t,checked:n,bubbles:r=!0,...s}=e,c=o.exports.useRef(null),f=J(n),u=Q(t);return o.exports.useEffect(()=>{const d=c.current,a=window.HTMLInputElement.prototype,l=Object.getOwnPropertyDescriptor(a,"checked").set;if(f!==n&&l){const h=new Event("click",{bubbles:r});d.indeterminate=k(n),l.call(d,k(n)?!1:n),d.dispatchEvent(h)}},[f,n,r]),o.exports.createElement("input",N({type:"checkbox","aria-hidden":!0,defaultChecked:k(n)?!1:n},s,{tabIndex:-1,ref:c,style:{...e.style,...u,position:"absolute",pointerEvents:"none",opacity:0,margin:0}}))},"$e698a72e93240346$var$BubbleInput");function k(e){return e==="indeterminate"}i(k,"$e698a72e93240346$var$isIndeterminate");function T(e){return k(e)?"indeterminate":e?"checked":"unchecked"}i(T,"$e698a72e93240346$var$getState");const ie=oe,ue=ce;var C=new Map;C.set("bold",function(e){return p(g,{children:p("polyline",{points:"216 72 104 184 48 128",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"})})});C.set("duotone",function(e){return p(g,{children:p("polyline",{points:"216 72 104 184 48 128",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"})})});C.set("fill",function(){return p(g,{children:p("path",{d:"M104,192a8.5,8.5,0,0,1-5.7-2.3l-56-56a8.1,8.1,0,0,1,11.4-11.4L104,172.7,210.3,66.3a8.1,8.1,0,0,1,11.4,11.4l-112,112A8.5,8.5,0,0,1,104,192Z"})})});C.set("light",function(e){return p(g,{children:p("polyline",{points:"216 72 104 184 48 128",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"})})});C.set("thin",function(e){return p(g,{children:p("polyline",{points:"216 72 104 184 48 128",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"})})});C.set("regular",function(e){return p(g,{children:p("polyline",{points:"216 72 104 184 48 128",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"})})});var de=i(function(t,n){return q(t,n,C)},"renderPath"),j=o.exports.forwardRef(function(e,t){return p(F,{...Object.assign({ref:t},e,{renderPath:de})})});j.displayName="Check";const fe=j,_=i(e=>p(ie,{className:"w-6 h-6 p-[2px] bg-gray-800 rounded",children:p(ue,{asChild:!0,...e,children:p(fe,{weight:"bold",className:"h-5 w-5 text-cyan-500"})})}),"Checkbox");try{_.displayName="Checkbox",_.__docgenInfo={description:"",displayName:"Checkbox",props:{}}}catch{}const Ce={title:"Components/Checkbox",component:_,args:{},decorators:[e=>W("div",{className:"flex items-center gap-2",children:[e(),p(K,{size:"sm",children:"Lembrar-me por 30 dias"})]})]},ge={},Ne=["Default"];export{ge as Default,Ne as __namedExportsOrder,Ce as default};
//# sourceMappingURL=checkbox.stories.aacefadd.js.map
