(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d226728"],{e964:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"demo-nav-page-2"},[a("im-demo-row",[a("h2",[t._v("页面二")])]),a("im-demo-row",[a("im-button",{attrs:{label:"返回"},on:{click:function(e){return t.nav.back(t.backData)}}}),a("im-input",{model:{value:t.backData,callback:function(e){t.backData=e},expression:"backData"}})],1),a("im-demo-row",{attrs:{title:"上一页参数"}},[a("im-button",{attrs:{label:"页面参数:"+t.param.msg,type:"line"}})],1),a("im-demo-row",{attrs:{title:"下一页"}},[a("im-button",{attrs:{label:"下一页参数：",type:"line"}}),a("im-input",{attrs:{placeholder:""},model:{value:t.msg,callback:function(e){t.msg=e},expression:"msg"}}),a("im-button",{attrs:{label:"打开页面三"},on:{click:function(e){return t.nav.push({path:"/nav/demo-nav-page-3",param:{msg:t.msg}})}}})],1),a("im-demo-row",{attrs:{title:"事件监听"}},[a("im-button",{attrs:{label:"监听事件"},on:{click:function(e){t.nav.on("demo-event",function(e){return t.$message.show("页面二监听事件:"+e,{type:"white"})})}}}),a("im-button",{attrs:{label:"监听一次事件"},on:{click:function(e){t.nav.once("demo-event",function(e){return t.$message.show("页面二监听一次事件:"+e,{type:"white"})})}}})],1),a("im-demo-row",{attrs:{title:"解除监听事件"}},[a("im-button",{attrs:{label:"解除监听事件"},on:{click:function(e){return t.nav.off("demo-event")}}})],1),a("im-demo-row",{attrs:{title:"派发事件"}},[a("im-input",{model:{value:t.message,callback:function(e){t.message=e},expression:"message"}}),a("im-button",{attrs:{label:"派发事件"},on:{click:function(e){return t.nav.emit("demo-event",t.message)}}})],1),a("im-demo-row",{attrs:{title:"全局派发事件，nav下可用"}},[a("im-button",{attrs:{label:"派发全局事件"},on:{click:function(e){return t.nav.emit("demo-event",t.message,!0)}}})],1)],1)},o=[],i={name:"demo-nav-page-2",props:{nav:{},param:{}},data:function(){return{msg:null,message:"页面二事件参数：",backData:""}}},m=i,s=a("2877"),l=Object(s["a"])(m,n,o,!1,null,null,null);e["default"]=l.exports}}]);
//# sourceMappingURL=chunk-2d226728.2f70e05f.js.map