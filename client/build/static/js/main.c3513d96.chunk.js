(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{172:function(e,t,a){e.exports=a(332)},177:function(e,t,a){},178:function(e,t,a){},308:function(e,t,a){},330:function(e,t,a){},331:function(e,t,a){},332:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),c=a(8),l=a.n(c),o=(a(177),a(146)),m=a(147),i=a(158),s=a(148),u=a(159),d=a(31),p=a(19),E=(a(178),a(12)),f=a(105),b=a(60),v=a.n(b),g=a(151),h=a.n(g);a(279),a(280);var N=function(e){var t=e.events,a=t.length>0?t.map(function(e){return{title:e.event,start:e.eventStart,end:e.eventEnd}}):[],c=Object(f.b)(v.a),l=h()(f.a),o=v()().toDate(),m=v()().add(1,"days").toDate(),i=Object(n.useState)(o),s=Object(E.a)(i,2),u=(s[0],s[1],Object(n.useState)(m)),d=Object(E.a)(u,2),p=(d[0],d[1],Object(n.useState)("Some title")),b=Object(E.a)(p,2);return b[0],b[1],r.a.createElement("div",{className:"col-md-8"},r.a.createElement(l,{defaultDate:v()().toDate(),defaultView:"month",events:t?a:[],localizer:c,onEventDrop:function(e){console.log(e)},onEventResize:function(e){e.startDate,e.endDate,console.log(e)},resizable:!0}))},w=a(33),j=a(55),O=a(44),x=a.n(O),y=function(e){return x.a.post("/api/event",e)},C=function(e){return console.log("we made it here"),x.a.get("/api/calendar/"+e)},S=function(e){return x.a.post("/api/group",e)},D=function(e){return x.a.post("/api/updategroup",e)},k=function(e){return x.a.get("/api/getcalendars/"+e)},F=function(e){var t=e.calendar,a=Object(n.useState)({event:"",eventStart:"",eventEnd:"",description:"",calName:t}),c=Object(E.a)(a,2),l=c[0],o=c[1];Object(n.useEffect)(function(){o(Object(j.a)({},l,{calName:e.calendar}))},[e.calendar]);var m=function(e){var t=e.target,a=t.name,n=t.value;o(Object(j.a)({},l,Object(w.a)({},a,n)))};return r.a.createElement("form",null,r.a.createElement("div",{className:"form-group"},r.a.createElement("h2",{className:"textCenter"},"Create Event"),r.a.createElement("label",{htmlFor:"newEventTitle"},"Event Title"),r.a.createElement("input",{type:"text",name:"event",onChange:m,value:l.event,className:"form-control",id:"newEventTitle"})),r.a.createElement("div",{class:"row"},r.a.createElement("div",{className:"col-md-6 form-group"},r.a.createElement("label",{htmlFor:"newEventDate"},"Start Date"),r.a.createElement("input",{placeholder:"MM-DD-YYYY",type:"text",name:"eventStart",onChange:m,value:l.eventStart,className:"form-control",id:"newEventDate"})),r.a.createElement("div",{className:"col-md-6 form-group"},r.a.createElement("label",{htmlFor:"newEventDate"},"End Date"),r.a.createElement("input",{placeholder:"MM-DD-YYYY",type:"text",name:"eventEnd",onChange:m,value:l.eventEnd,className:"form-control",id:"newEventDate"}))),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"description"},"Description (optional)"),r.a.createElement("p",null),r.a.createElement("textarea",{type:"text",name:"description",onChange:m,value:l.description,id:"description"})),r.a.createElement("div",{className:"alignRight"},r.a.createElement("button",{type:"Create Event",onClick:function(t){t.preventDefault(),y(l).then(function(t){e.getEvents()}).catch(function(e){console.log(e)})},className:"btn btn-primary"},"Submit")))},R=a(43),I=a.n(R),L=(a(96),a(97),a(98),a(160)),G=a(152),P=a.n(G).a.initializeApp({apiKey:"AIzaSyBDiZ1cd__o8osgSq5oy_DAsCrfD84EI0A",authDomain:"collabcal-861dc.firebaseapp.com",databaseURL:"https://collabcal-861dc.firebaseio.com",projectId:"collabcal-861dc",storageBucket:"collabcal-861dc.appspot.com",messagingSenderId:"902494027901",appId:"1:902494027901:web:d19b22b4b665cf16f2f114",measurementId:"G-2847LL859L"}),B=Object(n.createContext)(),Y=B.Provider,A=function(e){e.value;var t=Object(L.a)(e,["value"]),a=Object(n.useState)(null),c=Object(E.a)(a,2),l=c[0],o=c[1];return Object(n.useEffect)(function(){P.auth().onAuthStateChanged(function(e){return o(e)})},[]),r.a.createElement(Y,Object.assign({value:[l,o]},t))},U=function(){return Object(n.useContext)(B)},W=I.a.auth(),J=function(e){var t=U(),a=Object(E.a)(t,2);a[0],a[1];return r.a.createElement("header",null,r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-10"},r.a.createElement("a",{href:"/calendar"},r.a.createElement("p",{id:"title"},"CollabCal"))),r.a.createElement("div",{className:"userInfo col-md-2"},r.a.createElement("a",{href:"/calendar"},r.a.createElement("p",{id:"username"},e.name)),r.a.createElement("div",{className:"dropdown"},r.a.createElement("button",{className:"btn btn-secondary dropdown-toggle",type:"button",id:"dropdownMenuButton","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},r.a.createElement("div",{id:"circle"})),r.a.createElement("div",{className:"dropdown-menu dropdown-menu-right","aria-labelledby":"dropdownMenuButton"},r.a.createElement("a",{className:"dropdown-item",href:"/group"},"Create a Group"),r.a.createElement("a",{className:"dropdown-item",href:"/join"},"Join a Group"),r.a.createElement("a",{className:"dropdown-item",href:"/calendar"},"Back to Calendars"),r.a.createElement("a",{className:"dropdown-item",href:"/loggedout"},r.a.createElement(M,null)))))))};function M(){return W.currentUser&&r.a.createElement(d.b,{to:"/loggedout"},r.a.createElement("a",{className:"sign-out",onClick:function(){return W.signOut()}},"Logout"))}var q=a(103),z=a.n(q),T=a(153),V=(a(308),a(309),a(154)),H=I.a.auth(),_=I.a.firestore();function K(){return r.a.createElement("div",null,r.a.createElement(Z,null))}function Z(){var e=Object(n.useRef)(),t=_.collection("channels"),a=t.orderBy("createdAt").limit(25),c=Object(V.a)(a,{idField:"id"}),l=Object(E.a)(c,1)[0],o=Object(n.useState)(""),m=Object(E.a)(o,2),i=m[0],s=m[1],u=function(){var a=Object(T.a)(z.a.mark(function a(n){var r,c,l;return z.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return n.preventDefault(),r=H.currentUser,c=r.uid,l=r.photoURL,a.next=4,t.add({calendar:"nick",text:i,createdAt:I.a.firestore.FieldValue.serverTimestamp(),uid:c,photoURL:l});case 4:s(""),e.current.scrollIntoView({behavior:"smooth"});case 6:case"end":return a.stop()}},a)}));return function(e){return a.apply(this,arguments)}}();return r.a.createElement("div",{className:"chat-app"},r.a.createElement("header",{className:"chat-header"},r.a.createElement("h2",null,"Chat")),r.a.createElement("div",{className:"chat-main"},l&&l.filter(function(e){return"nick"===e.calendar}).map(function(e){return r.a.createElement($,{key:e.id,message:e})}),r.a.createElement("span",{ref:e})),r.a.createElement("form",{className:"chat-form",onSubmit:u},r.a.createElement("input",{className:"chat-input",value:i,onChange:function(e){return s(e.target.value)},placeholder:"message"}),r.a.createElement("button",{className:"chat-button",type:"submit",disabled:!i},r.a.createElement("img",{alt:"send icon",id:"send",src:"images/send.png"}))))}function $(e){var t=e.message,a=t.text,n=t.uid,c=t.photoURL,l=n===H.currentUser.uid?"sent":"received";return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"message ".concat(l)},r.a.createElement("img",{alt:"logo",className:"chat-img",src:c||"https://api.adorable.io/avatars/23/abott@adorable.png"}),r.a.createElement("p",{className:"chat-p"},a)))}var Q=function(e){var t=e.cals,a=function(t){t.preventDefault(),e.onClick(t.target.value)};return r.a.createElement("div",{className:"nav nav-tabs"},r.a.createElement("ul",{className:"nav-item"},t?t.map(function(e){return r.a.createElement("button",{onClick:a,value:e.group,key:e.group},e.group)}):"You have no calendars!"))},X=function(){var e=U(),t=Object(E.a)(e,1)[0],a=Object(n.useState)([]),c=Object(E.a)(a,2),l=c[0],o=c[1],m=Object(n.useState)({currentEvents:[]}),i=Object(E.a)(m,2),s=i[0],u=i[1],d=Object(n.useState)(""),p=Object(E.a)(d,2),f=p[0],b=p[1],v=Object(n.useState)(""),g=Object(E.a)(v,2),h=g[0],w=g[1];Object(n.useEffect)(function(){t&&(b(t.displayName),k(t.uid).then(function(e){o(e.data)}).catch(function(e){console.log(e)}))},[t]);return r.a.createElement("div",null,r.a.createElement(J,{name:f}),r.a.createElement(Q,{onClick:function(e){w(e),C(e).then(function(e){u({currentEvents:e.data})}).catch(function(e){console.log(e)})},cals:l}),r.a.createElement("div",{className:"row"},r.a.createElement(N,{events:s.currentEvents}),r.a.createElement("div",{className:"col-md-4 pad"},r.a.createElement(F,{getEvents:function(){C(h).then(function(e){u({currentEvents:e.data})}).catch(function(e){console.log(e)})},calendar:h}),r.a.createElement(K,null))))},ee=a(377),te=a(375),ae=a(374),ne=a(373),re=a(376),ce=a(371),le=a(334),oe=a(369),me=I.a.auth(),ie=Object(oe.a)(function(e){return{image:{},paper:{display:"flex",flexDirection:"column",alignItems:"center",backgroundColor:"#0d1821",color:"white"},form:{width:"100%",marginTop:e.spacing(1),color:"white"},submit:{margin:e.spacing(3,0,2),backgroundColor:" #6e8894",border:"1px solid black",borderRadius:10},label:{color:"white"},textfield:{borderRadius:.25,color:"white"},logo:{height:"40vh",marginBottom:"100px"}}});function se(){var e=ie();return r.a.createElement(ce.a,{container:!0,component:"main",className:e.image},r.a.createElement(ce.a,{item:!0,xs:!1,sm:4,md:7}),r.a.createElement(ce.a,{component:ne.a,square:!0},r.a.createElement("div",{className:e.paper},r.a.createElement("img",{className:e.logo,alt:"logo",src:"images/collabcal.png"}),r.a.createElement(le.a,{component:"h1",variant:"h5"},"Log in"),r.a.createElement("form",{className:e.form,noValidate:!0},r.a.createElement(te.a,{className:e.textfield,variant:"outlined",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email"}),r.a.createElement(te.a,{margin:"normal",variant:"outlined",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",placeholder:"Password",autoComplete:"current-password"}),r.a.createElement(ee.a,{type:"submit",fullWidth:!0,variant:"contained",className:e.submit},"Sign In"),r.a.createElement(ce.a,{container:!0},r.a.createElement(ce.a,{item:!0,xs:!0},r.a.createElement(ae.a,{href:"#",variant:"body2"},"Forgot password?")),r.a.createElement(ce.a,{item:!0},r.a.createElement(ae.a,{href:"/signup",variant:"body2"},"Don't have an account? Sign Up"))),r.a.createElement(re.a,{mt:5})),r.a.createElement("h5",null,"OR"),r.a.createElement("section",null,r.a.createElement("button",{className:e.submit},r.a.createElement(ue,null))))))}function ue(){var e=U(),t=Object(E.a)(e,1)[0],a=Object(p.e)();t&&a.push("/calendar");return r.a.createElement(r.a.Fragment,null,r.a.createElement(ee.a,{className:"sign-in",onClick:function(){var e=new I.a.auth.GoogleAuthProvider;me.signInWithPopup(e)}},"Sign in with Google"))}var de=function(){return r.a.createElement("div",null,r.a.createElement(se,null))},pe=function(){var e=U(),t=Object(E.a)(e,1)[0],a=Object(n.useState)({group:"",groupmembers:""}),c=Object(E.a)(a,2),l=c[0],o=c[1];return r.a.createElement("main",null,r.a.createElement("form",{id:"login",className:"col-md-4"},r.a.createElement("h1",{className:"textCenter"},"Create a Group"),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{for:"exampleInputEmail1"},"Group Name"),r.a.createElement("input",{type:"email",className:"form-control",id:"exampleInputEmail1","aria-describedby":"emailHelp",name:"group",onChange:function(e){var a,n=e.target,r=n.name,c=n.value;o(Object(j.a)({},l,(a={},Object(w.a)(a,r,c),Object(w.a)(a,"groupmembers",t.uid),a)))},value:l.group})),r.a.createElement("div",{className:"textCenter"},r.a.createElement("button",{type:"submit",onClick:function(e){e.preventDefault(),S(l).then(function(e){}).catch(function(e){console.log(e)})},id:"createBtn",className:"btn"},"Create"))),r.a.createElement("script",{src:"./js/createGroup.js"}))},Ee=function(){var e=U(),t=Object(E.a)(e,1)[0],a=Object(n.useState)(""),c=Object(E.a)(a,2),l=c[0],o=c[1];return Object(n.useEffect)(function(){t&&o(t.displayName)},[t]),r.a.createElement("div",null,r.a.createElement(J,{name:l}),r.a.createElement(pe,null))},fe=function(){return r.a.createElement("main",null,r.a.createElement("form",{id:"signup",className:"form col-md-4 center"},r.a.createElement("h1",{className:"textCenter"},"Create an Account"),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{for:"newEmail"},"Email address"),r.a.createElement("input",{type:"email",className:"form-control",id:"newEmail","aria-describedby":"emailHelp"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{for:"newPassword"},"Password"),r.a.createElement("input",{type:"password",className:"form-control",id:"newPassword"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{for:"confirmPass"},"Confirm Password"),r.a.createElement("input",{type:"password",className:"form-control",id:"confirmPass"})),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-10"},r.a.createElement("label",{for:"newGroup"},"Join a Group"),r.a.createElement("input",{type:"password",className:"form-control",id:"newGroup"})),r.a.createElement("div",{className:"col-md-2"},r.a.createElement("div",{className:"add center"},r.a.createElement("p",{id:"plus",className:"textCenter"},"+")))),r.a.createElement("a",{href:"/",className:"textCenter"},"Log In"),r.a.createElement("div",{className:"textCenter"},r.a.createElement("button",{type:"submit",id:"acctBtn",className:"btn center"},"Create"))),r.a.createElement("script",{src:"./js/signup.js"}))},be=function(){return r.a.createElement("div",null,r.a.createElement(J,null),r.a.createElement(fe,null))},ve=a(72);function ge(){return r.a.createElement(ve.d,null,r.a.createElement(ve.i,null,r.a.createElement(ve.c,{md:"6"},r.a.createElement("form",null,r.a.createElement("p",{className:"h4 text-center mb-4"},"Sign up"),r.a.createElement("label",{htmlFor:"defaultFormRegisterNameEx",className:"grey-text"},"Your name"),r.a.createElement("input",{type:"text",id:"defaultFormRegisterNameEx",className:"form-control"}),r.a.createElement("br",null),r.a.createElement("label",{htmlFor:"defaultFormRegisterEmailEx",className:"grey-text"},"Your email"),r.a.createElement("input",{type:"email",id:"defaultFormRegisterEmailEx",className:"form-control"}),r.a.createElement("br",null),r.a.createElement("label",{htmlFor:"defaultFormRegisterConfirmEx",className:"grey-text"},"Confirm your email"),r.a.createElement("input",{type:"email",id:"defaultFormRegisterConfirmEx",className:"form-control"}),r.a.createElement("br",null),r.a.createElement("label",{htmlFor:"defaultFormRegisterPasswordEx",className:"grey-text"},"Your password"),r.a.createElement("input",{type:"password",id:"defaultFormRegisterPasswordEx",className:"form-control"}),r.a.createElement("div",{className:"text-center mt-4"},r.a.createElement(ve.b,{color:"unique",type:"submit"},r.a.createElement(ae.a,{href:"/"},"Register")))))))}var he=function(){return r.a.createElement("div",null,r.a.createElement(J,null),r.a.createElement(ge,null))},Ne=function(){var e=U(),t=Object(E.a)(e,1)[0],a=Object(n.useState)({group:"",groupmembers:""}),c=Object(E.a)(a,2),l=c[0],o=c[1];return r.a.createElement("div",null,r.a.createElement("form",{id:"login",className:"col-md-4"},r.a.createElement("div",{className:"form-group"},r.a.createElement("h1",{className:"textCenter"},"Join a Group"),r.a.createElement("label",{for:"exampleInputEmail1"},"Group Name"),r.a.createElement("input",{type:"email",className:"form-control",id:"exampleInputEmail1","aria-describedby":"emailHelp",name:"group",onChange:function(e){var a,n=e.target,r=n.name,c=n.value;o(Object(j.a)({},l,(a={},Object(w.a)(a,r,c),Object(w.a)(a,"groupmembers",t.uid),a)))},value:l.group})),r.a.createElement("div",{className:"textCenter"},r.a.createElement("button",{type:"submit",onClick:function(e){e.preventDefault(),D(l).then(function(e){}).catch(function(e){console.log(e)})},id:"createBtn",className:"btn"},"Join"))))},we=function(){var e=U(),t=Object(E.a)(e,1)[0],a=Object(n.useState)(""),c=Object(E.a)(a,2),l=c[0],o=c[1];return Object(n.useEffect)(function(){t&&o(t.displayName)},[t]),r.a.createElement("div",null,r.a.createElement(J,{name:l}),r.a.createElement(Ne,null))};a(330),a(331);function je(){return r.a.createElement("div",{className:"center"},r.a.createElement("h2",null,"Successfully Logged Out!"),r.a.createElement(d.b,{to:"/"},r.a.createElement("button",{className:"btn  btn-primary"},"Return to Login")))}var Oe=function(){return r.a.createElement("div",null,r.a.createElement(je,null))},xe=function(e){function t(){return Object(o.a)(this,t),Object(i.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement(A,null,r.a.createElement(d.a,null,r.a.createElement(p.a,{exact:!0,path:"/",component:de}),r.a.createElement(p.a,{exact:!0,path:"/group",component:Ee}),r.a.createElement(p.a,{exact:!0,path:"/calendar",component:X}),r.a.createElement(p.a,{exact:!0,path:"/newaccount",component:be}),r.a.createElement(p.a,{exact:!0,path:"/signup",component:he}),r.a.createElement(p.a,{exact:!0,path:"/join",component:we}),r.a.createElement(p.a,{exact:!0,path:"/loggedout",component:Oe})))}}]),t}(n.Component),ye=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function Ce(e){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}l.a.render(r.a.createElement(xe,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat("","/service-worker.js");ye?function(e){fetch(e).then(function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):Ce(e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e):Ce(e)})}}()}},[[172,1,2]]]);
//# sourceMappingURL=main.c3513d96.chunk.js.map