(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,n){},16:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(7),c=n.n(o),s=(n(15),n(1)),i=n(2),l=n(4),u=n(3),h=n(5),p=(n(16),a.Component,n(8)),m=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).postRegister=function(e){try{return fetch("https://shrouded-cove-86222.herokuapp.com/https://api.stya.net/nim/register",{method:"POST",body:JSON.stringify(e)})}catch(t){console.error(t)}},n.handleSubmit=function(e){e.preventDefault();var t=n.state;console.log(t);var a=n.postRegister(t);console.log(a),alert(a.stringify)},n.handleInputChange=function(e){e.preventDefault(),n.setState(Object(p.a)({},e.target.name,e.target.value))},n.state={username:"",password:""},n}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.state,t=e.username,n=e.password;return r.a.createElement("div",{className:"titlesec"},r.a.createElement("h2",null,"Register"),r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("p",null,r.a.createElement("input",{type:"text",placeholder:"Username",value:t,name:"username",onChange:this.handleInputChange})),r.a.createElement("p",null,r.a.createElement("input",{type:"password",placeholder:"password",value:n,name:"password",onChange:this.handleInputChange})),r.a.createElement("p",null,r.a.createElement("button",{onClick:this.handleSubmit},"Register"))))}}]),t}(a.Component),d=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(m,null)}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(d,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},9:function(e,t,n){e.exports=n(17)}},[[9,1,2]]]);
//# sourceMappingURL=main.10ac6f7d.chunk.js.map