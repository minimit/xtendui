(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{172:function(e,t,a){"use strict";a.r(t);var r=a(8),n=a.n(r),i=a(0),s=a.n(i),o=a(184),l=a(449),c=function(e){function t(){return e.apply(this,arguments)||this}return n()(t,e),t.prototype.render=function(){var e={title:"404",description:"Page not found"};return s.a.createElement(l.a,{seo:e},s.a.createElement(o.a,{title:e.title+" — "+e.description}),s.a.createElement("h1",null,"Error 404"),s.a.createElement("p",null,"Page not found."))},t}(s.a.Component);t.default=c},206:function(e,t,a){"use strict";a.d(t,"a",function(){return c}),a.d(t,"b",function(){return d});a(192),a(181),a(182),a(77),a(57),a(36),a(81),a(76),a(37),a(80),a(191);var r=a(484),n=a.n(r),i=a(485),s=a.n(i),o=a(178);a(486),a(487),a(488),a(489),a(490),n.a.manual=!0;var l=function(e){var t=e.querySelectorAll(".demo_source--from");(t=Array.from(t).filter(function(e){return!e.querySelectorAll(".demo_source--from").length})).length&&(e=t[0]);var a=e.innerHTML;"less"===e.getAttribute("data-lang")||e.classList.contains("language-less")||(a=(a=(a=a.replace(/&quot;/g,'"')).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")).replace(/=""/g,""));var r=a.split("\n"),n=r[0];if(n=n.length?n:r[1]){var i=n.search(/\S/g),s=r.keys(),o=Array.isArray(s),l=0;for(s=o?s:s[Symbol.iterator]();;){var c;if(o){if(l>=s.length)break;c=s[l++]}else{if((l=s.next()).done)break;c=l.value}var d=c;r[d]=r[d].substring(i)}a=r.join("\n")}return a=a.replace(/^\s+|\s+$/g,"")},c=function(){var e=document.querySelectorAll('script[type="text/plain"][class*="language-"]'),t=Array.isArray(e),a=0;for(e=t?e:e[Symbol.iterator]();;){var r;if(t){if(a>=e.length)break;r=e[a++]}else{if((a=e.next()).done)break;r=a.value}var i=r,s=i.getAttribute("class");i.after(o.a.createElement('<pre class="'+s+'"><code class="'+s+'">'+i.innerHTML+"</code></pre>")),i.remove()}var c=document.querySelectorAll("pre:not(.noedit) code"),d=Array.isArray(c),m=0;for(c=d?c:c[Symbol.iterator]();;){var u;if(d){if(m>=c.length)break;u=c[m++]}else{if((m=c.next()).done)break;u=m.value}var p=u;p.innerHTML=l(p),n.a.highlightElement(p)}},d=function(e,t){var a=e.querySelectorAll(".demo_item");e.prepend(o.a.createElement('<div class="demo_tabs"><div class="demo_tabs_left"></div><div class="demo_tabs_right"></div></div>')),e.querySelector(".demo_tabs_right").append(o.a.createElement('<button type="button" class="btn btn--text btn--tiny btn--narrow btn--show-code" data-toggle="tooltip" data-placement="top" aria-label="Show code"><span class="icon-code icon--big"></span></button>')),e.querySelector(".demo_tabs_right").append(o.a.createElement('<button type="button" class="btn btn--text btn--tiny btn--narrow btn--open-full" data-toggle="tooltip" data-placement="top" aria-label="Open full"><span class="icon-maximize icon--big"></span></button>'));var r=function(){if(i){if(l>=n.length)return"break";c=n[l++]}else{if((l=n.next()).done)return"break";c=l.value}var r=c,d=r[0],b=r[1],f=b.getAttribute("data-iframe")?b.getAttribute("data-iframe").split("/").pop().split("-").pop():null;(f=b.getAttribute("data-name")?b.getAttribute("data-name"):f)||(f=1===a.length?"demo":"demo #"+d);e.querySelector(".demo_tabs_left").append(o.a.createElement('<button type="button" class="btn btn--text btn--tiny">'+f+"</button>"));e.querySelectorAll(".demo_tabs_left .btn")[d],b.prepend(o.a.createElement('<div class="demo_code collapse--height"><div class="demo_code_inner"><div class="demo_code_tabs"><div class="demo_code_tabs_left"></div><div class="demo_code_tabs_right"><button type="button" class="btn btn--text btn--tiny btn--clipboard" data-toggle="tooltip" data-placement="top" title="Copy to clipboard">copy</button></div></div><div class="demo_code_body"></div></div></div>'));var g=new s.a(".btn--clipboard",{target:function(e){return e.closest(".demo").querySelector(".demo_item.active .demo_code_body_item.active .hljs")}});if(g.on("success",function(e){e.clearSelection()}),g.on("error",function(e){}),b.getAttribute("data-iframe")){var v="/"+b.getAttribute("data-iframe"),_="iframe"+t+d;v&&(b.append(o.a.createElement('<div class="demo_item_wrapper"><iframe data-src="'+v+'" name="'+_+'"></iframe></div>')),b.querySelector(".demo_item_wrapper").append(o.a.createElement('\n    <div class="loader loader--spinner">\n      <div class="spinner">\n        <svg viewBox="0 0 250 250"><circle cx="120" cy="120" r="100" stroke-dasharray="628" stroke-dashoffset="628" pathLength="628"></circle></svg><svg viewBox="0 0 250 250" preserveAspectRatio="xMinYMin meet"><circle cx="120" cy="120" r="100" stroke-dasharray="628" stroke-dashoffset="628" pathLength="628"></circle></svg>\n      </div>\n    </div>\n  </div>')));var h=b.querySelector("iframe");b.addEventListener("on.xt",function(e){b===e.target&&(b.classList.contains("loaded")||u(h))}),b.addEventListener("off.xt",function(e){b===e.target&&b.classList.contains("loaded")&&(b.classList.remove("loaded"),p(h))})}else b.getAttribute("data-shadow")||(m(b),b.classList.add("populated"))},n=a.entries(),i=Array.isArray(n),l=0;for(n=i?n:n[Symbol.iterator]();;){var c;if("break"===r())break}var d="demo_"+t;e.setAttribute("id",d),new o.a.Toggle(e.querySelector(".btn--show-code"),{targets:"#"+d,targetsInner:".demo_code",aria:!1});var b=function(){if(g){if(v>=f.length)return"break";_=f[v++]}else{if((v=f.next()).done)return"break";_=v.value}var e=_;e.addEventListener("on.xt",function(t){if(e===t.target){var a=document.querySelectorAll(".btn--show-code.active"),r=Array.isArray(a),n=0;for(a=r?a:a[Symbol.iterator]();;){var i;if(r){if(n>=a.length)break;i=a[n++]}else{if((n=a.next()).done)break;i=n.value}i!==e&&i.dispatchEvent(new CustomEvent("off.xt"))}}})},f=e.querySelectorAll(".btn--show-code"),g=Array.isArray(f),v=0;for(f=g?f:f[Symbol.iterator]();;){var _;if("break"===b())break}new o.a.Toggle(e,{elements:".demo_tabs_left .btn",targets:".demo_item",min:1});var h=function(){if(E){if(M>=y.length)return"break";N=y[M++]}else{if((M=y.next()).done)return"break";N=M.value}var t=N;t.addEventListener("off.xt",function(a){t===a.target&&e.querySelector(".btn--show-code").dispatchEvent(new CustomEvent("off.xt"))})},y=e.querySelectorAll(".demo_tabs_left .btn"),E=Array.isArray(y),M=0;for(y=E?y:y[Symbol.iterator]();;){var N;if("break"===h())break}},m=function(e){var t=e.querySelectorAll(".demo_source[data-lang]").entries(),a=Array.isArray(t),r=0;for(t=a?t:t[Symbol.iterator]();;){var n;if(a){if(r>=t.length)break;n=t[r++]}else{if((r=t.next()).done)break;n=r.value}var i=n,s=i[0],l=i[1];f(e,l,s),e.classList.contains("demo_preview")||(l.style.display="none")}new o.a.Toggle(e,{elements:".demo_code_tabs_left .btn",targets:".demo_code_body_item",min:1})},u=function(e){e.setAttribute("src",e.getAttribute("data-src"))},p=function(e){e.setAttribute("src","")};"undefined"!=typeof window&&(window.initIframe=function(e,t,a,r){var n='iframe[name="'+e+'"]',i=document.querySelector(n);i.contentWindow.document.querySelector("html").classList.add("iframe-inside");var s=i.closest(".demo_item");s.classList.add("loaded"),s.classList.contains("populated")||(b(s,i,t,a,r),s.classList.add("populated"))},window.resizeIframe=function(e){var t='iframe[name="'+e+'"]',a=document.querySelector(t),r=a.closest(".demo").querySelectorAll(".demo_item_wrapper");if(a)if(a.contentWindow.document.documentElement.classList.contains("iframe-full")){a.classList.add("iframe-full");var n=a.contentWindow.document.querySelector("#body-outer").offsetHeight;n!==parseFloat(a.dataset.iframeHeight)&&(a.style.height=n+"px",a.dataset.iframeHeight=n.toString());var i=r,s=Array.isArray(i),o=0;for(i=s?i:i[Symbol.iterator]();;){var l;if(s){if(o>=i.length)break;l=i[o++]}else{if((o=i.next()).done)break;l=o.value}l.style.height=n+"px"}}else{var c=r,d=Array.isArray(c),m=0;for(c=d?c:c[Symbol.iterator]();;){var u;if(d){if(m>=c.length)break;u=c[m++]}else{if((m=c.next()).done)break;u=m.value}u.style.height=""}}});var b=function(e,t,a,r,n){a&&e.append(o.a.createElement('<div class="demo_source xt-ignore" data-lang="html">'+a+"</div>")),r&&e.append(o.a.createElement('<div class="demo_source xt-ignore" data-lang="js">'+r+"</div>")),n&&e.append(o.a.createElement('<div class="demo_source xt-ignore" data-lang="less">'+n+"</div>"));var i=e.querySelectorAll(".demo_source[data-lang]").entries(),s=Array.isArray(i),l=0;for(i=s?i:i[Symbol.iterator]();;){var c;if(s){if(l>=i.length)break;c=i[l++]}else{if((l=i.next()).done)break;c=l.value}var d=c,m=d[0],u=d[1];f(e,u,m),u.remove()}new o.a.Toggle(e,{elements:".demo_code_tabs_left .btn",targets:".demo_code_body_item",min:1})},f=function(e,t,a){var r=t.getAttribute("data-lang");"language-markup"===r?r="html":"language-jsx"===r?r="js":"language-less"===r&&(r="less"),e.querySelector(".demo_code_body").append(o.a.createElement('<div class="demo_code_body_item"><pre class="noedit"><code></code></pre></div>')),e.querySelector(".demo_code_tabs_left").append(o.a.createElement('<button type="button" class="btn btn--text btn--tiny">'+r+"</button>"));var i=e.querySelectorAll(".demo_code_body .demo_code_body_item")[a].querySelector("pre code");"html"===r?r="language-markup":"js"===r?r="language-jsx":"less"===r&&(r="language-less"),i.innerHTML=l(t),i.classList.add(r),n.a.highlightElement(i)}},208:function(e){e.exports={data:{site:{siteMetadata:{title:"Xtend",author:"Riccardo Caroli",version:"0.10.0",npm:"https://www.npmjs.com/package/xtend-library",github:"https://github.com/minimit/xtend-library",download:"https://github.com/minimit/xtend-library/releases"}}}}},209:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMV9jb3B5IiBkYXRhLW5hbWU9IkxheWVyIDEgY29weSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgMjIuMDEgMTUuMzUiPjxkZWZzPjxzdHlsZT4uY2xzLTF7ZmlsbDojZmZmO30uY2xzLTJ7b3BhY2l0eTowLjY7fTwvc3R5bGU+PC9kZWZzPjx0aXRsZT5sb2dvLWljb24td2hpdGU8L3RpdGxlPjxwb2x5bGluZSBjbGFzcz0iY2xzLTEiIHBvaW50cz0iMTUuNiAwIDIyLjAxIDAgMjIuMDEgMi44NiAxNy40MSAyLjg2IDE3LjQxIDE1LjM1IDE1LjYgMTUuMzUiLz48cG9seWxpbmUgY2xhc3M9ImNscy0xIiBwb2ludHM9IjYuODQgMTAuMTUgNC4yNiAxNS4zNSAwIDE1LjM1IDQuNCA3LjYxIDAuMTIgMCA0LjMzIDAgNi44NCA1LjEiLz48ZyBjbGFzcz0iY2xzLTIiPjxwb2x5Z29uIGNsYXNzPSJjbHMtMSIgcG9pbnRzPSIxMy41OCAwIDExLjk3IDIuODYgMTMuNzEgMi44NiAxMy43MSAxNS4zNSAxNS42IDE1LjM1IDE1LjYgMCAxMy41OCAwIi8+PHBvbHlnb24gY2xhc3M9ImNscy0xIiBwb2ludHM9IjkuMzUgMCA5LjE4IDAuMzQgNi44NCA1LjEgNi44NCAxMC4xNSA5LjQzIDE1LjM1IDEzLjcgMTUuMzUgOS4yOSA3LjYxIDExLjk3IDIuODYgMTMuNTggMCA5LjM1IDAiLz48L2c+PC9zdmc+"},210:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMV9jb3B5IiBkYXRhLW5hbWU9IkxheWVyIDEgY29weSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgMjIuMDEgMTUuMzUiPjxkZWZzPjxzdHlsZT4uY2xzLTF7ZmlsbDojMzczYTQ0O30uY2xzLTJ7ZmlsbDojOTY5YmFkO308L3N0eWxlPjwvZGVmcz48dGl0bGU+aWNvbi1ibGFjazwvdGl0bGU+PHBvbHlsaW5lIGNsYXNzPSJjbHMtMSIgcG9pbnRzPSIxNS42IDAgMjIuMDEgMCAyMi4wMSAyLjg2IDE3LjQxIDIuODYgMTcuNDEgMTUuMzUgMTUuNiAxNS4zNSIvPjxwb2x5bGluZSBjbGFzcz0iY2xzLTEiIHBvaW50cz0iNi44NCAxMC4xNSA0LjI2IDE1LjM1IDAgMTUuMzUgNC40IDcuNjEgMC4xMiAwIDQuMzMgMCA2Ljg0IDUuMSIvPjxwb2x5Z29uIGNsYXNzPSJjbHMtMiIgcG9pbnRzPSIxMy41OCAwIDExLjk3IDIuODYgMTMuNzEgMi44NiAxMy43MSAxNS4zNSAxNS42IDE1LjM1IDE1LjYgMCAxMy41OCAwIi8+PHBvbHlnb24gY2xhc3M9ImNscy0yIiBwb2ludHM9IjkuMzUgMCA5LjE4IDAuMzQgNi44NCA1LjEgNi44NCAxMC4xNSA5LjQzIDE1LjM1IDEzLjcgMTUuMzUgOS4yOSA3LjYxIDExLjk3IDIuODYgMTMuNTggMCA5LjM1IDAiLz48L3N2Zz4="},449:function(e,t,a){"use strict";var r=a(8),n=a.n(r),i=a(208),s=a(0),o=a.n(s),l=a(1),c=a.n(l),d=a(56),m=a(198),u=a.n(m),p=function(e){var t=u()(e.frontmatter.type),a=u()(e.frontmatter.parent),r=u()(e.frontmatter.title),n="/"+t;return e.frontmatter.parent&&(n+="/"+a),r!==t&&r!==a&&(n+="/"+r),n},b=a(209),f=a.n(b),g=function(e){function t(){return e.apply(this,arguments)||this}return n()(t,e),t.prototype.render=function(){var e=this.props,t=e.site,a=e.seo,r=e.page;return o.a.createElement("header",{className:"site_header"},o.a.createElement("nav",{className:"site_header_top_outer","data-xt-sticky":"{ sticky: 'fixed' }"},o.a.createElement("div",{className:"site_header_top"},o.a.createElement("div",{className:"row row-space--none site_header_top_row"},o.a.createElement("div",{className:"site_header_top_left"},o.a.createElement("div",{className:"container full"},o.a.createElement(d.Link,{to:"/",title:"Home",className:"logo-icon\n                                    "+("home"===a.title.toLowerCase()?"active":"")},o.a.createElement("img",{src:f.a,alt:t.site.siteMetadata.title})))),o.a.createElement("div",{className:"site_header_top_center"},o.a.createElement("div",{className:"list site_header_top_links_outer"},o.a.createElement("div",null,o.a.createElement("div",{className:"site_header_top_links"},o.a.createElement(d.Link,{to:"/core",className:"btn btn--site_header_top_link "+(r&&r.post?"/core"===p(r.post)?"active":"Core"===r.post.frontmatter.type?"current":"":"")},"Core"),o.a.createElement(d.Link,{to:"/extension",className:"btn btn--site_header_top_link "+(r&&r.post?"/extension"===p(r.post)?"active":"Extension"===r.post.frontmatter.type?"current":"":"")},"Extension"),o.a.createElement(d.Link,{to:"/theme",className:"btn btn--site_header_top_link "+(r&&r.post?"/theme"===p(r.post)?"active":"Theme"===r.post.frontmatter.type?"current":"":"")},"Theme"),o.a.createElement(d.Link,{to:"/faq",className:"btn btn--site_header_top_link "+(r&&r.post?"/faq"===p(r.post)?"active":"Faq"===r.post.frontmatter.type?"current":"":"")},"Faq"))),o.a.createElement("div",null,o.a.createElement("div",{className:"site_header_top_search"},o.a.createElement("input",{className:"form-item",placeholder:"Search"}))))),o.a.createElement("div",{className:"site_header_top_right"},o.a.createElement("div",{className:"container full"},o.a.createElement("div",{className:"site_header_top_social"},o.a.createElement("a",{href:t.site.siteMetadata.github,target:"_blank",rel:"noopener",className:"btn btn--site_header_top_social",title:"Github"},o.a.createElement("span",{className:"icon-github icon--big"})),o.a.createElement("a",{href:t.site.siteMetadata.npm,target:"_blank",rel:"noopener",className:"btn btn--site_header_top_social",title:"Npm"},o.a.createElement("span",{className:"icon-npm icon--big"})))))))))},t}(o.a.Component);g.propTypes={site:c.a.shape({site:c.a.shape({siteMetadata:c.a.shape({title:c.a.string.isRequired,download:c.a.string.isRequired,github:c.a.string.isRequired}).isRequired}).isRequired}).isRequired};var v=g,_=a(210),h=a.n(_),y=function(e){function t(){return e.apply(this,arguments)||this}return n()(t,e),t.prototype.render=function(){var e=this.props,t=e.site,a=e.seo;return o.a.createElement("footer",{className:"site_footer"},o.a.createElement("div",{className:"site_footer_bottom"},o.a.createElement("div",{className:"container full"},o.a.createElement("div",{className:"row site_footer_bottom_row"},o.a.createElement("div",null,o.a.createElement(d.Link,{to:"/",title:"Home",className:"logo-icon\n                                    "+("home"===a.title.toLowerCase()?"active":"")},o.a.createElement("img",{src:h.a,alt:t.site.siteMetadata.title}))),o.a.createElement("div",null,"Site and docs licensed ",o.a.createElement("a",{href:"https://github.com/minimit/xtend-library/blob/master/LICENSE-DOCS",target:"_blank",rel:"noopener"},"CC BY 3.0")," ",o.a.createElement("span",{className:"separator separator--dash"})," ",t.site.siteMetadata.title," v",t.site.siteMetadata.version," licensed ",o.a.createElement("a",{href:"https://github.com/minimit/minimit/blob/master/LICENSE",target:"_blank",rel:"noopener"},"MIT"),o.a.createElement("br",null)),o.a.createElement("div",{className:"site_footer_bottom_right"},"© 2017 – ",(new Date).getFullYear()," ",t.site.siteMetadata.author)))))},t}(o.a.Component);y.propTypes={site:c.a.shape({site:c.a.shape({siteMetadata:c.a.shape({title:c.a.string.isRequired,version:c.a.string.isRequired,author:c.a.string.isRequired}).isRequired}).isRequired}).isRequired};var E=y,M=(a(78),a(79),a(76),function(e){function t(){return e.apply(this,arguments)||this}return n()(t,e),t.prototype.render=function(){var e=this.props.page;return o.a.createElement("nav",{className:"site_article_sidebar"},o.a.createElement("div",{className:"container full"},o.a.createElement("div",{className:"site_article_sidebar_inner"},e.categories.category.map(function(t,a){return o.a.createElement("div",{key:a},o.a.createElement("div",{className:"site_article_sidebar_cat"},o.a.createElement("div",{className:"btn btn--site_article_sidebar btn--site_article_sidebar--cat "+(e.post.frontmatter.categories?e.post.frontmatter.categories.includes(t.title)?"current":"":e.post.frontmatter.title===t.title.split("-").pop()?"active":"")},t.title.split("-").pop()),o.a.createElement("div",{className:"site_article_sidebar_sub active "+(e.post.frontmatter.categories?e.post.frontmatter.categories.includes(t.title)?"active":"":e.post.frontmatter.title===t.title.split("-").pop()?"active":"")},o.a.createElement("div",{className:"site_article_sidebar_item"},o.a.createElement("div",{className:"site_article_sidebar_line"}),t.posts.map(function(t,a){var r=t.post;return r.frontmatter.parent===r.frontmatter.title?o.a.createElement("div",{key:a},o.a.createElement(d.Link,{to:p(r),className:"btn btn--site_article_sidebar btn--site_article_sidebar--sub "+(p(e.post)===p(r)?"active":e.post.frontmatter.parent===r.frontmatter.parent?"current":"")},r.frontmatter.title),r.frontmatter.parent===e.post.frontmatter.parent?o.a.createElement("div",{className:"site_article_sidebar_adiacent active"},o.a.createElement("div",{className:"site_article_sidebar_item"},o.a.createElement("div",{className:"site_article_sidebar_line"}),e.postsAdiacent.posts.map(function(t,a){var n=t.post;return o.a.createElement("div",{key:a},n.frontmatter.title!==r.frontmatter.parent?o.a.createElement(d.Link,{to:p(n),className:"btn btn--site_article_sidebar btn--site_article_sidebar--adiacent "+(e.post.frontmatter.title===n.frontmatter.title?"active":"")},n.frontmatter.title):null)}))):null):null})))))}))))},t}(o.a.Component)),N=function(e){function t(){return e.apply(this,arguments)||this}return n()(t,e),t.prototype.render=function(){return o.a.createElement("div",null)},t}(o.a.Component),x=function(e){function t(){return e.apply(this,arguments)||this}return n()(t,e),t.prototype.render=function(){return o.a.createElement("div",null)},t}(o.a.Component),A=(a(199),a(200),a(178),a(203),a(204),a(205),a(206)),I=a(207),L=(a(213),function(e){function t(){return e.apply(this,arguments)||this}n()(t,e);var a=t.prototype;return a.componentDidMount=function(){Object(A.a)(),Object(I.a)()},a.render=function(){var e=this.props,t=e.seo,a=e.page,r=e.children;return o.a.createElement(d.StaticQuery,{query:"3289045993",render:function(e){return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"site_wrapper\n              "+(a?" site_wrapper--with-sidebar site_wrapper--with-aside":"")},o.a.createElement(v,{site:e,seo:t,page:a}),o.a.createElement("main",{className:"site_main"},o.a.createElement("div",{className:"site_main_inner"},a?o.a.createElement("div",{className:"site--with-sidebar site--with-aside"},o.a.createElement(M,{page:a}),o.a.createElement("article",{className:"site_article"},o.a.createElement("div",{className:"site_article_hero"},o.a.createElement("div",{className:"container full"},o.a.createElement("h1",null,t.title),o.a.createElement("p",null,t.description))),o.a.createElement("div",{className:"site_article_content"},o.a.createElement("div",{className:"container full"},r)),o.a.createElement("div",{className:"site_article_foot"},o.a.createElement("div",{className:"container full"},o.a.createElement(x,{page:a})))),o.a.createElement(N,{page:a})):o.a.createElement("article",{className:"site_article"},o.a.createElement("div",{className:"site_article_content"},o.a.createElement("div",{className:"container full"},r))))),o.a.createElement(E,{site:e,seo:t})))},data:i})},t}(o.a.Component));L.propTypes={children:c.a.node.isRequired};t.a=L}}]);
//# sourceMappingURL=component---src-gatsby-components-pages-404-js-31864235149c773eef35.js.map