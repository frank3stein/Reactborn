(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{144:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(148),c=a(153);t.default=function(){return r.a.createElement(c.a,null,r.a.createElement("h1",null,"Hi from the second page"),r.a.createElement("p",null,"Welcome to page 2"),r.a.createElement(i.a,{to:"/"},"Go back to the homepage"))}},148:function(e,t,a){"use strict";a.d(t,"b",function(){return s});var n=a(0),r=a.n(n),i=a(4),c=a.n(i),l=a(32),o=a.n(l);a.d(t,"a",function(){return o.a});a(149);var d=r.a.createContext({}),s=function(e){return r.a.createElement(d.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};s.propTypes={data:c.a.object,query:c.a.string.isRequired,render:c.a.func,children:c.a.func}},149:function(e,t,a){var n;e.exports=(n=a(151))&&n.default||n},150:function(e){e.exports={data:{site:{siteMetadata:{title:"Waterborn"}}}}},151:function(e,t,a){"use strict";a.r(t);a(33);var n=a(0),r=a.n(n),i=a(4),c=a.n(i),l=a(54),o=a(2),d=function(e){var t=e.location,a=o.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(l.a,Object.assign({location:t,pageResources:a},a.json))};d.propTypes={location:c.a.shape({pathname:c.a.string.isRequired}).isRequired},t.default=d},152:function(e){e.exports={data:{headerImage:{childImageSharp:{fluid:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAFCAYAAABFA8wzAAAACXBIWXMAAAsSAAALEgHS3X78AAABY0lEQVQY0y3QzyuDARzH8eff0CzNbxd/iHKRlFLSSMSBnCguHPyILEeRnxsO+/U0z7Mx2/wmI2a2XZbN9mwaRrbE4e3ZOLz61PfT9/IRauxxCiptf6pUdeJf6qyx4q3Q66xxaq1RDFubONbmGbE40YrPVIsJqv7Vik8ITb4UDQcKA1cZxgNvTN2/MamaCWYxhN7pu8zQe/HMXCSHIxAmu7fE8IKR8MooC9I+nXKAQdmPXrqjXQogTKuPnnSe8Mc3UjKPOZ7D9PiJS8kjq84yX1jin5y8/PCqROEjwey2m0XDNJLLhtsjE/KasbhdTLjOEBo9KXouMrQdKbR4E7QdJtCfKDR7k/Sdp+k+TdGlavUl6ThWsJxf4jMvM7ZjpUmO0C/f0CoFGXJe0bz7gFBti6GzPVFqvEez6qfMFESzdl2k3bhFs35LyYq/2Gm3QuqmMertUSocaWrU3SrEJOWqQhb2/AV8nCr3N8GSjgAAAABJRU5ErkJggg==",aspectRatio:3.9612403100775193,src:"/Reactborn/static/d8529584912ce182e3ed2bf1f54e4941/77a73/Waterborn-s.png",srcSet:"/Reactborn/static/d8529584912ce182e3ed2bf1f54e4941/03981/Waterborn-s.png 128w,\n/Reactborn/static/d8529584912ce182e3ed2bf1f54e4941/8587a/Waterborn-s.png 256w,\n/Reactborn/static/d8529584912ce182e3ed2bf1f54e4941/77a73/Waterborn-s.png 511w",sizes:"(max-width: 511px) 100vw, 511px"}}}}}},153:function(e,t,a){"use strict";var n=a(150),r=a(0),i=a.n(r),c=a(4),l=a.n(c),o=a(155),d=a.n(o),s=a(148),u=a(152),m=a(154),p=a.n(m),f=function(){return i.a.createElement(s.b,{query:"3103013552",render:function(e){return i.a.createElement(p.a,{fluid:e.headerImage.childImageSharp.fluid})},data:u})},g=["Home","Rooms","Photos","About"],E=function(){return i.a.createElement("div",{style:{width:"40px",height:"30px",position:"absolute",top:"10px",right:"25px",cursor:"pointer"}},i.a.createElement("div",{style:{}},i.a.createElement("div",{style:{}}),i.a.createElement("div",{style:{}}),i.a.createElement("div",{style:{}})),i.a.createElement("nav",null,i.a.createElement("ul",{role:"navigation",className:"hidden",style:{display:"none"}},g.map(function(e){return i.a.createElement("li",null,i.a.createElement("a",{href:"/"},e))}))))},h=function(e){var t=e.siteTitle;return i.a.createElement("div",{style:{display:"flex",background:"#3cb4e9",marginBottom:"1.45rem"}},i.a.createElement("div",{style:{flex:"auto",maxWidth:"200px",marginBottom:"1.45rem"}},i.a.createElement(f,null)),i.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"1.45rem 1.0875rem",textAlign:"center"}},i.a.createElement("h1",{style:{margin:0}},i.a.createElement(s.a,{to:"/",style:{color:"#fec5aa",textDecoration:"none"}},t))),i.a.createElement(E,null))},A=(a(156),function(e){var t=e.children;return i.a.createElement(s.b,{query:"755544856",render:function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement(d.a,{title:e.site.siteMetadata.title,meta:[{name:"description",content:"Sample"},{name:"keywords",content:"sample, something"}]},i.a.createElement("html",{lang:"en"})),i.a.createElement(h,{siteTitle:e.site.siteMetadata.title}),i.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"0px 1.0875rem 1.45rem",paddingTop:0}},t))},data:n})});A.propTypes={children:l.a.node.isRequired};t.a=A}}]);
//# sourceMappingURL=component---src-pages-page-2-js-d38b5396fb3d44c5e89a.js.map