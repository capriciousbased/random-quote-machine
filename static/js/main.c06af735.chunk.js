(this["webpackJsonprandom-quote-machine"]=this["webpackJsonprandom-quote-machine"]||[]).push([[0],{11:function(t,e,n){},13:function(t,e,n){},15:function(t,e,n){"use strict";n.r(e);var c=n(1),a=n.n(c),s=n(5),o=n.n(s),r=(n(11),n(3)),i=n.n(r),h=n(6),u=n(4),d=(n(13),n(0));var j=function(){var t=Object(c.useState)([]),e=Object(u.a)(t,2),n=e[0],a=e[1],s=Object(c.useState)([]),o=Object(u.a)(s,2),r=o[0],j=o[1];function b(){return(b=Object(h.a)(i.a.mark((function t(){var e,n,c;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://type.fit/api/quotes");case 2:return e=t.sent,t.next=5,e.json();case 5:n=t.sent,a(n),c=Math.floor(Math.random()*n.length),j(n[c]);case 9:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return Object(c.useEffect)((function(){!function(){b.apply(this,arguments)}()}),[]),Object(d.jsx)("div",{id:"quote-box",children:Object(d.jsxs)("div",{className:"quote-item",children:[Object(d.jsx)("div",{children:r?Object(d.jsxs)(d.Fragment,{children:[Object(d.jsxs)("h2",{id:"text",children:['"',r.text,'"']}),Object(d.jsxs)("p",{id:"author",children:["-- ",r.author]})]}):Object(d.jsx)("h2",{children:"Loading..."})}),Object(d.jsxs)("div",{className:"quote-button",children:[Object(d.jsx)("a",{id:"tweet-quote",href:encodeURI("https://twitter.com/intent/tweet?text=".concat(r.text,"&hashtags=thewebdevcoach")),children:Object(d.jsx)("i",{class:"fab fa-twitter"})}),Object(d.jsx)("a",{href:encodeURI("https://tumblr.com/widgets/share/tool?posttype=quote&tag=quotes,text=".concat(r.text,"&hashtags=thewebdevcoach")),children:Object(d.jsx)("i",{class:"fab fa-tumblr-square"})}),Object(d.jsx)("button",{id:"new-quote",onClick:function(){var t=Math.floor(Math.random()*n.length);j(n[t])},children:"New Quote"})]})]})})},b=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,16)).then((function(e){var n=e.getCLS,c=e.getFID,a=e.getFCP,s=e.getLCP,o=e.getTTFB;n(t),c(t),a(t),s(t),o(t)}))};o.a.render(Object(d.jsx)(a.a.StrictMode,{children:Object(d.jsx)(j,{})}),document.getElementById("root")),b()}},[[15,1,2]]]);
//# sourceMappingURL=main.c06af735.chunk.js.map