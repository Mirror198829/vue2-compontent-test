webpackJsonp([7],{"7Cm7":function(t,n,e){n=t.exports=e("UTlt")(!0),n.push([t.i,"#demo1[data-v-7369c690]{display:-webkit-box;display:-ms-flexbox;display:flex;margin-top:14px}#demo1 .dItem1[data-v-7369c690]{border:2px dashed #20a0ff;padding:15px;margin-right:20px;text-align:center;-webkit-box-flex:1;-ms-flex:1;flex:1}#demo1 .dItem1[data-v-7369c690]:last-child{margin-right:0}#demo1 .dItem1 h2[data-v-7369c690]{font-size:14px;font-weight:400}#demo1 .dItem1 div[data-v-7369c690]{text-align:center;background-color:#20a0ff;color:#fff;padding:10px 30px;display:inline-block;margin-top:15px}#demo1 .dItem1 span[data-v-7369c690]{font-weight:700;font-size:20px;margin:0 5px}.transmit[data-v-7369c690]{text-align:center;margin:15px 0}.transmit .tranBtn[data-v-7369c690]{margin:0 10px}","",{version:3,sources:["E:/code/vue-component/src/pages/vueX.vue"],names:[],mappings:"AACA,wBACE,oBAAqB,AACrB,oBAAqB,AACrB,aAAc,AACd,eAAiB,CAClB,AACD,gCACE,0BAA2B,AAC3B,aAAc,AACd,kBAAmB,AACnB,kBAAmB,AACnB,mBAAoB,AAChB,WAAY,AACR,MAAQ,CACjB,AACD,2CACE,cAAgB,CACjB,AACD,mCACE,eAAgB,AAChB,eAAiB,CAClB,AACD,oCACE,kBAAmB,AACnB,yBAA0B,AAC1B,WAAY,AACZ,kBAAmB,AACnB,qBAAsB,AACtB,eAAiB,CAClB,AACD,qCACE,gBAAiB,AACjB,eAAgB,AAChB,YAAc,CACf,AACD,2BACE,kBAAmB,AACnB,aAAe,CAChB,AACD,oCACE,aAAe,CAChB",file:"vueX.vue",sourcesContent:["\n#demo1[data-v-7369c690] {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  margin-top: 14px;\n}\n#demo1 .dItem1[data-v-7369c690] {\n  border: 2px dashed #20a0ff;\n  padding: 15px;\n  margin-right: 20px;\n  text-align: center;\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n}\n#demo1 .dItem1[data-v-7369c690]:last-child {\n  margin-right: 0;\n}\n#demo1 .dItem1 h2[data-v-7369c690] {\n  font-size: 14px;\n  font-weight: 400;\n}\n#demo1 .dItem1 div[data-v-7369c690] {\n  text-align: center;\n  background-color: #20a0ff;\n  color: #fff;\n  padding: 10px 30px;\n  display: inline-block;\n  margin-top: 15px;\n}\n#demo1 .dItem1 span[data-v-7369c690] {\n  font-weight: 700;\n  font-size: 20px;\n  margin: 0 5px;\n}\n.transmit[data-v-7369c690] {\n  text-align: center;\n  margin: 15px 0;\n}\n.transmit .tranBtn[data-v-7369c690] {\n  margin: 0 10px;\n}\n"],sourceRoot:""}])},K1K1:function(t,n,e){"use strict";n.a={name:"",data:function(){return{dataName:this.$store.state.name}},computed:{name:function(){return this.$store.state.name},shopLst:function(){return this.$store.state.shopLst},shopLstByAction:function(){return this.$store.state.shopLstByAction}},methods:{changeIt:function(){this.$store.commit("changeName")},add:function(t){this.$store.commit("addNum",{id:t})},decrease:function(t){this.$store.commit("decrease",{id:t})},addNumByAction:function(t){this.$store.dispatch("updateCountAction",{id:t})},decreaseByAction:function(t){this.$store.dispatch("decreaseCountAction",{id:t})}},mounted:function(){},created:function(){}}},eB2k:function(t,n,e){"use strict";function a(t){e("nr3c")}Object.defineProperty(n,"__esModule",{value:!0});var i=e("K1K1"),s=e("qrLx"),o=e("C7Lr"),c=a,d=o(i.a,s.a,!1,c,"data-v-7369c690",null);n.default=d.exports},nr3c:function(t,n,e){var a=e("7Cm7");"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);e("FIqI")("c2d8a924",a,!0,{})},qrLx:function(t,n,e){"use strict";var a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticStyle:{padding:"20px"}},[e("el-button",{attrs:{type:"info"},on:{click:t.changeIt}},[t._v("改变state状态")]),t._v(" "),e("div",{attrs:{id:"demo1"}},[e("div",{staticClass:"dItem1"},[t._m(0),t._v(" "),e("div",[t._v(t._s(t.dataName))])]),t._v(" "),e("div",{staticClass:"dItem1"},[t._m(1),t._v(" "),e("div",[t._v(t._s(t.$store.state.name))])]),t._v(" "),e("div",{staticClass:"dItem1"},[t._m(2),t._v(" "),e("div",[t._v(t._s(t.name))])])]),t._v(" "),e("hr",{staticStyle:{margin:"20px 0"}}),t._v(" "),e("div",[e("h2",[t._v("计数器示例(统计总数使用了getters)")]),t._v(" "),e("div",t._l(t.shopLst,function(n){return e("p",{key:n.id,staticClass:"transmit"},[e("el-button",{staticClass:"tranBtn",on:{click:function(e){t.decrease(n.id)}}},[t._v("-")]),t._v(" "),e("span",[t._v(t._s(n.count))]),t._v(" "),e("el-button",{staticClass:"tranBtn",on:{click:function(e){t.add(n.id)}}},[t._v("+")])],1)})),t._v(" "),e("h4",{staticStyle:{"text-align":"center"}},[t._v("统计总数为："+t._s(t.$store.getters.totals))])]),t._v(" "),e("hr",{staticStyle:{margin:"20px 0"}}),t._v(" "),e("div",[e("h2",[t._v("计数器示例(异步操作actions)")]),t._v(" "),e("div",t._l(t.shopLstByAction,function(n){return e("p",{key:n.id,staticClass:"transmit"},[e("el-button",{staticClass:"tranBtn",on:{click:function(e){t.decreaseByAction(n.id)}}},[t._v("-")]),t._v(" "),e("span",[t._v(t._s(n.count))]),t._v(" "),e("el-button",{staticClass:"tranBtn",on:{click:function(e){t.addNumByAction(n.id)}}},[t._v("+")])],1)})),t._v(" "),e("h4",{staticStyle:{"text-align":"center"}},[t._v("统计总数为："+t._s(t.$store.getters.totalsByAction))])])],1)},i=[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("h2",[t._v("这里是通过"),e("span",[t._v("data:name")]),t._v("获取到的前端技术栈")])},function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("h2",[t._v("这里是通过"),e("span",[t._v("$store.state.name")]),t._v("获取到的前端技术栈")])},function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("h2",[t._v("这里是通过"),e("span",[t._v("computed:name")]),t._v("获取到的前端技术栈")])}],s={render:a,staticRenderFns:i};n.a=s}});
//# sourceMappingURL=7.4b3e53bad243a7b921fb.js.map