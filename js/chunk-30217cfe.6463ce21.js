(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-30217cfe"],{"00b4":function(t,e,r){"use strict";r("ac1f");var s=r("23e7"),a=r("da84"),o=r("c65b"),n=r("e330"),i=r("1626"),c=r("861d"),l=function(){var t=!1,e=/[ac]/;return e.exec=function(){return t=!0,/./.exec.apply(this,arguments)},!0===e.test("abc")&&t}(),u=a.Error,d=n(/./.test);s({target:"RegExp",proto:!0,forced:!l},{test:function(t){var e=this.exec;if(!i(e))return d(this,t);var r=o(e,this,t);if(null!==r&&!c(r))throw new u("RegExp exec method returned something other than an Object or null");return!!r}})},"107c":function(t,e,r){var s=r("d039"),a=r("da84"),o=a.RegExp;t.exports=s((function(){var t=o("(?<a>b)","g");return"b"!==t.exec("b").groups.a||"bc"!=="b".replace(t,"$<a>c")}))},"2d15":function(t,e,r){"use strict";r.r(e);var s=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"check"},[r("div",{staticClass:"container"},[t._m(0),r("div",{staticClass:"clear"}),r("div",{staticClass:"address"},[r("p",{staticClass:"title"},[t._v("收货地址")]),r("el-form",{directives:[{name:"show",rawName:"v-show",value:!t.adrShow,expression:"!adrShow"}],ref:"ruleForm3",staticClass:"demo-ruleForm",attrs:{model:t.ruleForm3,"status-icon":"",rules:t.rules3,"label-width":"0"}},[r("el-form-item",{attrs:{prop:"receiver"}},[r("el-input",{attrs:{"auto-complete":"off",placeholder:"收货人"},model:{value:t.ruleForm3.receiver,callback:function(e){t.$set(t.ruleForm3,"receiver",e)},expression:"ruleForm3.receiver"}})],1),r("el-form-item",{attrs:{prop:"tel"}},[r("el-input",{attrs:{"auto-complete":"off",placeholder:"手机号码"},model:{value:t.ruleForm3.tel,callback:function(e){t.$set(t.ruleForm3,"tel",e)},expression:"ruleForm3.tel"}})],1),r("el-form-item",{attrs:{prop:"address"}},[r("el-input",{attrs:{"auto-complete":"off",placeholder:"详细地址"},model:{value:t.ruleForm3.address,callback:function(e){t.$set(t.ruleForm3,"address",e)},expression:"ruleForm3.address"}})],1),r("el-form-item",{staticClass:"saveBtn"},[r("el-button",{staticStyle:{width:"100%"},attrs:{type:"primary"},on:{click:function(e){return t.submitForm("ruleForm3")}}},[t._v("保存并使用")])],1)],1),r("ul",{directives:[{name:"show",rawName:"v-show",value:t.adrShow,expression:"adrShow"}],staticClass:"addressInfo"},[t._l(t.addList,(function(e,s){return r("li",{key:e.id,staticClass:"addressBox",class:{adrActive:t.activeIndex==s},on:{click:function(r){return t.adrChecked(s,e.id)}}},[r("div",{staticClass:"content"},[r("p",[t._v(t._s(e.name))]),r("p",[t._v(t._s(e.phone))]),r("p",[t._v(t._s(e.area_name)+t._s(e.desc))]),r("i",{staticClass:"el-icon-edit",on:{click:function(r){return t.editFn(e.id)}}}),r("i",{staticClass:"el-icon-delete",on:{click:function(r){return t.deleteFn(e.id)}}})])])})),r("div",{staticClass:"newAddress",on:{click:t.maskShowFn}},[t._m(1)])],2)],1),r("div",{staticClass:"clear"}),t._m(2),r("div",{staticClass:"order"},[r("p",{staticClass:"title"},[t._v("订单概览")]),r("div",{staticClass:"orderBox"},t._l(t.cartList,(function(e){return r("ul",{key:e.id},[r("li",[r("div",{staticClass:"proImg"},[r("img",{attrs:{src:e.s_good.s_goods_photos[0].path,alt:""}})]),r("div",{staticClass:"proName"},[r("p",[t._v(t._s(e.s_good.name))])]),r("div",{staticClass:"proPrice"},[r("p",[t._v("¥"+t._s(e.s_good.price))])]),r("div",{staticClass:"proCount"},[r("p",[t._v("数量："+t._s(e.num))])]),r("div",{staticClass:"proTotal"},[r("p",[t._v("¥"+t._s(e.num*e.s_good.price))])])])])})),0),r("div",{staticClass:"fee"},[r("p",[t._v(" 商品总价："),r("span",[t._v("￥"+t._s(t.goodsTotal))])]),t._m(3)]),r("p",{staticClass:"payable"},[t._v(" 应付金额："),r("span",[t._v("￥"+t._s(t.goodsTotal))])])]),r("div",{staticClass:"payBtn"},[r("div",{staticClass:"backCart"},[r("router-link",{attrs:{to:"/shopping"}},[r("i",{staticClass:"el-icon-shopping-cart-2"}),t._v("返回购物车")])],1),r("div",{staticClass:"toPay"},[r("a",{on:{click:t.gotoPay}},[t._v("提交订单，去支付")])])]),r("div",{staticClass:"clear"})]),r("div",{directives:[{name:"show",rawName:"v-show",value:t.maskStatus,expression:"maskStatus"}],staticClass:"adrMask"},[r("div",{staticClass:"adrmask-window"},[r("div",{staticClass:"content"},[r("div",{staticClass:"title"},[r("p",[t._v(t._s(t.adrMaskTitle))]),r("i",{staticClass:"el-icon-close",on:{click:t.maskHideFn}})]),r("el-form",{ref:"ruleForm3",staticClass:"demo-ruleForm",attrs:{model:t.ruleForm3,"status-icon":"",rules:t.rules3,"label-width":"0"}},[r("el-form-item",{attrs:{prop:"receiver"}},[r("el-input",{attrs:{"auto-complete":"off",placeholder:"收货人"},model:{value:t.ruleForm3.receiver,callback:function(e){t.$set(t.ruleForm3,"receiver",e)},expression:"ruleForm3.receiver"}})],1),r("el-form-item",{attrs:{prop:"tel"}},[r("el-input",{attrs:{"auto-complete":"off",placeholder:"手机号码"},model:{value:t.ruleForm3.tel,callback:function(e){t.$set(t.ruleForm3,"tel",e)},expression:"ruleForm3.tel"}})],1),r("el-form-item",{attrs:{prop:"address"}},[r("el-input",{attrs:{"auto-complete":"off",placeholder:"详细地址"},model:{value:t.ruleForm3.address,callback:function(e){t.$set(t.ruleForm3,"address",e)},expression:"ruleForm3.address"}})],1),r("div",{staticClass:"buttomBtn"},[r("div",{staticClass:"cancelBtn",on:{click:t.maskHideFn}},[r("p",[t._v("取消")])]),r("el-form-item",{directives:[{name:"show",rawName:"v-show",value:t.btnStatus,expression:"btnStatus"}],staticClass:"saveBtn"},[r("el-button",{attrs:{type:"primary"},on:{click:function(e){return t.submitForm("ruleForm3")}}},[t._v("保存并使用")])],1),r("el-form-item",{directives:[{name:"show",rawName:"v-show",value:!t.btnStatus,expression:"!btnStatus"}],staticClass:"editBtn"},[r("el-button",{attrs:{type:"primary"},on:{click:function(e){return t.editForm("ruleForm3",t.id)}}},[t._v("编辑并使用")])],1)],1)],1)],1)])])])},a=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ul",{staticClass:"cartProcess"},[r("li",[t._v("1.购物车")]),r("li",[t._v("2.填写订单")]),r("li",[t._v("3.成功提交")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"content"},[r("i",{staticClass:"el-icon-plus"}),r("p",[t._v("使用新地址")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"ship"},[r("p",{staticClass:"title"},[t._v("配送方式")]),r("div",{staticClass:"postage"},[r("span",[t._v("默认：普通快递 运费 ¥0")])])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("p",{staticClass:"feePostage"},[t._v("运费："),r("span",[t._v("￥0.00")])])}],o=r("1da1"),n=(r("96cf"),r("d3b7"),r("ac1f"),r("00b4"),r("a9e3"),r("e9c4"),r("b775"));function i(t,e){return Object(n["a"])({url:"/address",method:"post",data:t,headers:{"x-token":e}})}var c=r("bc3a"),l=r.n(c),u={created:function(){var t=this;this.cartList=JSON.parse(this.$route.query.str),console.log(this.cartList),l()({method:"GET",url:"http://shop.bluej.cn/api/address",headers:{"x-token":this.$store.state.token}}).then((function(e){t.addList=e.data.result,console.log(t.addList),t.addList.length&&(t.adrShow=!t.adrShow,t.chooseAdrId=t.addList[0].id)})).then((function(t){}))},computed:{goodsTotal:function(){return this.cartList.length?this.cartList.reduce((function(t,e){return t+e.num*e.s_good.price}),0):0}},data:function(){var t=this,e=function(t,e,r){""===e?r(new Error("请输入用户名")):r()},r=function(e,r,s){""===r?s(new Error("请输入手机号码")):t.checkMobile(r)?s():s(new Error("手机号码不合法"))};return{ruleForm3:{receiver:"",tel:"",address:""},rules3:{receiver:[{validator:e,trigger:"change"}],tel:[{validator:r,trigger:"change"}]},cartList:[],addList:[],maskStatus:!1,adrMaskTitle:"",adrShow:!1,btnStatus:!0,editId:"",activeIndex:0,chooseAdrId:0,chooseGoods:[]}},methods:{checkMobile:function(t){var e=/^1\d{10}$/;return!!e.test(t)},submitForm:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){var r,s,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r={name:t.ruleForm3.receiver,phone:t.ruleForm3.tel,area:"2,52,501",area_name:"北京省市辖区西城区",desc:t.ruleForm3.address},s=sessionStorage.getItem("token"),console.log(s),e.next=5,i(r,s);case 5:a=e.sent,console.log(a),200==a.status?(alert("地址保存成功"),t.maskStatus=!1,t.$router.go(0)):alert("保存失败，请检查您填写的信息");case 8:case"end":return e.stop()}}),e)})))()},deleteFn:function(t){var e=this;l()({method:"DELETE",url:"http://shop.bluej.cn/api/address/".concat(t),headers:{"x-token":this.$store.state.token}}).then((function(t){e.$router.go(0)})).then((function(t){console.log(t)}))},editFn:function(t){this.maskStatus=!0,this.adrMaskTitle="编辑地址",this.btnStatus=!1,this.editId=Number(t)},editForm:function(){var t=this;l()({method:"PUT",url:"http://shop.bluej.cn/api/address/".concat(this.editId),data:{name:this.ruleForm3.receiver,phone:this.ruleForm3.tel,area:"2,52,501",area_name:"北京省市辖区西城区",desc:this.ruleForm3.address},headers:{"x-token":this.$store.state.token}}).then((function(e){t.$router.go(0)})).then((function(t){}))},maskShowFn:function(){this.maskStatus=!0,this.adrMaskTitle="添加地址"},maskHideFn:function(){this.maskStatus=!1},adrChecked:function(t,e){this.activeIndex=t,this.chooseAdrId=e,console.log(this.chooseAdrId),console.log(this.cartList)},gotoPay:function(){var t=JSON.stringify(this.cartList);this.$router.push({path:"/shopping/pay",query:{cartList:t,adrId:this.chooseAdrId,goodsTotal:this.goodsTotal}})}}},d=u,p=(r("652d"),r("2877")),f=Object(p["a"])(d,s,a,!1,null,"4fd3c544",null);e["default"]=f.exports},"408a":function(t,e,r){var s=r("e330");t.exports=s(1..valueOf)},5899:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(t,e,r){var s=r("e330"),a=r("1d80"),o=r("577e"),n=r("5899"),i=s("".replace),c="["+n+"]",l=RegExp("^"+c+c+"*"),u=RegExp(c+c+"*$"),d=function(t){return function(e){var r=o(a(e));return 1&t&&(r=i(r,l,"")),2&t&&(r=i(r,u,"")),r}};t.exports={start:d(1),end:d(2),trim:d(3)}},"652d":function(t,e,r){"use strict";r("6bfc")},"6bfc":function(t,e,r){},7156:function(t,e,r){var s=r("1626"),a=r("861d"),o=r("d2bb");t.exports=function(t,e,r){var n,i;return o&&s(n=e.constructor)&&n!==r&&a(i=n.prototype)&&i!==r.prototype&&o(t,i),t}},9263:function(t,e,r){"use strict";var s=r("c65b"),a=r("e330"),o=r("577e"),n=r("ad6d"),i=r("9f7f"),c=r("5692"),l=r("7c73"),u=r("69f3").get,d=r("fce3"),p=r("107c"),f=c("native-string-replace",String.prototype.replace),m=RegExp.prototype.exec,v=m,h=a("".charAt),g=a("".indexOf),_=a("".replace),x=a("".slice),b=function(){var t=/a/,e=/b*/g;return s(m,t,"a"),s(m,e,"a"),0!==t.lastIndex||0!==e.lastIndex}(),k=i.BROKEN_CARET,C=void 0!==/()??/.exec("")[1],F=b||C||k||d||p;F&&(v=function(t){var e,r,a,i,c,d,p,F=this,I=u(F),w=o(t),E=I.raw;if(E)return E.lastIndex=F.lastIndex,e=s(v,E,w),F.lastIndex=E.lastIndex,e;var S=I.groups,y=k&&F.sticky,N=s(n,F),T=F.source,$=0,A=w;if(y&&(N=_(N,"y",""),-1===g(N,"g")&&(N+="g"),A=x(w,F.lastIndex),F.lastIndex>0&&(!F.multiline||F.multiline&&"\n"!==h(w,F.lastIndex-1))&&(T="(?: "+T+")",A=" "+A,$++),r=new RegExp("^(?:"+T+")",N)),C&&(r=new RegExp("^"+T+"$(?!\\s)",N)),b&&(a=F.lastIndex),i=s(m,y?r:F,A),y?i?(i.input=x(i.input,$),i[0]=x(i[0],$),i.index=F.lastIndex,F.lastIndex+=i[0].length):F.lastIndex=0:b&&i&&(F.lastIndex=F.global?i.index+i[0].length:a),C&&i&&i.length>1&&s(f,i[0],r,(function(){for(c=1;c<arguments.length-2;c++)void 0===arguments[c]&&(i[c]=void 0)})),i&&S)for(i.groups=d=l(null),c=0;c<S.length;c++)p=S[c],d[p[0]]=i[p[1]];return i}),t.exports=v},"9f7f":function(t,e,r){var s=r("d039"),a=r("da84"),o=a.RegExp,n=s((function(){var t=o("a","y");return t.lastIndex=2,null!=t.exec("abcd")})),i=n||s((function(){return!o("a","y").sticky})),c=n||s((function(){var t=o("^r","gy");return t.lastIndex=2,null!=t.exec("str")}));t.exports={BROKEN_CARET:c,MISSED_STICKY:i,UNSUPPORTED_Y:n}},a9e3:function(t,e,r){"use strict";var s=r("83ab"),a=r("da84"),o=r("e330"),n=r("94ca"),i=r("6eeb"),c=r("1a2d"),l=r("7156"),u=r("3a9b"),d=r("d9b5"),p=r("c04e"),f=r("d039"),m=r("241c").f,v=r("06cf").f,h=r("9bf2").f,g=r("408a"),_=r("58a8").trim,x="Number",b=a[x],k=b.prototype,C=a.TypeError,F=o("".slice),I=o("".charCodeAt),w=function(t){var e=p(t,"number");return"bigint"==typeof e?e:E(e)},E=function(t){var e,r,s,a,o,n,i,c,l=p(t,"number");if(d(l))throw C("Cannot convert a Symbol value to a number");if("string"==typeof l&&l.length>2)if(l=_(l),e=I(l,0),43===e||45===e){if(r=I(l,2),88===r||120===r)return NaN}else if(48===e){switch(I(l,1)){case 66:case 98:s=2,a=49;break;case 79:case 111:s=8,a=55;break;default:return+l}for(o=F(l,2),n=o.length,i=0;i<n;i++)if(c=I(o,i),c<48||c>a)return NaN;return parseInt(o,s)}return+l};if(n(x,!b(" 0o1")||!b("0b1")||b("+0x1"))){for(var S,y=function(t){var e=arguments.length<1?0:b(w(t)),r=this;return u(k,r)&&f((function(){g(r)}))?l(Object(e),r,y):e},N=s?m(b):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","),T=0;N.length>T;T++)c(b,S=N[T])&&!c(y,S)&&h(y,S,v(b,S));y.prototype=k,k.constructor=y,i(a,x,y)}},ac1f:function(t,e,r){"use strict";var s=r("23e7"),a=r("9263");s({target:"RegExp",proto:!0,forced:/./.exec!==a},{exec:a})},ad6d:function(t,e,r){"use strict";var s=r("825a");t.exports=function(){var t=s(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.dotAll&&(e+="s"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},fce3:function(t,e,r){var s=r("d039"),a=r("da84"),o=a.RegExp;t.exports=s((function(){var t=o(".","s");return!(t.dotAll&&t.exec("\n")&&"s"===t.flags)}))}}]);
//# sourceMappingURL=chunk-30217cfe.6463ce21.js.map