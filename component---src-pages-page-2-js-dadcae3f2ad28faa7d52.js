(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{145:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(149),i=a(154);t.default=function(){return r.a.createElement(i.a,null,r.a.createElement("h1",null,"Hi from the second page"),r.a.createElement("p",null,"Welcome to page 2"),r.a.createElement(c.a,{to:"/"},"Go back to the homepage"))}},149:function(e,t,a){"use strict";a.d(t,"b",function(){return u});var n=a(0),r=a.n(n),c=a(4),i=a.n(c),l=a(33),o=a.n(l);a.d(t,"a",function(){return o.a});a(150);var s=r.a.createContext({}),u=function(e){return r.a.createElement(s.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};u.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},150:function(e,t,a){var n;e.exports=(n=a(152))&&n.default||n},151:function(e){e.exports={data:{site:{siteMetadata:{title:"Waterborn"}}}}},152:function(e,t,a){"use strict";a.r(t);a(34);var n=a(0),r=a.n(n),c=a(4),i=a.n(c),l=a(55),o=a(2),s=function(e){var t=e.location,a=o.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(l.a,Object.assign({location:t,pageResources:a},a.json))};s.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=s},153:function(e){e.exports={data:{headerImage:{childImageSharp:{fluid:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAFCAYAAABFA8wzAAAACXBIWXMAAAsSAAALEgHS3X78AAABY0lEQVQY0y3QzyuDARzH8eff0CzNbxd/iHKRlFLSSMSBnCguHPyILEeRnxsO+/U0z7Mx2/wmI2a2XZbN9mwaRrbE4e3ZOLz61PfT9/IRauxxCiptf6pUdeJf6qyx4q3Q66xxaq1RDFubONbmGbE40YrPVIsJqv7Vik8ITb4UDQcKA1cZxgNvTN2/MamaCWYxhN7pu8zQe/HMXCSHIxAmu7fE8IKR8MooC9I+nXKAQdmPXrqjXQogTKuPnnSe8Mc3UjKPOZ7D9PiJS8kjq84yX1jin5y8/PCqROEjwey2m0XDNJLLhtsjE/KasbhdTLjOEBo9KXouMrQdKbR4E7QdJtCfKDR7k/Sdp+k+TdGlavUl6ThWsJxf4jMvM7ZjpUmO0C/f0CoFGXJe0bz7gFBti6GzPVFqvEez6qfMFESzdl2k3bhFs35LyYq/2Gm3QuqmMertUSocaWrU3SrEJOWqQhb2/AV8nCr3N8GSjgAAAABJRU5ErkJggg==",aspectRatio:3.9612403100775193,src:"/Reactborn/static/d8529584912ce182e3ed2bf1f54e4941/3548c/Waterborn-s.png",srcSet:"/Reactborn/static/d8529584912ce182e3ed2bf1f54e4941/8d345/Waterborn-s.png 128w,\n/Reactborn/static/d8529584912ce182e3ed2bf1f54e4941/2ea09/Waterborn-s.png 256w,\n/Reactborn/static/d8529584912ce182e3ed2bf1f54e4941/3548c/Waterborn-s.png 511w",sizes:"(max-width: 511px) 100vw, 511px"}}}}}},154:function(e,t,a){"use strict";var n=a(151),r=a(0),c=a.n(r),i=a(4),l=a.n(i),o=a(156),s=a.n(o),u=a(149),d=a(153),m=a(155),f=a.n(m),p=function(){return c.a.createElement(u.b,{query:"3103013552",render:function(e){return c.a.createElement(f.a,{fluid:e.headerImage.childImageSharp.fluid})},data:d})},g=(a(157),["Home","Rooms","Photos","About"]),E=function(){var e=Object(r.useState)(!1),t=e[0],a=e[1];return c.a.createElement("div",{onClick:function(e){return function(e){a(!t),e.preventDefault()}(e)},className:(t?"on":"")+" menu-section",style:{}},c.a.createElement("div",{className:(t?"on":"")+" menu-toggle",style:{}},c.a.createElement("div",{className:"one",style:{}}),c.a.createElement("div",{className:"two",style:{}}),c.a.createElement("div",{className:"three",style:{}})),c.a.createElement("nav",null,c.a.createElement("ul",{role:"navigation",className:t?"":"hidden",style:{}},g.map(function(e){return c.a.createElement("li",{key:e},c.a.createElement("a",{href:"/"},e))}))))},A=function(e){var t=e.siteTitle;return c.a.createElement("div",{style:{display:"flex",background:"#3cb4e9",marginBottom:"1.45rem"}},c.a.createElement("div",{style:{flex:"auto",maxWidth:"200px",marginBottom:"1.45rem"}},c.a.createElement(p,null)),c.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"1.45rem 1.0875rem",textAlign:"center"}},c.a.createElement("h1",{style:{margin:0}},c.a.createElement(u.a,{to:"/",style:{color:"#fec5aa",textDecoration:"none"}},t))),c.a.createElement(E,null))},b=(a(158),a(159),function(e){var t=e.children;return c.a.createElement(u.b,{query:"755544856",render:function(e){return c.a.createElement(c.a.Fragment,null,c.a.createElement(s.a,{title:e.site.siteMetadata.title,meta:[{name:"description",content:"Sample"},{name:"keywords",content:"sample, something"}]},c.a.createElement("html",{lang:"en"})),c.a.createElement(A,{siteTitle:e.site.siteMetadata.title}),c.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"0px 1.0875rem 1.45rem",paddingTop:0}},t))},data:n})});b.propTypes={children:l.a.node.isRequired};t.a=b}}]);
//# sourceMappingURL=component---src-pages-page-2-js-dadcae3f2ad28faa7d52.js.map