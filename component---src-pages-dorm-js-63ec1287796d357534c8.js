(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{147:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(35),l=a.n(i),s=a(7),o=a.n(s),c=a(155),d=a.n(c),u=function(e){function t(t){var a;return(a=e.call(this,t)||this).state={currentImageIndex:0,lastIndex:a.props.images.edges.length-1},a.nextSlide=a.nextSlide.bind(l()(a)),a.previousSlide=a.previousSlide.bind(l()(a)),a}o()(t,e),t.getDerivedStateFromProps=function(e,t){return e.images.edges.length-1!==t.lastIndex?{currentImageIndex:0,lastIndex:e.images.edges.length-1}:null};var a=t.prototype;return a.nextSlide=function(){var e=this.state.lastIndex,t=this.state.currentImageIndex,a=t===e?0:t+1;this.setState({currentImageIndex:a})},a.previousSlide=function(){var e=this.state.lastIndex,t=this.state.currentImageIndex,a=0===t?e:t-1;this.setState({currentImageIndex:a})},a.render=function(){return console.log(this.props.images.edges,this.state.currentImageIndex,this.state.lastIndex,this.props),r.a.createElement("div",{style:{position:"relative"}},r.a.createElement(d.a,{fluid:this.props.images.edges[this.state.currentImageIndex].node.childImageSharp.fluid}),r.a.createElement(m,{handleClick:this.previousSlide,glyph:"◀"}),r.a.createElement(g,{handleClick:this.nextSlide,glyph:"▶"}))},t}(r.a.Component),m=function(e){var t=e.handleClick,a=e.glyph;return r.a.createElement("div",{style:{color:"#14B6D4",cursor:"pointer",fontSize:"2rem",position:"absolute",top:"50%",left:"1rem",minHeight:"40px"},onClick:t},a)},g=function(e){var t=e.handleClick,a=e.glyph;return r.a.createElement("div",{style:{color:"#14B6D4",cursor:"pointer",fontSize:"2rem",position:"absolute",top:"50%",right:"1rem",minHeight:"40px"},onClick:t},a)},p=u,h=a(154);a.d(t,"dormQuery",function(){return f});t.default=function(e){var t=Object(n.useState)(e.data.dormImages),a=t[0],i=t[1];return r.a.createElement(h.a,null,r.a.createElement("ul",{onClick:function(t){switch(t.target.innerText){case"Dorm":console.log(t.target.innerText,a),i(e.data.dormImages);break;case"King":i(e.data.kingImages),console.log(t.target.innerText);break;case"Garden":i(e.data.gardenImages),console.log(t.target.innerText);break;case"Shared":i(e.data.sharedImages),console.log(t.target.innerText);break;case"Patio":i(e.data.patioImages),console.log(t.target.innerText);break;default:console.log("Does not work, try again.")}}},r.a.createElement("li",null,"Dorm"),r.a.createElement("li",null,"King"),r.a.createElement("li",null,"Garden"),r.a.createElement("li",null,"Shared"),r.a.createElement("li",null,"Patio")),r.a.createElement("p",null,"Room Images"),r.a.createElement(p,{images:a}))};var f="2026377443"},149:function(e,t,a){"use strict";a.d(t,"b",function(){return d});var n=a(0),r=a.n(n),i=a(4),l=a.n(i),s=a(33),o=a.n(s);a.d(t,"a",function(){return o.a});a(150);var c=r.a.createContext({}),d=function(e){return r.a.createElement(c.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};d.propTypes={data:l.a.object,query:l.a.string.isRequired,render:l.a.func,children:l.a.func}},150:function(e,t,a){var n;e.exports=(n=a(152))&&n.default||n},151:function(e){e.exports={data:{site:{siteMetadata:{title:"Waterborn"}}}}},152:function(e,t,a){"use strict";a.r(t);a(34);var n=a(0),r=a.n(n),i=a(4),l=a.n(i),s=a(55),o=a(2),c=function(e){var t=e.location,a=o.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(s.a,Object.assign({location:t,pageResources:a},a.json))};c.propTypes={location:l.a.shape({pathname:l.a.string.isRequired}).isRequired},t.default=c},153:function(e){e.exports={data:{headerImage:{childImageSharp:{fluid:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAFCAYAAABFA8wzAAAACXBIWXMAAAsSAAALEgHS3X78AAABY0lEQVQY0y3QzyuDARzH8eff0CzNbxd/iHKRlFLSSMSBnCguHPyILEeRnxsO+/U0z7Mx2/wmI2a2XZbN9mwaRrbE4e3ZOLz61PfT9/IRauxxCiptf6pUdeJf6qyx4q3Q66xxaq1RDFubONbmGbE40YrPVIsJqv7Vik8ITb4UDQcKA1cZxgNvTN2/MamaCWYxhN7pu8zQe/HMXCSHIxAmu7fE8IKR8MooC9I+nXKAQdmPXrqjXQogTKuPnnSe8Mc3UjKPOZ7D9PiJS8kjq84yX1jin5y8/PCqROEjwey2m0XDNJLLhtsjE/KasbhdTLjOEBo9KXouMrQdKbR4E7QdJtCfKDR7k/Sdp+k+TdGlavUl6ThWsJxf4jMvM7ZjpUmO0C/f0CoFGXJe0bz7gFBti6GzPVFqvEez6qfMFESzdl2k3bhFs35LyYq/2Gm3QuqmMertUSocaWrU3SrEJOWqQhb2/AV8nCr3N8GSjgAAAABJRU5ErkJggg==",aspectRatio:3.9612403100775193,src:"/static/d8529584912ce182e3ed2bf1f54e4941/3548c/Waterborn-s.png",srcSet:"/static/d8529584912ce182e3ed2bf1f54e4941/8d345/Waterborn-s.png 128w,\n/static/d8529584912ce182e3ed2bf1f54e4941/2ea09/Waterborn-s.png 256w,\n/static/d8529584912ce182e3ed2bf1f54e4941/3548c/Waterborn-s.png 511w",sizes:"(max-width: 511px) 100vw, 511px"}}}}}},154:function(e,t,a){"use strict";var n=a(151),r=a(0),i=a.n(r),l=a(4),s=a.n(l),o=a(156),c=a.n(o),d=a(149),u=a(153),m=a(155),g=a.n(m),p=function(){return i.a.createElement(d.b,{query:"3103013552",render:function(e){return i.a.createElement(g.a,{fluid:e.headerImage.childImageSharp.fluid})},data:u})},h=(a(157),["Home","Rooms","Photos","About"]),f=function(){var e=Object(r.useState)(!1),t=e[0],a=e[1],n=Object(r.useState)(""),l=n[0],s=n[1],o=Object(r.useState)("hidden"),c=o[0],d=o[1];return console.log(MenuSection,MenuToggle,NavUl),i.a.createElement("div",{onClick:function(e){a(!t),t?(s("on"),d("")):(s(""),d("hidden")),navHide(e)},className:l+" menu-section",style:{}},i.a.createElement("div",{className:l+" menu-toggle",style:{}},i.a.createElement("div",{className:"one",style:{}}),i.a.createElement("div",{className:"two",style:{}}),i.a.createElement("div",{className:"three",style:{}})),i.a.createElement("nav",null,i.a.createElement("ul",{role:"navigation",className:c,style:{}},h.map(function(e){return i.a.createElement("li",{key:e},i.a.createElement("a",{href:"/"},e))}))))},E=function(e){var t=e.siteTitle;return i.a.createElement("div",{style:{display:"flex",background:"#3cb4e9",marginBottom:"1.45rem"}},i.a.createElement("div",{style:{flex:"auto",maxWidth:"200px",marginBottom:"1.45rem"}},i.a.createElement(p,null)),i.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"1.45rem 1.0875rem",textAlign:"center"}},i.a.createElement("h1",{style:{margin:0}},i.a.createElement(d.a,{to:"/",style:{color:"#fec5aa",textDecoration:"none"}},t))),i.a.createElement(f,null))},x=(a(158),function(e){var t=e.children;return i.a.createElement(d.b,{query:"755544856",render:function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement(c.a,{title:e.site.siteMetadata.title,meta:[{name:"description",content:"Sample"},{name:"keywords",content:"sample, something"}]},i.a.createElement("html",{lang:"en"})),i.a.createElement(E,{siteTitle:e.site.siteMetadata.title}),i.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"0px 1.0875rem 1.45rem",paddingTop:0}},t))},data:n})});x.propTypes={children:s.a.node.isRequired};t.a=x}}]);
//# sourceMappingURL=component---src-pages-dorm-js-63ec1287796d357534c8.js.map