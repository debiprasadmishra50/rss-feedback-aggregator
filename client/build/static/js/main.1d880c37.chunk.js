(this.webpackJsonpintroduction=this.webpackJsonpintroduction||[]).push([[0],{47:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n.n(r),s=n(18),a=n.n(s),i=n(3),l=n.n(i),o=n(5),u=n(4),d=n(0),j=function(e){var t=e.onSubmit,n=Object(r.useState)(""),c=Object(u.a)(n,2),s=c[0],a=c[1],i=Object(r.useState)(""),l=Object(u.a)(i,2),o=l[0],j=l[1];return Object(d.jsxs)("div",{style:{marginLeft:"10px",marginTop:"10px"},children:[Object(d.jsx)("h3",{children:"Add a RSS Link: "}),Object(d.jsxs)("form",{onSubmit:function(e){e.preventDefault(),t({name:s,link:o}),a(""),j("")},className:"ui form",children:[Object(d.jsxs)("div",{className:"field",children:[Object(d.jsx)("label",{htmlFor:"name",children:"Enter Name: "}),Object(d.jsx)("input",{type:"text",id:"name",required:!0,placeholder:"Enter name",onChange:function(e){return a(e.target.value)},value:s})]}),Object(d.jsxs)("div",{className:"field",children:[Object(d.jsx)("label",{htmlFor:"name",children:"Enter Link: "}),Object(d.jsx)("input",{type:"text",id:"link",required:!0,placeholder:"Enter link",onChange:function(e){return j(e.target.value)},value:o})]}),Object(d.jsx)("div",{className:"field",children:Object(d.jsx)("button",{className:"ui button primary",children:"Submit"})})]})]})},h=n(6),b=n.n(h),m=void 0,p=function(e){var t=e.search,n=e.results,r=e.onSelect,s=function(){var e=Object(o.a)(l.a.mark((function e(n){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.delete("/api/v1/rss/".concat(n));case 2:t();case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(d.jsx)("div",{className:"ui segments",children:n.length>0?function(e){var t=e.map((function(e,t){return Object(d.jsxs)("div",{className:"ui segment",style:{padding:"7px 7px 10px 7px",fontSize:"1.5em",fontWeight:"bold",cursor:"pointer"},children:[Object(d.jsx)("span",{onClick:r.bind(m,e),children:e.name}),Object(d.jsx)("button",{className:"ui icon mini button right floated negative",onClick:s.bind(m,e.slug),children:Object(d.jsx)("i",{className:"trash alternate icon"})})]},t+1)}));return Object(d.jsx)(c.a.Fragment,{children:t})}(n):Object(d.jsx)("div",{className:"ui active centered inline loader"})})};var x=function(e){return b.a.get("".concat("https://api.rss2json.com/v1/api.json?rss_url=").concat(e))},O=function(e){var t=e.selected,n=Object(r.useState)(!1),c=Object(u.a)(n,2),s=c[0],a=c[1],i=Object(r.useState)(null),j=Object(u.a)(i,2),h=j[0],b=j[1],m=Object(r.useState)(null),p=Object(u.a)(m,2),O=p[0],v=p[1],f=function(){var e=Object(o.a)(l.a.mark((function e(){var n,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,x(t.link);case 3:return n=e.sent,r=n.data,e.abrupt("return",r);case 8:return e.prev=8,e.t0=e.catch(0),a(!0),e.abrupt("return",{status:"error",feed:[],items:[]});case 12:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),g=function(){f().then((function(e){var t=e.status,n=e.feed,r=e.items;"ok"===t&&(b(n),v(r))}))};return Object(r.useEffect)((function(){var e;return t&&(g(),e=setInterval((function(){g()}),36e5)),function(){a(!1),b(null),v(null),clearInterval(e)}}),[t]),Object(d.jsxs)("div",{children:[h?function(e){return Object(d.jsx)("div",{className:"ui items",children:Object(d.jsxs)("div",{className:"item",style:{margin:"10px 10px 15px 0px",maxWidth:"75%"},children:[Object(d.jsx)("div",{className:"image",children:Object(d.jsx)("img",{src:e.image||"https://cdn.pixabay.com/photo/2017/06/25/14/38/rss-2440955_960_720.png",alt:"Feed"})}),Object(d.jsxs)("div",{className:"content",children:[Object(d.jsx)("h1",{dangerouslySetInnerHTML:{__html:null===e||void 0===e?void 0:e.title}}),Object(d.jsx)("a",{href:e.link,target:"_blank",rel:"noreferrer",children:"[visit Link]"}),Object(d.jsx)("div",{className:"meta",children:Object(d.jsx)("span",{children:"Description"})}),Object(d.jsx)("div",{className:"description",children:Object(d.jsx)("p",{children:e.description})}),Object(d.jsxs)("div",{className:"extra",children:["Author: ",e.author]})]})]})})}(h):"",O?function(e){var t=e.map((function(e,t){return Object(d.jsxs)("div",{className:"ui segment",children:[Object(d.jsx)("h3",{className:"ui header",children:e.title}),Object(d.jsxs)("div",{style:{marginBottom:"8px",borderTop:"1px dotted grey",borderBottom:"1px dotted gray",padding:"4px 0px"},children:[Object(d.jsxs)("span",{className:"ui price",children:["published date: ",e.pubDate]}),Object(d.jsx)("a",{href:e.link,style:{float:"right"},children:"[visit link]"})]}),Object(d.jsx)("div",{className:"description",children:Object(d.jsx)("p",{dangerouslySetInnerHTML:{__html:e.description}})})]},t)}));return Object(d.jsx)("div",{className:"ui raised segments",style:{maxWidth:"75%"},children:t})}(O):"",!0===s?Object(d.jsxs)("div",{className:"ui error message",style:{maxWidth:"75%",marginTop:"10px"},children:[Object(d.jsx)("i",{className:"close icon"}),Object(d.jsx)("div",{className:"header",children:"There were some errors with your Search"}),Object(d.jsx)("ul",{className:"list",children:Object(d.jsx)("li",{children:"Please check your internet connection"})})]}):"",t?"":Object(d.jsxs)("div",{className:"ui info message",style:{marginTop:"10px",maxWidth:"75%"},children:[Object(d.jsx)("div",{className:"header",children:"Please select a RSS feed to view."}),Object(d.jsxs)("ul",{className:"list",children:[Object(d.jsx)("li",{children:"You can Add a new feed through the form"}),Object(d.jsx)("li",{children:"You can delete the feed from the list"}),Object(d.jsx)("li",{children:"The Feed for a site will be updated every hour"})]})]})]})},v=n(19),f=n(20),g=n(22),N=n(21),y=function(e){Object(g.a)(n,e);var t=Object(N.a)(n);function n(){var e;Object(v.a)(this,n);for(var r=arguments.length,c=new Array(r),s=0;s<r;s++)c[s]=arguments[s];return(e=t.call.apply(t,[this].concat(c))).state={time:(new Date).toLocaleTimeString()},e}return Object(f.a)(n,[{key:"componentDidMount",value:function(){var e=this;setInterval((function(){e.setState({time:(new Date).toLocaleTimeString()})}),1e3)}},{key:"render",value:function(){return Object(d.jsx)("div",{className:"time",style:{position:"absolute",top:"0px",right:"10px"},children:this.state.time})}}]),n}(c.a.Component),S=y,k=function(){var e=Object(r.useState)([]),t=Object(u.a)(e,2),n=t[0],c=t[1],s=Object(r.useState)(null),a=Object(u.a)(s,2),i=a[0],h=a[1],m=function(){var e=Object(o.a)(l.a.mark((function e(){var t,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"/api/v1/rss",e.next=3,b.a.get("/api/v1/rss");case 3:t=e.sent,n=t.data,c(n.data);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(r.useEffect)((function(){m(),console.log("First time render")}),[]);var x=function(){var e=Object(o.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.post("/api/v1/rss",t);case 2:m();case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(d.jsxs)("div",{children:[Object(d.jsx)(S,{}),Object(d.jsxs)("div",{className:"ui grid",children:[Object(d.jsxs)("div",{className:"four wide column",children:[Object(d.jsx)(j,{onSubmit:x}),Object(d.jsx)(p,{search:m,results:n,onSelect:h})]}),Object(d.jsx)("div",{className:"twelve wide column",children:Object(d.jsx)(O,{selected:i})})]})]})};a.a.render(Object(d.jsx)(k,{}),document.querySelector("#root"))}},[[47,1,2]]]);
//# sourceMappingURL=main.1d880c37.chunk.js.map