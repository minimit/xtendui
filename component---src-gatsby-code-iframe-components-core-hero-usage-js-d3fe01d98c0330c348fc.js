(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{"33yf":function(e,n,t){(function(e){function t(e,n){for(var t=0,r=e.length-1;r>=0;r--){var i=e[r];"."===i?e.splice(r,1):".."===i?(e.splice(r,1),t++):t&&(e.splice(r,1),t--)}if(n)for(;t--;t)e.unshift("..");return e}function r(e,n){if(e.filter)return e.filter(n);for(var t=[],r=0;r<e.length;r++)n(e[r],r,e)&&t.push(e[r]);return t}n.resolve=function(){for(var n="",i=!1,o=arguments.length-1;o>=-1&&!i;o--){var s=o>=0?arguments[o]:e.cwd();if("string"!=typeof s)throw new TypeError("Arguments to path.resolve must be strings");s&&(n=s+"/"+n,i="/"===s.charAt(0))}return(i?"/":"")+(n=t(r(n.split("/"),(function(e){return!!e})),!i).join("/"))||"."},n.normalize=function(e){var o=n.isAbsolute(e),s="/"===i(e,-1);return(e=t(r(e.split("/"),(function(e){return!!e})),!o).join("/"))||o||(e="."),e&&s&&(e+="/"),(o?"/":"")+e},n.isAbsolute=function(e){return"/"===e.charAt(0)},n.join=function(){var e=Array.prototype.slice.call(arguments,0);return n.normalize(r(e,(function(e,n){if("string"!=typeof e)throw new TypeError("Arguments to path.join must be strings");return e})).join("/"))},n.relative=function(e,t){function r(e){for(var n=0;n<e.length&&""===e[n];n++);for(var t=e.length-1;t>=0&&""===e[t];t--);return n>t?[]:e.slice(n,t-n+1)}e=n.resolve(e).substr(1),t=n.resolve(t).substr(1);for(var i=r(e.split("/")),o=r(t.split("/")),s=Math.min(i.length,o.length),a=s,c=0;c<s;c++)if(i[c]!==o[c]){a=c;break}var l=[];for(c=a;c<i.length;c++)l.push("..");return(l=l.concat(o.slice(a))).join("/")},n.sep="/",n.delimiter=":",n.dirname=function(e){if("string"!=typeof e&&(e+=""),0===e.length)return".";for(var n=e.charCodeAt(0),t=47===n,r=-1,i=!0,o=e.length-1;o>=1;--o)if(47===(n=e.charCodeAt(o))){if(!i){r=o;break}}else i=!1;return-1===r?t?"/":".":t&&1===r?"/":e.slice(0,r)},n.basename=function(e,n){var t=function(e){"string"!=typeof e&&(e+="");var n,t=0,r=-1,i=!0;for(n=e.length-1;n>=0;--n)if(47===e.charCodeAt(n)){if(!i){t=n+1;break}}else-1===r&&(i=!1,r=n+1);return-1===r?"":e.slice(t,r)}(e);return n&&t.substr(-1*n.length)===n&&(t=t.substr(0,t.length-n.length)),t},n.extname=function(e){"string"!=typeof e&&(e+="");for(var n=-1,t=0,r=-1,i=!0,o=0,s=e.length-1;s>=0;--s){var a=e.charCodeAt(s);if(47!==a)-1===r&&(i=!1,r=s+1),46===a?-1===n?n=s:1!==o&&(o=1):-1!==n&&(o=-1);else if(!i){t=s+1;break}}return-1===n||-1===r||0===o||1===o&&n===r-1&&n===t+1?"":e.slice(n,r)};var i="b"==="ab".substr(-1)?function(e,n,t){return e.substr(n,t)}:function(e,n,t){return n<0&&(n=e.length+n),e.substr(n,t)}}).call(this,t("8oxB"))},IRUh:function(e,n,t){"use strict";t.d(n,"a",(function(){return l}));var r=t("dI71"),i=t("q1tI"),o=t.n(i),s=t("iyGq"),a=t("KQm4"),c=(t("yLb1"),function(e){function n(){return e.apply(this,arguments)||this}return Object(r.a)(n,e),n.prototype.render=function(){var e=this.props,n=e.demo,r=e.children;if("undefined"!=typeof window){var i;t("vkEH");var s=t("Zz1u").Xt,c="gatsby_iframe-inside";n.container&&(c+=" gatsby_iframe-container"),(i=document.documentElement.classList).add.apply(i,Object(a.a)(c.split(" "))),document.documentElement.setAttribute("id","iframe--"+n.name);s.ready((function(){window.self!==window.top&&window.parent.initIframe(window.name,n.htmlSource,n.jsxSource,n.cssSource,n.jsSource)}))}return o.a.createElement(o.a.Fragment,null,r)},n}(o.a.Component)),l=function(e){function n(){return e.apply(this,arguments)||this}return Object(r.a)(n,e),n.prototype.render=function(){var e=this.props.demo,n={title:"Demo",description:"Demo"};return e.path=("/demos/"+e.dirs.join("/")+"/"+e.name).replace("/iframe","").replace("src/gatsby/code/",""),e.cssSource=e.path+".css",e.jsSource=e.path+".js",o.a.createElement(c,{demo:e},o.a.createElement(s.a,{title:n.title,description:n.description}),o.a.createElement("div",{id:"body-outer"},o.a.createElement("div",{id:"gatsby_body-inner",className:"gatsby_demo_source--from",dangerouslySetInnerHTML:{__html:e.htmlSource}})))},n}(o.a.Component)},TfpW:function(e,n,t){"use strict";t.r(n),function(e){t.d(n,"demo",(function(){return f}));var r=t("dI71"),i=t("q1tI"),o=t.n(i),s=t("33yf"),a=t.n(s),c=t("IRUh"),l=t("sf5o").default,u=e.replace(/\\/g,"/"),d=a.a.dirname(u).split("/"),f={container:!1,name:a.a.basename(u,".js"),dirs:d};f.htmlSource='\n<div class="relative block overflow-hidden w-full">\n  <div class="media-container h-64 md:h-screen">\n    <div class="media-inner">\n      <img class="media object-cover object-center" src="/img.svg" loading="lazy" alt="">\n    </div>\n  </div>\n  <div class="container md:absolute inset-0 flex items-end justify-center text-center">\n    <a href="#" class="group block w-full max-w-xl container-y md:text-white md:links-inverse">\n      <div class="h1 h1-display">\n        Lorem ipsum\n      </div>\n    </a>\n  </div>\n</div>\n\n<div class="relative block overflow-hidden w-full">\n  <div class="media-container h-64 md:h-screen">\n    <div class="media-inner">\n      <img class="media object-cover object-center" src="/img-alt.svg" loading="lazy" alt="">\n    </div>\n  </div>\n  <div class="container md:absolute inset-0 flex items-end justify-center text-center">\n    <a href="#" class="group block w-full max-w-xl container-y md:text-white md:links-inverse">\n      <div class="h1">\n        Lorem ipsum dolor sit amet\n      </div>\n      <div class="list list-2 justify-center">\n        <div class="btn btn-md rounded-md '+l()+'">\n            Lorem ipsum\n        </div>\n      </div>\n    </a>\n  </div>\n</div>\n';var m=function(e){function n(){return e.apply(this,arguments)||this}return Object(r.a)(n,e),n.prototype.render=function(){return o.a.createElement(c.a,{demo:f})},n}(o.a.Component);n.default=m}.call(this,"src/gatsby/code/iframe/components/core/hero/usage.js")}}]);
//# sourceMappingURL=component---src-gatsby-code-iframe-components-core-hero-usage-js-d3fe01d98c0330c348fc.js.map