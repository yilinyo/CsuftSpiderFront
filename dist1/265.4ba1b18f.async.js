(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[265],{64335:function(Te,k,d){"use strict";var Q=d(67294),q=(0,Q.createContext)({});k.Z=q},67265:function(Te,k,d){"use strict";d.d(k,{ZP:function(){return Ft}});var Q=d(38663),q=d(70883),O=d(22122),w=d(96156),Be=d(6610),Se=d(5991),Oe=d(10379),je=d(44144),_=d(90484),Ae=d(94184),A=d.n(Ae),X=d(48717),we=d(98423),i=d(67294),M=d(53124),ee=d(85061),te=d(75164);function Fe(n){var e,r=function(o){return function(){e=null,n.apply(void 0,(0,ee.Z)(o))}},t=function(){if(e==null){for(var o=arguments.length,l=new Array(o),c=0;c<o;c++)l[c]=arguments[c];e=(0,te.Z)(r(l))}};return t.cancel=function(){te.Z.cancel(e),e=null},t}function re(){return function(e,r,t){var a=t.value,o=!1;return{configurable:!0,get:function(){if(o||this===e.prototype||this.hasOwnProperty(r))return a;var c=Fe(a.bind(this));return o=!0,Object.defineProperty(this,r,{value:c,configurable:!0,writable:!0}),o=!1,c}}}}var He=d(64019);function W(n){return n!==window?n.getBoundingClientRect():{top:0,bottom:window.innerHeight}}function ae(n,e,r){if(r!==void 0&&e.top>n.top-r)return r+e.top}function ne(n,e,r){if(r!==void 0&&e.bottom<n.bottom+r){var t=window.innerHeight-e.bottom;return r+t}}var oe=["resize","scroll","touchstart","touchmove","touchend","pageshow","load"],L=[];function Vt(){return L}function ie(n,e){if(!!n){var r=L.find(function(t){return t.target===n});r?r.affixList.push(e):(r={target:n,affixList:[e],eventHandlers:{}},L.push(r),oe.forEach(function(t){r.eventHandlers[t]=(0,He.Z)(n,t,function(){r.affixList.forEach(function(a){a.lazyUpdatePosition()})})}))}}function le(n){var e=L.find(function(r){var t=r.affixList.some(function(a){return a===n});return t&&(r.affixList=r.affixList.filter(function(a){return a!==n})),t});e&&e.affixList.length===0&&(L=L.filter(function(r){return r!==e}),oe.forEach(function(r){var t=e.eventHandlers[r];t&&t.remove&&t.remove()}))}var se=function(n,e,r,t){var a=arguments.length,o=a<3?e:t===null?t=Object.getOwnPropertyDescriptor(e,r):t,l;if((typeof Reflect=="undefined"?"undefined":(0,_.Z)(Reflect))==="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(n,e,r,t);else for(var c=n.length-1;c>=0;c--)(l=n[c])&&(o=(a<3?l(o):a>3?l(e,r,o):l(e,r))||o);return a>3&&o&&Object.defineProperty(e,r,o),o};function Me(){return typeof window!="undefined"?window:null}var z;(function(n){n[n.None=0]="None",n[n.Prepare=1]="Prepare"})(z||(z={}));var U=function(n){(0,Oe.Z)(r,n);var e=(0,je.Z)(r);function r(){var t;return(0,Be.Z)(this,r),t=e.apply(this,arguments),t.state={status:z.None,lastAffix:!1,prevTarget:null},t.getOffsetTop=function(){var a=t.props,o=a.offsetBottom,l=a.offsetTop;return o===void 0&&l===void 0?0:l},t.getOffsetBottom=function(){return t.props.offsetBottom},t.savePlaceholderNode=function(a){t.placeholderNode=a},t.saveFixedNode=function(a){t.fixedNode=a},t.measure=function(){var a=t.state,o=a.status,l=a.lastAffix,c=t.props.onChange,f=t.getTargetFunc();if(!(o!==z.Prepare||!t.fixedNode||!t.placeholderNode||!f)){var v=t.getOffsetTop(),g=t.getOffsetBottom(),h=f();if(!!h){var s={status:z.None},C=W(h),m=W(t.placeholderNode),x=ae(m,C,v),P=ne(m,C,g);x!==void 0?(s.affixStyle={position:"fixed",top:x,width:m.width,height:m.height},s.placeholderStyle={width:m.width,height:m.height}):P!==void 0&&(s.affixStyle={position:"fixed",bottom:P,width:m.width,height:m.height},s.placeholderStyle={width:m.width,height:m.height}),s.lastAffix=!!s.affixStyle,c&&l!==s.lastAffix&&c(s.lastAffix),t.setState(s)}}},t.prepareMeasure=function(){if(t.setState({status:z.Prepare,affixStyle:void 0,placeholderStyle:void 0}),!1)var a},t}return(0,Se.Z)(r,[{key:"getTargetFunc",value:function(){var a=this.context.getTargetContainer,o=this.props.target;return o!==void 0?o:a||Me}},{key:"componentDidMount",value:function(){var a=this,o=this.getTargetFunc();o&&(this.timeout=setTimeout(function(){ie(o(),a),a.updatePosition()}))}},{key:"componentDidUpdate",value:function(a){var o=this.state.prevTarget,l=this.getTargetFunc(),c=(l==null?void 0:l())||null;o!==c&&(le(this),c&&(ie(c,this),this.updatePosition()),this.setState({prevTarget:c})),(a.offsetTop!==this.props.offsetTop||a.offsetBottom!==this.props.offsetBottom)&&this.updatePosition(),this.measure()}},{key:"componentWillUnmount",value:function(){clearTimeout(this.timeout),le(this),this.updatePosition.cancel(),this.lazyUpdatePosition.cancel()}},{key:"updatePosition",value:function(){this.prepareMeasure()}},{key:"lazyUpdatePosition",value:function(){var a=this.getTargetFunc(),o=this.state.affixStyle;if(a&&o){var l=this.getOffsetTop(),c=this.getOffsetBottom(),f=a();if(f&&this.placeholderNode){var v=W(f),g=W(this.placeholderNode),h=ae(g,v,l),s=ne(g,v,c);if(h!==void 0&&o.top===h||s!==void 0&&o.bottom===s)return}}this.prepareMeasure()}},{key:"render",value:function(){var a=this,o=this.state,l=o.affixStyle,c=o.placeholderStyle,f=this.props,v=f.affixPrefixCls,g=f.children,h=A()((0,w.Z)({},v,!!l)),s=(0,we.Z)(this.props,["prefixCls","offsetTop","offsetBottom","target","onChange","affixPrefixCls"]);return i.createElement(X.Z,{onResize:function(){a.updatePosition()}},i.createElement("div",(0,O.Z)({},s,{ref:this.savePlaceholderNode}),l&&i.createElement("div",{style:c,"aria-hidden":"true"}),i.createElement("div",{className:h,ref:this.saveFixedNode,style:l},i.createElement(X.Z,{onResize:function(){a.updatePosition()}},g))))}}]),r}(i.Component);U.contextType=M.E_,se([re()],U.prototype,"updatePosition",null),se([re()],U.prototype,"lazyUpdatePosition",null);var Le=i.forwardRef(function(n,e){var r=n.prefixCls,t=i.useContext(M.E_),a=t.getPrefixCls,o=a("affix",r),l=(0,O.Z)((0,O.Z)({},n),{affixPrefixCls:o});return i.createElement(U,(0,O.Z)({},l,{ref:e}))}),ze=Le,Jt=d(84305),G=d(75901),Qt=d(59903),qt=d(94233),_t=d(81262),er=d(59250),tr=d(30887),rr=d(49111),ce=d(28481),u=d(28991),$e={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M872 474H286.9l350.2-304c5.6-4.9 2.2-14-5.2-14h-88.5c-3.9 0-7.6 1.4-10.5 3.9L155 487.8a31.96 31.96 0 000 48.3L535.1 866c1.5 1.3 3.3 2 5.2 2h91.5c7.4 0 10.8-9.2 5.2-14L286.9 550H872c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z"}}]},name:"arrow-left",theme:"outlined"},Ie=$e,de=d(27029),fe=function(e,r){return i.createElement(de.Z,(0,u.Z)((0,u.Z)({},e),{},{ref:r,icon:Ie}))};fe.displayName="ArrowLeftOutlined";var De=i.forwardRef(fe),We={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M869 487.8L491.2 159.9c-2.9-2.5-6.6-3.9-10.5-3.9h-88.5c-7.4 0-10.8 9.2-5.2 14l350.2 304H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h585.1L386.9 854c-5.6 4.9-2.2 14 5.2 14h91.5c1.9 0 3.8-.7 5.2-2L869 536.2a32.07 32.07 0 000-48.4z"}}]},name:"arrow-right",theme:"outlined"},Ue=We,ue=function(e,r){return i.createElement(de.Z,(0,u.Z)((0,u.Z)({},e),{},{ref:r,icon:Ue}))};ue.displayName="ArrowRightOutlined";var Ge=i.forwardRef(ue),Ke=d(30470),ke=d(51890),Xe=d(50344),Ye=d(28682),Ve=d(96159),Je=d(57254),Qe=d(81555),qe=function(n,e){var r={};for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&e.indexOf(t)<0&&(r[t]=n[t]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(n);a<t.length;a++)e.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(n,t[a])&&(r[t[a]]=n[t[a]]);return r},ve=function(e){var r=e.prefixCls,t=e.separator,a=t===void 0?"/":t,o=e.children,l=e.overlay,c=e.dropdownProps,f=qe(e,["prefixCls","separator","children","overlay","dropdownProps"]),v=i.useContext(M.E_),g=v.getPrefixCls,h=g("breadcrumb",r),s=function(x){return l?i.createElement(Qe.Z,(0,O.Z)({overlay:l,placement:"bottom"},c),i.createElement("span",{className:"".concat(h,"-overlay-link")},x,i.createElement(Je.Z,null))):x},C;return"href"in f?C=i.createElement("a",(0,O.Z)({className:"".concat(h,"-link")},f),o):C=i.createElement("span",(0,O.Z)({className:"".concat(h,"-link")},f),o),C=s(C),o?i.createElement("li",null,C,a&&i.createElement("span",{className:"".concat(h,"-separator")},a)):null};ve.__ANT_BREADCRUMB_ITEM=!0;var me=ve,he=function(e){var r=e.children,t=i.useContext(M.E_),a=t.getPrefixCls,o=a("breadcrumb");return i.createElement("span",{className:"".concat(o,"-separator")},r||"/")};he.__ANT_BREADCRUMB_SEPARATOR=!0;var _e=he,et=function(n,e){var r={};for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&e.indexOf(t)<0&&(r[t]=n[t]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(n);a<t.length;a++)e.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(n,t[a])&&(r[t[a]]=n[t[a]]);return r};function tt(n,e){if(!n.breadcrumbName)return null;var r=Object.keys(e).join("|"),t=n.breadcrumbName.replace(new RegExp(":(".concat(r,")"),"g"),function(a,o){return e[o]||a});return t}function rt(n,e,r,t){var a=r.indexOf(n)===r.length-1,o=tt(n,e);return a?i.createElement("span",null,o):i.createElement("a",{href:"#/".concat(t.join("/"))},o)}var ge=function(e,r){return e=(e||"").replace(/^\//,""),Object.keys(r).forEach(function(t){e=e.replace(":".concat(t),r[t])}),e},at=function(e,r,t){var a=(0,ee.Z)(e),o=ge(r||"",t);return o&&a.push(o),a},Y=function(e){var r=e.prefixCls,t=e.separator,a=t===void 0?"/":t,o=e.style,l=e.className,c=e.routes,f=e.children,v=e.itemRender,g=v===void 0?rt:v,h=e.params,s=h===void 0?{}:h,C=et(e,["prefixCls","separator","style","className","routes","children","itemRender","params"]),m=i.useContext(M.E_),x=m.getPrefixCls,P=m.direction,p,Z=x("breadcrumb",r);if(c&&c.length>0){var N=[];p=c.map(function(y){var T=ge(y.path,s);T&&N.push(T);var B;return y.children&&y.children.length&&(B=i.createElement(Ye.Z,{items:y.children.map(function(S){return{key:S.path||S.breadcrumbName,label:g(S,s,c,at(N,S.path,s))}})})),i.createElement(me,{overlay:B,separator:a,key:T||y.breadcrumbName},g(y,s,c,N))})}else f&&(p=(0,Xe.Z)(f).map(function(y,T){return y&&(0,Ve.Tm)(y,{separator:a,key:T})}));var E=A()(Z,(0,w.Z)({},"".concat(Z,"-rtl"),P==="rtl"),l);return i.createElement("nav",(0,O.Z)({className:E,style:o},C),i.createElement("ol",null,p))};Y.Item=me,Y.Separator=_e;var nt=Y,ot=nt,it=d(42051),lt=d(19650),st=d(34952),ct=function(e,r,t){return!r||!t?null:i.createElement(it.Z,{componentName:"PageHeader"},function(a){return i.createElement("div",{className:"".concat(e,"-back")},i.createElement(st.Z,{onClick:function(l){t==null||t(l)},className:"".concat(e,"-back-button"),"aria-label":a.back},r))})},dt=function(e){return i.createElement(ot,(0,O.Z)({},e))},ft=function(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"ltr";return e.backIcon!==void 0?e.backIcon:r==="rtl"?i.createElement(Ge,null):i.createElement(De,null)},ut=function(e,r){var t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"ltr",a=r.title,o=r.avatar,l=r.subTitle,c=r.tags,f=r.extra,v=r.onBack,g="".concat(e,"-heading"),h=a||l||c||f;if(!h)return null;var s=ft(r,t),C=ct(e,s,v),m=C||o||h;return i.createElement("div",{className:g},m&&i.createElement("div",{className:"".concat(g,"-left")},C,o&&i.createElement(ke.C,(0,O.Z)({},o)),a&&i.createElement("span",{className:"".concat(g,"-title"),title:typeof a=="string"?a:void 0},a),l&&i.createElement("span",{className:"".concat(g,"-sub-title"),title:typeof l=="string"?l:void 0},l),c&&i.createElement("span",{className:"".concat(g,"-tags")},c)),f&&i.createElement("span",{className:"".concat(g,"-extra")},i.createElement(lt.Z,null,f)))},vt=function(e,r){return r?i.createElement("div",{className:"".concat(e,"-footer")},r):null},mt=function(e,r){return i.createElement("div",{className:"".concat(e,"-content")},r)},ht=function(e){var r=(0,Ke.Z)(!1),t=(0,ce.Z)(r,2),a=t[0],o=t[1],l=function(f){var v=f.width;o(v<768,!0)};return i.createElement(M.C,null,function(c){var f,v=c.getPrefixCls,g=c.pageHeader,h=c.direction,s,C=e.prefixCls,m=e.style,x=e.footer,P=e.children,p=e.breadcrumb,Z=e.breadcrumbRender,N=e.className,E=!0;"ghost"in e?E=e.ghost:g&&"ghost"in g&&(E=g.ghost);var y=v("page-header",C),T=function(){return(p==null?void 0:p.routes)?dt(p):null},B=T(),S=p&&"props"in p,F=(s=Z==null?void 0:Z(e,B))!==null&&s!==void 0?s:B,R=S?p:F,$=A()(y,N,(f={"has-breadcrumb":!!R,"has-footer":!!x},(0,w.Z)(f,"".concat(y,"-ghost"),E),(0,w.Z)(f,"".concat(y,"-rtl"),h==="rtl"),(0,w.Z)(f,"".concat(y,"-compact"),a),f));return i.createElement(X.Z,{onResize:l},i.createElement("div",{className:$,style:m},R,ut(y,e,h),P&&mt(y,P),vt(y,x)))})},gt=ht,V=d(81253),ar=d(18106),xe=d(60561),b=d(85893),K=d(64335),xt=d(97435),nr=d(56264),bt=["children","className","extra","style","renderContent"],Ct=function(e){var r=e.children,t=e.className,a=e.extra,o=e.style,l=e.renderContent,c=(0,V.Z)(e,bt),f=(0,i.useContext)(G.ZP.ConfigContext),v=f.getPrefixCls,g=e.prefixCls||v("pro"),h="".concat(g,"-footer-bar"),s=(0,i.useContext)(K.Z),C=(0,i.useMemo)(function(){var x=s.hasSiderMenu,P=s.isMobile,p=s.siderWidth;if(!!x)return p?P?"100%":"calc(100% - ".concat(p,"px)"):"100%"},[s.collapsed,s.hasSiderMenu,s.isMobile,s.siderWidth]),m=(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)("div",{className:"".concat(h,"-left"),children:a}),(0,b.jsx)("div",{className:"".concat(h,"-right"),children:r})]});return(0,i.useEffect)(function(){return!s||!(s==null?void 0:s.setHasFooterToolbar)?function(){}:(s==null||s.setHasFooterToolbar(!0),function(){var x;s==null||(x=s.setHasFooterToolbar)===null||x===void 0||x.call(s,!1)})},[]),(0,b.jsx)("div",(0,u.Z)((0,u.Z)({className:A()(t,"".concat(h)),style:(0,u.Z)({width:C},o)},(0,xt.Z)(c,["prefixCls"])),{},{children:l?l((0,u.Z)((0,u.Z)((0,u.Z)({},e),s),{},{leftWidth:C}),m):m}))},pt=Ct,or=d(53645),yt=function(e){var r=(0,i.useContext)(K.Z),t=e.children,a=e.contentWidth,o=e.className,l=e.style,c=(0,i.useContext)(G.ZP.ConfigContext),f=c.getPrefixCls,v=e.prefixCls||f("pro"),g=a||r.contentWidth,h="".concat(v,"-grid-content");return(0,b.jsx)("div",{className:A()(h,o,{wide:g==="Fixed"}),style:l,children:(0,b.jsx)("div",{className:"".concat(v,"-grid-content-children"),children:t})})},Pt=yt,Zt=d(83832),Nt=function(e){if(!e)return 1;var r=e.backingStorePixelRatio||e.webkitBackingStorePixelRatio||e.mozBackingStorePixelRatio||e.msBackingStorePixelRatio||e.oBackingStorePixelRatio||e.backingStorePixelRatio||1;return(window.devicePixelRatio||1)/r},Et=function(e){var r=e.children,t=e.style,a=e.className,o=e.markStyle,l=e.markClassName,c=e.zIndex,f=c===void 0?9:c,v=e.gapX,g=v===void 0?212:v,h=e.gapY,s=h===void 0?222:h,C=e.width,m=C===void 0?120:C,x=e.height,P=x===void 0?64:x,p=e.rotate,Z=p===void 0?-22:p,N=e.image,E=e.content,y=e.offsetLeft,T=e.offsetTop,B=e.fontStyle,S=B===void 0?"normal":B,F=e.fontWeight,R=F===void 0?"normal":F,$=e.fontColor,J=$===void 0?"rgba(0,0,0,.15)":$,be=e.fontSize,Ce=be===void 0?16:be,pe=e.fontFamily,ye=pe===void 0?"sans-serif":pe,Ht=e.prefixCls,Mt=(0,i.useContext)(G.ZP.ConfigContext),Lt=Mt.getPrefixCls,Pe=Lt("pro-layout-watermark",Ht),zt=A()("".concat(Pe,"-wrapper"),a),$t=A()(Pe,l),It=(0,i.useState)(""),Ze=(0,ce.Z)(It,2),Ne=Ze[0],Ee=Ze[1];return(0,i.useEffect)(function(){var I=document.createElement("canvas"),j=I.getContext("2d"),H=Nt(j),Dt="".concat((g+m)*H,"px"),Wt="".concat((s+P)*H,"px"),Ut=y||g/2,Gt=T||s/2;if(I.setAttribute("width",Dt),I.setAttribute("height",Wt),j){j.translate(Ut*H,Gt*H),j.rotate(Math.PI/180*Number(Z));var Kt=m*H,Re=P*H;if(N){var D=new Image;D.crossOrigin="anonymous",D.referrerPolicy="no-referrer",D.src=N,D.onload=function(){j.drawImage(D,0,0,Kt,Re),Ee(I.toDataURL())}}else if(E){var kt=Number(Ce)*H;j.font="".concat(S," normal ").concat(R," ").concat(kt,"px/").concat(Re,"px ").concat(ye),j.fillStyle=J,Array.isArray(E)?E==null||E.forEach(function(Xt,Yt){return j.fillText(Xt,0,Yt*50)}):j.fillText(E,0,0),Ee(I.toDataURL())}}else console.error("\u5F53\u524D\u73AF\u5883\u4E0D\u652F\u6301Canvas")},[g,s,y,T,Z,S,R,m,P,ye,J,N,E,Ce]),(0,b.jsxs)("div",{style:(0,u.Z)({position:"relative"},t),className:zt,children:[r,(0,b.jsx)("div",{className:$t,style:(0,u.Z)((0,u.Z)({zIndex:f,position:"absolute",left:0,top:0,width:"100%",height:"100%",backgroundSize:"".concat(g+m,"px"),pointerEvents:"none",backgroundRepeat:"repeat"},Ne?{backgroundImage:"url('".concat(Ne,"')")}:null),o)})]})},Rt=Et,ir=d(12395),Tt=["title","content","pageHeaderRender","header","prefixedClassName","extraContent","style","prefixCls","breadcrumbRender"],Bt=["children","loading","className","style","footer","affixProps","ghost","fixedHeader","breadcrumbRender"];function St(n){return(0,_.Z)(n)==="object"?n:{spinning:n}}var Ot=function(e){var r=e.tabList,t=e.tabActiveKey,a=e.onTabChange,o=e.tabBarExtraContent,l=e.tabProps,c=e.prefixedClassName;return Array.isArray(r)||o?(0,b.jsx)(xe.Z,(0,u.Z)((0,u.Z)({className:"".concat(c,"-tabs"),activeKey:t,onChange:function(v){a&&a(v)},tabBarExtraContent:o},l),{},{children:r==null?void 0:r.map(function(f,v){return(0,i.createElement)(xe.Z.TabPane,(0,u.Z)((0,u.Z)({},f),{},{tab:f.tab,key:f.key||v}))})})):null},jt=function(e,r,t){return!e&&!r?null:(0,b.jsx)("div",{className:"".concat(t,"-detail"),children:(0,b.jsx)("div",{className:"".concat(t,"-main"),children:(0,b.jsxs)("div",{className:"".concat(t,"-row"),children:[e&&(0,b.jsx)("div",{className:"".concat(t,"-content"),children:e}),r&&(0,b.jsx)("div",{className:"".concat(t,"-extraContent"),children:r})]})})})},lr=function(e){var r=useContext(RouteContext);return _jsx("div",{style:{height:"100%",display:"flex",alignItems:"center"},children:_jsx(_Breadcrumb,_objectSpread(_objectSpread(_objectSpread({},r==null?void 0:r.breadcrumb),r==null?void 0:r.breadcrumbProps),e))})},At=function(e){var r,t=(0,i.useContext)(K.Z),a=e.title,o=e.content,l=e.pageHeaderRender,c=e.header,f=e.prefixedClassName,v=e.extraContent,g=e.style,h=e.prefixCls,s=e.breadcrumbRender,C=(0,V.Z)(e,Tt),m=(0,i.useMemo)(function(){if(!!s)return s},[s]);if(l===!1)return null;if(l)return(0,b.jsxs)(b.Fragment,{children:[" ",l((0,u.Z)((0,u.Z)({},e),t))]});var x=a;!a&&a!==!1&&(x=t.title);var P=(0,u.Z)((0,u.Z)((0,u.Z)({},t),{},{title:x},C),{},{footer:Ot((0,u.Z)((0,u.Z)({},C),{},{breadcrumbRender:s,prefixedClassName:f}))},c),p=P.breadcrumb,Z=(!p||!(p==null?void 0:p.itemRender)&&!(p==null||(r=p.routes)===null||r===void 0?void 0:r.length))&&!s;return["title","subTitle","extra","tags","footer","avatar","backIcon"].every(function(N){return!P[N]})&&Z&&!o&&!v?null:(0,b.jsx)("div",{className:"".concat(f,"-warp"),children:(0,b.jsx)(gt,(0,u.Z)((0,u.Z)({},P),{},{breadcrumb:s===!1?void 0:(0,u.Z)((0,u.Z)({},P.breadcrumb),t.breadcrumbProps),breadcrumbRender:m,prefixCls:h,children:(c==null?void 0:c.children)||jt(o,v,f)}))})},wt=function(e){var r,t,a=e.children,o=e.loading,l=o===void 0?!1:o,c=e.className,f=e.style,v=e.footer,g=e.affixProps,h=e.ghost,s=e.fixedHeader,C=e.breadcrumbRender,m=(0,V.Z)(e,Bt),x=(0,i.useContext)(K.Z),P=(0,i.useContext)(G.ZP.ConfigContext),p=P.getPrefixCls,Z=e.prefixCls||p("pro"),N="".concat(Z,"-page-container"),E=A()(N,c,(r={},(0,w.Z)(r,"".concat(Z,"-page-container-ghost"),h),(0,w.Z)(r,"".concat(Z,"-page-container-with-footer"),v),r)),y=(0,i.useMemo)(function(){return a?(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)("div",{className:"".concat(N,"-children-content"),children:a}),x.hasFooterToolbar&&(0,b.jsx)("div",{style:{height:48,marginTop:24}})]}):null},[a,N,x.hasFooterToolbar]),T=(0,i.useMemo)(function(){var R;return C==!1?!1:C||(m==null||(R=m.header)===null||R===void 0?void 0:R.breadcrumbRender)},[C,m==null||(t=m.header)===null||t===void 0?void 0:t.breadcrumbRender]),B=(0,b.jsx)(At,(0,u.Z)((0,u.Z)({},m),{},{breadcrumbRender:T,ghost:h,prefixCls:void 0,prefixedClassName:N})),S=(0,i.useMemo)(function(){if(i.isValidElement(l))return l;if(typeof l=="boolean"&&!l)return null;var R=St(l);return R.spinning?(0,b.jsx)(Zt.Z,(0,u.Z)({},R)):null},[l]),F=(0,i.useMemo)(function(){var R=S||y;if(e.waterMarkProps||x.waterMarkProps){var $=(0,u.Z)((0,u.Z)({},x.waterMarkProps),e.waterMarkProps);return(0,b.jsx)(Rt,(0,u.Z)((0,u.Z)({},$),{},{children:R}))}return R},[e.waterMarkProps,x.waterMarkProps,S,y]);return(0,b.jsxs)("div",{style:f,className:E,children:[s&&B?(0,b.jsx)(ze,(0,u.Z)((0,u.Z)({offsetTop:x.hasHeader&&x.fixedHeader?x.headerHeight:0},g),{},{children:B})):B,F&&(0,b.jsx)(Pt,{children:F}),v&&(0,b.jsx)(pt,{prefixCls:Z,children:v})]})},Ft=wt},56264:function(){},53645:function(){},12395:function(){},70883:function(){},81262:function(){},59903:function(){}}]);