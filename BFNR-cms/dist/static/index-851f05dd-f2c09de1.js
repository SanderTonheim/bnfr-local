import{s as _,ax as g,q as j,P as w,ct as B,j as a,ag as L,cs as O,$ as T,aJ as S,ah as A,h as D,a3 as W,a0 as z}from"./sanity-f413bca0.js";import{P as C}from"./PaneItem-a96ebe52-195ac175.js";import{useDeskTool as G}from"./index-aba2361f-16ae6f3c.js";import"./index-7e18618d.js";var r;function H(n,t){return t||(t=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(t)}}))}const q=_.hr(r||(r=H([`
  background-color: var(--card-border-color);
  height: 1px;
  margin: 0;
  border: none;
`])));function M(n){const{childItemId:t,index:l,isActive:d,isSelected:p,pane:u,paneKey:h}=n,{features:f}=G(),{collapsed:m}=g(),{defaultLayout:y,displayOptions:c,items:i,menuItems:v,menuItemGroups:I,title:b}=u,P=c==null?void 0:c.showIcons,x=e=>{var o;const s=(o=e.displayOptions)==null?void 0:o.showIcon;return typeof s<"u"?s!==!1:P!==!1};return j(w,{currentMaxWidth:350,"data-testid":"desk-tool-list-pane",id:h,maxWidth:640,minWidth:320,selected:p,children:[B,a(L,{actions:a(O,{menuItems:v,menuItemGroups:I}),backButton:f.backButton&&l>0&&a(T,{as:S,"data-as":"a",icon:A,mode:"bleed"}),title:b}),a(D,{overflow:m?void 0:"auto",children:a(W,{padding:2,space:1,children:i&&i.map((e,o)=>{if(e.type==="divider")return a(z,{paddingY:1,children:a(q,{})},"divider-".concat(o));const s=!d&&t===e.id,k=d&&t===e.id;return a(C,{icon:x(e)?e.icon:!1,id:e.id,layout:y,pressed:s,schemaType:e.schemaType,selected:k,title:e.title,value:e._id&&e.schemaType?{_id:e._id,_type:e.schemaType.name,title:e.title}:void 0},e.id)})})})]})}export{M as default};
