(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[790],{47828:function(){},61859:function(se,M,l){"use strict";l.d(M,{Z:function(){return Qt}});var v=l(22122),t=l(67294),P=l(96156),F=l(90484),f=l(28481),y=l(79508),g=l(99165),S=l(28991),Y={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M257.7 752c2 0 4-.2 6-.5L431.9 722c2-.4 3.9-1.3 5.3-2.8l423.9-423.9a9.96 9.96 0 000-14.1L694.9 114.9c-1.9-1.9-4.4-2.9-7.1-2.9s-5.2 1-7.1 2.9L256.8 538.8c-1.5 1.5-2.4 3.3-2.8 5.3l-29.5 168.2a33.5 33.5 0 009.4 29.8c6.6 6.4 14.9 9.9 23.8 9.9zm67.4-174.4L687.8 215l73.3 73.3-362.7 362.6-88.9 15.7 15.6-89zM880 836H144c-17.7 0-32 14.3-32 32v36c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-36c0-17.7-14.3-32-32-32z"}}]},name:"edit",theme:"outlined"},Ce=Y,ne=l(27029),J=function(n,a){return t.createElement(ne.Z,(0,S.Z)((0,S.Z)({},n),{},{ref:a,icon:Ce}))};J.displayName="EditOutlined";var C=t.forwardRef(J),pe=l(94184),ce=l.n(pe),B=l(20640),ye=l.n(B),ft=l(48717),Me=l(50344),he=l(8410),dt=l(21770),Ie=l(98423),De=l(42550),Ne=l(53124),vt=l(42051),$e=l(34952),Ae=l(79370),we=l(45777),pt={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M864 170h-60c-4.4 0-8 3.6-8 8v518H310v-73c0-6.7-7.8-10.5-13-6.3l-141.9 112a8 8 0 000 12.6l141.9 112c5.3 4.2 13 .4 13-6.3v-75h498c35.3 0 64-28.7 64-64V178c0-4.4-3.6-8-8-8z"}}]},name:"enter",theme:"outlined"},yt=pt,ze=function(n,a){return t.createElement(ne.Z,(0,S.Z)((0,S.Z)({},n),{},{ref:a,icon:yt}))};ze.displayName="EnterOutlined";var mt=t.forwardRef(ze),ke=l(15105),gt=l(94418),Et=l(96159),Ct=function(n){var a=n.prefixCls,r=n["aria-label"],o=n.className,u=n.style,E=n.direction,d=n.maxLength,w=n.autoSize,D=w===void 0?!0:w,b=n.value,U=n.onSave,N=n.onCancel,Q=n.onEnd,W=n.component,Z=n.enterIcon,$=Z===void 0?t.createElement(mt,null):Z,x=t.useRef(),I=t.useRef(!1),k=t.useRef(),O=t.useState(b),ue=(0,f.Z)(O,2),re=ue[0],G=ue[1];t.useEffect(function(){G(b)},[b]),t.useEffect(function(){if(x.current&&x.current.resizableTextArea){var p=x.current.resizableTextArea.textArea;p.focus();var m=p.value.length;p.setSelectionRange(m,m)}},[]);var ae=function(m){var T=m.target;G(T.value.replace(/[\n\r]/g,""))},h=function(){I.current=!0},_=function(){I.current=!1},K=function(m){var T=m.keyCode;I.current||(k.current=T)},A=function(){U(re.trim())},ge=function(m){var T=m.keyCode,X=m.ctrlKey,fe=m.altKey,le=m.metaKey,z=m.shiftKey;k.current===T&&!I.current&&!X&&!fe&&!le&&!z&&(T===ke.Z.ENTER?(A(),Q==null||Q()):T===ke.Z.ESC&&N())},oe=function(){A()},q=W?"".concat(a,"-").concat(W):"",ie=ce()(a,"".concat(a,"-edit-content"),(0,P.Z)({},"".concat(a,"-rtl"),E==="rtl"),o,q);return t.createElement("div",{className:ie,style:u},t.createElement(gt.Z,{ref:x,maxLength:d,value:re,onChange:ae,onKeyDown:K,onKeyUp:ge,onCompositionStart:h,onCompositionEnd:_,onBlur:oe,"aria-label":r,rows:1,autoSize:D}),$!==null?(0,Et.Tm)($,{className:"".concat(a,"-edit-content-confirm")}):null)},ht=Ct;function Te(e,n){return t.useMemo(function(){var a=!!e;return[a,(0,v.Z)((0,v.Z)({},n),a&&(0,F.Z)(e)==="object"?e:null)]},[e])}var St=function(e,n){var a=t.useRef(!1);t.useEffect(function(){a.current?e():a.current=!0},n)},bt=function(e,n){var a={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(a[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,r=Object.getOwnPropertySymbols(e);o<r.length;o++)n.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(a[r[o]]=e[r[o]]);return a},xt=function(n,a){var r=n.prefixCls,o=n.component,u=o===void 0?"article":o,E=n.className,d=n["aria-label"],w=n.setContentRef,D=n.children,b=bt(n,["prefixCls","component","className","aria-label","setContentRef","children"]),U=t.useContext(Ne.E_),N=U.getPrefixCls,Q=U.direction,W=a;w&&(W=(0,De.sQ)(a,w));var Z=u,$=N("typography",r),x=ce()($,(0,P.Z)({},"".concat($,"-rtl"),Q==="rtl"),E);return t.createElement(Z,(0,v.Z)({className:x,"aria-label":d,ref:W},b),D)},Ot=t.forwardRef(xt),Rt=Ot,Ke=Rt;function je(e){var n=(0,F.Z)(e);return n==="string"||n==="number"}function Zt(e){var n=0;return e.forEach(function(a){je(a)?n+=String(a).length:n+=1}),n}function Be(e,n){for(var a=0,r=[],o=0;o<e.length;o+=1){if(a===n)return r;var u=e[o],E=je(u),d=E?String(u).length:1,w=a+d;if(w>n){var D=n-a;return r.push(String(u).slice(0,D)),r}r.push(u),a=w}return e}var Pt=0,Se=1,Ue=2,Le=3,We=4,wt=function(n){var a=n.enabledMeasure,r=n.children,o=n.text,u=n.width,E=n.fontSize,d=n.rows,w=n.onEllipsis,D=t.useState([0,0,0]),b=(0,f.Z)(D,2),U=b[0],N=b[1],Q=t.useState(Pt),W=(0,f.Z)(Q,2),Z=W[0],$=W[1],x=(0,f.Z)(U,3),I=x[0],k=x[1],O=x[2],ue=t.useState(0),re=(0,f.Z)(ue,2),G=re[0],ae=re[1],h=t.useRef(null),_=t.useRef(null),K=t.useMemo(function(){return(0,Me.Z)(o)},[o]),A=t.useMemo(function(){return Zt(K)},[K]),ge=t.useMemo(function(){return!a||Z!==Le?r(K,!1):r(Be(K,k),k<A)},[a,Z,r,K,k,A]);(0,he.Z)(function(){a&&u&&E&&A&&($(Se),N([0,Math.ceil(A/2),A]))},[a,u,E,o,A,d]),(0,he.Z)(function(){var p;Z===Se&&ae(((p=h.current)===null||p===void 0?void 0:p.offsetHeight)||0)},[Z]),(0,he.Z)(function(){var p,m;if(G){if(Z===Se){var T=((p=_.current)===null||p===void 0?void 0:p.offsetHeight)||0,X=d*G;T<=X?($(We),w(!1)):$(Ue)}else if(Z===Ue)if(I!==O){var fe=((m=_.current)===null||m===void 0?void 0:m.offsetHeight)||0,le=d*G,z=I,de=O;I===O-1?de=I:fe<=le?z=k:de=k;var Oe=Math.ceil((z+de)/2);N([z,Oe,de])}else $(Le),w(!0)}},[Z,I,O,d,G]);var oe={width:u,whiteSpace:"normal",margin:0,padding:0},q=function(m,T,X){return t.createElement("span",{"aria-hidden":!0,ref:T,style:(0,v.Z)({position:"fixed",display:"block",left:0,top:0,zIndex:-9999,visibility:"hidden",pointerEvents:"none",fontSize:Math.floor(E/2)*2},X)},m)},ie=function(m,T){var X=Be(K,m);return q(r(X,!0),T,oe)};return t.createElement(t.Fragment,null,ge,a&&Z!==Le&&Z!==We&&t.createElement(t.Fragment,null,q("lg",h,{wordBreak:"keep-all",whiteSpace:"nowrap"}),Z===Se?q(r(K,!1),_,oe):ie(k,_)))},Tt=wt,Lt=function(n){var a=n.enabledEllipsis,r=n.isEllipsis,o=n.children,u=n.tooltipProps;return!(u==null?void 0:u.title)||!a?o:t.createElement(we.Z,(0,v.Z)({open:r?void 0:!1},u),o)},Mt=Lt,It=function(e,n){var a={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(a[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,r=Object.getOwnPropertySymbols(e);o<r.length;o++)n.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(a[r[o]]=e[r[o]]);return a};function Dt(e,n){var a=e.mark,r=e.code,o=e.underline,u=e.delete,E=e.strong,d=e.keyboard,w=e.italic,D=n;function b(U,N){!U||(D=t.createElement(N,{},D))}return b(E,"strong"),b(o,"u"),b(u,"del"),b(r,"code"),b(a,"mark"),b(d,"kbd"),b(w,"i"),D}function be(e,n,a){return e===!0||e===void 0?n:e||a&&n}function He(e){return e===!1?[!1,!1]:Array.isArray(e)?e:[e]}var Nt="...",$t=t.forwardRef(function(e,n){var a=e.prefixCls,r=e.className,o=e.style,u=e.type,E=e.disabled,d=e.children,w=e.ellipsis,D=e.editable,b=e.copyable,U=e.component,N=e.title,Q=It(e,["prefixCls","className","style","type","disabled","children","ellipsis","editable","copyable","component","title"]),W=t.useContext(Ne.E_),Z=W.getPrefixCls,$=W.direction,x=(0,vt.E)("Text")[0],I=t.useRef(null),k=t.useRef(null),O=Z("typography",a),ue=(0,Ie.Z)(Q,["mark","code","delete","underline","strong","keyboard","italic"]),re=Te(D),G=(0,f.Z)(re,2),ae=G[0],h=G[1],_=(0,dt.Z)(!1,{value:h.editing}),K=(0,f.Z)(_,2),A=K[0],ge=K[1],oe=h.triggerType,q=oe===void 0?["icon"]:oe,ie=function(i){var s;i&&((s=h.onStart)===null||s===void 0||s.call(h)),ge(i)};St(function(){var c;A||(c=k.current)===null||c===void 0||c.focus()},[A]);var p=function(i){i==null||i.preventDefault(),ie(!0)},m=function(i){var s;(s=h.onChange)===null||s===void 0||s.call(h,i),ie(!1)},T=function(){var i;(i=h.onCancel)===null||i===void 0||i.call(h),ie(!1)},X=Te(b),fe=(0,f.Z)(X,2),le=fe[0],z=fe[1],de=t.useState(!1),Oe=(0,f.Z)(de,2),Re=Oe[0],Ve=Oe[1],Fe=t.useRef(),Ge={};z.format&&(Ge.format=z.format);var Je=function(){clearTimeout(Fe.current)},Xt=function(i){var s;i==null||i.preventDefault(),i==null||i.stopPropagation(),ye()(z.text||String(d)||"",Ge),Ve(!0),Je(),Fe.current=setTimeout(function(){Ve(!1)},3e3),(s=z.onCopy)===null||s===void 0||s.call(z,i)};t.useEffect(function(){return Je},[]);var Yt=t.useState(!1),Qe=(0,f.Z)(Yt,2),Xe=Qe[0],_t=Qe[1],qt=t.useState(!1),Ye=(0,f.Z)(qt,2),_e=Ye[0],en=Ye[1],tn=t.useState(!1),qe=(0,f.Z)(tn,2),nn=qe[0],rn=qe[1],an=t.useState(!1),et=(0,f.Z)(an,2),tt=et[0],on=et[1],ln=t.useState(!1),nt=(0,f.Z)(ln,2),rt=nt[0],sn=nt[1],cn=t.useState(!0),at=(0,f.Z)(cn,2),un=at[0],fn=at[1],dn=Te(w,{expandable:!1}),ot=(0,f.Z)(dn,2),ee=ot[0],R=ot[1],H=ee&&!nn,it=R.rows,ve=it===void 0?1:it,Ze=t.useMemo(function(){return!H||R.suffix!==void 0||R.onEllipsis||R.expandable||ae||le},[H,R,ae,le]);(0,he.Z)(function(){ee&&!Ze&&(_t((0,Ae.G)("webkitLineClamp")),en((0,Ae.G)("textOverflow")))},[Ze,ee]);var V=t.useMemo(function(){return Ze?!1:ve===1?_e:Xe},[Ze,_e,Xe]),lt=H&&(V?rt:tt),vn=H&&ve===1&&V,Pe=H&&ve>1&&V,pn=function(i){var s;rn(!0),(s=R.onExpand)===null||s===void 0||s.call(R,i)},yn=t.useState(0),st=(0,f.Z)(yn,2),mn=st[0],gn=st[1],En=t.useState(0),ct=(0,f.Z)(En,2),Cn=ct[0],hn=ct[1],Sn=function(i,s){var L=i.offsetWidth,j;gn(L),hn(parseInt((j=window.getComputedStyle)===null||j===void 0?void 0:j.call(window,s).fontSize,10))},bn=function(i){var s;on(i),tt!==i&&((s=R.onEllipsis)===null||s===void 0||s.call(R,i))};t.useEffect(function(){var c=I.current;if(ee&&V&&c){var i=Pe?c.offsetHeight<c.scrollHeight:c.offsetWidth<c.scrollWidth;rt!==i&&sn(i)}},[ee,V,d,Pe,un]),t.useEffect(function(){var c=I.current;if(!(typeof IntersectionObserver=="undefined"||!c||!V||!H)){var i=new IntersectionObserver(function(){fn(!!c.offsetParent)});return i.observe(c),function(){i.disconnect()}}},[V,H]);var te={};R.tooltip===!0?te={title:d}:t.isValidElement(R.tooltip)?te={title:R.tooltip}:(0,F.Z)(R.tooltip)==="object"?te=(0,v.Z)({title:d},R.tooltip):te={title:R.tooltip};var ut=t.useMemo(function(){var c=function(s){return["string","number"].includes((0,F.Z)(s))};if(!(!ee||V)){if(c(d))return d;if(c(N))return N;if(c(te.title))return te.title}},[ee,V,N,te.title,lt]);if(A)return t.createElement(ht,{value:typeof d=="string"?d:"",onSave:m,onCancel:T,onEnd:h.onEnd,prefixCls:O,className:r,style:o,direction:$,component:U,maxLength:h.maxLength,autoSize:h.autoSize,enterIcon:h.enterIcon});var xn=function(){var i=R.expandable,s=R.symbol;if(!i)return null;var L;return s?L=s:L=x.expand,t.createElement("a",{key:"expand",className:"".concat(O,"-expand"),onClick:pn,"aria-label":x.expand},L)},On=function(){if(!!ae){var i=h.icon,s=h.tooltip,L=(0,Me.Z)(s)[0]||x.edit,j=typeof L=="string"?L:"";return q.includes("icon")?t.createElement(we.Z,{key:"edit",title:s===!1?"":L},t.createElement($e.Z,{ref:k,className:"".concat(O,"-edit"),onClick:p,"aria-label":j},i||t.createElement(C,{role:"button"}))):null}},Rn=function(){if(!!le){var i=z.tooltips,s=z.icon,L=He(i),j=He(s),Ee=Re?be(L[1],x.copied):be(L[0],x.copy),wn=Re?x.copied:x.copy,Tn=typeof Ee=="string"?Ee:wn;return t.createElement(we.Z,{key:"copy",title:Ee},t.createElement($e.Z,{className:ce()("".concat(O,"-copy"),Re&&"".concat(O,"-copy-success")),onClick:Xt,"aria-label":Tn},Re?be(j[1],t.createElement(y.Z,null),!0):be(j[0],t.createElement(g.Z,null),!0)))}},Zn=function(i){return[i&&xn(),On(),Rn()]},Pn=function(i){return[i&&t.createElement("span",{"aria-hidden":!0,key:"ellipsis"},Nt),R.suffix,Zn(i)]};return t.createElement(ft.Z,{onResize:Sn,disabled:!H||V},function(c){var i;return t.createElement(Mt,{tooltipProps:te,enabledEllipsis:H,isEllipsis:lt},t.createElement(Ke,(0,v.Z)({className:ce()((i={},(0,P.Z)(i,"".concat(O,"-").concat(u),u),(0,P.Z)(i,"".concat(O,"-disabled"),E),(0,P.Z)(i,"".concat(O,"-ellipsis"),ee),(0,P.Z)(i,"".concat(O,"-single-line"),H&&ve===1),(0,P.Z)(i,"".concat(O,"-ellipsis-single-line"),vn),(0,P.Z)(i,"".concat(O,"-ellipsis-multiple-line"),Pe),i),r),style:(0,v.Z)((0,v.Z)({},o),{WebkitLineClamp:Pe?ve:void 0}),component:U,ref:(0,De.sQ)(c,I,n),direction:$,onClick:q.includes("text")?p:null,"aria-label":ut,title:N},ue),t.createElement(Tt,{enabledMeasure:H&&!V,text:d,rows:ve,width:mn,fontSize:Cn,onEllipsis:bn},function(s,L){var j=s;s.length&&L&&ut&&(j=t.createElement("span",{key:"show-content","aria-hidden":!0},j));var Ee=Dt(e,t.createElement(t.Fragment,null,j,Pn(L)));return Ee})))})}),xe=$t,At=function(e,n){var a={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(a[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,r=Object.getOwnPropertySymbols(e);o<r.length;o++)n.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(a[r[o]]=e[r[o]]);return a},zt=function(n,a){var r=n.ellipsis,o=n.rel,u=At(n,["ellipsis","rel"]),E=t.useRef(null);t.useImperativeHandle(a,function(){return E.current});var d=(0,v.Z)((0,v.Z)({},u),{rel:o===void 0&&u.target==="_blank"?"noopener noreferrer":o});return delete d.navigate,t.createElement(xe,(0,v.Z)({},d,{ref:E,ellipsis:!!r,component:"a"}))},kt=t.forwardRef(zt),Kt=function(n,a){return t.createElement(xe,(0,v.Z)({ref:a},n,{component:"div"}))},jt=t.forwardRef(Kt),Bt=function(e,n){var a={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(a[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,r=Object.getOwnPropertySymbols(e);o<r.length;o++)n.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(a[r[o]]=e[r[o]]);return a},Ut=function(n,a){var r=n.ellipsis,o=Bt(n,["ellipsis"]),u=t.useMemo(function(){return r&&(0,F.Z)(r)==="object"?(0,Ie.Z)(r,["expandable","rows"]):r},[r]);return t.createElement(xe,(0,v.Z)({ref:a},o,{ellipsis:u,component:"span"}))},Wt=t.forwardRef(Ut),Ht=l(93355),Vt=function(e,n){var a={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(a[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,r=Object.getOwnPropertySymbols(e);o<r.length;o++)n.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(a[r[o]]=e[r[o]]);return a},Ft=(0,Ht.a)(1,2,3,4,5),Gt=function(n,a){var r=n.level,o=r===void 0?1:r,u=Vt(n,["level"]),E;return Ft.indexOf(o)!==-1?E="h".concat(o):E="h1",t.createElement(xe,(0,v.Z)({ref:a},u,{component:E}))},Jt=t.forwardRef(Gt),me=Ke;me.Text=Wt,me.Link=kt,me.Title=Jt,me.Paragraph=jt;var Qt=me},402:function(se,M,l){"use strict";var v=l(38663),t=l.n(v),P=l(47828),F=l.n(P),f=l(47673),y=l(22385)},20640:function(se,M,l){"use strict";var v=l(11742),t={"text/plain":"Text","text/html":"Url",default:"Text"},P="Copy to clipboard: #{key}, Enter";function F(y){var g=(/mac os x/i.test(navigator.userAgent)?"\u2318":"Ctrl")+"+C";return y.replace(/#{\s*key\s*}/g,g)}function f(y,g){var S,Y,Ce,ne,J,C,pe=!1;g||(g={}),S=g.debug||!1;try{Ce=v(),ne=document.createRange(),J=document.getSelection(),C=document.createElement("span"),C.textContent=y,C.ariaHidden="true",C.style.all="unset",C.style.position="fixed",C.style.top=0,C.style.clip="rect(0, 0, 0, 0)",C.style.whiteSpace="pre",C.style.webkitUserSelect="text",C.style.MozUserSelect="text",C.style.msUserSelect="text",C.style.userSelect="text",C.addEventListener("copy",function(B){if(B.stopPropagation(),g.format)if(B.preventDefault(),typeof B.clipboardData=="undefined"){S&&console.warn("unable to use e.clipboardData"),S&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var ye=t[g.format]||t.default;window.clipboardData.setData(ye,y)}else B.clipboardData.clearData(),B.clipboardData.setData(g.format,y);g.onCopy&&(B.preventDefault(),g.onCopy(B.clipboardData))}),document.body.appendChild(C),ne.selectNodeContents(C),J.addRange(ne);var ce=document.execCommand("copy");if(!ce)throw new Error("copy command was unsuccessful");pe=!0}catch(B){S&&console.error("unable to copy using execCommand: ",B),S&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(g.format||"text",y),g.onCopy&&g.onCopy(window.clipboardData),pe=!0}catch(ye){S&&console.error("unable to copy using clipboardData: ",ye),S&&console.error("falling back to prompt"),Y=F("message"in g?g.message:P),window.prompt(Y,y)}}finally{J&&(typeof J.removeRange=="function"?J.removeRange(ne):J.removeAllRanges()),C&&document.body.removeChild(C),Ce()}return pe}se.exports=f},79370:function(se,M,l){"use strict";l.d(M,{G:function(){return F}});var v=l(98924),t=function(y){if((0,v.Z)()&&window.document.documentElement){var g=Array.isArray(y)?y:[y],S=window.document.documentElement;return g.some(function(Y){return Y in S.style})}return!1},P=function(y,g){if(!t(y))return!1;var S=document.createElement("div"),Y=S.style[y];return S.style[y]=g,S.style[y]!==Y};function F(f,y){return!Array.isArray(f)&&y!==void 0?P(f,y):t(f)}},11742:function(se){se.exports=function(){var M=document.getSelection();if(!M.rangeCount)return function(){};for(var l=document.activeElement,v=[],t=0;t<M.rangeCount;t++)v.push(M.getRangeAt(t));switch(l.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":l.blur();break;default:l=null;break}return M.removeAllRanges(),function(){M.type==="Caret"&&M.removeAllRanges(),M.rangeCount||v.forEach(function(P){M.addRange(P)}),l&&l.focus()}}}}]);
