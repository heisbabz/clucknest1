(function(e){function t(t){for(var s,r,i=t[0],l=t[1],c=t[2],u=0,m=[];u<i.length;u++)r=i[u],Object.prototype.hasOwnProperty.call(n,r)&&n[r]&&m.push(n[r][0]),n[r]=0;for(s in l)Object.prototype.hasOwnProperty.call(l,s)&&(e[s]=l[s]);d&&d(t);while(m.length)m.shift()();return o.push.apply(o,c||[]),a()}function a(){for(var e,t=0;t<o.length;t++){for(var a=o[t],s=!0,r=1;r<a.length;r++){var i=a[r];0!==n[i]&&(s=!1)}s&&(o.splice(t--,1),e=l(l.s=a[0]))}return e}var s={},r={app:0},n={app:0},o=[];function i(e){return l.p+"js/"+({about:"about"}[e]||e)+"."+{about:"f6b2f73f"}[e]+".js"}function l(t){if(s[t])return s[t].exports;var a=s[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,l),a.l=!0,a.exports}l.e=function(e){var t=[],a={about:1};r[e]?t.push(r[e]):0!==r[e]&&a[e]&&t.push(r[e]=new Promise((function(t,a){for(var s="css/"+({about:"about"}[e]||e)+"."+{about:"37edaa56"}[e]+".css",n=l.p+s,o=document.getElementsByTagName("link"),i=0;i<o.length;i++){var c=o[i],u=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(u===s||u===n))return t()}var m=document.getElementsByTagName("style");for(i=0;i<m.length;i++){c=m[i],u=c.getAttribute("data-href");if(u===s||u===n)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var s=t&&t.target&&t.target.src||n,o=new Error("Loading CSS chunk "+e+" failed.\n("+s+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=s,delete r[e],d.parentNode.removeChild(d),a(o)},d.href=n;var p=document.getElementsByTagName("head")[0];p.appendChild(d)})).then((function(){r[e]=0})));var s=n[e];if(0!==s)if(s)t.push(s[2]);else{var o=new Promise((function(t,a){s=n[e]=[t,a]}));t.push(s[2]=o);var c,u=document.createElement("script");u.charset="utf-8",u.timeout=120,l.nc&&u.setAttribute("nonce",l.nc),u.src=i(e);var m=new Error;c=function(t){u.onerror=u.onload=null,clearTimeout(d);var a=n[e];if(0!==a){if(a){var s=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;m.message="Loading chunk "+e+" failed.\n("+s+": "+r+")",m.name="ChunkLoadError",m.type=s,m.request=r,a[1](m)}n[e]=void 0}};var d=setTimeout((function(){c({type:"timeout",target:u})}),12e4);u.onerror=u.onload=c,document.head.appendChild(u)}return Promise.all(t)},l.m=e,l.c=s,l.d=function(e,t,a){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(l.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)l.d(a,s,function(t){return e[t]}.bind(null,s));return a},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/",l.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=t,c=c.slice();for(var m=0;m<c.length;m++)t(c[m]);var d=u;o.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"032d":function(e,t,a){"use strict";var s=a("8aa5"),r=a.n(s),n={apiKey:"AIzaSyCCJNF2fdwnT4lIPeaVAuNs-sYuB1RHZDY",authDomain:"clucknest.firebaseapp.com",databaseURL:"https://clucknest.firebaseio.com",projectId:"clucknest",storageBucket:"clucknest.appspot.com",messagingSenderId:"1076141999615",appId:"1:1076141999615:web:91362257d98ea6931a93ca",measurementId:"G-XE4S14204T"},o=r.a.initializeApp(n);r.a.analytics(),t["a"]=o.firestore()},"034f":function(e,t,a){"use strict";var s=a("85ec"),r=a.n(s);r.a},"1a12":function(e,t,a){},"22de":function(e,t,a){"use strict";var s=a("8319"),r=a.n(s);r.a},"309b":function(e,t,a){"use strict";var s=a("8395"),r=a.n(s);r.a},"407e":function(e,t,a){},"4b9f":function(e,t,a){e.exports=a.p+"img/progress_data.1b4a85f2.svg"},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var s=a("8bbf"),r=a.n(s),n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-app",{attrs:{id:"app"}},[a("router-view")],1)},o=[],i={name:"App",components:{},data:function(){return{}}},l=i,c=(a("034f"),a("2877")),u=a("6544"),m=a.n(u),d=a("7496"),p=Object(c["a"])(l,n,o,!1,null,null,null),f=p.exports;m()(p,{VApp:d["a"]});a("45fc"),a("d3b7");var v=a("8c4f"),b=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("Navbar"),a("div",{staticClass:"home container"},[a("div",{staticClass:"jumbotron welcome"},[a("h1",{staticClass:"display-6 pb-5"},[e._v("WELCOME TO CLUCKNEST")]),a("p",{staticClass:"lead pb-3"},[e._v("The best poultry management app")]),a("p",{staticClass:"lead"},[a("router-link",{staticClass:"btn btn-success btn-lg wb shadow",attrs:{to:"/register",role:"button"}},[e._v("Register")])],1)]),e._m(0)]),a("Footer")],1)},h=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"container"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-sm one"},[s("img",{staticClass:"img-fluid",attrs:{src:a("8217"),alt:"spreadsheet image"}})]),s("div",{staticClass:"col-sm one one-text"},[s("p",[e._v("Keep record of your farm's daily and occasional activities")])])]),s("hr"),s("div",{staticClass:"row"},[s("div",{staticClass:"col-sm one one-text"},[s("p",[e._v("View progress report of your farm business")])]),s("div",{staticClass:"col-sm one"},[s("img",{staticClass:"img-fluid",attrs:{src:a("4b9f"),alt:"image representing data progress"}})])]),s("hr"),s("div",{staticClass:"row mb-5"},[s("div",{staticClass:"col-sm one"},[s("img",{staticClass:"img-fluid",attrs:{src:a("e40b"),alt:"image of a server cluster"}})]),s("div",{staticClass:"col-sm one one-text"},[s("p",[e._v("Get access to your data anytime anyday with our cloud storage")])])])])}],g=a("d178"),w=a("a288"),C={name:"Home",components:{Navbar:g["a"],Footer:w["a"]}},y=C,_=(a("782a"),Object(c["a"])(y,b,h,!1,null,"e48b2150",null)),x=_.exports,k=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("Navbar"),a("div",{staticClass:"register container shadow mt-5 mb-5 p-4"},[a("form",{staticClass:"mt-2 ",on:{submit:function(t){return t.preventDefault(),e.regSubmit(t)}}},[a("h3",{staticClass:"a"},[e._v("REGISTER")]),a("div",{staticClass:"form-row"},[a("div",{staticClass:"col"},[a("label",{attrs:{for:"firstName"}},[e._v("First Name")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.users.firstname,expression:"users.firstname"}],staticClass:"form-control",attrs:{type:"text",name:"firstname",placeholder:"First name"},domProps:{value:e.users.firstname},on:{input:function(t){t.target.composing||e.$set(e.users,"firstname",t.target.value)}}})]),a("div",{staticClass:"col"},[a("label",{attrs:{for:"lastName"}},[e._v("Last Name")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.users.lastname,expression:"users.lastname"}],staticClass:"form-control",attrs:{type:"text",name:"lastname",placeholder:"Last name"},domProps:{value:e.users.lastname},on:{input:function(t){t.target.composing||e.$set(e.users,"lastname",t.target.value)}}})])]),a("div",{staticClass:"form-row"},[a("div",{staticClass:"col-md-8"},[a("label",{attrs:{for:"email"}},[e._v("Email Address")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.users.email,expression:"users.email"}],staticClass:"form-control",attrs:{type:"email",name:"email",placeholder:"Email"},domProps:{value:e.users.email},on:{input:function(t){t.target.composing||e.$set(e.users,"email",t.target.value)}}})]),a("div",{staticClass:"col-md-4"},[a("label",{attrs:{for:"gender"}},[e._v("Gender")]),a("select",{directives:[{name:"model",rawName:"v-model",value:e.users.gender,expression:"users.gender"}],staticClass:"custom-select mr-sm-2",attrs:{name:"gender",placeholder:"Email"},on:{change:function(t){var a=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.$set(e.users,"gender",t.target.multiple?a:a[0])}}},[a("option",{attrs:{selected:""}},[e._v("Choose...")]),a("option",{attrs:{value:"female"}},[e._v("Female")]),a("option",{attrs:{value:"male"}},[e._v("Male")])])])]),a("hr",{staticClass:"mt-3"}),a("div",{staticClass:"form-row"},[a("div",{staticClass:"col-md-8"},[a("label",{attrs:{for:"farmName"}},[e._v("Farm Name")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.users.farmname,expression:"users.farmname"}],staticClass:"form-control",attrs:{type:"text",name:"farmname",placeholder:"Farm name"},domProps:{value:e.users.farmname},on:{input:function(t){t.target.composing||e.$set(e.users,"farmname",t.target.value)}}})]),a("div",{staticClass:"col-md-4"},[a("label",{attrs:{for:"dateOfEstablishment"}},[e._v("Date of Establishment")]),a("datepicker",{attrs:{"input-class":"form-control",name:"doe",disabledDates:e.disabledDates,format:"dd-MM-yyyy"},model:{value:e.users.doe,callback:function(t){e.$set(e.users,"doe",t)},expression:"users.doe"}})],1)]),a("div",{staticClass:"form-row"},[a("div",{staticClass:"col-md-8"},[a("label",{attrs:{for:"farmAddress"}},[e._v("Farm Address")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.users.farmaddress,expression:"users.farmaddress"}],staticClass:"form-control",attrs:{type:"text",name:"farmaddress",placeholder:"Enter your farm address"},domProps:{value:e.users.farmaddress},on:{input:function(t){t.target.composing||e.$set(e.users,"farmaddress",t.target.value)}}})]),a("div",{staticClass:"col-md-4"},[a("label",{attrs:{for:"farmName"}},[e._v("Phone Number")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.users.phone,expression:"users.phone"}],staticClass:"form-control",attrs:{type:"tel",name:"phone"},domProps:{value:e.users.phone},on:{input:function(t){t.target.composing||e.$set(e.users,"phone",t.target.value)}}})])]),a("div",{staticClass:"form-row"},[a("div",{staticClass:"form-group col-md-6"},[a("label",{attrs:{for:"country"}},[e._v("Country")]),a("country-select",{staticClass:"form-control",attrs:{type:"text",country:e.country,topCountry:"NG",countryName:""},model:{value:e.country,callback:function(t){e.country=t},expression:"country"}})],1),a("div",{staticClass:"form-group col-md-4"},[a("label",{attrs:{for:"state"}},[e._v("State")]),a("region-select",{staticClass:"form-control",attrs:{type:"text",country:e.country,region:e.region,countryName:"",regionName:""},model:{value:e.region,callback:function(t){e.region=t},expression:"region"}})],1)]),a("hr",{staticClass:"mt-3"}),a("div",{staticClass:"form-row"},[a("div",{staticClass:"col-sm-7"},[a("label",{attrs:{for:"password"}},[e._v("Password")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.users.password,expression:"users.password"}],staticClass:"form-control",attrs:{type:"password",name:"password",placeholder:"Enter your preferred password"},domProps:{value:e.users.password},on:{input:function(t){t.target.composing||e.$set(e.users,"password",t.target.value)}}}),a("password-meter",{attrs:{password:e.users.password}})],1)]),a("vue-toastr",{ref:"toastr"}),a("button",{staticClass:"btn btn-primary mt-2 rb shadow",attrs:{type:"submit"}},[e._v("Submit")])],1)])],1)},E=[],N=(a("b0c0"),a("96cf"),a("1da1")),S=a("fa33"),A=a("0127"),V=a.n(A),$=a("3666"),O=a.n($),P=a("032d"),I=a("025a"),L=a("8aa5"),T=a.n(L),j=(a("ea7b"),a("66ce"),{name:"Register",components:{Navbar:g["a"],Datepicker:S["a"],passwordMeter:V.a,VueToastr:I["a"]},data:function(){return{users:{firstname:null,lastname:null,email:null,gender:null,farmname:null,phone:null,doe:null,farmaddress:null,city:null,state:null,password:null},country:null,region:null,disabledDates:{from:new Date(Date.now())},feedback:null}},methods:{regSubmit:function(){var e=this;return Object(N["a"])(regeneratorRuntime.mark((function t(){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.users.farmname&&e.users.farmaddress?(e.slug=O()(e.users.farmname||e.users.farmaddress,{replacement:"-",remove:/[$*_+~.()'"!\-:@]/g,lower:!0}),a=P["a"].collection("users").doc(e.slug),a.get().then((function(t){t.exists?L["auth"]().createUserWithEmailAndPassword(e.users.email,e.users.password).catch((function(t){e.$toastr.e(t.message)})):L["auth"]().createUserWithEmailAndPassword(e.users.email,e.users.password).then((function(){a.set({firstname:e.users.firstname,lastname:e.users.lastname,email:e.users.email,gender:e.users.gender,farmname:e.users.farmname,phone:e.users.phone,doe:e.users.doe,farmaddress:e.users.farmaddress,country:e.country,state:e.region,password:e.users.password})})).then((function(){e.$toastr.s("Registration Successful!"),e.$router.push({name:"RegistrationSuccess",params:{name:e.name}}).catch((function(){}))}))}))):e.$toastr.e("Please fill in the empty fields");case 1:case"end":return t.stop()}}),t)})))()}}}),R=j,D=(a("a4a5"),Object(c["a"])(R,k,E,!1,null,"520db39c",null)),F=D.exports,B=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("Navbar"),a("div",{staticClass:"login container shadow mt-5 p-4"},[a("form",{staticClass:"mt-2",on:{submit:function(t){return t.preventDefault(),e.loginSubmit(t)}}},[a("h3",{staticClass:"a"},[e._v("LOGIN")]),a("div",{staticClass:"form-group pt-3"},[a("label",{attrs:{for:"loginEmail"}},[e._v("Email address")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.users.email,expression:"users.email"}],staticClass:"form-control",attrs:{type:"email","aria-describedby":"emailHelp",placeholder:"Enter email"},domProps:{value:e.users.email},on:{input:function(t){t.target.composing||e.$set(e.users,"email",t.target.value)}}})]),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"loginPassword"}},[e._v("Password")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.users.password,expression:"users.password"}],staticClass:"form-control",attrs:{type:"password",placeholder:"Password"},domProps:{value:e.users.password},on:{input:function(t){t.target.composing||e.$set(e.users,"password",t.target.value)}}})]),e._m(0),a("vue-toastr",{ref:"toastr"}),a("button",{staticClass:"btn btn-primary mt-4 lb shadow",attrs:{type:"submit"}},[e._v("Submit")]),a("div",{staticClass:"mt-1"},[a("span",[e._v("Not yet registered? "),a("router-link",{attrs:{to:"/register"}},[e._v("Register")]),e._v(" now")],1)])],1)])],1)},M=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"form-check"},[a("input",{staticClass:"form-check-input",attrs:{type:"checkbox",id:"loginCheck"}}),a("label",{staticClass:"form-check-label",attrs:{for:"loginCheck"}},[e._v("Keep me signed in")])])}],U=a("59ca"),q={name:"Login",components:{Navbar:g["a"],VueToastr:I["a"]},data:function(){return{users:{email:null,password:null},feedback:null}},methods:{loginSubmit:function(){var e=this;return Object(N["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!e.users.email||!e.users.password){t.next=12;break}return t.prev=1,t.next=4,U["auth"]().signInWithEmailAndPassword(e.users.email,e.users.password).then((function(){e.$toastr.s("Login successful!"),e.$router.push({name:"Main",params:{name:e.name}}).catch((function(){}))})).catch((function(t){e.$toastr.e(t.message)}));case 4:e.feedback=null,t.next=10;break;case 7:t.prev=7,t.t0=t["catch"](1),e.$toastr.e(t.t0.message);case 10:t.next=13;break;case 12:e.$toastr.e("Please fill in the empty field(s)");case 13:case"end":return t.stop()}}),t,null,[[1,7]])})))()}}},G=q,H=(a("caa0"),Object(c["a"])(G,B,M,!1,null,"175f8518",null)),K=H.exports,Y=a("cd56"),z=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("Navbar"),s("div",{staticClass:"container mt-5 registration-success"},[s("div",{staticClass:"container p4 reg-page"},[s("h2",[e._v("Registration Completed!")]),s("img",{staticClass:"img-fluid",staticStyle:{height:"300px"},attrs:{src:a("f584"),alt:""}}),s("p",{staticClass:"mt-2"},[e._v("Please proceed to the "),s("router-link",{staticClass:"router",attrs:{to:"/register-survey"}},[s("v-btn",{attrs:{outlined:"",color:"indigo"}},[e._v("next")])],1),e._v(" page to fill out some informations")],1)])])],1)},J=[],W={name:"RegistrationSuccess",components:{Navbar:g["a"]}},X=W,Z=(a("82a9"),a("8336")),Q=Object(c["a"])(X,z,J,!1,null,"16e062be",null),ee=Q.exports;m()(Q,{VBtn:Z["a"]}),r.a.use(v["a"]);var te=[{path:"/",name:"Home",component:x},{path:"/login",name:"Login",component:K},{path:"/register",name:"Register",component:F},{path:"/main",name:"Main",component:Y["a"],props:!0,meta:{requiresAuth:!0}},{path:"/register-success",name:"RegistrationSuccess",component:ee},{path:"/main/dashboard",name:"Dashboard",component:function(){return a.e("about").then(a.bind(null,"c693"))},meta:{requiresAuth:!0}},{path:"/main/flock",name:"Flock",component:function(){return a.e("about").then(a.bind(null,"6159"))},meta:{requiresAuth:!0}},{path:"/main/expenses",name:"Expenses",component:function(){return a.e("about").then(a.bind(null,"3f84"))},meta:{requiresAuth:!0}},{path:"/main/income",name:"Income",component:function(){return a.e("about").then(a.bind(null,"4cab"))},meta:{requiresAuth:!0}},{path:"/main/medication",name:"Medication",component:function(){return a.e("about").then(a.bind(null,"f418"))},meta:{requiresAuth:!0}},{path:"/main/vaccination",name:"Vaccination",component:function(){return a.e("about").then(a.bind(null,"9c62"))},meta:{requiresAuth:!0}},{path:"/register-survey",name:"RegistrationSurvey",component:function(){return a.e("about").then(a.bind(null,"9a80"))}},{path:"/register-survey/new-farm",name:"NewFarm",component:function(){return a.e("about").then(a.bind(null,"2b64"))}},{path:"/register-survey/existing-farm",name:"ExistingFarm",component:function(){return a.e("about").then(a.bind(null,"29b6"))}}],ae=new v["a"]({mode:"history",base:"/",routes:te});ae.beforeEach((function(e,t,a){var s=e.matched.some((function(e){return e.meta.requiresAuth})),r=U["auth"]().currentUser;s&&!r?a("/login"):a()}));var se=ae,re=a("f309");a("bf40");r.a.use(re["a"]);var ne=new re["a"]({}),oe=a("d21d"),ie=a.n(oe),le=a("bc3a"),ce=a.n(le);r.a.prototype.$axios=ce.a,r.a.use(T.a),r.a.use(I["a"]),r.a.use(ie.a),r.a.config.ignoredElements=[/^ion-/],r.a.config.productionTip=!1;var ue,me={apiKey:"AIzaSyCCJNF2fdwnT4lIPeaVAuNs-sYuB1RHZDY",authDomain:"clucknest.firebaseapp.com",databaseURL:"https://clucknest.firebaseio.com",projectId:"clucknest",storageBucket:"clucknest.appspot.com",messagingSenderId:"1076141999615",appId:"1:1076141999615:web:91362257d98ea6931a93ca",measurementId:"G-XE4S14204T"};T.a.apps.length||T.a.initializeApp(me),T.a.auth().onAuthStateChanged((function(){ue||(ue=new r.a({router:se,vuetify:ne,render:function(e){return e(f)}}).$mount("#app"))})),r.a.config.silent=!0},"5dfc":function(e,t,a){"use strict";var s=a("1a12"),r=a.n(s);r.a},"66db":function(e,t,a){"use strict";var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-list",{attrs:{dense:""}},[a("v-list",[a("div",{staticClass:"pa-5 side-logo"},[a("p",{staticStyle:{"font-weight":"700"}},[e._v("Clucknest")]),a("v-list-item-subtitle",[e._v(e._s(e.email))]),a("hr")],1)]),a("v-spacer"),e._l(e.sidebarItems,(function(t,s){return a("v-list-item",{key:s,staticClass:"sidebar-item",attrs:{link:"",router:"",to:t.link}},[a("v-list-item-action",[a("v-icon",[e._v(e._s(t.icon))])],1),a("v-list-item-content",[a("v-list-item-title",[e._v(e._s(t.title))])],1)],1)}))],2)},r=[],n=a("8aa5"),o=a.n(n),i={name:"Sidebar",props:{source:String},data:function(){return{drawer:null,users:[],email:null,sidebarItems:[{title:"Dashboard",icon:"mdi-view-dashboard",link:"/main/dashboard"},{title:"Batch",icon:"mdi-duck",link:"/main/flock"},{title:"Vaccination",icon:"mdi-needle",link:"/main/vaccination"},{title:"Expenses",icon:"mdi-credit-card",link:"/main/expenses"},{title:"Income",icon:"mdi-cash-multiple",link:"/main/income"}]}},created:function(){var e=o.a.auth().currentUser;e&&(this.email=e.email)}},l=i,c=(a("309b"),a("2877")),u=a("6544"),m=a.n(u),d=a("132d"),p=a("8860"),f=a("da13"),v=a("1800"),b=a("5d23"),h=a("2fa4"),g=Object(c["a"])(l,s,r,!1,null,"01d8e1c6",null);t["a"]=g.exports;m()(g,{VIcon:d["a"],VList:p["a"],VListItem:f["a"],VListItemAction:v["a"],VListItemContent:b["a"],VListItemSubtitle:b["b"],VListItemTitle:b["c"],VSpacer:h["a"]})},"782a":function(e,t,a){"use strict";var s=a("ee6d"),r=a.n(s);r.a},"7db7":function(e,t,a){},"81db":function(e,t,a){"use strict";var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-menu",{attrs:{"offset-y":""},scopedSlots:e._u([{key:"activator",fn:function(t){var s=t.on,r=t.attrs;return[a("v-btn",e._g(e._b({attrs:{icon:"",dark:""}},"v-btn",r,!1),s),[a("v-icon",[e._v("mdi-account-circle")])],1)]}}])},[a("v-list",[e._l(e.items,(function(t,s){return a("v-list-item",{key:s},[a("v-icon",[e._v(e._s(t.icon))]),a("v-list-item-title",[a("router-link",{attrs:{to:t.link}},[e._v(e._s(t.title))])],1)],1)})),a("hr"),a("v-list-item",[a("v-btn",{attrs:{icon:""}},[a("v-icon",[e._v("mdi-logout")])],1),a("v-list-item-title",{on:{click:e.logOut}},[a("router-link",{attrs:{to:"/login"}},[e._v("Log Out")])],1)],1)],2)],1)},r=[],n=(a("b0c0"),a("96cf"),a("1da1")),o=a("59ca"),i=(a("ea7b"),{name:"AppBar",data:function(){return{items:[{title:"Account Profile",icon:"mdi-account",link:"/register"}]}},methods:{logOut:function(){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,o["auth"]().signOut();case 3:e.$router.push({name:"Login",params:{name:e.name}}),t.next=9;break;case 6:t.prev=6,t.t0=t["catch"](0),e.$toastr.e(t.t0.message);case 9:case"end":return t.stop()}}),t,null,[[0,6]])})))()}}}),l=i,c=a("2877"),u=a("6544"),m=a.n(u),d=a("8336"),p=a("132d"),f=a("8860"),v=a("da13"),b=a("5d23"),h=a("e449"),g=Object(c["a"])(l,s,r,!1,null,null,null);t["a"]=g.exports;m()(g,{VBtn:d["a"],VIcon:p["a"],VList:f["a"],VListItem:v["a"],VListItemTitle:b["c"],VMenu:h["a"]})},8217:function(e,t,a){e.exports=a.p+"img/spreadsheet.33b40ed3.svg"},"82a9":function(e,t,a){"use strict";var s=a("ddde"),r=a.n(s);r.a},8319:function(e,t,a){},8395:function(e,t,a){},"85ec":function(e,t,a){},"8bbf":function(e,t){e.exports=Vue},a288:function(e,t,a){"use strict";var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-footer",{attrs:{color:"#2a1b3d",app:""}},[a("span",{staticClass:"white--text"},[e._v("© "+e._s((new Date).getFullYear()))])])},r=[],n={name:"Footer",data:function(){return{links:["Home","About Us","Team","Services","Blog","Contact Us"]}}},o=n,i=a("2877"),l=a("6544"),c=a.n(l),u=a("553a"),m=Object(i["a"])(o,s,r,!1,null,null,null);t["a"]=m.exports;c()(m,{VFooter:u["a"]})},a4a5:function(e,t,a){"use strict";var s=a("7db7"),r=a.n(s);r.a},caa0:function(e,t,a){"use strict";var s=a("407e"),r=a.n(s);r.a},cd56:function(e,t,a){"use strict";var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-app",{attrs:{id:"inspire"}},[a("v-navigation-drawer",{staticClass:"shadow",attrs:{app:""},model:{value:e.drawer,callback:function(t){e.drawer=t},expression:"drawer"}},[a("SidebarNav")],1),a("v-app-bar",{attrs:{app:"",color:"#2a1b3d",dark:""}},[a("v-app-bar-nav-icon",{on:{click:function(t){t.stopPropagation(),e.drawer=!e.drawer}}}),a("v-toolbar-title",[e._v("CLUCKNEST")]),a("v-spacer"),a("v-text-field",{staticClass:"hidden-sm-and-down",attrs:{flat:"","solo-inverted":"","hide-details":"","prepend-inner-icon":"mdi-magnify",abel:"Search"}}),a("v-btn",{attrs:{icon:""}},[a("v-icon",[e._v("mdi-email")])],1),a("v-btn",{attrs:{icon:""}},[a("v-icon",[e._v("mdi-bell")])],1),a("v-spacer"),a("AppBar")],1),a("v-main",[a("div",{staticClass:"dashboard"},[a("div",{staticClass:"dash-overview"},[a("div",{staticClass:"row"},[a("v-card",{staticClass:"mx-auto mt-5",attrs:{width:"300"}},[a("v-card-text",[a("div",[e._v("TOTAL BIRDS")]),a("p",{staticClass:"display-1 text--primary"},[e._v("2,680")])])],1),a("v-card",{staticClass:"mx-auto mt-5",attrs:{width:"300"}},[a("v-card-text",[a("div",[e._v("EGG SALES")]),a("p",{staticClass:"display-1 text--primary"},[e._v("320")])])],1),a("v-card",{staticClass:"mx-auto mt-5",attrs:{width:"300"}},[a("v-card-text",[a("div",[e._v("INCOME")]),a("p",{staticClass:"display-1 text--primary"},[e._v("32,000")])])],1)],1)]),a("v-divider")],1)]),a("Footer")],1)},r=[],n=a("66db"),o=a("a288"),i=a("81db"),l={name:"Main",components:{SidebarNav:n["a"],AppBar:i["a"],Footer:o["a"]},data:function(){return{drawer:null}}},c=l,u=(a("22de"),a("2877")),m=a("6544"),d=a.n(m),p=a("7496"),f=a("40dc"),v=a("5bc1"),b=a("8336"),h=a("b0af"),g=a("99d9"),w=a("ce7e"),C=a("132d"),y=a("f6c4"),_=a("f774"),x=a("2fa4"),k=a("8654"),E=a("2a7f"),N=Object(u["a"])(c,s,r,!1,null,null,null);t["a"]=N.exports;d()(N,{VApp:p["a"],VAppBar:f["a"],VAppBarNavIcon:v["a"],VBtn:b["a"],VCard:h["a"],VCardText:g["b"],VDivider:w["a"],VIcon:C["a"],VMain:y["a"],VNavigationDrawer:_["a"],VSpacer:x["a"],VTextField:k["a"],VToolbarTitle:E["a"]})},d178:function(e,t,a){"use strict";var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"navbar"}},[a("div",{staticClass:"shadow",attrs:{id:"nav"}},[a("router-link",{attrs:{to:"/"}},[e._v("Home")]),a("router-link",{attrs:{to:"/login"}},[e._v("Login")])],1),a("router-view")],1)},r=[],n={name:"Navbar"},o=n,i=(a("5dfc"),a("2877")),l=Object(i["a"])(o,s,r,!1,null,null,null);t["a"]=l.exports},ddde:function(e,t,a){},e40b:function(e,t,a){e.exports=a.p+"img/server_cluster.1ce2cd3b.svg"},ee6d:function(e,t,a){},f584:function(e,t,a){e.exports=a.p+"img/confirm.fee830aa.svg"}});
//# sourceMappingURL=app.1d3366ac.js.map