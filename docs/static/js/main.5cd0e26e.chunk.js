(this["webpackJsonptodo-list"]=this["webpackJsonptodo-list"]||[]).push([[0],{15:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n(1),o=n(8),r=n.n(o),d=(n(15),n(2)),l=function(e){var t=e.todo,n=e.index,c=e.handleDelete,o=e.handleToggle;return Object(a.jsxs)("div",{className:"list-item",children:[Object(a.jsxs)("strong",{children:[" ",n," "]}),Object(a.jsx)("p",{onClick:function(){return o(t.id)},className:t.done?"complete":"",children:t.tarea}),Object(a.jsx)("button",{className:"btn btn-danger",onClick:function(){return c(t.id)},children:"Delete"})]},t.id)},s=function(e){var t=e.todos,n=e.handleDelete,c=e.handleToggle;return Object(a.jsx)("div",{children:t.map((function(e,t){return Object(a.jsx)(l,{todo:e,index:t,handleDelete:n,handleToggle:c},e.id)}))})},i=n(6),j=n(3),u=function(e){var t=e.handleAddTodo,n=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object(c.useState)(e),n=Object(d.a)(t,2),a=n[0],o=n[1];return[a,function(e){var t=e.target;o(Object(j.a)(Object(j.a)({},a),{},Object(i.a)({},t.name,t.value)))},function(){o(e)}]}({tarea:""}),o=Object(d.a)(n,3),r=o[0].tarea,l=o[1],s=o[2];return Object(a.jsx)("div",{className:"agregar",children:Object(a.jsxs)("form",{onSubmit:function(e){if(e.preventDefault(),!(r.trim().length<=1)){var n={id:(new Date).getTime(),tarea:r,done:!1};t(n),s()}},children:[Object(a.jsx)("input",{className:"form-control",name:"tarea",placeholder:"Nueva Tarea",type:"text",autoComplete:"off",onChange:l,value:r}),Object(a.jsx)("br",{}),Object(a.jsx)("button",{type:"submit",className:"btn btn-primary",children:" Add "})]})})},b=n(9),h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"add":return[].concat(Object(b.a)(e),[t.payload]);case"delete":return e.filter((function(e){return e.id!==t.payload}));case"toggle":return e.map((function(e){return e.id===t.payload?Object(j.a)(Object(j.a)({},e),{},{done:!e.done}):e}));default:return e}},O=function(){return JSON.parse(localStorage.getItem("todos"))||[]},f=function(){var e=Object(c.useReducer)(h,[],O),t=Object(d.a)(e,2),n=t[0],o=t[1];Object(c.useEffect)((function(){localStorage.setItem("todos",JSON.stringify(n))}),[n]);return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("h1",{children:"ToDo List"}),Object(a.jsx)("hr",{}),Object(a.jsxs)("div",{className:"row",children:[Object(a.jsx)("div",{className:"col-6",children:Object(a.jsx)(s,{todos:n,handleDelete:function(e){o({type:"delete",payload:e})},handleToggle:function(e){o({type:"toggle",payload:e})}})}),Object(a.jsx)("div",{className:"col-1"}),Object(a.jsxs)("div",{className:"col-5",children:[Object(a.jsx)("h3",{children:" Add new task "}),Object(a.jsx)(u,{handleAddTodo:function(e){o({type:"add",payload:e})}})]})]})]})};r.a.render(Object(a.jsx)(f,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.5cd0e26e.chunk.js.map