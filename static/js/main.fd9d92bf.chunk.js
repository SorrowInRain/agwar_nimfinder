(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{35:function(e,t,a){e.exports=a(71)},40:function(e,t,a){},41:function(e,t,a){},71:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(31),o=a.n(s),l=(a(40),a(6)),c=a(7),i=a(9),u=a(8),m=a(10),d=a(14),p=a(11),h=(a(41),a(15)),g=a(12),b=a.n(g),E=a(16),v=a.n(E),f=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).handleSubmit=function(e){e.preventDefault(),a.setState({message:"Loading"});var t=v.a.stringify({username:a.state.username,password:a.state.password});b.a.post("https://shrouded-cove-86222.herokuapp.com/https://api.stya.net/nim/register",t,{"Content-Type":"application/x-www-form-urlencoded"}).then(function(e){a.setState({message:e.data.status,code:e.data.code})}).catch(function(e){console.log(e)})},a.handleInputChange=function(e){e.preventDefault(),a.setState(Object(h.a)({},e.target.name,e.target.value))},a.state={username:"",password:"",code:"",message:""},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.state,t=e.username,a=e.password;return r.a.createElement("div",{className:"titlesec"},r.a.createElement("h2",null,"Register"),r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("p",null,r.a.createElement("input",{type:"text",placeholder:"Username",value:t,name:"username",onChange:this.handleInputChange})),r.a.createElement("p",null,r.a.createElement("input",{type:"password",placeholder:"password",value:a,name:"password",onChange:this.handleInputChange})),r.a.createElement("p",null,r.a.createElement("button",{onClick:this.handleSubmit},"Register")),r.a.createElement("br",null),r.a.createElement("p",null,this.state.message)))}}]),t}(n.Component),y=a(32),k=a.n(y),w=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).handleSubmit=function(e){e.preventDefault(),a.setState({load:!1,message:""}),console.log(a.state.token);var t="https://shrouded-cove-86222.herokuapp.com/https://api.stya.net/nim/";a.checkNumber(a.state.query[0])?t+="byid?query="+a.state.query:t+="byname?name="+a.state.query,a.state.size>0&&(t+="&count="+a.state.size),a.state.page>0&&(t+="&page="+a.state.page);var n={headers:{"content-Type":"application/json","Access-Control-Allow-Origin":!0,Accept:"/","Cache-Control":"no-cache",Cookie:document.cookie}};console.log(t),b.a.get(t,n).then(function(e){console.log(e.data),a.setState({message:e.data.status,code:e.data.code,items:e.data.payload,load:!0})})},a.state={items:[],load:!0,query:"",size:0,page:0,token:"token="+a.props.token,code:0,message:""},k.a.set("token",a.state.token,{expires:1}),a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"checkNumber",value:function(e){return"1"===e||"2"===e||"3"===e||"4"===e||"5"===e||"6"===e||"7"===e||"8"===e||"9"===e||"0"===e}},{key:"updateQuery",value:function(e){this.setState({query:e.target.value})}},{key:"render",value:function(){var e=this.state,t=e.load,a=e.items,n=e.code;return t?n>=0?r.a.createElement("div",{className:"titlesec"},r.a.createElement("h1",null,"NIM Finder"),r.a.createElement("div",{className:"search"},r.a.createElement("input",{type:"text",name:"query",placeholder:"Masukkan Nama/NIM",onChange:this.updateQuery.bind(this)}),r.a.createElement("button",{onClick:this.handleSubmit},"Search")),r.a.createElement("div",{className:"queryStyle"},r.a.createElement("ul",null,a.map(function(e){return r.a.createElement("li",{key:e.nim_jur},e.name," | ",e.nim_tpb," | ",e.nim_jur," | ",e.prodi)})))):r.a.createElement("div",{className:"titlesec"},r.a.createElement("h1",null,"NIM Finder"),r.a.createElement("div",{className:"queryStyle"},r.a.createElement("p",null,"Cannot Load Data"))):r.a.createElement("div",{className:"titlesec"},r.a.createElement("h1",null,"NIM Finder"),r.a.createElement("div",{className:"queryStyle"},"Loading Data..."))}}]),t}(n.Component),j=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).handleSubmit=function(e){e.preventDefault(),a.setState({message:"Loading..."});var t=v.a.stringify({username:a.state.username,password:a.state.password});b.a.post("https://shrouded-cove-86222.herokuapp.com/https://api.stya.net/nim/login",t,{"Content-Type":"application/x-www-form-urlencoded"}).then(function(e){a.setState({message:e.data.status,code:e.data.code,token:e.data.token})}).catch(function(e){console.log(e)})},a.handleInputChange=function(e){e.preventDefault(),a.setState(Object(h.a)({},e.target.name,e.target.value))},a.state={username:"",password:"",code:"",message:"",token:""},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.state,t=e.username,a=e.password;return""===this.state.token?r.a.createElement("div",{className:"titlesec"},r.a.createElement("h2",null,"Login"),r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("p",null,r.a.createElement("input",{type:"text",placeholder:"Username",value:t,name:"username",onChange:this.handleInputChange})),r.a.createElement("p",null,r.a.createElement("input",{type:"password",placeholder:"password",value:a,name:"password",onChange:this.handleInputChange})),r.a.createElement("p",null,r.a.createElement("button",{onClick:this.handleSubmit},"Login")),r.a.createElement("p",null,this.state.message))):r.a.createElement(w,{token:this.state.token})}}]),t}(n.Component),O=function(e){function t(){return Object(l.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"404 Not Found"))}}]),t}(n.Component),C=function(){return r.a.createElement("div",null,r.a.createElement(d.b,{to:"/"}," Home "),r.a.createElement(d.b,{to:"/register"}," Register "))},S=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).state={current:0,cookie:"",data:[]},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement(d.a,null,r.a.createElement("div",null,r.a.createElement(C,null),r.a.createElement(p.c,null,r.a.createElement(p.a,{path:"/",component:j}),r.a.createElement(p.a,{path:"/register",component:f}),r.a.createElement(p.a,{component:O}))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(S,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[35,1,2]]]);
//# sourceMappingURL=main.fd9d92bf.chunk.js.map