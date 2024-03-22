(()=>{var e={827:(e,t,n)=>{"use strict";var i=n(302);e.exports=l;var o,a,r="undefined"!=typeof document&&document.ontouchstart?"touchstart":"click",s="undefined"!=typeof window&&(window.history.location||window.location),c=!0,h=!0,d="",u=!1;function l(e,t){if("function"==typeof e)return l("*",e);if("function"==typeof t)for(var n=new m(e),i=1;i<arguments.length;++i)l.callbacks.push(n.middleware(arguments[i]));else"string"==typeof e?l["string"==typeof t?"redirect":"show"](e,t):l.start(e)}function p(e){return"string"!=typeof e?e:h?decodeURIComponent(e.replace(/\+/g," ")):e}function f(e,t){"/"===e[0]&&0!==e.indexOf(d)&&(e=d+(u?"#!":"")+e);var n=e.indexOf("?");if(this.canonicalPath=e,this.path=e.replace(d,"")||"/",u&&(this.path=this.path.replace("#!","")||"/"),this.title=document.title,this.state=t||{},this.state.path=e,this.querystring=~n?p(e.slice(n+1)):"",this.pathname=p(~n?e.slice(0,n):e),this.params={},this.hash="",!u){if(!~this.path.indexOf("#"))return;var i=this.path.split("#");this.path=i[0],this.hash=p(i[1])||"",this.querystring=this.querystring.split("#")[0]}}function m(e,t){t=t||{},this.path=e,this.method="GET",this.regexp=i(this.path,this.keys=[],t.sensitive,t.strict)}l.callbacks=[],l.exits=[],l.current="",l.len=0,l.base=function(e){if(0===arguments.length)return d;d=e},l.start=function(e){if(e=e||{},!o&&(o=!0,!1===e.dispatch&&(c=!1),!1===e.decodeURLComponents&&(h=!1),!1!==e.popstate&&window.addEventListener("popstate",v,!1),!1!==e.click&&document.addEventListener(r,g,!1),!0===e.hashbang&&(u=!0),c)){var t=u&&~s.hash.indexOf("#!")?s.hash.substr(2)+s.search:s.pathname+s.search+s.hash;l.replace(t,null,!0,c)}},l.stop=function(){o&&(l.current="",l.len=0,o=!1,document.removeEventListener(r,g,!1),window.removeEventListener("popstate",v,!1))},l.show=function(e,t,n,i){var o=new f(e,t);return l.current=o.path,!1!==n&&l.dispatch(o),!1!==o.handled&&!1!==i&&o.pushState(),o},l.back=function(e,t){l.len>0?(history.back(),l.len--):e?setTimeout((function(){l.show(e,t)})):setTimeout((function(){l.show(d,t)}))},l.redirect=function(e,t){"string"==typeof e&&"string"==typeof t&&l(e,(function(e){setTimeout((function(){l.replace(t)}),0)})),"string"==typeof e&&void 0===t&&setTimeout((function(){l.replace(e)}),0)},l.replace=function(e,t,n,i){var o=new f(e,t);return l.current=o.path,o.init=n,o.save(),!1!==i&&l.dispatch(o),o},l.dispatch=function(e){var t=a,n=0,i=0;function o(){var t=l.callbacks[n++];if(e.path===l.current)return t?void t(e,o):function(e){e.handled||(u?d+s.hash.replace("#!",""):s.pathname+s.search)!==e.canonicalPath&&(l.stop(),e.handled=!1,s.href=e.canonicalPath)}(e);e.handled=!1}a=e,t?function e(){var n=l.exits[i++];if(!n)return o();n(t,e)}():o()},l.exit=function(e,t){if("function"==typeof e)return l.exit("*",e);for(var n=new m(e),i=1;i<arguments.length;++i)l.exits.push(n.middleware(arguments[i]))},l.Context=f,f.prototype.pushState=function(){l.len++,history.pushState(this.state,this.title,u&&"/"!==this.path?"#!"+this.path:this.canonicalPath)},f.prototype.save=function(){history.replaceState(this.state,this.title,u&&"/"!==this.path?"#!"+this.path:this.canonicalPath)},l.Route=m,m.prototype.middleware=function(e){var t=this;return function(n,i){if(t.match(n.path,n.params))return e(n,i);i()}},m.prototype.match=function(e,t){var n=this.keys,i=e.indexOf("?"),o=~i?e.slice(0,i):e,a=this.regexp.exec(decodeURIComponent(o));if(!a)return!1;for(var r=1,s=a.length;r<s;++r){var c=n[r-1];if(c){var h=p(a[r]);void 0===h&&hasOwnProperty.call(t,c.name)||(t[c.name]=h)}}return!0};var v=function(){var e=!1;if("undefined"!=typeof window)return"complete"===document.readyState?e=!0:window.addEventListener("load",(function(){setTimeout((function(){e=!0}),0)})),function(t){if(e)if(t.state){var n=t.state.path;l.replace(n,t.state)}else l.show(s.pathname+s.hash,void 0,void 0,!1)}}();function g(e){if(1===function(e){return null===(e=e||window.event).which?e.button:e.which}(e)&&!(e.metaKey||e.ctrlKey||e.shiftKey||e.defaultPrevented)){for(var t=e.target;t&&"A"!==t.nodeName;)t=t.parentNode;if(t&&"A"===t.nodeName&&!t.hasAttribute("download")&&"external"!==t.getAttribute("rel")){var n=t.getAttribute("href");if((u||t.pathname!==s.pathname||!t.hash&&"#"!==n)&&!(n&&n.indexOf("mailto:")>-1)&&!t.target&&y(t.href)){var i=t.pathname+t.search+(t.hash||"");"undefined"!=typeof process&&i.match(/^\/[a-zA-Z]:\//)&&(i=i.replace(/^\/[a-zA-Z]:\//,"/"));var o=i;0===i.indexOf(d)&&(i=i.substr(d.length)),u&&(i=i.replace("#!","")),d&&o===i||(e.preventDefault(),l.show(o))}}}}function y(e){var t=s.protocol+"//"+s.hostname;return s.port&&(t+=":"+s.port),e&&0===e.indexOf(t)}l.sameOrigin=y},302:e=>{e.exports=function e(n,i,o){i=i||[];var a,r=(o=o||{}).strict,s=!1!==o.end,c=o.sensitive?"":"i",h=0,d=i.length,u=0,l=0;if(n instanceof RegExp){for(;a=t.exec(n.source);)i.push({name:l++,optional:!1,offset:a.index});return n}if(Array.isArray(n))return n=n.map((function(t){return e(t,i,o).source})),new RegExp("(?:"+n.join("|")+")",c);for(n=("^"+n+(r?"":"/"===n[n.length-1]?"?":"/?")).replace(/\/\(/g,"/(?:").replace(/([\/\.])/g,"\\$1").replace(/(\\\/)?(\\\.)?:(\w+)(\(.*?\))?(\*)?(\?)?/g,(function(e,t,n,o,a,r,s,c){t=t||"",n=n||"",a=a||"([^\\/"+n+"]+?)",s=s||"",i.push({name:o,optional:!!s,offset:c+h});var d=(s?"":t)+"(?:"+n+(s?t:"")+a+(r?"((?:[\\/"+n+"].+?)?)":"")+")"+s;return h+=d.length-e.length,d})).replace(/\*/g,(function(e,t){for(var n=i.length;n-- >d&&i[n].offset>t;)i[n].offset+=3;return"(.*)"}));a=t.exec(n);){for(var p=0,f=a.index;"\\"===n.charAt(--f);)p++;p%2!=1&&((d+u===i.length||i[d+u].offset>a.index)&&i.splice(d+u,0,{name:l++,optional:!1,offset:a.index}),u++)}return n+=s?"$":"/"===n[n.length-1]?"":"(?=\\/|$)",new RegExp(n,c)};var t=/\((?!\?)/g}},t={};function n(i){var o=t[i];if(void 0!==o)return o.exports;var a=t[i]={exports:{}};return e[i](a,a.exports,n),a.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var i in t)n.o(t,i)&&!n.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{"use strict";var e=n(827),t=n.n(e);const i=function(e){const{bgImageLeft:t,bgImageRight:n,heroTitle:i,heroSubtitle:o,heroDescription:a,heroButtonText:r}=e,s=document.createElement("section");s.classList.add("hero");const c=document.createElement("div");c.classList.add("hero-content","hero-content-left");const h=document.createElement("div");h.classList.add("text-container");const d=document.createElement("h1");d.textContent=i;const u=document.createElement("h2");u.textContent=o;const l=document.createElement("p");l.textContent=a;const p=document.createElement("button");p.textContent=r,h.appendChild(d),h.appendChild(u),h.appendChild(l),h.appendChild(p),c.appendChild(h);const f=document.createElement("div");return f.classList.add("hero-content","hero-content-right"),f.style.backgroundImage=`url(${n})`,s.appendChild(c),s.appendChild(f),s},o={bgImageLeft:"/image/sillhoute.jpg",bgImageRight:"/image/home-main.webp",heroTitle:"Alpha Tech Innovation",heroSubtitle:"Unlocking Talent Galore, Empowering Your Growth",heroDescription:"At Alpha Tech Innovation, we understand the challenges businesses face in finding the right talent. That's why we're dedicated to providing top-notch recruitment services tailored to your company's unique needs. Whether you're a startup, a small business, or a large corporation, we're here to help you build the team you need to succeed.",heroButtonText:"CONNECT WITH US"},a={bgImageLeft:"/image/sillhoute.jpg",bgImageRight:"/image/about-main.jpg",heroTitle:"About Us",heroSubtitle:"Driving Innovation, Empowering Your Journey",heroDescription:"Don't just take our word for it. Hear what our clients have to say about their experience working with us and the results we've helped them achieve.",heroButtonText:"LEARN MORE ABOUT US"},r={bgImageLeft:"/image/sillhoute.jpg",bgImageRight:"/image/service-main.jpg",heroTitle:"Our Services",heroSubtitle:"Innovative Solutions Tailored to Your Needs",heroDescription:"Welcome to our comprehensive suite of services designed to address your unique challenges and accelerate your business growth. From cutting-edge technology solutions to strategic consulting, we're dedicated to delivering exceptional results that exceed your expectations. Explore our range of services and discover how we can empower your journey towards success.",heroButtonText:"EXPLORE OUR SERVICES"},s={bgImageLeft:"/image/industry-left-bg.jpg",bgImageRight:"/image/industry-main.webp",heroTitle:"Industries We Serve",heroSubtitle:"Tailored Solutions for Every Sector",heroDescription:"Discover our tailored solutions designed to meet the unique challenges of various industries. Whether you're in healthcare, finance, technology, or any other sector, we're here to provide innovative services that drive success. Explore how our expertise can elevate your business in your industry.",heroButtonText:"EXPLORE INDUSTRIES"},c={bgImageLeft:"/image/contact-left-bg.jpg",bgImageRight:"/image/contact-us-main.jpg",heroTitle:"Contact Us",heroSubtitle:"Get in Touch with Us",heroDescription:"Have questions, inquiries, or feedback? We'd love to hear from you! Contact our team today and let us assist you. Whether you're interested in our services, want to collaborate, or simply want to say hello, we're here to help.",heroButtonText:"CONTACT US"};function h(){const e=document.getElementById("container");return e.innerHTML="",e}const d=document.getElementById("root"),u=function(e,t){const n=document.createElement("nav");n.setAttribute("id","navbar"),n.classList.add("navbar");const i=document.createElement("div");i.classList.add("hamburger-btn"),i.innerHTML='\n        <div class="line"></div>\n        <div class="line"></div>\n        <div class="line"></div>\n    ',n.appendChild(i);const o=document.createElement("img");o.setAttribute("src","./logo/logo.png"),o.setAttribute("alt","Logo"),o.classList.add("navbar-logo"),n.appendChild(o);const a=document.createElement("ul");a.classList.add("navbar-menu"),e.forEach((e=>{const t=document.createElement("li"),n=document.createElement("a");n.setAttribute("href",e.link),n.textContent=e.navItem,t.appendChild(n),a.appendChild(t)})),n.appendChild(a),i.addEventListener("click",(()=>{n.classList.contains("active")?(n.classList.remove("active"),a.classList.remove("active"),n.classList.add("inactive"),a.classList.add("inactive")):(n.classList.remove("inactive"),a.classList.remove("inactive"),n.classList.add("active"),a.classList.add("active"))})),a.addEventListener("click",(()=>{n.classList.contains("active")?(n.classList.remove("active"),a.classList.remove("active"),n.classList.add("inactive"),a.classList.add("inactive")):(n.classList.remove("inactive"),a.classList.remove("inactive"),n.classList.add("active"),a.classList.add("active"))}));const r=document.createElement("button");return r.textContent="Toggle Theme",r.classList.add("theme-swap-btn"),n.appendChild(r),r.addEventListener("click",(()=>{document.body.classList.toggle("dark-theme")})),n}([{navItem:"HOME",link:"/"},{navItem:"ABOUT US",link:"/about-us"},{navItem:"SERVICES",link:"/services"},{navItem:"INDUSTRIES",link:"/industries"},{navItem:"CONTACT US",link:"/contact-us"}]);d.appendChild(u);const l=function(){const e=document.createElement("div");return e.id="container",e}();d.appendChild(l),t()("/",(function(){const e=h();[i(o)].forEach((t=>e.appendChild(t)))})),t()("/about-us",(function(){const e=h();[i(a)].forEach((t=>e.appendChild(t)))})),t()("/services",(function(){const e=h();[i(r)].forEach((t=>e.appendChild(t)))})),t()("/industries",(function(){const e=h();[i(s)].forEach((t=>e.appendChild(t)))})),t()("/contact-us",(function(){const e=h();[i(c)].forEach((t=>e.appendChild(t)))})),t().start()})()})();