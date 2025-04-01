"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8979],{133:(t,e,i)=>{i.d(e,{A:()=>n});let n=(0,i(9946).A)("RotateCcw",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]])},729:t=>{var e={linear:function(t,e,i,n){return(i-e)*t/n+e},easeInQuad:function(t,e,i,n){return(i-e)*(t/=n)*t+e},easeOutQuad:function(t,e,i,n){return-(i-e)*(t/=n)*(t-2)+e},easeInOutQuad:function(t,e,i,n){var s=i-e;return(t/=n/2)<1?s/2*t*t+e:-s/2*(--t*(t-2)-1)+e},easeInCubic:function(t,e,i,n){return(i-e)*(t/=n)*t*t+e},easeOutCubic:function(t,e,i,n){return(i-e)*((t=t/n-1)*t*t+1)+e},easeInOutCubic:function(t,e,i,n){var s=i-e;return(t/=n/2)<1?s/2*t*t*t+e:s/2*((t-=2)*t*t+2)+e},easeInQuart:function(t,e,i,n){return(i-e)*(t/=n)*t*t*t+e},easeOutQuart:function(t,e,i,n){return-(i-e)*((t=t/n-1)*t*t*t-1)+e},easeInOutQuart:function(t,e,i,n){var s=i-e;return(t/=n/2)<1?s/2*t*t*t*t+e:-s/2*((t-=2)*t*t*t-2)+e},easeInQuint:function(t,e,i,n){return(i-e)*(t/=n)*t*t*t*t+e},easeOutQuint:function(t,e,i,n){return(i-e)*((t=t/n-1)*t*t*t*t+1)+e},easeInOutQuint:function(t,e,i,n){var s=i-e;return(t/=n/2)<1?s/2*t*t*t*t*t+e:s/2*((t-=2)*t*t*t*t+2)+e},easeInSine:function(t,e,i,n){var s=i-e;return-s*Math.cos(t/n*(Math.PI/2))+s+e},easeOutSine:function(t,e,i,n){return(i-e)*Math.sin(t/n*(Math.PI/2))+e},easeInOutSine:function(t,e,i,n){return-(i-e)/2*(Math.cos(Math.PI*t/n)-1)+e},easeInExpo:function(t,e,i,n){return 0==t?e:(i-e)*Math.pow(2,10*(t/n-1))+e},easeOutExpo:function(t,e,i,n){var s=i-e;return t==n?e+s:s*(-Math.pow(2,-10*t/n)+1)+e},easeInOutExpo:function(t,e,i,n){var s=i-e;return 0===t?e:t===n?e+s:(t/=n/2)<1?s/2*Math.pow(2,10*(t-1))+e:s/2*(-Math.pow(2,-10*--t)+2)+e},easeInCirc:function(t,e,i,n){return-(i-e)*(Math.sqrt(1-(t/=n)*t)-1)+e},easeOutCirc:function(t,e,i,n){return(i-e)*Math.sqrt(1-(t=t/n-1)*t)+e},easeInOutCirc:function(t,e,i,n){var s=i-e;return(t/=n/2)<1?-s/2*(Math.sqrt(1-t*t)-1)+e:s/2*(Math.sqrt(1-(t-=2)*t)+1)+e},easeInElastic:function(t,e,i,n){var s,r,a,o=i-e;return(a=1.70158,r=0,s=o,0===t)?e:1==(t/=n)?e+o:(r||(r=.3*n),s<Math.abs(o)?(s=o,a=r/4):a=r/(2*Math.PI)*Math.asin(o/s),-(s*Math.pow(2,10*(t-=1))*Math.sin(2*Math.PI*(t*n-a)/r))+e)},easeOutElastic:function(t,e,i,n){var s,r,a,o=i-e;return(a=1.70158,r=0,s=o,0===t)?e:1==(t/=n)?e+o:(r||(r=.3*n),s<Math.abs(o)?(s=o,a=r/4):a=r/(2*Math.PI)*Math.asin(o/s),s*Math.pow(2,-10*t)*Math.sin(2*Math.PI*(t*n-a)/r)+o+e)},easeInOutElastic:function(t,e,i,n){var s,r,a,o=i-e;return(a=1.70158,r=0,s=o,0===t)?e:2==(t/=n/2)?e+o:(r||(r=.3*1.5*n),s<Math.abs(o)?(s=o,a=r/4):a=r/(2*Math.PI)*Math.asin(o/s),t<1)?-.5*(s*Math.pow(2,10*(t-=1))*Math.sin(2*Math.PI*(t*n-a)/r))+e:s*Math.pow(2,-10*(t-=1))*Math.sin(2*Math.PI*(t*n-a)/r)*.5+o+e},easeInBack:function(t,e,i,n,s){return void 0===s&&(s=1.70158),(i-e)*(t/=n)*t*((s+1)*t-s)+e},easeOutBack:function(t,e,i,n,s){return void 0===s&&(s=1.70158),(i-e)*((t=t/n-1)*t*((s+1)*t+s)+1)+e},easeInOutBack:function(t,e,i,n,s){var r=i-e;return(void 0===s&&(s=1.70158),(t/=n/2)<1)?r/2*(t*t*(((s*=1.525)+1)*t-s))+e:r/2*((t-=2)*t*(((s*=1.525)+1)*t+s)+2)+e},easeInBounce:function(t,i,n,s){var r,a=n-i;return r=e.easeOutBounce(s-t,0,a,s),a-r+i},easeOutBounce:function(t,e,i,n){var s=i-e;return(t/=n)<1/2.75?7.5625*t*t*s+e:t<2/2.75?s*(7.5625*(t-=1.5/2.75)*t+.75)+e:t<2.5/2.75?s*(7.5625*(t-=2.25/2.75)*t+.9375)+e:s*(7.5625*(t-=2.625/2.75)*t+.984375)+e},easeInOutBounce:function(t,i,n,s){var r,a=n-i;return t<s/2?.5*e.easeInBounce(2*t,0,a,s)+i:.5*e.easeOutBounce(2*t-s,0,a,s)+.5*a+i}};t.exports=e},2085:(t,e,i)=>{i.d(e,{F:()=>a});var n=i(2596);let s=t=>"boolean"==typeof t?`${t}`:0===t?"0":t,r=n.$,a=(t,e)=>i=>{var n;if((null==e?void 0:e.variants)==null)return r(t,null==i?void 0:i.class,null==i?void 0:i.className);let{variants:a,defaultVariants:o}=e,h=Object.keys(a).map(t=>{let e=null==i?void 0:i[t],n=null==o?void 0:o[t];if(null===e)return null;let r=s(e)||s(n);return a[t][r]}),c=i&&Object.entries(i).reduce((t,e)=>{let[i,n]=e;return void 0===n||(t[i]=n),t},{});return r(t,h,null==e?void 0:null===(n=e.compoundVariants)||void 0===n?void 0:n.reduce((t,e)=>{let{class:i,className:n,...s}=e;return Object.entries(s).every(t=>{let[e,i]=t;return Array.isArray(i)?i.includes({...o,...c}[e]):({...o,...c})[e]===i})?[...t,i,n]:t},[]),null==i?void 0:i.class,null==i?void 0:i.className)}},4186:(t,e,i)=>{i.d(e,{A:()=>n});let n=(0,i(9946).A)("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]])},7948:(t,e,i)=>{i.d(e,{A:()=>w});var n,s,r=i(5155),a=i(2115),o=i(729);function h(t,e){return t+Math.random()*(e-t)}!function(t){t[t.Circle=0]="Circle",t[t.Square=1]="Square",t[t.Strip=2]="Strip"}(n||(n={})),function(t){t[t.Positive=1]="Positive",t[t.Negative=-1]="Negative"}(s||(s={}));let c=1e3/60;class u{constructor(t,e,i,n){var r;this.getOptions=e;let{colors:a,initialVelocityX:o,initialVelocityY:c}=this.getOptions();this.context=t,this.x=i,this.y=n,this.w=h(5,20),this.h=h(5,20),this.radius=h(5,10),this.vx="number"==typeof o?h(-o,o):h(o.min,o.max),this.vy="number"==typeof c?h(-c,0):h(c.min,c.max),this.shape=(r=0,Math.floor(0+3*Math.random())),this.angle=h(0,360)*Math.PI/180,this.angularSpin=h(-.2,.2),this.color=a[Math.floor(Math.random()*a.length)],this.rotateY=h(0,1),this.rotationDirection=h(0,1)?s.Positive:s.Negative}update(t){let{gravity:e,wind:i,friction:r,opacity:a,drawShape:o}=this.getOptions(),h=t/c;this.x+=this.vx*h,this.y+=this.vy*h,this.vy+=e*h,this.vx+=i*h,this.vx*=r**h,this.vy*=r**h,this.rotateY>=1&&this.rotationDirection===s.Positive?this.rotationDirection=s.Negative:this.rotateY<=-1&&this.rotationDirection===s.Negative&&(this.rotationDirection=s.Positive);let u=.1*this.rotationDirection*h;if(this.rotateY+=u,this.angle+=this.angularSpin,this.context.save(),this.context.translate(this.x,this.y),this.context.rotate(this.angle),this.context.scale(1,this.rotateY),this.context.rotate(this.angle),this.context.beginPath(),this.context.fillStyle=this.color,this.context.strokeStyle=this.color,this.context.globalAlpha=a,this.context.lineCap="round",this.context.lineWidth=2,o&&"function"==typeof o)o.call(this,this.context);else switch(this.shape){case n.Circle:this.context.beginPath(),this.context.arc(0,0,this.radius,0,2*Math.PI),this.context.fill();break;case n.Square:this.context.fillRect(-this.w/2,-this.h/2,this.w,this.h);break;case n.Strip:this.context.fillRect(-this.w/6,-this.h/2,this.w/3,this.h)}this.context.closePath(),this.context.restore()}}class l{constructor(t,e){this.x=0,this.y=0,this.w=0,this.h=0,this.lastNumberOfPieces=0,this.tweenProgress=0,this.tweenFrom=0,this.particles=[],this.particlesGenerated=0,this.removeParticleAt=t=>{this.particles.splice(t,1)},this.getParticle=()=>{let t=h(this.x,this.w+this.x),e=h(this.y,this.h+this.y);return new u(this.context,this.getOptions,t,e)},this.animate=t=>{let{canvas:e,context:i,particlesGenerated:n,lastNumberOfPieces:s}=this,{run:r,recycle:a,numberOfPieces:o,debug:h,tweenFunction:c,tweenDuration:u}=this.getOptions();if(!r)return!1;let l=this.particles.length,f=a?l:n;if(f<o){s!==o&&(this.tweenProgress=0,this.tweenFrom=f,this.lastNumberOfPieces=o),this.tweenProgress=Math.min(u,Math.max(0,this.tweenProgress+t));let e=Math.round(c(this.tweenProgress,this.tweenFrom,o,u)-f);for(let t=0;t<e;t++)this.particles.push(this.getParticle());this.particlesGenerated+=e}h&&(i.font="12px sans-serif",i.fillStyle="#333",i.textAlign="right",i.fillText(`Particles: ${l}`,e.width-10,e.height-20));for(let i=this.particles.length-1;i>=0;i--){let n=this.particles[i];n.update(t),(n.y>e.height||n.y<-100||n.x>e.width+100||n.x<-100)&&(a&&f<=o?this.particles[i]=this.getParticle():this.removeParticleAt(i))}return l>0||f<o},this.canvas=t;let i=this.canvas.getContext("2d");if(!i)throw Error("Could not get canvas context");this.context=i,this.getOptions=e}}let f={width:"undefined"!=typeof window?window.innerWidth:300,height:"undefined"!=typeof window?window.innerHeight:200,numberOfPieces:200,friction:.99,wind:0,gravity:.1,initialVelocityX:4,initialVelocityY:10,colors:["#f44336","#e91e63","#9c27b0","#673ab7","#3f51b5","#2196f3","#03a9f4","#00bcd4","#009688","#4CAF50","#8BC34A","#CDDC39","#FFEB3B","#FFC107","#FF9800","#FF5722","#795548"],opacity:1,debug:!1,tweenFunction:o.easeInOutQuad,tweenDuration:5e3,recycle:!0,run:!0};class p{constructor(t,e){this.lastFrameTime=0,this.setOptionsWithDefaults=t=>{let e={confettiSource:{x:0,y:0,w:this.canvas.width,h:0}};this._options={...e,...f,...t},Object.assign(this,t.confettiSource)},this.update=(t=0)=>{let{options:{run:e,onConfettiComplete:i,frameRate:n},canvas:s,context:r}=this,a=Math.min(t-this.lastFrameTime,50);if(n&&a<1e3/n){this.rafId=requestAnimationFrame(this.update);return}this.lastFrameTime=t-(n?a%n:0),e&&(r.fillStyle="white",r.clearRect(0,0,s.width,s.height)),this.generator.animate(a)?this.rafId=requestAnimationFrame(this.update):(i&&"function"==typeof i&&this.generator.particlesGenerated>0&&i.call(this,this),this._options.run=!1)},this.reset=()=>{this.generator&&this.generator.particlesGenerated>0&&(this.generator.particlesGenerated=0,this.generator.particles=[],this.generator.lastNumberOfPieces=0)},this.stop=()=>{this.options={run:!1},this.rafId&&(cancelAnimationFrame(this.rafId),this.rafId=void 0)},this.canvas=t;let i=this.canvas.getContext("2d");if(!i)throw Error("Could not get canvas context");this.context=i,this.generator=new l(this.canvas,()=>this.options),this.options=e,this.update()}get options(){return this._options}set options(t){let e=this._options?.run,i=this._options?.recycle;this.setOptionsWithDefaults(t),this.generator&&(Object.assign(this.generator,this.options.confettiSource),"boolean"==typeof t.recycle&&t.recycle&&!1===i&&(this.generator.lastNumberOfPieces=this.generator.particles.length)),"boolean"==typeof t.run&&t.run&&!1===e&&this.update()}}let d=a.createRef();class v extends a.Component{constructor(t){super(t),this.canvas=a.createRef(),this.canvas=t.canvasRef||d}componentDidMount(){if(this.canvas.current){let t=g(this.props)[0];this.confetti=new p(this.canvas.current,t)}}componentDidUpdate(){let t=g(this.props)[0];this.confetti&&(this.confetti.options=t)}componentWillUnmount(){this.confetti&&this.confetti.stop(),this.confetti=void 0}render(){let[t,e]=g(this.props),i={zIndex:2,position:"absolute",pointerEvents:"none",top:0,left:0,bottom:0,right:0,...e.style};return(0,r.jsx)("canvas",{width:t.width,height:t.height,ref:this.canvas,...e,style:i})}}function g(t){let e={},i={},n=[...Object.keys(f),"confettiSource","drawShape","onConfettiComplete","frameRate"],s=["canvasRef"];for(let r in t){let a=t[r];n.includes(r)?e[r]=a:s.includes(r)?s[r]=a:i[r]=a}return[e,i,{}]}v.defaultProps={...f},v.displayName="ReactConfetti";let w=a.forwardRef((t,e)=>(0,r.jsx)(v,{canvasRef:e,...t}))},8186:(t,e,i)=>{i.d(e,{A:()=>n});let n=(0,i(9946).A)("Trophy",[["path",{d:"M6 9H4.5a2.5 2.5 0 0 1 0-5H6",key:"17hqa7"}],["path",{d:"M18 9h1.5a2.5 2.5 0 0 0 0-5H18",key:"lmptdp"}],["path",{d:"M4 22h16",key:"57wxv0"}],["path",{d:"M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22",key:"1nw9bq"}],["path",{d:"M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22",key:"1np0yb"}],["path",{d:"M18 2H6v7a6 6 0 0 0 12 0V2Z",key:"u46fv3"}]])},9946:(t,e,i)=>{i.d(e,{A:()=>h});var n=i(2115);let s=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),r=function(){for(var t=arguments.length,e=Array(t),i=0;i<t;i++)e[i]=arguments[i];return e.filter((t,e,i)=>!!t&&""!==t.trim()&&i.indexOf(t)===e).join(" ").trim()};var a={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};let o=(0,n.forwardRef)((t,e)=>{let{color:i="currentColor",size:s=24,strokeWidth:o=2,absoluteStrokeWidth:h,className:c="",children:u,iconNode:l,...f}=t;return(0,n.createElement)("svg",{ref:e,...a,width:s,height:s,stroke:i,strokeWidth:h?24*Number(o)/Number(s):o,className:r("lucide",c),...f},[...l.map(t=>{let[e,i]=t;return(0,n.createElement)(e,i)}),...Array.isArray(u)?u:[u]])}),h=(t,e)=>{let i=(0,n.forwardRef)((i,a)=>{let{className:h,...c}=i;return(0,n.createElement)(o,{ref:a,iconNode:e,className:r("lucide-".concat(s(t)),h),...c})});return i.displayName="".concat(t),i}}}]);