(this.webpackJsonpuntitled8=this.webpackJsonpuntitled8||[]).push([[0],{33:function(e,t,a){},73:function(e,t,a){"use strict";a.r(t);var c=a(1),n=a.n(c),r=a(34),s=a.n(r),o=a(2),i=a.n(o),l=a(6),u=a(5),j=a(9),d=a(3),b=a(4),m=a.n(b),p=a(0),h=function(){var e=Object(j.f)(),t=Object(c.useState)([]),a=Object(u.a)(t,2),n=a[0],r=a[1];Object(c.useEffect)((function(){s()}),[]);var s=function(){var t=Object(l.a)(i.a.mark((function t(){return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,m.a.get("".concat("https://app-test-musala.herokuapp.com/","v1/api/user")).then((function(e){r(e.data.reverse())})).catch((function(t){e.push("/users")}));case 2:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),o=function(){var e=Object(l.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(t),e.next=3,m.a.delete("".concat("https://app-test-musala.herokuapp.com/","v1/api/user/").concat(t));case 3:return e.next=5,s();case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(p.jsx)("div",{className:"container",children:Object(p.jsx)("div",{className:"py-4",children:Object(p.jsxs)("table",{className:"table border shadow",children:[Object(p.jsx)("thead",{className:"thead-light",children:Object(p.jsxs)("tr",{children:[Object(p.jsx)("th",{scope:"col",children:"#"}),Object(p.jsx)("th",{scope:"col",children:"Name"}),Object(p.jsx)("th",{scope:"col",children:"Username"}),Object(p.jsx)("th",{children:"Action"})]})}),Object(p.jsx)("tbody",{children:n.map((function(e,t){return Object(p.jsxs)("tr",{children:[Object(p.jsx)("th",{scoped:"row",children:t+1}),Object(p.jsx)("td",{children:e.name}),Object(p.jsx)("td",{children:e.username}),"admin"!==e.username&&Object(p.jsxs)("td",{children:[Object(p.jsx)("span",{className:"d-inline-block",tabIndex:"0","data-bs-toggle":"tooltip",title:"Show user",children:Object(p.jsx)(d.b,{class:"btn btn-primary mr-2",to:"/user/show/".concat(e._id),children:Object(p.jsx)("i",{className:"fa fa-book"})})}),Object(p.jsx)("span",{className:"d-inline-block",tabIndex:"0","data-bs-toggle":"tooltip",title:"Edit user",children:Object(p.jsx)(d.b,{class:"btn btn-outline-primary mr-2",to:"/user/edit/".concat(e._id),children:Object(p.jsx)("i",{className:"fa fa-book"})})}),Object(p.jsx)("span",{className:"d-inline-block",tabIndex:"0","data-bs-toggle":"tooltip",title:"Delete user",children:Object(p.jsx)(d.c,{to:"#",class:"btn btn-danger",onClick:function(){return o(e._id)},children:Object(p.jsx)("i",{className:"fa fa-book"})})})]})]})}))})]})})})},O=a(7),x=a(8),f=(a(33),function(){Object(j.f)();var e=Object(c.useState)(Object(p.jsx)("div",{})),t=Object(u.a)(e,2),a=t[0],n=t[1],r=Object(c.useState)({username:""}),s=Object(u.a)(r,2),o=s[0],d=s[1],b=function(e){d(Object(x.a)(Object(x.a)({},o),{},Object(O.a)({},e.target.name,e.target.value)))},h=function(){var e=Object(l.a)(i.a.mark((function e(t){var a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),a=btoa(o.username+":"+o.password),e.next=4,m.a.post("".concat("https://app-test-musala.herokuapp.com/","v1/api/auth/signin"),o,{headers:{"content-type":"application/json",Authorization:"Basic "+a}}).then((function(e){localStorage.setItem("token",e.data.token),window.location.href="\n            ".concat("https://app-test-musala.herokuapp.com/")})).catch((function(e){setTimeout((function(){n(Object(p.jsx)("div",{className:"alert alert-danger miAlert",role:"alert",children:"Sign In Error"}))}),1e3),setTimeout((function(){n(Object(p.jsx)("div",{}))}),5e3)}));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=o.username,v=o.password;return Object(p.jsxs)("div",{className:"container",children:[Object(p.jsxs)("div",{className:"w-75 mx-auto shadow p-5",children:[Object(p.jsx)("h2",{className:"text-center mb-4",children:"Sign In"}),Object(p.jsxs)("form",{onSubmit:function(e){return h(e)},children:[Object(p.jsx)("div",{className:"form-group",children:Object(p.jsx)("input",{type:"text",className:"form-control form-control-lg",placeholder:"Username",name:"username",required:!0,value:f,onChange:function(e){return b(e)}})}),Object(p.jsx)("div",{className:"form-group",children:Object(p.jsx)("input",{type:"password",className:"form-control form-control-lg",placeholder:"Password",name:"password",required:!0,value:v,onChange:function(e){return b(e)}})}),Object(p.jsx)("button",{className:"btn btn-primary btn-block",children:"Sign Up"})]})]}),a]})}),v=function(){var e=Object(j.f)(),t=Object(c.useState)({name:"",username:"",password:""}),a=Object(u.a)(t,2),n=a[0],r=a[1],s=function(e){r(Object(x.a)(Object(x.a)({},n),{},Object(O.a)({},e.target.name,e.target.value)))},o=function(){var t=Object(l.a)(i.a.mark((function t(a){return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a.preventDefault(),t.next=3,m.a.post("".concat("https://app-test-musala.herokuapp.com/","v1/api/auth/signup"),n).then((function(t){e.push("/gateway")})).catch((function(e){console.log(e)}));case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),d=n.name,b=n.username,h=n.password;return Object(p.jsx)("div",{className:"container",children:Object(p.jsxs)("div",{className:"w-75 mx-auto shadow p-5",children:[Object(p.jsx)("h2",{className:"text-center mb-4",children:"Sign Up"}),Object(p.jsxs)("form",{onSubmit:function(e){return o(e)},children:[Object(p.jsx)("div",{className:"form-group",children:Object(p.jsx)("input",{type:"text",className:"form-control form-control-lg",placeholder:"Name",name:"name",required:!0,value:d,onChange:function(e){return s(e)}})}),Object(p.jsx)("div",{className:"form-group",children:Object(p.jsx)("input",{type:"text",className:"form-control form-control-lg",placeholder:"Username",name:"username",required:!0,value:b,onChange:function(e){return s(e)}})}),Object(p.jsx)("div",{className:"form-group",children:Object(p.jsx)("input",{type:"password",className:"form-control form-control-lg",placeholder:"Password",name:"password",required:!0,value:h,onChange:function(e){return s(e)}})}),Object(p.jsx)("button",{className:"btn btn-primary btn-block",children:"Sign Up"})]})]})})},g=function(){var e=function(){var e=Object(l.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:localStorage.clear(),window.location.href="".concat("https://app-test-musala.herokuapp.com/");case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(p.jsx)("nav",{className:"navbar navbar-expand-lg navbar-dark bg-primary",children:Object(p.jsx)("div",{className:"container",children:Object(p.jsxs)("div",{className:"container-fluid",children:[Object(p.jsx)("a",{className:"navbar-brand",href:"#",children:"Musala"}),Object(p.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(p.jsx)("span",{className:"navbar-toggler-icon"})}),Object(p.jsxs)("div",{className:"row w-100 collapse navbar-collapse",children:[Object(p.jsxs)("ul",{className:"col navbar-nav me-auto mb-2 mb-lg-0",children:[Object(p.jsx)("li",{className:"nav-item",children:Object(p.jsx)(d.c,{className:"nav-link","aria-current":"page",exact:!0,to:"/users",children:"Users"})}),Object(p.jsx)("li",{className:"nav-item",children:Object(p.jsx)(d.c,{className:"nav-link","aria-current":"page",exact:!0,to:"/gateway",children:"Gateway"})})]}),!localStorage.getItem("token")&&Object(p.jsxs)("ul",{className:"col-2 navbar-nav me-auto mb-2 mb-lg-0",children:[Object(p.jsx)("li",{className:"nav-item",children:Object(p.jsx)(d.b,{className:"nav-link",exact:!0,to:"/signUp",children:"SignUp"})}),Object(p.jsx)("li",{className:"nav-item",children:Object(p.jsx)(d.b,{className:"nav-link",exact:!0,to:"/signIn",children:"SignIn"})})]}),localStorage.getItem("token")&&Object(p.jsx)("ul",{className:"col-2 navbar-nav me-auto mb-2 mb-lg-0",children:Object(p.jsx)("li",{className:"nav-item",children:Object(p.jsx)(d.b,{to:"#",onClick:function(){return e()},className:"nav-link",exact:!0,children:"Logout"})})})]})]})})})},N=function(){var e=Object(j.g)().id,t=Object(c.useState)({rol:[],_id:"",name:"",username:""}),a=Object(u.a)(t,2),n=a[0],r=a[1],s=Object(c.useState)([]),o=Object(u.a)(s,2),b=o[0],h=o[1];Object(c.useEffect)((function(){O()}),[]);var O=function(){var t=Object(l.a)(i.a.mark((function t(){var a;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,m.a.get("".concat("https://app-test-musala.herokuapp.com/","v1/api/user/").concat(e));case 2:a=t.sent,r(a.data),h(a.data.rols);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(p.jsxs)("div",{className:"container",children:[Object(p.jsx)(d.b,{className:"btn btn-primary mt-2 ml-2",to:"/users",children:"Back"}),Object(p.jsx)("hr",{}),Object(p.jsxs)("ul",{className:"list-group w-50",children:[Object(p.jsxs)("li",{className:"list-group-item",children:["Name: ",n.name]}),Object(p.jsxs)("li",{className:"list-group-item",children:["Username: ",n.username]})]}),Object(p.jsx)("table",{className:"table border shadow",children:Object(p.jsxs)("tbody",{children:[Object(p.jsx)("h1",{className:"display-7 mt-3",children:"Rols "}),b.map((function(e,t){return Object(p.jsxs)("tr",{children:[Object(p.jsx)("th",{scoped:"row",children:t+1}),Object(p.jsx)("td",{children:e.type}),Object(p.jsxs)("td",{children:[Object(p.jsx)("span",{className:"d-inline-block",tabIndex:"0","data-bs-toggle":"tooltip",title:"Add Rol To User",children:Object(p.jsx)(d.b,{class:"btn btn-primary mr-2",to:"/rol/addRolToUser/".concat(n.username,"/").concat(e._id),children:Object(p.jsx)("i",{className:"fa fa-book"})})}),Object(p.jsx)("span",{className:"d-inline-block",tabIndex:"0","data-bs-toggle":"tooltip",title:"Delete Rol to User",children:Object(p.jsx)(d.b,{class:"btn btn-danger",to:"/rol/deleteRolToUser/".concat(n.username,"/").concat(e._id),children:Object(p.jsx)("i",{className:"fa fa-book"})})})]})]},t)}))]})})]})},w=function(){var e=Object(j.f)(),t=Object(c.useState)(Object(p.jsx)("div",{})),a=Object(u.a)(t,2),n=a[0],r=a[1],s=Object(j.g)().id,o=Object(c.useState)({name:"",username:""}),b=Object(u.a)(o,2),h=b[0],f=b[1];Object(c.useEffect)((function(){v()}),[]);var v=function(){var e=Object(l.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.a.get("".concat("https://app-test-musala.herokuapp.com/","v1/api/user/").concat(s));case 2:t=e.sent,f(t.data),console.log(t.data);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),g=function(e){f(Object(x.a)(Object(x.a)({},h),{},Object(O.a)({},e.target.name,e.target.value)))},N=function(){var t=Object(l.a)(i.a.mark((function t(a){return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a.preventDefault(),t.next=3,m.a.patch("".concat("https://app-test-musala.herokuapp.com/","v1/api/user/").concat(s),{name:h.name,username:h.username}).then((function(){e.push("/users")})).catch((function(){setTimeout((function(){r(Object(p.jsx)("div",{className:"alert alert-danger miAlert",role:"alert",children:"Error validation"}))}),1e3),setTimeout((function(){r(Object(p.jsx)("div",{}))}),5e3)}));case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),w=h.name,y=h.username;h.password;return Object(p.jsxs)("div",{className:"container",children:[Object(p.jsx)(d.b,{className:"btn btn-primary mt-2 ml-2",to:"/users",children:"Back"}),Object(p.jsxs)("div",{className:"w-75 mx-auto shadow p-5",children:[Object(p.jsx)("h2",{className:"text-center mb-4",children:"Edit User"}),Object(p.jsxs)("form",{onSubmit:function(e){return N(e)},children:[Object(p.jsx)("div",{className:"form-group",children:Object(p.jsx)("input",{type:"text",className:"form-control form-control-lg",placeholder:"Name",name:"name",value:w,onChange:function(e){return g(e)}})}),Object(p.jsx)("div",{className:"form-group",children:Object(p.jsx)("input",{type:"text",className:"form-control form-control-lg",placeholder:"Username",name:"username",value:y,onChange:function(e){return g(e)}})}),Object(p.jsx)("button",{className:"btn btn-warning btn-block",children:"Update User"})]})]}),n]})},y=function(){var e=Object(j.f)(),t=Object(c.useState)(Object(p.jsx)("div",{})),a=Object(u.a)(t,2),n=a[0],r=a[1],s=Object(j.g)(),o=s.username,b=(s.rolId,s.userId,Object(c.useState)({type:""})),h=Object(u.a)(b,2),f=h[0],v=h[1],g=function(e){v(Object(x.a)(Object(x.a)({},f),{},Object(O.a)({},e.target.name,e.target.value)))},N=function(){var t=Object(l.a)(i.a.mark((function t(a){return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a.preventDefault(),t.next=3,m.a.patch("".concat("https://app-test-musala.herokuapp.com/","v1/api/rol/addRolToUser"),{username:o,rolName:f.type}).then((function(t){e.push("/users")})).catch((function(e){setTimeout((function(){r(Object(p.jsx)("div",{className:"alert alert-danger miAlert",role:"alert",children:"Error validation"}))}),1e3),setTimeout((function(){r(Object(p.jsx)("div",{}))}),5e3)}));case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),w=f.type;return Object(p.jsxs)("div",{className:"container",children:[Object(p.jsx)(d.b,{className:"btn btn-primary mt-2 ml-2",to:"/users",children:"Back"}),Object(p.jsxs)("div",{className:"w-75 mx-auto shadow p-5",children:[Object(p.jsx)("h2",{className:"text-center mb-4",children:"Add a Rol to user"}),Object(p.jsxs)("form",{onSubmit:function(e){return N(e)},children:[Object(p.jsx)("div",{className:"form-group",children:Object(p.jsx)("input",{type:"text",className:"form-control form-control-lg",placeholder:"Username",name:"username",required:!0,disabled:!0,value:o,onChange:function(e){return g(e)}})}),Object(p.jsx)("div",{className:"form-group",children:Object(p.jsxs)("select",{"aria-required":"true",name:"type",className:"form-control form-control-lg","aria-label":"Default select example",value:w,onChange:function(e){return g(e)},children:[Object(p.jsx)("option",{value:"",children:"Select a rol"}),Object(p.jsx)("option",{value:"Admin",children:"Admin"}),Object(p.jsx)("option",{value:"Client",children:"Client"})]})}),Object(p.jsx)("button",{className:"btn btn-primary btn-block",children:"Add Rol"})]})]}),n]})},k=function(){var e,t=Object(j.f)(),a=Object(j.g)(),n=a.username,r=a.rolId,s=Object(c.useState)(Object(p.jsx)("div",{})),o=Object(u.a)(s,2),b=o[0],h=o[1],f=Object(c.useState)({type:""}),v=Object(u.a)(f,2),g=v[0],N=v[1],w=function(e){N(Object(x.a)(Object(x.a)({},g),{},Object(O.a)({},e.target.name,e.target.value)))},y=function(){var e=Object(l.a)(i.a.mark((function e(a){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),e.next=3,m.a.patch("".concat("https://app-test-musala.herokuapp.com/","v1/api/rol/deleteRolToUser"),{username:n,rolName:g.type}).then((function(e){t.push("/users")})).catch((function(e){setTimeout((function(){h(Object(p.jsx)("div",{className:"alert alert-danger miAlert",role:"alert",children:"Sign In Error"}))}),1e3),setTimeout((function(){h(Object(p.jsx)("div",{}))}),5e3)}));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),k=g.type;return Object(p.jsxs)("div",{className:"container",children:[Object(p.jsx)(d.b,{className:"btn btn-primary mt-2 ml-2",to:"/user/show/".concat(r),children:"Back"}),Object(p.jsxs)("div",{className:"w-75 mx-auto shadow p-5",children:[Object(p.jsx)("h2",{className:"text-center mb-4",children:"Delete a Rol to user"}),Object(p.jsxs)("form",{onSubmit:function(e){return y(e)},children:[Object(p.jsx)("div",{className:"form-group",children:Object(p.jsx)("input",{type:"text",className:"form-control form-control-lg",placeholder:"Username",name:"username",required:!0,disabled:!0,value:n,onChange:function(e){return w(e)}})}),Object(p.jsx)("div",{className:"form-group",children:Object(p.jsxs)("select",(e={required:!0,"aria-required":"true"},Object(O.a)(e,"required",!0),Object(O.a)(e,"name","type"),Object(O.a)(e,"className","form-control form-control-lg"),Object(O.a)(e,"aria-label","Default select example"),Object(O.a)(e,"value",k),Object(O.a)(e,"onChange",(function(e){return w(e)})),Object(O.a)(e,"children",[Object(p.jsx)("option",{value:"",children:"Select a rol"}),Object(p.jsx)("option",{value:"Admin",children:"Admin"}),Object(p.jsx)("option",{value:"Client",children:"Client"})]),e))}),Object(p.jsx)("button",{className:"btn btn-primary btn-block",children:"Delete rolr"})]})]}),b]})},S=function(){Object(j.f)();var e=Object(c.useState)([]),t=Object(u.a)(e,2),a=t[0],n=t[1];Object(c.useEffect)((function(){r()}),[]);var r=function(){var e=Object(l.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.a.get("".concat("https://app-test-musala.herokuapp.com/","v1/api/gateway"));case 2:t=e.sent,n(t.data.reverse());case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),s=function(){var e=Object(l.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.a.delete("".concat("https://app-test-musala.herokuapp.com/","v1/api/gateway/").concat(t));case 2:r();case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(p.jsx)("div",{className:"container",children:Object(p.jsxs)("div",{className:"py-4",children:[Object(p.jsx)("h1",{children:"Gateway"}),Object(p.jsx)(d.b,{className:"btn btn-outline-light mb-2 bg-primary ",to:"/gateway/add",children:"Add Gateway"}),Object(p.jsxs)("table",{className:"table border shadow",children:[Object(p.jsx)("thead",{className:"thead-light",children:Object(p.jsxs)("tr",{children:[Object(p.jsx)("th",{scope:"col",children:"#"}),Object(p.jsx)("th",{scope:"col",children:"SerialNumber"}),Object(p.jsx)("th",{scope:"col",children:"Name"}),Object(p.jsx)("th",{scope:"col",children:"Address"}),Object(p.jsx)("th",{children:"Action"})]})}),Object(p.jsx)("tbody",{children:a.map((function(e,t){return Object(p.jsxs)("tr",{children:[Object(p.jsx)("th",{scoped:"row",children:t+1}),Object(p.jsx)("td",{children:Object(p.jsx)(d.b,{className:"nav-link","aria-current":"page",exact:!0,to:"/gateway/device/".concat(e._id),children:e.serialNumber})}),Object(p.jsx)("td",{children:e.name}),Object(p.jsx)("td",{children:e.address}),Object(p.jsxs)("td",{children:[Object(p.jsx)("span",{class:"d-inline-block",tabindex:"0","data-bs-toggle":"tooltip",title:"Show",children:Object(p.jsx)(d.b,{class:"btn btn-primary mr-2",to:"/gateway/show/".concat(e._id),children:Object(p.jsx)("i",{className:"fa fa-book"})})}),Object(p.jsx)("span",{className:"d-inline-block",tabIndex:"0","data-bs-toggle":"tooltip",title:"Edit",children:Object(p.jsxs)(d.b,{class:"btn btn-outline-primary mr-2",to:"/gateway/edit/".concat(e._id),children:[Object(p.jsx)("i",{className:"fa fa-edit"})," "]})}),Object(p.jsx)("span",{className:"d-inline-block",tabIndex:"0","data-bs-toggle":"tooltip",title:"Delete",children:Object(p.jsx)(d.b,{to:"#",class:"btn btn-danger",onClick:function(){return s(e._id)},children:Object(p.jsx)("i",{className:"fa fa-book"})})})]})]})}))})]})]})})},I=function(){var e=Object(j.f)(),t=Object(c.useState)(Object(p.jsx)("div",{})),a=Object(u.a)(t,2),n=a[0],r=a[1],s=Object(c.useState)({serialNumber:"",name:"",address:""}),o=Object(u.a)(s,2),d=o[0],b=o[1],h=function(e){b(Object(x.a)(Object(x.a)({},d),{},Object(O.a)({},e.target.name,e.target.value)))},f=function(){var t=Object(l.a)(i.a.mark((function t(a){return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a.preventDefault(),t.next=3,m.a.post("".concat("https://app-test-musala.herokuapp.com/","v1/api/gateway"),d).then((function(){e.push("/gateway")})).catch((function(){setTimeout((function(){r(Object(p.jsx)("div",{className:"alert alert-danger miAlert",role:"alert",children:"Error validation"}))}),1e3),setTimeout((function(){r(Object(p.jsx)("div",{}))}),5e3)}));case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),v=d.serialNumber,g=d.name,N=d.address;return Object(p.jsxs)("div",{className:"container",children:[Object(p.jsxs)("div",{className:"w-75 mx-auto shadow p-5",children:[Object(p.jsx)("h2",{className:"text-center mb-4",children:"Add Gateway"}),Object(p.jsxs)("form",{onSubmit:function(e){return f(e)},children:[Object(p.jsx)("div",{className:"form-group",children:Object(p.jsx)("input",{type:"text",className:"form-control form-control-lg",placeholder:"Serial Number",name:"serialNumber",value:v,required:!0,onChange:function(e){return h(e)}})}),Object(p.jsx)("div",{className:"form-group",children:Object(p.jsx)("input",{type:"text",className:"form-control form-control-lg",placeholder:"Name",name:"name",value:g,required:!0,onChange:function(e){return h(e)}})}),Object(p.jsx)("div",{className:"form-group",children:Object(p.jsx)("input",{type:"text",className:"form-control form-control-lg",placeholder:"Ipv4 Address",name:"address",value:N,required:!0,onChange:function(e){return h(e)}})}),Object(p.jsx)("button",{className:"btn btn-primary btn-block",children:"Add gateway"})]})]}),n]})},A=function(){var e=Object(j.f)(),t=Object(c.useState)(Object(p.jsx)("div",{})),a=Object(u.a)(t,2),n=a[0],r=a[1],s=Object(j.g)().id,o=Object(c.useState)({serialNumber:"",name:"",address:""}),b=Object(u.a)(o,2),h=b[0],f=b[1];Object(c.useEffect)((function(){v()}),[]);var v=function(){var e=Object(l.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.a.get("".concat("https://app-test-musala.herokuapp.com/","v1/api/gateway/").concat(s));case 2:t=e.sent,f(t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),g=function(e){f(Object(x.a)(Object(x.a)({},h),{},Object(O.a)({},e.target.name,e.target.value)))},N=function(){var t=Object(l.a)(i.a.mark((function t(a){return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a.preventDefault(),t.next=3,m.a.patch("".concat("https://app-test-musala.herokuapp.com/","v1/api/gateway/").concat(s),{serialNumber:h.serialNumber,name:h.name,address:h.address}).then((function(){e.push("/gateway")})).catch((function(){setTimeout((function(){r(Object(p.jsx)("div",{className:"alert alert-danger miAlert",role:"alert",children:"Error validation"}))}),1e3),setTimeout((function(){r(Object(p.jsx)("div",{}))}),5e3)}));case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),w=h.serialNumber,y=h.name,k=h.address;return Object(p.jsxs)("div",{className:"container",children:[Object(p.jsx)(d.b,{className:"btn btn-primary mt-2 ml-2",to:"/gateway",children:"Back"}),Object(p.jsxs)("div",{className:"w-75 mx-auto shadow p-5",children:[Object(p.jsx)("h2",{className:"text-center mb-4",children:"Edit Gateway"}),Object(p.jsxs)("form",{onSubmit:function(e){return N(e)},children:[Object(p.jsx)("div",{className:"form-group",children:Object(p.jsx)("input",{type:"text",className:"form-control form-control-lg",placeholder:"Serial Number",name:"serialNumber",value:w,onChange:function(e){return g(e)}})}),Object(p.jsx)("div",{className:"form-group",children:Object(p.jsx)("input",{type:"text",className:"form-control form-control-lg",placeholder:"Name",name:"name",value:y,onChange:function(e){return g(e)}})}),Object(p.jsx)("div",{className:"form-group",children:Object(p.jsx)("input",{type:"text",className:"form-control form-control-lg",placeholder:"Ipv4 Address",name:"address",value:k,onChange:function(e){return g(e)}})}),Object(p.jsx)("button",{className:"btn btn-warning btn-block",children:"Edit Gateway"})]})]}),n]})},C=function(){var e=Object(j.g)().id,t=Object(c.useState)({serialNumber:"",name:"",address:""}),a=Object(u.a)(t,2),n=a[0],r=a[1];Object(c.useEffect)((function(){s()}),[]);var s=function(){var t=Object(l.a)(i.a.mark((function t(){var a;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log(e),t.next=3,m.a.get("".concat("https://app-test-musala.herokuapp.com/","v1/api/gateway/").concat(e));case 3:a=t.sent,r(a.data),console.log(n);case 6:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(p.jsxs)("div",{className:"container",children:[Object(p.jsx)(d.b,{className:"btn btn-primary mt-2 ml-2",to:"/gateway",children:"Back"}),Object(p.jsx)("h1",{className:"display-4",children:"Gateway "}),Object(p.jsx)("hr",{}),Object(p.jsxs)("ul",{className:"list-group w-50",children:[Object(p.jsx)("li",{className:"list-group-item",children:Object(p.jsxs)("small",{children:["Serial Number: ",n.serialNumber]})}),Object(p.jsx)("li",{className:"list-group-item",children:Object(p.jsxs)("strong",{children:["Name: ",n.name]})}),Object(p.jsx)("li",{className:"list-group-item",children:Object(p.jsxs)("strong",{children:["Address: ",n.address]})})]})]})},D=function(){var e=Object(j.g)().GatewayId,t=Object(c.useState)([]),a=Object(u.a)(t,2),n=a[0],r=a[1];Object(c.useEffect)((function(){s()}),[]);var s=function(){var t=Object(l.a)(i.a.mark((function t(){var a;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log(e),t.next=3,m.a.get("".concat("https://app-test-musala.herokuapp.com/","v1/api/gateway/").concat(e));case 3:a=t.sent,r(a.data.devices);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),o=function(){var t=Object(l.a)(i.a.mark((function t(a,c){return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,m.a.patch("".concat("https://app-test-musala.herokuapp.com/","v1/api/device/deleteDeviceFromGateway/").concat(e),{deviceId:c});case 2:s();case 3:case"end":return t.stop()}}),t)})));return function(e,a){return t.apply(this,arguments)}}();return Object(p.jsx)("div",{className:"container",children:Object(p.jsxs)("div",{className:"py-4",children:[Object(p.jsx)("h1",{children:"Devices"}),Object(p.jsx)(d.b,{className:"btn btn-outline-light mb-2 bg-primary ",to:"/device/add/".concat(e),children:"Add Device To Gateway"}),Object(p.jsxs)("table",{className:"table border shadow",children:[Object(p.jsx)("thead",{className:"thead-light",children:Object(p.jsxs)("tr",{children:[Object(p.jsx)("th",{scope:"col",children:"#"}),Object(p.jsx)("th",{scope:"col",children:"UID"}),Object(p.jsx)("th",{scope:"col",children:"Vendor"}),Object(p.jsx)("th",{scope:"col",children:"Status"}),Object(p.jsx)("th",{scope:"col",children:"Date"}),Object(p.jsx)("th",{children:"Action"})]})}),Object(p.jsx)("tbody",{children:n.map((function(t,a){return Object(p.jsxs)("tr",{children:[Object(p.jsx)("th",{scoped:"row",children:a+1}),Object(p.jsx)("td",{children:t.uid}),Object(p.jsx)("td",{children:t.vendor}),Object(p.jsx)("td",{children:t.status}),Object(p.jsx)("td",{children:t.createdAt.substring(0,10)}),Object(p.jsx)("td",{children:Object(p.jsx)("span",{className:"d-inline-block",tabIndex:"0","data-bs-toggle":"tooltip",title:"Delete Device",children:Object(p.jsx)(d.b,{to:"#",class:"btn btn-danger",onClick:function(){return o(e,t._id)},children:Object(p.jsx)("i",{className:"fa fa-book"})})})})]})}))})]})]})})},U=function(){var e=Object(j.f)(),t=Object(c.useState)(Object(p.jsx)("div",{})),a=Object(u.a)(t,2),n=a[0],r=a[1],s=Object(j.g)().GatewayId,o=Object(c.useState)({uid:"",vendor:"",status:""}),b=Object(u.a)(o,2),h=b[0],f=b[1],v=function(e){f(Object(x.a)(Object(x.a)({},h),{},Object(O.a)({},e.target.name,e.target.value)))},g=function(){var t=Object(l.a)(i.a.mark((function t(a){return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a.preventDefault(),t.next=3,m.a.patch("".concat("https://app-test-musala.herokuapp.com/","v1/api/device/addDeviceToGateway/").concat(s),h).then((function(){e.push("/gateway/device/".concat(s))})).catch((function(){setTimeout((function(){r(Object(p.jsx)("div",{className:"alert alert-danger miAlert",role:"alert",children:"Error validation"}))}),1e3),setTimeout((function(){r(Object(p.jsx)("div",{}))}),5e3)}));case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),N=h.uid,w=h.vendor,y=h.status;return Object(p.jsxs)("div",{className:"container",children:[Object(p.jsx)(d.b,{className:"btn btn-primary mt-2 ml-2",to:"/gateway",children:"Back"}),Object(p.jsxs)("div",{className:"w-75 mx-auto shadow p-5",children:[Object(p.jsx)("h2",{className:"text-center mb-4",children:"Add a Device"}),Object(p.jsxs)("form",{onSubmit:function(e){return g(e)},children:[Object(p.jsx)("div",{className:"form-group",children:Object(p.jsx)("input",{type:"number",className:"form-control form-control-lg",placeholder:"UID",name:"uid",required:!0,value:N,onChange:function(e){return v(e)}})}),Object(p.jsx)("div",{className:"form-group",children:Object(p.jsx)("input",{type:"text",className:"form-control form-control-lg",placeholder:"Vendor",name:"vendor",value:w,onChange:function(e){return v(e)}})}),Object(p.jsx)("div",{className:"form-group",children:Object(p.jsxs)("select",{required:!0,"aria-required":"true",name:"status",className:"form-control form-control-lg","aria-label":"Default select example",value:y,onChange:function(e){return v(e)},children:[Object(p.jsx)("option",{value:"",children:"Select a status"}),Object(p.jsx)("option",{value:"online",children:"Online"}),Object(p.jsx)("option",{value:"offline",children:"Offline"})]})}),Object(p.jsx)("button",{className:"btn btn-primary btn-block",children:"Add Device"})]})]}),n]})},T=function(){return Object(p.jsx)("div",{className:"not-Found",children:Object(p.jsx)("div",{className:"display-1",children:"Page Not Found :("})})};var E=function(){return Object(p.jsx)(d.a,{children:Object(p.jsxs)("div",{className:"App",children:[Object(p.jsx)(g,{}),Object(p.jsxs)(j.c,{children:[Object(p.jsx)(j.a,{exact:!0,path:"/signIn",component:f})," />",Object(p.jsx)(j.a,{exact:!0,path:"/signUp",component:v}),Object(p.jsx)(j.a,{exact:!0,path:"/users",component:h}),Object(p.jsx)(j.a,{exact:!0,path:"/user/show/:id",component:N}),Object(p.jsx)(j.a,{exact:!0,path:"/user/edit/:id",component:w}),Object(p.jsx)(j.a,{exact:!0,path:"/rol/addRolToUser/:username/:rolId",component:y}),Object(p.jsx)(j.a,{exact:!0,path:"/rol/deleteRolToUser/:username/:rolId",component:k}),Object(p.jsx)(j.a,{exact:!0,path:"/gateway",component:S}),Object(p.jsx)(j.a,{exact:!0,path:"/gateway/add",component:I}),Object(p.jsx)(j.a,{exact:!0,path:"/gateway/show/:id",component:C}),Object(p.jsx)(j.a,{exact:!0,path:"/gateway/edit/:id",component:A}),Object(p.jsx)(j.a,{exact:!0,path:"/gateway/device/:GatewayId",component:D}),Object(p.jsx)(j.a,{exact:!0,path:"/device/add/:GatewayId",component:U}),Object(p.jsx)(j.a,{exact:!0,path:"/",component:S}),Object(p.jsx)(j.a,{component:T})]})]})})};m.a.defaults.headers.common["Content-Type"]="application/json",m.a.defaults.headers.common.Authorization=localStorage.getItem("token"),s.a.render(Object(p.jsx)(n.a.StrictMode,{children:Object(p.jsx)(E,{})}),document.getElementById("root"))}},[[73,1,2]]]);
//# sourceMappingURL=main.98ec5c39.chunk.js.map