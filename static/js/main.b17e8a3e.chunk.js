(this["webpackJsonppostmates_2.0"]=this["webpackJsonppostmates_2.0"]||[]).push([[0],{104:function(e,t,a){},109:function(e,t,a){},134:function(e,t,a){},138:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(17),i=a.n(c),o=(a(104),a(16)),s=a(33),l=a(34),u=a(39),m=a(38),d=a(156),p=a(157),h=a(82),E=a(44),f=a(45),v=(a(109),function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(s.a)(this,a),(e=t.call(this)).state={data:[],isLoading:!0},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){this.setState({isLoading:!1,data:[{dishId:1,dishTitle:"Cup Cake",dishDescription:"Some sort of description for a dish",dishPrice:"5.99"},{dishId:2,dishTitle:"Cheese Cake",dishDescription:"Some sort of description for a dish except this one is a bit longer and it may overflow",dishPrice:"8.99"},{dishId:3,dishTitle:"Birthday Cake",dishDescription:"Some sort of description for a dish",dishPrice:"2.99"},{dishId:4,dishTitle:"Cookie Cake",dishDescription:"Some sort of description for a dish",dishPrice:"15.99"},{dishId:5,dishTitle:"Some Other Type Of Cake",dishDescription:"Some sort of description for a dish",dishPrice:"5.99"}]})}},{key:"render",value:function(){var e=this.state,t=e.data,a=e.isLoading;return console.log(t),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"page-title-container"},r.a.createElement("div",{className:"page-title-text"},"Menu"),r.a.createElement("div",{className:"menu-icon-divider-container"},r.a.createElement("hr",{className:"title-divider-left"}),r.a.createElement(E.a,{icon:f.c,size:"2x",color:"gray"}),r.a.createElement("hr",{className:"title-divider-right"}))),a?r.a.createElement("h3",null,"Unable to Load Menu Data"):r.a.createElement("div",{className:"menu-items-container"},r.a.createElement(d.a,{container:!0,direction:"row",justify:"center",alignItems:"center",spacing:2},t.map((function(e){return r.a.createElement(d.a,{item:!0,key:e.dishId},r.a.createElement("div",{className:"item-container"},r.a.createElement("div",{className:"dish-img-container"},r.a.createElement("img",{onError:function(e){e.target.src="/favicon.png"},src:"/menu-item-img-default.jpg",width:"298",height:"200",alt:"dish"})),r.a.createElement(p.a,null),r.a.createElement("div",{className:"dish-title-container"},e.dishTitle),e.dishDescription.length>71?r.a.createElement("div",{className:"dish-desc-container"},e.dishDescription.substring(0,71)+" ..."):r.a.createElement("div",{className:"dish-desc-container"},e.dishDescription),r.a.createElement("div",{className:"price-add-btn-container"},r.a.createElement("div",{className:"dish-price-container"},"$",e.dishPrice),r.a.createElement("div",{className:"add-cart-btn"},r.a.createElement(h.a,{variant:"success"},"Add to Cart")))))})))))}}]),a}(r.a.Component)),g=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement("h1",null,"Chefs page")}}]),a}(r.a.Component),b=a(11),O=a.n(b),j=a(19),y=a(62),w=a(6),S=a(23),x=a(27),k=a.n(x),C=function(e){e?k.a.defaults.headers.common.Authorization="Bearer ".concat(e):delete k.a.defaults.headers.common.Authorization},T=function(e){return{type:"SET_USER",payload:e}},N=function(e,t){return function(){var a=Object(j.a)(O.a.mark((function a(n){var r,c,i;return O.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,k.a.post("/auth",e);case 3:r=a.sent,c=r.data,i=r.headers,console.log(localStorage.jwt,c),localStorage.setItem("jwt",i.authorization),localStorage.setItem("userId",c.id),n(T({id:c.id,username:c.username,role:c.role,closed:c.closed})),t.push("/"),a.next=16;break;case 13:throw a.prev=13,a.t0=a.catch(0),a.t0;case 16:case"end":return a.stop()}}),a,null,[[0,13]])})));return function(e){return a.apply(this,arguments)}}()},I=function(e){return function(){var t=Object(j.a)(O.a.mark((function t(a){var n,r;return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,k.a.get("/users/".concat(e));case 3:n=t.sent,r=n.data,console.log(localStorage.jwt,r),a(T({id:r.id,username:r.username,role:r.role,closed:r.closed})),t.next=11;break;case 9:t.prev=9,t.t0=t.catch(0);case 11:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(e){return t.apply(this,arguments)}}()},P=function(e){return function(){var t=Object(j.a)(O.a.mark((function t(a){return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:localStorage.removeItem("jwt"),localStorage.removeItem("userId"),C(!1),a({type:"RESET_USER"}),e.push("/");case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},D=function(){var e=Object(n.useState)(""),t=Object(y.a)(e,2),a=t[0],c=t[1],i=Object(n.useState)(""),o=Object(y.a)(i,2),s=o[0],l=o[1],u=Object(n.useState)(""),m=Object(y.a)(u,2),d=m[0],p=m[1],h=Object(S.c)(),E=Object(w.g)(),f=function(){var e=Object(j.a)(O.a.mark((function e(){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,h(N({username:a,password:s},E));case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),p("Can't Login. Please try again.");case 8:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(){return e.apply(this,arguments)}}();return r.a.createElement("div",null,r.a.createElement("label",{htmlFor:"username"},r.a.createElement("b",null,"Username")),r.a.createElement("input",{type:"text",placeholder:"Enter Username",name:"username",value:a,onChange:function(e){c(e.target.value)}}),r.a.createElement("label",{htmlFor:"password"},r.a.createElement("b",null,"Password")),r.a.createElement("input",{type:"password",placeholder:"Enter Password",name:"password",value:s,onChange:function(e){l(e.target.value)}}),r.a.createElement("button",{onClick:f},"Login"),d&&r.a.createElement("div",null,d))},U=function(e){return r.a.createElement("div",null,r.a.createElement("h1",null,"Sign in page"),r.a.createElement(D,null))},_=a(95),L=function(e){var t=e.children;return r.a.createElement("div",null,"Employee Layout for Login Employee:"," ",r.a.createElement("a",{href:"https://material-ui.com/store/previews/devias-kit/"},"Template that will be added soon"),t)},R=a(24),M=a(160),A=a(161),z=a(158),B=a(85),F=a(159),H=function(){var e=Object(S.c)(),t=Object(w.g)(),a=Object(S.d)((function(e){return e.user})),n=function(){var a=Object(j.a)(O.a.mark((function a(){return O.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:e(P(t)),t.go(0);case 2:case"end":return a.stop()}}),a)})));return function(){return a.apply(this,arguments)}}();return r.a.createElement(M.a,{collapseOnSelect:!0,expand:"lg",bg:"dark",variant:"dark"},r.a.createElement(o.b,{to:"/"},r.a.createElement(M.a.Brand,null,"Postmates 2.0")),r.a.createElement(M.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),r.a.createElement(M.a.Collapse,null,r.a.createElement(A.a,{className:"mr-auto"},r.a.createElement(o.b,{to:"/Menu"},r.a.createElement(M.a.Text,null,"Menu")),r.a.createElement(o.b,{to:"/Chefs"},r.a.createElement(M.a.Text,null,"Chefs")),r.a.createElement(z.a,{inline:!0},r.a.createElement(B.a,{className:"mr-sm-2",type:"text",placeholder:"Search"}),r.a.createElement(h.a,{variant:"outline-info"},"Search"))),r.a.createElement(A.a,null,Object(R.isEmpty)(a)&&r.a.createElement(o.b,{to:"/signin"},r.a.createElement(M.a.Text,null,"Sign-In")),!Object(R.isEmpty)(a)&&r.a.createElement(M.a.Text,{onClick:n,className:"btn"},"Logout"),!Object(R.isEmpty)(a)&&"CUSTOMER"===a.role&&r.a.createElement(F.a,{title:r.a.createElement(E.a,{icon:f.b,size:"2x"}),id:"collapsible-nav-dropdown",alignRight:!0},r.a.createElement(F.a.Item,null,"My Cart")),!Object(R.isEmpty)(a)&&"CUSTOMER"!==a.role&&r.a.createElement(o.b,{to:"/employee",className:"d-flex  align-items-center"},r.a.createElement(E.a,{icon:f.a,size:"2x"})))))},J=function(e){var t=e.children;return r.a.createElement(r.a.Fragment,null,r.a.createElement(H,null),t)},W=function(e){var t=e.page,a=e.isPrivate,c=e.type,i=Object(_.a)(e,["page","isPrivate","type"]),o=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],a=function(a){Object(u.a)(c,a);var n=Object(m.a)(c);function c(){var e;Object(s.a)(this,c);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(e=n.call.apply(n,[this].concat(r))).checkAuth=Object(j.a)(O.a.mark((function a(){return O.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.props.getUser(localStorage.getItem("userId"));case 2:Object(R.isEmpty)(e.props.user)&&t&&e.props.history.push("/signin"),Object(R.isEmpty)(e.props.user)||"/signin"!==e.props.location.pathname&&"/register"!==e.props.location.pathname||e.props.history.push("/");case 4:case"end":return a.stop()}}),a)}))),e}return Object(l.a)(c,[{key:"componentDidMount",value:function(){this.checkAuth()}},{key:"render",value:function(){return r.a.createElement(e,this.props)}}]),c}(n.Component),c=function(e){return{user:e.user}},i=function(e){return{getUser:function(t){return e(I(t))}}};return Object(S.b)(c,i)(a)}(t,a);return r.a.createElement(r.a.Fragment,null,"employee"===c?r.a.createElement(L,i,r.a.createElement(o,i)):r.a.createElement(J,i,r.a.createElement(o,i)))},X=function(){return r.a.createElement(w.d,null,r.a.createElement(w.b,{exact:!0,path:"/",render:function(e){return r.a.createElement(W,Object.assign({page:function(){return r.a.createElement("div",null,"Home")}},e))}}),r.a.createElement(w.b,{exact:!0,path:"/menu",render:function(e){return r.a.createElement(W,Object.assign({page:v},e))}}),r.a.createElement(w.b,{exact:!0,path:"/chefs",render:function(e){return r.a.createElement(W,Object.assign({page:g},e))}}),r.a.createElement(w.b,{exact:!0,path:"/signin",render:function(e){return r.a.createElement(W,Object.assign({page:U},e))}}),r.a.createElement(w.b,{exact:!0,path:"/account",render:function(e){return r.a.createElement(W,Object.assign({isPrivate:!0,page:function(){return r.a.createElement("div",null,"Customer Account")}},e))}}),r.a.createElement(w.b,{exact:!0,path:"/employee",render:function(e){return r.a.createElement(W,Object.assign({isPrivate:!0,type:"employee",page:function(){return r.a.createElement("div",null,"Employees HOmes")}},e))}}),r.a.createElement(w.b,{render:function(){return r.a.createElement(w.a,{to:"/"})}}))},$=(a(133),a(134),function(){return r.a.createElement(o.a,null,r.a.createElement(X,null))});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var V=a(93),q=a(26),G=a(90),K=a(68),Q={},Y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Q,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_USER":return Object(K.a)(Object(K.a)({},e),t.payload);case"RESET_USER":return{};default:return e}},Z=Object(q.c)({user:Y}),ee=a(91),te=a.n(ee),ae=(a(137),[G.a,te.a]);var ne,re=q.a.apply(void 0,Object(V.a)(ae)),ce=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||q.d,ie=Object(q.e)(Z,ce(re));ne=localStorage.jwt,k.a.defaults.baseURL="http://localhost:8080/api",C(ne),i.a.render(r.a.createElement(S.a,{store:ie},r.a.createElement($,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},99:function(e,t,a){e.exports=a(138)}},[[99,1,2]]]);
//# sourceMappingURL=main.b17e8a3e.chunk.js.map