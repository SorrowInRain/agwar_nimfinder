(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{17:function(e,t,n){e.exports=n(44)},23:function(e,t,n){},24:function(e,t,n){},44:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(14),l=n.n(r),c=(n(23),n(2)),s=n(3),i=n(5),u=n(4),h=n(6),m=(n(24),a.Component,n(15)),p=n(16),d=n.n(p),b=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(i.a)(this,Object(u.a)(t).call(this,e))).handleSubmit=function(e){e.preventDefault();var t=n.state;console.log(t),d.a.post("https://shrouded-cove-86222.herokuapp.com/https://api.stya.net/nim/register",t).then(function(e){console.log(e)}).catch(function(e){console.log(e)})},n.handleInputChange=function(e){e.preventDefault(),n.setState(Object(m.a)({},e.target.name,e.target.value))},n.state={username:"",password:"",message:""},n}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.state,t=e.username,n=e.password;return o.a.createElement("div",{className:"titlesec"},o.a.createElement("h2",null,"Register"),o.a.createElement("form",{onSubmit:this.handleSubmit},o.a.createElement("p",null,o.a.createElement("input",{type:"text",placeholder:"Username",value:t,name:"username",onChange:this.handleInputChange})),o.a.createElement("p",null,o.a.createElement("input",{type:"password",placeholder:"password",value:n,name:"password",onChange:this.handleInputChange})),o.a.createElement("p",null,o.a.createElement("button",{onClick:this.handleSubmit},"Register")),o.a.createElement("br",null),o.a.createElement("p",null,this.state.message)))}}]),t}(a.Component),g=function(e){function t(){return Object(c.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return o.a.createElement(b,null)}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(o.a.createElement(g,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[17,1,2]]]);
//# sourceMappingURL=main.0caf65f7.chunk.js.map