webpackJsonp([1],{"+PnI":function(t,o,e){t.exports=e.p+"img/thinx_productpage_-08.a89ea503.jpg"},0:function(t,o,e){t.exports=e("NHnr")},"0MED":function(t,o,e){t.exports=e.p+"img/thinx_productpage_-04.acf1d092.jpg"},"14ka":function(t,o,e){t.exports=e.p+"img/thinx_productpage_-03.4eb9667b.jpg"},"8UQi":function(t,o,e){t.exports=e.p+"img/highwaist_black_front_3_1024x1024.3ed3cb43.jpg"},"8jUE":function(t,o){},"BP+F":function(t,o,e){t.exports=e.p+"img/thinx_productpage_-07.9cf4e15b.jpg"},CPbc:function(t,o,e){t.exports=e.p+"img/highwaist_black_front_1_1024x1024.19dcf24c.jpg"},F90f:function(t,o,e){t.exports=e.p+"img/thinx_productpage_-05.4f91c62a.jpg"},FU7E:function(t,o,e){t.exports=e.p+"img/highwaist_black_front_2_1024x1024.d97693b0.jpg"},IQiw:function(t,o){},Jz6O:function(t,o){},NHnr:function(t,o,e){"use strict";Object.defineProperty(o,"__esModule",{value:!0});var n=e("Z60a"),i=e.n(n),a=e("C9uT"),s=e.n(a),r=e("/5sW"),c={props:["photo","path","marginBottom"],computed:{webPackPath:function(){return e("vvha")("./"+this.path+this.photo+".jpg")},margin:function(){return"margin-bottom:"+this.marginBottom}}},l=function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{staticClass:"photo"},[e("img",{style:t.margin,attrs:{src:t.webPackPath}})])},p=[],h=e("XyMi");function u(t){e("Jz6O")}var d=!1,m=u,_="data-v-4fba0be3",f=null,g=Object(h["a"])(c,l,p,d,m,_,f),v=g.exports,b={props:["path","photo","index","handleZoomClick","marginBottom","zoomLeft"],components:{Photo:v},methods:{zoom:function(t){var o={event:t,index:this.index};this.handleZoomClick(o)}},computed:{left:function(){return"left: "+String(this.zoomLeft)+"px;"}}},k=function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{staticClass:"topPhoto",style:t.left,on:{click:t.zoom}},[e("photo",{attrs:{path:t.path,photo:t.photo,marginBottom:t.marginBottom}})],1)},w=[];function C(t){e("rYl1")}var x=!1,y=C,j=null,S=null,E=Object(h["a"])(b,k,w,x,y,j,S),B=E.exports,P=e("U0v6"),W=e.n(P),z=e("JU8O"),L=e.n(z),$={components:{FontAwesomeIcon:W.a},props:["photos","handleCarouselClick"],computed:{circle:function(){return L.a}},methods:{onClick:function(t){var o=t.target.innerText;console.log(o);var e={payload:o};this.handleCarouselClick(e)}}},O=function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{staticClass:"carousel-nav"},t._l(t.photos,function(o,n,i){return e("span",{key:n,staticClass:"dot",on:{click:t.onClick}},[e("span",{staticClass:"hide"},[t._v(t._s(n))]),e("font-awesome-icon",{attrs:{icon:t.circle}})],1)}))},q=[];function Z(t){e("o5JS")}var I=!1,T=Z,X=null,F=null,H=Object(h["a"])($,O,q,I,T,X,F),U=H.exports,A={components:{topPhoto:B,CarouselNav:U},data:function(){return{photos:["highwaist_black_front_2_1024x1024","highwaist_black_back_1024x1024","highwaist_black_front_3_1024x1024","highwaist_black_front_4_1024x1024","highwaist_black_front_1_1024x1024","highwaist_black_side_1024x1024"],path:"top_section_images/",marginBottom:"3rem",index:0,isZoom:!1,zoomLeft:0,windowWidth:0,imageWidth:0,baseStyle:{left:"0vw",transition:"none"},overrideStyle:{left:"0vw",transition:"left .3s"}}},created:function(){var t=this;window.addEventListener("resize",function(){t.centerImage()})},mounted:function(){var t=this;setTimeout(function(){t.centerImage()},10)},methods:{centerImage:function(){this.imageWidth=document.querySelector(".topPhoto>.photo>img").offsetWidth,this.windowWidth=window.innerWidth,console.log("centering image","image width: ",this.imageWidth,"window width: ",this.windowWidth);var t=String((this.windowWidth-this.imageWidth)/2)+"px";this.windowWidth<=1e3&&(this.overrideStyle.left=t,this.overrideStyle.transition="none")},handleCarouselClick:function(t){this.imageWidth=document.querySelector(".topPhoto>.photo>img").offsetWidth,this.windowWidth=window.innerWidth;var o=t.payload,e=String(-this.imageWidth*o+(this.windowWidth-this.imageWidth)/2)+"px";this.overrideStyle.left=e,this.overrideStyle.transition="left .3s"},handleZoomClick:function(t){this.isZoom=!this.isZoom,this.overrideStyle={left:"0vw",transition:"left 0s"};var o=document.querySelectorAll(":not(#app):not(.top):not(.carousel-container):not(.carousel):not(.topPhoto):not(img):not(.car-container):not(.photo):not(body):not(html):not(head):not(.photo-container)");o.forEach(function(t){t.classList.toggle("hidden")});var e=document.querySelectorAll(".top, .carousel-container, .topPhoto, .Photo, body, .photo-container");e.forEach(function(t){t.classList.toggle("zoom")});var n=document.querySelectorAll(".topPhoto")[t.index],i=n.firstElementChild.scrollWidth,a=window.innerWidth;console.log("photo: ",i,"window: ",a),this.zoomLeft=parseInt((a-i)/2),n.classList.contains("zoom")&&n.scrollIntoView(),!1===this.isZoom&&(window.scrollTo(0,0),this.centerImage())}}},M=function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{staticClass:"car-container"},[e("div",{staticClass:"carousel",class:{zoom:t.isZoom},style:[t.baseStyle,t.overrideStyle]},[e("div",{staticClass:"photo-container"},t._l(t.photos,function(o,n){return e("top-photo",{key:n,attrs:{photo:o,index:n,path:t.path,marginBottom:t.marginBottom,handleZoomClick:t.handleZoomClick,zoomLeft:t.zoomLeft,isZoom:t.isZoom}})}))]),e("carousel-nav",{attrs:{photos:t.photos,handleCarouselClick:t.handleCarouselClick}})],1)},J=[];function N(t){e("wve0")}var Q=!1,D=N,V=null,Y=null,K=Object(h["a"])(A,M,J,Q,D,V,Y),G=K.exports,R=e("mNVX"),tt=e.n(R),ot=e("nCDS"),et=e.n(ot),nt=e("iK9v"),it=e.n(nt),at={components:{FontAwesomeIcon:W.a},data:function(){return{hideBlack:!1,hideBeige:!0,quantity:1}},methods:{handleClick:function(t){switch(console.log("click",t.target),t.target.classList[0]){case"black":this.hideBlack=!1,this.hideBeige=!0;break;case"beige":this.hideBlack=!0,this.hideBeige=!1;break;case"minus-btn":if(this.quantity<=1)break;this.quantity--;break;case"plus-btn":this.quantity++;break}}},computed:{icon:function(){return tt.a},plus:function(){return et.a},minus:function(){return it.a}}},st=function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("form",{staticClass:"order-form",on:{submit:function(o){o.preventDefault(),t.onSubmit(o)}}},[e("div",{staticClass:"color-options"},[e("label",{staticClass:"color"},[t._v("color\n    ")]),e("label",{staticClass:"black",attrs:{for:"color"},on:{click:t.handleClick}},[t._v("\n      black\n      "),e("font-awesome-icon",{staticClass:"check white",class:{hide:t.hideBlack},attrs:{icon:t.icon}}),e("input",{attrs:{type:"radio",name:"color",value:"black"}})],1),e("label",{staticClass:"beige",attrs:{for:"color"},on:{click:t.handleClick}},[t._v("\n      beige\n      "),e("font-awesome-icon",{staticClass:"check black",class:{hide:t.hideBeige},attrs:{icon:t.icon}}),e("input",{attrs:{type:"radio",name:"color",value:"beige"}})],1)]),e("label",{staticClass:"quantity",attrs:{for:"quantity"}},[e("span",{staticClass:"minus-btn minus",on:{click:t.handleClick}},[e("font-awesome-icon",{staticClass:"minus-btn",attrs:{icon:t.minus},on:{click:t.handleClick}})],1),e("span",{staticClass:"minus-btn blanket",on:{click:t.handleClick}}),t._v("\n    quantity\n    ("),e("input",{attrs:{type:"number",name:"quantity"},domProps:{value:t.quantity}}),t._v(")\n    "),e("span",{staticClass:"plus-btn plus",on:{click:t.handleClick}},[e("font-awesome-icon",{staticClass:"plus-btn",attrs:{icon:t.plus},on:{click:t.handleClick}})],1),e("span",{staticClass:"plus-btn blanket",on:{click:t.handleClick}})]),e("div",{staticClass:"size-container"},[e("span",{staticClass:"select-arrow"},[e("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"8.573",height:"5.287",viewBox:"0 0 8.573 5.287"}},[e("path",{attrs:{fill:"none",stroke:"#000","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round","stroke-miterlimit":"10",d:"M7.573 1L4.286 4.287 1 1"}})])]),t._m(0),t._m(1)]),t._m(2)])},rt=[function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("select",{staticClass:"size",attrs:{name:"size"}},[e("option",{attrs:{value:"",disabled:"",selected:""}},[t._v("size")]),e("option",{attrs:{value:"XS"}},[t._v("XS")]),e("option",{attrs:{value:"S"}},[t._v("S")]),e("option",{attrs:{value:"M"}},[t._v("M")]),e("option",{attrs:{value:"L"}},[t._v("L")]),e("option",{attrs:{value:"XL"}},[t._v("XL")]),e("option",{attrs:{value:"XXL"}},[t._v("XXL")])])},function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{staticClass:"size-help-text"},[e("a",{attrs:{href:"#"}},[t._v("what's my size?")])])},function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{staticClass:"add-btn-container"},[e("button",{staticClass:"add-btn"},[t._v("add to cart")]),e("div",{staticClass:"promo"},[e("a",{attrs:{href:"#"}},[t._v("build a cycle set and save 20%")])])])}];function ct(t){e("e/Hk")}var lt=!1,pt=ct,ht=null,ut=null,dt=Object(h["a"])(at,st,rt,lt,pt,ht,ut),mt=dt.exports,_t={components:{Carousel:G,OrderForm:mt}},ft=function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{staticClass:"top"},[e("div",{staticClass:"carousel-container"},[e("carousel")],1),t._m(0),e("div",{staticClass:"order-form-container"},[t._m(1),e("order-form")],1)])},gt=[function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{staticClass:"top-text"},[e("strong",[t._v("Hi-Waist")]),e("p",[t._v("Heavy days. Holds up to 2 tampons worth.")]),e("p",[t._v("The phrase \"treat yo'self\" reaches new belly-button brushing heights with the Hi-Waist, and it's here just in time for cuffing season.")])])},function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{staticClass:"price"},[e("strong",[t._v("$35.00")])])}];function vt(t){e("IQiw")}var bt=!1,kt=vt,wt=null,Ct=null,xt=Object(h["a"])(_t,ft,gt,bt,kt,wt,Ct),yt=xt.exports,jt={components:{Photo:v},props:["product","index"],data:function(){return{path:"bottom_section_images/"}},computed:{portrait:function(){return"portrait"===this.product.orientation},landscape:function(){return"landscape"===this.product.orientation},gridArea:function(){var t="";switch(this.index){case 0:t="1 / 2 / 1 / 2";break;case 1:t="1 / 3 / 1 / 3";break;case 2:t="2 / 2 / 2 / 4";break;case 3:t="3 / 2 / 3 / 2";break;case 4:t="3 / 3 / 3/ 3";break}return"grid-area: "+t}}},St=function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{staticClass:"product",style:t.gridArea},[e("div",{staticClass:"product-container",class:{portrait:t.portrait,landscape:t.landscape}},[e("photo",{staticClass:"image",attrs:{photo:t.product.photo,path:t.path}}),e("div",{staticClass:"product-description"},[e("a",{staticClass:"product-link",attrs:{href:"#"}},[t._v("Shop "+t._s(t.product.name))]),e("div",{staticClass:"product-type"},[t._v(t._s(t.product.type)+" days")])])],1)])},Et=[];function Bt(t){e("Sarw")}var Pt=!1,Wt=Bt,zt=null,Lt=null,$t=Object(h["a"])(jt,St,Et,Pt,Wt,zt,Lt),Ot=$t.exports,qt={components:{Product:Ot},data:function(){return{products:[{name:"Hiphugger",photo:"thinx_productpage_-04",type:"heavy",orientation:"landscape"},{name:"Cheeky",photo:"thinx_productpage_-03",type:"light",orientation:"portrait"},{name:"Thong",photo:"thinx_productpage_-05",type:"lightest",orientation:"landscape"},{name:"Sport",photo:"thinx_productpage_-07",type:"medium",orientation:"landscape"},{name:"Boyshort",photo:"thinx_productpage_-08",type:"light",orientation:"portrait"}]}}},Zt=function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{staticClass:"bottom"},[e("div",{staticClass:"grid"},t._l(t.products,function(t,o){return e("product",{key:o,attrs:{product:t,index:o}})}))])},It=[];function Tt(t){e("oSST")}var Xt=!1,Ft=Tt,Ht=null,Ut=null,At=Object(h["a"])(qt,Zt,It,Xt,Ft,Ht,Ut),Mt=At.exports,Jt={name:"app",components:{Top:yt,Bottom:Mt}},Nt=function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{attrs:{id:"app"}},[e("top"),e("bottom")],1)},Qt=[];function Dt(t){e("8jUE")}var Vt=!1,Yt=Dt,Kt=null,Gt=null,Rt=Object(h["a"])(Jt,Nt,Qt,Vt,Yt,Kt,Gt),to=Rt.exports;r["a"].config.productionTip=!1,window.Event=new(function(){function t(){i()(this,t),this.vue=new r["a"]}return s()(t,[{key:"fire",value:function(t){var o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;this.vue.$emit(t,o)}},{key:"listen",value:function(t,o){this.vue.$on(t,o)}}]),t}());r["a"].component("app",to);new r["a"]({render:function(t){return t(to)}}).$mount("#app")},Sarw:function(t,o){},TxNS:function(t,o,e){t.exports=e.p+"img/highwaist_black_front_4_1024x1024.fdc7cabd.jpg"},V0B7:function(t,o,e){t.exports=e.p+"img/highwaist_black_side_1024x1024.ac5218d7.jpg"},XQm3:function(t,o,e){t.exports=e.p+"img/highwaist_black_back_1024x1024.a3205d7b.jpg"},"e/Hk":function(t,o){},o5JS:function(t,o){},oSST:function(t,o){},rYl1:function(t,o){},vvha:function(t,o,e){var n={"./bottom_section_images/thinx_productpage_-03.jpg":"14ka","./bottom_section_images/thinx_productpage_-04.jpg":"0MED","./bottom_section_images/thinx_productpage_-05.jpg":"F90f","./bottom_section_images/thinx_productpage_-07.jpg":"BP+F","./bottom_section_images/thinx_productpage_-08.jpg":"+PnI","./top_section_images/highwaist_black_back_1024x1024.jpg":"XQm3","./top_section_images/highwaist_black_front_1_1024x1024.jpg":"CPbc","./top_section_images/highwaist_black_front_2_1024x1024.jpg":"FU7E","./top_section_images/highwaist_black_front_3_1024x1024.jpg":"8UQi","./top_section_images/highwaist_black_front_4_1024x1024.jpg":"TxNS","./top_section_images/highwaist_black_side_1024x1024.jpg":"V0B7"};function i(t){return e(a(t))}function a(t){var o=n[t];if(!(o+1))throw new Error("Cannot find module '"+t+"'.");return o}i.keys=function(){return Object.keys(n)},i.resolve=a,t.exports=i,i.id="vvha"},wve0:function(t,o){}},[0]);
//# sourceMappingURL=app.2e42919c.js.map