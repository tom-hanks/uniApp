(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/personal/personal"],{"057a":function(e,t,n){"use strict";n.r(t);var a=n("beaf"),s=n.n(a);for(var o in a)"default"!==o&&function(e){n.d(t,e,function(){return a[e]})}(o);t["default"]=s.a},"2f11":function(e,t,n){"use strict";n.r(t);var a=n("9545"),s=n("057a");for(var o in s)"default"!==o&&function(e){n.d(t,e,function(){return s[e]})}(o);var r=n("2877"),u=Object(r["a"])(s["default"],a["a"],a["b"],!1,null,null,null);t["default"]=u.exports},9545:function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement;e._self._c},s=[];n.d(t,"a",function(){return a}),n.d(t,"b",function(){return s})},beaf:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=s(n("a34a"));function s(e){return e&&e.__esModule?e:{default:e}}function o(e,t,n,a,s,o,r){try{var u=e[o](r),i=u.value}catch(c){return void n(c)}u.done?t(i):Promise.resolve(i).then(a,s)}function r(e){return function(){var t=this,n=arguments;return new Promise(function(a,s){var r=e.apply(t,n);function u(e){o(r,a,s,u,i,"next",e)}function i(e){o(r,a,s,u,i,"throw",e)}u(void 0)})}}var u={data:function(){return{}},onLoad:function(){this.testRequest1(),this.testRequest2(),this.testRequest3(),this.testRequest4()},methods:{toPage:function(){this.$openPage({name:"my",query:{id:123}})},testRequest1:function(){var t=this;this.$minApi.get("/topics",{page:1,tab:"all"}).then(function(n){t.res=n,console.log(e(n," at pages\\personal\\personal.vue:36"))}).catch(function(t){console.log(e(t," at pages\\personal\\personal.vue:38"))})},testRequest2:function(){var t=r(a.default.mark(function t(){var n;return a.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,this.$minApi.get("/topics",{page:1,tab:"all"});case 3:n=t.sent,console.log(e(n," at pages\\personal\\personal.vue:46")),t.next=10;break;case 7:t.prev=7,t.t0=t["catch"](0),console.log(e(t.t0," at pages\\personal\\personal.vue:48"));case 10:case"end":return t.stop()}},t,this,[[0,7]])}));function n(){return t.apply(this,arguments)}return n}(),testRequest3:function(){var t=r(a.default.mark(function t(){var n;return a.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return console.log(e("this.$minApi.post=====: ",this.$minApi.post," at pages\\personal\\personal.vue:53")),t.prev=1,t.next=4,this.$minApi.post("/accesstoken",{accesstoken:"77698f91-94d1-4689-89cf-4d6fec5b3bb9"});case 4:n=t.sent,console.log(e(n," at pages\\personal\\personal.vue:56")),t.next=11;break;case 8:t.prev=8,t.t0=t["catch"](1),console.log(e(t.t0," at pages\\personal\\personal.vue:58"));case 11:case"end":return t.stop()}},t,this,[[1,8]])}));function n(){return t.apply(this,arguments)}return n}(),testRequest4:function(){var t=r(a.default.mark(function t(){var n;return a.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return console.log(e("this.$minApi.post=====: ",this.$minApi.post," at pages\\personal\\personal.vue:63")),t.prev=1,t.next=4,this.$minApi.get("/topics",{page:1,tab:"all"});case 4:n=t.sent,console.log(e(n," at pages\\personal\\personal.vue:66")),t.next=11;break;case 8:t.prev=8,t.t0=t["catch"](1),console.log(e(t.t0," at pages\\personal\\personal.vue:68"));case 11:case"end":return t.stop()}},t,this,[[1,8]])}));function n(){return t.apply(this,arguments)}return n}()}};t.default=u}).call(this,n("0de9")["default"])}},[["1faa","common/runtime","common/vendor"]]]);