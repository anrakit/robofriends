(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],{14:function(e,a,n){},15:function(e,a,n){"use strict";n.r(a);var t=n(1),r=n.n(t),i=n(4),c=n.n(i),o=n(5),s=n(6),m=n(8),l=n(7),d=(n(3),n(0)),h=function(e){var a=e.name,n=e.email,t=e.id;return Object(d.jsxs)("div",{className:"card",children:[Object(d.jsx)("img",{src:"https://robohash.org/".concat(t,"?200x200"),alt:"robots"}),Object(d.jsxs)("div",{children:[Object(d.jsx)("h2",{children:a}),Object(d.jsx)("p",{children:n})]})]})},u=function(e){var a=e.robots;return Object(d.jsx)("div",{children:a.map((function(e){return Object(d.jsx)(h,{id:e.name,name:e.name,email:e.email},e.id)}))})},b=function(e){var a=e.searchChange;return Object(d.jsx)("div",{className:"searchwrapper",children:Object(d.jsx)("input",{className:"inputbox",type:"search",placeholder:"Search your Friends!",onChange:a})})},j=[{id:1,name:"Moe Sin",username:"Ace",email:"Ace@Leemail.com"},{id:2,name:"Sven Baumwoll",username:"JustSayian",email:"Sven@intlord.com"},{id:3,name:"Pablo Escoba",username:"Tiltproof",email:"Paplo@norole.com"},{id:4,name:"Steffan Strategie",username:"4N0NYM0U5",email:"Steffan@poe@com"},{id:5,name:"Marco Lenkrad",username:"Gagarott",email:"Marco@Boxenstop.com"},{id:6,name:"Andy Angry",username:"J.P.",email:"Andi@toxic4life.com"},{id:7,name:"Luka Unknown",username:"Nasuck",email:"Luka@Karatekit.com"},{id:8,name:"Nici Korea",username:"Shallow",email:"Nici@Kenai.com"},{id:9,name:"Jan Geist",username:"TnK",email:"Jan@1minleft.com"},{id:10,name:"Fabian Bierschleuder",username:"Draco",email:"Fabian@3promille.com"}],f=function(e){Object(m.a)(n,e);var a=Object(l.a)(n);function n(){var e;return Object(o.a)(this,n),(e=a.call(this)).onSearchChange=function(a){e.setState({searchfield:a.target.value})},e.state={robots:j,searchfield:""},e}return Object(s.a)(n,[{key:"render",value:function(){var e=this;console.log(this.state.robots);var a=this.state.robots.filter((function(a){return a.name.toLowerCase().includes(e.state.searchfield.toLowerCase())}));return 0===this.state.robots.length?Object(d.jsx)("hi",{children:"Loading..."}):Object(d.jsxs)("div",{className:"app",children:[Object(d.jsx)("h1",{children:"Robofriends"}),Object(d.jsx)(b,{searchChange:this.onSearchChange}),Object(d.jsx)(u,{robots:a})]})}}]),n}(r.a.Component);n(14);c.a.render(Object(d.jsx)(r.a.StrictMode,{children:Object(d.jsx)(f,{})}),document.getElementById("root"))},3:function(e,a,n){}},[[15,1,2]]]);
//# sourceMappingURL=main.b18d16b3.chunk.js.map