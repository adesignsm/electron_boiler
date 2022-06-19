(self.webpackChunklite=self.webpackChunklite||[]).push([[4869],{97147:(e,n,t)=>{"use strict";t.d(n,{c:()=>d});var i=t(319),a=t.n(i),r=t(13740),o=t(82002),l=t(47282),c={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"CatalogsListItemCovers_catalog"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Catalog"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",alias:{kind:"Name",value:"listItemsConnection"},name:{kind:"Name",value:"itemsConnection"},arguments:[{kind:"Argument",name:{kind:"Name",value:"pagingOptions"},value:{kind:"ObjectValue",fields:[{kind:"ObjectField",name:{kind:"Name",value:"limit"},value:{kind:"IntValue",value:"10"}}]}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"items"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"catalogItemId"}},{kind:"FragmentSpread",name:{kind:"Name",value:"PreviewCatalogCovers_catalogItemV2"}}]}}]}}]}}].concat(a()(l.x.definitions))},d={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"CatalogsListItem_catalog"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Catalog"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"name"}},{kind:"Field",name:{kind:"Name",value:"predefined"}},{kind:"Field",name:{kind:"Name",value:"visibility"}},{kind:"Field",name:{kind:"Name",value:"creator"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"username"}}]}},{kind:"FragmentSpread",name:{kind:"Name",value:"getCatalogSlugId_Catalog"}},{kind:"FragmentSpread",name:{kind:"Name",value:"formatItemsCount_catalog"}},{kind:"FragmentSpread",name:{kind:"Name",value:"CatalogsListItemCovers_catalog"}}]}}].concat(a()(r.g.definitions),a()(o.BR.definitions),a()(c.definitions))}},39210:(e,n,t)=>{"use strict";t.d(n,{W:()=>a,WU:()=>r,dT:()=>o,u7:()=>l,Ln:()=>c});var i=t(97217),a=50,r=20,o=20,l=10,c=function(e){var n=e.limit,t=e.withCatalogDetails,a=void 0!==t&&t;return{userId:e.userId,pagingOptions:{limit:n},type:i.HQ.LISTS,withCatalogDetails:a}}},21177:(e,n,t)=>{"use strict";t.d(n,{n:()=>l});var i=t(319),a=t.n(i),r=t(68216),o=t(27048),l={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"UserInListDialog_user"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"User"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"username"}},{kind:"Field",name:{kind:"Name",value:"bio"}},{kind:"Field",name:{kind:"Name",value:"name"}},{kind:"FragmentSpread",name:{kind:"Name",value:"userUrl_user"}},{kind:"FragmentSpread",name:{kind:"Name",value:"UserAvatar_user"}}]}}].concat(a()(r.$m.definitions),a()(o.W.definitions))}},82002:(e,n,t)=>{"use strict";t.d(n,{nf:()=>l,BR:()=>c,hz:()=>d});var i=t(319),a=t.n(i),r=t(21177),o=t(78693),l={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"getCatalogMiroURLForMetadata_catalog"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Catalog"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"thumbnailImage"}}]}}]},c={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"formatItemsCount_catalog"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Catalog"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"postItemsCount"}}]}}]},d={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"CatalogVotersDialog_catalogClapperConnection"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"CatalogClapperConnection"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"clappers"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"__typename"}},{kind:"Field",name:{kind:"Name",value:"user"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"__typename"}},{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"FragmentSpread",name:{kind:"Name",value:"UserInListDialog_user"}},{kind:"FragmentSpread",name:{kind:"Name",value:"UserFollowButton_user"}}]}},{kind:"Field",name:{kind:"Name",value:"clapCount"}}]}},{kind:"Field",name:{kind:"Name",value:"paging"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"nextPageCursor"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}}]}}]}}]}}].concat(a()(r.n.definitions),a()(o.s.definitions))}},1109:(e,n,t)=>{"use strict";t.d(n,{KB:()=>p,fg:()=>h,Fd:()=>C,SZ:()=>b,hz:()=>S,gs:()=>F,C2:()=>N,lp:()=>y,B0:()=>E,z6:()=>w,G6:()=>I});var i=t(28655),a=t.n(i),r=t(71439),o=t(23450),l=t.n(o),c=t(67294),d=t(21177),u=t(25550),s=t(32317),m=t(97217),f=t(46696);function k(){var e=a()(["\n  fragment CatalogVotersDialog_catalogClapperConnection on CatalogClapperConnection {\n    clappers {\n      __typename\n      user {\n        __typename\n        id\n        ...UserInListDialog_user\n        ...UserFollowButton_user\n      }\n      clapCount\n    }\n    paging {\n      nextPageCursor {\n        id\n      }\n    }\n  }\n  ","\n  ","\n"]);return k=function(){return e},e}function v(){var e=a()(["\n  fragment formatItemsCount_catalog on Catalog {\n    postItemsCount\n  }\n"]);return v=function(){return e},e}function g(){var e=a()(["\n  fragment getCatalogMiroURLForMetadata_catalog on Catalog {\n    thumbnailImage\n  }\n"]);return g=function(){return e},e}var p=function(){var e=(0,u.r)().viewerId;return(0,c.useCallback)((function(n){return e===n}),[e])},h=function(e){return p()(e)},C=function(e){return(0,f.W6)({miroId:e.thumbnailImage})},b=function(e){var n=e.postItemsCount;return n>0?"".concat(e.postItemsCount," ").concat(l()("story",n)):""},S=((0,r.Ps)(g()),(0,r.Ps)(v()),(0,r.Ps)(k(),d.n,s.sj)),F=function(){return"This story is no longer available"},N=function(e){var n;return"Post"===(null===(n=e.entity)||void 0===n?void 0:n.__typename)&&e.entity.visibility===m.Wn.UNLISTED},y=60,E=280;function w(e){return!!e&&e.length>E}function I(e){return e.length>y}},87335:(e,n,t)=>{"use strict";t.d(n,{z:()=>i});var i=t(67294).createContext({isFetching:!1})},60015:(e,n,t)=>{"use strict";t.d(n,{P:()=>s});var i=t(63038),a=t.n(i),r=t(67294),o=t(87335),l=t(77355),c=t(47230),d=t(34135),u=!1;t.g.window&&function e(){window.requestAnimationFrame((function(){u=!0,setImmediate((function(){u=!1,e()}))}))}();var s=function(e){var n=e.children,t=e.fetchMore,i=e.scrollableEl,s=e.disabled,m=e.fetchMoreText,f=void 0===m?"Load more":m,k=e.fetchingPlaceholder,v=function(e){var n=e.fetchMore,t=e.scrollableEl,i=e.disabled,o=(0,r.useState)(!1),l=a()(o,2),c=l[0],s=l[1],m=(0,r.useRef)(null),f=(0,r.useRef)(!1),k=(0,r.useRef)(),v=(0,r.useMemo)((function(){return(0,d.jC)(t||void 0)}),[t]),g=(0,r.useRef)(c),p=(0,r.useRef)(n);(0,r.useEffect)((function(){g.current=c,p.current=n}),[c,n]);var h=(0,r.useCallback)((function(){return p.current?(s(!0),p.current().then((function(){return s(!1)}))):Promise.resolve()}),[]),C=(0,r.useCallback)((function(){f.current||(f.current=!0,k.current=function(e){if(!u)return window.requestAnimationFrame((function(){setImmediate((function(){return e()}))}));setImmediate((function(){return e()}))}((function(){if(f.current=!1,m.current&&!g.current&&p.current&&v instanceof d.pY){var e=v.ref,n=m.current.getBoundingClientRect(),t=e instanceof Window?e.innerHeight:e.clientHeight;n.top-t<3*t&&h().then((function(){return C()}))}})))}),[v]);return(0,r.useEffect)((function(){if(!i)return v.on("scroll",C),v.on("resize",C),function(){v.off("scroll",C),v.off("resize",C)}}),[v,C,i]),(0,r.useEffect)((function(){return C(),function(){k.current&&cancelAnimationFrame(k.current)}}),[]),{isFetching:c,bottomEdgeRef:m,handleFetchMore:h}}({fetchMore:t,scrollableEl:i,disabled:s}),g=v.isFetching,p=v.bottomEdgeRef,h=v.handleFetchMore;return r.createElement(o.z.Provider,{value:{isFetching:g}},r.createElement("div",null,n,g&&k,s&&t&&!g&&r.createElement(l.x,{display:"flex",justifyContent:"center",marginBottom:"48px"},r.createElement(c.z,{onClick:h},f)),r.createElement("div",{ref:p})))}},31708:(e,n,t)=>{"use strict";t.d(n,{n:()=>z});var i=t(67154),a=t.n(i),r=t(63038),o=t.n(r),l=t(6479),c=t.n(l),d=t(67294),u=t(77355),s=t(87691),m=t(14199),f=t(14646);function k(){return(k=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e}).apply(this,arguments)}var v=d.createElement("path",{fill:"#CC5454",d:"M13.3 13.9l.14-7.08h-1.78l.15 7.08h1.48zm-.74 1.43c-.68 0-1.13.44-1.13 1.12 0 .67.45 1.12 1.13 1.12.68 0 1.13-.45 1.13-1.12 0-.68-.44-1.12-1.12-1.12"}),g=d.createElement("path",{fill:"#CC5454",d:"M12.5 21a8.5 8.5 0 1 0 0-17 8.5 8.5 0 0 0 0 17zm0 1a9.5 9.5 0 1 1 0-19 9.5 9.5 0 0 1 0 19z"});const p=function(e){return d.createElement("svg",k({width:25,height:25,viewBox:"0 0 25 25"},e),v,g)};var h=function(e){return{padding:"4px 0",fontFamily:"inherit",fontSize:"inherit",fontWeight:"inherit",lineHeight:"inherit",textAlign:"inherit",borderWidth:0,outline:0,"::placeholder":{color:e.baseColor.text.lighter,opacity:.5}}},C={border:0,flex:1,overflow:"hidden",resize:"none",width:"100%"},b={color:"inherit",background:"inherit",fontStyle:"inherit"},S=function(e){var n=[h,C];return e?[].concat(n,[b]):n},F=function(e){if(e.current){e.current.rows=1;var n=e.current.scrollHeight/parseInt(getComputedStyle(e.current).lineHeight);e.current.rows=n}},N=d.forwardRef((function(e,n){var t=e.value,i=e.ariaLabel,a=e.autoFocus,r=e.onChange,o=e.placeholder,l=e.inheritCustomStyleSheet,c=function(e,n){var t=d.useRef(null);return d.useEffect((function(){[e,n].forEach((function(e){e&&("function"==typeof e?e(t.current):e.current=t.current)}))}),[e,n]),t}(d.useRef(null),n),u=d.useCallback((function(e){r&&r(e),F(c)}),[r,c]);d.useEffect((function(){return F(c)}),[t]);var s=(0,f.I)();return d.createElement("textarea",{"aria-label":i,autoFocus:a,className:s(S(l)),placeholder:o,onChange:u,ref:c,rows:1,value:t})})),y=function(e){var n=e.count,t=void 0===n?0:n,i=e.limit,a=e.scale,r=(0,f.I)();return d.createElement(s.F,{scale:a||"S"},d.createElement("span",{className:r((function(e){return{color:t>i?e.errorColor:e.baseColor.text.dark}}))},t),"/",i)},E={flex:"1"},w=function(e){var n=e.value,t=e.ariaLabel,i=e.autoFocus,a=e.isPassword,r=e.onChange,o=e.placeholder,l=e.name,c=(0,f.I)();return d.createElement("input",{"aria-label":t,className:c([[h,E]]),type:a?"password":"text",placeholder:o,value:n,name:l,onChange:r,autoFocus:i})},I=t(59713),x=t.n(I);function _(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function D(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?_(Object(t),!0).forEach((function(n){x()(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):_(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var O=function(e){return{borderWidth:"0px 0px 1px 0px",background:"linear-gradient(to right, ".concat(e.baseColor.border.normal,", 90%, white 100%)"),"-webkit-background-clip":"text","-webkit-text-fill-color":"transparent",color:"transparent",whiteSpace:"nowrap",overflow:"hidden",width:"100%"}},P=function(){return D(D({},O),{},{background:"white"})},R=function(e){var n=e.value,t=e.isAreaField,i=(0,f.I)(),a=t?P:O;return d.createElement("p",{key:n,className:i([h,a])},n)},j=function(e){return{fontWeight:e.newFonts.detail.boldWeight}},M=function(e){var n=e.hasError,t=e.isFocused,i=e.theme,a=e.isEditable;return n&&t||n?i.errorColor:t?i.baseColor.border.dark:a?i.baseColor.border.light:i.baseColor.border.lighter},L=function(e){var n=e.hasError,t=e.isFocused,i=e.omitBorder,a=e.isEditable;return function(e){return{display:"flex",width:"100%",borderStyle:"solid",borderWidth:i&&!n?0:"0px 0px 1px 0px",borderColor:M({hasError:n,isFocused:t,theme:e,isEditable:a})}}},B=function(e){return{marginBottom:"10px",color:e.baseColor.border.dark}},z=function(e){var n,t=e.characterCountLimit,i=e.characterCountScale,r=e.description,l=e.errorMessage,k=e.isEditable,v=void 0===k||k,g=e.isMultiline,h=void 0!==g&&g,C=e.label,b=e.omitBorder,S=e.onFocus,F=e.isPassword,E=void 0!==F&&F,I=e.scale,x=void 0===I?"M":I,_=e.hideErrorIcon,D=void 0!==_&&_,O=e.bold,P=void 0!==O&&O,M=e.inheritCustomStyleSheet,z=void 0!==M&&M,T=e.forwardedRef,U=c()(e,["characterCountLimit","characterCountScale","description","errorMessage","isEditable","isMultiline","label","omitBorder","onFocus","isPassword","scale","hideErrorIcon","bold","inheritCustomStyleSheet","forwardedRef"]),W=U.autoFocus,A=U.onBlur,H=!!l,V=(0,f.I)(),q=d.useState(!!W),K=o()(q,2),G=K[0],Q=K[1],Y=d.useCallback((function(e){S&&S(e),Q(!0)}),[S,Q]),Z=d.useCallback((function(e){A&&A(e),Q(!1)}),[A,Q]),$=(0,m.n)({name:"detail",scale:"S",color:"ERROR"}),J=(0,m.n)({name:"detail",scale:x,color:"DARKER"});return d.createElement("span",{className:V(P?[J,j]:J)},d.createElement(u.x,{display:"flex",flexDirection:"column",width:"100%"},C&&d.createElement("label",{className:V(B)},C),d.createElement("div",{onFocus:Y,onBlur:Z,className:V(L({hasError:H,isFocused:G,omitBorder:b,isEditable:v}))},v?h?d.createElement(N,a()({},U,{inheritCustomStyleSheet:z,ref:T})):d.createElement(w,a()({},U,{isPassword:E})):d.createElement(R,a()({},U,{isAreaField:h})),H&&!D&&d.createElement("span",{style:{paddingLeft:"10px"}},d.createElement(p,null))),d.createElement(u.x,{marginTop:"4px",display:"flex",justifyContent:"space-between"},H?d.createElement("h4",{className:V([$,{width:"100%",textAlign:"inherit"}])},l):d.createElement(s.F,{scale:"S"},r),!!t&&d.createElement(y,{count:null===(n=U.value)||void 0===n?void 0:n.length,limit:t,scale:i}))))}}}]);
//# sourceMappingURL=https://stats.medium.build/lite/sourcemaps/4869.ec849645.chunk.js.map