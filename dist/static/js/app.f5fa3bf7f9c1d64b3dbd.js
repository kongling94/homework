webpackJsonp([1],{"+rhx":function(t,e){},"68/6":function(t,e){},"6TZF":function(t,e){},EJ3n:function(t,e,i){"use strict";(function(t){var a=i("tlzi");e.a={name:"common-header",props:["headerNav"],data:function(){return{isHeaderFixed:!1}},components:{wikiHeader:a.a},computed:{getHeader:function(){if("undefined"!==this.headerNav)return this.headerNav.navmenu}},methods:{handelHeaderFixed:function(){(window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop)>this.$refs.headerNav.clientHeight?this.isHeaderFixed=!0:this.isHeaderFixed=!1},isShowPanelList:function(){var e=void 0,i=void 0,a=void 0,s=!1;t(".header-panel").on("mouseenter",function(t){s=!0,console.log("1:"+s)}).on("mouseleave",function(t){s=!1,console.log("1:"+s)}),t(".nav-bar").on("mouseenter",function(t){}).on("mouseleave",function(t){s||(clearTimeout(a),i&&(i.removeClass("isShow"),i.addClass("isNone"),i=null))}).on("mouseenter","li",function(n){i||(e=t(n.target),(i=t(e.attr("data-panel"))).removeClass("isNone"),i.addClass("isShow")),a=setTimeout(function(){s||(i.removeClass("isShow"),i.addClass("isNone"),i=null,e=t(n.target),(i=t(e.attr("data-panel"))).removeClass("isNone"),i.addClass("isShow"))},200)})}},mounted:function(){window.addEventListener("scroll",this.handelHeaderFixed),this.isShowPanelList()},destroyed:function(){window.removeEventListener("scroll",this.handelHeaderFixed)}}}).call(e,i("7t+N"))},EuRy:function(t,e,i){t.exports=i.p+"../static/img/25d016912a8596bd1fbb81e400955c94.9667ebe.png"},J2be:function(t,e){},L8A3:function(t,e){},NHnr:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});i("j1ja");var a=i("7+uW"),s=i("EJ3n"),n={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"header"},[i("div",{ref:"headerNav",staticClass:"header-nav",class:{isFixed:t.isHeaderFixed}},[i("el-row",{staticClass:"container",attrs:{type:"flex",justify:"center"}},[i("el-col",{staticClass:"logo",attrs:{span:2}},[i("router-link",{attrs:{to:"/",tag:"div"}})],1),t._v(" "),i("el-col",{staticClass:"nav-bar",attrs:{span:18}},[i("div",[i("ul",{staticClass:"nav-list"},t._l(t.getHeader,function(e,a){return i("li",{key:a},[i("a",{attrs:{href:e.navhref,"data-panel":"#headernav"+a}},[t._v(t._s(e.navname)+"\n                "),i("i",{staticClass:"bg-hover"})])])}))])]),t._v(" "),i("el-col",{staticClass:"login",attrs:{span:4}},[i("ul",[i("li",[i("i",{staticClass:"el-icon-search"})]),t._v(" "),i("li",[i("i",{staticClass:"el-icon-info"})]),t._v(" "),i("li",[i("i",{staticClass:"el-icon-goods"})]),t._v(" "),i("li",[i("i",{staticClass:"el-icon-more"})])])])],1)],1),t._v(" "),i("div",{staticClass:"header-panel"},[i("wiki-header",{staticClass:"isNone",attrs:{id:"headernav2"}})],1)])},staticRenderFns:[]};var l=function(t){i("6TZF")},r=i("VU/8")(s.a,n,!1,l,"data-v-7829c62e",null).exports,c={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"advertise"},[a("el-row",{staticClass:"container",attrs:{type:"flex",justify:"center"}},[a("el-col",{attrs:{span:6}},[a("img",{attrs:{src:i("cYMY"),alt:""}}),t._v(" "),a("div",{staticClass:"overlay"},[a("div",[t._v("\n          产品的介绍\n        ")])])]),t._v(" "),a("el-col",{attrs:{span:6}},[a("img",{attrs:{src:i("EuRy"),alt:""}}),t._v(" "),a("div",{staticClass:"overlay"})]),t._v(" "),a("el-col",{attrs:{span:6}},[a("img",{attrs:{src:i("fE55"),alt:""}}),t._v(" "),a("div",{staticClass:"overlay"})]),t._v(" "),a("el-col",{attrs:{span:6}},[a("img",{attrs:{src:i("iAaG"),alt:""}}),t._v(" "),a("div",{staticClass:"overlay"})])],1)],1)},staticRenderFns:[]};var o=i("VU/8")({name:"common-advertise"},c,!1,function(t){i("wWbS")},"data-v-0c52df01",null).exports,v={render:function(){var t=this.$createElement,e=this._self._c||t;return e("el-row",[e("el-col",{attrs:{span:24,type:"flex"}},[e("el-carousel",{attrs:{height:"680px"}},this._l(this.imgList,function(t,i){return e("el-carousel-item",{key:i},[e("img",{attrs:{src:t}})])}))],1)],1)},staticRenderFns:[]};var d=i("VU/8")({name:"common-swiper",data:function(){return{imgList:["http://firefly.cn/upload/admin/20180504/6f82c5b6aee6503bc806a93f2a972579.jpg","http://firefly.cn/upload/admin/20180508/c1e95537129d1004a4587d3e6db687bd.jpg","http://www.t-firefly.com/upload/admin/20180418/1f8ff9bd0cdad5c9ae721bab26f65a38.jpg","http://www.t-firefly.com/upload/admin/20180418/362d6f36abb66eaf0b41b1a506a5b117.jpg"]}}},v,!1,function(t){i("L8A3")},"data-v-09aed95e",null).exports,f={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"footer"},[i("div",{staticClass:"footer-info"},[i("el-row",{staticClass:"container",attrs:{type:"flex",justify:"center"}},[i("el-col",{attrs:{span:24}},[i("div",{staticClass:"info-solution"},[i("div",{staticClass:"info-img"}),t._v(" "),i("div",{staticClass:"info-text"},[i("div",{staticClass:"title"},[t._v("解决方案")]),t._v(" "),i("ul",{staticClass:"lists"},[i("li",[t._v("行业解决方案")]),t._v(" "),i("li",[t._v("通用解决方案")]),t._v(" "),i("li",[t._v("成功案例")]),t._v(" "),i("li",[t._v("定制服务")])])])]),t._v(" "),i("div",{staticClass:"line"}),t._v(" "),i("el-row",{staticClass:"info-aboutUs"},[i("el-col",{staticClass:"info-text",attrs:{span:3}},[i("div",{staticClass:"title"},[t._v("了解更多")]),t._v(" "),i("ul",{staticClass:"lists"},[i("li",[t._v("天启官网")]),t._v(" "),i("li",[t._v("关于我们")]),t._v(" "),i("li",[t._v("新闻资讯")]),t._v(" "),i("li",[t._v("合作伙伴")]),t._v(" "),i("li",[t._v("商务文件下载")]),t._v(" "),i("li",[t._v("LOGO下载")])])]),t._v(" "),i("el-col",{staticClass:"info-text",attrs:{span:3}},[i("div",{staticClass:"title"},[t._v("服务与支持")]),t._v(" "),i("ul",{staticClass:"lists"},[i("li",[t._v("新手教程")]),t._v(" "),i("li",[t._v("产品选型")]),t._v(" "),i("li",[t._v("常见问题")]),t._v(" "),i("li",[t._v("意见反馈")]),t._v(" "),i("li",[t._v("GitHub仓库")]),t._v(" "),i("li",{staticStyle:{"text-decoration":"line-through",color:"rgb(204, 204, 204)"}},[i("i",{staticClass:"el-icon-circle-close",staticStyle:{color:"red"}}),t._v("百度云盘")]),t._v(" "),i("li",[t._v("Google Dirve")])])]),t._v(" "),i("el-col",{staticClass:"info-text",attrs:{span:3}},[i("div",{staticClass:"title"},[t._v("关注我们")]),t._v(" "),i("ul",{staticClass:"lists"},[i("li",[t._v("微信公众号\n                "),i("div",{staticClass:"weixin"})]),t._v(" "),i("li",[t._v("官方微博")]),t._v(" "),i("li",[t._v("腾讯视频")]),t._v(" "),i("li",[t._v("Facebook")]),t._v(" "),i("li",[t._v("Google+")]),t._v(" "),i("li",[t._v("Youtube")]),t._v(" "),i("li",[t._v("Tiwtter")])])]),t._v(" "),i("el-col",{staticClass:"info-text",attrs:{span:5}},[i("div",{staticClass:"title"},[t._v("联系我们")]),t._v(" "),i("ul",{staticClass:"lists"},[i("li",{staticClass:"list-title"},[t._v("商务：")]),t._v(" "),i("li",[t._v("sales@t-firefly.com")]),t._v(" "),i("li",{staticClass:"list-title"},[t._v("求职：")]),t._v(" "),i("li",[t._v("hr@t-chip.com.cn")]),t._v(" "),i("li",{staticClass:"list-title"},[t._v("技术支持：")]),t._v(" "),i("li",[t._v("service@t-firefly.com")]),t._v(" "),i("li",{staticClass:"list-title"},[t._v("交流群（QQ）：")]),t._v(" "),i("li",[t._v("技术交流群① (已满)：431139193")]),t._v(" "),i("li",[t._v("技术交流群② (已满)：586343230")]),t._v(" "),i("li",[t._v("技术交流群③：708441069")]),t._v(" "),i("li",{staticClass:"list-title"},[t._v("全国服务热线：")]),t._v(" "),i("li",{staticClass:"tel"},[t._v("4001-511-533")])])]),t._v(" "),i("el-col",{staticClass:"info-text",attrs:{span:4}},[i("div",{staticClass:"title"},[t._v("网站导航")]),t._v(" "),i("ul",{staticClass:"lists"},[i("li",[t._v("天启官网")]),t._v(" "),i("li",[t._v("开源社区")]),t._v(" "),i("li",[t._v("商城购买")])]),t._v(" "),i("div",{staticClass:"add"},[i("div",{staticClass:"title"},[t._v("办公地址")]),t._v(" "),i("ul",{staticClass:"lists"},[i("li",{staticClass:"list-title"},[t._v("中山：")]),t._v(" "),i("li",{staticClass:"list-title"},[t._v("广东省中山市东区中山四路57号宏宇大厦1座2101")]),t._v(" "),i("li",[t._v("查看详细地图\n                  "),i("i",{staticClass:"add-png"})])])])])],1)],1)],1)],1),t._v(" "),i("div",{staticClass:"copyright"},[i("el-row",{staticClass:"container",attrs:{type:"flex",justify:"center"}},[i("el-col",{staticClass:"footer-copyright",attrs:{span:24}},[i("p",[t._v("Copyright © 2017，T-Chip. All Rights Reserved. | 粤ICP备14022046号-2")])])],1)],1)])},staticRenderFns:[]};var u=i("VU/8")({name:"common-footer"},f,!1,function(t){i("68/6")},"data-v-75be1d89",null).exports,_=i("mtWM"),h=i.n(_),p={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"wiki-content"},[i("div",{staticClass:"wiki-banner"},[i("div",{directives:[{name:"loading",rawName:"v-loading",value:!t.wikiLists,expression:"!wikiLists"}],staticClass:"info-wrap",attrs:{"element-loading-text":"拼命加载中..","element-loading-spinner":"el-icon-loading","element-loading-background":"rgba(0, 0, 0, 0.8)"}},[i("div",{staticClass:"banner-info"},[i("div",{staticClass:"title"},[t._v(t._s(t.banner.title))]),t._v(" "),i("div",{staticClass:"desc"},[t._v(t._s(t.banner.desc))])])])]),t._v(" "),i("div",{staticClass:"wiki-container"},[i("div",{staticClass:"wiki-warp"},t._l(t.getContent,function(e,a){return i("div",{key:a,staticClass:"lists"},[i("div",{staticClass:"item-title"},[t._v(t._s(e.name))]),t._v(" "),i("div",{staticClass:"item-content"},[i("ul",t._l(e.son,function(e){return i("li",{key:e.id},[i("a",{attrs:{href:1===e.is_wiki?e.wiki:e.href}},[i("div",{directives:[{name:"lazy",rawName:"v-lazy:background-image",value:t.defauly_host+e.more.thumbnail,expression:" defauly_host + son.more.thumbnail",arg:"background-image"}],staticClass:"img-block"}),t._v(" "),i("p",{staticClass:"title"},[t._v(t._s(e.name))]),t._v(" "),i("p",{staticClass:"desc"},[t._v(t._s(e.description))])])])}))])])}))])])])},staticRenderFns:[]};var g={name:"wiki",components:{wikiContent:i("VU/8")({name:"Wiki-content",props:["wikiLists"],data:function(){return{defauly_host:"http://www.t-firefly.com/upload/",banner:{title:"维基教程",desc:"学习、创新、协助"}}},computed:{getContent:function(){var t=[];for(var e in this.wikiLists)this.wikiLists.hasOwnProperty(e)&&t.push(this.wikiLists[e]);return t}}},p,!1,function(t){i("qjZU")},"data-v-2be7bc12",null).exports,Header:r},data:function(){return{wiki_list:"",header_nav:""}},methods:{_getWikiProducts:function(){var t=this;h.a.get("/api/getWikiPro").then(function(e){var i=(e=e.data).data;"200"===e.code&&1===i.error&&(t.wiki_list=i.info)}).catch(function(t){console.log(t)})},_getHeaderNav:function(){var t=this;h.a.get("/api/getHeader").then(function(e){e=e.data,t.header_nav=e}).catch(function(t){console.log(t)})}},created:function(){this._getWikiProducts(),this._getHeaderNav()}},C={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"wiki"},[e("Header",{attrs:{headerNav:this.header_nav}}),this._v(" "),e("wiki-content",{attrs:{wikiLists:this.wiki_list}})],1)},staticRenderFns:[]};var m=i("VU/8")(g,C,!1,function(t){i("wqS8")},"data-v-1c10aa98",null).exports,w={name:"App",components:{Header:r,Swiper:d,Footer:u,Wiki:m,Advertise:o}},A={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("Wiki")],1)},staticRenderFns:[]};var b=i("VU/8")(w,A,!1,function(t){i("scES")},"data-v-60707c09",null).exports,y=i("/ocq");a.default.use(y.a);var B=new y.a({routes:[{path:"/",name:"wiki",component:m}]}),x=i("cTzj"),k=i.n(x),E=i("/IwO"),F=i.n(E),R=i("zL8q"),P=i.n(R);i("tvR6"),i("+rhx"),i("7t+N");a.default.config.productionTip=!1,a.default.use(k.a,{error:i("Vua0"),loading:i("Vua0")}),a.default.use(P.a),a.default.use(F.a),F.a.initAMapApiLoader({key:"3d222a3955ba404bdb4875c88fb7f1a5",plugin:["AMap.Autocomplete","AMap.PlaceSearch","AMap.Scale","AMap.OverView","AMap.ToolBar","AMap.MapType","AMap.PolyEditor","AMap.CircleEditor"],v:"1.4.4"}),new a.default({el:"#app",router:B,render:function(t){return t(b)}})},Vua0:function(t,e){t.exports="data:image/jpeg;base64,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"},cYMY:function(t,e,i){t.exports=i.p+"../static/img/1a1f9928a1014e846894daa10a0230b3.e073e2d.jpg"},fE55:function(t,e,i){t.exports=i.p+"../static/img/4aee42f34ede14d7427583065eb7276d.9517b19.jpg"},iAaG:function(t,e,i){t.exports=i.p+"../static/img/be5ad1f33e202b07d961de9d9f417fd3.1ddfb33.png"},qjZU:function(t,e){},scES:function(t,e){},tlzi:function(t,e,i){"use strict";var a={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"wiki-header"},[i("div",{staticClass:"wikiheader-container"},[i("div",{staticClass:"wikiheader-lists aio"},[i("div",{staticClass:"title"},[t._v("开源·行业主板")]),t._v(" "),i("ul",{staticClass:"list-item"},[i("li",[i("a",{attrs:{href:""}},[t._v("Firefly-RK3399")])]),t._v(" "),i("li",[i("a",{attrs:{href:""}},[t._v("AIO-3399J")])]),t._v(" "),i("li",[i("a",{attrs:{href:""}},[t._v("Firefly-RK3399")])]),t._v(" "),i("li",[i("a",{attrs:{href:""}},[t._v("AIO-3288J")])]),t._v(" "),i("li",[i("a",{attrs:{href:""}},[t._v("Firefly-RK3399")])]),t._v(" "),i("li",[i("a",{attrs:{href:""}},[t._v("AIO-3128C")])]),t._v(" "),i("li",[i("a",{attrs:{href:""}},[t._v("Firefly-RK3399")])]),t._v(" "),i("li",[i("a",{attrs:{href:""}},[t._v("AIO-3128C")])]),t._v(" "),i("li",[i("a",{attrs:{href:""}},[t._v("Firefly-RK3399")])]),t._v(" "),i("li",[i("a",{attrs:{href:""}},[t._v("Firefly-RK3399")])]),t._v(" "),i("li",[i("a",{attrs:{href:""}},[t._v("Firefly-RK3399")])])])]),t._v(" "),i("div",{staticClass:"wikiheader-lists"},[i("div",{staticClass:"title"},[t._v("工业平板电脑")]),t._v(" "),i("ul",{staticClass:"list-item"},[i("li",[i("a",{attrs:{href:""}},[t._v("IPC-MA10R800-A3399J")])]),t._v(" "),i("li",[i("a",{attrs:{href:""}},[t._v("IPC-MA10R800-A3399J")])]),t._v(" "),i("li",[i("a",{attrs:{href:""}},[t._v("IPC-MA10R800-A3288J")])]),t._v(" "),i("li",[i("a",{attrs:{href:""}},[t._v("IPC-MA10R800-A3128J")])])])])])])])}]};var s=i("VU/8")({name:"wiki-header",data:function(){return{}}},a,!1,function(t){i("J2be")},"data-v-75f5317f",null);e.a=s.exports},tvR6:function(t,e){},wWbS:function(t,e){},wqS8:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.f5fa3bf7f9c1d64b3dbd.js.map