function e(){}function t(e,t){for(const n in t)e[n]=t[n];return e}function n(e){return e()}function r(){return Object.create(null)}function s(e){e.forEach(n)}function o(e){return"function"==typeof e}function a(e,t){return e!=e?t==t:e!==t||e&&"object"==typeof e||"function"==typeof e}let i;function c(e,t){return i||(i=document.createElement("a")),i.href=t,e===i.href}function l(e,n,r,s){return e[1]&&s?t(r.ctx.slice(),e[1](s(n))):r.ctx}function u(e){const t={};for(const n in e)"$"!==n[0]&&(t[n]=e[n]);return t}function f(e){return null==e?"":e}let d,h,p=!1;function m(e,t,n,r){for(;e<t;){const s=e+(t-e>>1);n(s)<=r?e=s+1:t=s}return e}function g(e,t){if(p){for(!function(e){if(e.hydrate_init)return;e.hydrate_init=!0;let t=e.childNodes;if("HEAD"===e.nodeName){const e=[];for(let n=0;n<t.length;n++){const r=t[n];void 0!==r.claim_order&&e.push(r)}t=e}const n=new Int32Array(t.length+1),r=new Int32Array(t.length);n[0]=-1;let s=0;for(let e=0;e<t.length;e++){const o=t[e].claim_order,a=(s>0&&t[n[s]].claim_order<=o?s+1:m(1,s,(e=>t[n[e]].claim_order),o))-1;r[e]=n[a]+1;const i=a+1;n[i]=e,s=Math.max(i,s)}const o=[],a=[];let i=t.length-1;for(let e=n[s]+1;0!=e;e=r[e-1]){for(o.push(t[e-1]);i>=e;i--)a.push(t[i]);i--}for(;i>=0;i--)a.push(t[i]);o.reverse(),a.sort(((e,t)=>e.claim_order-t.claim_order));for(let t=0,n=0;t<a.length;t++){for(;n<o.length&&a[t].claim_order>=o[n].claim_order;)n++;const r=n<o.length?o[n]:null;e.insertBefore(a[t],r)}}(e),(void 0===e.actual_end_child||null!==e.actual_end_child&&e.actual_end_child.parentElement!==e)&&(e.actual_end_child=e.firstChild);null!==e.actual_end_child&&void 0===e.actual_end_child.claim_order;)e.actual_end_child=e.actual_end_child.nextSibling;t!==e.actual_end_child?void 0===t.claim_order&&t.parentNode===e||e.insertBefore(t,e.actual_end_child):e.actual_end_child=t.nextSibling}else t.parentNode===e&&null===t.nextSibling||e.appendChild(t)}function b(e,t,n){e.insertBefore(t,n||null)}function v(e,t,n){p&&!n?g(e,t):t.parentNode===e&&t.nextSibling==n||e.insertBefore(t,n||null)}function _(e){e.parentNode.removeChild(e)}function $(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function w(e){return document.createElement(e)}function y(e){return document.createElementNS("http://www.w3.org/2000/svg",e)}function E(e){return document.createTextNode(e)}function x(){return E(" ")}function S(){return E("")}function T(e,t,n,r){return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n,r)}function A(e){return function(t){return t.preventDefault(),e.call(this,t)}}function N(e,t,n){null==n?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function P(e,t){const n=Object.getOwnPropertyDescriptors(e.__proto__);for(const r in t)null==t[r]?e.removeAttribute(r):"style"===r?e.style.cssText=t[r]:"__value"===r?e.value=e[r]=t[r]:n[r]&&n[r].set?e[r]=t[r]:N(e,r,t[r])}function k(e){return Array.from(e.childNodes)}function I(e){void 0===e.claim_info&&(e.claim_info={last_index:0,total_claimed:0})}function L(e,t,n,r,s=!1){I(e);const o=(()=>{for(let r=e.claim_info.last_index;r<e.length;r++){const o=e[r];if(t(o)){const t=n(o);return void 0===t?e.splice(r,1):e[r]=t,s||(e.claim_info.last_index=r),o}}for(let r=e.claim_info.last_index-1;r>=0;r--){const o=e[r];if(t(o)){const t=n(o);return void 0===t?e.splice(r,1):e[r]=t,s?void 0===t&&e.claim_info.last_index--:e.claim_info.last_index=r,o}}return r()})();return o.claim_order=e.claim_info.total_claimed,e.claim_info.total_claimed+=1,o}function R(e,t,n,r){return L(e,(e=>e.nodeName===t),(e=>{const t=[];for(let r=0;r<e.attributes.length;r++){const s=e.attributes[r];n[s.name]||t.push(s.name)}t.forEach((t=>e.removeAttribute(t)))}),(()=>r(t)))}function O(e,t,n){return R(e,t,n,w)}function C(e,t,n){return R(e,t,n,y)}function H(e,t){return L(e,(e=>3===e.nodeType),(e=>{const n=""+t;if(e.data.startsWith(n)){if(e.data.length!==n.length)return e.splitText(n.length)}else e.data=n}),(()=>E(t)),!0)}function U(e){return H(e," ")}function M(e,t,n){for(let r=n;r<e.length;r+=1){const n=e[r];if(8===n.nodeType&&n.textContent.trim()===t)return r}return e.length}function j(e){const t=M(e,"HTML_TAG_START",0),n=M(e,"HTML_TAG_END",t);if(t===n)return new K;I(e);const r=e.splice(t,n-t+1);_(r[0]),_(r[r.length-1]);const s=r.slice(1,r.length-1);for(const t of s)t.claim_order=e.claim_info.total_claimed,e.claim_info.total_claimed+=1;return new K(s)}function D(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}function G(e,t){e.value=null==t?"":t}function q(){if(void 0===d){d=!1;try{"undefined"!=typeof window&&window.parent&&window.parent.document}catch(e){d=!0}}return d}function B(e,t){"static"===getComputedStyle(e).position&&(e.style.position="relative");const n=w("iframe");n.setAttribute("style","display: block; position: absolute; top: 0; left: 0; width: 100%; height: 100%; overflow: hidden; border: 0; opacity: 0; pointer-events: none; z-index: -1;"),n.setAttribute("aria-hidden","true"),n.tabIndex=-1;const r=q();let s;return r?(n.src="data:text/html,<script>onresize=function(){parent.postMessage(0,'*')}<\/script>",s=T(window,"message",(e=>{e.source===n.contentWindow&&t()}))):(n.src="about:blank",n.onload=()=>{s=T(n.contentWindow,"resize",t)}),function(e,t){e.appendChild(t)}(e,n),()=>{(r||s&&n.contentWindow)&&s(),_(n)}}function z(e,t=document.body){return Array.from(t.querySelectorAll(e))}class K extends class{constructor(){this.e=this.n=null}c(e){this.h(e)}m(e,t,n=null){this.e||(this.e=w(t.nodeName),this.t=t,this.c(e)),this.i(n)}h(e){this.e.innerHTML=e,this.n=Array.from(this.e.childNodes)}i(e){for(let t=0;t<this.n.length;t+=1)b(this.t,this.n[t],e)}p(e){this.d(),this.h(e),this.i(this.a)}d(){this.n.forEach(_)}}{constructor(e){super(),this.e=this.n=null,this.l=e}c(e){this.l?this.n=this.l:super.c(e)}i(e){for(let t=0;t<this.n.length;t+=1)v(this.t,this.n[t],e)}}function V(e){h=e}function J(){if(!h)throw new Error("Function called outside component initialization");return h}function W(e){J().$$.on_mount.push(e)}function F(e){J().$$.after_update.push(e)}function Y(e){J().$$.on_destroy.push(e)}const X=[],Q=[],Z=[],ee=[],te=Promise.resolve();let ne=!1;function re(e){Z.push(e)}const se=new Set;let oe=0;function ae(){const e=h;do{for(;oe<X.length;){const e=X[oe];oe++,V(e),ie(e.$$)}for(V(null),X.length=0,oe=0;Q.length;)Q.pop()();for(let e=0;e<Z.length;e+=1){const t=Z[e];se.has(t)||(se.add(t),t())}Z.length=0}while(X.length);for(;ee.length;)ee.pop()();ne=!1,se.clear(),V(e)}function ie(e){if(null!==e.fragment){e.update(),s(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(re)}}const ce=new Set;let le;function ue(){le={r:0,c:[],p:le}}function fe(){le.r||s(le.c),le=le.p}function de(e,t){e&&e.i&&(ce.delete(e),e.i(t))}function he(e,t,n,r){if(e&&e.o){if(ce.has(e))return;ce.add(e),le.c.push((()=>{ce.delete(e),r&&(n&&e.d(1),r())})),e.o(t)}}function pe(e,t){const n={},r={},s={$$scope:1};let o=e.length;for(;o--;){const a=e[o],i=t[o];if(i){for(const e in a)e in i||(r[e]=1);for(const e in i)s[e]||(n[e]=i[e],s[e]=1);e[o]=i}else for(const e in a)s[e]=1}for(const e in r)e in n||(n[e]=void 0);return n}function me(e){return"object"==typeof e&&null!==e?e:{}}function ge(e){e&&e.c()}function be(e,t){e&&e.l(t)}function ve(e,t,r,a){const{fragment:i,on_mount:c,on_destroy:l,after_update:u}=e.$$;i&&i.m(t,r),a||re((()=>{const t=c.map(n).filter(o);l?l.push(...t):s(t),e.$$.on_mount=[]})),u.forEach(re)}function _e(e,t){const n=e.$$;null!==n.fragment&&(s(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function $e(e,t){-1===e.$$.dirty[0]&&(X.push(e),ne||(ne=!0,te.then(ae)),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function we(t,n,o,a,i,c,l,u=[-1]){const f=h;V(t);const d=t.$$={fragment:null,ctx:null,props:c,update:e,not_equal:i,bound:r(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(n.context||(f?f.$$.context:[])),callbacks:r(),dirty:u,skip_bound:!1,root:n.target||f.$$.root};l&&l(d.root);let m=!1;if(d.ctx=o?o(t,n.props||{},((e,n,...r)=>{const s=r.length?r[0]:n;return d.ctx&&i(d.ctx[e],d.ctx[e]=s)&&(!d.skip_bound&&d.bound[e]&&d.bound[e](s),m&&$e(t,e)),n})):[],d.update(),m=!0,s(d.before_update),d.fragment=!!a&&a(d.ctx),n.target){if(n.hydrate){p=!0;const e=k(n.target);d.fragment&&d.fragment.l(e),e.forEach(_)}else d.fragment&&d.fragment.c();n.intro&&de(t.$$.fragment),ve(t,n.target,n.anchor,n.customElement),p=!1,ae()}V(f)}class ye{$destroy(){_e(this,1),this.$destroy=e}$on(e,t){const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(t),()=>{const e=n.indexOf(t);-1!==e&&n.splice(e,1)}}$set(e){var t;this.$$set&&(t=e,0!==Object.keys(t).length)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const Ee=[];function xe(t,n=e){let r;const s=new Set;function o(e){if(a(t,e)&&(t=e,r)){const e=!Ee.length;for(const e of s)e[1](),Ee.push(e,t);if(e){for(let e=0;e<Ee.length;e+=2)Ee[e][0](Ee[e+1]);Ee.length=0}}}return{set:o,update:function(e){o(e(t))},subscribe:function(a,i=e){const c=[a,i];return s.add(c),1===s.size&&(r=n(o)||e),a(t),()=>{s.delete(c),0===s.size&&(r(),r=null)}}}}const Se={};var Te={owner:"kreatoo",repo:"kreatea-status",sites:[{name:"Main website",url:"https://kreatea.space"},{name:"Gitea",url:"https://git.kreatea.space"},{name:"Matrix (Synapse)",url:"https://matrix.kreatea.space"},{name:"Libreddit",url:"https://r.kreatea.space"},{name:"Nextcloud",url:"https://cloud.kreatea.space"},{name:"Searx",url:"https://searx.kreatea.space"},{name:"PrivateBin",url:"https://bin.kreatea.space"},{name:"Nitter",url:"https://nitter.kreatea.space"},{name:"Vaultwarden",url:"https://vault.kreatea.space"}],"status-website":{cname:"status.kreatea.space",name:"Kreatea Status",introTitle:"Kreatea status page.",navbar:[{title:"Status",href:"/"},{title:"Main site",href:"https://kreatea.space"},{title:"GitHub",href:"https://github.com/$OWNER/$REPO"}]},path:"https://status.kreatea.space",i18n:{activeIncidents:"Active Incidents",allSystemsOperational:"All systems are operational",incidentReport:"Incident #$NUMBER report →",activeIncidentSummary:"Opened at $DATE with $POSTS posts",incidentTitle:"Incident $NUMBER Details",incidentDetails:"Incident Details",incidentFixed:"Fixed",incidentOngoing:"Ongoing",incidentOpenedAt:"Opened at",incidentClosedAt:"Closed at",incidentSubscribe:"Subscribe to Updates",incidentViewOnGitHub:"View on GitHub",incidentCommentSummary:"Posted at $DATE by $AUTHOR",incidentBack:"← Back to all incidents",pastIncidents:"Past Incidents",pastIncidentsResolved:"Resolved in $MINUTES minutes with $POSTS posts",liveStatus:"Live Status",overallUptime:"Overall uptime: $UPTIME",overallUptimeTitle:"Overall uptime",averageResponseTime:"Average response time: $TIMEms",averageResponseTimeTitle:"Average response",sevelDayResponseTime:"7-day response time",responseTimeMs:"Response time (ms)",up:"Up",down:"Down",degraded:"Degraded",ms:"ms",loading:"Loading",navGitHub:"GitHub",footer:"This page is [open source]($REPO), powered by [Upptime](https://upptime.js.org)",rateLimitExceededTitle:"Rate limit exceedeed",rateLimitExceededIntro:"You have exceeded the number of requests you can do in an hour, so you'll have to wait before accessing this website again. Alternately, you can add a GitHub Personal Access Token to continue to use this website.",rateLimitExceededWhatDoesErrorMean:"What does this error mean?",rateLimitExceededErrorMeaning:"This website uses the GitHub API to access real-time data about our websites' status. By default, GitHub allows each IP address 60 requests per hour, which you have consumed.",rateLimitExceededErrorHowCanFix:"How can I fix it?",rateLimitExceededErrorFix:"You can wait for another hour and your IP address' limit will be restored. Alternately, you can add your GitHub Personal Access Token, which gives you an additional 5,000 requests per hour.",rateLimitExceededGeneratePAT:"Learn how to generate a Personal Access Token",rateLimitExceededHasSet:"You have a personal access token set.",rateLimitExceededRemoveToken:"Remove token",rateLimitExceededGitHubPAT:"GitHub Personal Access Token",rateLimitExceededCopyPastePAT:"Copy and paste your token",rateLimitExceededSaveToken:"Save token",errorTitle:"An error occurred",errorIntro:"An error occurred in trying to get the latest status details.",errorText:"You can try again in a few moments.",errorHome:"Go to the homepage",pastScheduledMaintenance:"Past Scheduled Maintenance",scheduledMaintenance:"Scheduled Maintenance",scheduledMaintenanceSummaryStarted:"Started at $DATE for $DURATION minutes",scheduledMaintenanceSummaryStarts:"Starts at $DATE for $DURATION minutes",startedAt:"Started at",startsAt:"Starts at",duration:"Duration",durationMin:"$DURATION minutes",incidentCompleted:"Completed",incidentScheduled:"Scheduled"}};function Ae(e,t,n){const r=e.slice();return r[1]=t[n],r}function Ne(t){let n,r,s,o,a=Te["status-website"]&&!Te["status-website"].hideNavLogo&&function(t){let n,r;return{c(){n=w("img"),this.h()},l(e){n=O(e,"IMG",{alt:!0,src:!0,class:!0}),this.h()},h(){N(n,"alt",""),c(n.src,r=Te["status-website"].logoUrl)||N(n,"src",r),N(n,"class","svelte-a08hsz")},m(e,t){v(e,n,t)},p:e,d(e){e&&_(n)}}}(),i=Te["status-website"]&&!Te["status-website"].hideNavTitle&&function(t){let n,r,s=Te["status-website"].name+"";return{c(){n=w("div"),r=E(s)},l(e){n=O(e,"DIV",{});var t=k(n);r=H(t,s),t.forEach(_)},m(e,t){v(e,n,t),g(n,r)},p:e,d(e){e&&_(n)}}}();return{c(){n=w("div"),r=w("a"),a&&a.c(),s=x(),i&&i.c(),this.h()},l(e){n=O(e,"DIV",{});var t=k(n);r=O(t,"A",{href:!0,class:!0});var o=k(r);a&&a.l(o),s=U(o),i&&i.l(o),o.forEach(_),t.forEach(_),this.h()},h(){N(r,"href",o=Te["status-website"].logoHref||Te.path),N(r,"class","logo svelte-a08hsz")},m(e,t){v(e,n,t),g(n,r),a&&a.m(r,null),g(r,s),i&&i.m(r,null)},p(e,t){Te["status-website"]&&!Te["status-website"].hideNavLogo&&a.p(e,t),Te["status-website"]&&!Te["status-website"].hideNavTitle&&i.p(e,t)},d(e){e&&_(n),a&&a.d(),i&&i.d()}}}function Pe(e){let t,n,r,s,o,a,i=e[1].title+"";return{c(){t=w("li"),n=w("a"),r=E(i),a=x(),this.h()},l(e){t=O(e,"LI",{});var s=k(t);n=O(s,"A",{"aria-current":!0,href:!0,class:!0});var o=k(n);r=H(o,i),o.forEach(_),a=U(s),s.forEach(_),this.h()},h(){N(n,"aria-current",s=e[0]===("/"===e[1].href?void 0:e[1].href)?"page":void 0),N(n,"href",o=e[1].href.replace("$OWNER",Te.owner).replace("$REPO",Te.repo)),N(n,"class","svelte-a08hsz")},m(e,s){v(e,t,s),g(t,n),g(n,r),g(t,a)},p(e,t){1&t&&s!==(s=e[0]===("/"===e[1].href?void 0:e[1].href)?"page":void 0)&&N(n,"aria-current",s)},d(e){e&&_(t)}}}function ke(t){let n,r,s,o,a,i=Te["status-website"]&&Te["status-website"].logoUrl&&Ne(),c=Te["status-website"]&&Te["status-website"].navbar&&function(e){let t,n=Te["status-website"].navbar,r=[];for(let t=0;t<n.length;t+=1)r[t]=Pe(Ae(e,n,t));return{c(){for(let e=0;e<r.length;e+=1)r[e].c();t=S()},l(e){for(let t=0;t<r.length;t+=1)r[t].l(e);t=S()},m(e,n){for(let t=0;t<r.length;t+=1)r[t].m(e,n);v(e,t,n)},p(e,s){if(1&s){let o;for(n=Te["status-website"].navbar,o=0;o<n.length;o+=1){const a=Ae(e,n,o);r[o]?r[o].p(a,s):(r[o]=Pe(a),r[o].c(),r[o].m(t.parentNode,t))}for(;o<r.length;o+=1)r[o].d(1);r.length=n.length}},d(e){$(r,e),e&&_(t)}}}(t),l=Te["status-website"]&&Te["status-website"].navbarGitHub&&!Te["status-website"].navbar&&function(t){let n,r,s,o,a=Te.i18n.navGitHub+"";return{c(){n=w("li"),r=w("a"),s=E(a),this.h()},l(e){n=O(e,"LI",{});var t=k(n);r=O(t,"A",{href:!0,class:!0});var o=k(r);s=H(o,a),o.forEach(_),t.forEach(_),this.h()},h(){N(r,"href",o=`https://github.com/${Te.owner}/${Te.repo}`),N(r,"class","svelte-a08hsz")},m(e,t){v(e,n,t),g(n,r),g(r,s)},p:e,d(e){e&&_(n)}}}();return{c(){n=w("nav"),r=w("div"),i&&i.c(),s=x(),o=w("ul"),c&&c.c(),a=x(),l&&l.c(),this.h()},l(e){n=O(e,"NAV",{class:!0});var t=k(n);r=O(t,"DIV",{class:!0});var u=k(r);i&&i.l(u),s=U(u),o=O(u,"UL",{class:!0});var f=k(o);c&&c.l(f),a=U(f),l&&l.l(f),f.forEach(_),u.forEach(_),t.forEach(_),this.h()},h(){N(o,"class","svelte-a08hsz"),N(r,"class","container svelte-a08hsz"),N(n,"class","svelte-a08hsz")},m(e,t){v(e,n,t),g(n,r),i&&i.m(r,null),g(r,s),g(r,o),c&&c.m(o,null),g(o,a),l&&l.m(o,null)},p(e,[t]){Te["status-website"]&&Te["status-website"].logoUrl&&i.p(e,t),Te["status-website"]&&Te["status-website"].navbar&&c.p(e,t),Te["status-website"]&&Te["status-website"].navbarGitHub&&!Te["status-website"].navbar&&l.p(e,t)},i:e,o:e,d(e){e&&_(n),i&&i.d(),c&&c.d(),l&&l.d()}}}function Ie(e,t,n){let{segment:r}=t;return e.$$set=e=>{"segment"in e&&n(0,r=e.segment)},[r]}class Le extends ye{constructor(e){super(),we(this,e,Ie,ke,a,{segment:0})}}var Re={"":["<em>","</em>"],_:["<strong>","</strong>"],"*":["<strong>","</strong>"],"~":["<s>","</s>"],"\n":["<br />"]," ":["<br />"],"-":["<hr />"]};function Oe(e){return e.replace(RegExp("^"+(e.match(/^(\t| )+/)||"")[0],"gm"),"")}function Ce(e){return(e+"").replace(/"/g,"&quot;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function He(e,t){var n,r,s,o,a,i=/((?:^|\n+)(?:\n---+|\* \*(?: \*)+)\n)|(?:^``` *(\w*)\n([\s\S]*?)\n```$)|((?:(?:^|\n+)(?:\t|  {2,}).+)+\n*)|((?:(?:^|\n)([>*+-]|\d+\.)\s+.*)+)|(?:!\[([^\]]*?)\]\(([^)]+?)\))|(\[)|(\](?:\(([^)]+?)\))?)|(?:(?:^|\n+)([^\s].*)\n(-{3,}|={3,})(?:\n+|$))|(?:(?:^|\n+)(#{1,6})\s*(.+)(?:\n+|$))|(?:`([^`].*?)`)|(  \n\n*|\n{2,}|__|\*\*|[_*]|~~)/gm,c=[],l="",u=t||{},f=0;function d(e){var t=Re[e[1]||""],n=c[c.length-1]==e;return t?t[1]?(n?c.pop():c.push(e),t[0|n]):t[0]:e}function h(){for(var e="";c.length;)e+=d(c[c.length-1]);return e}for(e=e.replace(/^\[(.+?)\]:\s*(.+)$/gm,(function(e,t,n){return u[t.toLowerCase()]=n,""})).replace(/^\n+|\n+$/g,"");s=i.exec(e);)r=e.substring(f,s.index),f=i.lastIndex,n=s[0],r.match(/[^\\](\\\\)*\\$/)||((a=s[3]||s[4])?n='<pre class="code '+(s[4]?"poetry":s[2].toLowerCase())+'"><code'+(s[2]?' class="language-'+s[2].toLowerCase()+'"':"")+">"+Oe(Ce(a).replace(/^\n+|\n+$/g,""))+"</code></pre>":(a=s[6])?(a.match(/\./)&&(s[5]=s[5].replace(/^\d+/gm,"")),o=He(Oe(s[5].replace(/^\s*[>*+.-]/gm,""))),">"==a?a="blockquote":(a=a.match(/\./)?"ol":"ul",o=o.replace(/^(.*)(\n|$)/gm,"<li>$1</li>")),n="<"+a+">"+o+"</"+a+">"):s[8]?n='<img src="'+Ce(s[8])+'" alt="'+Ce(s[7])+'">':s[10]?(l=l.replace("<a>",'<a href="'+Ce(s[11]||u[r.toLowerCase()])+'">'),n=h()+"</a>"):s[9]?n="<a>":s[12]||s[14]?n="<"+(a="h"+(s[14]?s[14].length:s[13]>"="?1:2))+">"+He(s[12]||s[15],u)+"</"+a+">":s[16]?n="<code>"+Ce(s[16])+"</code>":(s[17]||s[1])&&(n=d(s[17]||"--"))),l+=r,l+=n;return(l+e.substring(f)+h()).replace(/^\n+|\n+$/g,"")}function Ue(e,t,n){const r=e.slice();return r[3]=t[n],r}function Me(e,t,n){const r=e.slice();return r[3]=t[n],r}function je(e,t,n){const r=e.slice();return r[8]=t[n],r}function De(t){let n;return{c(){n=w("link"),this.h()},l(e){n=O(e,"LINK",{rel:!0,href:!0}),this.h()},h(){N(n,"rel","stylesheet"),N(n,"href",`${Te.path}/themes/${(Te["status-website"]||{}).theme||"light"}.css`)},m(e,t){v(e,n,t)},p:e,d(e){e&&_(n)}}}function Ge(t){let n;return{c(){n=w("link"),this.h()},l(e){n=O(e,"LINK",{rel:!0,href:!0}),this.h()},h(){N(n,"rel","stylesheet"),N(n,"href",(Te["status-website"]||{}).themeUrl)},m(e,t){v(e,n,t)},p:e,d(e){e&&_(n)}}}function qe(t){let n,r;return{c(){n=w("script"),this.h()},l(e){n=O(e,"SCRIPT",{src:!0}),k(n).forEach(_),this.h()},h(){c(n.src,r=t[8].src)||N(n,"src",r),n.async=!!t[8].async,n.defer=!!t[8].async},m(e,t){v(e,n,t)},p:e,d(e){e&&_(n)}}}function Be(t){let n;return{c(){n=w("link"),this.h()},l(e){n=O(e,"LINK",{rel:!0,href:!0,media:!0}),this.h()},h(){N(n,"rel",t[3].rel),N(n,"href",t[3].href),N(n,"media",t[3].media)},m(e,t){v(e,n,t)},p:e,d(e){e&&_(n)}}}function ze(t){let n;return{c(){n=w("meta"),this.h()},l(e){n=O(e,"META",{name:!0,content:!0}),this.h()},h(){N(n,"name",t[3].name),N(n,"content",t[3].content)},m(e,t){v(e,n,t)},p:e,d(e){e&&_(n)}}}function Ke(t){let n,r,s,o,a,i,c,u,f,d,h,p,m,b,y,E,T,A,P=He(Te.i18n.footer.replace(/\$REPO/,`https://github.com/${Te.owner}/${Te.repo}`))+"",I=(Te["status-website"]||{}).customHeadHtml&&function(t){let n,r,s=(Te["status-website"]||{}).customHeadHtml+"";return{c(){n=new K,r=S(),this.h()},l(e){n=j(e),r=S(),this.h()},h(){n.a=r},m(e,t){n.m(s,e,t),v(e,r,t)},p:e,d(e){e&&_(r),e&&n.d()}}}();let L=((Te["status-website"]||{}).themeUrl?Ge:De)(t),R=(Te["status-website"]||{}).scripts&&function(e){let t,n=(Te["status-website"]||{}).scripts,r=[];for(let t=0;t<n.length;t+=1)r[t]=qe(je(e,n,t));return{c(){for(let e=0;e<r.length;e+=1)r[e].c();t=S()},l(e){for(let t=0;t<r.length;t+=1)r[t].l(e);t=S()},m(e,n){for(let t=0;t<r.length;t+=1)r[t].m(e,n);v(e,t,n)},p(e,s){if(0&s){let o;for(n=(Te["status-website"]||{}).scripts,o=0;o<n.length;o+=1){const a=je(e,n,o);r[o]?r[o].p(a,s):(r[o]=qe(a),r[o].c(),r[o].m(t.parentNode,t))}for(;o<r.length;o+=1)r[o].d(1);r.length=n.length}},d(e){$(r,e),e&&_(t)}}}(t),C=(Te["status-website"]||{}).links&&function(e){let t,n=(Te["status-website"]||{}).links,r=[];for(let t=0;t<n.length;t+=1)r[t]=Be(Me(e,n,t));return{c(){for(let e=0;e<r.length;e+=1)r[e].c();t=S()},l(e){for(let t=0;t<r.length;t+=1)r[t].l(e);t=S()},m(e,n){for(let t=0;t<r.length;t+=1)r[t].m(e,n);v(e,t,n)},p(e,s){if(0&s){let o;for(n=(Te["status-website"]||{}).links,o=0;o<n.length;o+=1){const a=Me(e,n,o);r[o]?r[o].p(a,s):(r[o]=Be(a),r[o].c(),r[o].m(t.parentNode,t))}for(;o<r.length;o+=1)r[o].d(1);r.length=n.length}},d(e){$(r,e),e&&_(t)}}}(t),H=(Te["status-website"]||{}).metaTags&&function(e){let t,n=(Te["status-website"]||{}).metaTags,r=[];for(let t=0;t<n.length;t+=1)r[t]=ze(Ue(e,n,t));return{c(){for(let e=0;e<r.length;e+=1)r[e].c();t=S()},l(e){for(let t=0;t<r.length;t+=1)r[t].l(e);t=S()},m(e,n){for(let t=0;t<r.length;t+=1)r[t].m(e,n);v(e,t,n)},p(e,s){if(0&s){let o;for(n=(Te["status-website"]||{}).metaTags,o=0;o<n.length;o+=1){const a=Ue(e,n,o);r[o]?r[o].p(a,s):(r[o]=ze(a),r[o].c(),r[o].m(t.parentNode,t))}for(;o<r.length;o+=1)r[o].d(1);r.length=n.length}},d(e){$(r,e),e&&_(t)}}}(t),M=Te["status-website"].css&&function(t){let n,r,s=`<style>${Te["status-website"].css}</style>`;return{c(){n=new K,r=S(),this.h()},l(e){n=j(e),r=S(),this.h()},h(){n.a=r},m(e,t){n.m(s,e,t),v(e,r,t)},p:e,d(e){e&&_(r),e&&n.d()}}}(),D=Te["status-website"].js&&function(t){let n,r,s=`<script>${Te["status-website"].js}<\/script>`;return{c(){n=new K,r=S(),this.h()},l(e){n=j(e),r=S(),this.h()},h(){n.a=r},m(e,t){n.m(s,e,t),v(e,r,t)},p:e,d(e){e&&_(r),e&&n.d()}}}(),G=(Te["status-website"]||{}).customBodyHtml&&function(t){let n,r,s=(Te["status-website"]||{}).customBodyHtml+"";return{c(){n=new K,r=S(),this.h()},l(e){n=j(e),r=S(),this.h()},h(){n.a=r},m(e,t){n.m(s,e,t),v(e,r,t)},p:e,d(e){e&&_(r),e&&n.d()}}}();p=new Le({props:{segment:t[0]}});const q=t[2].default,B=function(e,t,n,r){if(e){const s=l(e,t,n,r);return e[0](s)}}(q,t,t[1],null);return{c(){I&&I.c(),n=S(),L.c(),r=w("link"),s=w("link"),o=w("link"),R&&R.c(),a=S(),C&&C.c(),i=S(),H&&H.c(),c=S(),M&&M.c(),u=S(),D&&D.c(),f=S(),d=x(),G&&G.c(),h=x(),ge(p.$$.fragment),m=x(),b=w("main"),B&&B.c(),y=x(),E=w("footer"),T=w("p"),this.h()},l(e){const t=z('[data-svelte="svelte-ri9y7q"]',document.head);I&&I.l(t),n=S(),L.l(t),r=O(t,"LINK",{rel:!0,href:!0}),s=O(t,"LINK",{rel:!0,type:!0,href:!0}),o=O(t,"LINK",{rel:!0,type:!0,href:!0}),R&&R.l(t),a=S(),C&&C.l(t),i=S(),H&&H.l(t),c=S(),M&&M.l(t),u=S(),D&&D.l(t),f=S(),t.forEach(_),d=U(e),G&&G.l(e),h=U(e),be(p.$$.fragment,e),m=U(e),b=O(e,"MAIN",{class:!0});var l=k(b);B&&B.l(l),l.forEach(_),y=U(e),E=O(e,"FOOTER",{class:!0});var g=k(E);T=O(g,"P",{}),k(T).forEach(_),g.forEach(_),this.h()},h(){N(r,"rel","stylesheet"),N(r,"href",`${Te.path}/global.css`),N(s,"rel","icon"),N(s,"type","image/svg"),N(s,"href",(Te["status-website"]||{}).faviconSvg||(Te["status-website"]||{}).favicon||"https://raw.githubusercontent.com/koj-co/upptime/master/assets/icon.svg"),N(o,"rel","icon"),N(o,"type","image/png"),N(o,"href",(Te["status-website"]||{}).favicon||"/logo-192.png"),N(b,"class","container"),N(E,"class","svelte-jbr799")},m(e,t){I&&I.m(document.head,null),g(document.head,n),L.m(document.head,null),g(document.head,r),g(document.head,s),g(document.head,o),R&&R.m(document.head,null),g(document.head,a),C&&C.m(document.head,null),g(document.head,i),H&&H.m(document.head,null),g(document.head,c),M&&M.m(document.head,null),g(document.head,u),D&&D.m(document.head,null),g(document.head,f),v(e,d,t),G&&G.m(e,t),v(e,h,t),ve(p,e,t),v(e,m,t),v(e,b,t),B&&B.m(b,null),v(e,y,t),v(e,E,t),g(E,T),T.innerHTML=P,A=!0},p(e,[t]){(Te["status-website"]||{}).customHeadHtml&&I.p(e,t),L.p(e,t),(Te["status-website"]||{}).scripts&&R.p(e,t),(Te["status-website"]||{}).links&&C.p(e,t),(Te["status-website"]||{}).metaTags&&H.p(e,t),Te["status-website"].css&&M.p(e,t),Te["status-website"].js&&D.p(e,t),(Te["status-website"]||{}).customBodyHtml&&G.p(e,t);const n={};1&t&&(n.segment=e[0]),p.$set(n),B&&B.p&&(!A||2&t)&&function(e,t,n,r,s,o){if(s){const a=l(t,n,r,o);e.p(a,s)}}(B,q,e,e[1],A?function(e,t,n,r){if(e[2]&&r){const s=e[2](r(n));if(void 0===t.dirty)return s;if("object"==typeof s){const e=[],n=Math.max(t.dirty.length,s.length);for(let r=0;r<n;r+=1)e[r]=t.dirty[r]|s[r];return e}return t.dirty|s}return t.dirty}(q,e[1],t,null):function(e){if(e.ctx.length>32){const t=[],n=e.ctx.length/32;for(let e=0;e<n;e++)t[e]=-1;return t}return-1}(e[1]),null)},i(e){A||(de(p.$$.fragment,e),de(B,e),A=!0)},o(e){he(p.$$.fragment,e),he(B,e),A=!1},d(e){I&&I.d(e),_(n),L.d(e),_(r),_(s),_(o),R&&R.d(e),_(a),C&&C.d(e),_(i),H&&H.d(e),_(c),M&&M.d(e),_(u),D&&D.d(e),_(f),e&&_(d),G&&G.d(e),e&&_(h),_e(p,e),e&&_(m),e&&_(b),B&&B.d(e),e&&_(y),e&&_(E)}}}function Ve(e,t,n){let{$$slots:r={},$$scope:s}=t,{segment:o}=t;return e.$$set=e=>{"segment"in e&&n(0,o=e.segment),"$$scope"in e&&n(1,s=e.$$scope)},[o,s,r]}class Je extends ye{constructor(e){super(),we(this,e,Ve,Ke,a,{segment:0})}}function We(e){let t,n,r=e[1].stack+"";return{c(){t=w("pre"),n=E(r)},l(e){t=O(e,"PRE",{});var s=k(t);n=H(s,r),s.forEach(_)},m(e,r){v(e,t,r),g(t,n)},p(e,t){2&t&&r!==(r=e[1].stack+"")&&D(n,r)},d(e){e&&_(t)}}}function Fe(t){let n,r,s,o,a,i,c,l,u,f=t[1].message+"";document.title=n=t[0];let d=t[2]&&t[1].stack&&We(t);return{c(){r=x(),s=w("h1"),o=E(t[0]),a=x(),i=w("p"),c=E(f),l=x(),d&&d.c(),u=S(),this.h()},l(e){z('[data-svelte="svelte-1moakz"]',document.head).forEach(_),r=U(e),s=O(e,"H1",{class:!0});var n=k(s);o=H(n,t[0]),n.forEach(_),a=U(e),i=O(e,"P",{class:!0});var h=k(i);c=H(h,f),h.forEach(_),l=U(e),d&&d.l(e),u=S(),this.h()},h(){N(s,"class","svelte-17w3omn"),N(i,"class","svelte-17w3omn")},m(e,t){v(e,r,t),v(e,s,t),g(s,o),v(e,a,t),v(e,i,t),g(i,c),v(e,l,t),d&&d.m(e,t),v(e,u,t)},p(e,[t]){1&t&&n!==(n=e[0])&&(document.title=n),1&t&&D(o,e[0]),2&t&&f!==(f=e[1].message+"")&&D(c,f),e[2]&&e[1].stack?d?d.p(e,t):(d=We(e),d.c(),d.m(u.parentNode,u)):d&&(d.d(1),d=null)},i:e,o:e,d(e){e&&_(r),e&&_(s),e&&_(a),e&&_(i),e&&_(l),d&&d.d(e),e&&_(u)}}}function Ye(e,t,n){let{status:r}=t,{error:s}=t;return e.$$set=e=>{"status"in e&&n(0,r=e.status),"error"in e&&n(1,s=e.error)},[r,s,false]}class Xe extends ye{constructor(e){super(),we(this,e,Ye,Fe,a,{status:0,error:1})}}function Qe(e){let n,r,s;const o=[e[4].props];var a=e[4].component;function i(e){let n={};for(let e=0;e<o.length;e+=1)n=t(n,o[e]);return{props:n}}return a&&(n=new a(i())),{c(){n&&ge(n.$$.fragment),r=S()},l(e){n&&be(n.$$.fragment,e),r=S()},m(e,t){n&&ve(n,e,t),v(e,r,t),s=!0},p(e,t){const s=16&t?pe(o,[me(e[4].props)]):{};if(a!==(a=e[4].component)){if(n){ue();const e=n;he(e.$$.fragment,1,0,(()=>{_e(e,1)})),fe()}a?(n=new a(i()),ge(n.$$.fragment),de(n.$$.fragment,1),ve(n,r.parentNode,r)):n=null}else a&&n.$set(s)},i(e){s||(n&&de(n.$$.fragment,e),s=!0)},o(e){n&&he(n.$$.fragment,e),s=!1},d(e){e&&_(r),n&&_e(n,e)}}}function Ze(e){let t,n;return t=new Xe({props:{error:e[0],status:e[1]}}),{c(){ge(t.$$.fragment)},l(e){be(t.$$.fragment,e)},m(e,r){ve(t,e,r),n=!0},p(e,n){const r={};1&n&&(r.error=e[0]),2&n&&(r.status=e[1]),t.$set(r)},i(e){n||(de(t.$$.fragment,e),n=!0)},o(e){he(t.$$.fragment,e),n=!1},d(e){_e(t,e)}}}function et(e){let t,n,r,s;const o=[Ze,Qe],a=[];function i(e,t){return e[0]?0:1}return t=i(e),n=a[t]=o[t](e),{c(){n.c(),r=S()},l(e){n.l(e),r=S()},m(e,n){a[t].m(e,n),v(e,r,n),s=!0},p(e,s){let c=t;t=i(e),t===c?a[t].p(e,s):(ue(),he(a[c],1,1,(()=>{a[c]=null})),fe(),n=a[t],n?n.p(e,s):(n=a[t]=o[t](e),n.c()),de(n,1),n.m(r.parentNode,r))},i(e){s||(de(n),s=!0)},o(e){he(n),s=!1},d(e){a[t].d(e),e&&_(r)}}}function tt(e){let n,r;const s=[{segment:e[2][0]},e[3].props];let o={$$slots:{default:[et]},$$scope:{ctx:e}};for(let e=0;e<s.length;e+=1)o=t(o,s[e]);return n=new Je({props:o}),{c(){ge(n.$$.fragment)},l(e){be(n.$$.fragment,e)},m(e,t){ve(n,e,t),r=!0},p(e,[t]){const r=12&t?pe(s,[4&t&&{segment:e[2][0]},8&t&&me(e[3].props)]):{};147&t&&(r.$$scope={dirty:t,ctx:e}),n.$set(r)},i(e){r||(de(n.$$.fragment,e),r=!0)},o(e){he(n.$$.fragment,e),r=!1},d(e){_e(n,e)}}}function nt(e,t,n){let{stores:r}=t,{error:s}=t,{status:o}=t,{segments:a}=t,{level0:i}=t,{level1:c=null}=t,{notify:l}=t;var u,f;return F(l),u=Se,f=r,J().$$.context.set(u,f),e.$$set=e=>{"stores"in e&&n(5,r=e.stores),"error"in e&&n(0,s=e.error),"status"in e&&n(1,o=e.status),"segments"in e&&n(2,a=e.segments),"level0"in e&&n(3,i=e.level0),"level1"in e&&n(4,c=e.level1),"notify"in e&&n(6,l=e.notify)},[s,o,a,i,c,r,l]}class rt extends ye{constructor(e){super(),we(this,e,nt,tt,a,{stores:5,error:0,status:1,segments:2,level0:3,level1:4,notify:6})}}const st=[],ot=[{js:()=>Promise.all([import("./index.87256be1.js"),__inject_styles(["client-04be1abb.css","createOctokit-865318f3.css","index-5f8caab7.css"])]).then((function(e){return e[0]}))},{js:()=>Promise.all([import("./rate-limit-exceeded.8409e5ef.js"),__inject_styles(["client-04be1abb.css","rate-limit-exceeded-ec20dc01.css"])]).then((function(e){return e[0]}))},{js:()=>Promise.all([import("./_number_.6c05d998.js"),__inject_styles(["client-04be1abb.css","createOctokit-865318f3.css","_number_-c4ffc2b4.css"])]).then((function(e){return e[0]}))},{js:()=>Promise.all([import("./_number_.5b799289.js"),__inject_styles(["client-04be1abb.css","createOctokit-865318f3.css","_number_-bc1bb552.css"])]).then((function(e){return e[0]}))},{js:()=>Promise.all([import("./error.450d75b1.js"),__inject_styles(["client-04be1abb.css","error-64ad0d96.css"])]).then((function(e){return e[0]}))}],at=(it=decodeURIComponent,[{pattern:/^\/$/,parts:[{i:0}]},{pattern:/^\/rate-limit-exceeded\/?$/,parts:[{i:1}]},{pattern:/^\/incident\/([^/]+?)\/?$/,parts:[null,{i:2,params:e=>({number:it(e[1])})}]},{pattern:/^\/history\/([^/]+?)\/?$/,parts:[null,{i:3,params:e=>({number:it(e[1])})}]},{pattern:/^\/error\/?$/,parts:[{i:4}]}]);var it;
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
function ct(e,t,n,r){return new(n||(n=Promise))((function(s,o){function a(e){try{c(r.next(e))}catch(e){o(e)}}function i(e){try{c(r.throw(e))}catch(e){o(e)}}function c(e){var t;e.done?s(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,i)}c((r=r.apply(e,t||[])).next())}))}function lt(e){for(;e&&"A"!==e.nodeName.toUpperCase();)e=e.parentNode;return e}let ut,ft=1;const dt="undefined"!=typeof history?history:{pushState:()=>{},replaceState:()=>{},scrollRestoration:"auto"},ht={};let pt,mt;function gt(e){const t=Object.create(null);return e.length?(e=>"undefined"!=typeof URLSearchParams?[...new URLSearchParams(e).entries()]:e.slice(1).split("&").map((e=>{const[,t,n=""]=/([^=]*)(?:=([\S\s]*))?/.exec(decodeURIComponent(e.replace(/\+/g," ")));return[t,n]})))(e).reduce(((e,[t,n])=>("string"==typeof e[t]&&(e[t]=[e[t]]),"object"==typeof e[t]?e[t].push(n):e[t]=n,e)),t):t}function bt(e){if(e.origin!==location.origin)return null;if(!e.pathname.startsWith(pt))return null;let t=e.pathname.slice(pt.length);if(""===t&&(t="/"),!st.some((e=>e.test(t))))for(let n=0;n<at.length;n+=1){const r=at[n],s=r.pattern.exec(t);if(s){const n=gt(e.search),o=r.parts[r.parts.length-1],a=o.params?o.params(s):{},i={host:location.host,path:t,query:n,params:a};return{href:e.href,route:r,match:s,page:i}}}}function vt(e){if(1!==function(e){return null===e.which?e.button:e.which}(e))return;if(e.metaKey||e.ctrlKey||e.shiftKey||e.altKey)return;if(e.defaultPrevented)return;const t=lt(e.target);if(!t)return;if(!t.href)return;const n="object"==typeof t.href&&"SVGAnimatedString"===t.href.constructor.name,r=String(n?t.href.baseVal:t.href);if(r===location.href)return void(location.hash||e.preventDefault());if(t.hasAttribute("download")||"external"===t.getAttribute("rel"))return;if(n?t.target.baseVal:t.target)return;const s=new URL(r);if(s.pathname===location.pathname&&s.search===location.search)return;const o=bt(s);if(o){wt(o,null,t.hasAttribute("sapper:noscroll"),s.hash),e.preventDefault(),dt.pushState({id:ut},"",s.href)}}function _t(){return{x:pageXOffset,y:pageYOffset}}function $t(e){if(ht[ut]=_t(),e.state){const t=bt(new URL(location.href));t?wt(t,e.state.id):location.href=location.href}else!function(e){ft=e}(ft+1),function(e){ut=e}(ft),dt.replaceState({id:ut},"",location.href)}function wt(e,t,n,r){return ct(this,void 0,void 0,(function*(){const s=!!t;if(s)ut=t;else{const e=_t();ht[ut]=e,ut=t=++ft,ht[ut]=n?e:{x:0,y:0}}if(yield mt(e),document.activeElement&&document.activeElement instanceof HTMLElement&&document.activeElement.blur(),!n){let e,n=ht[t];r&&(e=document.getElementById(r.slice(1)),e&&(n={x:0,y:e.getBoundingClientRect().top+scrollY})),ht[ut]=n,n&&(s||e)?scrollTo(n.x,n.y):scrollTo(0,0)}}))}function yt(e){let t=e.baseURI;if(!t){const n=e.getElementsByTagName("base");t=n.length?n[0].href:e.URL}return t}let Et,xt=null;function St(e){const t=lt(e.target);t&&t.hasAttribute("sapper:prefetch")&&function(e){const t=bt(new URL(e,yt(document)));if(t)xt&&e===xt.href||(xt={href:e,promise:qt(t)}),xt.promise}(t.href)}function Tt(e){clearTimeout(Et),Et=setTimeout((()=>{St(e)}),20)}function At(e,t={noscroll:!1,replaceState:!1}){const n=bt(new URL(e,yt(document)));if(n){const r=wt(n,null,t.noscroll);return dt[t.replaceState?"replaceState":"pushState"]({id:ut},"",e),r}return location.href=e,new Promise((()=>{}))}const Nt="undefined"!=typeof __SAPPER__&&__SAPPER__;let Pt,kt,It,Lt=!1,Rt=[],Ot="{}";const Ct={page:function(e){const t=xe(e);let n=!0;return{notify:function(){n=!0,t.update((e=>e))},set:function(e){n=!1,t.set(e)},subscribe:function(e){let r;return t.subscribe((t=>{(void 0===r||n&&t!==r)&&e(r=t)}))}}}({}),preloading:xe(null),session:xe(Nt&&Nt.session)};let Ht,Ut,Mt;function jt(e,t){const{error:n}=e;return Object.assign({error:n},t)}function Dt(e){return ct(this,void 0,void 0,(function*(){Pt&&Ct.preloading.set(!0);const t=function(e){return xt&&xt.href===e.href?xt.promise:qt(e)}(e),n=kt={},r=yield t,{redirect:s}=r;if(n===kt)if(s)yield At(s.location,{replaceState:!0});else{const{props:t,branch:n}=r;yield Gt(n,t,jt(t,e.page))}}))}function Gt(e,t,n){return ct(this,void 0,void 0,(function*(){Ct.page.set(n),Ct.preloading.set(!1),Pt?Pt.$set(t):(t.stores={page:{subscribe:Ct.page.subscribe},preloading:{subscribe:Ct.preloading.subscribe},session:Ct.session},t.level0={props:yield It},t.notify=Ct.page.notify,Pt=new rt({target:Mt,props:t,hydrate:!0})),Rt=e,Ot=JSON.stringify(n.query),Lt=!0,Ut=!1}))}function qt(e){return ct(this,void 0,void 0,(function*(){const{route:t,page:n}=e,r=n.path.split("/").filter(Boolean);let s=null;const o={error:null,status:200,segments:[r[0]]},a={fetch:(e,t)=>fetch(e,t),redirect:(e,t)=>{if(s&&(s.statusCode!==e||s.location!==t))throw new Error("Conflicting redirects");s={statusCode:e,location:t}},error:(e,t)=>{o.error="string"==typeof t?new Error(t):t,o.status=e}};if(!It){const e=()=>({});It=Nt.preloaded[0]||e.call(a,{host:n.host,path:n.path,query:n.query,params:{}},Ht)}let i,c=1;try{const s=JSON.stringify(n.query),l=t.pattern.exec(n.path);let u=!1;i=yield Promise.all(t.parts.map(((t,i)=>ct(this,void 0,void 0,(function*(){const f=r[i];if(function(e,t,n,r){if(r!==Ot)return!0;const s=Rt[e];return!!s&&(t!==s.segment||!(!s.match||JSON.stringify(s.match.slice(1,e+2))===JSON.stringify(n.slice(1,e+2)))||void 0)}(i,f,l,s)&&(u=!0),o.segments[c]=r[i+1],!t)return{segment:f};const d=c++;let h;if(Ut||u||!Rt[i]||Rt[i].part!==t.i){u=!1;const{default:r,preload:s}=yield ot[t.i].js();let o;o=Lt||!Nt.preloaded[i+1]?s?yield s.call(a,{host:n.host,path:n.path,query:n.query,params:t.params?t.params(e.match):{}},Ht):{}:Nt.preloaded[i+1],h={component:r,props:o,segment:f,match:l,part:t.i}}else h=Rt[i];return o[`level${d}`]=h})))))}catch(e){o.error=e,o.status=500,i=[]}return{redirect:s,props:o,branch:i}}))}var Bt,zt,Kt;Ct.session.subscribe((e=>ct(void 0,void 0,void 0,(function*(){if(Ht=e,!Lt)return;Ut=!0;const t=bt(new URL(location.href)),n=kt={},{redirect:r,props:s,branch:o}=yield qt(t);n===kt&&(r?yield At(r.location,{replaceState:!0}):yield Gt(o,s,jt(s,t.page)))})))),Bt={target:document.querySelector("#sapper")},zt=Bt.target,Mt=zt,Kt=Nt.baseUrl,pt=Kt,mt=Dt,"scrollRestoration"in dt&&(dt.scrollRestoration="manual"),addEventListener("beforeunload",(()=>{dt.scrollRestoration="auto"})),addEventListener("load",(()=>{dt.scrollRestoration="manual"})),addEventListener("click",vt),addEventListener("popstate",$t),addEventListener("touchstart",St),addEventListener("mousemove",Tt),Nt.error?Promise.resolve().then((()=>function(){const{host:e,pathname:t,search:n}=location,{session:r,preloaded:s,status:o,error:a}=Nt;It||(It=s&&s[0]);const i={error:a,status:o,session:r,level0:{props:It},level1:{props:{status:o,error:a},component:Xe},segments:s},c=gt(n);Gt([],i,{host:e,path:t,query:c,params:{},error:a})}())):Promise.resolve().then((()=>{const{hash:e,href:t}=location;dt.replaceState({id:ft},"",t);const n=bt(new URL(location.href));if(n)return wt(n,ft,!0,e)}));export{_e as A,T as B,s as C,Q as D,j as E,c as F,f as G,K as H,z as I,He as J,y as K,C as L,At as M,G as N,A as O,t as P,P as Q,pe as R,ye as S,F as T,Y as U,u as V,me as W,re as X,B as Y,k as a,H as b,O as c,_ as d,w as e,N as f,v as g,g as h,we as i,x as j,U as k,ue as l,he as m,e as n,fe as o,de as p,W as q,Te as r,a as s,E as t,D as u,S as v,$ as w,ge as x,be as y,ve as z};

import __inject_styles from './inject_styles.803b7e80.js';