(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{147:function(e,A,t){"use strict";t.r(A);var a=t(0),n=t.n(a),r=t(148),c=t(153),i=t(166),l=t(154),o=t.n(l),s=function(){return n.a.createElement(r.b,{query:"268888814",render:function(e){return n.a.createElement(o.a,{fluid:e.dormImages.childImageSharp.fluid})},data:i})};A.default=function(){return n.a.createElement(c.a,null,n.a.createElement("h1",null,"Hi everyone !"),n.a.createElement("p",null,"Welcome to your haven in Bali, to Waterborn Bali."),n.a.createElement("p",null,"Let us catch some big waves."),n.a.createElement("div",{style:{maxWidth:"600px",marginBottom:"1.45rem"}},n.a.createElement(s,null)),n.a.createElement(r.a,{to:"/page-2/"},"Go to page 2"),n.a.createElement(r.a,{to:"/dorm/"},"Go to the dorm page"))}},148:function(e,A,t){"use strict";t.d(A,"b",function(){return s});var a=t(0),n=t.n(a),r=t(4),c=t.n(r),i=t(32),l=t.n(i);t.d(A,"a",function(){return l.a});t(149);var o=n.a.createContext({}),s=function(e){return n.a.createElement(o.Consumer,null,function(A){return e.data||A[e.query]&&A[e.query].data?(e.render||e.children)(e.data?e.data.data:A[e.query].data):n.a.createElement("div",null,"Loading (StaticQuery)")})};s.propTypes={data:c.a.object,query:c.a.string.isRequired,render:c.a.func,children:c.a.func}},149:function(e,A,t){var a;e.exports=(a=t(151))&&a.default||a},150:function(e){e.exports={data:{site:{siteMetadata:{title:"Waterborn"}}}}},151:function(e,A,t){"use strict";t.r(A);t(33);var a=t(0),n=t.n(a),r=t(4),c=t.n(r),i=t(54),l=t(2),o=function(e){var A=e.location,t=l.default.getResourcesForPathnameSync(A.pathname);return n.a.createElement(i.a,Object.assign({location:A,pageResources:t},t.json))};o.propTypes={location:c.a.shape({pathname:c.a.string.isRequired}).isRequired},A.default=o},152:function(e){e.exports={data:{headerImage:{childImageSharp:{fluid:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAFCAYAAABFA8wzAAAACXBIWXMAAAsSAAALEgHS3X78AAABY0lEQVQY0y3QzyuDARzH8eff0CzNbxd/iHKRlFLSSMSBnCguHPyILEeRnxsO+/U0z7Mx2/wmI2a2XZbN9mwaRrbE4e3ZOLz61PfT9/IRauxxCiptf6pUdeJf6qyx4q3Q66xxaq1RDFubONbmGbE40YrPVIsJqv7Vik8ITb4UDQcKA1cZxgNvTN2/MamaCWYxhN7pu8zQe/HMXCSHIxAmu7fE8IKR8MooC9I+nXKAQdmPXrqjXQogTKuPnnSe8Mc3UjKPOZ7D9PiJS8kjq84yX1jin5y8/PCqROEjwey2m0XDNJLLhtsjE/KasbhdTLjOEBo9KXouMrQdKbR4E7QdJtCfKDR7k/Sdp+k+TdGlavUl6ThWsJxf4jMvM7ZjpUmO0C/f0CoFGXJe0bz7gFBti6GzPVFqvEez6qfMFESzdl2k3bhFs35LyYq/2Gm3QuqmMertUSocaWrU3SrEJOWqQhb2/AV8nCr3N8GSjgAAAABJRU5ErkJggg==",aspectRatio:3.9612403100775193,src:"/static/d8529584912ce182e3ed2bf1f54e4941/77a73/Waterborn-s.png",srcSet:"/static/d8529584912ce182e3ed2bf1f54e4941/03981/Waterborn-s.png 128w,\n/static/d8529584912ce182e3ed2bf1f54e4941/8587a/Waterborn-s.png 256w,\n/static/d8529584912ce182e3ed2bf1f54e4941/77a73/Waterborn-s.png 511w",sizes:"(max-width: 511px) 100vw, 511px"}}}}}},153:function(e,A,t){"use strict";var a=t(150),n=t(0),r=t.n(n),c=t(4),i=t.n(c),l=t(155),o=t.n(l),s=t(148),d=t(152),m=t(154),f=t.n(m),u=function(){return r.a.createElement(s.b,{query:"3103013552",render:function(e){return r.a.createElement(f.a,{fluid:e.headerImage.childImageSharp.fluid})},data:d})},E=(t(156),["Home","Rooms","Photos","About"]),g=function(){var e=r.a.createElement("div",null),A=r.a.createElement("div",null),t=r.a.createElement("ul",null);return console.log(e,A,t),r.a.createElement(e,{onClick:function(a){A.classList.toggle("on"),e.classList.toggle("on"),function(e){t.classList.toggle("hidden"),console.log(e.target),e.preventDefault()}(a)},className:"menu-section",style:{}},r.a.createElement(A,{className:"menu-toggle",style:{}},r.a.createElement("div",{className:"one",style:{}}),r.a.createElement("div",{className:"two",style:{}}),r.a.createElement("div",{className:"three",style:{}})),r.a.createElement("nav",null,r.a.createElement(t,{role:"navigation",className:"hidden",style:{}},E.map(function(e){return r.a.createElement("li",{key:e},r.a.createElement("a",{href:"/"},e))}))))},p=function(e){var A=e.siteTitle;return r.a.createElement("div",{style:{display:"flex",background:"#3cb4e9",marginBottom:"1.45rem"}},r.a.createElement("div",{style:{flex:"auto",maxWidth:"200px",marginBottom:"1.45rem"}},r.a.createElement(u,null)),r.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"1.45rem 1.0875rem",textAlign:"center"}},r.a.createElement("h1",{style:{margin:0}},r.a.createElement(s.a,{to:"/",style:{color:"#fec5aa",textDecoration:"none"}},A))),r.a.createElement(g,null))},b=(t(157),function(e){var A=e.children;return r.a.createElement(s.b,{query:"755544856",render:function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(o.a,{title:e.site.siteMetadata.title,meta:[{name:"description",content:"Sample"},{name:"keywords",content:"sample, something"}]},r.a.createElement("html",{lang:"en"})),r.a.createElement(p,{siteTitle:e.site.siteMetadata.title}),r.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"0px 1.0875rem 1.45rem",paddingTop:0}},A))},data:a})});b.propTypes={children:i.a.node.isRequired};A.a=b},166:function(e){e.exports={data:{dormImages:{childImageSharp:{fluid:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAANABQDASIAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAAAAQFA//EABYBAQEBAAAAAAAAAAAAAAAAAAIAAf/aAAwDAQACEAMQAAABd3htZVBUC//EABoQAAMAAwEAAAAAAAAAAAAAAAECAwAREiH/2gAIAQEAAQUC61NfR1kjsSqxYNn/xAAVEQEBAAAAAAAAAAAAAAAAAAAAEf/aAAgBAwEBPwGo/8QAFhEAAwAAAAAAAAAAAAAAAAAAAAER/9oACAECAQE/AUqU/8QAHBAAAgICAwAAAAAAAAAAAAAAAQIAEAMhMUFx/9oACAEBAAY/AmI4EBrIx37FXqv/xAAbEAEAAwADAQAAAAAAAAAAAAABABEhMUFx8P/aAAgBAQABPyGhfsByelBnzZoOo4oqKOGRan//2gAMAwEAAgADAAAAED8//8QAFxEBAAMAAAAAAAAAAAAAAAAAARAhMf/aAAgBAwEBPxBJTsP/xAAWEQEBAQAAAAAAAAAAAAAAAAABABH/2gAIAQIBAT8QXSWb/8QAGxABAAMAAwEAAAAAAAAAAAAAAQARITFhgVH/2gAIAQEAAT8QWtQCUDWwGeZnyyA69gAyAsowzMFM8GeTLbxTnuf/2Q==",aspectRatio:1.5008460236886634,src:"/static/f4e09fb72276dbfc7734efca04f27385/6986d/dorm01.jpg",srcSet:"/static/f4e09fb72276dbfc7734efca04f27385/9cb00/dorm01.jpg 150w,\n/static/f4e09fb72276dbfc7734efca04f27385/6e974/dorm01.jpg 300w,\n/static/f4e09fb72276dbfc7734efca04f27385/6986d/dorm01.jpg 600w,\n/static/f4e09fb72276dbfc7734efca04f27385/544c0/dorm01.jpg 900w,\n/static/f4e09fb72276dbfc7734efca04f27385/6538b/dorm01.jpg 1200w,\n/static/f4e09fb72276dbfc7734efca04f27385/d90f4/dorm01.jpg 1800w,\n/static/f4e09fb72276dbfc7734efca04f27385/f31af/dorm01.jpg 3548w",sizes:"(max-width: 600px) 100vw, 600px"}}}}}}}]);
//# sourceMappingURL=component---src-pages-index-js-83ea3e0ade5e658ab0ce.js.map