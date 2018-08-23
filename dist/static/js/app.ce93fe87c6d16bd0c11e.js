webpackJsonp([1],{"+ABe":function(module,__webpack_exports__,__webpack_require__){"use strict";var __WEBPACK_IMPORTED_MODULE_0_vuedraggable__=__webpack_require__("405r"),__WEBPACK_IMPORTED_MODULE_0_vuedraggable___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vuedraggable__),__WEBPACK_IMPORTED_MODULE_1_vue_echarts__=__webpack_require__("omp/"),__WEBPACK_IMPORTED_MODULE_1_vue_echarts___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_vue_echarts__);__webpack_exports__.a={name:"vDraggable",data:function(){var t={legend:{show:!1},backgroundColor:"#2c343c",tooltip:{trigger:"item",formatter:"{a} <br/>{b} : {c} ({d}%)"},visualMap:{show:!1,min:80,max:600,inRange:{colorLightness:[0,1]}},series:[{name:"访问来源",type:"pie",radius:"55%",center:["50%","50%"],data:[{value:335,name:"直接访问"},{value:310,name:"邮件营销"},{value:274,name:"联盟广告"},{value:235,name:"视频广告"},{value:400,name:"搜索引擎"}].sort(function(t,a){return t.value-a.value}),roseType:"radius",label:{normal:{textStyle:{color:"rgba(255, 255, 255, 0.3)"}}},labelLine:{normal:{lineStyle:{color:"rgba(255, 255, 255, 0.3)"},smooth:.2,length:10,length2:20}},itemStyle:{normal:{color:"#c23531",shadowBlur:200,shadowColor:"rgba(0, 0, 0, 0.5)"}},animationType:"scale",animationEasing:"elasticOut",animationDelay:function(t){return 200*Math.random()}}]},a={tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},legend:{show:!1},xAxis:[{type:"category",data:["周一","周二","周三","周四","周五","周六","周日"]}],yAxis:[{type:"value"}],series:[{name:"直接访问",type:"bar",data:[320,332,301,334,390,330,320]},{name:"邮件营销",type:"bar",stack:"广告",data:[120,132,101,134,90,230,210]},{name:"联盟广告",type:"bar",stack:"广告",data:[220,182,191,234,290,330,310]},{name:"视频广告",type:"bar",stack:"广告",data:[150,232,201,154,190,330,410]},{name:"搜索引擎",type:"bar",data:[862,1018,964,1026,1679,1600,1570],markLine:{lineStyle:{normal:{type:"dashed"}},data:[[{type:"min"},{type:"max"}]]}},{name:"百度",type:"bar",barWidth:5,stack:"搜索引擎",data:[620,732,701,734,1090,1130,1120]},{name:"谷歌",type:"bar",stack:"搜索引擎",data:[120,132,101,134,290,230,220]},{name:"必应",type:"bar",stack:"搜索引擎",data:[60,72,71,74,190,130,110]},{name:"其他",type:"bar",stack:"搜索引擎",data:[62,82,91,84,109,110,120]}]},e={tooltip:{trigger:"item",formatter:"{a} <br/>{b}: {c} ({d}%)"},legend:{show:!1},series:[{name:"访问来源",type:"pie",radius:["50%","70%"],avoidLabelOverlap:!1,label:{normal:{show:!1,position:"center"},emphasis:{show:!0,textStyle:{fontSize:"30",fontWeight:"bold"}}},labelLine:{normal:{show:!1}},data:[{value:335,name:"直接访问"},{value:310,name:"邮件营销"},{value:234,name:"联盟广告"},{value:135,name:"视频广告"},{value:1548,name:"搜索引擎"}]}]};return{list:[{name:"vuejs",id:1,height:200,option:t},{name:"html",id:3,height:200,option:a},{name:"js",id:2,height:200,option:e},{name:"react",id:2,height:200,option:{tooltip:{trigger:"axis",axisPointer:{type:"cross",label:{backgroundColor:"#6a7985"}}},legend:{data:["邮件营销","联盟广告","视频广告","直接访问","搜索引擎"],show:!1},xAxis:[{type:"category",boundaryGap:!1,data:["周一","周二","周三","周四","周五","周六","周日"]}],yAxis:[{type:"value"}],series:[{name:"邮件营销",type:"line",stack:"总量",areaStyle:{normal:{}},data:[120,132,101,134,90,230,210]},{name:"联盟广告",type:"line",stack:"总量",areaStyle:{normal:{}},data:[220,182,191,234,290,330,310]},{name:"视频广告",type:"line",stack:"总量",areaStyle:{normal:{}},data:[150,232,201,154,190,330,410]},{name:"直接访问",type:"line",stack:"总量",areaStyle:{normal:{}},data:[320,332,301,334,390,330,320]},{name:"搜索引擎",type:"line",stack:"总量",label:{normal:{show:!0,position:"top"}},areaStyle:{normal:{}},data:[820,932,901,934,1290,1330,1320]}]}},{name:"angularjs",id:2,height:200,option:e}],list2:[],editable:!0,isDragging:!1,delayedDragging:!1,polar:t}},components:{draggable:__WEBPACK_IMPORTED_MODULE_0_vuedraggable___default.a,chart:__WEBPACK_IMPORTED_MODULE_1_vue_echarts___default.a},computed:{dragOptions:function(){return{animation:0,group:"people",ghostClass:"ghost"}},option:function option(str){var obj2=eval("("+str+")");return obj2}},methods:{onMove:function(t){var a=t.relatedContext,e=t.draggedContext,n=a.element,s=e.element;return!(n&&n.fixed||s.fixed)}}}},"+EAV":function(t,a,e){"use strict";var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"draggableWrap"},[e("div",{attrs:{id:"drag-top"}},[e("draggable",{staticClass:"list-group clear",attrs:{element:"ul",options:{group:{name:"people",pull:"clone",put:!0},sort:!1,ghostClass:"ghost"},move:t.onMove},on:{start:function(a){t.isDragging=!0},end:function(a){t.isDragging=!1}},model:{value:t.list,callback:function(a){t.list=a},expression:"list"}},[e("transition-group",{attrs:{type:"transition",name:"flip-list"}},t._l(t.list,function(t){return e("li",{key:t.id,staticClass:"list1-group-item"},[e("chart",{staticStyle:{height:"100px",width:"100px"},attrs:{options:t.option}})],1)}))],1)],1),t._v(" "),e("div",{attrs:{id:"drag-main"}},[e("draggable",{attrs:{element:"span",options:{group:{name:"people",pull:!1}},move:t.onMove},model:{value:t.list2,callback:function(a){t.list2=a},expression:"list2"}},[e("transition-group",{staticClass:"list-group clear",attrs:{name:"no",tag:"ul"}},t._l(t.list2,function(t){return e("li",{key:t.id,staticClass:"list2-group-item",style:{height:t.height+"px"}},[e("chart",{staticStyle:{width:"100%",height:"100%"},attrs:{options:t.option}})],1)}))],1)],1)])},s=[],o={render:n,staticRenderFns:s};a.a=o},"0G3R":function(t,a,e){"use strict";var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"cptDemo"}},[t._m(0),t._v(" "),e("div",{staticClass:"section"},[e("h1",{staticClass:"sectionTitle"},[t._v("提示框")]),t._v(" "),e("div",{staticClass:"alertWrap"},[e("cj-alert",{attrs:{showicon:!0},on:{"close-click":t.closehandle}})],1),t._v(" "),e("div",{staticClass:"alertWrap"},[e("cj-alert",{attrs:{type:"error",msg:"错误",closeable:!1}})],1),t._v(" "),e("div",{staticClass:"alertWrap"},[e("cj-alert",{attrs:{type:"error",msg:"错误",closeable:!1,showicon:!0}})],1),t._v(" "),e("div",{staticClass:"alertWrap"},[e("cj-alert",{attrs:{type:"success",msg:"恭喜，成功了"},on:{"close-click":t.closehandle}})],1),t._v(" "),e("div",{staticClass:"alertWrap"},[e("cj-alert",{attrs:{showicon:!0},on:{"close-click":t.closehandle}},[e("h1",[t._v("我是自定义的样式")])])],1)])])},s=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"section"},[e("h1",{staticClass:"sectionTitle"},[t._v("模态框")])])}],o={render:n,staticRenderFns:s};a.a=o},"0Vxu":function(t,a,e){"use strict";function n(t){e("uuW4")}var s=e("XvUq"),o=e("f2hF"),i=e("vSla"),r=n,c=i(s.a,o.a,!1,r,"data-v-31a62771",null);a.a=c.exports},"1N2v":function(t,a,e){"use strict";a.a={name:"vCptGrandson",props:["myGrandson"],data:function(){return{name:""}}}},"1WNi":function(t,a){},"66up":function(t,a,e){"use strict";function n(t){e("Iep8")}var s=e("1N2v"),o=e("kzXh"),i=e("vSla"),r=n,c=i(s.a,o.a,!1,r,"data-v-80d568b8",null);a.a=c.exports},"7/cl":function(t,a,e){"use strict";var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"box"},[t._v("\n    非父子组件\n    "),e("button",{on:{click:t.touchHeader}},[t._v("触发一下header组件事件")])])},s=[],o={render:n,staticRenderFns:s};a.a=o},"75nN":function(t,a,e){"use strict";a.a={name:"customSlot",data:function(){return{}},methods:{},mounted:function(){},created:function(){}}},"7rO4":function(t,a,e){"use strict";function n(t){e("9YNb")}var s=e("SFnO"),o=e("IKil"),i=e("vSla"),r=n,c=i(s.a,o.a,!1,r,"data-v-b57d16fc",null);a.a=c.exports},"7xx+":function(t,a){},"8ONT":function(t,a,e){"use strict";a.a={name:"vuexChildCpt",data:function(){return{}},computed:{count:function(){return this.$store.state.count}}}},"8kd4":function(t,a,e){"use strict";function n(t){e("Vo+o")}var s=e("75nN"),o=e("lYeD"),i=e("vSla"),r=n,c=i(s.a,o.a,!1,r,"data-v-f722d7ce",null);a.a=c.exports},"9YNb":function(t,a){},Dep7:function(t,a){},EO68:function(t,a,e){"use strict";var n=e("0Vxu");a.a={name:"",components:{cjAlert:n.a},data:function(){return{}},methods:{closehandle:function(){alert("触发删除事件拉")}},mounted:function(){},created:function(){}}},HBSQ:function(t,a){},HFSh:function(t,a,e){"use strict";var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"cptWrap"},[e("h1",{staticClass:"cptTitle"},[t._v("我是一个独立的slot组件")]),t._v(" "),e("div",{staticClass:"slotWrap"},[e("div",{staticClass:"slotTitle"},[t._v("卡槽区域A")]),t._v(" "),e("div",{staticClass:"slotMain"},[t._t("default",[e("span",{staticClass:"slotTxt"},[t._v("为嘛什么都不传，我是卡槽a")])])],2)]),t._v(" "),e("p",[t._v("我不是卡槽区域哟~")]),t._v(" "),e("p",[t._v("看看这个message值："),e("span",{staticStyle:{"font-weight":"700"}},[t._v(t._s(t.message))])])])},s=[],o={render:n,staticRenderFns:s};a.a=o},HXef:function(t,a,e){"use strict";function n(t){e("i7Lc"),e("gA0e")}var s=e("lFSU"),o=e("JujC"),i=e("vSla"),r=n,c=i(s.a,o.a,!1,r,"data-v-17f65375",null);a.a=c.exports},IKil:function(t,a,e){"use strict";var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"box"},[e("h3",[t._v("看看slot是怎么做的")]),t._v(" "),t._t("default",[t._v("\n      只有在没有要分发的内容时才会显示。\n    ")]),t._v(" "),t._t("CPU"),t._v(" "),t._t("membory")],2)},s=[],o={render:n,staticRenderFns:s};a.a=o},IcnI:function(t,a,e){"use strict";var n=e("IvJb"),s=e("HVJf"),o=e("ukYY"),i=e("lwq5");n.default.use(s.a);var r=new s.a.Store({state:i.a,mutations:o.a});a.a=r},Iep8:function(t,a){},JFxU:function(t,a){},JujC:function(t,a,e){"use strict";var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("div",{staticClass:"parentCpt"},[e("h1",[t._v("父组件")]),t._v(" "),e("el-input",{staticStyle:{"margin-top":"10px"},attrs:{placeholder:"地址传递数据给子组件"},model:{value:t.name.data,callback:function(a){t.$set(t.name,"data",a)},expression:"name.data"}}),t._v(" "),e("el-input",{staticStyle:{"margin-top":"10px"},attrs:{placeholder:"值传递数据给子组件"},model:{value:t.data1,callback:function(a){t.data1=a},expression:"data1"}}),t._v(" "),e("el-input",{staticStyle:{"margin-top":"10px"},attrs:{placeholder:"地址传递给孙子组件"},model:{value:t.grandson.data,callback:function(a){t.$set(t.grandson,"data",a)},expression:"grandson.data"}}),t._v(" "),e("button",{staticStyle:{"margin-top":"20px"}},[t._v("我是showNum按钮")]),t._v(" "),e("div",{staticClass:"childCptWrap",staticStyle:{"margin-top":"20px"}},[e("v-header",{staticStyle:{"margin-bottom":"20px"},attrs:{"my-message":t.name,"my-data":t.data1,"my-grandson":t.grandson},on:{getnum:t.showNum}}),t._v(" "),e("div",{staticClass:"clear",staticStyle:{width:"100%",display:"flex"}},[e("div",{staticClass:"cptWrap",staticStyle:{"margin-right":"20px",flex:"1","text-align":"center"}},[e("v-component-a")],1),t._v(" "),e("div",{staticClass:"cptWrap",staticStyle:{flex:"1","text-align":"center"}},[e("v-component-b")],1)]),t._v(" "),e("my-component"),t._v(" "),e("slot-a",{directives:[{name:"show",rawName:"v-show",value:!0,expression:"true"}]},[e("p",{attrs:{slot:"CPU"},slot:"CPU"},[t._v("CPU")]),t._v(" "),e("p",{attrs:{slot:"membory"},slot:"membory"},[t._v("内存")]),t._v(" "),e("p",[t._v("我是另外的slot")])])],1),t._v(" "),e("div",[e("h4",[t._v("我是App.vue中vuex的值")]),t._v(" "),e("em",[t._v(t._s(t.count))]),t._v(" "),e("button",{on:{click:t.changeCount}},[t._v("改变state")]),t._v(" "),e("button",{on:{click:function(a){t.transCount("vuex")}}},[t._v("传入字符串参数")]),t._v(" "),e("input",{attrs:{type:"text"},on:{input:t.changeTxt}})]),t._v(" "),e("vuex-child-cpt")],1)])},s=[],o={render:n,staticRenderFns:s};a.a=o},LDi6:function(t,a){},M93x:function(t,a,e){"use strict";function n(t){e("zd23"),e("7xx+")}var s=e("WPeS"),o=e("MbgT"),i=e("vSla"),r=n,c=i(s.a,o.a,!1,r,"data-v-4b8db867",null);a.a=c.exports},MbgT:function(t,a,e){"use strict";var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"app"}},[e("el-menu",{attrs:{router:!0,"default-active":t.$route.path,mode:"horizontal",backgroundColor:"#545c64","text-color":"#fff","active-text-color":"#ffd04b"}},[e("el-menu-item",{attrs:{index:"/"}},[t._v("组件概念")]),t._v(" "),e("el-menu-item",{attrs:{index:"/slot"}},[t._v("slot")]),t._v(" "),e("el-menu-item",{attrs:{index:"/cptDemo"}},[t._v("组件示例")]),t._v(" "),e("el-menu-item",{attrs:{index:"/drag"}},[t._v("拖拽插件")])],1),t._v(" "),e("div",{staticClass:"main"},[e("router-view")],1),t._v(" "),t._m(0)],1)},s=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("footer",{attrs:{id:"foot"}},[e("p",[t._v("江苏南京 前端开发工程师 曹静")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://github.com/Mirror198829",target:"_blank"}},[t._v("https://github.com/Mirror198829")])])])}],o={render:n,staticRenderFns:s};a.a=o},NHnr:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n=e("IvJb"),s=e("M93x"),o=e("YaEn"),i=e("+944"),r=e.n(i),c=e("IcnI"),l=e("Dep7"),u=(e.n(l),e("HBSQ"));e.n(u);n.default.use(r.a),n.default.config.productionTip=!1,n.default.component("my-component",{template:"<div>我是一个全局的componet组件</div>"}),new n.default({el:"#app",router:o.a,store:c.a,template:"<App/>",components:{App:s.a}})},Ngjo:function(t,a,e){"use strict";var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"box"},[e("h3",[t._v("我是子组件中vuex")]),t._v(" "),e("em",[t._v(t._s(t.count))])])},s=[],o={render:n,staticRenderFns:s};a.a=o},"O+5x":function(t,a){},Qdod:function(t,a){},RZP5:function(t,a,e){"use strict";var n=e("66up");a.a={name:"vheader",props:["myMessage","myData","myGrandson"],data:function(){return{name:"caojing"}},components:{vGrandson:n.a},methods:{showNum:function(){this.$emit("getnum",[123,this.myMessage.data])}}}},RbLt:function(t,a,e){"use strict";var n=e("IvJb");a.a=new n.default},SFnO:function(t,a,e){"use strict";a.a={name:"slotA",data:function(){return{}}}},TX4e:function(t,a){},UHej:function(t,a,e){"use strict";a.a={name:"customSlotName",data:function(){return{message:"message:我是子组件数据"}},methods:{},mounted:function(){},created:function(){}}},UzLt:function(t,a,e){"use strict";function n(t){e("LDi6")}var s=e("RZP5"),o=e("eS+S"),i=e("vSla"),r=n,c=i(s.a,o.a,!1,r,"data-v-128956b0",null);a.a=c.exports},"Vo+o":function(t,a){},WPeS:function(t,a,e){"use strict";a.a={name:"",data:function(){return{}},methods:{},mounted:function(){},created:function(){}}},Xjsw:function(t,a,e){"use strict";function n(t){e("umFf")}var s=e("xOwG"),o=e("sqe5"),i=e("vSla"),r=n,c=i(s.a,o.a,!1,r,"data-v-3c481c0c",null);a.a=c.exports},XvUq:function(t,a,e){"use strict";a.a={props:{type:{type:String,default:"info"},msg:{type:String,default:"这是一个信息"},closeable:{type:Boolean,default:!0},showicon:{type:Boolean,default:!1}},name:"alertCpt",data:function(){return{}},computed:{classes:function(){return"m-alert-"+this.type}},methods:{closeHandler:function(){this.$emit("close-click")}},mounted:function(){},created:function(){}}},YaEn:function(t,a,e){"use strict";var n=e("IvJb"),s=e("cigS"),o=e("HXef"),i=e("zj3F"),r=e("iDii"),c=e("lmUA");n.default.use(s.a),a.a=new s.a({routes:[{path:"/",name:"Home",component:o.a},{path:"/drag",name:"drag",component:i.a},{path:"/slot",name:"slot",component:r.a},{path:"/cptDemo",name:"cptDemo",component:c.a}]})},Zmq2:function(t,a,e){"use strict";var n=e("RbLt");a.a={name:"box",data:function(){return{name:""}},methods:{touchCompontB:function(){n.a.$emit("getName",["子组件b"])}}}},"a+Ol":function(t,a,e){"use strict";var n=e("RbLt");a.a={name:"box",data:function(){return{name:""}},methods:{touchHeader:function(){n.a.$emit("getName",1)}}}},"eS+S":function(t,a,e){"use strict";var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"header"},[e("header",[e("h3",[t._v("子组件1（props down,event up）")]),t._v(" "),e("div",{staticStyle:{"margin-top":"10px"}},[e("el-input",{attrs:{placeholder:"地址传递的数据：js 中对象和数组是引用类型，指向同一个内存空间，若 prop 是一个对象或数组，在子组件内部改变它会影响父组件的状态。"},model:{value:t.myMessage.data,callback:function(a){t.$set(t.myMessage,"data",a)},expression:"myMessage.data"}}),t._v(" "),e("el-input",{staticStyle:{"margin-top":"10px"},attrs:{placeholder:"值传递数据:每次父组件更新，子组件所有prop会更新为最新值。因此，不能在子组件内部改变prop，如果做了，vue会在控制台给出警告"},model:{value:t.myData,callback:function(a){t.myData=a},expression:"myData"}})],1),t._v(" "),e("el-button",{staticStyle:{"margin-top":"10px"},attrs:{type:"primary"},on:{click:function(a){t.showNum()}}},[t._v("我是子组件，点击触发父组件事件showNum")]),t._v(" "),e("v-grandson",{attrs:{"my-grandson":t.myGrandson}})],1)])},s=[],o={render:n,staticRenderFns:s};a.a=o},eh9v:function(t,a,e){"use strict";var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"box"},[e("h3",[t._v("子组件A(event bus)")]),t._v(" "),e("el-button",{staticStyle:{"margin-top":"10px"},attrs:{type:"primary"},on:{click:t.touchCompontB}},[t._v("点击我触发子组件B的事件")])],1)},s=[],o={render:n,staticRenderFns:s};a.a=o},f2hF:function(t,a,e){"use strict";var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"alertCpt",class:[t.classes]},[t.showicon?e("i",{staticClass:"fa alertIcon",class:{"fa-info":"info"==t.type,"fa-question-circle-o":"error"==t.type,"fa-check":"success"==t.type}}):t._e(),t._v(" "),e("div",{staticClass:"mContent"},[t._t("default",[e("span",{staticClass:"message"},[t._v(t._s(t.msg))])]),t._v(" "),t.closeable?e("i",{staticClass:"closeBtn fa fa-close",on:{click:t.closeHandler}}):t._e()],2)])},s=[],o={render:n,staticRenderFns:s};a.a=o},gA0e:function(t,a){},hnSs:function(t,a,e){"use strict";var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"box"},[e("h3",[t._v("子组件B "+t._s(t.name))]),t._v(" "),e("el-button",{staticStyle:{"margin-top":"10px"},attrs:{type:"primary"},on:{click:function(a){t.getMyMsg("自己")}}},[t._v("点击我触发自己组件的事件")])],1)},s=[],o={render:n,staticRenderFns:s};a.a=o},i7Lc:function(t,a){},iDii:function(t,a,e){"use strict";function n(t){e("JFxU")}var s=e("sv0r"),o=e("sRvz"),i=e("vSla"),r=n,c=i(s.a,o.a,!1,r,"data-v-188bc9e9",null);a.a=c.exports},j6Rc:function(t,a){},j7R7:function(t,a){},kFsm:function(t,a){},kzXh:function(t,a,e){"use strict";var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"box"},[e("h3",[t._v("孙子组件")]),t._v(" "),e("el-input",{staticStyle:{"margin-top":"10px"},attrs:{placeholder:"孙子组件"},model:{value:t.myGrandson.data,callback:function(a){t.$set(t.myGrandson,"data",a)},expression:"myGrandson.data"}})],1)},s=[],o={render:n,staticRenderFns:s};a.a=o},lFSU:function(t,a,e){"use strict";var n=e("UzLt"),s=e("oI/1"),o=e("rU1m"),i=e("xPMO"),r=e("7rO4"),c=e("pfwm");a.a={name:"Home",data:function(){return{name:{data:""},data1:"",grandson:{data:""},info:"看看我出来了没有"}},computed:{count:function(){return this.$store.state.count},dragOptions:function(){return{animation:2,group:"people",ghostClass:"ghost"}}},components:{vHeader:n.a,box:s.a,vComponentA:o.a,vComponentB:i.a,slotA:r.a,vuexChildCpt:c.a},methods:{showNum:function(t){alert(t)},changeCount:function(){this.$store.commit("increment")},transCount:function(t){this.$store.commit("changeContent",t)},changeTxt:function(){console.log(123130)}}}},lYeD:function(t,a,e){"use strict";var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"cptWrap"},[e("h1",{staticClass:"cptTitle"},[t._v("我是一个独立的slot组件")]),t._v(" "),e("div",{staticClass:"slotWrap"},[e("div",{staticClass:"slotTitle"},[t._v("卡槽区域")]),t._v(" "),e("div",{staticClass:"slotMain"},[t._t("default",[e("span",{staticClass:"slotTxt"},[t._v("为嘛什么都不传，我就是默认样子")])])],2)]),t._v(" "),e("p",[t._v("我不是卡槽区域哟~")])])},s=[],o={render:n,staticRenderFns:s};a.a=o},lmUA:function(t,a,e){"use strict";function n(t){e("Qdod")}var s=e("EO68"),o=e("0G3R"),i=e("vSla"),r=n,c=i(s.a,o.a,!1,r,"data-v-6295bd5d",null);a.a=c.exports},lwq5:function(t,a,e){"use strict";var n={count:12};a.a=n},"oI/1":function(t,a,e){"use strict";function n(t){e("kFsm")}var s=e("a+Ol"),o=e("7/cl"),i=e("vSla"),r=n,c=i(s.a,o.a,!1,r,"data-v-15574d79",null);a.a=c.exports},pfwm:function(t,a,e){"use strict";function n(t){e("j7R7")}var s=e("8ONT"),o=e("Ngjo"),i=e("vSla"),r=n,c=i(s.a,o.a,!1,r,"data-v-77f6dc60",null);a.a=c.exports},rU1m:function(t,a,e){"use strict";function n(t){e("O+5x")}var s=e("Zmq2"),o=e("eh9v"),i=e("vSla"),r=n,c=i(s.a,o.a,!1,r,"data-v-740d7b56",null);a.a=c.exports},sRvz:function(t,a,e){"use strict";var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("h1",{staticClass:"pTitle"},[t._v("匿名slot")]),t._v(" "),e("div",{staticClass:"wrapCpt"},[e("custom-slot",[e("h1",[t._v("我是h1的标签")])]),t._v(" "),e("custom-slot",[e("em",[t._v("我是一个em标签")])]),t._v(" "),e("custom-slot",[e("ul",t._l(3,function(a){return e("li",[t._v("列表"+t._s(a))])}))]),t._v(" "),e("custom-slot",[e("code",[t._v("我是一个code标签")])]),t._v(" "),e("custom-slot")],1),t._v(" "),e("hr"),t._v(" "),e("h1",{staticClass:"pTitle"},[t._v("具名slot")]),t._v(" "),e("div",{staticClass:"wrapCpt"},[e("custom-slot-name"),t._v(" "),e("custom-slot-name",[e("em",{attrs:{slot:"a"},slot:"a"},[t._v("通过name ‘a’插入卡槽咯")]),t._v(" "),e("code",{attrs:{slot:"b"},slot:"b"},[t._v("\n        通过name ‘b’插入卡槽咯\n      ")])]),t._v(" "),e("custom-slot-name",[e("em",{attrs:{slot:"a"},slot:"a"},[t._v("通过name ‘a’插入卡槽咯")]),t._v(" "),e("code",{attrs:{slot:"b"},slot:"b"},[t._v("\n        通过name ‘b’插入卡槽咯\n      ")]),t._v(" "),e("h3",[t._v("啥玩意儿，我应该放哪里，我没有name")]),t._v(" "),e("em",[t._v("偶也不知道放哪里哟")])])],1),t._v(" "),e("hr"),t._v(" "),e("h1",{staticClass:"pTitle"},[t._v("作用域")]),t._v(" "),e("div",{staticClass:"wrapCpt"},[e("scope-slot",[e("span",{staticStyle:{"font-weight":"700"}},[t._v(t._s(t.message))])])],1)])},s=[],o={render:n,staticRenderFns:s};a.a=o},sqe5:function(t,a,e){"use strict";var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"cptWrap"},[e("h1",{staticClass:"cptTitle"},[t._v("我是一个独立的slot组件")]),t._v(" "),e("div",{staticClass:"slotWrap"},[e("div",{staticClass:"slotTitle"},[t._v("卡槽区域A")]),t._v(" "),e("div",{staticClass:"slotMain"},[t._t("a",[e("span",{staticClass:"slotTxt"},[t._v("为嘛什么都不传，我是卡槽a")])])],2)]),t._v(" "),e("p",[t._v("我不是卡槽区域哟~")]),t._v(" "),e("div",{staticClass:"slotWrap"},[e("div",{staticClass:"slotTitle"},[t._v("卡槽区域B")]),t._v(" "),e("div",{staticClass:"slotMain"},[t._t("b",[e("span",{staticClass:"slotTxt"},[t._v("为嘛什么都不传，我是卡槽b")])])],2)]),t._v(" "),e("div",{staticClass:"slotWrap"},[e("div",{staticClass:"slotTitle"},[t._v("卡槽区域C")]),t._v(" "),e("div",{staticClass:"slotMain"},[t._t("C",[e("span",{staticClass:"slotTxt"},[t._v("为嘛什么都不传，我是卡槽C")])])],2)]),t._v(" "),e("div",{staticClass:"slotWrap"},[e("div",{staticClass:"slotTitle"},[t._v("卡槽区域Slot无名氏")]),t._v(" "),e("div",{staticClass:"slotMain"},[t._t("default",[e("span",{staticClass:"slotTxt"},[t._v("我是一个无名氏slot")])])],2)])])},s=[],o={render:n,staticRenderFns:s};a.a=o},sv0r:function(t,a,e){"use strict";var n=e("8kd4"),s=e("Xjsw"),o=e("yL4F");a.a={name:"",components:{customSlot:n.a,customSlotName:s.a,scopeSlot:o.a},data:function(){return{message:"message:我是父组件数据"}},methods:{},mounted:function(){},created:function(){}}},ukYY:function(t,a,e){"use strict";var n={increment:function(t){t.count++},changeContent:function(t,a){t.count=a}};a.a=n},umFf:function(t,a){},uuW4:function(t,a){},vdH6:function(t,a,e){"use strict";var n=e("RbLt");a.a={name:"box",data:function(){return{name:""}},methods:{getMyMsg:function(t){var a="触发了"+t+"组件的方法";alert(a)}},created:function(){var t=this;n.a.$on("getName",function(a){t.getMyMsg(a)})}}},xOwG:function(t,a,e){"use strict";a.a={name:"customSlotName",data:function(){return{}},methods:{},mounted:function(){},created:function(){}}},xPMO:function(t,a,e){"use strict";function n(t){e("1WNi")}var s=e("vdH6"),o=e("hnSs"),i=e("vSla"),r=n,c=i(s.a,o.a,!1,r,"data-v-ca7c0cf4",null);a.a=c.exports},yL4F:function(t,a,e){"use strict";function n(t){e("TX4e")}var s=e("UHej"),o=e("HFSh"),i=e("vSla"),r=n,c=i(s.a,o.a,!1,r,"data-v-06f3c840",null);a.a=c.exports},zd23:function(t,a){},zj3F:function(t,a,e){"use strict";function n(t){e("j6Rc")}var s=e("+ABe"),o=e("+EAV"),i=e("vSla"),r=n,c=i(s.a,o.a,!1,r,"data-v-886615e4",null);a.a=c.exports}},["NHnr"]);
//# sourceMappingURL=app.ce93fe87c6d16bd0c11e.js.map