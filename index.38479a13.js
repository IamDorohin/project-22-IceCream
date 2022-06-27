const t=document.querySelectorAll(".btn-modal-open"),e=document.querySelector(".overlay-order");t.forEach((t=>{t.addEventListener("click",(()=>{e.classList.add("overlay-active")}))})),e.addEventListener("click",(t=>{const n=t.target;(n===e||n.closest(".close-button"))&&e.classList.remove("overlay-active")}));const n=document.querySelectorAll(".contacts__location"),i=document.querySelectorAll(".contacts__franchise"),a=document.querySelector(".overlay-location");n.forEach((t=>{t.addEventListener("click",(()=>{a.classList.add("overlay-active")}))})),i.forEach((t=>{t.addEventListener("click",(()=>{a.classList.add("overlay-active")}))})),a.addEventListener("click",(t=>{const e=t.target;(e===a||e.closest(".close-button"))&&a.classList.remove("overlay-active")}));var r={};Object.defineProperty(r,"__esModule",{value:!0});var o=window,l=o.requestAnimationFrame||o.webkitRequestAnimationFrame||o.mozRequestAnimationFrame||o.msRequestAnimationFrame||function(t){return setTimeout(t,16)},u=window,s=u.cancelAnimationFrame||u.mozCancelAnimationFrame||function(t){clearTimeout(t)};function c(){for(var t,e,n,i=arguments[0]||{},a=1,r=arguments.length;a<r;a++)if(null!==(t=arguments[a]))for(e in t)i!==(n=t[e])&&void 0!==n&&(i[e]=n);return i}function f(t){return["true","false"].indexOf(t)>=0?JSON.parse(t):t}function d(t,e,n,i){if(i)try{t.setItem(e,n)}catch(t){}return n}function v(){var t=document,e=t.body;return e||((e=t.createElement("body")).fake=!0),e}var p=document.documentElement;function m(t){var e="";return t.fake&&(e=p.style.overflow,t.style.background="",t.style.overflow=p.style.overflow="hidden",p.appendChild(t)),e}function h(t,e){t.fake&&(t.remove(),p.style.overflow=e,p.offsetHeight)}function y(t,e,n,i){"insertRule"in t?t.insertRule(e+"{"+n+"}",i):t.addRule(e,n,i)}function g(t){return("insertRule"in t?t.cssRules:t.rules).length}function x(t,e,n){for(var i=0,a=t.length;i<a;i++)e.call(n,t[i],i)}var b="classList"in document.createElement("_"),w=b?function(t,e){return t.classList.contains(e)}:function(t,e){return t.className.indexOf(e)>=0},C=b?function(t,e){w(t,e)||t.classList.add(e)}:function(t,e){w(t,e)||(t.className+=" "+e)},M=b?function(t,e){w(t,e)&&t.classList.remove(e)}:function(t,e){w(t,e)&&(t.className=t.className.replace(e,""))};function T(t,e){return t.hasAttribute(e)}function E(t,e){return t.getAttribute(e)}function L(t){return void 0!==t.item}function A(t,e){if(t=L(t)||t instanceof Array?t:[t],"[object Object]"===Object.prototype.toString.call(e))for(var n=t.length;n--;)for(var i in e)t[n].setAttribute(i,e[i])}function S(t,e){t=L(t)||t instanceof Array?t:[t];for(var n=(e=e instanceof Array?e:[e]).length,i=t.length;i--;)for(var a=n;a--;)t[i].removeAttribute(e[a])}function N(t){for(var e=[],n=0,i=t.length;n<i;n++)e.push(t[n]);return e}function B(t,e){"none"!==t.style.display&&(t.style.display="none")}function k(t,e){"none"===t.style.display&&(t.style.display="")}function O(t){return"none"!==window.getComputedStyle(t).display}function H(t){if("string"==typeof t){var e=[t],n=t.charAt(0).toUpperCase()+t.substr(1);["Webkit","Moz","ms","O"].forEach((function(i){"ms"===i&&"transform"!==t||e.push(i+n)})),t=e}var i=document.createElement("fakeelement");t.length;for(var a=0;a<t.length;a++){var r=t[a];if(void 0!==i.style[r])return r}return!1}function D(t,e){var n=!1;return/^Webkit/.test(t)?n="webkit"+e+"End":/^O/.test(t)?n="o"+e+"End":t&&(n=e.toLowerCase()+"end"),n}var P=!1;try{var R=Object.defineProperty({},"passive",{get:function(){P=!0}});window.addEventListener("test",null,R)}catch(t){}var I=!!P&&{passive:!0};function z(t,e,n){for(var i in e){var a=["touchstart","touchmove"].indexOf(i)>=0&&!n&&I;t.addEventListener(i,e[i],a)}}function W(t,e){for(var n in e){var i=["touchstart","touchmove"].indexOf(n)>=0&&I;t.removeEventListener(n,e[n],i)}}function q(){return{topics:{},on:function(t,e){this.topics[t]=this.topics[t]||[],this.topics[t].push(e)},off:function(t,e){if(this.topics[t])for(var n=0;n<this.topics[t].length;n++)if(this.topics[t][n]===e){this.topics[t].splice(n,1);break}},emit:function(t,e){e.type=t,this.topics[t]&&this.topics[t].forEach((function(n){n(e,t)}))}}}Object.keys||(Object.keys=function(t){var e=[];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.push(n);return e}),"remove"in Element.prototype||(Element.prototype.remove=function(){this.parentNode&&this.parentNode.removeChild(this)});var F=function(t){t=c({container:".slider",mode:"carousel",axis:"horizontal",items:1,gutter:0,edgePadding:0,fixedWidth:!1,autoWidth:!1,viewportMax:!1,slideBy:1,center:!1,controls:!0,controlsPosition:"top",controlsText:["prev","next"],controlsContainer:!1,prevButton:!1,nextButton:!1,nav:!0,navPosition:"top",navContainer:!1,navAsThumbnails:!1,arrowKeys:!1,speed:300,autoplay:!1,autoplayPosition:"top",autoplayTimeout:5e3,autoplayDirection:"forward",autoplayText:["start","stop"],autoplayHoverPause:!1,autoplayButton:!1,autoplayButtonOutput:!0,autoplayResetOnVisibility:!0,animateIn:"tns-fadeIn",animateOut:"tns-fadeOut",animateNormal:"tns-normal",animateDelay:!1,loop:!0,rewind:!1,autoHeight:!1,responsive:!1,lazyload:!1,lazyloadSelector:".tns-lazy-img",touch:!0,mouseDrag:!1,swipeAngle:15,nested:!1,preventActionWhenRunning:!1,preventScrollOnTouch:!1,freezable:!0,onInit:!1,useLocalStorage:!0,nonce:!1},t||{});var e=document,n=window,i={ENTER:13,SPACE:32,LEFT:37,RIGHT:39},a={},r=t.useLocalStorage;if(r){var o=navigator.userAgent,u=new Date;try{(a=n.localStorage)?(a.setItem(u,u),r=a.getItem(u)==u,a.removeItem(u)):r=!1,r||(a={})}catch(t){r=!1}r&&(a.tnsApp&&a.tnsApp!==o&&["tC","tPL","tMQ","tTf","t3D","tTDu","tTDe","tADu","tADe","tTE","tAE"].forEach((function(t){a.removeItem(t)})),localStorage.tnsApp=o)}var p=a.tC?f(a.tC):d(a,"tC",function(){var t=document,e=v(),n=m(e),i=t.createElement("div"),a=!1;e.appendChild(i);try{for(var r,o="(10px * 10)",l=["calc"+o,"-moz-calc"+o,"-webkit-calc"+o],u=0;u<3;u++)if(r=l[u],i.style.width=r,100===i.offsetWidth){a=r.replace(o,"");break}}catch(t){}return e.fake?h(e,n):i.remove(),a}(),r),b=a.tPL?f(a.tPL):d(a,"tPL",function(){var t,e=document,n=v(),i=m(n),a=e.createElement("div"),r=e.createElement("div"),o="";a.className="tns-t-subp2",r.className="tns-t-ct";for(var l=0;l<70;l++)o+="<div></div>";return r.innerHTML=o,a.appendChild(r),n.appendChild(a),t=Math.abs(a.getBoundingClientRect().left-r.children[67].getBoundingClientRect().left)<2,n.fake?h(n,i):a.remove(),t}(),r),L=a.tMQ?f(a.tMQ):d(a,"tMQ",function(){if(window.matchMedia||window.msMatchMedia)return!0;var t,e=document,n=v(),i=m(n),a=e.createElement("div"),r=e.createElement("style"),o="@media all and (min-width:1px){.tns-mq-test{position:absolute}}";return r.type="text/css",a.className="tns-mq-test",n.appendChild(r),n.appendChild(a),r.styleSheet?r.styleSheet.cssText=o:r.appendChild(e.createTextNode(o)),t=window.getComputedStyle?window.getComputedStyle(a).position:a.currentStyle.position,n.fake?h(n,i):a.remove(),"absolute"===t}(),r),P=a.tTf?f(a.tTf):d(a,"tTf",H("transform"),r),R=a.t3D?f(a.t3D):d(a,"t3D",function(t){if(!t)return!1;if(!window.getComputedStyle)return!1;var e,n=document,i=v(),a=m(i),r=n.createElement("p"),o=t.length>9?"-"+t.slice(0,-9).toLowerCase()+"-":"";return o+="transform",i.insertBefore(r,null),r.style[t]="translate3d(1px,1px,1px)",e=window.getComputedStyle(r).getPropertyValue(o),i.fake?h(i,a):r.remove(),void 0!==e&&e.length>0&&"none"!==e}(P),r),I=a.tTDu?f(a.tTDu):d(a,"tTDu",H("transitionDuration"),r),j=a.tTDe?f(a.tTDe):d(a,"tTDe",H("transitionDelay"),r),_=a.tADu?f(a.tADu):d(a,"tADu",H("animationDuration"),r),V=a.tADe?f(a.tADe):d(a,"tADe",H("animationDelay"),r),G=a.tTE?f(a.tTE):d(a,"tTE",D(I,"Transition"),r),Q=a.tAE?f(a.tAE):d(a,"tAE",D(_,"Animation"),r),X=n.console&&"function"==typeof n.console.warn,Y=["container","controlsContainer","prevButton","nextButton","navContainer","autoplayButton"],K={};if(Y.forEach((function(n){if("string"==typeof t[n]){var i=t[n],a=e.querySelector(i);if(K[n]=i,!a||!a.nodeName)return void(X&&console.warn("Can't find",t[n]));t[n]=a}})),!(t.container.children.length<1)){var J=t.responsive,U=t.nested,Z="carousel"===t.mode;if(J){0 in J&&(t=c(t,J[0]),delete J[0]);var $={};for(var tt in J){var et=J[tt];et="number"==typeof et?{items:et}:et,$[tt]=et}J=$,$=null}if(Z||function t(e){for(var n in e)Z||("slideBy"===n&&(e[n]="page"),"edgePadding"===n&&(e[n]=!1),"autoHeight"===n&&(e[n]=!1)),"responsive"===n&&t(e[n])}(t),!Z){t.axis="horizontal",t.slideBy="page",t.edgePadding=!1;var nt=t.animateIn,it=t.animateOut,at=t.animateDelay,rt=t.animateNormal}var ot,lt,ut="horizontal"===t.axis,st=e.createElement("div"),ct=e.createElement("div"),ft=t.container,dt=ft.parentNode,vt=ft.outerHTML,pt=ft.children,mt=pt.length,ht=Hn(),yt=!1;J&&ti(),Z&&(ft.className+=" tns-vpfix");var gt,xt,bt,wt,Ct,Mt,Tt=t.autoWidth,Et=zn("fixedWidth"),Lt=zn("edgePadding"),At=zn("gutter"),St=Rn(),Nt=zn("center"),Bt=Tt?1:Math.floor(zn("items")),kt=zn("slideBy"),Ot=t.viewportMax||t.fixedWidthViewportWidth,Ht=zn("arrowKeys"),Dt=zn("speed"),Pt=t.rewind,Rt=!Pt&&t.loop,It=zn("autoHeight"),zt=zn("controls"),Wt=zn("controlsText"),qt=zn("nav"),Ft=zn("touch"),jt=zn("mouseDrag"),_t=zn("autoplay"),Vt=zn("autoplayTimeout"),Gt=zn("autoplayText"),Qt=zn("autoplayHoverPause"),Xt=zn("autoplayResetOnVisibility"),Yt=(wt=null,Ct=zn("nonce"),Mt=document.createElement("style"),wt&&Mt.setAttribute("media",wt),Ct&&Mt.setAttribute("nonce",Ct),document.querySelector("head").appendChild(Mt),Mt.sheet?Mt.sheet:Mt.styleSheet),Kt=t.lazyload,Jt=t.lazyloadSelector,Ut=[],Zt=Rt?(xt=function(){if(Tt||Et&&!Ot)return mt-1;var e=Et?"fixedWidth":"items",n=[];if((Et||t[e]<mt)&&n.push(t[e]),J)for(var i in J){var a=J[i][e];a&&(Et||a<mt)&&n.push(a)}return n.length||n.push(0),Math.ceil(Et?Ot/Math.min.apply(null,n):Math.max.apply(null,n))}(),bt=Z?Math.ceil((5*xt-mt)/2):4*xt-mt,bt=Math.max(xt,bt),In("edgePadding")?bt+1:bt):0,$t=Z?mt+2*Zt:mt+Zt,te=!(!Et&&!Tt||Rt),ee=Et?Li():null,ne=!Z||!Rt,ie=ut?"left":"top",ae="",re="",oe=Et?function(){return Nt&&!Rt?mt-1:Math.ceil(-ee/(Et+At))}:Tt?function(){for(var t=0;t<$t;t++)if(gt[t]>=-ee)return t}:function(){return Nt&&Z&&!Rt?mt-1:Rt||Z?Math.max(0,$t-Math.ceil(Bt)):$t-1},le=Bn(zn("startIndex")),ue=le;Nn();var se,ce,fe,de=0,ve=Tt?null:oe(),pe=t.preventActionWhenRunning,me=t.swipeAngle,he=!me||"?",ye=!1,ge=t.onInit,xe=new q,be=" tns-slider tns-"+t.mode,we=ft.id||(fe=window.tnsId,window.tnsId=fe?fe+1:1,"tns"+window.tnsId),Ce=zn("disable"),Me=!1,Te=t.freezable,Ee=!(!Te||Tt)&&$n(),Le=!1,Ae={click:Pi,keydown:function(t){t=_i(t);var e=[i.LEFT,i.RIGHT].indexOf(t.keyCode);e>=0&&(0===e?Ke.disabled||Pi(t,-1):Je.disabled||Pi(t,1))}},Se={click:function(t){if(ye){if(pe)return;Hi()}var e=Vi(t=_i(t));for(;e!==tn&&!T(e,"data-nav");)e=e.parentNode;if(T(e,"data-nav")){var n=rn=Number(E(e,"data-nav")),i=Et||Tt?n*mt/nn:n*Bt;Di(Re?n:Math.min(Math.ceil(i),mt-1),t),on===n&&(dn&&qi(),rn=-1)}},keydown:function(t){t=_i(t);var n=e.activeElement;if(!T(n,"data-nav"))return;var a=[i.LEFT,i.RIGHT,i.ENTER,i.SPACE].indexOf(t.keyCode),r=Number(E(n,"data-nav"));a>=0&&(0===a?r>0&&ji($e[r-1]):1===a?r<nn-1&&ji($e[r+1]):(rn=r,Di(r,t)))}},Ne={mouseover:function(){dn&&(Ii(),vn=!0)},mouseout:function(){vn&&(Ri(),vn=!1)}},Be={visibilitychange:function(){e.hidden?dn&&(Ii(),mn=!0):mn&&(Ri(),mn=!1)}},ke={keydown:function(t){t=_i(t);var e=[i.LEFT,i.RIGHT].indexOf(t.keyCode);e>=0&&Pi(t,0===e?-1:1)}},Oe={touchstart:Yi,touchmove:Ki,touchend:Ui,touchcancel:Ui},He={mousedown:Yi,mousemove:Ki,mouseup:Ui,mouseleave:Ui},De=In("controls"),Pe=In("nav"),Re=!!Tt||t.navAsThumbnails,Ie=In("autoplay"),ze=In("touch"),We=In("mouseDrag"),qe="tns-slide-active",Fe="tns-slide-cloned",je="tns-complete",_e={load:function(t){si(Vi(t))},error:function(t){e=Vi(t),C(e,"failed"),ci(e);var e}},Ve="force"===t.preventScrollOnTouch;if(De)var Ge,Qe,Xe=t.controlsContainer,Ye=t.controlsContainer?t.controlsContainer.outerHTML:"",Ke=t.prevButton,Je=t.nextButton,Ue=t.prevButton?t.prevButton.outerHTML:"",Ze=t.nextButton?t.nextButton.outerHTML:"";if(Pe)var $e,tn=t.navContainer,en=t.navContainer?t.navContainer.outerHTML:"",nn=Tt?mt:$i(),an=0,rn=-1,on=On(),ln=on,un="tns-nav-active",sn="Carousel Page ",cn=" (Current Slide)";if(Ie)var fn,dn,vn,pn,mn,hn="forward"===t.autoplayDirection?1:-1,yn=t.autoplayButton,gn=t.autoplayButton?t.autoplayButton.outerHTML:"",xn=["<span class='tns-visually-hidden'>"," animation</span>"];if(ze||We)var bn,wn,Cn={},Mn={},Tn=!1,En=ut?function(t,e){return t.x-e.x}:function(t,e){return t.y-e.y};Tt||Sn(Ce||Ee),P&&(ie=P,ae="translate",R?(ae+=ut?"3d(":"3d(0px, ",re=ut?", 0px, 0px)":", 0px)"):(ae+=ut?"X(":"Y(",re=")")),Z&&(ft.className=ft.className.replace("tns-vpfix","")),function(){In("gutter"),st.className="tns-outer",ct.className="tns-inner",st.id=we+"-ow",ct.id=we+"-iw",""===ft.id&&(ft.id=we);be+=b||Tt?" tns-subpixel":" tns-no-subpixel",be+=p?" tns-calc":" tns-no-calc",Tt&&(be+=" tns-autowidth");be+=" tns-"+t.axis,ft.className+=be,Z?((ot=e.createElement("div")).id=we+"-mw",ot.className="tns-ovh",st.appendChild(ot),ot.appendChild(ct)):st.appendChild(ct);if(It){(ot||ct).className+=" tns-ah"}if(dt.insertBefore(st,ft),ct.appendChild(ft),x(pt,(function(t,e){C(t,"tns-item"),t.id||(t.id=we+"-item"+e),!Z&&rt&&C(t,rt),A(t,{"aria-hidden":"true",tabindex:"-1"})})),Zt){for(var n=e.createDocumentFragment(),i=e.createDocumentFragment(),a=Zt;a--;){var r=a%mt,o=pt[r].cloneNode(!0);if(C(o,Fe),S(o,"id"),i.insertBefore(o,i.firstChild),Z){var l=pt[mt-1-r].cloneNode(!0);C(l,Fe),S(l,"id"),n.appendChild(l)}}ft.insertBefore(n,ft.firstChild),ft.appendChild(i),pt=ft.children}}(),function(){if(!Z)for(var e=le,i=le+Math.min(mt,Bt);e<i;e++){var a=pt[e];a.style.left=100*(e-le)/Bt+"%",C(a,nt),M(a,rt)}ut&&(b||Tt?(y(Yt,"#"+we+" > .tns-item","font-size:"+n.getComputedStyle(pt[0]).fontSize+";",g(Yt)),y(Yt,"#"+we,"font-size:0;",g(Yt))):Z&&x(pt,(function(t,e){t.style.marginLeft=function(t){return p?p+"("+100*t+"% / "+$t+")":100*t/$t+"%"}(e)})));if(L){if(I){var r=ot&&t.autoHeight?Vn(t.speed):"";y(Yt,"#"+we+"-mw",r,g(Yt))}r=Wn(t.edgePadding,t.gutter,t.fixedWidth,t.speed,t.autoHeight),y(Yt,"#"+we+"-iw",r,g(Yt)),Z&&(r=ut&&!Tt?"width:"+qn(t.fixedWidth,t.gutter,t.items)+";":"",I&&(r+=Vn(Dt)),y(Yt,"#"+we,r,g(Yt))),r=ut&&!Tt?Fn(t.fixedWidth,t.gutter,t.items):"",t.gutter&&(r+=jn(t.gutter)),Z||(I&&(r+=Vn(Dt)),_&&(r+=Gn(Dt))),r&&y(Yt,"#"+we+" > .tns-item",r,g(Yt))}else{Z&&It&&(ot.style[I]=Dt/1e3+"s"),ct.style.cssText=Wn(Lt,At,Et,It),Z&&ut&&!Tt&&(ft.style.width=qn(Et,At,Bt));r=ut&&!Tt?Fn(Et,At,Bt):"";At&&(r+=jn(At)),r&&y(Yt,"#"+we+" > .tns-item",r,g(Yt))}if(J&&L)for(var o in J){o=parseInt(o);var l=J[o],u=(r="",""),s="",c="",f="",d=Tt?null:zn("items",o),v=zn("fixedWidth",o),m=zn("speed",o),h=zn("edgePadding",o),w=zn("autoHeight",o),T=zn("gutter",o);I&&ot&&zn("autoHeight",o)&&"speed"in l&&(u="#"+we+"-mw{"+Vn(m)+"}"),("edgePadding"in l||"gutter"in l)&&(s="#"+we+"-iw{"+Wn(h,T,v,m,w)+"}"),Z&&ut&&!Tt&&("fixedWidth"in l||"items"in l||Et&&"gutter"in l)&&(c="width:"+qn(v,T,d)+";"),I&&"speed"in l&&(c+=Vn(m)),c&&(c="#"+we+"{"+c+"}"),("fixedWidth"in l||Et&&"gutter"in l||!Z&&"items"in l)&&(f+=Fn(v,T,d)),"gutter"in l&&(f+=jn(T)),!Z&&"speed"in l&&(I&&(f+=Vn(m)),_&&(f+=Gn(m))),f&&(f="#"+we+" > .tns-item{"+f+"}"),(r=u+s+c+f)&&Yt.insertRule("@media (min-width: "+o/16+"em) {"+r+"}",Yt.cssRules.length)}}(),Qn();var Ln=Rt?Z?function(){var t=de,e=ve;t+=kt,e-=kt,Lt?(t+=1,e-=1):Et&&(St+At)%(Et+At)&&(e-=1),Zt&&(le>e?le-=mt:le<t&&(le+=mt))}:function(){if(le>ve)for(;le>=de+mt;)le-=mt;else if(le<de)for(;le<=ve-mt;)le+=mt}:function(){le=Math.max(de,Math.min(ve,le))},An=Z?function(){var t,e,n,i,a,r,o,l,u,s,c;Ti(ft,""),I||!Dt?(Ni(),Dt&&O(ft)||Hi()):(t=ft,e=ie,n=ae,i=re,a=Ai(),r=Dt,o=Hi,l=Math.min(r,10),u=a.indexOf("%")>=0?"%":"px",a=a.replace(u,""),s=Number(t.style[e].replace(n,"").replace(i,"").replace(u,"")),c=(a-s)/r*l,setTimeout((function a(){r-=l,s+=c,t.style[e]=n+s+u+i,r>0?setTimeout(a,l):o()}),l)),ut||Zi()}:function(){Ut=[];var t={};t[G]=t[Q]=Hi,W(pt[ue],t),z(pt[le],t),Bi(ue,nt,it,!0),Bi(le,rt,nt),G&&Q&&Dt&&O(ft)||Hi()};return{version:"2.9.4",getInfo:ea,events:xe,goTo:Di,play:function(){_t&&!dn&&(Wi(),pn=!1)},pause:function(){dn&&(qi(),pn=!0)},isOn:yt,updateSliderHeight:hi,refresh:Qn,destroy:function(){if(Yt.disabled=!0,Yt.ownerNode&&Yt.ownerNode.remove(),W(n,{resize:Un}),Ht&&W(e,ke),Xe&&W(Xe,Ae),tn&&W(tn,Se),W(ft,Ne),W(ft,Be),yn&&W(yn,{click:Fi}),_t&&clearInterval(fn),Z&&G){var i={};i[G]=Hi,W(ft,i)}Ft&&W(ft,Oe),jt&&W(ft,He);var a=[vt,Ye,Ue,Ze,en,gn];for(var r in Y.forEach((function(e,n){var i="container"===e?st:t[e];if("object"==typeof i&&i){var r=!!i.previousElementSibling&&i.previousElementSibling,o=i.parentNode;i.outerHTML=a[n],t[e]=r?r.nextElementSibling:o.firstElementChild}})),Y=nt=it=at=rt=ut=st=ct=ft=dt=vt=pt=mt=lt=ht=Tt=Et=Lt=At=St=Bt=kt=Ot=Ht=Dt=Pt=Rt=It=Yt=Kt=gt=Ut=Zt=$t=te=ee=ne=ie=ae=re=oe=le=ue=de=ve=me=he=ye=ge=xe=be=we=Ce=Me=Te=Ee=Le=Ae=Se=Ne=Be=ke=Oe=He=De=Pe=Re=Ie=ze=We=qe=je=_e=se=zt=Wt=Xe=Ye=Ke=Je=Ge=Qe=qt=tn=en=$e=nn=an=rn=on=ln=un=sn=cn=_t=Vt=hn=Gt=Qt=yn=gn=Xt=xn=fn=dn=vn=pn=mn=Cn=Mn=bn=Tn=wn=En=Ft=jt=null,this)"rebuild"!==r&&(this[r]=null);yt=!1},rebuild:function(){return F(c(t,K))}}}function Sn(t){t&&(zt=qt=Ft=jt=Ht=_t=Qt=Xt=!1)}function Nn(){for(var t=Z?le-Zt:le;t<0;)t+=mt;return t%mt+1}function Bn(t){return t=t?Math.max(0,Math.min(Rt?mt-1:mt-Bt,t)):0,Z?t+Zt:t}function kn(t){for(null==t&&(t=le),Z&&(t-=Zt);t<0;)t+=mt;return Math.floor(t%mt)}function On(){var t,e=kn();return t=Re?e:Et||Tt?Math.ceil((e+1)*nn/mt-1):Math.floor(e/Bt),!Rt&&Z&&le===ve&&(t=nn-1),t}function Hn(){return n.innerWidth||e.documentElement.clientWidth||e.body.clientWidth}function Dn(t){return"top"===t?"afterbegin":"beforeend"}function Pn(t){if(null!=t){var n,i,a=e.createElement("div");return t.appendChild(a),i=(n=a.getBoundingClientRect()).right-n.left,a.remove(),i||Pn(t.parentNode)}}function Rn(){var t=Lt?2*Lt-At:0;return Pn(dt)-t}function In(e){if(t[e])return!0;if(J)for(var n in J)if(J[n][e])return!0;return!1}function zn(e,n){if(null==n&&(n=ht),"items"===e&&Et)return Math.floor((St+At)/(Et+At))||1;var i=t[e];if(J)for(var a in J)n>=parseInt(a)&&e in J[a]&&(i=J[a][e]);return"slideBy"===e&&"page"===i&&(i=zn("items")),Z||"slideBy"!==e&&"items"!==e||(i=Math.floor(i)),i}function Wn(t,e,n,i,a){var r="";if(void 0!==t){var o=t;e&&(o-=e),r=ut?"margin: 0 "+o+"px 0 "+t+"px;":"margin: "+t+"px 0 "+o+"px 0;"}else if(e&&!n){var l="-"+e+"px";r="margin: 0 "+(ut?l+" 0 0":"0 "+l+" 0")+";"}return!Z&&a&&I&&i&&(r+=Vn(i)),r}function qn(t,e,n){return t?(t+e)*$t+"px":p?p+"("+100*$t+"% / "+n+")":100*$t/n+"%"}function Fn(t,e,n){var i;if(t)i=t+e+"px";else{Z||(n=Math.floor(n));var a=Z?$t:n;i=p?p+"(100% / "+a+")":100/a+"%"}return i="width:"+i,"inner"!==U?i+";":i+" !important;"}function jn(t){var e="";!1!==t&&(e=(ut?"padding-":"margin-")+(ut?"right":"bottom")+": "+t+"px;");return e}function _n(t,e){var n=t.substring(0,t.length-e).toLowerCase();return n&&(n="-"+n+"-"),n}function Vn(t){return _n(I,18)+"transition-duration:"+t/1e3+"s;"}function Gn(t){return _n(_,17)+"animation-duration:"+t/1e3+"s;"}function Qn(){if(In("autoHeight")||Tt||!ut){var t=ft.querySelectorAll("img");x(t,(function(t){var e=t.src;Kt||(e&&e.indexOf("data:image")<0?(t.src="",z(t,_e),C(t,"loading"),t.src=e):si(t))})),l((function(){vi(N(t),(function(){se=!0}))})),In("autoHeight")&&(t=fi(le,Math.min(le+Bt-1,$t-1))),Kt?Xn():l((function(){vi(N(t),Xn)}))}else Z&&Si(),Kn(),Jn()}function Xn(){if(Tt&&mt>1){var t=Rt?le:mt-1;!function e(){var n=pt[t].getBoundingClientRect().left,i=pt[t-1].getBoundingClientRect().right;Math.abs(n-i)<=1?Yn():setTimeout((function(){e()}),16)}()}else Yn()}function Yn(){ut&&!Tt||(yi(),Tt?(ee=Li(),Te&&(Ee=$n()),ve=oe(),Sn(Ce||Ee)):Zi()),Z&&Si(),Kn(),Jn()}function Kn(){if(gi(),st.insertAdjacentHTML("afterbegin",'<div class="tns-liveregion tns-visually-hidden" aria-live="polite" aria-atomic="true">slide <span class="current">'+oi()+"</span>  of "+mt+"</div>"),ce=st.querySelector(".tns-liveregion .current"),Ie){var e=_t?"stop":"start";yn?A(yn,{"data-action":e}):t.autoplayButtonOutput&&(st.insertAdjacentHTML(Dn(t.autoplayPosition),'<button type="button" data-action="'+e+'">'+xn[0]+e+xn[1]+Gt[0]+"</button>"),yn=st.querySelector("[data-action]")),yn&&z(yn,{click:Fi}),_t&&(Wi(),Qt&&z(ft,Ne),Xt&&z(ft,Be))}if(Pe){if(tn)A(tn,{"aria-label":"Carousel Pagination"}),x($e=tn.children,(function(t,e){A(t,{"data-nav":e,tabindex:"-1","aria-label":sn+(e+1),"aria-controls":we})}));else{for(var n="",i=Re?"":'style="display:none"',a=0;a<mt;a++)n+='<button type="button" data-nav="'+a+'" tabindex="-1" aria-controls="'+we+'" '+i+' aria-label="'+sn+(a+1)+'"></button>';n='<div class="tns-nav" aria-label="Carousel Pagination">'+n+"</div>",st.insertAdjacentHTML(Dn(t.navPosition),n),tn=st.querySelector(".tns-nav"),$e=tn.children}if(ta(),I){var r=I.substring(0,I.length-18).toLowerCase(),o="transition: all "+Dt/1e3+"s";r&&(o="-"+r+"-"+o),y(Yt,"[aria-controls^="+we+"-item]",o,g(Yt))}A($e[on],{"aria-label":sn+(on+1)+cn}),S($e[on],"tabindex"),C($e[on],un),z(tn,Se)}De&&(Xe||Ke&&Je||(st.insertAdjacentHTML(Dn(t.controlsPosition),'<div class="tns-controls" aria-label="Carousel Navigation" tabindex="0"><button type="button" data-controls="prev" tabindex="-1" aria-controls="'+we+'">'+Wt[0]+'</button><button type="button" data-controls="next" tabindex="-1" aria-controls="'+we+'">'+Wt[1]+"</button></div>"),Xe=st.querySelector(".tns-controls")),Ke&&Je||(Ke=Xe.children[0],Je=Xe.children[1]),t.controlsContainer&&A(Xe,{"aria-label":"Carousel Navigation",tabindex:"0"}),(t.controlsContainer||t.prevButton&&t.nextButton)&&A([Ke,Je],{"aria-controls":we,tabindex:"-1"}),(t.controlsContainer||t.prevButton&&t.nextButton)&&(A(Ke,{"data-controls":"prev"}),A(Je,{"data-controls":"next"})),Ge=bi(Ke),Qe=bi(Je),Mi(),Xe?z(Xe,Ae):(z(Ke,Ae),z(Je,Ae))),ei()}function Jn(){if(Z&&G){var i={};i[G]=Hi,z(ft,i)}Ft&&z(ft,Oe,t.preventScrollOnTouch),jt&&z(ft,He),Ht&&z(e,ke),"inner"===U?xe.on("outerResized",(function(){Zn(),xe.emit("innerLoaded",ea())})):(J||Et||Tt||It||!ut)&&z(n,{resize:Un}),It&&("outer"===U?xe.on("innerLoaded",di):Ce||di()),ui(),Ce?ai():Ee&&ii(),xe.on("indexChanged",pi),"inner"===U&&xe.emit("innerLoaded",ea()),"function"==typeof ge&&ge(ea()),yt=!0}function Un(t){l((function(){Zn(_i(t))}))}function Zn(n){if(yt){"outer"===U&&xe.emit("outerResized",ea(n)),ht=Hn();var i,a=lt,r=!1;J&&(ti(),(i=a!==lt)&&xe.emit("newBreakpointStart",ea(n)));var o,l,u=Bt,s=Ce,c=Ee,f=Ht,d=zt,v=qt,p=Ft,m=jt,h=_t,b=Qt,w=Xt,T=le;if(i){var E=Et,A=It,S=Wt,N=Nt,O=Gt;if(!L)var H=At,D=Lt}if(Ht=zn("arrowKeys"),zt=zn("controls"),qt=zn("nav"),Ft=zn("touch"),Nt=zn("center"),jt=zn("mouseDrag"),_t=zn("autoplay"),Qt=zn("autoplayHoverPause"),Xt=zn("autoplayResetOnVisibility"),i&&(Ce=zn("disable"),Et=zn("fixedWidth"),Dt=zn("speed"),It=zn("autoHeight"),Wt=zn("controlsText"),Gt=zn("autoplayText"),Vt=zn("autoplayTimeout"),L||(Lt=zn("edgePadding"),At=zn("gutter"))),Sn(Ce),St=Rn(),ut&&!Tt||Ce||(yi(),ut||(Zi(),r=!0)),(Et||Tt)&&(ee=Li(),ve=oe()),(i||Et)&&(Bt=zn("items"),kt=zn("slideBy"),(l=Bt!==u)&&(Et||Tt||(ve=oe()),Ln())),i&&Ce!==s&&(Ce?ai():function(){if(!Me)return;if(Yt.disabled=!1,ft.className+=be,Si(),Rt)for(var t=Zt;t--;)Z&&k(pt[t]),k(pt[$t-t-1]);if(!Z)for(var e=le,n=le+mt;e<n;e++){var i=pt[e],a=e<le+Bt?nt:rt;i.style.left=100*(e-le)/Bt+"%",C(i,a)}ni(),Me=!1}()),Te&&(i||Et||Tt)&&(Ee=$n())!==c&&(Ee?(Ni(Ai(Bn(0))),ii()):(!function(){if(!Le)return;Lt&&L&&(ct.style.margin="");if(Zt)for(var t="tns-transparent",e=Zt;e--;)Z&&M(pt[e],t),M(pt[$t-e-1],t);ni(),Le=!1}(),r=!0)),Sn(Ce||Ee),_t||(Qt=Xt=!1),Ht!==f&&(Ht?z(e,ke):W(e,ke)),zt!==d&&(zt?Xe?k(Xe):(Ke&&k(Ke),Je&&k(Je)):Xe?B(Xe):(Ke&&B(Ke),Je&&B(Je))),qt!==v&&(qt?(k(tn),ta()):B(tn)),Ft!==p&&(Ft?z(ft,Oe,t.preventScrollOnTouch):W(ft,Oe)),jt!==m&&(jt?z(ft,He):W(ft,He)),_t!==h&&(_t?(yn&&k(yn),dn||pn||Wi()):(yn&&B(yn),dn&&qi())),Qt!==b&&(Qt?z(ft,Ne):W(ft,Ne)),Xt!==w&&(Xt?z(e,Be):W(e,Be)),i){if(Et===E&&Nt===N||(r=!0),It!==A&&(It||(ct.style.height="")),zt&&Wt!==S&&(Ke.innerHTML=Wt[0],Je.innerHTML=Wt[1]),yn&&Gt!==O){var P=_t?1:0,R=yn.innerHTML,I=R.length-O[P].length;R.substring(I)===O[P]&&(yn.innerHTML=R.substring(0,I)+Gt[P])}}else Nt&&(Et||Tt)&&(r=!0);if((l||Et&&!Tt)&&(nn=$i(),ta()),(o=le!==T)?(xe.emit("indexChanged",ea()),r=!0):l?o||pi():(Et||Tt)&&(ui(),gi(),ri()),l&&!Z&&function(){for(var t=le+Math.min(mt,Bt),e=$t;e--;){var n=pt[e];e>=le&&e<t?(C(n,"tns-moving"),n.style.left=100*(e-le)/Bt+"%",C(n,nt),M(n,rt)):n.style.left&&(n.style.left="",C(n,rt),M(n,nt)),M(n,it)}setTimeout((function(){x(pt,(function(t){M(t,"tns-moving")}))}),300)}(),!Ce&&!Ee){if(i&&!L&&(Lt===D&&At===H||(ct.style.cssText=Wn(Lt,At,Et,Dt,It)),ut)){Z&&(ft.style.width=qn(Et,At,Bt));var q=Fn(Et,At,Bt)+jn(At);!function(t,e){"deleteRule"in t?t.deleteRule(e):t.removeRule(e)}(Yt,g(Yt)-1),y(Yt,"#"+we+" > .tns-item",q,g(Yt))}It&&di(),r&&(Si(),ue=le)}i&&xe.emit("newBreakpointEnd",ea(n))}}function $n(){if(!Et&&!Tt)return mt<=(Nt?Bt-(Bt-1)/2:Bt);var t=Et?(Et+At)*mt:gt[mt],e=Lt?St+2*Lt:St+At;return Nt&&(e-=Et?(St-Et)/2:(St-(gt[le+1]-gt[le]-At))/2),t<=e}function ti(){for(var t in lt=0,J)t=parseInt(t),ht>=t&&(lt=t)}function ei(){!_t&&yn&&B(yn),!qt&&tn&&B(tn),zt||(Xe?B(Xe):(Ke&&B(Ke),Je&&B(Je)))}function ni(){_t&&yn&&k(yn),qt&&tn&&k(tn),zt&&(Xe?k(Xe):(Ke&&k(Ke),Je&&k(Je)))}function ii(){if(!Le){if(Lt&&(ct.style.margin="0px"),Zt)for(var t="tns-transparent",e=Zt;e--;)Z&&C(pt[e],t),C(pt[$t-e-1],t);ei(),Le=!0}}function ai(){if(!Me){if(Yt.disabled=!0,ft.className=ft.className.replace(be.substring(1),""),S(ft,["style"]),Rt)for(var t=Zt;t--;)Z&&B(pt[t]),B(pt[$t-t-1]);if(ut&&Z||S(ct,["style"]),!Z)for(var e=le,n=le+mt;e<n;e++){var i=pt[e];S(i,["style"]),M(i,nt),M(i,rt)}ei(),Me=!0}}function ri(){var t=oi();ce.innerHTML!==t&&(ce.innerHTML=t)}function oi(){var t=li(),e=t[0]+1,n=t[1]+1;return e===n?e+"":e+" to "+n}function li(t){null==t&&(t=Ai());var e,n,i,a=le;if(Nt||Lt?(Tt||Et)&&(n=-(parseFloat(t)+Lt),i=n+St+2*Lt):Tt&&(n=gt[le],i=n+St),Tt)gt.forEach((function(t,r){r<$t&&((Nt||Lt)&&t<=n+.5&&(a=r),i-t>=.5&&(e=r))}));else{if(Et){var r=Et+At;Nt||Lt?(a=Math.floor(n/r),e=Math.ceil(i/r-1)):e=a+Math.ceil(St/r)-1}else if(Nt||Lt){var o=Bt-1;if(Nt?(a-=o/2,e=le+o/2):e=le+o,Lt){var l=Lt*Bt/St;a-=l,e+=l}a=Math.floor(a),e=Math.ceil(e)}else e=a+Bt-1;a=Math.max(a,0),e=Math.min(e,$t-1)}return[a,e]}function ui(){if(Kt&&!Ce){var t=li();t.push(Jt),fi.apply(null,t).forEach((function(t){if(!w(t,je)){var e={};e[G]=function(t){t.stopPropagation()},z(t,e),z(t,_e),t.src=E(t,"data-src");var n=E(t,"data-srcset");n&&(t.srcset=n),C(t,"loading")}}))}}function si(t){C(t,"loaded"),ci(t)}function ci(t){C(t,je),M(t,"loading"),W(t,_e)}function fi(t,e,n){var i=[];for(n||(n="img");t<=e;)x(pt[t].querySelectorAll(n),(function(t){i.push(t)})),t++;return i}function di(){var t=fi.apply(null,li());l((function(){vi(t,hi)}))}function vi(t,e){return se?e():(t.forEach((function(e,n){!Kt&&e.complete&&ci(e),w(e,je)&&t.splice(n,1)})),t.length?void l((function(){vi(t,e)})):e())}function pi(){ui(),gi(),ri(),Mi(),function(){if(qt&&(on=rn>=0?rn:On(),rn=-1,on!==ln)){var t=$e[ln],e=$e[on];A(t,{tabindex:"-1","aria-label":sn+(ln+1)}),M(t,un),A(e,{"aria-label":sn+(on+1)+cn}),S(e,"tabindex"),C(e,un),ln=on}}()}function mi(t,e){for(var n=[],i=t,a=Math.min(t+e,$t);i<a;i++)n.push(pt[i].offsetHeight);return Math.max.apply(null,n)}function hi(){var t=It?mi(le,Bt):mi(Zt,mt),e=ot||ct;e.style.height!==t&&(e.style.height=t+"px")}function yi(){gt=[0];var t=ut?"left":"top",e=ut?"right":"bottom",n=pt[0].getBoundingClientRect()[t];x(pt,(function(i,a){a&&gt.push(i.getBoundingClientRect()[t]-n),a===$t-1&&gt.push(i.getBoundingClientRect()[e]-n)}))}function gi(){var t=li(),e=t[0],n=t[1];x(pt,(function(t,i){i>=e&&i<=n?T(t,"aria-hidden")&&(S(t,["aria-hidden","tabindex"]),C(t,qe)):T(t,"aria-hidden")||(A(t,{"aria-hidden":"true",tabindex:"-1"}),M(t,qe))}))}function xi(t){return t.nodeName.toLowerCase()}function bi(t){return"button"===xi(t)}function wi(t){return"true"===t.getAttribute("aria-disabled")}function Ci(t,e,n){t?e.disabled=n:e.setAttribute("aria-disabled",n.toString())}function Mi(){if(zt&&!Pt&&!Rt){var t=Ge?Ke.disabled:wi(Ke),e=Qe?Je.disabled:wi(Je),n=le<=de,i=!Pt&&le>=ve;n&&!t&&Ci(Ge,Ke,!0),!n&&t&&Ci(Ge,Ke,!1),i&&!e&&Ci(Qe,Je,!0),!i&&e&&Ci(Qe,Je,!1)}}function Ti(t,e){I&&(t.style[I]=e)}function Ei(t){return null==t&&(t=le),Tt?(St-(Lt?At:0)-(gt[t+1]-gt[t]-At))/2:Et?(St-Et)/2:(Bt-1)/2}function Li(){var t=St+(Lt?At:0)-(Et?(Et+At)*$t:gt[$t]);return Nt&&!Rt&&(t=Et?-(Et+At)*($t-1)-Ei():Ei($t-1)-gt[$t-1]),t>0&&(t=0),t}function Ai(t){var e;if(null==t&&(t=le),ut&&!Tt)if(Et)e=-(Et+At)*t,Nt&&(e+=Ei());else{var n=P?$t:Bt;Nt&&(t-=Ei()),e=100*-t/n}else e=-gt[t],Nt&&Tt&&(e+=Ei());return te&&(e=Math.max(e,ee)),e+=!ut||Tt||Et?"px":"%"}function Si(t){Ti(ft,"0s"),Ni(t)}function Ni(t){null==t&&(t=Ai()),ft.style[ie]=ae+t+re}function Bi(t,e,n,i){var a=t+Bt;Rt||(a=Math.min(a,$t));for(var r=t;r<a;r++){var o=pt[r];i||(o.style.left=100*(r-le)/Bt+"%"),at&&j&&(o.style[j]=o.style[V]=at*(r-t)/1e3+"s"),M(o,e),C(o,n),i&&Ut.push(o)}}function ki(t,e){ne&&Ln(),(le!==ue||e)&&(xe.emit("indexChanged",ea()),xe.emit("transitionStart",ea()),It&&di(),dn&&t&&["click","keydown"].indexOf(t.type)>=0&&qi(),ye=!0,An())}function Oi(t){return t.toLowerCase().replace(/-/g,"")}function Hi(t){if(Z||ye){if(xe.emit("transitionEnd",ea(t)),!Z&&Ut.length>0)for(var e=0;e<Ut.length;e++){var n=Ut[e];n.style.left="",V&&j&&(n.style[V]="",n.style[j]=""),M(n,it),C(n,rt)}if(!t||!Z&&t.target.parentNode===ft||t.target===ft&&Oi(t.propertyName)===Oi(ie)){if(!ne){var i=le;Ln(),le!==i&&(xe.emit("indexChanged",ea()),Si())}"inner"===U&&xe.emit("innerLoaded",ea()),ye=!1,ue=le}}}function Di(t,e){if(!Ee)if("prev"===t)Pi(e,-1);else if("next"===t)Pi(e,1);else{if(ye){if(pe)return;Hi()}var n=kn(),i=0;if("first"===t?i=-n:"last"===t?i=Z?mt-Bt-n:mt-1-n:("number"!=typeof t&&(t=parseInt(t)),isNaN(t)||(e||(t=Math.max(0,Math.min(mt-1,t))),i=t-n)),!Z&&i&&Math.abs(i)<Bt){var a=i>0?1:-1;i+=le+i-mt>=de?mt*a:2*mt*a*-1}le+=i,Z&&Rt&&(le<de&&(le+=mt),le>ve&&(le-=mt)),kn(le)!==kn(ue)&&ki(e)}}function Pi(t,e){if(ye){if(pe)return;Hi()}var n;if(!e){for(var i=Vi(t=_i(t));i!==Xe&&[Ke,Je].indexOf(i)<0;)i=i.parentNode;var a=[Ke,Je].indexOf(i);a>=0&&(n=!0,e=0===a?-1:1)}if(Pt){if(le===de&&-1===e)return void Di("last",t);if(le===ve&&1===e)return void Di("first",t)}e&&(le+=kt*e,Tt&&(le=Math.floor(le)),ki(n||t&&"keydown"===t.type?t:null))}function Ri(){fn=setInterval((function(){Pi(null,hn)}),Vt),dn=!0}function Ii(){clearInterval(fn),dn=!1}function zi(t,e){A(yn,{"data-action":t}),yn.innerHTML=xn[0]+t+xn[1]+e}function Wi(){Ri(),yn&&zi("stop",Gt[1])}function qi(){Ii(),yn&&zi("start",Gt[0])}function Fi(){dn?(qi(),pn=!0):(Wi(),pn=!1)}function ji(t){t.focus()}function _i(t){return Gi(t=t||n.event)?t.changedTouches[0]:t}function Vi(t){return t.target||n.event.srcElement}function Gi(t){return t.type.indexOf("touch")>=0}function Qi(t){t.preventDefault?t.preventDefault():t.returnValue=!1}function Xi(){return r=Mn.y-Cn.y,o=Mn.x-Cn.x,e=Math.atan2(r,o)*(180/Math.PI),n=me,i=!1,(a=Math.abs(90-Math.abs(e)))>=90-n?i="horizontal":a<=n&&(i="vertical"),i===t.axis;var e,n,i,a,r,o}function Yi(t){if(ye){if(pe)return;Hi()}_t&&dn&&Ii(),Tn=!0,wn&&(s(wn),wn=null);var e=_i(t);xe.emit(Gi(t)?"touchStart":"dragStart",ea(t)),!Gi(t)&&["img","a"].indexOf(xi(Vi(t)))>=0&&Qi(t),Mn.x=Cn.x=e.clientX,Mn.y=Cn.y=e.clientY,Z&&(bn=parseFloat(ft.style[ie].replace(ae,"")),Ti(ft,"0s"))}function Ki(t){if(Tn){var e=_i(t);Mn.x=e.clientX,Mn.y=e.clientY,Z?wn||(wn=l((function(){Ji(t)}))):("?"===he&&(he=Xi()),he&&(Ve=!0)),("boolean"!=typeof t.cancelable||t.cancelable)&&Ve&&t.preventDefault()}}function Ji(t){if(he){if(s(wn),Tn&&(wn=l((function(){Ji(t)}))),"?"===he&&(he=Xi()),he){!Ve&&Gi(t)&&(Ve=!0);try{t.type&&xe.emit(Gi(t)?"touchMove":"dragMove",ea(t))}catch(t){}var e=bn,n=En(Mn,Cn);if(!ut||Et||Tt)e+=n,e+="px";else e+=P?n*Bt*100/((St+At)*$t):100*n/(St+At),e+="%";ft.style[ie]=ae+e+re}}else Tn=!1}function Ui(e){if(Tn){wn&&(s(wn),wn=null),Z&&Ti(ft,""),Tn=!1;var n=_i(e);Mn.x=n.clientX,Mn.y=n.clientY;var i=En(Mn,Cn);if(Math.abs(i)){if(!Gi(e)){var a=Vi(e);z(a,{click:function t(e){Qi(e),W(a,{click:t})}})}Z?wn=l((function(){if(ut&&!Tt){var t=-i*Bt/(St+At);t=i>0?Math.floor(t):Math.ceil(t),le+=t}else{var n=-(bn+i);if(n<=0)le=de;else if(n>=gt[$t-1])le=ve;else for(var a=0;a<$t&&n>=gt[a];)le=a,n>gt[a]&&i<0&&(le+=1),a++}ki(e,i),xe.emit(Gi(e)?"touchEnd":"dragEnd",ea(e))})):he&&Pi(e,i>0?-1:1)}}"auto"===t.preventScrollOnTouch&&(Ve=!1),me&&(he="?"),_t&&!dn&&Ri()}function Zi(){(ot||ct).style.height=gt[le+Bt]-gt[le]+"px"}function $i(){var t=Et?(Et+At)*mt/St:mt/Bt;return Math.min(Math.ceil(t),mt)}function ta(){if(qt&&!Re&&nn!==an){var t=an,e=nn,n=k;for(an>nn&&(t=nn,e=an,n=B);t<e;)n($e[t]),t++;an=nn}}function ea(t){return{container:ft,slideItems:pt,navContainer:tn,navItems:$e,controlsContainer:Xe,hasControls:De,prevButton:Ke,nextButton:Je,items:Bt,slideBy:kt,cloneCount:Zt,slideCount:mt,slideCountNew:$t,index:le,indexCached:ue,displayIndex:Nn(),navCurrentIndex:on,navCurrentIndexCached:ln,pages:nn,pagesCached:an,sheet:Yt,isOn:yt,event:t||{}}}X&&console.warn("No slides found in",t.container)};r.tns=F;(0,r.tns)({container:".reviews-slider",controls:!1,items:1,slideBy:"page",autoplay:!1,navPosition:"bottom"});
//# sourceMappingURL=index.38479a13.js.map