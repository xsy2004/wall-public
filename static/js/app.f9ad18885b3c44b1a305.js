webpackJsonp([1],{"/i/I":function(t,e){},"0B06":function(t,e){},"0n1P":function(t,e){},BHyl:function(t,e){},GfiW:function(t,e){},H96S:function(t,e){},KxxN:function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n("7+uW"),a={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"nexmoe-header"}},[""==t.$route.matched[0].path?n("div",{staticClass:"nexmoe-tab"},[n("router-link",{attrs:{tag:"a",to:"/"}},[t._v("最新")])],1):t._e(),t._v(" "),""!==t.$route.matched[0].path?n("div",{staticClass:"nexmoe-tab"},[n("a",{on:{click:function(e){t.$router.back(-1)}}},[n("i",{staticClass:"nexmoefont icon-arrowleft"}),t._v(" 返回")])]):t._e(),t._v(" "),n("div",{staticClass:"nexmoe-notice"},[""==t.$route.matched[0].path?n("router-link",{attrs:{tag:"a",to:"/edit"}},[n("el-button",{attrs:{type:"primary",icon:"nexmoefont icon-plus",circle:"",size:"mini"}})],1):t._e()],1)])},staticRenderFns:[]};var o=n("VU/8")({name:"HelloWorld",data:function(){return{item:{avatar:"https://avatar.dawnlab.me/qq/776194970",name:"折影轻梦",qq:"776194970",category:"这是一个分类",article:"这是一段内容"}}}},a,!1,function(t){n("OHFd")},null,null).exports,s={data:function(){return{count:""}},created:function(){var t=this;this.axios.get("/api/view/notice/true").then(function(e){t.count=e.data,console.log(e.data)}).catch(function(t){console.log(t)})},methods:{refresh:function(){location.reload()}},watch:{}},c={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"nexmoe-nav"}},[e("ul",{staticClass:"nexmoe-nav"},[e("li",[e("router-link",{attrs:{tag:"a",to:"/"}},[e("i",{staticClass:"nexmoefont icon-home"}),e("i",{staticClass:"nexmoefont icon-md-refresh-circle",on:{click:this.refresh}})])],1),this._v(" "),e("li",[e("el-badge",{attrs:{value:this.count}},[e("router-link",{attrs:{tag:"a",to:"/notice"}},[e("i",{staticClass:"nexmoefont icon-bell"}),this._v(" "),e("i",{staticClass:"nexmoefont icon-bell-fill"})])],1)],1),this._v(" "),e("li",[e("router-link",{attrs:{tag:"a",to:"/setting/home"}},[e("i",{staticClass:"nexmoefont icon-people"}),e("i",{staticClass:"nexmoefont icon-people-fill"})])],1)])])},staticRenderFns:[]};var r=n("VU/8")(s,c,!1,function(t){n("BHyl")},null,null).exports,l=n("/ocq"),m={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"nexmoe-article"},t._l(t.article,function(e){return n("p",{key:e.time},["p"==e.type?n("span",[t._v(t._s(e.text))]):t._e(),t._v(" "),"img"==e.type?n("img",{attrs:{src:e.text}}):t._e(),t._v(" "),"bilibili"==e.type?n("iframe",{attrs:{src:"https://player.bilibili.com/player.html?aid="+e.text,width:"100%",height:"233px",scrolling:"no",border:"0",frameborder:"no",framespacing:"0",allowfullscreen:"true"}}):t._e(),t._v(" "),"music"==e.type?n("iframe",{attrs:{src:"https://wall.chainwon.com/api/view/music?url="+e.text,width:"100%",height:"92px",scrolling:"no",border:"0",frameborder:"no",framespacing:"0",allowfullscreen:"true"}}):t._e()])}),0)},staticRenderFns:[]};var u=n("VU/8")({name:"article",props:["article"],data:function(){return{}},methods:{}},m,!1,function(t){n("YL8B")},null,null).exports,d={name:"Item",components:{Article:u},props:["item"],data:function(){return{}},methods:{}},h={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"nexmoe-item"},[n("div",{staticClass:"nexmoe-author"},[n("div",{staticClass:"nexmoe-avatar"},[n("img",{attrs:{src:t.item.author.avatar}})]),t._v(" "),n("div",{staticClass:"nexmoe-name"},[t._v(t._s(t.item.author.name))]),t._v(" "),n("div",{staticClass:"nexmoe-s"},[t._v(t._s(t.item.time))])]),t._v(" "),n("div",{staticClass:"nexmoe-category"},[t._v("\n    # "+t._s(t.item.category)+"\n  ")]),t._v(" "),n("Article",{attrs:{article:t.item.article}})],1)},staticRenderFns:[]};var v=n("VU/8")(d,h,!1,function(t){n("h+Pb")},null,null).exports,p={name:"Home",components:{Item:v},data:function(){return{loading:!0,category:"",message:""}},mounted:function(){var t=this;this.axios.get("/api/view/category").then(function(e){t.category=e.data}).catch(function(t){console.log(t)}),this.axios.get("/api/view/message").then(function(e){t.message=e.data,t.loading=!1}).catch(function(t){console.log(t)})}},f={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"nexmoe-content"}},[n("div",{staticClass:"nexmoe-shortcut"},[n("router-link",{staticClass:"nexmoe-shortcut-item pink",attrs:{tag:"a",to:"/message/2403"}},[n("div",{staticClass:"nexmoe-shortcut-icon"},[n("i",{staticClass:"nexmoefont icon-smile"})]),t._v(" "),n("div",{staticClass:"nexmoe-shortcut-name"},[t._v("意见反馈")])]),t._v(" "),t._m(0)],1),t._v(" "),n("div",{staticClass:"nexmoe-categorys"},t._l(t.category,function(e){return n("router-link",{key:e.time,attrs:{tag:"a",to:"/category/"+e.cid}},[t._v("# "+t._s(e.name))])}),1),t._v(" "),n("div",{staticClass:"nexmoe-list"},[t.loading?n("content-placeholders",{staticClass:"nexmoe-item"},[n("content-placeholders-heading",{attrs:{img:!0}}),t._v(" "),n("content-placeholders-img"),t._v(" "),n("content-placeholders-text")],1):t._e(),t._v(" "),t.loading?n("content-placeholders",{staticClass:"nexmoe-item"},[n("content-placeholders-heading",{attrs:{img:!0}}),t._v(" "),n("content-placeholders-img"),t._v(" "),n("content-placeholders-text")],1):t._e(),t._v(" "),t.loading?n("content-placeholders",{staticClass:"nexmoe-item"},[n("content-placeholders-heading",{attrs:{img:!0}}),t._v(" "),n("content-placeholders-img"),t._v(" "),n("content-placeholders-text")],1):t._e(),t._v(" "),t._l(t.message,function(e){return t.loading?t._e():n("router-link",{key:e.time,attrs:{tag:"a",to:"/message/"+e.mid}},[t.loading?t._e():n("Item",{attrs:{item:e}})],1)})],2)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("a",{staticClass:"nexmoe-shortcut-item blue",attrs:{target:"_blank",href:"https://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url=https://wall.chainwon.com/&title=%E5%A2%99&desc=%E8%BF%99%E9%87%8C%E6%98%AF%E5%A2%99%EF%BC%8C%E5%9C%A8%E8%BF%99%E9%87%8C%EF%BC%8C%E4%BD%A0%E5%8F%AF%E4%BB%A5%E8%87%AA%E5%8A%A8%E4%B8%8B%E5%8D%95%EF%BC%8C%E5%8F%AF%E4%BB%A5%E6%A0%B9%E6%8D%AE%E4%B8%8D%E5%90%8C%E5%88%86%E7%B1%BB%E5%8F%91%E5%8D%95%E3%80%82%E6%9C%80%E9%87%8D%E8%A6%81%E7%9A%84%E6%98%AF%EF%BC%8C%E4%B8%8B%E5%8D%95%E7%A7%92%E5%8F%91%E5%93%A6%EF%BC%81&summary=%E8%BF%99%E9%87%8C%E6%98%AF%E5%A2%99%EF%BC%8C%E5%9C%A8%E8%BF%99%E9%87%8C%EF%BC%8C%E4%BD%A0%E5%8F%AF%E4%BB%A5%E8%87%AA%E5%8A%A8%E4%B8%8B%E5%8D%95%EF%BC%8C%E5%8F%AF%E4%BB%A5%E6%A0%B9%E6%8D%AE%E4%B8%8D%E5%90%8C%E5%88%86%E7%B1%BB%E5%8F%91%E5%8D%95%E3%80%82%E6%9C%80%E9%87%8D%E8%A6%81%E7%9A%84%E6%98%AF%EF%BC%8C%E4%B8%8B%E5%8D%95%E7%A7%92%E5%8F%91%E5%93%A6%EF%BC%81&site=https://wall.chainwon.com/&pics=https://ws2.sinaimg.cn/large/007edEi9ly1g0gvwuc0gkj30cy0n441b.jpg"}},[e("div",{staticClass:"nexmoe-shortcut-icon"},[e("i",{staticClass:"nexmoefont icon-share"})]),this._v(" "),e("div",{staticClass:"nexmoe-shortcut-name"},[this._v("分享墙")])])}]};var _=n("VU/8")(p,f,!1,function(t){n("KxxN")},null,null).exports,g={name:"Category",components:{Item:v},data:function(){return{loading:!0,category:"",message:[{},{},{}]}},mounted:function(){var t=this;this.axios.get("/api/view/category/"+this.$route.params.id).then(function(e){t.message=e.data.message,t.loading=!1}).catch(function(t){console.log(t)})}},x={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"nexmoe-content"}},[n("div",{staticClass:"nexmoe-list"},[t.loading?n("content-placeholders",{staticClass:"nexmoe-item"},[n("content-placeholders-heading",{attrs:{img:!0}}),t._v(" "),n("content-placeholders-img"),t._v(" "),n("content-placeholders-text")],1):t._e(),t._v(" "),t.loading?n("content-placeholders",{staticClass:"nexmoe-item"},[n("content-placeholders-heading",{attrs:{img:!0}}),t._v(" "),n("content-placeholders-img"),t._v(" "),n("content-placeholders-text")],1):t._e(),t._v(" "),t.loading?n("content-placeholders",{staticClass:"nexmoe-item"},[n("content-placeholders-heading",{attrs:{img:!0}}),t._v(" "),n("content-placeholders-img"),t._v(" "),n("content-placeholders-text")],1):t._e(),t._v(" "),t._l(t.message,function(e){return t.loading?t._e():n("router-link",{key:e.time,attrs:{tag:"a",to:"/message/"+e.mid}},[t.loading?t._e():n("Item",{attrs:{item:e}})],1)})],2)])},staticRenderFns:[]};var E=n("VU/8")(g,x,!1,function(t){n("H96S")},null,null).exports,C={name:"Comment",props:["comment"],data:function(){return{}},methods:{ereply:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"本贴";this.$prompt("你正在回复："+n,"请输入评论内容",{confirmButtonText:"确定",cancelButtonText:"取消",inputPattern:/\S/,inputErrorMessage:"内容不可为空"}).then(function(n){var i=n.value;t.axios.post("/api/controller/reply/",{mid:t.$route.params.id,coid:e,text:i}).then(function(e){1==e.data.state?t.$alert(e.data.info,"发布成功！",{confirmButtonText:"确定",type:"success"}).then(function(){location.reload()}):t.$alert(e.data.info,"发布失败！",{confirmButtonText:"确定",type:"error"}).then(function(){2==e.data.state&&t.$router.push("/login")})}).catch(function(t){console.log(t)})}).catch(function(){t.$message({type:"info",message:"取消输入"})})}}},y={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",t._l(t.comment,function(e){return n("ul",{key:e.time},[n("li",[n("div",{staticClass:"nexmoe-author"},[n("div",{staticClass:"nexmoe-avatar"},[n("img",{attrs:{src:e.author.avatar}})]),t._v(" "),n("div",{staticClass:"nexmoe-name"},[t._v(t._s(e.author.name)+" "),"0"!==e.parent?n("span",[t._v("回复")]):t._e(),t._v(" "),n("a",[t._v(t._s(e.parent.name))])]),t._v(" "),n("div",{staticClass:"nexmoe-s"},[n("span",[t._v(t._s(e.time))]),t._v(" "),n("a",{on:{click:function(n){t.ereply(e.coid,e.author.name)}}},[t._v("回复")])])]),t._v(" "),n("div",{staticClass:"nexmoe-text"},[t._v("\n        "+t._s(e.text)+"\n      ")]),t._v(" "),n("Comment",{attrs:{comment:e.children}})],1)])}),0)},staticRenderFns:[]};var w={components:{Comment:n("VU/8")(C,y,!1,function(t){n("0B06")},null,null).exports,Item:v},data:function(){return{loading:!0,reply:"",item:{comment:{data:[{},{},{}]}}}},methods:{ereply:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"本贴";this.$prompt("你正在回复"+n,"请输入评论内容",{confirmButtonText:"确定",cancelButtonText:"取消",inputPattern:/\S/,inputErrorMessage:"内容不可为空"}).then(function(n){var i=n.value;t.axios.post("/api/controller/reply/",{mid:t.item.mid,coid:e,text:i}).then(function(e){1==e.data.state?t.$alert(e.data.info,"发布成功！",{confirmButtonText:"确定",type:"success"}).then(function(){location.reload()}):t.$alert(e.data.info,"发布失败！",{confirmButtonText:"确定",type:"error"}).then(function(){2==e.data.state&&t.$router.push("/login")})}).catch(function(t){console.log(t)})}).catch(function(){t.$message({type:"info",message:"取消输入"})})}},mounted:function(){var t=this;this.axios.get("/api/view/message/"+this.$route.params.id).then(function(e){t.item=e.data,t.loading=!1}).catch(function(t){console.log(t)})}},b={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"message",attrs:{id:"nexmoe-content"}},[t.loading?n("content-placeholders",{staticClass:"nexmoe-item"},[n("content-placeholders-heading",{attrs:{img:!0}}),t._v(" "),n("content-placeholders-img"),t._v(" "),n("content-placeholders-text")],1):t._e(),t._v(" "),t.loading?t._e():n("Item",{attrs:{item:t.item}}),t._v(" "),n("div",{staticClass:"nexmoe-comment"},[n("div",{staticClass:"nexmoe-tab"},[n("router-link",{attrs:{tag:"a",to:"/message/"+t.item.mid}},[t._v("评论 "+t._s(t.item.comment.count))])],1),t._v(" "),t._l(t.item.comment.data,function(e){return t.loading?n("ul",{key:e.time},[n("li",[n("content-placeholders",{staticClass:"nexmoe-item"},[n("content-placeholders-heading",{attrs:{img:!0}}),t._v(" "),n("content-placeholders-text",{attrs:{lines:1}})],1),t._v(" "),n("ul",[n("li",[n("content-placeholders",{staticClass:"nexmoe-item"},[n("content-placeholders-heading",{attrs:{img:!0}}),t._v(" "),n("content-placeholders-text",{attrs:{lines:1}})],1)],1)])],1)]):t._e()}),t._v(" "),n("Comment",{directives:[{name:"show",rawName:"v-show",value:!t.loading,expression:"!loading"}],attrs:{comment:t.item.comment.data}})],2),t._v(" "),n("div",{staticClass:"nexmoe-reply"},[n("el-button",{attrs:{type:"primary",icon:"nexmoefont icon-comment",circle:""},on:{click:function(e){t.ereply()}}})],1)],1)},staticRenderFns:[]};var B=n("VU/8")(w,b,!1,function(t){n("uloJ")},null,null).exports,$={name:"Edit",components:{Article:u},data:function(){return{edit:"",count:1,category:"",anonymous:!1,value:"2336",article:[],upload:!1,uploadimg:""}},created:function(){var t=this;this.axios.get("/api/view/user").then(function(e){0==e.data.state&&t.$router.push("/login")}).catch(function(t){console.log(t)}),this.axios.get("/api/view/category").then(function(e){t.category=e.data}).catch(function(t){console.log(t)})},methods:{handlePicSuccess:function(t,e){console.log(t),this.upload=!1,this.article.push({type:"img",text:t.large}),this.count++},beforePicUpload:function(t){this.upload=!0,this.uploadimg=URL.createObjectURL(t)},send:function(){var t=this;this.onSubmit(),this.axios.post("/api/controller/edit/",{category:this.value,article:this.article,anonymous:this.anonymous}).then(function(e){1==e.data.state?t.$alert(e.data.info,"发布成功！",{confirmButtonText:"确定",type:"success"}).then(function(){t.$router.push("/"),location.reload()}):t.$alert(e.data.info,"发布失败！",{confirmButtonText:"确定",type:"error"})}).catch(function(t){console.log(t)})},onSubmit:function(){if(""!=this.edit){if(/^.*(ht|f)tp(s?)\:\/\/www\.bilibili\.com\/video\/av.*\s$/.test(this.edit)){var t=this.edit.replace(/^.*(ht|f)tp(s?)\:\/\/www\.bilibili\.com\/video\/av([0-9]+).*(.|\n)$/,"$3");this.items=this.article.push({type:"bilibili",text:t})}else if(/^.*(ht|f)tp(s?)\:\/\/music\.163\.com\/song\/(.|\n)*$/.test(this.edit)){var e=this.edit.replace(/^.*(ht|f)tp(s?)\:\/\/music\.163\.com\/song\/([0-9]+)(.|\n)*$/,"$3");this.items=this.article.push({type:"music",text:"https://music.163.com/song?id="+e})}else if(/^.*(ht|f)tp(s?)\:\/\/www\.xiami\.com\/song\/(.|\n)*$/.test(this.edit)){e=this.edit.replace(/^.*(ht|f)tp(s?)\:\/\/www\.xiami\.com\/song\/([0-9]+)(.|\n)*$/,"$3");this.items=this.article.push({type:"music",text:"https://www.xiami.com/song/"+e})}else this.items=this.article.push({type:"p",text:this.edit});this.edit="",this.count++}}}},k={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"edit",attrs:{id:"nexmoe-content"}},[n("div",{staticClass:"nexmoe-item"},[n("div",{staticClass:"nexmoe-category"},[n("el-select",{attrs:{placeholder:"请选择"},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}},t._l(t.category,function(t){return n("el-option",{key:t.cid,attrs:{label:"# "+t.name,value:t.cid}})}),1)],1),t._v(" "),n("Article",{attrs:{article:t.article}}),t._v(" "),t.upload?n("p",{directives:[{name:"loading",rawName:"v-loading",value:t.upload,expression:"upload"}],staticStyle:{margin:"0"}},[n("img",{staticStyle:{width:"100%"},attrs:{src:t.uploadimg}})]):t._e()],1),t._v(" "),n("div",{staticClass:"nexmoe-item"},[n("el-input",{attrs:{type:"textarea",placeholder:"请输入内容"},model:{value:t.edit,callback:function(e){t.edit=e},expression:"edit"}}),t._v(" "),n("div",{staticClass:"nexmoe-tool"},[n("el-upload",{staticStyle:{float:"left"},attrs:{action:"/api/controller/picupload",accept:"image/*","before-upload":t.beforePicUpload,"on-success":t.handlePicSuccess,"show-file-list":!1,multiple:""}},[n("el-button",{attrs:{icon:"el-icon-picture-outline",circle:""}})],1),t._v(" "),n("el-button",{staticStyle:{float:"right"},attrs:{type:"primary"},on:{click:t.onSubmit}},[t._v("添加第 "+t._s(this.count)+" 条内容")])],1)],1),t._v(" "),n("el-switch",{staticStyle:{margin:"0 10px 10px 10px"},attrs:{"active-value":"true","inactive-value":"false","active-text":"匿名发布"},model:{value:t.anonymous,callback:function(e){t.anonymous=e},expression:"anonymous"}}),t._v(" "),n("el-button",{staticStyle:{width:"100%"},on:{click:t.send}},[t._v("发布")])],1)},staticRenderFns:[]};var A=n("VU/8")($,k,!1,function(t){n("0n1P")},null,null).exports,F={data:function(){return{input:""}},methods:{onSubmit:function(){var t=this;this.axios.post("/api/controller/cookie/",{qq:this.input}).then(function(e){1==e.data.state&&t.$router.push("/setting/home")}).catch(function(t){console.log(t)})}}},U={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"nexmoe-login"},[n("el-card",{attrs:{shadow:"never"}},[n("el-input",{attrs:{placeholder:"请输入QQ号登录"},model:{value:t.input,callback:function(e){t.input=e},expression:"input"}}),t._v(" "),n("br"),n("br"),t._v(" "),n("el-alert",{attrs:{title:"请输入QQ号登录",type:"warning","show-icon":"",closable:!1}}),t._v(" "),n("br"),t._v(" "),n("el-button",{staticStyle:{width:"100%"},on:{click:t.onSubmit}},[t._v("登录")])],1)],1)},staticRenderFns:[]};var S=n("VU/8")(F,U,!1,function(t){n("cWBs")},null,null).exports,q={data:function(){return{loading:!0,notice:[]}},mounted:function(){var t=this;this.axios.get("/api/view/notice").then(function(e){t.notice=e.data,t.loading=!1}).catch(function(t){console.log(t)})}},R={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"nexmoe-notice"},[t.loading?n("ul",{staticClass:"nexmoe-list"},[n("content-placeholders",[n("content-placeholders-heading",{attrs:{img:!0}})],1),t._v(" "),n("content-placeholders",[n("content-placeholders-heading",{attrs:{img:!0}})],1),t._v(" "),n("content-placeholders",[n("content-placeholders-heading",{attrs:{img:!0}})],1),t._v(" "),n("content-placeholders",[n("content-placeholders-heading",{attrs:{img:!0}})],1),t._v(" "),n("content-placeholders",[n("content-placeholders-heading",{attrs:{img:!0}})],1),t._v(" "),n("content-placeholders",[n("content-placeholders-heading",{attrs:{img:!0}})],1),t._v(" "),n("content-placeholders",[n("content-placeholders-heading",{attrs:{img:!0}})],1),t._v(" "),n("content-placeholders",[n("content-placeholders-heading",{attrs:{img:!0}})],1),t._v(" "),n("content-placeholders",[n("content-placeholders-heading",{attrs:{img:!0}})],1),t._v(" "),n("content-placeholders",[n("content-placeholders-heading",{attrs:{img:!0}})],1)],1):t._e(),t._v(" "),t.loading?t._e():n("ul",{staticClass:"nexmoe-list"},[n("div",{staticClass:"nexmoe-list-title"},[t._v("通知列表")]),t._v(" "),t._l(t.notice,function(e){return n("router-link",{key:e.time,attrs:{tag:"a",to:"/message/"+e.mid}},[n("li",{staticClass:"nexmoe-list-item"},[n("div",{staticClass:"nexmoe-list-item-avatar"},[n("img",{attrs:{src:"https://avatar.dawnlab.me/qq/776194970"}})]),t._v(" "),n("div",{staticClass:"nexmoe-list-item-content"},[n("div",{staticClass:"nexmoe-list-item-title"},[t._v(t._s(e.origin.author.name)+" 回复了你")]),t._v(" "),n("div",{staticClass:"nexmoe-list-item-text"},[t._v(t._s(e.origin.text))])])])])})],2)])},staticRenderFns:[]};var H=n("VU/8")(q,R,!1,function(t){n("b9HN")},"data-v-31bf20fa",null).exports,T={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"nexmoe-content"}},[e("router-view")],1)},staticRenderFns:[]};var V=n("VU/8")({name:"HelloWorld",data:function(){return{}}},T,!1,function(t){n("Y42d")},null,null).exports,D={name:"HelloWorld",data:function(){return{version:window.version,newversion:190212,item:{avatar:"https://avatar.dawnlab.me/qq/776194970",name:"折影轻梦"}}},created:function(){var t=this;this.axios.get("/api/view/user").then(function(e){t.item=e.data,0==t.item.state&&t.$router.push("/login")}).catch(function(t){console.log(t)})}},W={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"nexmoe-setting home"},[n("div",{staticClass:"nexmoe-user"},[n("div",{staticClass:"nexmoe-avatar"},[n("img",{attrs:{src:t.item.avatar}})]),t._v(" "),n("div",{staticClass:"nexmoe-name"},[t._v(t._s(t.item.name))]),t._v(" "),n("div",{staticClass:"nexmoe-bg"})]),t._v(" "),n("ul",[n("li",[n("router-link",{attrs:{tag:"a",to:"/setting/about"}},[n("i",{staticClass:"nexmoefont icon-infomation"}),t._v("关于程序")])],1),t._v(" "),t.version<t.newversion?n("li",[t._m(0)]):t._e(),t._v(" "),t.version?t._e():n("li",[t._m(1)])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("a",{attrs:{href:"https://one.chainwon.com/wall.chainwon.com.apk"}},[e("i",{staticClass:"nexmoefont icon-infomation"}),this._v("更新版本")])},function(){var t=this.$createElement,e=this._self._c||t;return e("a",{attrs:{href:"https://one.chainwon.com/wall.chainwon.com.apk"}},[e("i",{staticClass:"nexmoefont icon-infomation"}),this._v("下载安卓 APP")])}]};var I=n("VU/8")(D,W,!1,function(t){n("qdUC")},null,null).exports,P={name:"HelloWorld",data:function(){return{version:window.version}}},N={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"nexmoe-setting"},[t._m(0),t._v(" "),t._m(1),t._v(" "),n("ul",[t._m(2),t._v(" "),n("li",[t._v("版权协议：MIT")]),t._v(" "),t.version?n("li",[t._v("当前版本："+t._s(t.version))]):t._e()])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("作者名称：折影轻梦")]),this._v(" "),e("li",[this._v("联系企鹅：776194970")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("企鹅群聊：797996017")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("a",{attrs:{href:"https://github.com/nexmoe/wall-public",target:"_blank"}},[this._v("开源地址：github.com/nexmoe/wall-public")])])}]};var j=n("VU/8")(P,N,!1,function(t){n("/i/I")},"data-v-2d883697",null).exports;i.default.use(l.a);var z=new l.a({mode:"history",routes:[{path:"/",component:_,meta:{keepAlive:!0,title:"立德墙"}},{path:"/category/:id",component:E,meta:{keepAlive:!1,title:"立德墙"}},{path:"/edit",component:A,meta:{keepAlive:!1,title:"立德墙"}},{path:"/edit/:id",component:A,meta:{keepAlive:!1,title:"立德墙"}},{path:"/message/:id",component:B,meta:{keepAlive:!1,title:"立德墙"}},{path:"/login",component:S,meta:{keepAlive:!1,title:"登录"}},{path:"/notice",component:H,meta:{keepAlive:!1,title:"通知"}},{path:"/setting",component:V,meta:{keepAlive:!0,title:"立德墙"},children:[{path:"home",component:I},{path:"about",component:j}]}]}),L={name:"App",components:{Nav:r,Header:o}};z.beforeEach(function(t,e,n){if(t.meta.title){var i=t.meta.title;document.title=i}setTimeout(function(){!function(){document.getElementById("baidu_tj")&&document.getElementById("baidu_tj").remove();var t=document.createElement("script");t.src="https://hm.baidu.com/hm.js?41b04999ee3d67f2acc9ce741045e68d",t.id="baidu_tj";var e=document.getElementsByTagName("script")[0];e.parentNode.insertBefore(t,e)}()},0),n()}),"serviceWorker"in navigator&&window.addEventListener("load",function(){navigator.serviceWorker.register("/service-wroker.js").then(function(t){console.log("SW registered: ",t)}).catch(function(t){console.log("SW registration failed: ",t)})});var M={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("Header"),t._v(" "),n("keep-alive",[t.$route.meta.keepAlive?n("router-view"):t._e()],1),t._v(" "),t.$route.meta.keepAlive?t._e():n("router-view"),t._v(" "),"/message/:id"!==t.$route.matched[0].path&&"/edit"!==t.$route.matched[0].path?n("Nav"):t._e()],1)},staticRenderFns:[]};var O=n("VU/8")(L,M,!1,function(t){n("GfiW")},null,null).exports,Q=(n("Xcu2"),n("zL8q")),Y=n.n(Q),J=n("mtWM"),G=n.n(J),K=n("Rf8U"),X=n.n(K),Z=n("cTzj"),tt=n.n(Z),et=n("3It0");i.default.use(Y.a),G.a.defaults.headers.post["Content-Type"]="application/x-www-form-urlencoded",i.default.prototype.$axios=G.a,i.default.use(et.default),i.default.use(tt.a),i.default.use(Y.a),i.default.use(X.a,G.a),new i.default({el:"#app",router:z,render:function(t){return t(O)}})},OHFd:function(t,e){},Xcu2:function(t,e){},Y42d:function(t,e){},YL8B:function(t,e){},b9HN:function(t,e){},cWBs:function(t,e){},"h+Pb":function(t,e){},mUoS:function(t,e){},qdUC:function(t,e){},uloJ:function(t,e){}},["NHnr"]);