(this["webpackJsonpreact-firebase-chat-app"]=this["webpackJsonpreact-firebase-chat-app"]||[]).push([[0],{38:function(n,e,t){"use strict";t.r(e);var r=t(3),a=t(1),c=t.n(a),i=t(21),o=t.n(i),u=t(11),s=t(16),b=t.n(s),d=t(22),f=t(23),p=t(5),l=t(6);function j(){var n=Object(p.a)(["\npadding:12px 20px;\nfont-size:26px;\nbackground-color: #333;\nborder:none;\ncolor:white;\n"]);return j=function(){return n},n}function x(){var n=Object(p.a)(['\nfont-family: "Roboto", sans-serif;\npadding:12px;\nfont-size:16px;\ncolor: #ddd;\nbackground-color: #222;\nborder-radius:0;\nborder:none;\n&::placeholder{\n}\n&:focus{\n    border:none;\n    outline:none;\n    background-color: #333;\n}\n']);return x=function(){return n},n}function h(){var n=Object(p.a)(["\nwidth:100%;\nmax-width:1200px;\nmargin:0;\npadding:0;\ndisplay:grid;\ngrid-template-columns:1fr auto;\nposition:fixed;\nbottom:0;\n"]);return h=function(){return n},n}function g(){var n=Object(p.a)(["\nfont-size:14px;\ntext-align:center;\nflex-grow:0;\ncolor:#ccc;\nmargin: 0 8px;\n"]);return g=function(){return n},n}function m(){var n=Object(p.a)(["\nfont-size:18px;\nbackground-color: #444;\npadding: 8px 12px;\nmargin: 0 8px;\nborder-radius:10px;\n"]);return m=function(){return n},n}function O(){var n=Object(p.a)(["\nwidth:45px;\nborder-radius:50%;\nalign-self:flex-start;\n"]);return O=function(){return n},n}function v(){var n=Object(p.a)(["\ndisplay: flex;\nwidth: 100%;\nalign-items:center;\nmargin:8px 0;\nflex-direction:",";\n"]);return v=function(){return n},n}function w(){var n=Object(p.a)(["\nlist-style: none;\ndisplay:flex;\nflex-direction:column;\nmargin: 0px;\npadding:16px;\n"]);return w=function(){return n},n}function k(){var n=Object(p.a)(["\nwidth:100vw;\nmax-width:1200px;\nmargin: 0 auto;\nmargin-bottom:60px;\n"]);return k=function(){return n},n}var y=l.b.section(k()),A=l.b.ul(w()),S=l.b.li(v(),(function(n){return n.isAuthor?"row-reverse":"unset"})),z=l.b.img(O()),I=l.b.p(m()),U=l.b.div(g()),D=l.b.form(h()),R=l.b.input(x()),C=l.b.button(j()),L=t(28),B=function(n){var e=n.firebase,t=n.firestore,c=n.auth,i=t.collection("messages"),o=i.orderBy("createdAt"),s=Object(f.a)(o),p=Object(u.a)(s,1)[0],l=Object(a.useState)(""),j=Object(u.a)(l,2),x=j[0],h=j[1];Object(a.useEffect)((function(){}),[p]);var g=function(){var n=Object(d.a)(b.a.mark((function n(t){var r,a,o;return b.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(t.preventDefault(),r=c.currentUser,a=r.uid,o=r.photoURL,""===x.trim()){n.next=6;break}return n.next=5,i.add({text:x,createdAt:e.firestore.FieldValue.serverTimestamp(),uid:a,photoURL:o});case 5:h("");case 6:m.current&&m.current.scrollIntoView({behavior:"smooth"});case 7:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),m=Object(a.useRef)(),O=c.currentUser.uid;return Object(r.jsxs)(y,{children:[Object(r.jsxs)(A,{children:[p&&p.map((function(n){return Object(r.jsxs)(S,{isAuthor:n.uid===O,className:n.id,children:[Object(r.jsx)(z,{alt:"avatar",src:n.photoURL}),Object(r.jsx)(I,{children:n.text}),Object(r.jsx)(U,{children:n.createdAt?"".concat(new Date(1e3*n.createdAt.seconds).toLocaleTimeString(),"\n                     ").concat(new Date(1e3*n.createdAt.seconds).toLocaleDateString()):""})]},Object(L.a)())})),Object(r.jsx)("div",{ref:m})]}),Object(r.jsxs)(D,{onSubmit:g,children:[Object(r.jsx)(R,{placeholder:"Write a message here",value:x,onChange:function(n){h(n.target.value)}}),Object(r.jsx)(C,{children:"\u2b06\ufe0f"})]})]})},G=t(9),H=(t(20),t(15),t(27));function K(){var n=Object(p.a)(["\nmargin: 0 12px;\nfont-family: 'Sansita Swashed', cursive;\nfont-size: 28px;\nfont-weight:bold;\ncolor:#eee;\npadding: 12px;\n"]);return K=function(){return n},n}function N(){var n=Object(p.a)(["\n    width:100%;\n    max-width:1200px;\n    display: flex;\n    align-items:center;\n    justify-content:space-between;\n    margin: 0 auto;\n"]);return N=function(){return n},n}var T=l.b.nav(N()),W=l.b.h1(K());function E(){var n=Object(p.a)(["\n    background-color: blue;\n    outline: none;\n    color: white;\n    font-size: 18px;\n    padding:10px 20px;\n    border: none;\n    border-radius:10px;\n"]);return E=function(){return n},n}var J=l.b.button(E()),M=function(n){var e=n.children,t=n.onClick;return Object(r.jsx)(J,{onClick:t,children:e})},P=function(n){var e=n.auth;return e.currentUser&&Object(r.jsx)(M,{onClick:function(){return e.signOut()},children:"Sign out"})},Q=function(n){var e=n.auth;return Object(r.jsx)(M,{onClick:function(){var n=new G.a.auth.GoogleAuthProvider;e.signInWithPopup(n)},children:"Sign in with Google"})},V=function(n){var e=n.auth;return Object(r.jsxs)(T,{children:[Object(r.jsx)(W,{children:"Chat App"}),e.currentUser?Object(r.jsx)(P,{auth:e}):Object(r.jsx)(Q,{auth:e})]})};G.a.initializeApp({apiKey:"AIzaSyDWBkQjdvZjHIpip9Z1bm9IpDmzc1XxQmM",authDomain:"react-firebase-chat-app-505e9.firebaseapp.com",databaseURL:"https://react-firebase-chat-app-505e9.firebaseio.com",projectId:"react-firebase-chat-app-505e9",storageBucket:"react-firebase-chat-app-505e9.appspot.com",messagingSenderId:"56873190707",appId:"1:56873190707:web:ae292904dd7bcdb7542a46",measurementId:"G-NKK3HT6H63"});var Z=G.a.auth(),F=G.a.firestore();var X=function(){var n=Object(H.a)(Z),e=Object(u.a)(n,1)[0];return Object(r.jsxs)("div",{className:"App",children:[Object(r.jsx)(V,{auth:Z}),e?Object(r.jsx)(B,{firebase:G.a,firestore:F,auth:Z}):""]})};function q(){var n=Object(p.a)(["\n    *,*::before,*::after{\n    box-sizing:border-box;\n    }\n    body {\n    margin: 0;\n    color: white;\n    background-color: black;\n    font-family: 'Roboto', sans-serif;\n    }\n"]);return q=function(){return n},n}var Y=Object(l.a)(q());o.a.render(Object(r.jsxs)(c.a.StrictMode,{children:[Object(r.jsx)(Y,{}),Object(r.jsx)(X,{})]}),document.getElementById("root"))}},[[38,1,2]]]);
//# sourceMappingURL=main.99e6bbed.chunk.js.map