(window.webpackJsonp=window.webpackJsonp||[]).push([[67],{Ji5a:function(t,e,a){"use strict";a.r(e),a.d(e,"query",(function(){return E}));var r=a("dI71"),n=a("q1tI"),o=a.n(n),i=a("Wbzz"),s=a("2dtT"),l=a.n(s),m=a("ImBX"),c=a("iyGq"),p=a("39lY"),d=a("rGLO"),u=a("cp2m"),f=function(t){function e(){return t.apply(this,arguments)||this}return Object(r.a)(e,t),e.prototype.render=function(){var t=this.props.adiacent;return o.a.createElement(i.StaticQuery,{query:"1742359956",render:function(e){return e.media.items.map((function(e,a){if(e.item.title===t.frontmatter.title)return o.a.createElement("div",{className:"media-container",key:a},o.a.createElement("div",{className:"media-inner"},o.a.createElement("video",{className:"media object-cover object-center",preload:"metadata",muted:!0,playsInline:!0,loop:!0,autoPlay:!0},o.a.createElement("source",{type:"video/mp4",src:e.item.file.url?e.item.file.url:null}))))}))}})},e}(o.a.Component),y=new l.a({createElement:o.a.createElement,components:{demo:d.a,demovanilla:u.a}}).Compiler,g=function(t){function e(){return t.apply(this,arguments)||this}return Object(r.a)(e,t),e.prototype.render=function(){var t=this.props.data,e={};return e.title=t.post.frontmatter.title,e.title=e.title.split(/[\s-]+/).map((function(t){return t.charAt(0).toUpperCase()+t.slice(1).toLowerCase()})).join(" "),e.title=t.post.frontmatter.parent&&t.post.frontmatter.parent!==t.post.frontmatter.title?t.post.frontmatter.parent+" "+e.title:e.title,e.title+=" - ",e.title+=t.post.frontmatter.category&&t.post.frontmatter.category!==t.post.frontmatter.title?" "+t.post.frontmatter.category:"",e.title+=t.post.frontmatter.type&&t.post.frontmatter.type!==t.post.frontmatter.title?" "+t.post.frontmatter.type:"",e.description=t.post.frontmatter.description?t.post.frontmatter.description:t.parent.frontmatter.description,o.a.createElement(p.a,{page:t},o.a.createElement(c.a,{title:e.title,description:e.description}),"<div></div>"!==t.post.htmlAst?y(t.post.htmlAst):null,t.post.frontmatter.parent===t.post.frontmatter.title&&t.postsAdiacent.posts.length>1?o.a.createElement("div",{className:"gatsby_listing"},o.a.createElement("div",{className:"row row-3"},o.a.createElement("div",{className:"gatsby_listing-group"},"Core"===t.post.frontmatter.category?o.a.createElement("h2",{className:"h5 h-block rounded-md text-black links-default bg-gray-200 text-center"},"Customization and interactions"):null,o.a.createElement("div",{className:"gatsby_listing-items"},o.a.createElement("div",{className:"row row-stretch"},t.postsAdiacent.posts.map((function(t,e){var a=t.post;return a.frontmatter.parent!==a.frontmatter.title?a.frontmatter.demos?o.a.createElement("div",{className:"gatsby_listing-column",key:e},o.a.createElement("a",{role:"button",className:"card gatsby_listing-item gatsby_listing-item--themes","data-gatsby-listing-toggle":!0},o.a.createElement("div",null,o.a.createElement("div",{className:"h4"},a.frontmatter.title.split(/[\s-]+/).map((function(t){return t.charAt(0).toUpperCase()+t.slice(1).toLowerCase()})).join(" ")),o.a.createElement(f,{adiacent:a}))),a.frontmatter.demos?o.a.createElement(d.a,null,a.frontmatter.demos.map((function(t,e){var a=t.split("/")[0];return"vanilla"===a?o.a.createElement(u.a,{src:t,key:e}):"iframe"===a?o.a.createElement("div",{className:"gatsby_demo_item toggle","data-iframe-fullscreen":t,key:e}):void 0}))):null):o.a.createElement("div",{className:"gatsby_listing-column",key:e},o.a.createElement(i.Link,{to:Object(m.a)(a),className:"card gatsby_listing-item"},o.a.createElement("div",{className:"h4"},a.frontmatter.title.split(/[\s-]+/).map((function(t){return t.charAt(0).toUpperCase()+t.slice(1).toLowerCase()})).join(" ")),o.a.createElement("p",null,a.frontmatter.description?a.frontmatter.description:a.frontmatter.parent+"'s "+a.frontmatter.title.split(/[\s-]+/).map((function(t){return t.charAt(0).toUpperCase()+t.slice(1).toLowerCase()})).join(" ")))):null}))))))):null)},e}(o.a.Component),E="393448711";e.default=g}}]);
//# sourceMappingURL=component---src-gatsby-components-templates-doc-page-js-ae07e619c0bb1c8dd9df.js.map