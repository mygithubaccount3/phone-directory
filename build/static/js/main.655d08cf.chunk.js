(this["webpackJsonpphone-directory"]=this["webpackJsonpphone-directory"]||[]).push([[0],{13:function(e,t,n){},15:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var r=n(1),l=n.n(r),c=n(6),i=n.n(c),d=(n(13),n(8)),o=n(4),s=n(7),a=n(0);function m(e){var t=e.closeForm,n=e.addEntry;return Object(a.jsxs)("form",{onSubmit:function(e){if(e.preventDefault(),document.getElementById("nameError").innerText="",document.getElementById("phoneError").innerText="",e.target.lastName.value.trim().length>0&&e.target.phone.value.trim().length>0){var r=Math.floor(Math.random()*Math.floor(1e5));n({id:r,phone:e.target.phone.value,lastName:e.target.lastName.value}),t()}else 0===e.target.lastName.value.trim().length&&(document.getElementById("nameError").innerText="Name required"),0===e.target.phone.value.trim().length&&(document.getElementById("phoneError").innerText="Phone required")},id:"saveEntryForm",children:[Object(a.jsxs)("label",{children:["\u0422\u0435\u043b\u0435\u0444\u043e\u043d: ",Object(a.jsx)("input",{type:"number",name:"phone"})]}),Object(a.jsx)("p",{id:"phoneError",style:{color:"red"}}),Object(a.jsxs)("label",{children:["\u0424\u0430\u043c\u0438\u043b\u0438\u044f: ",Object(a.jsx)("input",{type:"text",name:"lastName"})]}),Object(a.jsx)("p",{id:"nameError",style:{color:"red"}}),Object(a.jsx)("button",{type:"submit",children:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"})]})}function j(e){var t=e.closeForm,n=e.edit;return Object(a.jsxs)("form",{onSubmit:function(e){e.preventDefault(),document.getElementById("editNameError").innerText="",document.getElementById("editPhoneError").innerText="",e.target.lastName.value.trim().length>0&&e.target.phone.value.trim().length>0?(n(e.target.hiddenId.value,{phone:e.target.phone.value,lastName:e.target.lastName.value}),t()):(0===e.target.lastName.value.trim().length&&(document.getElementById("editNameError").innerText="Name required"),0===e.target.phone.value.trim().length&&(document.getElementById("editPhoneError").innerText="Phone required"))},id:"editEntryForm",children:[Object(a.jsx)("input",{type:"hidden",id:"hiddenId",name:"hiddenId"}),Object(a.jsxs)("label",{children:["\u0422\u0435\u043b\u0435\u0444\u043e\u043d: ",Object(a.jsx)("input",{type:"number",name:"phone"})]}),Object(a.jsx)("p",{id:"editPhoneError",style:{color:"red"}}),Object(a.jsxs)("label",{children:["\u0424\u0430\u043c\u0438\u043b\u0438\u044f: ",Object(a.jsx)("input",{type:"text",name:"lastName"})]}),Object(a.jsx)("p",{id:"editNameError",style:{color:"red"}}),Object(a.jsx)("button",{type:"submit",children:"\u0418\u0437\u043c\u0435\u043d\u0438\u0442\u044c"})]})}function u(e){var t=e.closeForm,n=Object(r.useState)({list:[]}),c=Object(s.a)(n,2),i=c[0],u=c[1];function h(e){return function(){var t=i.list.findIndex((function(t){return t.id==e})),n=Object(o.a)(i.list);n.splice(t,1),u({list:n})}}var y=i.list.map((function(e){return Object(a.jsxs)("tr",{id:e.id,children:[Object(a.jsx)("td",{style:{textAlign:"center"},children:e.phone}),Object(a.jsx)("td",{style:{textAlign:"center"},children:e.lastName}),Object(a.jsxs)("td",{style:{textAlign:"center"},children:[Object(a.jsx)("button",{onClick:(t=e.id,n=e.phone,r=e.lastName,function(){document.getElementById("overlay").style.display="block",document.getElementById("editEntryForm").style.display="flex",document.getElementById("editEntryForm").hiddenId.value=t,document.getElementById("editEntryForm").phone.value=n,document.getElementById("editEntryForm").lastName.value=r}),children:"\u0418\u0437\u043c\u0435\u043d\u0438\u0442\u044c"}),Object(a.jsx)("button",{onClick:h(e.id),children:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c"})]})]},e.id);var t,n,r}));return Object(a.jsxs)(l.a.Fragment,{children:[Object(a.jsx)(m,{closeForm:t,addEntry:function(e){u({list:[].concat(Object(o.a)(i.list),[e])})}}),Object(a.jsx)(j,{closeForm:t,edit:function(e,t){var n=i.list.findIndex((function(t){return t.id==e})),r=Object(o.a)(i.list),l=Object(d.a)({},r[n]);l.phone=t.phone,l.lastName=t.lastName,r[n]=l,u({list:r})}}),Object(a.jsxs)("table",{className:"directory__items",style:{width:"100%"},children:[Object(a.jsx)("thead",{children:Object(a.jsxs)("tr",{children:[Object(a.jsx)("th",{scope:"col",children:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430"}),Object(a.jsx)("th",{scope:"col",children:"\u0424\u0430\u043c\u0438\u043b\u0438\u044f"}),Object(a.jsx)("th",{scope:"col",children:"\u0414\u0435\u0439\u0441\u0442\u0432\u0438\u0435"})]})}),Object(a.jsx)("tbody",{children:y})]})]})}n(15);var h=function(){function e(){var e=document.getElementById("saveEntryForm"),t=document.getElementById("editEntryForm");e.reset(),t.reset(),e.style.display="none",t.style.display="none",document.getElementById("overlay").style.display="none"}return Object(a.jsxs)("div",{className:"App",children:[Object(a.jsx)("div",{id:"overlay",onClick:e}),Object(a.jsx)("h1",{style:{textAlign:"center"},children:"\u0422\u0435\u043b\u0435\u0444\u043e\u043d\u043d\u044b\u0439 \u0441\u043f\u0440\u0430\u0432\u043e\u0447\u043d\u0438\u043a"}),Object(a.jsx)("button",{onClick:function(){document.getElementById("overlay").style.display="block",document.getElementById("saveEntryForm").style.display="flex"},children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c"}),Object(a.jsx)("div",{className:"directory",children:Object(a.jsx)(u,{closeForm:e})})]})};i.a.render(Object(a.jsx)(l.a.StrictMode,{children:Object(a.jsx)(h,{})}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.655d08cf.chunk.js.map