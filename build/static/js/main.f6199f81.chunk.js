(this["webpackJsonpwhatsapp-clone"]=this["webpackJsonpwhatsapp-clone"]||[]).push([[0],{56:function(e,t,i){},57:function(e,t,i){},71:function(e,t,i){},72:function(e,t,i){},73:function(e,t,i){},74:function(e,t,i){},75:function(e,t,i){"use strict";i.r(t);var a=i(2),c=i.n(a),s=i(29),n=i.n(s),r=i(25),d=(i(56),i(91)),o=(i(57),i(28)),l=(i(58),i(76),i(77),i(60),o.a.initializeApp({apiKey:"AIzaSyBjxZXELl_aktC6weqDquKy4pL4gqx0pyg",authDomain:"whatsapp-8c71c.firebaseapp.com",projectId:"whatsapp-8c71c",storageBucket:"whatsapp-8c71c.appspot.com",messagingSenderId:"480472585334",appId:"1:480472585334:web:ada888870a03389e61bb57"})),j=l.firestore(),h=l.auth(),b=new o.a.auth.GoogleAuthProvider,u=(o.a.storage().ref("images"),o.a.storage().ref("audios"),o.a.firestore.FieldValue.serverTimestamp),m=(o.a.database.ServerValue.TIMESTAMP,i(4));function O(){return Object(m.jsx)("div",{className:"app",children:Object(m.jsx)("div",{className:"login",children:Object(m.jsxs)("div",{className:"login__container",children:[Object(m.jsx)("img",{src:"./login-logo.png",alt:"Logo"}),Object(m.jsx)("div",{className:"login__text",children:Object(m.jsx)("h1",{children:"Sign in to WhatsApp"})}),Object(m.jsx)(d.a,{onClick:function(){h.signInWithRedirect(b)},children:"Sign in with Google"})]})})})}var x=i(22),v=i(102),p=i(96),f=i(97),_=i(93),w=i(98),g=i(99),N=i(100),C=i(101),y=i(92),k=i(94),R=i(27);function S(e){var t=e.item;return Object(m.jsx)(R.b,{className:"link",to:"/room/".concat(t.id),children:Object(m.jsxs)("div",{className:"sidebar__chat",children:[Object(m.jsx)("div",{className:"avatar__container",children:Object(m.jsx)(v.a,{style:{width:45,height:45},src:t.photoURL||"https://avatars.dicebear.com/api/human/".concat(t.id,".svg")})}),Object(m.jsx)("div",{className:"sidebar__chat--info",children:Object(m.jsx)("h2",{children:t.name})})]})})}i(71);function I(e){var t=e.title,i=e.data;return i?i.length||"Search Results"!==t?Object(m.jsxs)("div",{className:"sidebar__chat--container",children:[Object(m.jsx)("h2",{children:t}),i.map((function(e){return Object(m.jsx)(S,{item:e},e.id)}))]}):Object(m.jsxs)("div",{className:"no-result",children:[Object(m.jsxs)("div",{children:[Object(m.jsx)(_.a,{}),Object(m.jsx)("div",{className:"cancel-root",children:Object(m.jsx)(k.a,{})})]}),Object(m.jsxs)("h2",{children:["No ",t]})]}):Object(m.jsx)("div",{className:"loader__container sidebar__loader",children:Object(m.jsx)(y.a,{})})}i(72);var L=i(7),W=i(95),E=i(30);function H(e){var t,i=e.user,a=e.page,s=function(){var e=Object(E.a)(j.collection("rooms").orderBy("timestamp","desc")).snapshot;return null===e||void 0===e||e.docs.map((function(e){return Object(r.a)({id:e.id,userId:e.id},e.data())})),W.a}(),n=function(e){var t=Object(E.a)(j.collection("users").orderBy("timestamp","desc")),i=Object(x.a)(t,1)[0],a=[];return e&&(null===i||void 0===i||i.doc.forEach((function(t){var i=t.id>e.uid?"".concat(t.id).concat(e.uid):"".concat(e.uid).concat(t.id);t.id!==e.uid&&a.push(Object(r.a)({id:i,userID:t.id},t.data()))}))),a}(i),d=function(e){var t=Object(E.a)(e?j.collection("users").doc(e.uid).collection("chats").orderBy("timestamp","desc"):null),i=Object(x.a)(t,1)[0];return null===i||void 0===i?void 0:i.doc.map((function(e){return Object(r.a)({id:e.id},e.data())}))}(i),o=c.a.useState(1),l=Object(x.a)(o,2),b=l[0],O=l[1];return t=a.isMobile?R.c:function(e){return Object(m.jsx)("div",{className:"".concat(e.activeClass?"sidebar__menu--selected":""),onClick:e.onClick,children:e.children})},Object(m.jsxs)("div",{className:"sidebar",style:{minHeight:a.isMobile?a.height:"auto"},children:[Object(m.jsxs)("div",{className:"sidebar__header",children:[Object(m.jsxs)("div",{className:"sidebar__header--left",children:[Object(m.jsx)(v.a,{src:null===i||void 0===i?void 0:i.photoURL}),Object(m.jsx)("h4",{children:null===i||void 0===i?void 0:i.displayName})]}),Object(m.jsx)("div",{className:"sidebar__header--right",children:Object(m.jsx)(p.a,{onClick:function(){h.signOut()},children:Object(m.jsx)(f.a,{})})})]}),Object(m.jsx)("div",{className:"sidebar__search",children:Object(m.jsxs)("form",{className:"sidebar__search--container",children:[Object(m.jsx)(_.a,{}),Object(m.jsx)("input",{placeholder:"Search for Users or Rooms",type:"text",id:"search"})]})}),Object(m.jsxs)("div",{className:"sidebar__menu",children:[Object(m.jsx)(t,{to:"/chats",activeClassName:"sidebar__menu--selected",onClick:function(){return O(1)},activeClass:1===b,children:Object(m.jsxs)("div",{className:"sidebar__menu--home",children:[Object(m.jsx)(w.a,{}),Object(m.jsx)("div",{className:"sidebar__menu--line"})]})}),Object(m.jsx)(t,{to:"/rooms",activeClassName:"sidebar__menu--selected",onClick:function(){return O(2)},activeClass:2===b,children:Object(m.jsxs)("div",{className:"sidebar__menu--rooms",children:[Object(m.jsx)(g.a,{}),Object(m.jsx)("div",{className:"sidebar__menu--line"})]})}),Object(m.jsx)(t,{to:"/users",activeClassName:"sidebar__menu--selected",onClick:function(){return O(3)},activeClass:3===b,children:Object(m.jsxs)("div",{className:"sidebar__menu--users",children:[Object(m.jsx)(N.a,{}),Object(m.jsx)("div",{className:"sidebar__menu--line"})]})})]}),a.isMobile?Object(m.jsxs)(L.d,{children:[Object(m.jsx)(L.b,{path:"/chats",children:Object(m.jsx)(I,{title:"Chats",data:[d]})}),Object(m.jsx)(L.b,{path:"/rooms",children:Object(m.jsx)(I,{title:"Rooms",data:[s]})}),Object(m.jsx)(L.b,{path:"/users",children:Object(m.jsx)(I,{title:"Users",data:[n]})}),Object(m.jsx)(L.b,{path:"/search",children:Object(m.jsx)(I,{title:"Search Results",data:[]})})]}):1===b?Object(m.jsx)(I,{title:"Chats",data:[d]}):2===b?Object(m.jsx)(I,{title:"Rooms",data:[s]}):3===b?Object(m.jsx)(I,{title:"Users",data:[n]}):4===b?Object(m.jsx)(I,{title:"Search Result",data:[]}):null,Object(m.jsx)("div",{className:"sidebar__chat--addRoom",children:Object(m.jsx)(p.a,{onClick:function(){var e=prompt("Type the name Of your Room");e.trim()&&j.collection("rooms").add({name:e,timestamp:u()})},children:Object(m.jsx)(C.a,{})})})]})}i(73);function M(){return Object(m.jsx)("div",{className:"chat",children:"Chat"})}var U=i(47);function B(){var e=function(){var e=c.a.useState({width:void 0,height:void 0}),t=Object(x.a)(e,2),i=t[0],a=t[1];return c.a.useEffect((function(){function e(){if(window.innerHeight>768&&window.innerWidth>1366){var e=window.innerHeight/window.innerWidth,t=768/1366;a(t<e?{width:1366,height:window.innerHeight*(1366/window.innerWidth),transform:"scale(".concat(window.innerWidth/1366,")")}:t>e?{width:window.innerWidth*(768/window.innerHeight),height:768,transform:"scale(".concat(window.innerHeight/768,")")}:{width:1366,height:768,transform:"scale(".concat(window.innerHeight/768,")")})}a({width:window.innerWidth,height:window.innerHeight,isMobile:window.innerWidth<=760,transform:"scale(1)"})}return window.addEventListener("resize",e),e(),function(){return window.removeEventListener("resize",e)}}),[]),i}(),t=function(){var e=Object(U.a)(h),t=Object(x.a)(e,1)[0];return c.a.useEffect((function(){if(t){var e=j.collection("users").doc(t.uid);e.get().then((function(i){i.exists||e.set({name:t.displayName,photoURL:t.photoURL,timestamp:u()})}))}}),[t]),t}();return t?Object(m.jsxs)("div",{className:"app",style:Object(r.a)({},e),children:[Object(m.jsx)(L.a,{to:e.isMobile?"/chat":"/"}),Object(m.jsxs)("div",{className:"app__body",children:[Object(m.jsx)(H,{user:t,page:e}),Object(m.jsx)(L.b,{path:"/room/:roomId",children:Object(m.jsx)(M,{user:t,page:t})})]})]}):Object(m.jsx)(O,{})}i(74);n.a.render(Object(m.jsx)(c.a.StrictMode,{children:Object(m.jsx)(R.a,{children:Object(m.jsx)(B,{})})}),document.getElementById("root"))}},[[75,1,2]]]);
//# sourceMappingURL=main.f6199f81.chunk.js.map