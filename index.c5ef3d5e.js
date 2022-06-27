const t=document.querySelectorAll(".btn-modal-open"),e=document.querySelector(".overlay-order");t.forEach((t=>{t.addEventListener("click",(()=>{e.classList.add("overlay-active")}))})),e.addEventListener("click",(t=>{const n=t.target;(n===e||n.closest(".close-button"))&&e.classList.remove("overlay-active")}));const n=document.querySelectorAll(".contacts__location"),i=document.querySelectorAll(".contacts__franchise"),a=document.querySelector(".overlay-location");n.forEach((t=>{t.addEventListener("click",(()=>{a.classList.add("overlay-active")}))})),i.forEach((t=>{t.addEventListener("click",(()=>{a.classList.add("overlay-active")}))})),a.addEventListener("click",(t=>{const e=t.target;(e===a||e.closest(".close-button"))&&a.classList.remove("overlay-active")})),(()=>{const t=document.querySelector(".js-menu-container"),e=document.querySelector(".js-open-menu"),n=document.querySelector(".js-close-menu"),i=()=>{const n="true"===e.getAttribute("aria-expanded")||!1;e.setAttribute("aria-expanded",!n),t.classList.toggle("is-open");bodyScrollLock[n?"enableBodyScroll":"disableBodyScroll"](document.body)};e.addEventListener("click",i),n.addEventListener("click",i),window.matchMedia("(min-width: 768px)").addEventListener("change",(n=>{n.matches&&(t.classList.remove("is-open"),e.setAttribute("aria-expanded",!1),bodyScrollLock.enableBodyScroll(document.body))}))})();var o={};Object.defineProperty(o,"__esModule",{value:!0});var r=window,l=r.requestAnimationFrame||r.webkitRequestAnimationFrame||r.mozRequestAnimationFrame||r.msRequestAnimationFrame||function(t){return setTimeout(t,16)},u=window,s=u.cancelAnimationFrame||u.mozCancelAnimationFrame||function(t){clearTimeout(t)};function c(){for(var t,e,n,i=arguments[0]||{},a=1,o=arguments.length;a<o;a++)if(null!==(t=arguments[a]))for(e in t)i!==(n=t[e])&&void 0!==n&&(i[e]=n);return i}function d(t){return["true","false"].indexOf(t)>=0?JSON.parse(t):t}function f(t,e,n,i){if(i)try{t.setItem(e,n)}catch(t){}return n}function v(){var t=document,e=t.body;return e||((e=t.createElement("body")).fake=!0),e}var p=document.documentElement;function m(t){var e="";return t.fake&&(e=p.style.overflow,t.style.background="",t.style.overflow=p.style.overflow="hidden",p.appendChild(t)),e}function h(t,e){t.fake&&(t.remove(),p.style.overflow=e,p.offsetHeight)}function y(t,e,n,i){"insertRule"in t?t.insertRule(e+"{"+n+"}",i):t.addRule(e,n,i)}function g(t){return("insertRule"in t?t.cssRules:t.rules).length}function b(t,e,n){for(var i=0,a=t.length;i<a;i++)e.call(n,t[i],i)}var x="classList"in document.createElement("_"),w=x?function(t,e){return t.classList.contains(e)}:function(t,e){return t.className.indexOf(e)>=0},C=x?function(t,e){w(t,e)||t.classList.add(e)}:function(t,e){w(t,e)||(t.className+=" "+e)},M=x?function(t,e){w(t,e)&&t.classList.remove(e)}:function(t,e){w(t,e)&&(t.className=t.className.replace(e,""))};function T(t,e){return t.hasAttribute(e)}function E(t,e){return t.getAttribute(e)}function L(t){return void 0!==t.item}function S(t,e){if(t=L(t)||t instanceof Array?t:[t],"[object Object]"===Object.prototype.toString.call(e))for(var n=t.length;n--;)for(var i in e)t[n].setAttribute(i,e[i])}function A(t,e){t=L(t)||t instanceof Array?t:[t];for(var n=(e=e instanceof Array?e:[e]).length,i=t.length;i--;)for(var a=n;a--;)t[i].removeAttribute(e[a])}function B(t){for(var e=[],n=0,i=t.length;n<i;n++)e.push(t[n]);return e}function N(t,e){"none"!==t.style.display&&(t.style.display="none")}function k(t,e){"none"===t.style.display&&(t.style.display="")}function O(t){return"none"!==window.getComputedStyle(t).display}function H(t){if("string"==typeof t){var e=[t],n=t.charAt(0).toUpperCase()+t.substr(1);["Webkit","Moz","ms","O"].forEach((function(i){"ms"===i&&"transform"!==t||e.push(i+n)})),t=e}var i=document.createElement("fakeelement");t.length;for(var a=0;a<t.length;a++){var o=t[a];if(void 0!==i.style[o])return o}return!1}function D(t,e){var n=!1;return/^Webkit/.test(t)?n="webkit"+e+"End":/^O/.test(t)?n="o"+e+"End":t&&(n=e.toLowerCase()+"end"),n}var P=!1;try{var R=Object.defineProperty({},"passive",{get:function(){P=!0}});window.addEventListener("test",null,R)}catch(t){}var I=!!P&&{passive:!0};function q(t,e,n){for(var i in e){var a=["touchstart","touchmove"].indexOf(i)>=0&&!n&&I;t.addEventListener(i,e[i],a)}}function z(t,e){for(var n in e){var i=["touchstart","touchmove"].indexOf(n)>=0&&I;t.removeEventListener(n,e[n],i)}}function W(){return{topics:{},on:function(t,e){this.topics[t]=this.topics[t]||[],this.topics[t].push(e)},off:function(t,e){if(this.topics[t])for(var n=0;n<this.topics[t].length;n++)if(this.topics[t][n]===e){this.topics[t].splice(n,1);break}},emit:function(t,e){e.type=t,this.topics[t]&&this.topics[t].forEach((function(n){n(e,t)}))}}}Object.keys||(Object.keys=function(t){var e=[];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.push(n);return e}),"remove"in Element.prototype||(Element.prototype.remove=function(){this.parentNode&&this.parentNode.removeChild(this)});var j=function(t){t=c({container:".slider",mode:"carousel",axis:"horizontal",items:1,gutter:0,edgePadding:0,fixedWidth:!1,autoWidth:!1,viewportMax:!1,slideBy:1,center:!1,controls:!0,controlsPosition:"top",controlsText:["prev","next"],controlsContainer:!1,prevButton:!1,nextButton:!1,nav:!0,navPosition:"top",navContainer:!1,navAsThumbnails:!1,arrowKeys:!1,speed:300,autoplay:!1,autoplayPosition:"top",autoplayTimeout:5e3,autoplayDirection:"forward",autoplayText:["start","stop"],autoplayHoverPause:!1,autoplayButton:!1,autoplayButtonOutput:!0,autoplayResetOnVisibility:!0,animateIn:"tns-fadeIn",animateOut:"tns-fadeOut",animateNormal:"tns-normal",animateDelay:!1,loop:!0,rewind:!1,autoHeight:!1,responsive:!1,lazyload:!1,lazyloadSelector:".tns-lazy-img",touch:!0,mouseDrag:!1,swipeAngle:15,nested:!1,preventActionWhenRunning:!1,preventScrollOnTouch:!1,freezable:!0,onInit:!1,useLocalStorage:!0,nonce:!1},t||{});var e=document,n=window,i={ENTER:13,SPACE:32,LEFT:37,RIGHT:39},a={},o=t.useLocalStorage;if(o){var r=navigator.userAgent,u=new Date;try{(a=n.localStorage)?(a.setItem(u,u),o=a.getItem(u)==u,a.removeItem(u)):o=!1,o||(a={})}catch(t){o=!1}o&&(a.tnsApp&&a.tnsApp!==r&&["tC","tPL","tMQ","tTf","t3D","tTDu","tTDe","tADu","tADe","tTE","tAE"].forEach((function(t){a.removeItem(t)})),localStorage.tnsApp=r)}var p=a.tC?d(a.tC):f(a,"tC",function(){var t=document,e=v(),n=m(e),i=t.createElement("div"),a=!1;e.appendChild(i);try{for(var o,r="(10px * 10)",l=["calc"+r,"-moz-calc"+r,"-webkit-calc"+r],u=0;u<3;u++)if(o=l[u],i.style.width=o,100===i.offsetWidth){a=o.replace(r,"");break}}catch(t){}return e.fake?h(e,n):i.remove(),a}(),o),x=a.tPL?d(a.tPL):f(a,"tPL",function(){var t,e=document,n=v(),i=m(n),a=e.createElement("div"),o=e.createElement("div"),r="";a.className="tns-t-subp2",o.className="tns-t-ct";for(var l=0;l<70;l++)r+="<div></div>";return o.innerHTML=r,a.appendChild(o),n.appendChild(a),t=Math.abs(a.getBoundingClientRect().left-o.children[67].getBoundingClientRect().left)<2,n.fake?h(n,i):a.remove(),t}(),o),L=a.tMQ?d(a.tMQ):f(a,"tMQ",function(){if(window.matchMedia||window.msMatchMedia)return!0;var t,e=document,n=v(),i=m(n),a=e.createElement("div"),o=e.createElement("style"),r="@media all and (min-width:1px){.tns-mq-test{position:absolute}}";return o.type="text/css",a.className="tns-mq-test",n.appendChild(o),n.appendChild(a),o.styleSheet?o.styleSheet.cssText=r:o.appendChild(e.createTextNode(r)),t=window.getComputedStyle?window.getComputedStyle(a).position:a.currentStyle.position,n.fake?h(n,i):a.remove(),"absolute"===t}(),o),P=a.tTf?d(a.tTf):f(a,"tTf",H("transform"),o),R=a.t3D?d(a.t3D):f(a,"t3D",function(t){if(!t)return!1;if(!window.getComputedStyle)return!1;var e,n=document,i=v(),a=m(i),o=n.createElement("p"),r=t.length>9?"-"+t.slice(0,-9).toLowerCase()+"-":"";return r+="transform",i.insertBefore(o,null),o.style[t]="translate3d(1px,1px,1px)",e=window.getComputedStyle(o).getPropertyValue(r),i.fake?h(i,a):o.remove(),void 0!==e&&e.length>0&&"none"!==e}(P),o),I=a.tTDu?d(a.tTDu):f(a,"tTDu",H("transitionDuration"),o),F=a.tTDe?d(a.tTDe):f(a,"tTDe",H("transitionDelay"),o),_=a.tADu?d(a.tADu):f(a,"tADu",H("animationDuration"),o),V=a.tADe?d(a.tADe):f(a,"tADe",H("animationDelay"),o),G=a.tTE?d(a.tTE):f(a,"tTE",D(I,"Transition"),o),Q=a.tAE?d(a.tAE):f(a,"tAE",D(_,"Animation"),o),X=n.console&&"function"==typeof n.console.warn,Y=["container","controlsContainer","prevButton","nextButton","navContainer","autoplayButton"],K={};if(Y.forEach((function(n){if("string"==typeof t[n]){var i=t[n],a=e.querySelector(i);if(K[n]=i,!a||!a.nodeName)return void(X&&console.warn("Can't find",t[n]));t[n]=a}})),!(t.container.children.length<1)){var J=t.responsive,U=t.nested,Z="carousel"===t.mode;if(J){0 in J&&(t=c(t,J[0]),delete J[0]);var $={};for(var tt in J){var et=J[tt];et="number"==typeof et?{items:et}:et,$[tt]=et}J=$,$=null}if(Z||function t(e){for(var n in e)Z||("slideBy"===n&&(e[n]="page"),"edgePadding"===n&&(e[n]=!1),"autoHeight"===n&&(e[n]=!1)),"responsive"===n&&t(e[n])}(t),!Z){t.axis="horizontal",t.slideBy="page",t.edgePadding=!1;var nt=t.animateIn,it=t.animateOut,at=t.animateDelay,ot=t.animateNormal}var rt,lt,ut="horizontal"===t.axis,st=e.createElement("div"),ct=e.createElement("div"),dt=t.container,ft=dt.parentNode,vt=dt.outerHTML,pt=dt.children,mt=pt.length,ht=Hn(),yt=!1;J&&ti(),Z&&(dt.className+=" tns-vpfix");var gt,bt,xt,wt,Ct,Mt,Tt=t.autoWidth,Et=qn("fixedWidth"),Lt=qn("edgePadding"),St=qn("gutter"),At=Rn(),Bt=qn("center"),Nt=Tt?1:Math.floor(qn("items")),kt=qn("slideBy"),Ot=t.viewportMax||t.fixedWidthViewportWidth,Ht=qn("arrowKeys"),Dt=qn("speed"),Pt=t.rewind,Rt=!Pt&&t.loop,It=qn("autoHeight"),qt=qn("controls"),zt=qn("controlsText"),Wt=qn("nav"),jt=qn("touch"),Ft=qn("mouseDrag"),_t=qn("autoplay"),Vt=qn("autoplayTimeout"),Gt=qn("autoplayText"),Qt=qn("autoplayHoverPause"),Xt=qn("autoplayResetOnVisibility"),Yt=(wt=null,Ct=qn("nonce"),Mt=document.createElement("style"),wt&&Mt.setAttribute("media",wt),Ct&&Mt.setAttribute("nonce",Ct),document.querySelector("head").appendChild(Mt),Mt.sheet?Mt.sheet:Mt.styleSheet),Kt=t.lazyload,Jt=t.lazyloadSelector,Ut=[],Zt=Rt?(bt=function(){if(Tt||Et&&!Ot)return mt-1;var e=Et?"fixedWidth":"items",n=[];if((Et||t[e]<mt)&&n.push(t[e]),J)for(var i in J){var a=J[i][e];a&&(Et||a<mt)&&n.push(a)}return n.length||n.push(0),Math.ceil(Et?Ot/Math.min.apply(null,n):Math.max.apply(null,n))}(),xt=Z?Math.ceil((5*bt-mt)/2):4*bt-mt,xt=Math.max(bt,xt),In("edgePadding")?xt+1:xt):0,$t=Z?mt+2*Zt:mt+Zt,te=!(!Et&&!Tt||Rt),ee=Et?Li():null,ne=!Z||!Rt,ie=ut?"left":"top",ae="",oe="",re=Et?function(){return Bt&&!Rt?mt-1:Math.ceil(-ee/(Et+St))}:Tt?function(){for(var t=0;t<$t;t++)if(gt[t]>=-ee)return t}:function(){return Bt&&Z&&!Rt?mt-1:Rt||Z?Math.max(0,$t-Math.ceil(Nt)):$t-1},le=Nn(qn("startIndex")),ue=le;Bn();var se,ce,de,fe=0,ve=Tt?null:re(),pe=t.preventActionWhenRunning,me=t.swipeAngle,he=!me||"?",ye=!1,ge=t.onInit,be=new W,xe=" tns-slider tns-"+t.mode,we=dt.id||(de=window.tnsId,window.tnsId=de?de+1:1,"tns"+window.tnsId),Ce=qn("disable"),Me=!1,Te=t.freezable,Ee=!(!Te||Tt)&&$n(),Le=!1,Se={click:Pi,keydown:function(t){t=_i(t);var e=[i.LEFT,i.RIGHT].indexOf(t.keyCode);e>=0&&(0===e?Ke.disabled||Pi(t,-1):Je.disabled||Pi(t,1))}},Ae={click:function(t){if(ye){if(pe)return;Hi()}var e=Vi(t=_i(t));for(;e!==tn&&!T(e,"data-nav");)e=e.parentNode;if(T(e,"data-nav")){var n=on=Number(E(e,"data-nav")),i=Et||Tt?n*mt/nn:n*Nt;Di(Re?n:Math.min(Math.ceil(i),mt-1),t),rn===n&&(fn&&Wi(),on=-1)}},keydown:function(t){t=_i(t);var n=e.activeElement;if(!T(n,"data-nav"))return;var a=[i.LEFT,i.RIGHT,i.ENTER,i.SPACE].indexOf(t.keyCode),o=Number(E(n,"data-nav"));a>=0&&(0===a?o>0&&Fi($e[o-1]):1===a?o<nn-1&&Fi($e[o+1]):(on=o,Di(o,t)))}},Be={mouseover:function(){fn&&(Ii(),vn=!0)},mouseout:function(){vn&&(Ri(),vn=!1)}},Ne={visibilitychange:function(){e.hidden?fn&&(Ii(),mn=!0):mn&&(Ri(),mn=!1)}},ke={keydown:function(t){t=_i(t);var e=[i.LEFT,i.RIGHT].indexOf(t.keyCode);e>=0&&Pi(t,0===e?-1:1)}},Oe={touchstart:Yi,touchmove:Ki,touchend:Ui,touchcancel:Ui},He={mousedown:Yi,mousemove:Ki,mouseup:Ui,mouseleave:Ui},De=In("controls"),Pe=In("nav"),Re=!!Tt||t.navAsThumbnails,Ie=In("autoplay"),qe=In("touch"),ze=In("mouseDrag"),We="tns-slide-active",je="tns-slide-cloned",Fe="tns-complete",_e={load:function(t){si(Vi(t))},error:function(t){e=Vi(t),C(e,"failed"),ci(e);var e}},Ve="force"===t.preventScrollOnTouch;if(De)var Ge,Qe,Xe=t.controlsContainer,Ye=t.controlsContainer?t.controlsContainer.outerHTML:"",Ke=t.prevButton,Je=t.nextButton,Ue=t.prevButton?t.prevButton.outerHTML:"",Ze=t.nextButton?t.nextButton.outerHTML:"";if(Pe)var $e,tn=t.navContainer,en=t.navContainer?t.navContainer.outerHTML:"",nn=Tt?mt:$i(),an=0,on=-1,rn=On(),ln=rn,un="tns-nav-active",sn="Carousel Page ",cn=" (Current Slide)";if(Ie)var dn,fn,vn,pn,mn,hn="forward"===t.autoplayDirection?1:-1,yn=t.autoplayButton,gn=t.autoplayButton?t.autoplayButton.outerHTML:"",bn=["<span class='tns-visually-hidden'>"," animation</span>"];if(qe||ze)var xn,wn,Cn={},Mn={},Tn=!1,En=ut?function(t,e){return t.x-e.x}:function(t,e){return t.y-e.y};Tt||An(Ce||Ee),P&&(ie=P,ae="translate",R?(ae+=ut?"3d(":"3d(0px, ",oe=ut?", 0px, 0px)":", 0px)"):(ae+=ut?"X(":"Y(",oe=")")),Z&&(dt.className=dt.className.replace("tns-vpfix","")),function(){In("gutter"),st.className="tns-outer",ct.className="tns-inner",st.id=we+"-ow",ct.id=we+"-iw",""===dt.id&&(dt.id=we);xe+=x||Tt?" tns-subpixel":" tns-no-subpixel",xe+=p?" tns-calc":" tns-no-calc",Tt&&(xe+=" tns-autowidth");xe+=" tns-"+t.axis,dt.className+=xe,Z?((rt=e.createElement("div")).id=we+"-mw",rt.className="tns-ovh",st.appendChild(rt),rt.appendChild(ct)):st.appendChild(ct);if(It){(rt||ct).className+=" tns-ah"}if(ft.insertBefore(st,dt),ct.appendChild(dt),b(pt,(function(t,e){C(t,"tns-item"),t.id||(t.id=we+"-item"+e),!Z&&ot&&C(t,ot),S(t,{"aria-hidden":"true",tabindex:"-1"})})),Zt){for(var n=e.createDocumentFragment(),i=e.createDocumentFragment(),a=Zt;a--;){var o=a%mt,r=pt[o].cloneNode(!0);if(C(r,je),A(r,"id"),i.insertBefore(r,i.firstChild),Z){var l=pt[mt-1-o].cloneNode(!0);C(l,je),A(l,"id"),n.appendChild(l)}}dt.insertBefore(n,dt.firstChild),dt.appendChild(i),pt=dt.children}}(),function(){if(!Z)for(var e=le,i=le+Math.min(mt,Nt);e<i;e++){var a=pt[e];a.style.left=100*(e-le)/Nt+"%",C(a,nt),M(a,ot)}ut&&(x||Tt?(y(Yt,"#"+we+" > .tns-item","font-size:"+n.getComputedStyle(pt[0]).fontSize+";",g(Yt)),y(Yt,"#"+we,"font-size:0;",g(Yt))):Z&&b(pt,(function(t,e){t.style.marginLeft=function(t){return p?p+"("+100*t+"% / "+$t+")":100*t/$t+"%"}(e)})));if(L){if(I){var o=rt&&t.autoHeight?Vn(t.speed):"";y(Yt,"#"+we+"-mw",o,g(Yt))}o=zn(t.edgePadding,t.gutter,t.fixedWidth,t.speed,t.autoHeight),y(Yt,"#"+we+"-iw",o,g(Yt)),Z&&(o=ut&&!Tt?"width:"+Wn(t.fixedWidth,t.gutter,t.items)+";":"",I&&(o+=Vn(Dt)),y(Yt,"#"+we,o,g(Yt))),o=ut&&!Tt?jn(t.fixedWidth,t.gutter,t.items):"",t.gutter&&(o+=Fn(t.gutter)),Z||(I&&(o+=Vn(Dt)),_&&(o+=Gn(Dt))),o&&y(Yt,"#"+we+" > .tns-item",o,g(Yt))}else{Z&&It&&(rt.style[I]=Dt/1e3+"s"),ct.style.cssText=zn(Lt,St,Et,It),Z&&ut&&!Tt&&(dt.style.width=Wn(Et,St,Nt));o=ut&&!Tt?jn(Et,St,Nt):"";St&&(o+=Fn(St)),o&&y(Yt,"#"+we+" > .tns-item",o,g(Yt))}if(J&&L)for(var r in J){r=parseInt(r);var l=J[r],u=(o="",""),s="",c="",d="",f=Tt?null:qn("items",r),v=qn("fixedWidth",r),m=qn("speed",r),h=qn("edgePadding",r),w=qn("autoHeight",r),T=qn("gutter",r);I&&rt&&qn("autoHeight",r)&&"speed"in l&&(u="#"+we+"-mw{"+Vn(m)+"}"),("edgePadding"in l||"gutter"in l)&&(s="#"+we+"-iw{"+zn(h,T,v,m,w)+"}"),Z&&ut&&!Tt&&("fixedWidth"in l||"items"in l||Et&&"gutter"in l)&&(c="width:"+Wn(v,T,f)+";"),I&&"speed"in l&&(c+=Vn(m)),c&&(c="#"+we+"{"+c+"}"),("fixedWidth"in l||Et&&"gutter"in l||!Z&&"items"in l)&&(d+=jn(v,T,f)),"gutter"in l&&(d+=Fn(T)),!Z&&"speed"in l&&(I&&(d+=Vn(m)),_&&(d+=Gn(m))),d&&(d="#"+we+" > .tns-item{"+d+"}"),(o=u+s+c+d)&&Yt.insertRule("@media (min-width: "+r/16+"em) {"+o+"}",Yt.cssRules.length)}}(),Qn();var Ln=Rt?Z?function(){var t=fe,e=ve;t+=kt,e-=kt,Lt?(t+=1,e-=1):Et&&(At+St)%(Et+St)&&(e-=1),Zt&&(le>e?le-=mt:le<t&&(le+=mt))}:function(){if(le>ve)for(;le>=fe+mt;)le-=mt;else if(le<fe)for(;le<=ve-mt;)le+=mt}:function(){le=Math.max(fe,Math.min(ve,le))},Sn=Z?function(){var t,e,n,i,a,o,r,l,u,s,c;Ti(dt,""),I||!Dt?(Bi(),Dt&&O(dt)||Hi()):(t=dt,e=ie,n=ae,i=oe,a=Si(),o=Dt,r=Hi,l=Math.min(o,10),u=a.indexOf("%")>=0?"%":"px",a=a.replace(u,""),s=Number(t.style[e].replace(n,"").replace(i,"").replace(u,"")),c=(a-s)/o*l,setTimeout((function a(){o-=l,s+=c,t.style[e]=n+s+u+i,o>0?setTimeout(a,l):r()}),l)),ut||Zi()}:function(){Ut=[];var t={};t[G]=t[Q]=Hi,z(pt[ue],t),q(pt[le],t),Ni(ue,nt,it,!0),Ni(le,ot,nt),G&&Q&&Dt&&O(dt)||Hi()};return{version:"2.9.4",getInfo:ea,events:be,goTo:Di,play:function(){_t&&!fn&&(zi(),pn=!1)},pause:function(){fn&&(Wi(),pn=!0)},isOn:yt,updateSliderHeight:hi,refresh:Qn,destroy:function(){if(Yt.disabled=!0,Yt.ownerNode&&Yt.ownerNode.remove(),z(n,{resize:Un}),Ht&&z(e,ke),Xe&&z(Xe,Se),tn&&z(tn,Ae),z(dt,Be),z(dt,Ne),yn&&z(yn,{click:ji}),_t&&clearInterval(dn),Z&&G){var i={};i[G]=Hi,z(dt,i)}jt&&z(dt,Oe),Ft&&z(dt,He);var a=[vt,Ye,Ue,Ze,en,gn];for(var o in Y.forEach((function(e,n){var i="container"===e?st:t[e];if("object"==typeof i&&i){var o=!!i.previousElementSibling&&i.previousElementSibling,r=i.parentNode;i.outerHTML=a[n],t[e]=o?o.nextElementSibling:r.firstElementChild}})),Y=nt=it=at=ot=ut=st=ct=dt=ft=vt=pt=mt=lt=ht=Tt=Et=Lt=St=At=Nt=kt=Ot=Ht=Dt=Pt=Rt=It=Yt=Kt=gt=Ut=Zt=$t=te=ee=ne=ie=ae=oe=re=le=ue=fe=ve=me=he=ye=ge=be=xe=we=Ce=Me=Te=Ee=Le=Se=Ae=Be=Ne=ke=Oe=He=De=Pe=Re=Ie=qe=ze=We=Fe=_e=se=qt=zt=Xe=Ye=Ke=Je=Ge=Qe=Wt=tn=en=$e=nn=an=on=rn=ln=un=sn=cn=_t=Vt=hn=Gt=Qt=yn=gn=Xt=bn=dn=fn=vn=pn=mn=Cn=Mn=xn=Tn=wn=En=jt=Ft=null,this)"rebuild"!==o&&(this[o]=null);yt=!1},rebuild:function(){return j(c(t,K))}}}function An(t){t&&(qt=Wt=jt=Ft=Ht=_t=Qt=Xt=!1)}function Bn(){for(var t=Z?le-Zt:le;t<0;)t+=mt;return t%mt+1}function Nn(t){return t=t?Math.max(0,Math.min(Rt?mt-1:mt-Nt,t)):0,Z?t+Zt:t}function kn(t){for(null==t&&(t=le),Z&&(t-=Zt);t<0;)t+=mt;return Math.floor(t%mt)}function On(){var t,e=kn();return t=Re?e:Et||Tt?Math.ceil((e+1)*nn/mt-1):Math.floor(e/Nt),!Rt&&Z&&le===ve&&(t=nn-1),t}function Hn(){return n.innerWidth||e.documentElement.clientWidth||e.body.clientWidth}function Dn(t){return"top"===t?"afterbegin":"beforeend"}function Pn(t){if(null!=t){var n,i,a=e.createElement("div");return t.appendChild(a),i=(n=a.getBoundingClientRect()).right-n.left,a.remove(),i||Pn(t.parentNode)}}function Rn(){var t=Lt?2*Lt-St:0;return Pn(ft)-t}function In(e){if(t[e])return!0;if(J)for(var n in J)if(J[n][e])return!0;return!1}function qn(e,n){if(null==n&&(n=ht),"items"===e&&Et)return Math.floor((At+St)/(Et+St))||1;var i=t[e];if(J)for(var a in J)n>=parseInt(a)&&e in J[a]&&(i=J[a][e]);return"slideBy"===e&&"page"===i&&(i=qn("items")),Z||"slideBy"!==e&&"items"!==e||(i=Math.floor(i)),i}function zn(t,e,n,i,a){var o="";if(void 0!==t){var r=t;e&&(r-=e),o=ut?"margin: 0 "+r+"px 0 "+t+"px;":"margin: "+t+"px 0 "+r+"px 0;"}else if(e&&!n){var l="-"+e+"px";o="margin: 0 "+(ut?l+" 0 0":"0 "+l+" 0")+";"}return!Z&&a&&I&&i&&(o+=Vn(i)),o}function Wn(t,e,n){return t?(t+e)*$t+"px":p?p+"("+100*$t+"% / "+n+")":100*$t/n+"%"}function jn(t,e,n){var i;if(t)i=t+e+"px";else{Z||(n=Math.floor(n));var a=Z?$t:n;i=p?p+"(100% / "+a+")":100/a+"%"}return i="width:"+i,"inner"!==U?i+";":i+" !important;"}function Fn(t){var e="";!1!==t&&(e=(ut?"padding-":"margin-")+(ut?"right":"bottom")+": "+t+"px;");return e}function _n(t,e){var n=t.substring(0,t.length-e).toLowerCase();return n&&(n="-"+n+"-"),n}function Vn(t){return _n(I,18)+"transition-duration:"+t/1e3+"s;"}function Gn(t){return _n(_,17)+"animation-duration:"+t/1e3+"s;"}function Qn(){if(In("autoHeight")||Tt||!ut){var t=dt.querySelectorAll("img");b(t,(function(t){var e=t.src;Kt||(e&&e.indexOf("data:image")<0?(t.src="",q(t,_e),C(t,"loading"),t.src=e):si(t))})),l((function(){vi(B(t),(function(){se=!0}))})),In("autoHeight")&&(t=di(le,Math.min(le+Nt-1,$t-1))),Kt?Xn():l((function(){vi(B(t),Xn)}))}else Z&&Ai(),Kn(),Jn()}function Xn(){if(Tt&&mt>1){var t=Rt?le:mt-1;!function e(){var n=pt[t].getBoundingClientRect().left,i=pt[t-1].getBoundingClientRect().right;Math.abs(n-i)<=1?Yn():setTimeout((function(){e()}),16)}()}else Yn()}function Yn(){ut&&!Tt||(yi(),Tt?(ee=Li(),Te&&(Ee=$n()),ve=re(),An(Ce||Ee)):Zi()),Z&&Ai(),Kn(),Jn()}function Kn(){if(gi(),st.insertAdjacentHTML("afterbegin",'<div class="tns-liveregion tns-visually-hidden" aria-live="polite" aria-atomic="true">slide <span class="current">'+ri()+"</span>  of "+mt+"</div>"),ce=st.querySelector(".tns-liveregion .current"),Ie){var e=_t?"stop":"start";yn?S(yn,{"data-action":e}):t.autoplayButtonOutput&&(st.insertAdjacentHTML(Dn(t.autoplayPosition),'<button type="button" data-action="'+e+'">'+bn[0]+e+bn[1]+Gt[0]+"</button>"),yn=st.querySelector("[data-action]")),yn&&q(yn,{click:ji}),_t&&(zi(),Qt&&q(dt,Be),Xt&&q(dt,Ne))}if(Pe){if(tn)S(tn,{"aria-label":"Carousel Pagination"}),b($e=tn.children,(function(t,e){S(t,{"data-nav":e,tabindex:"-1","aria-label":sn+(e+1),"aria-controls":we})}));else{for(var n="",i=Re?"":'style="display:none"',a=0;a<mt;a++)n+='<button type="button" data-nav="'+a+'" tabindex="-1" aria-controls="'+we+'" '+i+' aria-label="'+sn+(a+1)+'"></button>';n='<div class="tns-nav" aria-label="Carousel Pagination">'+n+"</div>",st.insertAdjacentHTML(Dn(t.navPosition),n),tn=st.querySelector(".tns-nav"),$e=tn.children}if(ta(),I){var o=I.substring(0,I.length-18).toLowerCase(),r="transition: all "+Dt/1e3+"s";o&&(r="-"+o+"-"+r),y(Yt,"[aria-controls^="+we+"-item]",r,g(Yt))}S($e[rn],{"aria-label":sn+(rn+1)+cn}),A($e[rn],"tabindex"),C($e[rn],un),q(tn,Ae)}De&&(Xe||Ke&&Je||(st.insertAdjacentHTML(Dn(t.controlsPosition),'<div class="tns-controls" aria-label="Carousel Navigation" tabindex="0"><button type="button" data-controls="prev" tabindex="-1" aria-controls="'+we+'">'+zt[0]+'</button><button type="button" data-controls="next" tabindex="-1" aria-controls="'+we+'">'+zt[1]+"</button></div>"),Xe=st.querySelector(".tns-controls")),Ke&&Je||(Ke=Xe.children[0],Je=Xe.children[1]),t.controlsContainer&&S(Xe,{"aria-label":"Carousel Navigation",tabindex:"0"}),(t.controlsContainer||t.prevButton&&t.nextButton)&&S([Ke,Je],{"aria-controls":we,tabindex:"-1"}),(t.controlsContainer||t.prevButton&&t.nextButton)&&(S(Ke,{"data-controls":"prev"}),S(Je,{"data-controls":"next"})),Ge=xi(Ke),Qe=xi(Je),Mi(),Xe?q(Xe,Se):(q(Ke,Se),q(Je,Se))),ei()}function Jn(){if(Z&&G){var i={};i[G]=Hi,q(dt,i)}jt&&q(dt,Oe,t.preventScrollOnTouch),Ft&&q(dt,He),Ht&&q(e,ke),"inner"===U?be.on("outerResized",(function(){Zn(),be.emit("innerLoaded",ea())})):(J||Et||Tt||It||!ut)&&q(n,{resize:Un}),It&&("outer"===U?be.on("innerLoaded",fi):Ce||fi()),ui(),Ce?ai():Ee&&ii(),be.on("indexChanged",pi),"inner"===U&&be.emit("innerLoaded",ea()),"function"==typeof ge&&ge(ea()),yt=!0}function Un(t){l((function(){Zn(_i(t))}))}function Zn(n){if(yt){"outer"===U&&be.emit("outerResized",ea(n)),ht=Hn();var i,a=lt,o=!1;J&&(ti(),(i=a!==lt)&&be.emit("newBreakpointStart",ea(n)));var r,l,u=Nt,s=Ce,c=Ee,d=Ht,f=qt,v=Wt,p=jt,m=Ft,h=_t,x=Qt,w=Xt,T=le;if(i){var E=Et,S=It,A=zt,B=Bt,O=Gt;if(!L)var H=St,D=Lt}if(Ht=qn("arrowKeys"),qt=qn("controls"),Wt=qn("nav"),jt=qn("touch"),Bt=qn("center"),Ft=qn("mouseDrag"),_t=qn("autoplay"),Qt=qn("autoplayHoverPause"),Xt=qn("autoplayResetOnVisibility"),i&&(Ce=qn("disable"),Et=qn("fixedWidth"),Dt=qn("speed"),It=qn("autoHeight"),zt=qn("controlsText"),Gt=qn("autoplayText"),Vt=qn("autoplayTimeout"),L||(Lt=qn("edgePadding"),St=qn("gutter"))),An(Ce),At=Rn(),ut&&!Tt||Ce||(yi(),ut||(Zi(),o=!0)),(Et||Tt)&&(ee=Li(),ve=re()),(i||Et)&&(Nt=qn("items"),kt=qn("slideBy"),(l=Nt!==u)&&(Et||Tt||(ve=re()),Ln())),i&&Ce!==s&&(Ce?ai():function(){if(!Me)return;if(Yt.disabled=!1,dt.className+=xe,Ai(),Rt)for(var t=Zt;t--;)Z&&k(pt[t]),k(pt[$t-t-1]);if(!Z)for(var e=le,n=le+mt;e<n;e++){var i=pt[e],a=e<le+Nt?nt:ot;i.style.left=100*(e-le)/Nt+"%",C(i,a)}ni(),Me=!1}()),Te&&(i||Et||Tt)&&(Ee=$n())!==c&&(Ee?(Bi(Si(Nn(0))),ii()):(!function(){if(!Le)return;Lt&&L&&(ct.style.margin="");if(Zt)for(var t="tns-transparent",e=Zt;e--;)Z&&M(pt[e],t),M(pt[$t-e-1],t);ni(),Le=!1}(),o=!0)),An(Ce||Ee),_t||(Qt=Xt=!1),Ht!==d&&(Ht?q(e,ke):z(e,ke)),qt!==f&&(qt?Xe?k(Xe):(Ke&&k(Ke),Je&&k(Je)):Xe?N(Xe):(Ke&&N(Ke),Je&&N(Je))),Wt!==v&&(Wt?(k(tn),ta()):N(tn)),jt!==p&&(jt?q(dt,Oe,t.preventScrollOnTouch):z(dt,Oe)),Ft!==m&&(Ft?q(dt,He):z(dt,He)),_t!==h&&(_t?(yn&&k(yn),fn||pn||zi()):(yn&&N(yn),fn&&Wi())),Qt!==x&&(Qt?q(dt,Be):z(dt,Be)),Xt!==w&&(Xt?q(e,Ne):z(e,Ne)),i){if(Et===E&&Bt===B||(o=!0),It!==S&&(It||(ct.style.height="")),qt&&zt!==A&&(Ke.innerHTML=zt[0],Je.innerHTML=zt[1]),yn&&Gt!==O){var P=_t?1:0,R=yn.innerHTML,I=R.length-O[P].length;R.substring(I)===O[P]&&(yn.innerHTML=R.substring(0,I)+Gt[P])}}else Bt&&(Et||Tt)&&(o=!0);if((l||Et&&!Tt)&&(nn=$i(),ta()),(r=le!==T)?(be.emit("indexChanged",ea()),o=!0):l?r||pi():(Et||Tt)&&(ui(),gi(),oi()),l&&!Z&&function(){for(var t=le+Math.min(mt,Nt),e=$t;e--;){var n=pt[e];e>=le&&e<t?(C(n,"tns-moving"),n.style.left=100*(e-le)/Nt+"%",C(n,nt),M(n,ot)):n.style.left&&(n.style.left="",C(n,ot),M(n,nt)),M(n,it)}setTimeout((function(){b(pt,(function(t){M(t,"tns-moving")}))}),300)}(),!Ce&&!Ee){if(i&&!L&&(Lt===D&&St===H||(ct.style.cssText=zn(Lt,St,Et,Dt,It)),ut)){Z&&(dt.style.width=Wn(Et,St,Nt));var W=jn(Et,St,Nt)+Fn(St);!function(t,e){"deleteRule"in t?t.deleteRule(e):t.removeRule(e)}(Yt,g(Yt)-1),y(Yt,"#"+we+" > .tns-item",W,g(Yt))}It&&fi(),o&&(Ai(),ue=le)}i&&be.emit("newBreakpointEnd",ea(n))}}function $n(){if(!Et&&!Tt)return mt<=(Bt?Nt-(Nt-1)/2:Nt);var t=Et?(Et+St)*mt:gt[mt],e=Lt?At+2*Lt:At+St;return Bt&&(e-=Et?(At-Et)/2:(At-(gt[le+1]-gt[le]-St))/2),t<=e}function ti(){for(var t in lt=0,J)t=parseInt(t),ht>=t&&(lt=t)}function ei(){!_t&&yn&&N(yn),!Wt&&tn&&N(tn),qt||(Xe?N(Xe):(Ke&&N(Ke),Je&&N(Je)))}function ni(){_t&&yn&&k(yn),Wt&&tn&&k(tn),qt&&(Xe?k(Xe):(Ke&&k(Ke),Je&&k(Je)))}function ii(){if(!Le){if(Lt&&(ct.style.margin="0px"),Zt)for(var t="tns-transparent",e=Zt;e--;)Z&&C(pt[e],t),C(pt[$t-e-1],t);ei(),Le=!0}}function ai(){if(!Me){if(Yt.disabled=!0,dt.className=dt.className.replace(xe.substring(1),""),A(dt,["style"]),Rt)for(var t=Zt;t--;)Z&&N(pt[t]),N(pt[$t-t-1]);if(ut&&Z||A(ct,["style"]),!Z)for(var e=le,n=le+mt;e<n;e++){var i=pt[e];A(i,["style"]),M(i,nt),M(i,ot)}ei(),Me=!0}}function oi(){var t=ri();ce.innerHTML!==t&&(ce.innerHTML=t)}function ri(){var t=li(),e=t[0]+1,n=t[1]+1;return e===n?e+"":e+" to "+n}function li(t){null==t&&(t=Si());var e,n,i,a=le;if(Bt||Lt?(Tt||Et)&&(n=-(parseFloat(t)+Lt),i=n+At+2*Lt):Tt&&(n=gt[le],i=n+At),Tt)gt.forEach((function(t,o){o<$t&&((Bt||Lt)&&t<=n+.5&&(a=o),i-t>=.5&&(e=o))}));else{if(Et){var o=Et+St;Bt||Lt?(a=Math.floor(n/o),e=Math.ceil(i/o-1)):e=a+Math.ceil(At/o)-1}else if(Bt||Lt){var r=Nt-1;if(Bt?(a-=r/2,e=le+r/2):e=le+r,Lt){var l=Lt*Nt/At;a-=l,e+=l}a=Math.floor(a),e=Math.ceil(e)}else e=a+Nt-1;a=Math.max(a,0),e=Math.min(e,$t-1)}return[a,e]}function ui(){if(Kt&&!Ce){var t=li();t.push(Jt),di.apply(null,t).forEach((function(t){if(!w(t,Fe)){var e={};e[G]=function(t){t.stopPropagation()},q(t,e),q(t,_e),t.src=E(t,"data-src");var n=E(t,"data-srcset");n&&(t.srcset=n),C(t,"loading")}}))}}function si(t){C(t,"loaded"),ci(t)}function ci(t){C(t,Fe),M(t,"loading"),z(t,_e)}function di(t,e,n){var i=[];for(n||(n="img");t<=e;)b(pt[t].querySelectorAll(n),(function(t){i.push(t)})),t++;return i}function fi(){var t=di.apply(null,li());l((function(){vi(t,hi)}))}function vi(t,e){return se?e():(t.forEach((function(e,n){!Kt&&e.complete&&ci(e),w(e,Fe)&&t.splice(n,1)})),t.length?void l((function(){vi(t,e)})):e())}function pi(){ui(),gi(),oi(),Mi(),function(){if(Wt&&(rn=on>=0?on:On(),on=-1,rn!==ln)){var t=$e[ln],e=$e[rn];S(t,{tabindex:"-1","aria-label":sn+(ln+1)}),M(t,un),S(e,{"aria-label":sn+(rn+1)+cn}),A(e,"tabindex"),C(e,un),ln=rn}}()}function mi(t,e){for(var n=[],i=t,a=Math.min(t+e,$t);i<a;i++)n.push(pt[i].offsetHeight);return Math.max.apply(null,n)}function hi(){var t=It?mi(le,Nt):mi(Zt,mt),e=rt||ct;e.style.height!==t&&(e.style.height=t+"px")}function yi(){gt=[0];var t=ut?"left":"top",e=ut?"right":"bottom",n=pt[0].getBoundingClientRect()[t];b(pt,(function(i,a){a&&gt.push(i.getBoundingClientRect()[t]-n),a===$t-1&&gt.push(i.getBoundingClientRect()[e]-n)}))}function gi(){var t=li(),e=t[0],n=t[1];b(pt,(function(t,i){i>=e&&i<=n?T(t,"aria-hidden")&&(A(t,["aria-hidden","tabindex"]),C(t,We)):T(t,"aria-hidden")||(S(t,{"aria-hidden":"true",tabindex:"-1"}),M(t,We))}))}function bi(t){return t.nodeName.toLowerCase()}function xi(t){return"button"===bi(t)}function wi(t){return"true"===t.getAttribute("aria-disabled")}function Ci(t,e,n){t?e.disabled=n:e.setAttribute("aria-disabled",n.toString())}function Mi(){if(qt&&!Pt&&!Rt){var t=Ge?Ke.disabled:wi(Ke),e=Qe?Je.disabled:wi(Je),n=le<=fe,i=!Pt&&le>=ve;n&&!t&&Ci(Ge,Ke,!0),!n&&t&&Ci(Ge,Ke,!1),i&&!e&&Ci(Qe,Je,!0),!i&&e&&Ci(Qe,Je,!1)}}function Ti(t,e){I&&(t.style[I]=e)}function Ei(t){return null==t&&(t=le),Tt?(At-(Lt?St:0)-(gt[t+1]-gt[t]-St))/2:Et?(At-Et)/2:(Nt-1)/2}function Li(){var t=At+(Lt?St:0)-(Et?(Et+St)*$t:gt[$t]);return Bt&&!Rt&&(t=Et?-(Et+St)*($t-1)-Ei():Ei($t-1)-gt[$t-1]),t>0&&(t=0),t}function Si(t){var e;if(null==t&&(t=le),ut&&!Tt)if(Et)e=-(Et+St)*t,Bt&&(e+=Ei());else{var n=P?$t:Nt;Bt&&(t-=Ei()),e=100*-t/n}else e=-gt[t],Bt&&Tt&&(e+=Ei());return te&&(e=Math.max(e,ee)),e+=!ut||Tt||Et?"px":"%"}function Ai(t){Ti(dt,"0s"),Bi(t)}function Bi(t){null==t&&(t=Si()),dt.style[ie]=ae+t+oe}function Ni(t,e,n,i){var a=t+Nt;Rt||(a=Math.min(a,$t));for(var o=t;o<a;o++){var r=pt[o];i||(r.style.left=100*(o-le)/Nt+"%"),at&&F&&(r.style[F]=r.style[V]=at*(o-t)/1e3+"s"),M(r,e),C(r,n),i&&Ut.push(r)}}function ki(t,e){ne&&Ln(),(le!==ue||e)&&(be.emit("indexChanged",ea()),be.emit("transitionStart",ea()),It&&fi(),fn&&t&&["click","keydown"].indexOf(t.type)>=0&&Wi(),ye=!0,Sn())}function Oi(t){return t.toLowerCase().replace(/-/g,"")}function Hi(t){if(Z||ye){if(be.emit("transitionEnd",ea(t)),!Z&&Ut.length>0)for(var e=0;e<Ut.length;e++){var n=Ut[e];n.style.left="",V&&F&&(n.style[V]="",n.style[F]=""),M(n,it),C(n,ot)}if(!t||!Z&&t.target.parentNode===dt||t.target===dt&&Oi(t.propertyName)===Oi(ie)){if(!ne){var i=le;Ln(),le!==i&&(be.emit("indexChanged",ea()),Ai())}"inner"===U&&be.emit("innerLoaded",ea()),ye=!1,ue=le}}}function Di(t,e){if(!Ee)if("prev"===t)Pi(e,-1);else if("next"===t)Pi(e,1);else{if(ye){if(pe)return;Hi()}var n=kn(),i=0;if("first"===t?i=-n:"last"===t?i=Z?mt-Nt-n:mt-1-n:("number"!=typeof t&&(t=parseInt(t)),isNaN(t)||(e||(t=Math.max(0,Math.min(mt-1,t))),i=t-n)),!Z&&i&&Math.abs(i)<Nt){var a=i>0?1:-1;i+=le+i-mt>=fe?mt*a:2*mt*a*-1}le+=i,Z&&Rt&&(le<fe&&(le+=mt),le>ve&&(le-=mt)),kn(le)!==kn(ue)&&ki(e)}}function Pi(t,e){if(ye){if(pe)return;Hi()}var n;if(!e){for(var i=Vi(t=_i(t));i!==Xe&&[Ke,Je].indexOf(i)<0;)i=i.parentNode;var a=[Ke,Je].indexOf(i);a>=0&&(n=!0,e=0===a?-1:1)}if(Pt){if(le===fe&&-1===e)return void Di("last",t);if(le===ve&&1===e)return void Di("first",t)}e&&(le+=kt*e,Tt&&(le=Math.floor(le)),ki(n||t&&"keydown"===t.type?t:null))}function Ri(){dn=setInterval((function(){Pi(null,hn)}),Vt),fn=!0}function Ii(){clearInterval(dn),fn=!1}function qi(t,e){S(yn,{"data-action":t}),yn.innerHTML=bn[0]+t+bn[1]+e}function zi(){Ri(),yn&&qi("stop",Gt[1])}function Wi(){Ii(),yn&&qi("start",Gt[0])}function ji(){fn?(Wi(),pn=!0):(zi(),pn=!1)}function Fi(t){t.focus()}function _i(t){return Gi(t=t||n.event)?t.changedTouches[0]:t}function Vi(t){return t.target||n.event.srcElement}function Gi(t){return t.type.indexOf("touch")>=0}function Qi(t){t.preventDefault?t.preventDefault():t.returnValue=!1}function Xi(){return o=Mn.y-Cn.y,r=Mn.x-Cn.x,e=Math.atan2(o,r)*(180/Math.PI),n=me,i=!1,(a=Math.abs(90-Math.abs(e)))>=90-n?i="horizontal":a<=n&&(i="vertical"),i===t.axis;var e,n,i,a,o,r}function Yi(t){if(ye){if(pe)return;Hi()}_t&&fn&&Ii(),Tn=!0,wn&&(s(wn),wn=null);var e=_i(t);be.emit(Gi(t)?"touchStart":"dragStart",ea(t)),!Gi(t)&&["img","a"].indexOf(bi(Vi(t)))>=0&&Qi(t),Mn.x=Cn.x=e.clientX,Mn.y=Cn.y=e.clientY,Z&&(xn=parseFloat(dt.style[ie].replace(ae,"")),Ti(dt,"0s"))}function Ki(t){if(Tn){var e=_i(t);Mn.x=e.clientX,Mn.y=e.clientY,Z?wn||(wn=l((function(){Ji(t)}))):("?"===he&&(he=Xi()),he&&(Ve=!0)),("boolean"!=typeof t.cancelable||t.cancelable)&&Ve&&t.preventDefault()}}function Ji(t){if(he){if(s(wn),Tn&&(wn=l((function(){Ji(t)}))),"?"===he&&(he=Xi()),he){!Ve&&Gi(t)&&(Ve=!0);try{t.type&&be.emit(Gi(t)?"touchMove":"dragMove",ea(t))}catch(t){}var e=xn,n=En(Mn,Cn);if(!ut||Et||Tt)e+=n,e+="px";else e+=P?n*Nt*100/((At+St)*$t):100*n/(At+St),e+="%";dt.style[ie]=ae+e+oe}}else Tn=!1}function Ui(e){if(Tn){wn&&(s(wn),wn=null),Z&&Ti(dt,""),Tn=!1;var n=_i(e);Mn.x=n.clientX,Mn.y=n.clientY;var i=En(Mn,Cn);if(Math.abs(i)){if(!Gi(e)){var a=Vi(e);q(a,{click:function t(e){Qi(e),z(a,{click:t})}})}Z?wn=l((function(){if(ut&&!Tt){var t=-i*Nt/(At+St);t=i>0?Math.floor(t):Math.ceil(t),le+=t}else{var n=-(xn+i);if(n<=0)le=fe;else if(n>=gt[$t-1])le=ve;else for(var a=0;a<$t&&n>=gt[a];)le=a,n>gt[a]&&i<0&&(le+=1),a++}ki(e,i),be.emit(Gi(e)?"touchEnd":"dragEnd",ea(e))})):he&&Pi(e,i>0?-1:1)}}"auto"===t.preventScrollOnTouch&&(Ve=!1),me&&(he="?"),_t&&!fn&&Ri()}function Zi(){(rt||ct).style.height=gt[le+Nt]-gt[le]+"px"}function $i(){var t=Et?(Et+St)*mt/At:mt/Nt;return Math.min(Math.ceil(t),mt)}function ta(){if(Wt&&!Re&&nn!==an){var t=an,e=nn,n=k;for(an>nn&&(t=nn,e=an,n=N);t<e;)n($e[t]),t++;an=nn}}function ea(t){return{container:dt,slideItems:pt,navContainer:tn,navItems:$e,controlsContainer:Xe,hasControls:De,prevButton:Ke,nextButton:Je,items:Nt,slideBy:kt,cloneCount:Zt,slideCount:mt,slideCountNew:$t,index:le,indexCached:ue,displayIndex:Bn(),navCurrentIndex:rn,navCurrentIndexCached:ln,pages:nn,pagesCached:an,sheet:Yt,isOn:yt,event:t||{}}}X&&console.warn("No slides found in",t.container)};o.tns=j;(0,o.tns)({container:".reviews-slider",controls:!1,items:1,slideBy:"page",autoplay:!1,navPosition:"bottom"});
//# sourceMappingURL=index.c5ef3d5e.js.map
