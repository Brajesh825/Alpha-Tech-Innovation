(()=>{var e={827:(e,t,n)=>{"use strict";var i=n(302);e.exports=h;var o,a,s="undefined"!=typeof document&&document.ontouchstart?"touchstart":"click",r="undefined"!=typeof window&&(window.history.location||window.location),c=!0,d=!0,l="",u=!1;function h(e,t){if("function"==typeof e)return h("*",e);if("function"==typeof t)for(var n=new v(e),i=1;i<arguments.length;++i)h.callbacks.push(n.middleware(arguments[i]));else"string"==typeof e?h["string"==typeof t?"redirect":"show"](e,t):h.start(e)}function p(e){return"string"!=typeof e?e:d?decodeURIComponent(e.replace(/\+/g," ")):e}function m(e,t){"/"===e[0]&&0!==e.indexOf(l)&&(e=l+(u?"#!":"")+e);var n=e.indexOf("?");if(this.canonicalPath=e,this.path=e.replace(l,"")||"/",u&&(this.path=this.path.replace("#!","")||"/"),this.title=document.title,this.state=t||{},this.state.path=e,this.querystring=~n?p(e.slice(n+1)):"",this.pathname=p(~n?e.slice(0,n):e),this.params={},this.hash="",!u){if(!~this.path.indexOf("#"))return;var i=this.path.split("#");this.path=i[0],this.hash=p(i[1])||"",this.querystring=this.querystring.split("#")[0]}}function v(e,t){t=t||{},this.path=e,this.method="GET",this.regexp=i(this.path,this.keys=[],t.sensitive,t.strict)}h.callbacks=[],h.exits=[],h.current="",h.len=0,h.base=function(e){if(0===arguments.length)return l;l=e},h.start=function(e){if(e=e||{},!o&&(o=!0,!1===e.dispatch&&(c=!1),!1===e.decodeURLComponents&&(d=!1),!1!==e.popstate&&window.addEventListener("popstate",g,!1),!1!==e.click&&document.addEventListener(s,f,!1),!0===e.hashbang&&(u=!0),c)){var t=u&&~r.hash.indexOf("#!")?r.hash.substr(2)+r.search:r.pathname+r.search+r.hash;h.replace(t,null,!0,c)}},h.stop=function(){o&&(h.current="",h.len=0,o=!1,document.removeEventListener(s,f,!1),window.removeEventListener("popstate",g,!1))},h.show=function(e,t,n,i){var o=new m(e,t);return h.current=o.path,!1!==n&&h.dispatch(o),!1!==o.handled&&!1!==i&&o.pushState(),o},h.back=function(e,t){h.len>0?(history.back(),h.len--):e?setTimeout((function(){h.show(e,t)})):setTimeout((function(){h.show(l,t)}))},h.redirect=function(e,t){"string"==typeof e&&"string"==typeof t&&h(e,(function(e){setTimeout((function(){h.replace(t)}),0)})),"string"==typeof e&&void 0===t&&setTimeout((function(){h.replace(e)}),0)},h.replace=function(e,t,n,i){var o=new m(e,t);return h.current=o.path,o.init=n,o.save(),!1!==i&&h.dispatch(o),o},h.dispatch=function(e){var t=a,n=0,i=0;function o(){var t=h.callbacks[n++];if(e.path===h.current)return t?void t(e,o):function(e){e.handled||(u?l+r.hash.replace("#!",""):r.pathname+r.search)!==e.canonicalPath&&(h.stop(),e.handled=!1,r.href=e.canonicalPath)}(e);e.handled=!1}a=e,t?function e(){var n=h.exits[i++];if(!n)return o();n(t,e)}():o()},h.exit=function(e,t){if("function"==typeof e)return h.exit("*",e);for(var n=new v(e),i=1;i<arguments.length;++i)h.exits.push(n.middleware(arguments[i]))},h.Context=m,m.prototype.pushState=function(){h.len++,history.pushState(this.state,this.title,u&&"/"!==this.path?"#!"+this.path:this.canonicalPath)},m.prototype.save=function(){history.replaceState(this.state,this.title,u&&"/"!==this.path?"#!"+this.path:this.canonicalPath)},h.Route=v,v.prototype.middleware=function(e){var t=this;return function(n,i){if(t.match(n.path,n.params))return e(n,i);i()}},v.prototype.match=function(e,t){var n=this.keys,i=e.indexOf("?"),o=~i?e.slice(0,i):e,a=this.regexp.exec(decodeURIComponent(o));if(!a)return!1;for(var s=1,r=a.length;s<r;++s){var c=n[s-1];if(c){var d=p(a[s]);void 0===d&&hasOwnProperty.call(t,c.name)||(t[c.name]=d)}}return!0};var g=function(){var e=!1;if("undefined"!=typeof window)return"complete"===document.readyState?e=!0:window.addEventListener("load",(function(){setTimeout((function(){e=!0}),0)})),function(t){if(e)if(t.state){var n=t.state.path;h.replace(n,t.state)}else h.show(r.pathname+r.hash,void 0,void 0,!1)}}();function f(e){if(1===function(e){return null===(e=e||window.event).which?e.button:e.which}(e)&&!(e.metaKey||e.ctrlKey||e.shiftKey||e.defaultPrevented)){for(var t=e.target;t&&"A"!==t.nodeName;)t=t.parentNode;if(t&&"A"===t.nodeName&&!t.hasAttribute("download")&&"external"!==t.getAttribute("rel")){var n=t.getAttribute("href");if((u||t.pathname!==r.pathname||!t.hash&&"#"!==n)&&!(n&&n.indexOf("mailto:")>-1)&&!t.target&&y(t.href)){var i=t.pathname+t.search+(t.hash||"");"undefined"!=typeof process&&i.match(/^\/[a-zA-Z]:\//)&&(i=i.replace(/^\/[a-zA-Z]:\//,"/"));var o=i;0===i.indexOf(l)&&(i=i.substr(l.length)),u&&(i=i.replace("#!","")),l&&o===i||(e.preventDefault(),h.show(o))}}}}function y(e){var t=r.protocol+"//"+r.hostname;return r.port&&(t+=":"+r.port),e&&0===e.indexOf(t)}h.sameOrigin=y},302:e=>{e.exports=function e(n,i,o){i=i||[];var a,s=(o=o||{}).strict,r=!1!==o.end,c=o.sensitive?"":"i",d=0,l=i.length,u=0,h=0;if(n instanceof RegExp){for(;a=t.exec(n.source);)i.push({name:h++,optional:!1,offset:a.index});return n}if(Array.isArray(n))return n=n.map((function(t){return e(t,i,o).source})),new RegExp("(?:"+n.join("|")+")",c);for(n=("^"+n+(s?"":"/"===n[n.length-1]?"?":"/?")).replace(/\/\(/g,"/(?:").replace(/([\/\.])/g,"\\$1").replace(/(\\\/)?(\\\.)?:(\w+)(\(.*?\))?(\*)?(\?)?/g,(function(e,t,n,o,a,s,r,c){t=t||"",n=n||"",a=a||"([^\\/"+n+"]+?)",r=r||"",i.push({name:o,optional:!!r,offset:c+d});var l=(r?"":t)+"(?:"+n+(r?t:"")+a+(s?"((?:[\\/"+n+"].+?)?)":"")+")"+r;return d+=l.length-e.length,l})).replace(/\*/g,(function(e,t){for(var n=i.length;n-- >l&&i[n].offset>t;)i[n].offset+=3;return"(.*)"}));a=t.exec(n);){for(var p=0,m=a.index;"\\"===n.charAt(--m);)p++;p%2!=1&&((l+u===i.length||i[l+u].offset>a.index)&&i.splice(l+u,0,{name:h++,optional:!1,offset:a.index}),u++)}return n+=r?"$":"/"===n[n.length-1]?"":"(?=\\/|$)",new RegExp(n,c)};var t=/\((?!\?)/g}},t={};function n(i){var o=t[i];if(void 0!==o)return o.exports;var a=t[i]={exports:{}};return e[i](a,a.exports,n),a.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var i in t)n.o(t,i)&&!n.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{"use strict";var e=n(827),t=n.n(e);const i=function(e){const{bgImageLeft:t,bgImageRight:n,heroTitle:i,heroSubtitle:o,heroDescription:a,heroButtonText:s}=e,r=document.createElement("section");r.classList.add("hero");const c=document.createElement("div");c.classList.add("hero-content","hero-content-left");const d=document.createElement("div");d.classList.add("text-container");const l=document.createElement("h1");l.textContent=i;const u=document.createElement("h2");u.textContent=o;const h=document.createElement("p");h.textContent=a;const p=document.createElement("button");p.textContent=s,d.appendChild(l),d.appendChild(u),d.appendChild(h),d.appendChild(p),c.appendChild(d);const m=document.createElement("div");return m.classList.add("hero-content","hero-content-right"),m.style.backgroundImage=`url(${n})`,r.appendChild(c),r.appendChild(m),r},o={bgImageLeft:"/image/sillhoute.jpg",bgImageRight:"/image/home-main.webp",heroTitle:"Alpha Tech Innovation",heroSubtitle:"Unlocking Talent Galore, Empowering Your Growth",heroDescription:"At Alpha Tech Innovation, we understand the challenges businesses face in finding the right talent. That's why we're dedicated to providing top-notch recruitment services tailored to your company's unique needs. Whether you're a startup, a small business, or a large corporation, we're here to help you build the team you need to succeed.",heroButtonText:"CONNECT WITH US"},a={bgImageLeft:"/image/sillhoute.jpg",bgImageRight:"/image/about-main.jpg",heroTitle:"About Us",heroSubtitle:"Driving Innovation, Empowering Your Journey",heroDescription:"Don't just take our word for it. Hear what our clients have to say about their experience working with us and the results we've helped them achieve.",heroButtonText:"LEARN MORE ABOUT US"},s={bgImageLeft:"/image/sillhoute.jpg",bgImageRight:"/image/service-main.jpg",heroTitle:"Our Services",heroSubtitle:"Innovative Solutions Tailored to Your Needs",heroDescription:"Welcome to our comprehensive suite of services designed to address your unique challenges and accelerate your business growth. From cutting-edge technology solutions to strategic consulting, we're dedicated to delivering exceptional results that exceed your expectations. Explore our range of services and discover how we can empower your journey towards success.",heroButtonText:"EXPLORE OUR SERVICES"},r={bgImageLeft:"/image/industry-left-bg.jpg",bgImageRight:"/image/industry-main.webp",heroTitle:"Industries We Serve",heroSubtitle:"Tailored Solutions for Every Sector",heroDescription:"Discover our tailored solutions designed to meet the unique challenges of various industries. Whether you're in healthcare, finance, technology, or any other sector, we're here to provide innovative services that drive success. Explore how our expertise can elevate your business in your industry.",heroButtonText:"EXPLORE INDUSTRIES"},c={bgImageLeft:"/image/contact-left-bg.jpg",bgImageRight:"/image/contact-us-main.jpg",heroTitle:"Contact Us",heroSubtitle:"Get in Touch with Us",heroDescription:"Have questions, inquiries, or feedback? We'd love to hear from you! Contact our team today and let us assist you. Whether you're interested in our services, want to collaborate, or simply want to say hello, we're here to help.",heroButtonText:"CONTACT US"},d=function(e){const{missionTitle:t,missionDescription:n,missionButtonText:i}=e,o=document.createElement("section");o.classList.add("mission");const a=document.createElement("div");a.classList.add("mission-content");const s=document.createElement("div");s.classList.add("text-container");const r=document.createElement("h2");r.textContent=t;const c=document.createElement("p");c.textContent=n;const d=document.createElement("button");return d.textContent=i,s.appendChild(r),s.appendChild(c),s.appendChild(d),a.appendChild(s),o.appendChild(a),o},l={missionTitle:"Our Mission",missionDescription:"Our mission is to state the overarching goal or purpose of your company/website. We strive to mention what your company aims to achieve for its customers or community.",missionButtonText:"Learn More",sets_us_apart:{title:"What Sets Us Apart",points:[{title:"Commitment to Quality",description:"We hold ourselves to the highest standards, ensuring that every product or service we offer meets or exceeds customer expectations."},{title:"Innovation",description:"We are constantly exploring new ideas and technologies to provide cutting-edge solutions that address the needs of our customers."},{title:"Customer-Centric Approach",description:"Our customers are at the heart of everything we do. We listen to their feedback, respond to their needs, and prioritize their satisfaction above all else."},{title:"Community Engagement",description:"We believe in giving back to the community and actively participate in initiatives that make a positive impact on society."}]}},u=function(e){const{title:t,subtitle:n,description:i}=e,o=document.createElement("section");o.classList.add("service-home-hero-intro");const a=document.createElement("div");a.classList.add("text-container");const s=document.createElement("h1");s.textContent=t;const r=document.createElement("h2");r.textContent=n;const c=document.createElement("p");c.textContent=i;const d=document.createElement("button");return d.textContent="Learn More",a.appendChild(s),a.appendChild(r),a.appendChild(c),a.appendChild(d),o.appendChild(a),o},h={title:"What We Provide",subtitle:"Transforming Talent Acquisition, Powering Your Success Story",description:"We Welcome you to Our Services Hub. Elevate your business with the top RPO Company in USA, our end-to-end recruitment services, expert talent sourcing, seamless screening, and strategic employer branding solutions. We are here to help you unlock your full potential! Reach out to us now and start your journey towards success!"},p=function(e){const t=document.createElement("div");return t.classList.add("service-home-cards-container"),e.forEach((e=>{const n=function({title:e,description:t,bgImage:n}){const i=document.createElement("div");i.classList.add("service-home-card");const o=document.createElement("div");o.classList.add("service-home-card-before"),o.style.backgroundImage=`url('${n}')`;const a=document.createElement("div");a.classList.add("service-home-card-content");const s=document.createElement("h3");s.textContent=e;const r=document.createElement("p");return r.textContent=t,a.appendChild(s),a.appendChild(r),i.appendChild(o),i.appendChild(a),i}(e);t.appendChild(n)})),t},m=[{title:"24/7 Sourcing Support",description:"Leverage the advantage of partnering with the top RPO Company in USA, ensuring enhanced candidate quality and improved performance through our round-the-clock sourcing support.",bgImage:"/image/services/24-07-services.jpeg"},{title:"Recruitment Service",description:"Access comprehensive recruitment services tailored to your business needs, from talent sourcing to seamless screening, provided by experienced professionals dedicated to finding the right candidates for your organization.",bgImage:"/image/services/recruitment-services.jpg"},{title:"Research and Development",description:"Drive innovation and stay ahead of the curve with our research and development services, where our experts work tirelessly to explore new ideas, technologies, and solutions tailored to your industry and business goals.",bgImage:"/image/services/research-services.jpeg"},{title:"Virtual Assistant",description:"Enhance your productivity and focus on core tasks by delegating administrative, technical, or creative tasks to our virtual assistants, who provide reliable support remotely, ensuring smooth operations for your business.",bgImage:"/image/services/virtual-assistant-services.jpeg"},{title:"Website and App Designing",description:"Elevate your online presence with custom website and app designing services, where our talented designers and developers collaborate to create visually stunning and user-friendly digital platforms that reflect your brand identity and drive engagement.",bgImage:"/image/services/web-app-services.webp"},{title:"Digital Marketing",description:"Boost your brand visibility and reach your target audience effectively with our digital marketing solutions, including SEO, social media marketing, content creation, and more, tailored to increase your online presence and drive conversions.",bgImage:"/image/services/digital-marketing-services.svg"}];function v(){const e=document.getElementById("container");return e.innerHTML="",e}const g=document.getElementById("root"),f=function(e,t){const n=document.createElement("nav");n.setAttribute("id","navbar"),n.classList.add("navbar");const i=document.createElement("div");i.classList.add("hamburger-btn"),i.innerHTML='\n        <div class="line"></div>\n        <div class="line"></div>\n        <div class="line"></div>\n    ',n.appendChild(i);const o=document.createElement("img");o.setAttribute("src","./logo/logo.png"),o.setAttribute("alt","Logo"),o.classList.add("navbar-logo"),n.appendChild(o);const a=document.createElement("ul");a.classList.add("navbar-menu"),e.forEach((e=>{const t=document.createElement("li"),i=document.createElement("a");i.setAttribute("href",e.link),i.textContent=e.navItem,i.addEventListener("click",(()=>{n.classList.contains("active")?(n.classList.remove("active"),a.classList.remove("active"),n.classList.add("inactive"),a.classList.add("inactive")):(n.classList.remove("inactive"),a.classList.remove("inactive"),n.classList.add("active"),a.classList.add("active"))})),t.appendChild(i),a.appendChild(t)})),n.appendChild(a),i.addEventListener("click",(()=>{n.classList.contains("active")?(n.classList.remove("active"),a.classList.remove("active"),n.classList.add("inactive"),a.classList.add("inactive")):(n.classList.remove("inactive"),a.classList.remove("inactive"),n.classList.add("active"),a.classList.add("active"))}));const s=document.createElement("button");return s.textContent="Toggle Theme",s.classList.add("theme-swap-btn"),n.appendChild(s),s.addEventListener("click",(()=>{document.body.classList.toggle("dark-theme")})),Math.round(Math.random())&&document.body.classList.toggle("dark-theme"),n}([{navItem:"HOME",link:"/"},{navItem:"ABOUT US",link:"/about-us"},{navItem:"SERVICES",link:"/services"},{navItem:"INDUSTRIES",link:"/industries"},{navItem:"CONTACT US",link:"/contact-us"}]);g.appendChild(f);const y=function(){const e=document.createElement("div");return e.id="container",e}();g.appendChild(y),t()("/",(function(){const e=v();[i(o),d(l),u(h),p(m)].forEach((t=>e.appendChild(t)))})),t()("/about-us",(function(){const e=v();[i(a)].forEach((t=>e.appendChild(t)))})),t()("/services",(function(){const e=v();[i(s)].forEach((t=>e.appendChild(t)))})),t()("/industries",(function(){const e=v();[i(r)].forEach((t=>e.appendChild(t)))})),t()("/contact-us",(function(){const e=v();[i(c)].forEach((t=>e.appendChild(t)))})),t().start()})()})();