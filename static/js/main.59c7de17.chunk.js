(this["webpackJsonpreact_dynamic-list-of-goods"]=this["webpackJsonpreact_dynamic-list-of-goods"]||[]).push([[0],{12:function(t,e,n){},14:function(t,e,n){"use strict";n.r(e);var r=n(4),o=n.n(r),c=n(5),a=n(6),s=n(3),u=n.n(s),i=n(1),d=(n(12),n(0)),b=function(t){var e=t.goods;return Object(d.jsx)("ul",{children:e.map((function(t){return Object(d.jsx)("li",{"data-cy":"good",style:{color:t.color},children:t.name},t.id)}))})};function l(){return fetch("https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json").then((function(t){return t.json()}))}var f=function(){return l().then((function(t){return t.sort((function(t,e){return t.name.localeCompare(e.name)})),t.slice(0,5)}))},p=function(){return l().then((function(t){return t.filter((function(t){return"red"===t.color}))}))},j=function(){var t=Object(i.useState)([]),e=Object(a.a)(t,2),n=e[0],r=e[1];function o(t){return s.apply(this,arguments)}function s(){return(s=Object(c.a)(u.a.mark((function t(e){var n,o;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n=null===e||void 0===e?void 0:e.target){t.next=3;break}return t.abrupt("return");case 3:t.t0=n.dataset.cy,t.next="all-button"===t.t0?6:"first-five-button"===t.t0?10:"red-button"===t.t0?14:18;break;case 6:return t.next=8,l();case 8:return o=t.sent,t.abrupt("break",19);case 10:return t.next=12,f();case 12:return o=t.sent,t.abrupt("break",19);case 14:return t.next=16,p();case 16:return o=t.sent,t.abrupt("break",19);case 18:o=[];case 19:r(o);case 20:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)("h1",{children:"Dynamic list of Goods"}),Object(d.jsx)("button",{type:"button","data-cy":"all-button",onClick:o,children:"Load all goods"}),Object(d.jsx)("button",{type:"button","data-cy":"first-five-button",onClick:o,children:"Load 5 first goods"}),Object(d.jsx)("button",{type:"button","data-cy":"red-button",onClick:o,children:"Load red goods"}),Object(d.jsx)(b,{goods:n})]})};o.a.render(Object(d.jsx)(j,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.59c7de17.chunk.js.map