(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-070e8bd8"],{"1d63":function(e,t,i){"use strict";var r=i("c313"),n=i.n(r);n.a},"7ec1":function(e,t,i){"use strict";i.r(t);var r=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"demo-base-table-tooltip"},[i("im-demo-row",{attrs:{title:"基本编辑功能"}},[i("im-demo-row-item",[i("im-button-group",[i("im-button",{attrs:{label:"状态：",type:"line"}}),e._l(Object.keys(e.EDIT_STATUS),function(t,r){return i("im-button",{key:r,attrs:{label:t,active:e.EDIT_STATUS[t]===e.status}})})],2)],1),i("im-demo-row-item",[i("im-button-group",[i("im-button",{attrs:{label:"添加"},on:{click:e.add}}),i("im-button",{attrs:{label:"取消"},on:{click:e.cancel}}),i("im-button",{attrs:{label:"保存"},on:{click:e.save}}),i("im-button",{attrs:{label:"批量编辑"},on:{click:e.multiUpdate}})],1),i("im-input",{model:{value:e.index,callback:function(t){e.index=t},expression:"index"}})],1)],1),i("im-base-table",{ref:"table",attrs:{data:e.data,id:"trainno"},on:{dblclickRow:e.pl_dblclick}},[i("im-tc-column",{attrs:{title:"非常非常非常非常长非常非常长的标题",field:"tooltip",tooltip:""}}),i("im-tc-column",{attrs:{title:"formatter+tooltip",field:"tooltip",tooltip:"",formatter:e.formatter}}),i("im-tc-column",{attrs:{title:"formatter+sync tooltip",field:"type",tooltip:"",formatter:e.formatterSync}}),i("im-tc-select",{attrs:{title:"状态",field:"status",prop:e.selectProp,tooltip:""}}),i("im-tc-column",{attrs:{title:"车次",field:"trainno"}}),i("im-tc-column",{attrs:{title:"用时",field:"costtime"}}),i("im-tc-column",{attrs:{title:"出发站",field:"station"}})],1)],1)},n=[],a=(i("96cf"),i("3b8d")),c=(i("ac6a"),i("b2f2")),s={name:"demo-base-table-tooltip",data:function(){var e=this,t=c["b"];return t.forEach(function(t){t.tooltip=e.$plain.$utils.uuid()}),{data:t,EDIT_STATUS:{INSERT:"insert",UPDATE:"update",NORMAL:"normal",SELECT:"select",MULTI_UPDATE:"multiUpdate"},status:"normal",newData:[],table:null,index:null,selectProp:{data:[{name:"新建",val:"new"},{name:"已提交",val:"submit"},{name:"已审批",val:"accept"},{name:"已拒绝",val:"reject"}],labelKey:"name",valueKey:"val"}}},mounted:function(){this.table=this.$refs.table},methods:{pl_checkStatus:function(){var e=Object(a["a"])(regeneratorRuntime.mark(function e(t){var i,r,n,a,c,s,p,o,d;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(i=t.insert,r=t.update,n=t.normal,a=t.select,c=t.multiUpdate,s=t.final,p={insert:i,update:r,normal:n,select:a,multiUpdate:c,final:s},o=p[this.status],d=p.final,e.t0=!!o,!e.t0){e.next=7;break}return e.next=7,o.apply(this);case 7:d&&d.apply(this);case 8:case"end":return e.stop()}},e,this)}));function t(t){return e.apply(this,arguments)}return t}(),pl_dblclick:function(e){var t=e.item;this.pl_checkStatus({normal:function(){this.table.enableEdit({item:t}),this.status=this.EDIT_STATUS.UPDATE}})},add:function(){this.pl_checkStatus({normal:function(){var e=Object(a["a"])(regeneratorRuntime.mark(function e(){var t;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return t={trainno:(new Date).getTime(),type:"G",station:"杭州东",endstation:"北京南",departuretime:"06:55",arrivaltime:"13:03",sequenceno:"1",costtime:"6时8分",distance:"0",isend:"1",trainno12306:"5600000G3490",pricesw:"1701",typename:"高铁",priceyd:"907.0",priceed:"538.5"},this.newData.unshift(t),this.data.unshift(t),e.next=5,this.$plain.nextTick();case 5:this.table.enableEdit({index:0}),this.status=this.EDIT_STATUS.INSERT;case 7:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}()})},cancel:function(){this.pl_checkStatus({insert:function(){while(this.newData.length>0)this.newData.shift(),this.data.shift()},update:function(){this.table.cancelEdit({index:this.index}),this.table.disableEdit({index:this.index})},multiUpdate:function(){console.log("cancel multiUpdate"),this.table.cancelEdit(),this.table.disableEdit()},final:function(){this.status=this.EDIT_STATUS.NORMAL}})},save:function(){this.pl_checkStatus({insert:function(){for(var e=0;e<this.newData.length;e++)this.table.saveEdit({index:e}),this.table.disableEdit({index:e});this.newData=[]},update:function(){this.table.saveEdit({index:this.index}),this.table.disableEdit({index:this.index}),this.status=this.EDIT_STATUS.NORMAL},multiUpdate:function(){this.table.saveEdit(),this.table.disableEdit()},final:function(){this.status=this.EDIT_STATUS.NORMAL}})},multiUpdate:function(){this.pl_checkStatus({normal:function(){this.table.enableEdit(),this.status=this.EDIT_STATUS.MULTI_UPDATE}})},formatter:function(e){var t=e.value;return"hello, ".concat(t)},formatterSync:function(){var e=Object(a["a"])(regeneratorRuntime.mark(function e(t){var i,r;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return i=t.value,r=(3e3*Math.random()).toFixed(0),e.next=4,this.$plain.$utils.delay(r);case 4:return e.abrupt("return","".concat(i,",delay:").concat(r));case 5:case"end":return e.stop()}},e,this)}));function t(t){return e.apply(this,arguments)}return t}()}},p=s,o=(i("1d63"),i("2877")),d=Object(o["a"])(p,r,n,!1,null,null,null);t["default"]=d.exports},b2f2:function(e,t,i){"use strict";i.d(t,"b",function(){return r}),i.d(t,"a",function(){return n});var r=[{trainno:"G34",status:"reject",type:"G",station:"杭州东",endstation:"北京南",departuretime:"06:55",arrivaltime:"13:03",sequenceno:"1",costtime:"6时8分",distance:"0",isend:"1",trainno12306:"5600000G3490",pricesw:"1701",pricetd:"",pricegr1:"",pricegr2:"",pricerw1:"",pricerw2:"",priceyw1:"",priceyw2:"",priceyw3:"",typename:"高铁",priceyd:"907.0",priceed:"538.5"},{trainno:"G20",status:"submit",type:"G",station:"杭州东",endstation:"北京南",departuretime:"07:48",arrivaltime:"12:20",sequenceno:"1",costtime:"4时32分",distance:"0",isend:"1",trainno12306:"5600000G2011",pricesw:"1701",pricetd:"",pricegr1:"",pricegr2:"",pricerw1:"",pricerw2:"",priceyw1:"",priceyw2:"",priceyw3:"",typename:"高铁",priceyd:"907.0",priceed:"538.5"},{trainno:"G58",status:"new",type:"G",station:"杭州东",endstation:"北京南",departuretime:"08:50",arrivaltime:"14:43",sequenceno:"4",costtime:"5时53分",distance:"0",isend:"1",trainno12306:"5e00000G5840",pricesw:"1701",pricetd:"",pricegr1:"",pricegr2:"",pricerw1:"",pricerw2:"",priceyw1:"",priceyw2:"",priceyw3:"",typename:"高铁",priceyd:"907.0",priceed:"538.5"},{trainno:"G36",status:"submit",type:"G",station:"杭州东",endstation:"北京南",departuretime:"09:05",arrivaltime:"14:53",sequenceno:"2",costtime:"5时48分",distance:"0",isend:"1",trainno12306:"5600000G3660",pricesw:"1701",pricetd:"",pricegr1:"",pricegr2:"",pricerw1:"",pricerw2:"",priceyw1:"",priceyw2:"",priceyw3:"",typename:"高铁",priceyd:"907.0",priceed:"538.5"},{trainno:"G42",status:"submit",type:"G",station:"杭州东",endstation:"北京南",departuretime:"09:24",arrivaltime:"16:08",sequenceno:"1",costtime:"6时44分",distance:"0",isend:"1",trainno12306:"5600000G4200",pricesw:"1966",pricetd:"",pricegr1:"",pricegr2:"",pricerw1:"",pricerw2:"",priceyw1:"",priceyw2:"",priceyw3:"",typename:"高铁",priceyd:"1048.5",priceed:"626.0"},{trainno:"G46",status:"submit",type:"G",station:"杭州东",endstation:"北京南",departuretime:"09:50",arrivaltime:"15:43",sequenceno:"7",costtime:"5时53分",distance:"0",isend:"1",trainno12306:"5600000G4650",pricesw:"1701",pricetd:"",pricegr1:"",pricegr2:"",pricerw1:"",pricerw2:"",priceyw1:"",priceyw2:"",priceyw3:"",typename:"高铁",priceyd:"907.0",priceed:"538.5"},{trainno:"G38",status:"submit",type:"G",station:"杭州东",endstation:"北京南",departuretime:"11:34",arrivaltime:"18:09",sequenceno:"8",costtime:"6时35分",distance:"0",isend:"1",trainno12306:"5u00000G380I",pricesw:"1701",pricetd:"",pricegr1:"",pricegr2:"",pricerw1:"",pricerw2:"",priceyw1:"",priceyw2:"",priceyw3:"",typename:"高铁",priceyd:"907.0",priceed:"538.5"},{trainno:"G168",status:"submit",type:"G",station:"杭州东",endstation:"北京南",departuretime:"11:39",arrivaltime:"18:13",sequenceno:"9",costtime:"6时34分",distance:"0",isend:"1",trainno12306:"5j0000G16822",pricesw:"1701",pricetd:"",pricegr1:"",pricegr2:"",pricerw1:"",pricerw2:"",priceyw1:"",priceyw2:"",priceyw3:"",typename:"高铁",priceyd:"907.0",priceed:"538.5"},{trainno:"G56",type:"G",station:"杭州东",endstation:"北京南",departuretime:"12:47",arrivaltime:"18:53",sequenceno:"10",costtime:"6时6分",distance:"0",isend:"1",trainno12306:"5800000G560J",pricesw:"1701",pricetd:"",pricegr1:"",pricegr2:"",pricerw1:"",pricerw2:"",priceyw1:"",priceyw2:"",priceyw3:"",typename:"高铁",priceyd:"907.0",priceed:"538.5"},{trainno:"G32",type:"G",station:"杭州东",endstation:"北京南",departuretime:"13:00",arrivaltime:"17:39",sequenceno:"1",costtime:"4时39分",distance:"0",isend:"1",trainno12306:"5600000G3244",pricesw:"1701",pricetd:"",pricegr1:"",pricegr2:"",pricerw1:"",pricerw2:"",priceyw1:"",priceyw2:"",priceyw3:"",typename:"高铁",priceyd:"907.0",priceed:"538.5"},{trainno:"G164",type:"G",station:"杭州东",endstation:"北京南",departuretime:"13:41",arrivaltime:"19:53",sequenceno:"13",costtime:"6时12分",distance:"0",isend:"1",trainno12306:"5j0000G16422",pricesw:"1701",pricetd:"",pricegr1:"",pricegr2:"",pricerw1:"",pricerw2:"",priceyw1:"",priceyw2:"",priceyw3:"",typename:"高铁",priceyd:"907.0",priceed:"538.5"},{trainno:"G166",type:"G",station:"杭州东",endstation:"北京南",departuretime:"15:12",arrivaltime:"20:58",sequenceno:"2",costtime:"5时46分",distance:"0",isend:"1",trainno12306:"5t0000G16600",pricesw:"1701",pricetd:"",pricegr1:"",pricegr2:"",pricerw1:"",pricerw2:"",priceyw1:"",priceyw2:"",priceyw3:"",typename:"高铁",priceyd:"907.0",priceed:"538.5"},{trainno:"G60",type:"G",station:"杭州东",endstation:"北京南",departuretime:"15:43",arrivaltime:"21:29",sequenceno:"4",costtime:"5时46分",distance:"0",isend:"1",trainno12306:"5e00000G6023",pricesw:"1701",pricetd:"",pricegr1:"",pricegr2:"",pricerw1:"",pricerw2:"",priceyw1:"",priceyw2:"",priceyw3:"",typename:"高铁",priceyd:"907.0",priceed:"538.5"},{trainno:"G44",type:"G",station:"杭州东",endstation:"北京南",departuretime:"16:15",arrivaltime:"23:08",sequenceno:"1",costtime:"6时53分",distance:"0",isend:"1",trainno12306:"5600000G4400",pricesw:"1966",pricetd:"",pricegr1:"",pricegr2:"",pricerw1:"",pricerw2:"",priceyw1:"",priceyw2:"",priceyw3:"",typename:"高铁",priceyd:"1048.5",priceed:"626.0"},{trainno:"Z282",type:"Z",station:"杭州",endstation:"北京",departuretime:"17:04",arrivaltime:"10:22",sequenceno:"1",costtime:"17时18分",distance:"0",isend:"0",trainno12306:"560000Z28230",typename:"直达特快"},{trainno:"Z283",type:"Z",station:"杭州",endstation:"北京",departuretime:"17:04",arrivaltime:"10:22",sequenceno:"1",costtime:"17时18分",distance:"0",isend:"0",trainno12306:"560000Z28230",typename:"直达特快"},{trainno:"D718",type:"D",station:"杭州",endstation:"北京",departuretime:"17:32",arrivaltime:"07:07",sequenceno:"1",costtime:"13时35分",distance:"0",isend:"1",trainno12306:"560000D71800",pricesw:"",pricetd:"",pricegr1:"",pricegr2:"",pricerw1:"957",pricerw2:"",priceyw1:"756",priceyw2:"",priceyw3:"",typename:"动车",priceyd:"",priceed:"504.0"},{trainno:"G40",type:"G",station:"杭州东",endstation:"北京南",departuretime:"19:00",arrivaltime:"23:23",sequenceno:"5",costtime:"4时23分",distance:"0",isend:"1",trainno12306:"5600000G4070",pricesw:"1701",pricetd:"",pricegr1:"",pricegr2:"",pricerw1:"",pricerw2:"",priceyw1:"",priceyw2:"",priceyw3:"",typename:"高铁",priceyd:"907.0",priceed:"538.5"},{trainno:"K102",type:"K",station:"杭州",endstation:"北京",departuretime:"19:23",arrivaltime:"15:43",sequenceno:"10",costtime:"20时20分",distance:"0",isend:"1",trainno12306:"5a0000K102B4",pricesw:"",pricetd:"",pricerz:"",priceyz:"189.5",pricegr1:"",pricegr2:"",pricerw1:"504.5",pricerw2:"",priceyw1:"322.5",priceyw2:"",priceyw3:"",typename:"快速"},{trainno:"D712",type:"D",station:"杭州",endstation:"北京",departuretime:"20:05",arrivaltime:"09:36",sequenceno:"1",costtime:"13时31分",distance:"0",isend:"1",trainno12306:"560000D71201",pricesw:"",pricetd:"",pricegr1:"",pricegr2:"",pricerw1:"957",pricerw2:"",priceyw1:"756",priceyw2:"",priceyw3:"",typename:"动车",priceyd:"",priceed:"504.0"}],n=JSON.parse(JSON.stringify(r.slice(0,6)))},c313:function(e,t,i){}}]);
//# sourceMappingURL=chunk-070e8bd8.aeb4ddd2.js.map