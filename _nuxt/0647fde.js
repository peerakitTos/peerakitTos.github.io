(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{248:function(t,e,n){"use strict";n.r(e);n(5),n(7),n(20),n(185);var r=n(16),c=n(27),o=n(49),l=n(91),d=n(36),v=n(35),f=n(239);function _(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(d.a)(t);if(e){var c=Object(d.a)(this).constructor;n=Reflect.construct(r,arguments,c)}else n=r.apply(this,arguments);return Object(l.a)(this,n)}}var m=function(t,e,n,desc){var r,c=arguments.length,o=c<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(v.a)(Reflect))&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(r=t[i])&&(o=(c<3?r(o):c>3?r(e,n,o):r(e,n))||o);return c>3&&o&&Object.defineProperty(e,n,o),o},h=function(t){Object(o.a)(n,t);var e=_(n);function n(){var t;return Object(r.a)(this,n),(t=e.apply(this,arguments)).products=[{id:"1",name:"แปรงสีฟัน",price:30,remain:40},{id:"2",name:"ยาสีฟัน",price:20,remain:20},{id:"3",name:"สบู่",price:10,remain:40}],t.selectedProducts=t.products.map((function(t){return{id:t.id,name:t.name,price:t.price,item:0}})),t.activeOrder=!1,t}return Object(c.a)(n,[{key:"orderId",get:function(){return"".concat(Math.floor(100*Math.random())+10).concat(Math.floor(32*Math.random())+30).concat(Math.floor(538*Math.random())+835)}}]),n}(f.Vue),y=h=m([f.Component],h),O=n(53),component=Object(O.a)(y,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("h1",{staticClass:"title"},[t._v("\n      รายการสินค้า\n    ")]),t._v(" "),n("b-row",{staticClass:"justify-content-center"},[t._l(t.products,(function(e,r){return[n("b-col",{key:r,staticClass:"mb-2",attrs:{cols:"4"}},[n("div",[t._v("ชื่อสินค้า: "+t._s(e.name))]),t._v(" "),n("div",[t._v("ราคา: "+t._s(e.price)+" บาท")]),t._v(" "),n("div",{staticClass:"d-flex"},[n("b-button",{on:{click:function(e){t.selectedProducts[r].item--}}},[t._v("-")]),t._v(" "),n("b-input",{staticClass:"mx-2",attrs:{value:t.selectedProducts[r].item}}),t._v(" "),n("b-button",{on:{click:function(e){t.selectedProducts[r].item++}}},[t._v("+")])],1)])]})),t._v(" "),n("b-button",{attrs:{disabled:t.activeOrder,variant:"primary"},on:{click:function(e){t.activeOrder=!0}}},[t._v("สั่งสินค้า")])],2),t._v(" "),t.activeOrder?n("b-container",[n("h4",{staticClass:"text-primary"},[t._v("ส่งซื้อเรียบร้อย")]),t._v(" "),n("div",[t._v("Order Id: "+t._s(t.orderId))]),t._v(" "),n("div",[t._v("รายการสินค้า")]),t._v(" "),n("b-row",{staticClass:"justify-content-center"},[t._l(t.selectedProducts,(function(e,r){return n("b-col",{key:r,staticClass:"mb-2",attrs:{cols:"4"}},[n("div",[t._v("ชื่อสินค้า: "+t._s(e.name))]),t._v(" "),n("div",[t._v("ราคา: "+t._s(e.price)+" บาท")]),t._v(" "),n("div",[t._v("จำนวนที่ซื้อ "+t._s(e.item))])])})),t._v(" "),n("b-button",{staticClass:"mt-2",attrs:{href:"/payment",variant:"outline-success"}},[t._v("ชำระเงิน")])],2)],1):t._e()],1)}),[],!1,null,null,null);e.default=component.exports}}]);