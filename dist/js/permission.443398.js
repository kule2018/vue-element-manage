(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{884:function(e,n,r){"use strict";r.r(n);var t=r(42),s=r.n(t),o=r(183),i={name:"Permission",data:function(){return{tableMng:o.a,key:1}},computed:{userInfo:function(){return this.$store.state.account.userInfo},currentRoles:{get:function(){return this.userInfo.roles},set:function(e){this.$store.commit("SET_USER_INFO",s()({},this.userInfo,{roles:e})),this.key++}}},methods:{handleChange:function(e){}}},a=r(51),u=Object(a.a)(i,function(){var e=this,n=e.$createElement,r=e._self._c||n;return r("div",[r("p",[e._v("指令权限通过自定义指令来进行DOM级的控制，DOM不渲染，那么需要通过该DOM元素进行的一系列操作就无法进行。")]),e._v(" "),r("p",[e._v("比如某个信息页面，员工可以查看，领导也可以查看，但是领导还可以审核，那么只需要在这个审核按钮标签上设置指令v-permission=\"['leader']\",就可以只对领导显示。")]),e._v(" "),r("br"),e._v(" "),r("div",[e._v("\n    当前角色为：\n    "),e._l(e.userInfo.roles,function(n,t){return r("span",{key:n},[e._v("\n      "+e._s(e.tableMng.getNameById("role",n))+"\n      "),t<e.userInfo.roles.length-1?r("span",[e._v("、")]):e._e()])})],2),e._v(" "),r("br"),e._v(" "),r("span",[e._v("点击设置角色：")]),e._v(" "),r("el-radio-group",{on:{change:e.handleChange},model:{value:e.currentRoles,callback:function(n){e.currentRoles=n},expression:"currentRoles"}},[r("el-radio-button",{attrs:{label:["admin"]}},[e._v("管理员")]),e._v(" "),r("el-radio-button",{attrs:{label:["editor"]}},[e._v("编辑")]),e._v(" "),r("el-radio-button",{attrs:{label:["guest"]}},[e._v("游客")])],1),e._v(" "),r("div",{key:e.key},[r("br"),e._v(" "),r("p",{directives:[{name:"permission",rawName:"v-permission",value:["admin"],expression:"['admin']"}]},[e._v("\n      只有管理员才能看得到，只有管理员才能看得到，只有管理员才能看得到，只有管理员才能看得到，只有管理员才能看得到，只有管理员才能看得到。\n    ")]),e._v(" "),r("p",{directives:[{name:"permission",rawName:"v-permission",value:["guest","editor"],expression:"['guest','editor']"}]},[e._v("\n      游客和编辑都可以看到，游客和编辑都可以看到，游客和编辑都可以看到，游客和编辑都可以看到，游客和编辑都可以看到，游客和编辑都可以看到。\n    ")])]),e._v(" "),r("br"),e._v(" "),r("br"),e._v(" "),r("br"),e._v(" "),r("p",[e._v("路由权限通过router.addRoutes动态注册路由实现")]),e._v(" "),r("p",[e._v("查看路由权限效果，可以使用账号:admin，以管理员身份登录；账号：guest，以游客身份登录；账号：editor，以编辑身份登录。")])],1)},[],!1,null,null,null).exports;r.d(n,"default",function(){return u})}}]);