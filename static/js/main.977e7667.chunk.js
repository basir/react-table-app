(this["webpackJsonpreact-table-app"]=this["webpackJsonpreact-table-app"]||[]).push([[0],{23:function(e,t,r){},45:function(e,t,r){"use strict";r.r(t);var a=r(3),c=r.n(a),n=r(16),s=r.n(n),o=(r(23),r(5)),u=r.n(o),d=r(17),i=r(7),g=r(18),j=r.n(g),b=r(1),l=r(4),p=r(0);function O(e){var t=e.columns,r=e.data,a=Object(l.useTable)({columns:t,data:r},l.useGroupBy,l.useSortBy,l.useExpanded),c=a.getTableProps,n=a.getTableBodyProps,s=a.headerGroups,o=a.rows,u=a.prepareRow;return Object(p.jsxs)("table",Object(b.a)(Object(b.a)({},c()),{},{children:[Object(p.jsx)("thead",{children:s.map((function(e){return Object(p.jsx)("tr",Object(b.a)(Object(b.a)({},e.getHeaderGroupProps()),{},{children:e.headers.map((function(e){return Object(p.jsxs)("th",Object(b.a)(Object(b.a)({},e.getHeaderProps(e.getSortByToggleProps())),{},{children:[e.canGroupBy&&"category"===e.id?Object(p.jsxs)("span",Object(b.a)(Object(b.a)({},e.getGroupByToggleProps()),{},{children:[" ",e.isGrouped?"+ ":"- "]})):null,e.render("Header"),Object(p.jsx)("span",{children:e.isSorted?e.isSortedDesc?" \u25bc":" \u25b2":""})]}))}))}))}))}),Object(p.jsx)("tbody",Object(b.a)(Object(b.a)({},n()),{},{children:o.map((function(e){return u(e),Object(p.jsx)("tr",Object(b.a)(Object(b.a)({},e.getRowProps()),{},{children:e.cells.map((function(t){return Object(p.jsx)("td",Object(b.a)(Object(b.a)({},t.getCellProps()),{},{children:t.isGrouped?Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("span",Object(b.a)(Object(b.a)({},e.getToggleRowExpandedProps()),{},{children:e.isExpanded?"-":"+"}))," ",t.render("Cell")," (",e.subRows.length,")"]}):t.isAggregated?t.render("Aggregated"):t.isPlaceholder?null:t.render("Cell")}))}))}))}))}))]}))}var h=function(){var e=Object(a.useState)([]),t=Object(i.a)(e,2),r=t[0],c=t[1],n=Object(a.useState)(!0),s=Object(i.a)(n,2),o=s[0],g=s[1];Object(a.useEffect)((function(){(function(){var e=Object(d.a)(u.a.mark((function e(){var t,r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return g(!0),e.prev=1,e.next=4,j()("https://basir.github.io/products.json");case 4:t=e.sent,r=t.data,c(r),g(!1),e.next=15;break;case 10:e.prev=10,e.t0=e.catch(1),c([]),console.log(e.t0),g(!1);case 15:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(){return e.apply(this,arguments)}})()()}),[]);var b=Object(a.useMemo)((function(){return[{Header:"Category",accessor:"category"},{Header:"ID",accessor:"id"},{Header:"Name",accessor:"name"},{Header:"Price",accessor:"price",aggregate:"average",Aggregated:function(e){var t=e.value;return"".concat(Math.round(100*t)/100," (avg)")}},{Header:"Count In Stock",accessor:"countInStock",aggregate:"sum",Aggregated:function(e){var t=e.value;return"".concat(t," (sum)")}},{Header:"Brand",accessor:"brand"},{Header:"Rating",accessor:"rating",aggregate:"average",Aggregated:function(e){var t=e.value;return"".concat(Math.round(100*t)/100," (avg)")}},{Header:"Description",accessor:"description"}]}),[]);return Object(p.jsx)("div",{className:"table-container",children:o?Object(p.jsx)("span",{children:"Loading Products..."}):Object(p.jsx)(O,{columns:b,data:r})})},f=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,46)).then((function(t){var r=t.getCLS,a=t.getFID,c=t.getFCP,n=t.getLCP,s=t.getTTFB;r(e),a(e),c(e),n(e),s(e)}))};s.a.render(Object(p.jsx)(c.a.StrictMode,{children:Object(p.jsx)(h,{})}),document.getElementById("root")),f()}},[[45,1,2]]]);
//# sourceMappingURL=main.977e7667.chunk.js.map