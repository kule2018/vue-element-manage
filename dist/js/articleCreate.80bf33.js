(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{1156:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(1171),i=n(1166),l=n(1167),c=n(1175),u=n(791),p=n(944),s=n.n(p),f=(n(578),n(698)),b=(n(579),function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}());var m=function(e){function t(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var e=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments));return e.state={editorState:s.a.createEditorState(null)},e.handleChange=function(t){e.setState({editorState:t});var n=e.state.editorState.toHTML();console.log(n)},e}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a.a.Component),b(t,[{key:"render",value:function(){var e=this.props.form.getFieldDecorator,t=this.props.detail;return a.a.createElement("div",{className:"article-editor"},a.a.createElement(o.a,null,a.a.createElement(i.a,null,a.a.createElement(l.a,{span:12},a.a.createElement(o.a.Item,{label:"标题"},e("title",{initialValue:t.title,rules:[{required:!0,message:"请输入文章标题!"}]})(a.a.createElement(c.a,{placeholder:"请输入文章标题"})))),a.a.createElement(l.a,{span:12},a.a.createElement(o.a.Item,{label:"类型"},e("type",{initialValue:t.type,rules:[{required:!0,message:"请选择文章类型!"}]})(a.a.createElement(u.a,{placeholder:"请选择文章类型"},Object(f.b)(f.a.articleType).map(function(e){return a.a.createElement(u.a.Option,{key:e.value,value:e.value},e.label)})))))),a.a.createElement(o.a.Item,{label:"描述"},e("description",{initialValue:t.description,rules:[{required:!0,message:"请输入文章简要描述!"}]})(a.a.createElement(c.a.TextArea,{placeholder:"请输入文章简要描述"}))),a.a.createElement(o.a.Item,{label:"内容",required:!0},a.a.createElement("div",{className:"editor"},a.a.createElement(s.a,{value:this.state.editorState,onChange:this.handleChange})))))}}]),t}(),y=o.a.create()(m),d=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();var h=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a.a.Component),d(t,[{key:"render",value:function(){return a.a.createElement(y,{detail:{}})}}]),t}();n.d(t,"default",function(){return h})}}]);