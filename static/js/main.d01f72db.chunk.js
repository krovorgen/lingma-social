(this["webpackJsonplingma-social"]=this["webpackJsonplingma-social"]||[]).push([[0],[,,,,function(e,s,t){e.exports={menu:"style_menu__jCJli","menu__list-item":"style_menu__list-item__16Fko","menu__list-link":"style_menu__list-link__1NnO_","menu__list-link--active":"style_menu__list-link--active__3YS9T"}},,,,,function(e,s,t){e.exports={dialogs:"style_dialogs__1hFuy","dialog-items":"style_dialog-items__2ro_t","message-items":"style_message-items__1DWV6"}},,function(e,s,t){e.exports={post:"style_post__1d6tc","gradient-border":"style_gradient-border__2vOko",animatedgradient:"style_animatedgradient__4HDnI",post__img:"style_post__img__deIQz",post__likes:"style_post__likes__3LX4C","post__likes-images":"style_post__likes-images__3NSxw"}},,function(e,s,t){e.exports={"my-posts":"style_my-posts__2fFY5","my-posts__textarea":"style_my-posts__textarea__cMJXO","my-posts__form":"style_my-posts__form__2wUaq","my-posts__button":"style_my-posts__button__3aJVk",fly:"style_fly__2Edcw",sended:"style_sended___utbM",flyout:"style_flyout__1lwT4"}},function(e,s,t){e.exports={header:"style_header__V4o_5",header__logo:"style_header__logo__1vx65","App-logo-spin":"style_App-logo-spin__2j9uw",header__title:"style_header__title__3zZLz"}},,,,,,,function(e,s,t){e.exports={"main-page__images":"style_main-page__images__2nduS"}},,,,,function(e,s,t){e.exports={"main-page__images":"style_main-page__images__2c4Ty"}},function(e,s,t){},function(e,s,t){},function(e,s,t){},function(e,s,t){},function(e,s,t){},,,,,,function(e,s,t){},,,,,,,,,function(e,s,t){"use strict";t.r(s);var a=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,47)).then((function(s){var t=s.getCLS,a=s.getFID,n=s.getFCP,i=s.getLCP,c=s.getTTFB;t(e),a(e),n(e),i(e),c(e)}))},n=t(17),i="ADD-POST",c="UPDATE-ADD-POST-TEXT",l={posts:[],newPostText:""},r=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l,s=arguments.length>1?arguments[1]:void 0;switch(s.type){case i:var t={id:1,message:e.newPostText,like:0};return e.posts.unshift(t),e.newPostText="",e;case c:return e.newPostText=s.newText,e;default:return e}},_="ADD-MESSAGE",o="UPDATE-NEW-MESSAGE-TEXT",m={dialogs:[{id:1,name:"Maksim"},{id:2,name:"Sergey"},{id:3,name:"Vadim"}],messages:[],newMessageText:""},d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,s=arguments.length>1?arguments[1]:void 0;switch(s.type){case _:var t={id:1,message:e.newMessageText};return e.messages.push(t),e.newMessageText="",e;case o:return e.newMessageText=s.newText,e;default:return e}},j={},u=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j;return e},g=Object(n.a)({profilePage:r,dialogsPage:d,sidebar:u}),x=Object(n.b)(g),p=t(1),b=t.n(p),h=t(24),O=t.n(h),f=t(8),v=(t(37),t(14)),y=t.n(v),N=t(0),w=function(){return Object(N.jsxs)("header",{className:y.a.header,children:[Object(N.jsx)("img",{className:y.a.header__logo,src:"img/react.svg",alt:"logo"}),Object(N.jsx)("h1",{className:y.a.header__title,children:"LINGMA SOCIAL"})]})},k=t(4),T=t.n(k),P=function(){return Object(N.jsx)("nav",{className:T.a.menu,children:Object(N.jsxs)("ul",{className:T.a.menu__list,children:[Object(N.jsx)("li",{className:T.a["menu__list-item"],children:Object(N.jsx)(f.b,{to:"/profile",activeClassName:T.a["menu__list-link--active"],className:T.a["menu__list-link"],children:"Profile"})}),Object(N.jsx)("li",{className:T.a["menu__list-item"],children:Object(N.jsx)(f.b,{to:"/dialogs",activeClassName:T.a["menu__list-link--active"],className:T.a["menu__list-link"],children:"Messages"})}),Object(N.jsx)("li",{className:T.a["menu__list-item"],children:Object(N.jsx)(f.b,{to:"/news",activeClassName:T.a["menu__list-link--active"],className:T.a["menu__list-link"],children:"News"})}),Object(N.jsx)("li",{className:T.a["menu__list-item"],children:Object(N.jsx)(f.b,{to:"/music",activeClassName:T.a["menu__list-link--active"],className:T.a["menu__list-link"],children:"Music"})}),Object(N.jsx)("li",{className:T.a["menu__list-item"],children:Object(N.jsx)(f.b,{to:"/settings",activeClassName:T.a["menu__list-link--active"],className:T.a["menu__list-link"],children:"Settings"})})]})})},C=t(11),S=t.n(C),M=function(e){var s=e.message,t=e.like;return Object(N.jsxs)("div",{className:S.a.post,children:[Object(N.jsx)("div",{className:S.a["gradient-border"],children:Object(N.jsx)("img",{className:S.a.post__img,src:"img/avatar.jpg",alt:"avatar"})}),Object(N.jsx)("div",{className:S.a.post__text,children:s||"Empty message"}),Object(N.jsxs)("div",{className:S.a.post__likes,children:[t||0,Object(N.jsx)("div",{className:S.a["post__likes-images"],children:Object(N.jsxs)("svg",{height:"22px",version:"1.1",viewBox:"0 0 512 512",width:"22px",xmlSpace:"preserve",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",children:[Object(N.jsx)("g",{id:"_x31_66_x2C__Heart_x2C__Love_x2C__Like_x2C__Twitter",children:Object(N.jsx)("g",{children:Object(N.jsx)("path",{d:"M365.4,59.628c60.56,0,109.6,49.03,109.6,109.47c0,109.47-109.6,171.8-219.06,281.271    C146.47,340.898,37,278.568,37,169.099c0-60.44,49.04-109.47,109.47-109.47c54.73,0,82.1,27.37,109.47,82.1    C283.3,86.999,310.67,59.628,365.4,59.628z"})})}),Object(N.jsx)("g",{id:"Layer_1"})]})})]})]})},A=t(13),E=t.n(A),D=function(e){var s=e.posts,t=e.newPostText,a=e.dispatch,n=s.map((function(e){return Object(N.jsx)(M,{message:e.message,like:e.like})})),l=b.a.createRef();return Object(N.jsxs)("div",{className:E.a["my-posts"],children:[Object(N.jsxs)("div",{className:E.a["my-posts__form"],children:[Object(N.jsx)("textarea",{className:E.a["my-posts__textarea"],onChange:function(){var e=l.current.value;a(function(e){return{type:c,newText:e}}(e))},ref:l,placeholder:"Write your message",value:t}),Object(N.jsx)("button",{className:E.a["my-posts__button"],onClick:function(){a({type:i})},children:"Add post"})]}),n]})},L=t(21),F=t.n(L),I=function(){return Object(N.jsxs)(N.Fragment,{children:[Object(N.jsx)("div",{className:F.a["main-page__images"],children:Object(N.jsx)("img",{src:"img/main-bg.jpg",alt:"",className:F.a["main-page__img"]})}),Object(N.jsx)("div",{children:"ava + description"})]})},J=t(26),X=t.n(J),z=function(e){var s=e.profilePage,t=e.dispatch;return Object(N.jsxs)("div",{className:X.a["main-page"],children:[Object(N.jsx)(I,{}),Object(N.jsx)(D,{posts:s.posts,newPostText:s.newPostText,dispatch:t})]})},V=t(27),B=t.n(V),G=function(e){var s=e.name,t=e.id;return Object(N.jsx)("li",{className:B.a["dialog-item"],children:Object(N.jsx)(f.b,{to:"/dialogs/".concat(t),children:s})})},U=t(28),W=t.n(U),H=function(e){var s=e.message;return Object(N.jsx)("li",{className:W.a["message-item"],children:s})},Y=t(9),q=t.n(Y),Q=function(e){var s=e.dialogsPage,t=e.dispatch;console.log(s.newMessageText);var a=s.dialogs.map((function(e){return Object(N.jsx)(G,{name:e.name,id:e.id})})),n=s.messages.map((function(e){return Object(N.jsx)(H,{message:e.message})}));return Object(N.jsxs)("div",{className:q.a.dialogs,children:[Object(N.jsx)("div",{className:q.a["dialog-items"],children:a}),Object(N.jsxs)("div",{className:q.a["message-items"],children:[Object(N.jsx)("ul",{className:q.a["message-elements"],children:n}),Object(N.jsxs)("div",{className:q.a["message-form"],children:[Object(N.jsx)("textarea",{className:q.a["message-form__textarea"],onChange:function(e){var s=e.target.value;t(function(e){return{type:o,newText:e}}(s))},value:s.newMessageText}),Object(N.jsx)("button",{className:q.a["message-form__button"],onClick:function(){t({type:_})},children:"Add post"})]})]})]})},R=t(29),Z=t.n(R),K=function(){return Object(N.jsx)("div",{className:Z.a.news,children:"news"})},$=t(30),ee=t.n($),se=function(){return Object(N.jsx)("div",{className:ee.a.music,children:"music"})},te=t(31),ae=t.n(te),ne=function(){return Object(N.jsx)("div",{className:ae.a.settings,children:"settings"})},ie=t(2),ce=function(e){var s=e.state,t=e.dispatch;return Object(N.jsxs)("div",{className:"container",children:[Object(N.jsx)(w,{}),Object(N.jsx)(P,{}),Object(N.jsxs)("div",{className:"container__content",children:[Object(N.jsx)(ie.a,{path:"/profile",render:function(){return Object(N.jsx)(z,{profilePage:s.profilePage,dispatch:t})}}),Object(N.jsx)(ie.a,{path:"/dialogs",render:function(){return Object(N.jsx)(Q,{dialogsPage:s.dialogsPage,dispatch:t})}}),Object(N.jsx)(ie.a,{path:"/news",render:function(){return Object(N.jsx)(K,{})}}),Object(N.jsx)(ie.a,{path:"/music",render:function(){return Object(N.jsx)(se,{})}}),Object(N.jsx)(ie.a,{path:"/settings",render:function(){return Object(N.jsx)(ne,{})}})]})]})},le=function(e){O.a.render(Object(N.jsx)(b.a.StrictMode,{children:Object(N.jsx)(f.a,{children:Object(N.jsx)(ce,{state:e,dispatch:x.dispatch.bind(x)})})}),document.getElementById("root"))};le(x.getState()),x.subscribe((function(){var e=x.getState();le(e)})),a()}],[[46,1,2]]]);
//# sourceMappingURL=main.d01f72db.chunk.js.map