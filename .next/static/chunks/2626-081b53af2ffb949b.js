"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2626],{2085:(t,e,a)=>{a.d(e,{F:()=>i});var n=a(2596);let r=t=>"boolean"==typeof t?`${t}`:0===t?"0":t,o=n.$,i=(t,e)=>a=>{var n;if((null==e?void 0:e.variants)==null)return o(t,null==a?void 0:a.class,null==a?void 0:a.className);let{variants:i,defaultVariants:l}=e,s=Object.keys(i).map(t=>{let e=null==a?void 0:a[t],n=null==l?void 0:l[t];if(null===e)return null;let o=r(e)||r(n);return i[t][o]}),c=a&&Object.entries(a).reduce((t,e)=>{let[a,n]=e;return void 0===n||(t[a]=n),t},{});return o(t,s,null==e?void 0:null===(n=e.compoundVariants)||void 0===n?void 0:n.reduce((t,e)=>{let{class:a,className:n,...r}=e;return Object.entries(r).every(t=>{let[e,a]=t;return Array.isArray(a)?a.includes({...l,...c}[e]):({...l,...c})[e]===a})?[...t,a,n]:t},[]),null==a?void 0:a.class,null==a?void 0:a.className)}},5585:(t,e,a)=>{a.d(e,{A:()=>r});var n={};!function t(e,a,n,r){var o,i,l,s,c,h,u,f,d,m,p,g=!!(e.Worker&&e.Blob&&e.Promise&&e.OffscreenCanvas&&e.OffscreenCanvasRenderingContext2D&&e.HTMLCanvasElement&&e.HTMLCanvasElement.prototype.transferControlToOffscreen&&e.URL&&e.URL.createObjectURL),b="function"==typeof Path2D&&"function"==typeof DOMMatrix;function v(){}function M(t){var n=a.exports.Promise,r=void 0!==n?n:e.Promise;return"function"==typeof r?new r(t):(t(v,v),null)}var y=(o=function(){if(!e.OffscreenCanvas)return!1;var t=new OffscreenCanvas(1,1),a=t.getContext("2d");a.fillRect(0,0,1,1);var n=t.transferToImageBitmap();try{a.createPattern(n,"no-repeat")}catch(t){return!1}return!0}(),i=new Map,{transform:function(t){if(o)return t;if(i.has(t))return i.get(t);var e=new OffscreenCanvas(t.width,t.height);return e.getContext("2d").drawImage(t,0,0),i.set(t,e),e},clear:function(){i.clear()}}),w=(c=Math.floor(1e3/60),h={},u=0,"function"==typeof requestAnimationFrame&&"function"==typeof cancelAnimationFrame?(l=function(t){var e=Math.random();return h[e]=requestAnimationFrame(function a(n){u===n||u+c-1<n?(u=n,delete h[e],t()):h[e]=requestAnimationFrame(a)}),e},s=function(t){h[t]&&cancelAnimationFrame(h[t])}):(l=function(t){return setTimeout(t,c)},s=function(t){return clearTimeout(t)}),{frame:l,cancel:s}),x=(m={},function(){if(f)return f;if(!n&&g){var e=["var CONFETTI, SIZE = {}, module = {};","("+t.toString()+")(this, module, true, SIZE);","onmessage = function(msg) {","  if (msg.data.options) {","    CONFETTI(msg.data.options).then(function () {","      if (msg.data.callback) {","        postMessage({ callback: msg.data.callback });","      }","    });","  } else if (msg.data.reset) {","    CONFETTI && CONFETTI.reset();","  } else if (msg.data.resize) {","    SIZE.width = msg.data.resize.width;","    SIZE.height = msg.data.resize.height;","  } else if (msg.data.canvas) {","    SIZE.width = msg.data.canvas.width;","    SIZE.height = msg.data.canvas.height;","    CONFETTI = module.exports.create(msg.data.canvas);","  }","}"].join("\n");try{f=new Worker(URL.createObjectURL(new Blob([e])))}catch(t){return"function"==typeof console.warn&&console.warn("\uD83C\uDF8A Could not load worker",t),null}!function(t){function e(e,a){t.postMessage({options:e||{},callback:a})}t.init=function(e){var a=e.transferControlToOffscreen();t.postMessage({canvas:a},[a])},t.fire=function(a,n,r){if(d)return e(a,null),d;var o=Math.random().toString(36).slice(2);return d=M(function(n){function i(e){e.data.callback===o&&(delete m[o],t.removeEventListener("message",i),d=null,y.clear(),r(),n())}t.addEventListener("message",i),e(a,o),m[o]=i.bind(null,{data:{callback:o}})})},t.reset=function(){for(var e in t.postMessage({reset:!0}),m)m[e](),delete m[e]}}(f)}return f}),C={particleCount:50,angle:90,spread:45,startVelocity:45,decay:.9,gravity:1,drift:0,ticks:200,x:.5,y:.5,shapes:["square","circle"],zIndex:100,colors:["#26ccff","#a25afd","#ff5e7e","#88ff5a","#fcff42","#ffa62d","#ff36ff"],disableForReducedMotion:!1,scalar:1};function k(t,e,a){var n,r;return r=t&&null!=t[e]?t[e]:C[e],a?a(r):r}function E(t){return t<0?0:Math.floor(t)}function I(t){return parseInt(t,16)}function T(t){return t.map(A)}function A(t){var e=String(t).replace(/[^0-9a-f]/gi,"");return e.length<6&&(e=e[0]+e[0]+e[1]+e[1]+e[2]+e[2]),{r:I(e.substring(0,2)),g:I(e.substring(2,4)),b:I(e.substring(4,6))}}function P(t){t.width=document.documentElement.clientWidth,t.height=document.documentElement.clientHeight}function S(t){var e=t.getBoundingClientRect();t.width=e.width,t.height=e.height}function O(t,a){var o,i=!t,l=!!k(a||{},"resize"),s=!1,c=k(a,"disableForReducedMotion",Boolean),h=g&&k(a||{},"useWorker")?x():null,u=i?P:S,f=!!t&&!!h&&!!t.__confetti_initialized,d="function"==typeof matchMedia&&matchMedia("(prefers-reduced-motion)").matches;function m(a){var m,p=c||k(a,"disableForReducedMotion",Boolean),g=k(a,"zIndex",Number);if(p&&d)return M(function(t){t()});i&&o?t=o.canvas:i&&!t&&((m=document.createElement("canvas")).style.position="fixed",m.style.top="0px",m.style.left="0px",m.style.pointerEvents="none",m.style.zIndex=g,t=m,document.body.appendChild(t)),l&&!f&&u(t);var v={width:t.width,height:t.height};function x(){if(h){var e={getBoundingClientRect:function(){if(!i)return t.getBoundingClientRect()}};u(e),h.postMessage({resize:{width:e.width,height:e.height}});return}v.width=v.height=null}function C(){o=null,l&&(s=!1,e.removeEventListener("resize",x)),i&&t&&(document.body.contains(t)&&document.body.removeChild(t),t=null,f=!1)}return(h&&!f&&h.init(t),f=!0,h&&(t.__confetti_initialized=!0),l&&!s&&(s=!0,e.addEventListener("resize",x,!1)),h)?h.fire(a,v,C):function(e,a,i){for(var l,s,c,h,f,d,m,p=k(e,"particleCount",E),g=k(e,"angle",Number),v=k(e,"spread",Number),x=k(e,"startVelocity",Number),C=k(e,"decay",Number),I=k(e,"gravity",Number),A=k(e,"drift",Number),P=k(e,"colors",T),S=k(e,"ticks",Number),O=k(e,"shapes"),N=k(e,"scalar"),B=!!k(e,"flat"),F=((l=k(e,"origin",Object)).x=k(l,"x",Number),l.y=k(l,"y",Number),l),R=p,z=[],L=t.width*F.x,j=t.height*F.y;R--;)z.push(function(t){var e=t.angle*(Math.PI/180),a=t.spread*(Math.PI/180);return{x:t.x,y:t.y,wobble:10*Math.random(),wobbleSpeed:Math.min(.11,.1*Math.random()+.05),velocity:.5*t.startVelocity+Math.random()*t.startVelocity,angle2D:-e+(.5*a-Math.random()*a),tiltAngle:(.5*Math.random()+.25)*Math.PI,color:t.color,shape:t.shape,tick:0,totalTicks:t.ticks,decay:t.decay,drift:t.drift,random:Math.random()+2,tiltSin:0,tiltCos:0,wobbleX:0,wobbleY:0,gravity:3*t.gravity,ovalScalar:.6,scalar:t.scalar,flat:t.flat}}({x:L,y:j,angle:g,spread:v,startVelocity:x,color:P[R%P.length],shape:O[Math.floor(Math.random()*(O.length-0))+0],ticks:S,decay:C,gravity:I,drift:A,scalar:N,flat:B}));return o?o.addFettis(z):(s=t,f=z.slice(),d=s.getContext("2d"),m=M(function(t){function e(){c=h=null,d.clearRect(0,0,a.width,a.height),y.clear(),i(),t()}c=w.frame(function t(){n&&(a.width!==r.width||a.height!==r.height)&&(a.width=s.width=r.width,a.height=s.height=r.height),a.width||a.height||(u(s),a.width=s.width,a.height=s.height),d.clearRect(0,0,a.width,a.height),(f=f.filter(function(t){return function(t,e){e.x+=Math.cos(e.angle2D)*e.velocity+e.drift,e.y+=Math.sin(e.angle2D)*e.velocity+e.gravity,e.velocity*=e.decay,e.flat?(e.wobble=0,e.wobbleX=e.x+10*e.scalar,e.wobbleY=e.y+10*e.scalar,e.tiltSin=0,e.tiltCos=0,e.random=1):(e.wobble+=e.wobbleSpeed,e.wobbleX=e.x+10*e.scalar*Math.cos(e.wobble),e.wobbleY=e.y+10*e.scalar*Math.sin(e.wobble),e.tiltAngle+=.1,e.tiltSin=Math.sin(e.tiltAngle),e.tiltCos=Math.cos(e.tiltAngle),e.random=Math.random()+2);var a,n,r,o,i,l,s,c,h,u,f,d,m,p,g,v,M=e.tick++/e.totalTicks,w=e.x+e.random*e.tiltCos,x=e.y+e.random*e.tiltSin,C=e.wobbleX+e.random*e.tiltCos,k=e.wobbleY+e.random*e.tiltSin;if(t.fillStyle="rgba("+e.color.r+", "+e.color.g+", "+e.color.b+", "+(1-M)+")",t.beginPath(),b&&"path"===e.shape.type&&"string"==typeof e.shape.path&&Array.isArray(e.shape.matrix)){t.fill((a=e.shape.path,n=e.shape.matrix,r=e.x,o=e.y,i=.1*Math.abs(C-w),l=.1*Math.abs(k-x),s=Math.PI/10*e.wobble,c=new Path2D(a),(h=new Path2D).addPath(c,new DOMMatrix(n)),(u=new Path2D).addPath(h,new DOMMatrix([Math.cos(s)*i,Math.sin(s)*i,-Math.sin(s)*l,Math.cos(s)*l,r,o])),u))}else if("bitmap"===e.shape.type){var E=Math.PI/10*e.wobble,I=.1*Math.abs(C-w),T=.1*Math.abs(k-x),A=e.shape.bitmap.width*e.scalar,P=e.shape.bitmap.height*e.scalar,S=new DOMMatrix([Math.cos(E)*I,Math.sin(E)*I,-Math.sin(E)*T,Math.cos(E)*T,e.x,e.y]);S.multiplySelf(new DOMMatrix(e.shape.matrix));var O=t.createPattern(y.transform(e.shape.bitmap),"no-repeat");O.setTransform(S),t.globalAlpha=1-M,t.fillStyle=O,t.fillRect(e.x-A/2,e.y-P/2,A,P),t.globalAlpha=1}else if("circle"===e.shape)t.ellipse?t.ellipse(e.x,e.y,Math.abs(C-w)*e.ovalScalar,Math.abs(k-x)*e.ovalScalar,Math.PI/10*e.wobble,0,2*Math.PI):(f=e.x,d=e.y,m=Math.abs(C-w)*e.ovalScalar,p=Math.abs(k-x)*e.ovalScalar,g=Math.PI/10*e.wobble,v=2*Math.PI,t.save(),t.translate(f,d),t.rotate(g),t.scale(m,p),t.arc(0,0,1,0,v,void 0),t.restore());else if("star"===e.shape)for(var N=Math.PI/2*3,B=4*e.scalar,F=8*e.scalar,R=e.x,z=e.y,L=5,j=Math.PI/5;L--;)R=e.x+Math.cos(N)*F,z=e.y+Math.sin(N)*F,t.lineTo(R,z),N+=j,R=e.x+Math.cos(N)*B,z=e.y+Math.sin(N)*B,t.lineTo(R,z),N+=j;else t.moveTo(Math.floor(e.x),Math.floor(e.y)),t.lineTo(Math.floor(e.wobbleX),Math.floor(x)),t.lineTo(Math.floor(C),Math.floor(k)),t.lineTo(Math.floor(w),Math.floor(e.wobbleY));return t.closePath(),t.fill(),e.tick<e.totalTicks}(d,t)})).length?c=w.frame(t):e()}),h=e}),(o={addFettis:function(t){return f=f.concat(t),m},canvas:s,promise:m,reset:function(){c&&w.cancel(c),h&&h()}}).promise)}(a,v,C)}return m.reset=function(){h&&h.reset(),o&&o.reset()},m}function N(){return p||(p=O(null,{useWorker:!0,resize:!0})),p}a.exports=function(){return N().apply(this,arguments)},a.exports.reset=function(){N().reset()},a.exports.create=O,a.exports.shapeFromPath=function(t){if(!b)throw Error("path confetti are not supported in this browser");"string"==typeof t?n=t:(n=t.path,r=t.matrix);var e=new Path2D(n),a=document.createElement("canvas").getContext("2d");if(!r){for(var n,r,o,i,l=1e3,s=1e3,c=0,h=0,u=0;u<1e3;u+=2)for(var f=0;f<1e3;f+=2)a.isPointInPath(e,u,f,"nonzero")&&(l=Math.min(l,u),s=Math.min(s,f),c=Math.max(c,u),h=Math.max(h,f));o=c-l;var d=Math.min(10/o,10/(i=h-s));r=[d,0,0,d,-Math.round(o/2+l)*d,-Math.round(i/2+s)*d]}return{type:"path",path:n,matrix:r}},a.exports.shapeFromText=function(t){var e,a=1,n="#000000",r='"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji", "EmojiOne Color", "Android Emoji", "Twemoji Mozilla", "system emoji", sans-serif';"string"==typeof t?e=t:(e=t.text,a="scalar"in t?t.scalar:a,r="fontFamily"in t?t.fontFamily:r,n="color"in t?t.color:n);var o=10*a,i=""+o+"px "+r,l=new OffscreenCanvas(o,o),s=l.getContext("2d");s.font=i;var c=s.measureText(e),h=Math.ceil(c.actualBoundingBoxRight+c.actualBoundingBoxLeft),u=Math.ceil(c.actualBoundingBoxAscent+c.actualBoundingBoxDescent),f=c.actualBoundingBoxLeft+2,d=c.actualBoundingBoxAscent+2;h+=4,u+=4,(s=(l=new OffscreenCanvas(h,u)).getContext("2d")).font=i,s.fillStyle=n,s.fillText(e,f,d);var m=1/a;return{type:"bitmap",bitmap:l.transferToImageBitmap(),matrix:[m,0,0,m,-h*m/2,-u*m/2]}}}(function(){return"undefined"!=typeof window?window:"undefined"!=typeof self?self:this||{}}(),n,!1);let r=n.exports;n.exports.create},7550:(t,e,a)=>{a.d(e,{A:()=>n});let n=(0,a(9946).A)("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]])},9946:(t,e,a)=>{a.d(e,{A:()=>s});var n=a(2115);let r=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),o=function(){for(var t=arguments.length,e=Array(t),a=0;a<t;a++)e[a]=arguments[a];return e.filter((t,e,a)=>!!t&&""!==t.trim()&&a.indexOf(t)===e).join(" ").trim()};var i={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};let l=(0,n.forwardRef)((t,e)=>{let{color:a="currentColor",size:r=24,strokeWidth:l=2,absoluteStrokeWidth:s,className:c="",children:h,iconNode:u,...f}=t;return(0,n.createElement)("svg",{ref:e,...i,width:r,height:r,stroke:a,strokeWidth:s?24*Number(l)/Number(r):l,className:o("lucide",c),...f},[...u.map(t=>{let[e,a]=t;return(0,n.createElement)(e,a)}),...Array.isArray(h)?h:[h]])}),s=(t,e)=>{let a=(0,n.forwardRef)((a,i)=>{let{className:s,...c}=a;return(0,n.createElement)(l,{ref:i,iconNode:e,className:o("lucide-".concat(r(t)),s),...c})});return a.displayName="".concat(t),a}}}]);