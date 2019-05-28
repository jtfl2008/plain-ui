(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-63f82c74"],{"203f":function(e,i,t){"use strict";t.r(i);var r=function(){var e=this,i=e.$createElement,t=e._self._c||i;return t("div",{staticClass:"demo-form"},[t("im-demo-row",{attrs:{title:"校验"}},[t("im-form",{ref:"form"},[t("im-form-column",[t("im-form-item",{attrs:{label:"必输："}},[t("im-input",{attrs:{required:"",suggestion:["广州","北京","上海"]}})],1),t("im-form-item",{attrs:{label:"长度5-10，字符串："}},[t("im-input",{attrs:{rules:"length:{max:10,min:5}"}})],1),t("im-form-item",{attrs:{label:"长度5-10，对象："}},[t("im-input",{attrs:{rules:{rule:"length",max:10,min:5}}})],1),t("im-form-item",{attrs:{label:"邮箱："}},[t("im-input",{attrs:{rules:"email"}})],1),t("im-form-item",{attrs:{label:"手机号码："}},[t("im-input",{attrs:{rules:"phone"}})],1),t("im-form-item",{attrs:{label:"QQ号码："}},[t("im-input",{attrs:{rules:"qq"}})],1),t("im-form-item",{attrs:{label:"身份证号："}},[t("im-input",{attrs:{rules:"cardId"}})],1),t("im-form-item",{attrs:{label:"自定义正则表达式："}},[t("im-input",{attrs:{rules:{rule:"regexp",reg:"^(www\\.)[1-9a-zA-Z]+(\\.com)$",msg:"自定义正则表达式校验不正确"}}})],1),t("im-form-item",{attrs:{label:"多重校验【必输，手机号码】："}},[t("im-input",{attrs:{rules:["phone","required"]}})],1),t("im-form-item",[t("im-button",{attrs:{label:"保存"},on:{click:function(i){return e.$plain.log("save")}}}),t("im-button",{attrs:{label:"提交"}})],1)],1),t("im-form-column",[t("im-form-item",{attrs:{label:"文本域"}},[t("im-textarea",{attrs:{required:""}})],1),t("im-form-item",{attrs:{label:"输入输入框"}},[t("im-number",{attrs:{required:""}})],1),t("im-form-item",{attrs:{label:"下拉选择框"}},[t("im-select",{attrs:{required:"",data:["北京","上海","广州","南京","南昌"]}})],1),t("im-form-item",{attrs:{label:"下拉选择框：多选"}},[t("im-select",{attrs:{data:e.data,labelKey:"name",valueKey:"value",multiple:"",required:""},scopedSlots:e._u([{key:"default",fn:function(i){var r=i.item;i.index;return[t("div",{staticClass:"demo-select-item-line"},[t("span",[e._v(e._s(r.name))]),t("span",[e._v(e._s(r.position))])]),t("div",{staticClass:"demo-select-item-line"},[t("span",[e._v(e._s(r.value))])])]}}])})],1),t("im-form-item",{attrs:{label:"折叠组件"}},[t("im-cascade",{attrs:{data:e.cascadeData,"label-key":"label","children-key":"children","value-key":"value",required:""}})],1),t("im-form-item",{attrs:{label:"颜色选择器"}},[t("im-color-picker",{attrs:{required:""}})],1),t("im-form-item",{attrs:{label:"时间选择器"}},[t("im-time",{attrs:{required:""}})],1),t("im-form-item",{attrs:{label:"日期选择器"}},[t("im-date",{attrs:{required:""}})],1),t("im-form-item",{attrs:{label:"标签输入框"}},[t("im-tag-input",{attrs:{required:"",input:""}})],1),t("im-form-item",{attrs:{label:"复选框"}},[t("im-radio-group",{attrs:{multiple:""}},e._l(["北京","上海","广州","南京"],function(e){return t("im-radio",{key:e,attrs:{id:e,label:e}})}),1)],1),t("im-form-item",{attrs:{label:"单选框"}},[t("im-radio-group",e._l(["北京","上海","广州","南京"],function(e){return t("im-radio",{key:e,attrs:{id:e,label:e}})}),1)],1),t("im-form-item",{attrs:{label:"开关"}},[t("im-toggle")],1)],1)],1),t("im-button-group",[t("im-button",{attrs:{label:"校验"},on:{click:e.pl_valid}}),t("im-button",{attrs:{label:"取消校验状态"},on:{click:function(i){return e.$refs.form.cancelValid()}}}),t("im-button",{attrs:{label:"禁用",active:e.disabled},on:{click:function(i){e.disabled=!0,e.$refs.form.setDisabled()}}}),t("im-button",{attrs:{label:"取消禁用",active:!e.disabled},on:{click:function(i){e.disabled=!1,e.$refs.form.setDisabled(!1)}}}),t("im-button",{attrs:{label:"只读",active:e.readonly},on:{click:function(i){e.readonly=!0,e.$refs.form.setReadonly()}}}),t("im-button",{attrs:{label:"取消只读",active:!e.readonly},on:{click:function(i){e.readonly=!1,e.$refs.form.setReadonly(!1)}}})],1)],1)],1)},a=[],n=(t("b2f2"),{name:"demo-form",data:function(){return{textAlign:"right",data:[{name:"北京",value:"beijing",position:"华北"},{name:"天津",value:"tianjin",position:"华北"},{name:"上海",value:"shanghai",position:"华东"},{name:"江苏",value:"jiangsu",position:"华东"},{name:"广东",value:"guangdong",position:"华南"},{name:"广西",value:"guangxi",position:"华南"},{name:"黑龙江",value:"heilongjiang",position:"东北"},{name:"辽宁",value:"liaoning",position:"东北"},{name:"重庆",value:"chongqing",position:"西南"},{name:"四川",value:"sichuan",position:"西南"}],disabled:!1,readonly:!1,cascadeData:[{value:"beijing",label:"北京",children:[{value:"gugong",disabled:!0,label:"故宫"},{value:"tiantan",label:"天坛"},{value:"wangfujing",label:"王府井"},{value:"gugong",label:"故宫"},{value:"tiantan",label:"天坛"},{value:"wangfujing",label:"王府井"},{value:"gugong",label:"故宫"},{value:"tiantan",label:"天坛"},{value:"wangfujing",label:"王府井"},{value:"gugong",label:"故宫"},{value:"tiantan",label:"天坛"},{value:"wangfujing",label:"王府井"}]},{value:"jiangsu",label:"江苏",children:[{value:"nanjing",label:"南京",children:[{value:"fuzimiao",label:"夫子庙"}]},{value:"suzhou",label:"苏州",children:[{value:"zhuozhengyuan",label:"拙政园"},{value:"shizilin",label:"狮子林"}]}]}]}},methods:{pl_valid:function(){var e=this.$refs.form.valid(),i=e.isValid,t=e.validMsg;i?this.$message.show("校验通过"):console.log(t)}}}),c=n,s=(t("bb61"),t("17cc")),p=Object(s["a"])(c,r,a,!1,null,null,null);i["default"]=p.exports},a986:function(e,i,t){},b2f2:function(e,i,t){"use strict";t.d(i,"b",function(){return r}),t.d(i,"a",function(){return a});var r=[{trainno:"G34",status:"reject",type:"G",station:"杭州东",endstation:"北京南",departuretime:"06:55",arrivaltime:"13:03",sequenceno:"1",costtime:"6时8分",distance:"0",isend:"1",trainno12306:"5600000G3490",pricesw:"1701",pricetd:"",pricegr1:"",pricegr2:"",pricerw1:"",pricerw2:"",priceyw1:"",priceyw2:"",priceyw3:"",typename:"高铁",priceyd:"907.0",priceed:"538.5"},{trainno:"G20",status:"submit",type:"G",station:"杭州东",endstation:"北京南",departuretime:"07:48",arrivaltime:"12:20",sequenceno:"1",costtime:"4时32分",distance:"0",isend:"1",trainno12306:"5600000G2011",pricesw:"1701",pricetd:"",pricegr1:"",pricegr2:"",pricerw1:"",pricerw2:"",priceyw1:"",priceyw2:"",priceyw3:"",typename:"高铁",priceyd:"907.0",priceed:"538.5"},{trainno:"G58",status:"new",type:"G",station:"杭州东",endstation:"北京南",departuretime:"08:50",arrivaltime:"14:43",sequenceno:"4",costtime:"5时53分",distance:"0",isend:"1",trainno12306:"5e00000G5840",pricesw:"1701",pricetd:"",pricegr1:"",pricegr2:"",pricerw1:"",pricerw2:"",priceyw1:"",priceyw2:"",priceyw3:"",typename:"高铁",priceyd:"907.0",priceed:"538.5"},{trainno:"G36",status:"submit",type:"G",station:"杭州东",endstation:"北京南",departuretime:"09:05",arrivaltime:"14:53",sequenceno:"2",costtime:"5时48分",distance:"0",isend:"1",trainno12306:"5600000G3660",pricesw:"1701",pricetd:"",pricegr1:"",pricegr2:"",pricerw1:"",pricerw2:"",priceyw1:"",priceyw2:"",priceyw3:"",typename:"高铁",priceyd:"907.0",priceed:"538.5"},{trainno:"G42",status:"submit",type:"G",station:"杭州东",endstation:"北京南",departuretime:"09:24",arrivaltime:"16:08",sequenceno:"1",costtime:"6时44分",distance:"0",isend:"1",trainno12306:"5600000G4200",pricesw:"1966",pricetd:"",pricegr1:"",pricegr2:"",pricerw1:"",pricerw2:"",priceyw1:"",priceyw2:"",priceyw3:"",typename:"高铁",priceyd:"1048.5",priceed:"626.0"},{trainno:"G46",status:"submit",type:"G",station:"杭州东",endstation:"北京南",departuretime:"09:50",arrivaltime:"15:43",sequenceno:"7",costtime:"5时53分",distance:"0",isend:"1",trainno12306:"5600000G4650",pricesw:"1701",pricetd:"",pricegr1:"",pricegr2:"",pricerw1:"",pricerw2:"",priceyw1:"",priceyw2:"",priceyw3:"",typename:"高铁",priceyd:"907.0",priceed:"538.5"},{trainno:"G38",status:"submit",type:"G",station:"杭州东",endstation:"北京南",departuretime:"11:34",arrivaltime:"18:09",sequenceno:"8",costtime:"6时35分",distance:"0",isend:"1",trainno12306:"5u00000G380I",pricesw:"1701",pricetd:"",pricegr1:"",pricegr2:"",pricerw1:"",pricerw2:"",priceyw1:"",priceyw2:"",priceyw3:"",typename:"高铁",priceyd:"907.0",priceed:"538.5"},{trainno:"G168",status:"submit",type:"G",station:"杭州东",endstation:"北京南",departuretime:"11:39",arrivaltime:"18:13",sequenceno:"9",costtime:"6时34分",distance:"0",isend:"1",trainno12306:"5j0000G16822",pricesw:"1701",pricetd:"",pricegr1:"",pricegr2:"",pricerw1:"",pricerw2:"",priceyw1:"",priceyw2:"",priceyw3:"",typename:"高铁",priceyd:"907.0",priceed:"538.5"},{trainno:"G56",type:"G",station:"杭州东",endstation:"北京南",departuretime:"12:47",arrivaltime:"18:53",sequenceno:"10",costtime:"6时6分",distance:"0",isend:"1",trainno12306:"5800000G560J",pricesw:"1701",pricetd:"",pricegr1:"",pricegr2:"",pricerw1:"",pricerw2:"",priceyw1:"",priceyw2:"",priceyw3:"",typename:"高铁",priceyd:"907.0",priceed:"538.5"},{trainno:"G32",type:"G",station:"杭州东",endstation:"北京南",departuretime:"13:00",arrivaltime:"17:39",sequenceno:"1",costtime:"4时39分",distance:"0",isend:"1",trainno12306:"5600000G3244",pricesw:"1701",pricetd:"",pricegr1:"",pricegr2:"",pricerw1:"",pricerw2:"",priceyw1:"",priceyw2:"",priceyw3:"",typename:"高铁",priceyd:"907.0",priceed:"538.5"},{trainno:"G164",type:"G",station:"杭州东",endstation:"北京南",departuretime:"13:41",arrivaltime:"19:53",sequenceno:"13",costtime:"6时12分",distance:"0",isend:"1",trainno12306:"5j0000G16422",pricesw:"1701",pricetd:"",pricegr1:"",pricegr2:"",pricerw1:"",pricerw2:"",priceyw1:"",priceyw2:"",priceyw3:"",typename:"高铁",priceyd:"907.0",priceed:"538.5"},{trainno:"G166",type:"G",station:"杭州东",endstation:"北京南",departuretime:"15:12",arrivaltime:"20:58",sequenceno:"2",costtime:"5时46分",distance:"0",isend:"1",trainno12306:"5t0000G16600",pricesw:"1701",pricetd:"",pricegr1:"",pricegr2:"",pricerw1:"",pricerw2:"",priceyw1:"",priceyw2:"",priceyw3:"",typename:"高铁",priceyd:"907.0",priceed:"538.5"},{trainno:"G60",type:"G",station:"杭州东",endstation:"北京南",departuretime:"15:43",arrivaltime:"21:29",sequenceno:"4",costtime:"5时46分",distance:"0",isend:"1",trainno12306:"5e00000G6023",pricesw:"1701",pricetd:"",pricegr1:"",pricegr2:"",pricerw1:"",pricerw2:"",priceyw1:"",priceyw2:"",priceyw3:"",typename:"高铁",priceyd:"907.0",priceed:"538.5"},{trainno:"G44",type:"G",station:"杭州东",endstation:"北京南",departuretime:"16:15",arrivaltime:"23:08",sequenceno:"1",costtime:"6时53分",distance:"0",isend:"1",trainno12306:"5600000G4400",pricesw:"1966",pricetd:"",pricegr1:"",pricegr2:"",pricerw1:"",pricerw2:"",priceyw1:"",priceyw2:"",priceyw3:"",typename:"高铁",priceyd:"1048.5",priceed:"626.0"},{trainno:"Z282",type:"Z",station:"杭州",endstation:"北京",departuretime:"17:04",arrivaltime:"10:22",sequenceno:"1",costtime:"17时18分",distance:"0",isend:"0",trainno12306:"560000Z28230",typename:"直达特快"},{trainno:"Z283",type:"Z",station:"杭州",endstation:"北京",departuretime:"17:04",arrivaltime:"10:22",sequenceno:"1",costtime:"17时18分",distance:"0",isend:"0",trainno12306:"560000Z28230",typename:"直达特快"},{trainno:"D718",type:"D",station:"杭州",endstation:"北京",departuretime:"17:32",arrivaltime:"07:07",sequenceno:"1",costtime:"13时35分",distance:"0",isend:"1",trainno12306:"560000D71800",pricesw:"",pricetd:"",pricegr1:"",pricegr2:"",pricerw1:"957",pricerw2:"",priceyw1:"756",priceyw2:"",priceyw3:"",typename:"动车",priceyd:"",priceed:"504.0"},{trainno:"G40",type:"G",station:"杭州东",endstation:"北京南",departuretime:"19:00",arrivaltime:"23:23",sequenceno:"5",costtime:"4时23分",distance:"0",isend:"1",trainno12306:"5600000G4070",pricesw:"1701",pricetd:"",pricegr1:"",pricegr2:"",pricerw1:"",pricerw2:"",priceyw1:"",priceyw2:"",priceyw3:"",typename:"高铁",priceyd:"907.0",priceed:"538.5"},{trainno:"K102",type:"K",station:"杭州",endstation:"北京",departuretime:"19:23",arrivaltime:"15:43",sequenceno:"10",costtime:"20时20分",distance:"0",isend:"1",trainno12306:"5a0000K102B4",pricesw:"",pricetd:"",pricerz:"",priceyz:"189.5",pricegr1:"",pricegr2:"",pricerw1:"504.5",pricerw2:"",priceyw1:"322.5",priceyw2:"",priceyw3:"",typename:"快速"},{trainno:"D712",type:"D",station:"杭州",endstation:"北京",departuretime:"20:05",arrivaltime:"09:36",sequenceno:"1",costtime:"13时31分",distance:"0",isend:"1",trainno12306:"560000D71201",pricesw:"",pricetd:"",pricegr1:"",pricegr2:"",pricerw1:"957",pricerw2:"",priceyw1:"756",priceyw2:"",priceyw3:"",typename:"动车",priceyd:"",priceed:"504.0"}],a=JSON.parse(JSON.stringify(r.slice(0,6)))},bb61:function(e,i,t){"use strict";var r=t("a986"),a=t.n(r);a.a}}]);
//# sourceMappingURL=chunk-63f82c74.588842ed.js.map