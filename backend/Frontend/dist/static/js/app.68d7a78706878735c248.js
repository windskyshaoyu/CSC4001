webpackJsonp([1],{"7xtl":function(t,e){},Fm1X:function(t,e){},MJai:function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r={};n.d(r,"increment",function(){return q}),n.d(r,"decrement",function(){return B});var a={};n.d(a,"getCount",function(){return G});var o=n("7+uW"),s={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("transition",{attrs:{name:"fade",mode:"out-in"}},[e("keep-alive",[e("router-view")],1)],1)],1)},staticRenderFns:[]};var i=n("VU/8")({name:"App",components:{}},s,!1,function(t){n("swbr")},null,null).exports,l=n("/ocq"),c=n("mvHQ"),u=n.n(c),d=n("mtWM"),p=n.n(d),m=function(t){return p.a.post("/getAllOrders/",t).then(function(t){return t.data})},f=n("mw3O"),h=n.n(f),v={data:function(){return{logining:!1,ruleForm2:{},rules2:{account:[{required:!0,message:"请输入账号",trigger:"blur"}],checkPass:[{required:!0,message:"请输入密码",trigger:"blur"}]},checked:!0}},methods:{handleReset2:function(){this.$refs.ruleForm2.resetFields()},handleSubmit:function(t){var e=this;this.$refs.ruleForm2.validate(function(t){if(!t)return console.log("error submit!!"),!1;e.logining=!0;var n,r={user_name:e.ruleForm2.username,password:e.ruleForm2.password,identifycode:e.ruleForm2.identifycode};r=h.a.stringify(r),(n=r,p.a.post("/login/",n).then(function(t){return t.data})).then(function(t){e.logining=!1;var n=t.msg,r=t.code,a=t.status_code,o=t.user;console.log(o),200!==r?e.$message.error("Server Error"):0===a?(sessionStorage.setItem("user",u()(o)),e.$router.push({path:"/homepage"})):e.$message.error(n)})})},refreshcode:function(){var t=this;this.uuid=this.getuuid();var e,n={code:this.ruleForm2.identifycode};(e=n,p.a.post("/refreshcode",e).then(function(t){return t.data})).then(function(e){t.imgUrl=serverUrl+""+t.uuid}).catch(function(e){t.$message({message:"服务器请求出错，请重试！",type:"error"})})},forgetpassword:function(){this.$alert("请联系管理员找回密码，管理员电话：xxxxxxxx","提示",{confirmButtonText:"确定",type:"warning"})},register:function(){this.$router.push("/register")}}},g={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"login-container"},[n("br"),t._v(" "),n("el-form",{ref:"ruleForm2",staticClass:"demo-ruleForm login-page",attrs:{model:t.ruleForm2,rules:t.rules2,"status-icon":"","label-position":"left","label-width":"0px"}},[n("h3",{staticClass:"title"},[t._v("登录平台")]),t._v(" "),n("el-form-item",{attrs:{prop:"username"}},[n("el-input",{attrs:{type:"text","auto-complete":"off",placeholder:"用户名"},model:{value:t.ruleForm2.username,callback:function(e){t.$set(t.ruleForm2,"username",e)},expression:"ruleForm2.username"}})],1),t._v(" "),n("el-form-item",{attrs:{prop:"password"}},[n("el-input",{attrs:{type:"password","auto-complete":"off",placeholder:"密码"},model:{value:t.ruleForm2.password,callback:function(e){t.$set(t.ruleForm2,"password",e)},expression:"ruleForm2.password"}})],1),t._v(" "),n("el-form-item",{staticStyle:{width:"100%"}},[n("el-button",{staticStyle:{width:"100%"},attrs:{type:"primary",loading:t.logining},on:{click:t.handleSubmit}},[t._v("登录\n            ")])],1),t._v(" "),n("el-form-item",[n("el-checkbox",{staticClass:"rememberme",model:{value:t.checked,callback:function(e){t.checked=e},expression:"checked"}},[t._v("记住密码\n            ")]),t._v(" "),n("el-button",{attrs:{type:"text"},on:{click:t.forgetpassword}},[t._v("忘记密码")]),t._v(" "),n("div",{attrs:{id:"register"}},[n("div",{staticClass:"align"},[n("p",[t._v("没有密码？")])]),t._v(" "),n("div",{staticClass:"align"},[n("el-button",{attrs:{type:"text"},on:{click:t.register}},[t._v("注册")])],1)])],1)],1)],1)},staticRenderFns:[]};var _=n("VU/8")(v,g,!1,function(t){n("MJai")},"data-v-0ddeb60b",null).exports,b={data:function(){return{sysName:"WorkPanel",sysUserName:"",sysUserAvatar:"",form:{name:"",region:"",date1:"",date2:"",delivery:!1,type:[],resource:"",desc:""}}},methods:{logout:function(){var t=this;this.$confirm("确认退出吗?","提示",{}).then(function(){sessionStorage.removeItem("user"),t.$router.push("/login")}).catch(function(){})},handleSelect:function(t,e){console.log(t,e)}},mounted:function(){var t=sessionStorage.getItem("user");t&&(t=JSON.parse(t),this.sysUserName=t.name||"",this.sysUserAvatar=t.avatar||"")}},y={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("el-row",{staticClass:"container"},[n("el-col",{staticClass:"header",attrs:{span:24}},[n("el-col",{staticClass:"logo",attrs:{span:18}},[t._v("\n                "+t._s(t.sysUserName+"'s  "+t.sysName)+"\n\t\t\t")]),t._v(" "),n("el-col",{staticClass:"userinfo",attrs:{span:4}},[n("el-dropdown",{attrs:{trigger:"hover"}},[n("span",{staticClass:"el-dropdown-link userinfo-inner"},[n("img",{attrs:{src:this.sysUserAvatar}}),t._v(" "+t._s(t.sysUserName))]),t._v(" "),n("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[n("el-dropdown-item",[t._v("我的消息")]),t._v(" "),n("el-dropdown-item",[t._v("设置")]),t._v(" "),n("el-dropdown-item",{nativeOn:{click:function(e){return t.logout(e)}}},[t._v("退出登录")])],1)],1)],1)],1),t._v(" "),n("el-col",{staticClass:"main",attrs:{span:24}},[n("aside",[n("el-menu",{staticClass:"el-menu el-menu-vertical-demo",attrs:{"default-active":t.$route.path,"unique-opened":"",router:""}},[t._l(t.$router.options.routes,function(e,r){return[e.hidden?t._e():[e.leaf?t._e():n("el-submenu",{key:r,attrs:{index:r+""}},[n("template",{slot:"title"},[n("i",{class:e.iconCls}),t._v(t._s(e.name))]),t._v(" "),t._l(e.children,function(e){return n("el-menu-item",{key:e.path,attrs:{index:e.path}},[e.hidden?t._e():[t._v("\n\t\t\t\t\t\t\t\t\t\t"+t._s(e.name)+"\n\t\t\t\t\t\t\t\t\t")]],2)})],2),t._v(" "),e.leaf&&e.children.length>0?[n("el-menu-item",{key:r,attrs:{index:e.children[0].path}},[n("i",{class:e.iconCls}),t._v(t._s(e.children[0].name))])]:t._e()]]})],2)],1),t._v(" "),n("section",{staticClass:"content-container"},[n("div",{staticClass:" bg-purple-light"},[n("el-col",{staticClass:"grid-content",attrs:{span:24}}),t._v(" "),n("el-col",{staticClass:"grid-content",attrs:{span:24}},[n("transition",{attrs:{name:"fade",mode:"out-in"}},[n("router-view")],1)],1)],1)])])],1)},staticRenderFns:[]};var x=n("VU/8")(b,y,!1,function(t){n("dAX3")},"data-v-753e6604",null).exports,C={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("el-container",[n("div",{attrs:{id:"upper"}},[n("el-header",{attrs:{id:"header1"}},[n("el-row",{attrs:{type:"flex",id:"Navigator"}},[n("el-col",{attrs:{span:3}},[n("div",[n("span",{attrs:{id:"We"}},[t._v("We")]),n("span",{attrs:{id:"Trans"}},[t._v("Trans")])])]),t._v(" "),n("el-col",{attrs:{span:2,push:"10"}},[n("el-button",{attrs:{type:"text"},on:{click:t.goHome}},[t._v("Home")])],1),t._v(" "),n("el-col",{attrs:{span:2,push:"10"}},[n("el-button",{attrs:{type:"text"},on:{click:t.goMarket}},[t._v("Market")])],1),t._v(" "),n("el-col",{attrs:{span:2,push:"10"}},[n("el-button",{attrs:{type:"text"},on:{click:t.goPanel}},[t._v("Panel")])],1),t._v(" "),n("el-col",{attrs:{span:2,push:"10"}},[n("el-button",{attrs:{type:"text"},on:{click:t.goUpload}},[t._v("Upload")])],1)],1)],1),t._v(" "),n("div",{attrs:{id:"mask"}},[n("el-container",{attrs:{id:"container1"}},[n("el-header",[n("el-container",{attrs:{id:"intro"}},[n("div",{staticClass:"intro-text"},[n("el-header",[n("div",{attrs:{id:"intro2"}},[n("div",{attrs:{id:"intro1"}},[t._v("Get together, translate together")]),t._v(" "),n("h2",[t._v("BEST ONLINE PLATFORM"),n("br"),t._v("FOR TRANSLATION COLLABORATION")])]),t._v(" "),n("div",{attrs:{id:"intro3"}},[n("p",[t._v("Experience the most convenient and economic solution of translation with our\n                                        amazing online platform WeTrans")])]),t._v(" "),n("el-button",{attrs:{type:"success",round:"true"},on:{click:t.goLogin}},[t._v("Go Explore more")])],1)],1)])],1),t._v(" "),n("el-footer")],1)],1)],1),t._v(" "),n("el-footer",{attrs:{id:"page_footer"}},[n("el-row",{attrs:{gutter:"40",id:"bottom"}},[n("el-col",{staticClass:"grid-content",attrs:{span:8}},[n("div",[n("div",{staticClass:"function"},[n("i",{staticClass:"el-icon-user-solid"}),t._v(" "),n("h3",[t._v("Personal Center")]),t._v(" "),n("p",{staticClass:"icon-intro"},[t._v("Go to your personal center and check orders you've uploaded or undertaken")]),t._v(" "),n("el-link",{attrs:{href:"/#/homepage"}},[t._v("Go Now"),n("i",{staticClass:"el-icon-position el-icon--right"})])],1)])]),t._v(" "),n("el-col",{staticClass:"grid-content",attrs:{span:8}},[n("div",{attrs:{id:"border"}},[n("div",{staticClass:"function"},[n("i",{staticClass:"el-icon-s-order"}),t._v(" "),n("h3",[t._v("Market")]),t._v(" "),n("p",{staticClass:"icon-intro"},[t._v("Browse available translation orders and check out what's new on our market")]),t._v(" "),n("el-link",{attrs:{href:"/#/market"}},[t._v("Go Now"),n("i",{staticClass:"el-icon-position el-icon--right"})])],1)])]),t._v(" "),n("el-col",{staticClass:"grid-content",attrs:{span:8}},[n("div",[n("div",{staticClass:"function"},[n("i",{staticClass:"el-icon-upload"}),t._v(" "),n("h3",[t._v("Create Order")]),t._v(" "),n("p",{staticClass:"icon-intro"},[t._v("Create your own translation request and submit it to our market")]),t._v(" "),n("el-link",{attrs:{href:"/#/upload_task"}},[t._v("Go Now"),n("i",{staticClass:"el-icon-position el-icon--right"})])],1)])])],1)],1)],1)},staticRenderFns:[]};var w,k=n("VU/8")({name:"temp",methods:{goLogin:function(){this.$router.push({path:"/login"})},goHome:function(){this.$router.push({path:"/homepage"})},goMarket:function(){this.$router.push({path:"/market"})},goPanel:function(){this.$router.push({path:"/panel"})},goUpload:function(){this.$router.push({path:"/upload_task"})}}},C,!1,function(t){n("7xtl")},"data-v-100c7ad6",null).exports,F=n("bOdI"),$=n.n(F),S={data:function(){return{tableData:[],orderData:[],currentRow:null,user:null,percentage:10,colors:[{color:"#f56c6c",percentage:20},{color:"#e6a23c",percentage:40},{color:"#5cb87a",percentage:60},{color:"#1989fa",percentage:80},{color:"#6f7ad3",percentage:100}],imgUrl:null,name:null,phone:null,email:null,gender:null,job:null,university:null,infoData:[{info:"Name",detail:"admin"},{info:"Phone",detail:"13682129982"},{info:"Email",detail:"111010010@link.cuhk.edu.cn"},{info:"Gender",detail:"male"},{info:"Job",detail:"student"},{info:"University",detail:"The Chinese University of Hong Kong, Shenzhen"}]}},mounted:function(){this.setUserInfo(),this.getJobs(),this.getOrders()},methods:(w={handleClick:function(t){console.log(t)},setCurrent:function(t){this.$refs.singleTable.setCurrentRow(t)},handleCurrentChange:function(t){this.currentRow=t},completeOrder:function(t,e){var n,r=this,a={oid:e[t].oid,uid:this.uid};a=h.a.stringify(a),(n=a,p.a.post("/completeOneOrder/",n).then(function(t){return t.data})).then(function(t){var e=t.msg,n=t.code,a=t.orders;200!==n?r.$message({message:e,type:"error"}):that.orderData=a})},continue_editing:function(t,e){var n=e[t].jid;this.$router.push({name:"Panel",params:{id:n}})},setUserInfo:function(){var t=sessionStorage.getItem("user");t=JSON.parse(t),this.imgUrl=t.avatar,this.uid=t.uid,this.name=t.user_name,this.phone=t.phone,this.email=t.email,this.gender=t.gender,this.job=t.job,this.university=t.university},handleEditInfo:function(t,e){this.infoData[t]=!0,this.infoData[t]=!0,this.$set(this.infoData,e,!0),this.$set(this.infoData,e,!0)},handleSaveInfo:function(t,e){this.infoData[t]=!1,this.infoData[t]=!1},getOrders:function(){var t,e=this,n=this,r={user_id:this.uid};r=h.a.stringify(r),(t=r,p.a.post("/getPostedOrders/",t).then(function(t){return t.data})).then(function(t){var r=t.msg,a=t.code,o=t.orders;200!==a?e.$message({message:r,type:"error"}):n.orderData=o})},getJobs:function(){var t,e=this,n=this,r={user_id:this.uid};r=h.a.stringify(r),(t=r,p.a.post("/getAllJobs/",t).then(function(t){return t.data})).then(function(t){var r=t.msg,a=t.code,o=t.jobs;200!==a?e.$message({message:r,type:"error"}):n.tableData=o})}},$()(w,"continue_editing",function(t,e){var n=e[t].jid;this.$router.push({name:"Panel",params:{id:n}})}),$()(w,"filterHandler",function(t,e,n){return e[n.property]===t}),$()(w,"handleAvatarSuccess",function(t,e){this.imgUrl=URL.createObjectURL(e.raw)}),$()(w,"beforeAvatarUpload",function(t){var e="image/jpeg"===t.type,n=t.size/1024/1024<2;return e||this.$message.error("上传头像图片只能是 JPG 格式!"),n||this.$message.error("上传头像图片大小不能超过 2MB!"),e&&n}),w)},O={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("el-row",[n("el-row",[n("el-upload",{staticClass:"avatar-uploader",attrs:{action:"https://jsonplaceholder.typicode.com/posts/","show-file-list":!1,"on-success":t.handleAvatarSuccess,"before-upload":t.beforeAvatarUpload}},[t.imgUrl?n("img",{staticClass:"avatar",attrs:{src:t.imgUrl}}):n("i",{staticClass:"el-icon-plus avatar-uploader-icon"})]),t._v(" "),n("el-upload",{staticClass:"avatar-uploader",attrs:{action:"https://jsonplaceholder.typicode.com/posts/","show-file-list":!1,"on-success":t.handleAvatarSuccess,"before-upload":t.beforeAvatarUpload}},[n("el-button",{attrs:{type:"primary"}},[t._v("Click to Change")])],1)],1)],1),t._v(" "),n("el-row",[n("p",{staticStyle:{"font-size":"18px"}},[t._v("Basic Information")])]),t._v(" "),n("el-row"),t._v(" "),n("el-row",[n("el-table",{staticStyle:{width:"100%"},attrs:{data:t.infoData}},[n("el-table-column",{attrs:{prop:"info",label:"Information",width:"180"}}),t._v(" "),n("el-table-column",{attrs:{prop:"detail",label:"Detail",width:"180"}}),t._v(" "),n("el-table-column",{attrs:{label:"Operations"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-button",{attrs:{size:"mini"},on:{click:function(n){return t.handleEditInfo(e.$index,e.row)}}},[t._v("Edit")]),t._v(" "),n("el-button",{attrs:{size:"mini",type:"success"},on:{click:function(n){return t.handleSaveInfo(e.$index,e.row)}}},[t._v("Save")])]}}])})],1)],1),t._v(" "),n("el-row",[n("p",{staticStyle:{"font-size":"18px"}},[t._v("My Job List")])]),t._v(" "),n("el-row",[n("el-table",{staticStyle:{width:"100%"},attrs:{data:t.tableData,border:"","max-height":"250","highlight-current-row":""},on:{"current-change":t.handleCurrentChange}},[n("el-table-column",{attrs:{prop:"date",label:"Accept Date",sortable:"",width:"180","column-key":"date",filters:[],"filter-method":t.filterHandler}}),t._v(" "),n("el-table-column",{attrs:{prop:"ddl",label:"DDL",sortable:"",width:"180","column-key":"ddl",filters:[],"filter-method":t.filterHandler}}),t._v(" "),n("el-table-column",{attrs:{prop:"title",label:"Title",width:"120"}}),t._v(" "),n("el-table-column",{attrs:{prop:"abstract",label:"Abstract",width:"200"}}),t._v(" "),n("el-table-column",{attrs:{prop:"fee",label:"Fee",width:"120"}}),t._v(" "),n("el-table-column",{attrs:{prop:"status",label:"Status",width:"120"}}),t._v(" "),n("el-table-column",{attrs:{fixed:"right",label:"Operation"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-button",{attrs:{type:"text",size:"small"},on:{click:function(n){return t.continue_editing(e.$index,t.tableData)}}},[t._v("继续编辑")])]}}])})],1)],1),t._v(" "),n("el-row",[n("p",{staticStyle:{"font-size":"18px"}},[t._v("My Order List")]),t._v(" "),n("el-col")],1),t._v(" "),n("el-row",[n("el-table",{staticStyle:{width:"100%"},attrs:{data:t.orderData,border:"","max-height":"250","highlight-current-row":""},on:{"current-change":t.handleCurrentChange}},[n("el-table-column",{attrs:{prop:"ddl",label:"DDL",sortable:"",width:"180","column-key":"ddl",filters:[],"filter-method":t.filterHandler}}),t._v(" "),n("el-table-column",{attrs:{prop:"title",label:"Title",width:"120"}}),t._v(" "),n("el-table-column",{attrs:{prop:"abstract",label:"Abstract",width:"200"}}),t._v(" "),n("el-table-column",{attrs:{prop:"fee",label:"Fee",width:"120"}}),t._v(" "),n("el-table-column",{attrs:{prop:"order_completed",label:"Order Completed?",width:"120"}}),t._v(" "),n("el-table-column",{attrs:{prop:"Job_completed",label:"Job Completed?",width:"120"}}),t._v(" "),n("el-table-column",{attrs:{fixed:"right",label:"Operation"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-button",{attrs:{type:"text",size:"small"},on:{click:function(n){return t.handleCheck(e.row)}}},[t._v("Check Translated Text")]),t._v(" "),n("el-button",{attrs:{type:"text",size:"small"},on:{click:function(n){return t.completeOrder(e.$index,t.orderData)}}},[t._v("Finish Order")])]}}])})],1)],1)],1)},staticRenderFns:[]};var E=n("VU/8")(S,O,!1,function(t){n("jhA3")},"data-v-44b9835b",null).exports,T={data:function(){return{text:"",allCards:[],cards:[],ptr:0}},mounted:function(){this.getAllOrders()},methods:{getAllOrders:function(){var t=this;m(null).then(function(e){t.allCards=e.orders,t.cards=t.allCards.slice(t.ptr,t.ptr+12),t.ptr=0})},nextPage:function(){this.ptr+12<this.allCards.length&&(this.ptr=this.ptr+12,this.cards=this.allCards.slice(this.ptr,this.ptr+12))},lastPage:function(){this.ptr-12>=0&&(this.ptr=this.ptr-12,this.cards=this.allCards.slice(this.ptr,this.ptr+12))},change:function(){this.ptr=(this.ptr+60)%this.allCards.length,this.cards=this.allCards.slice(this.ptr,this.ptr+12)},search:function(){var t=this;if(""==this.text)return this.getAllOrders(),void console.log("Empty Search");m(null).then(function(e){t.allCards=e.orders,t.allCards=t.allCards.filter(function(e){return e.abstract.match(t.text)}),t.ptr=0,t.cards=t.allCards.slice(t.ptr,t.ptr+12)})},onConfirm:function(t){var e,n=this,r=sessionStorage.getItem("user"),a={oid:t,uid:(r=JSON.parse(r)).uid};console.log(a),a=h.a.stringify(a),console.log("flag1"),(e=a,p.a.post("/takeOneOrder/",e).then(function(t){return t.data})).then(function(t){console.log("flag1.5");var e=t.code,r=t.msg,a=(t.jid,t.status_code);console.log("flag2"),200!==e?(n.$message.error("Server Error"),console.log("flag3")):0===a?(n.$message(r),console.log("flag3.0"),n.$router.push({name:"HomePage"}),console.log("flag3.1")):(n.$message.error(r),console.log("flag3.2"))})}}},N={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("el-row",[n("el-col",{attrs:{span:8}},[n("el-input",{staticStyle:{width:"100%"},attrs:{type:"input",placeholder:"输入搜索内容",maxlength:"10","show-word-limit":""},model:{value:t.text,callback:function(e){t.text=e},expression:"text"}})],1),t._v(" "),n("el-col",{attrs:{span:8}},[n("el-button",{attrs:{type:"primary",icon:"el-icon-search"},on:{click:function(e){return t.search()}}},[t._v("搜索")])],1),t._v(" "),n("el-col",{attrs:{span:8}},[n("el-button-group",[n("el-button",{attrs:{type:"primary",icon:"el-icon-arrow-left"},on:{click:function(e){return t.lastPage()}}},[t._v("上一页")]),t._v(" "),n("el-button",{attrs:{type:"primary"},on:{click:function(e){return t.nextPage()}}},[t._v("下一页"),n("i",{staticClass:"el-icon-arrow-right el-icon--right"})]),t._v(" "),n("el-button",{attrs:{type:"primary",icon:"el-icon-refresh-left"},on:{click:function(e){return t.change()}}},[t._v("换一批")])],1)],1)],1),t._v(" "),n("el-row",t._l(t.cards,function(e){return n("el-col",{key:e,attrs:{span:8}},[n("el-card",{staticClass:"box-card",attrs:{shadow:"hover"}},[n("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[n("span",[t._v(t._s(e.title))]),t._v(" "),n("el-popconfirm",{attrs:{title:"确定接单？"},on:{onConfirm:function(n){return t.onConfirm(e.oid)}}},[n("el-button",{staticStyle:{float:"right",padding:"3px 0"},attrs:{slot:"reference",type:"text"},slot:"reference"},[t._v("接单!")])],1)],1),t._v(" "),n("div",[t._v("\n          "+t._s(e.abstract)+"\n      ")]),t._v(" "),n("div",[t._v("\n          报酬:"+t._s(e.fee)+"元\n      ")]),t._v(" "),n("div",[t._v("\n          DDL:"+t._s(e.ddl)+"\n      ")]),t._v(" "),t._l(e.tags,function(e){return n("el-tag",{key:e},[t._v("\n          "+t._s(e)+"\n        ")])})],2)],1)}),1)],1)},staticRenderFns:[]};var U=n("VU/8")(T,N,!1,function(t){n("vtEn")},null,null).exports,A={data:function(){return{fee:"",ddl:null,date:null,ori_lang:"EN",ore_lang:"",title:"",content:"",translated_content:"",translated_title:"",font_size:30,langs:["auto","eu","zh-cn"]}},mounted:function(){this.getOneJob()},methods:{save:function(){var t,e=this,n={job_id:this.id,translated_title:this.translated_title,translated_content:this.translated_content};n=h.a.stringify(n),(t=n,p.a.post("/postOneJob/",t).then(function(t){return t.data})).then(function(t){var n=t.code,r=t.msg;t.status_code;200!==n?e.$message({message:r,type:"error"}):e.$message(r)})},complete:function(){paras={uid:2,oid:1}},handleClick:function(t){console.log(t)},mc_trans:function(){translate(this.content,{to:"en"}).then(function(t){console.log(t.text),console.log(t.from.language.iso)}).catch(function(t){console.error(t)})},clear:function(){this.translated_content=""},getOneJob:function(){var t=this;this.id=this.$route.params.id,console.log(this.$route);var e,n={job_id:this.id};n=h.a.stringify(n),(e=n,p.a.post("/getOneJob/",e).then(function(t){return t.data})).then(function(e){var n=e.msg,r=e.code,a=e.one_job;if(200!==r)t.$message({message:n,type:"error"});else{var o=a.ori_lang,s=a.ore_lang,i=(a.abstract,a.content),l=a.date,c=a.ddl,u=a.fee,d=a.title,p=a.translated_title,m=a.translated_content;t.title=d,t.content=i,t.translated_title=p,t.translated_content=m,t.fee=u,t.ddl=c,t.date=l,t.ori_lang=o,t.ore_lang=s}})}}},D={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",[n("span",[t._v(t._s(t.ori_lang)+"   ")]),t._v("To"),n("span",[t._v("  "+t._s(t.ore_lang))]),t._v(" "),n("el-divider",{attrs:{direction:"vertical"}}),t._v(" "),n("span",[t._v("fee:"+t._s(t.fee))]),t._v(" "),n("el-divider",{attrs:{direction:"vertical"}}),t._v(" "),n("span",{staticStyle:{color:"#FF0000"}},[t._v("DDL:"+t._s(t.ddl))])],1),t._v(" "),n("el-divider",[n("i",{staticClass:"el-icon-edit"})]),t._v(" "),n("el-row",{attrs:{gutter:40}},[n("el-col",{attrs:{span:8}},[n("div",{staticStyle:{"font-size":"30px"}},[t._v("\n            Title:\n          ")]),t._v(" "),n("div",{staticClass:"tx-title",style:{"font-size":t.font_size+"px"}},[t._v("\n              "+t._s(t.title)+"\n            ")]),t._v(" "),n("div",{staticStyle:{"font-size":"30px"}},[t._v("\n            Content:\n          ")]),t._v(" "),n("div",{staticClass:"tx-back wrap",style:{"font-size":t.font_size+"px"}},[t._v("\n              "+t._s(t.content)+"\n            ")]),t._v(" "),n("div",{staticClass:"block"},[n("div",[t._v("Font Size")]),t._v(" "),n("el-slider",{attrs:{"show-input":""},model:{value:t.font_size,callback:function(e){t.font_size=e},expression:"font_size"}})],1)]),t._v(" "),n("el-col",{attrs:{span:12}},[n("div",{staticClass:"grid-content"},[n("div",{staticStyle:{"font-size":"30px"}},[t._v("\n                Translated Title:\n              ")]),t._v(" "),n("el-input",{attrs:{type:"textarea",autosize:"",placeholder:"标题内容"},model:{value:t.translated_title,callback:function(e){t.translated_title=e},expression:"translated_title"}}),t._v(" "),n("div",{staticStyle:{"font-size":"30px"}},[t._v("\n                Translated Content:\n              ")]),t._v(" "),n("div",{staticStyle:{margin:"20px 0"}}),t._v(" "),n("el-input",{attrs:{type:"textarea",autosize:{minRows:20,maxRows:27},placeholder:"文本内容"},model:{value:t.translated_content,callback:function(e){t.translated_content=e},expression:"translated_content"}}),t._v(" "),n("el-row",[n("el-button",{attrs:{type:"primary",icon:"el-icon-upload"},on:{click:function(e){return t.save()}}},[t._v("保存")]),t._v(" "),n("el-button",{attrs:{type:"primary",icon:"el-icon-upload"},on:{click:function(e){return t.complete()}}},[t._v("完成翻译")]),t._v(" "),n("el-button",{attrs:{type:"primary",icon:"el-icon-search"},on:{click:function(e){return t.clear()}}},[t._v("清屏")])],1)],1)])],1)],1)},staticRenderFns:[]};var R=n("VU/8")(A,D,!1,function(t){n("Fm1X")},"data-v-30683e68",null).exports,z=n("Dd8w"),P=n.n(z),I={name:"importTxt",data:function(){return{files:null,form_o:{title:"",ori_lang:"",ore_lang:"",ddl:"",tags:[],content:"",abstract:"",fee:0},form:{title:"",ori_lang:"",ore_lang:"",ddl:"",tags:[],content:"",abstract:"",fee:0},dynamicTags:["news","tourism","en"],inputVisible:!1,inputValue:""}},methods:{resetPage:function(){var t=P()({},this.form_o);this.form=t},onSubmit:function(){var t,e=this,n=sessionStorage.getItem("user"),r=(n=JSON.parse(n)).uid,a=this.form;a.uid=r,a.tags=this.dynamicTags.join(";"),a=h.a.stringify(a),(t=a,p.a.post("/createAnOrder/",t).then(function(t){return t.data})).then(function(t){var n=t.msg,r=t.code,a=t.status_code,o=t.oid;200!==r?e.$message.error("Server Error"):0===a?(e.$message({message:n+", oid:"+o,type:"success"}),e.$router.push({name:"HomePage"})):e.$message.error(n)})},handleClose:function(t){this.dynamicTags.splice(this.dynamicTags.indexOf(t),1)},showInput:function(){var t=this;this.inputVisible=!0,this.$nextTick(function(e){t.$refs.saveTagInput.$refs.input.focus()})},handleInputConfirm:function(){var t=this.inputValue;t&&this.dynamicTags.push(t),this.inputVisible=!1,this.inputValue=""},cal_fee:function(t){this.form.fee=.06*t},inFile:function(t){if(this.files=(t.target||t.srcElement).files,this.files&&this.files.length)for(var e=0,n=this.files.length;e<n;e++)this.read(this.files[e])},elInFile:function(t,e){this.read(t.raw)},read:function(t){var e=this,n=new FileReader;n.onload=function(t){var r=n.reading({encode:"UTF-8"});e.form.content+="\n",e.form.content+=r,e.cal_fee(e.form.content.length)},n.readAsBinaryString(t)}},beforeCreate:function(){FileReader.prototype.reading=function(){var t=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:pms).encode,e=new Uint8Array(this.result);return new TextDecoder(t||"UTF-8").decode(e)},FileReader.prototype.readAsBinaryString=function(t){var e=this;this.onload||(this.onload=function(t){var n=e.reading();e.content=n}),this.readAsArrayBuffer(t)}}},J={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",[n("el-form",{ref:"form",attrs:{model:t.form,"label-width":"120px"}},[n("el-form-item",{attrs:{label:"Original Language"}},[n("el-select",{attrs:{placeholder:"Original Language"},model:{value:t.form.ori_lang,callback:function(e){t.$set(t.form,"ori_lang",e)},expression:"form.ori_lang"}},[n("el-option",{attrs:{label:"EN",value:"EN"}}),t._v(" "),n("el-option",{attrs:{label:"CN",value:"CN"}})],1)],1),t._v(" "),n("el-form-item",{attrs:{label:"Oriented Language"}},[n("el-select",{attrs:{placeholder:"Oriented Language"},model:{value:t.form.ore_lang,callback:function(e){t.$set(t.form,"ore_lang",e)},expression:"form.ore_lang"}},[n("el-option",{attrs:{label:"EN",value:"EN"}}),t._v(" "),n("el-option",{attrs:{label:"CN",value:"CN"}})],1)],1),t._v(" "),n("el-form-item",{attrs:{label:"DDL"}},[n("el-date-picker",{attrs:{type:"datetime",placeholder:"Choose Suitable DDl"},model:{value:t.form.ddl,callback:function(e){t.$set(t.form,"ddl",e)},expression:"form.ddl"}})],1),t._v(" "),n("el-form-item",{attrs:{label:"Customized Tags"}},[t._l(t.dynamicTags,function(e){return n("el-tag",{key:e,attrs:{closable:"","disable-transitions":!1},on:{close:function(n){return t.handleClose(e)}}},[t._v("\n  "+t._s(e)+"\n")])}),t._v(" "),t.inputVisible?n("el-input",{ref:"saveTagInput",staticClass:"input-new-tag",attrs:{size:"small"},on:{blur:t.handleInputConfirm},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.handleInputConfirm(e)}},model:{value:t.inputValue,callback:function(e){t.inputValue=e},expression:"inputValue"}}):n("el-button",{staticClass:"button-new-tag",attrs:{size:"small"},on:{click:t.showInput}},[t._v("+ New Tag")])],2),t._v(" "),n("el-form-item",{attrs:{label:"Title"}},[n("el-input",{model:{value:t.form.title,callback:function(e){t.$set(t.form,"title",e)},expression:"form.title"}})],1),t._v(" "),n("el-form-item",{attrs:{label:"Content"}},[n("el-input",{attrs:{type:"textarea",autosize:{minRows:5,maxRows:30},placeholder:"Place Content here, using txt file or type."},model:{value:t.form.content,callback:function(e){t.$set(t.form,"content",e)},expression:"form.content"}}),t._v(" "),n("el-upload",{ref:"upload",staticClass:"upload-demo",attrs:{"auto-upload":!1,"on-change":t.elInFile,accept:"*/*"}},[n("el-button",{attrs:{slot:"trigger",size:"mini",type:"success",plain:""},slot:"trigger"},[t._v("Choose File")]),t._v(" "),n("i",{staticClass:"el-upload__tip el-icon-info",attrs:{slot:"tip"},slot:"tip"},[t._v("Please Choose .txt file")])],1),t._v("\n        Number of words: "+t._s(t.form.content.length)+"\n  ")],1),t._v(" "),n("el-form-item",{attrs:{label:"Abstract"}},[n("el-input",{attrs:{type:"textarea",autosize:{minRows:2,maxRows:4}},model:{value:t.form.abstract,callback:function(e){t.$set(t.form,"abstract",e)},expression:"form.abstract"}})],1),t._v(" "),n("el-form-item",{attrs:{label:"Fee"}},[n("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"6 dollars.100 words",placement:"top-start"}},[n("el-input",{attrs:{disabled:!0},model:{value:t.form.fee,callback:function(e){t.$set(t.form,"fee",e)},expression:"form.fee"}})],1)],1),t._v(" "),n("el-form-item",[n("el-button",{attrs:{type:"primary"},on:{click:t.onSubmit}},[t._v("Create An Order!")]),t._v(" "),n("el-button",{on:{click:function(e){return t.resetPage()}}},[t._v("Reset")])],1)],1)],1)])},staticRenderFns:[]};var j=n("VU/8")(I,J,!1,function(t){n("TjEC")},"data-v-21710bc7",null).exports,L={data:function(){var t=this;return{ruleForm:{name:"",sex:"",birthday:"",pass:"",checkPass:"",age:""},rules:{name:[{required:!0,message:"请输入活动名称",trigger:"blur"},{min:3,max:5,message:"长度在 3 到 5 个字符",trigger:"blur"}],sex:[{required:!0,message:"请选择性别",trigger:"change"}],birthday:[{type:"date",required:!0,message:"请选择生日",trigger:"change"}],pass:[{validator:function(e,n,r){""===n?r(new Error("请输入密码")):(""!==t.ruleForm.checkPass&&t.$refs.ruleForm.validateField("checkPass"),r())},trigger:"blur"}],checkPass:[{validator:function(e,n,r){""===n?r(new Error("请再次输入密码")):n!==t.ruleForm.pass?r(new Error("两次输入密码不一致!")):r()},trigger:"blur"}]}}},methods:{submitForm:function(t){this.$refs[t].validate(function(t){if(!t)return console.log("error submit!!"),!1;alert("submit!")})},resetForm:function(t){this.$refs[t].resetFields()}}},V={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"login-container"},[n("br"),t._v(" "),n("div",{attrs:{id:"innerLayer"}},[n("br"),t._v(" "),n("h2",{staticStyle:{"text-align":"center"}},[t._v("输入注册信息")]),t._v(" "),n("el-form",{ref:"ruleForm",staticClass:"demo-ruleForm",attrs:{model:t.ruleForm,rules:t.rules,"label-width":"100px"}},[n("el-form-item",{attrs:{label:"用户名",prop:"name"}},[n("el-input",{model:{value:t.ruleForm.name,callback:function(e){t.$set(t.ruleForm,"name",e)},expression:"ruleForm.name"}})],1),t._v(" "),n("el-form-item",{attrs:{label:"密码",prop:"pass"}},[n("el-input",{attrs:{type:"password",autocomplete:"off"},model:{value:t.ruleForm.pass,callback:function(e){t.$set(t.ruleForm,"pass",e)},expression:"ruleForm.pass"}})],1),t._v(" "),n("el-form-item",{attrs:{label:"确认密码",prop:"checkPass"}},[n("el-input",{attrs:{type:"password",autocomplete:"off"},model:{value:t.ruleForm.checkPass,callback:function(e){t.$set(t.ruleForm,"checkPass",e)},expression:"ruleForm.checkPass"}})],1),t._v(" "),n("el-form-item",{attrs:{label:"性别",prop:"region"}},[n("el-select",{attrs:{placeholder:"请选择性别"},model:{value:t.ruleForm.sex,callback:function(e){t.$set(t.ruleForm,"sex",e)},expression:"ruleForm.sex"}},[n("el-option",{attrs:{label:"男",value:"shanghai"}}),t._v(" "),n("el-option",{attrs:{label:"女",value:"beijing"}})],1)],1),t._v(" "),n("el-form-item",{attrs:{label:"出生日期",required:""}},[n("el-col",{attrs:{span:11}},[n("el-form-item",{attrs:{prop:"date1"}},[n("el-date-picker",{staticStyle:{width:"100%"},attrs:{type:"date",placeholder:"选择日期"},model:{value:t.ruleForm.birthday,callback:function(e){t.$set(t.ruleForm,"birthday",e)},expression:"ruleForm.birthday"}})],1)],1)],1),t._v(" "),n("el-form-item",[n("el-button",{attrs:{type:"primary"},on:{click:function(e){return t.submitForm("ruleForm")}}},[t._v("立即创建")]),t._v(" "),n("el-button",{on:{click:function(e){return t.resetForm("ruleForm")}}},[t._v("重置")])],1)],1)],1)])},staticRenderFns:[]};var M=[{path:"/",name:"mainpage",redirect:"/index",hidden:!0},{path:"/index",component:k,name:"mainpage_index",hidden:!0},{path:"/register",component:n("VU/8")(L,V,!1,function(t){n("xSTZ")},"data-v-41c16cb4",null).exports,name:"register",hidden:!0},{path:"/login",component:_,name:"",hidden:!0},{path:"/",component:x,name:"",leaf:!0,iconCls:"el-icon-menu",children:[{path:"/homepage",component:E,name:"HomePage",meta:{keepAlive:!0}}]},{path:"/",component:x,name:"",leaf:!0,iconCls:"el-icon-shopping-bag-2",children:[{path:"/market",component:U,name:"Market"}]},{path:"/",component:x,name:"工作台",leaf:!0,iconCls:"el-icon-s-platform",children:[{path:"/panel",component:R,name:"Panel"}]},{path:"/",component:x,name:"SubmitJob",leaf:!0,iconCls:"el-icon-upload2",children:[{path:"/submit_job",component:j,name:"SubmitJob"}]}],H=n("NYxO"),q=function(t){(0,t.commit)("INCREMENT")},B=function(t){(0,t.commit)("DECREMENT")},G=function(t){return t.count};o.default.use(H.a);var W=new H.a.Store({actions:r,getters:a,state:{count:10},mutations:{INCREMENT:function(t){t.count++},DECREMENT:function(t){t.count--}}}),X=n("zL8q"),Q=n.n(X);n("tvR6"),n("QlJ9");o.default.use(Q.a),o.default.use(l.a),o.default.use(H.a),o.default.config.productionTip=!1;var Z=new l.a({routes:M});Z.beforeEach(function(t,e,n){"/index"==t.path||"/register"==t.path?n():("/login"==t.path&&sessionStorage.removeItem("user"),JSON.parse(sessionStorage.getItem("user"))||"/login"==t.path?n():n({path:"/login"}))}),new o.default({router:Z,store:W,render:function(t){return t(i)}}).$mount("#app")},QlJ9:function(t,e){},TjEC:function(t,e){},dAX3:function(t,e){},jhA3:function(t,e){},swbr:function(t,e){},tvR6:function(t,e){},vtEn:function(t,e){},xSTZ:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.68d7a78706878735c248.js.map