(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[4],{16:function(e,t,n){e.exports={navLink:"NavLink_navLink__2p_y-",navActiveLink:"NavLink_navActiveLink__2MuNs"}},25:function(e,t,n){e.exports={userWrapper:"UserMenu_userWrapper__NI5YD",userImg:"UserMenu_userImg__1sgqu",userWelcome:"UserMenu_userWelcome__26ajr",logOutBtn:"UserMenu_logOutBtn__2uBLx"}},32:function(e,t,n){"use strict";var r,c=n(3),a=n(4),s=n(5),u=Object(a.e)({name:"auth",initialState:{user:{name:null,email:null},token:null,isLoggedIn:!1,isRefreshingUser:!1,errorMessage:null},extraReducers:(r={},Object(c.a)(r,s.a.register.fulfilled,(function(e,t){e.user=t.payload.user,e.token=t.payload.token,e.isLoggedIn=!0,e.errorMessage=null})),Object(c.a)(r,s.a.register.rejected,(function(e,t){e.errorMessage=t.payload})),Object(c.a)(r,s.a.logIn.fulfilled,(function(e,t){e.user=t.payload.user,e.token=t.payload.token,e.isLoggedIn=!0,e.errorMessage=null})),Object(c.a)(r,s.a.logIn.rejected,(function(e,t){e.errorMessage=t.payload})),Object(c.a)(r,s.a.logOut.fulfilled,(function(e,t){e.user={name:null,email:null},e.token=null,e.isLoggedIn=!1})),Object(c.a)(r,s.a.fetchCurrentUser.pending,(function(e){e.isRefreshingUser=!0})),Object(c.a)(r,s.a.fetchCurrentUser.fulfilled,(function(e,t){e.user=t.payload,e.isLoggedIn=!0,e.isRefreshingUser=!1})),Object(c.a)(r,s.a.fetchCurrentUser.rejected,(function(e){e.isRefreshingUser=!1})),r)});t.a=u.reducer},5:function(e,t,n){"use strict";n.d(t,"b",(function(){return c})),n.d(t,"a",(function(){return r}));var r={};n.r(r),n.d(r,"register",(function(){return d})),n.d(r,"logIn",(function(){return f})),n.d(r,"logOut",(function(){return O})),n.d(r,"fetchCurrentUser",(function(){return h}));var c={getIsLoggedIn:function(e){return e.auth.isLoggedIn},getUsername:function(e){return e.auth.user.name},getIsRefreshingUser:function(e){return e.auth.isRefreshingUser},getErrorMessage:function(e){return e.auth.errorMessage}},a=n(17),s=n.n(a),u=n(24),o=n(19),i=n.n(o),l=n(4);i.a.defaults.baseURL="https://connections-api.herokuapp.com";var b=function(e){i.a.defaults.headers.common.Authorization="Bearer ".concat(e)},j=function(){i.a.defaults.headers.common.Authorization=""},d=Object(l.c)("auth/register",function(){var e=Object(u.a)(s.a.mark((function e(t,n){var r,c;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.a.post("/users/signup",t);case 3:return r=e.sent,c=r.data,b(c.token),e.abrupt("return",c);case 9:return e.prev=9,e.t0=e.catch(0),e.abrupt("return",n.rejectWithValue("Sorry but user with such name already exists, please try another combination"));case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t,n){return e.apply(this,arguments)}}()),f=Object(l.c)("auth/login",function(){var e=Object(u.a)(s.a.mark((function e(t,n){var r,c;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.a.post("/users/login",t);case 3:return r=e.sent,c=r.data,b(c.token),e.abrupt("return",c);case 9:return e.prev=9,e.t0=e.catch(0),e.abrupt("return",n.rejectWithValue("Sorry email or password is wrong, please try another combination"));case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t,n){return e.apply(this,arguments)}}()),O=Object(l.c)("auth/logout",Object(u.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.a.post("/users/logout");case 3:j(),e.next=9;break;case 6:return e.prev=6,e.t0=e.catch(0),e.abrupt("return",new Error(e.t0.massage));case 9:case"end":return e.stop()}}),e,null,[[0,6]])})))),h=Object(l.c)("auth/refresh",function(){var e=Object(u.a)(s.a.mark((function e(t,n){var r,c,a,u;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=n.getState(),null!==(c=r.auth.token)){e.next=5;break}return console.log("there is not token"),e.abrupt("return",n.rejectWithValue());case 5:return b(c),e.prev=6,e.next=9,i.a.get("/users/current");case 9:return a=e.sent,u=a.data,e.abrupt("return",u);case 14:return e.prev=14,e.t0=e.catch(6),e.abrupt("return",e.t0.massage);case 17:case"end":return e.stop()}}),e,null,[[6,14]])})));return function(t,n){return e.apply(this,arguments)}}());n(32)},50:function(e,t,n){e.exports={header:"Appbar_header__P0ILF"}},51:function(e,t,n){e.exports={container:"App_container__1MQN3"}},61:function(e,t,n){},7:function(e,t,n){"use strict";n.d(t,"i",(function(){return c})),n.d(t,"j",(function(){return a})),n.d(t,"h",(function(){return s})),n.d(t,"b",(function(){return u})),n.d(t,"c",(function(){return o})),n.d(t,"a",(function(){return i})),n.d(t,"f",(function(){return l})),n.d(t,"g",(function(){return b})),n.d(t,"e",(function(){return j})),n.d(t,"d",(function(){return d}));var r=n(4),c=Object(r.b)("contacts/fetchContactsRequest"),a=Object(r.b)("contacts/fetchContactsSuccess"),s=Object(r.b)("contacts/fetchContactsError"),u=Object(r.b)("contacts/addContactRequest"),o=Object(r.b)("contacts/addContactSuccess"),i=Object(r.b)("contacts/addContactError"),l=Object(r.b)("contacts/deleteContactRequest"),b=Object(r.b)("contacts/deleteContactSuccess"),j=Object(r.b)("contacts/deleteContactError"),d=Object(r.b)("contacts/changeFilter")},85:function(e,t,n){"use strict";n.r(t);var r=n(0),c=n.n(r),a=n(26),s=n.n(a),u=n(8),o=n(15),i=n(48),l=(n(61),n(6)),b=n(21),j=n(33),d=n(5),f=n(1),O=["children","redirectTo"];function h(e){var t=e.children,n=e.redirectTo,r=Object(j.a)(e,O),c=Object(u.d)(d.b.getIsLoggedIn);return Object(f.jsx)(l.b,Object(b.a)(Object(b.a)({},r),{},{children:c?t:Object(f.jsx)(l.a,{to:n})}))}var g=["children","restricted","redirectTo"];function p(e){var t=e.children,n=e.restricted,r=void 0!==n&&n,c=e.redirectTo,a=void 0===c?"/":c,s=Object(j.a)(e,g),o=Object(u.d)(d.b.getIsLoggedIn)&&r;return Object(f.jsx)(l.b,Object(b.a)(Object(b.a)({},s),{},{children:o?Object(f.jsx)(l.a,{to:a}):t}))}var v=n(16),m=n.n(v),x=function(){var e=Object(u.d)(d.b.getIsLoggedIn);return Object(f.jsxs)("div",{children:[Object(f.jsx)(o.c,{to:"/",exact:!0,className:m.a.navLink,activeClassName:m.a.navActiveLink,children:"Home"}),e&&Object(f.jsx)(o.c,{to:"/contacts",className:m.a.navLink,activeClassName:m.a.navActiveLink,children:"Contacts"})]})},k=function(){return Object(f.jsxs)("div",{children:[Object(f.jsx)(o.c,{to:"/register",className:m.a.navLink,activeClassName:m.a.navActiveLink,children:"Register"}),Object(f.jsx)(o.c,{to:"/login",className:m.a.navLink,activeClassName:m.a.navActiveLink,children:"Login"})]})},y=n.p+"static/media/defaultAvatar.2e489267.jpeg",L=n(25),I=n.n(L),_=function(){var e=Object(u.c)(),t=Object(u.d)(d.b.getUsername);return Object(f.jsxs)("div",{className:I.a.userWrapper,children:[Object(f.jsx)("img",{src:y,alt:"user",className:I.a.userImg}),Object(f.jsxs)("p",{className:I.a.userWelcome,children:["Welcome, ",t]}),Object(f.jsx)("button",{className:I.a.logOutBtn,onClick:function(){return e(d.a.logOut())},children:"Log out"})]})},C=n(50),N=n.n(C),U=function(){var e=Object(u.d)(d.b.getIsLoggedIn);return Object(f.jsxs)("header",{className:N.a.header,children:[Object(f.jsx)(x,{}),e?Object(f.jsx)(_,{}):Object(f.jsx)(k,{})]})},w=n(51),M=n.n(w),R=Object(r.lazy)((function(){return n.e(2).then(n.bind(null,202))})),A=Object(r.lazy)((function(){return n.e(5).then(n.bind(null,203))})),W=Object(r.lazy)((function(){return Promise.all([n.e(0),n.e(6)]).then(n.bind(null,214))})),S=Object(r.lazy)((function(){return Promise.all([n.e(0),n.e(3)]).then(n.bind(null,215))})),z=Object(r.lazy)((function(){return n.e(1).then(n.bind(null,212))}));var E,T,B,q=function(){var e=Object(u.c)(),t=Object(u.d)(d.b.getIsRefreshingUser);return Object(r.useEffect)((function(){e(d.a.fetchCurrentUser())}),[e]),!t&&Object(f.jsxs)("div",{className:M.a.container,children:[Object(f.jsx)(U,{}),Object(f.jsx)(r.Suspense,{fallback:Object(f.jsx)("h1",{children:"Loading..."}),children:Object(f.jsxs)(l.d,{children:[Object(f.jsx)(p,{exact:!0,path:"/",children:Object(f.jsx)(R,{})}),Object(f.jsx)(p,{path:"/register",restricted:!0,children:Object(f.jsx)(W,{})}),Object(f.jsx)(p,{path:"/login",restricted:!0,redirectTo:"/contacts",children:Object(f.jsx)(S,{})}),Object(f.jsx)(h,{path:"/contacts",redirectTo:"/login",children:Object(f.jsx)(z,{})}),Object(f.jsx)(l.b,{component:A})]})})]})},P=n(28),V=n(4),F=n(18),J=n(52),D=n.n(J),H=n(53),Q=n.n(H),Y=n(3),G=n(9),K=n(7),X=Object(V.d)([],(E={},Object(Y.a)(E,K.j,(function(e,t){return t.payload})),Object(Y.a)(E,K.c,(function(e,t){var n=t.payload;return[].concat(Object(P.a)(e),[n])})),Object(Y.a)(E,K.g,(function(e,t){var n=t.payload;return e.filter((function(e){return e.id!==n}))})),E)),Z=Object(V.d)("",Object(Y.a)({},K.d,(function(e,t){return t.payload}))),$=Object(V.d)(!1,(T={},Object(Y.a)(T,K.i,(function(){return!0})),Object(Y.a)(T,K.j,(function(){return!1})),Object(Y.a)(T,K.h,(function(){return!1})),Object(Y.a)(T,K.b,(function(){return!0})),Object(Y.a)(T,K.c,(function(){return!1})),Object(Y.a)(T,K.a,(function(){return!1})),Object(Y.a)(T,K.f,(function(){return!0})),Object(Y.a)(T,K.g,(function(){return!1})),Object(Y.a)(T,K.e,(function(){return!1})),T)),ee=Object(V.d)(null,(B={},Object(Y.a)(B,K.h,(function(e,t){return t.payload})),Object(Y.a)(B,K.a,(function(e,t){return t.payload})),Object(Y.a)(B,K.e,(function(e,t){return t.payload})),B)),te=Object(G.b)({items:X,filter:Z,loading:$,error:ee}),ne=n(32),re=[].concat(Object(P.a)(Object(V.f)({serializableCheck:{ignoredActions:[F.a,F.f,F.b,F.c,F.d,F.e]}})),[Q.a]),ce={key:"auth",storage:D.a,whitelist:["token"]},ae=Object(V.a)({reducer:{auth:Object(F.g)(ce,ne.a),contacts:te},middleware:re,devTools:!1}),se=Object(F.h)(ae);s.a.render(Object(f.jsx)(c.a.StrictMode,{children:Object(f.jsx)(u.a,{store:ae,children:Object(f.jsx)(i.a,{loading:null,persistor:se,children:Object(f.jsx)(o.a,{children:Object(f.jsx)(q,{})})})})}),document.getElementById("root"))}},[[85,7,8]]]);
//# sourceMappingURL=main.3b308719.chunk.js.map