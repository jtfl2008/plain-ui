(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0c5180b4"],{"66c4":function(n,t,e){},a32f:function(n,t,e){"use strict";e.r(t);var a=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{staticClass:"demo-test2"},[e("im-demo-row",{attrs:{title:"测试拖拽排序"}}),e("div",[e("im-toggle",{model:{value:n.draggable,callback:function(t){n.draggable=t},expression:"draggable"}}),e("span",[n._v(n._s(n.cities))])],1),e("im-list",{attrs:{dragList:n.cities,draggable:n.draggable},on:{switch:n.pl_swicth}},n._l(n.cities,function(t,a){return e("im-item",{key:t.name,staticClass:"test-item-aaa",on:{click:function(t){return n.pl_click(a)}}},[e("span",[n._v(n._s(t.name))]),e("span",[n._v(n._s(t.num))])])}),1)],1)},i=[],c={name:"demo-test2",data:function(){return{cities:[{name:"上海市",num:5},{name:"北京市",num:8},{name:"广州市",num:11},{name:"深圳市",num:17},{name:"长沙市",num:2},{name:"南京市",num:0}],draggable:!0}},mounted:function(){},methods:{pl_click:function(n){console.log(n)},pl_swicth:function(){console.log(arguments[0])}}},s=c,l=(e("cf41"),e("2877")),o=Object(l["a"])(s,a,i,!1,null,null,null);t["default"]=o.exports},cf41:function(n,t,e){"use strict";var a=e("66c4"),i=e.n(a);i.a}}]);
//# sourceMappingURL=chunk-0c5180b4.89a12364.js.map