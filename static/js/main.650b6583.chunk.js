(this["webpackJsonpto-do-list"]=this["webpackJsonpto-do-list"]||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var c=n(0),i=n(1),s=n(7),a=n.n(s),j=(n(13),n(14),n(5)),r=n(2),l=function(e){var t=Object(i.useState)(e.text),n=Object(r.a)(t,2),s=n[0],a=n[1],j=Object(i.useState)(!1),l=Object(r.a)(j,2),d=l[0],u=l[1],o=Object(i.useState)(e.text),b=Object(r.a)(o,2),O=b[0],m=b[1],x=e.delete_item;return Object(c.jsx)("div",{children:d?Object(c.jsxs)("div",{className:"list-item-wrapper",children:[Object(c.jsx)("input",{value:O,onChange:function(e){return m(e.target.value)}}),Object(c.jsx)("div",{className:"item-buttons",children:Object(c.jsx)("div",{className:"item-delete-button",children:Object(c.jsx)("button",{onClick:function(){e.edit_item(e.id),u(!1),a(O)},children:"Save"})})})]}):Object(c.jsxs)("div",{className:"list-item-wrapper",children:[Object(c.jsx)("div",{className:"item-description",children:s}),Object(c.jsxs)("div",{className:"item-buttons",children:[Object(c.jsx)("div",{className:"item-delete-button",children:Object(c.jsx)("button",{onClick:function(){return x(e.id)},children:"Delete"})}),Object(c.jsx)("div",{className:"item-edit-button",children:Object(c.jsx)("button",{onClick:function(){return u(!0)},children:"Edit"})})]})]})})},d=function(e){var t=Object(i.useState)([]),n=Object(r.a)(t,2),s=n[0],a=n[1],d=Object(i.useState)(""),u=Object(r.a)(d,2),o=u[0],b=u[1],O=function(e){s.splice(e,1),a(Object(j.a)(s))},m=function(e,t){s.splice(e,1,t),a(Object(j.a)(s)),console.log(s)};return Object(c.jsxs)("div",{className:"list-wrapper",children:[s.map((function(e,t){return Object(c.jsx)(l,{text:e,delete_item:O,id:t,edit_item:m},t)})),Object(c.jsxs)("div",{className:"add-item-wrapper",children:[Object(c.jsx)("input",{value:o,onChange:function(e){return b(e.target.value)}}),Object(c.jsx)("button",{onClick:function(){var e;e=o,a([].concat(Object(j.a)(s),[e])),b("")},children:"Add Item"})]})]})};var u=function(){return Object(c.jsx)("div",{children:Object(c.jsx)(d,{})})},o=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,16)).then((function(t){var n=t.getCLS,c=t.getFID,i=t.getFCP,s=t.getLCP,a=t.getTTFB;n(e),c(e),i(e),s(e),a(e)}))};a.a.render(Object(c.jsx)(u,{}),document.getElementById("root")),o()}},[[15,1,2]]]);
//# sourceMappingURL=main.650b6583.chunk.js.map