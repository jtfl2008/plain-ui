(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-11d2eb26"],{"3fc2":function(e,t,r){},a53e:function(e,t,r){"use strict";var n=r("3fc2"),i=r.n(n);i.a},e06c:function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"demo-popper"},[r("im-demo-row",{attrs:{title:"基本用法"}},[r("im-button",{ref:"btn1",attrs:{label:"toggle"},on:{click:function(t){return e.$refs.popper1.toggle()}}}),r("im-popper",{ref:"popper1",attrs:{reference:e.reference[1]}},[r("span",[e._v("悬浮框内容")])])],1),r("im-demo-row",{attrs:{title:"调整间距offset=20"}},[r("im-button",{ref:"btn3",attrs:{label:"toggle"},on:{click:function(t){return e.$refs.popper3.toggle()}}}),r("im-popper",{ref:"popper3",attrs:{reference:e.reference[3],offset:20}},[r("span",[e._v("悬浮框内容")])])],1),r("im-demo-row",{attrs:{title:"动画"}},[r("im-button",{ref:"btn4",attrs:{label:"scale"},on:{click:function(t){return e.$refs.popper4.toggle()}}}),r("im-popper",{ref:"popper4",attrs:{reference:e.reference[4],animate:"scale"}},[r("span",[e._v("悬浮框内容")])]),r("im-button",{ref:"btn5",attrs:{label:"drop"},on:{click:function(t){return e.$refs.popper5.toggle()}}}),r("im-popper",{ref:"popper5",attrs:{reference:e.reference[5],animate:"drop"}},[r("span",[e._v("悬浮框内容")])])],1),r("im-demo-row",{attrs:{title:"自定义大小"}},[r("im-button",{ref:"btn6",attrs:{label:"toggle"},on:{click:function(t){return e.$refs.popper6.toggle()}}}),r("im-popper",{ref:"popper6",attrs:{reference:e.reference[6],height:300,width:300,disabledEqual:""}},[r("span",[e._v("300x300")])])],1),r("im-demo-row",{attrs:{title:"禁用尺寸自动匹配"}},[r("im-button",{ref:"btn7",attrs:{label:"toggle"},on:{click:function(t){return e.$refs.popper7.toggle()}}}),r("im-popper",{ref:"popper7",attrs:{reference:e.reference[7],disabledEqual:""}},[r("span",[e._v("disabledEqual")])])],1),r("im-demo-row",{attrs:{title:"禁用点击外部自动关闭"}},[r("im-button",{ref:"btn8",attrs:{label:"toggle"},on:{click:function(t){return e.$refs.popper8.toggle()}}}),r("im-popper",{ref:"popper8",attrs:{reference:e.reference[8],disabledHideOnClickOutside:""}},[r("span",[e._v("disabledHideOnClickOutside")])])],1),r("im-demo-row",{attrs:{title:"方向，对其方式以及箭头(这里启用了【禁用尺寸自动匹配】以及【禁用点击外部自动关闭】功能)"}},[r("im-button-group",[r("im-button",{attrs:{type:"line",label:"方向"}}),r("im-button",{attrs:{label:"top",active:"top"===e.direction},on:{click:function(t){e.direction="top"}}}),r("im-button",{attrs:{label:"bottom",active:"bottom"===e.direction},on:{click:function(t){e.direction="bottom"}}}),r("im-button",{attrs:{label:"left",active:"left"===e.direction},on:{click:function(t){e.direction="left"}}}),r("im-button",{attrs:{label:"right",active:"right"===e.direction},on:{click:function(t){e.direction="right"}}})],1),r("im-button-group",[r("im-button",{attrs:{type:"line",label:"对其方式"}}),r("im-button",{attrs:{label:"start",active:"start"===e.align},on:{click:function(t){e.align="start"}}}),r("im-button",{attrs:{label:"center",active:"center"===e.align},on:{click:function(t){e.align="center"}}}),r("im-button",{attrs:{label:"end",active:"end"===e.align},on:{click:function(t){e.align="end"}}})],1),r("im-button",{attrs:{active:e.arrow,label:"arrow"},on:{click:function(t){e.arrow=!e.arrow}}}),r("im-button",{ref:"btn2",attrs:{label:"toggle"},on:{click:function(t){return e.$refs.popper2.toggle()}}}),r("im-popper",{ref:"popper2",attrs:{reference:e.reference[2],arrow:e.arrow,direction:e.direction,align:e.align,disabledEqual:"",disabledHideOnClickOutside:""}},[r("span",[e._v("悬浮框内容")])])],1),r("im-demo-row",{attrs:{title:"测试初始化与销毁"}},[r("im-button",{ref:"btn9",attrs:{label:"toggle"},on:{click:function(t){return e.$refs.popper9.toggle()}}}),r("im-button",{on:{click:function(t){e.init=!e.init}}},[e._v("init:"+e._s(e.init))]),e.init?r("im-popper",{ref:"popper9",attrs:{reference:e.reference[9]}},[r("span",[e._v("悬浮框内容")])]):e._e()],1)],1)},i=[],o=(r("ac6a"),{name:"demo-popper",data:function(){return{reference:{},direction:"bottom",align:"start",arrow:!0,init:!0}},mounted:function(){var e=this;[1,2,3,4,5,6,7,8,9,10].forEach(function(t){e.$set(e.reference,t,e.$refs["btn".concat(t)])})},methods:{}}),a=o,c=(r("a53e"),r("2877")),l=Object(c["a"])(a,n,i,!1,null,null,null);t["default"]=l.exports}}]);
//# sourceMappingURL=chunk-11d2eb26.79359c94.js.map