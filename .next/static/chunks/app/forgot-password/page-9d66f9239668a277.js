(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2162],{968:(e,r,t)=>{"use strict";t.d(r,{b:()=>i});var s=t(2115),n=t(3655),a=t(5155),l=s.forwardRef((e,r)=>(0,a.jsx)(n.sG.label,{...e,ref:r,onMouseDown:r=>{var t;r.target.closest("button, input, select, textarea")||(null===(t=e.onMouseDown)||void 0===t||t.call(e,r),!r.defaultPrevented&&r.detail>1&&r.preventDefault())}}));l.displayName="Label";var i=l},2085:(e,r,t)=>{"use strict";t.d(r,{F:()=>l});var s=t(2596);let n=e=>"boolean"==typeof e?`${e}`:0===e?"0":e,a=s.$,l=(e,r)=>t=>{var s;if((null==r?void 0:r.variants)==null)return a(e,null==t?void 0:t.class,null==t?void 0:t.className);let{variants:l,defaultVariants:i}=r,o=Object.keys(l).map(e=>{let r=null==t?void 0:t[e],s=null==i?void 0:i[e];if(null===r)return null;let a=n(r)||n(s);return l[e][a]}),d=t&&Object.entries(t).reduce((e,r)=>{let[t,s]=r;return void 0===s||(e[t]=s),e},{});return a(e,o,null==r?void 0:null===(s=r.compoundVariants)||void 0===s?void 0:s.reduce((e,r)=>{let{class:t,className:s,...n}=r;return Object.entries(n).every(e=>{let[r,t]=e;return Array.isArray(t)?t.includes({...i,...d}[r]):({...i,...d})[r]===t})?[...e,t,s]:e},[]),null==t?void 0:t.class,null==t?void 0:t.className)}},2714:(e,r,t)=>{"use strict";t.d(r,{Label:()=>d});var s=t(5155),n=t(2115),a=t(968),l=t(2085),i=t(3999);let o=(0,l.F)("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"),d=n.forwardRef((e,r)=>{let{className:t,...n}=e;return(0,s.jsx)(a.b,{ref:r,className:(0,i.cn)(o(),t),...n})});d.displayName=a.b.displayName},3655:(e,r,t)=>{"use strict";t.d(r,{hO:()=>o,sG:()=>i});var s=t(2115),n=t(7650),a=t(9708),l=t(5155),i=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","span","svg","ul"].reduce((e,r)=>{let t=s.forwardRef((e,t)=>{let{asChild:s,...n}=e,i=s?a.DX:r;return"undefined"!=typeof window&&(window[Symbol.for("radix-ui")]=!0),(0,l.jsx)(i,{...n,ref:t})});return t.displayName=`Primitive.${r}`,{...e,[r]:t}},{});function o(e,r){e&&n.flushSync(()=>e.dispatchEvent(r))}},3999:(e,r,t)=>{"use strict";t.d(r,{cn:()=>a});var s=t(2596),n=t(9688);function a(){for(var e=arguments.length,r=Array(e),t=0;t<e;t++)r[t]=arguments[t];return(0,n.QP)((0,s.$)(r))}},5695:(e,r,t)=>{"use strict";var s=t(8999);t.o(s,"useParams")&&t.d(r,{useParams:function(){return s.useParams}}),t.o(s,"usePathname")&&t.d(r,{usePathname:function(){return s.usePathname}}),t.o(s,"useRouter")&&t.d(r,{useRouter:function(){return s.useRouter}}),t.o(s,"useSearchParams")&&t.d(r,{useSearchParams:function(){return s.useSearchParams}})},6248:(e,r,t)=>{"use strict";t.d(r,{default:()=>c});var s=t(5155),n=t(2115),a=t(7168),l=t(9852),i=t(2714),o=t(5695),d=t(6874),u=t.n(d);function c(){let[e,r]=(0,n.useState)(""),[t,d]=(0,n.useState)(!1),[c,f]=(0,n.useState)(!1),[m,v]=(0,n.useState)(""),h=(0,o.useRouter)(),b=async e=>{e.preventDefault(),d(!0),v("");try{await new Promise(e=>setTimeout(e,1500)),f(!0)}catch(e){v(e instanceof Error?e.message:"حدث خطأ ما")}finally{d(!1)}};return c?(0,s.jsx)("div",{className:"rounded-lg border p-6 shadow-sm",children:(0,s.jsxs)("div",{className:"text-center",children:[(0,s.jsx)("h2",{className:"text-xl font-semibold text-green-600",children:"تم إرسال البريد الإلكتروني!"}),(0,s.jsxs)("p",{className:"mt-2",children:["لقد أرسلنا بريدًا إلكترونيًا إلى ",e," مع تعليمات لإعادة تعيين كلمة المرور."]}),(0,s.jsx)(a.$,{className:"mt-4 w-full",onClick:()=>h.push("/login"),children:"العودة إلى تسجيل الدخول"})]})}):(0,s.jsx)("form",{onSubmit:b,className:"rounded-lg border p-6 shadow-sm",children:(0,s.jsxs)("div",{className:"space-y-4",children:[(0,s.jsxs)("div",{className:"space-y-2",children:[(0,s.jsx)(i.Label,{htmlFor:"email",children:"البريد الإلكتروني"}),(0,s.jsx)(l.p,{id:"email",type:"email",placeholder:"أدخل بريدك الإلكتروني",value:e,onChange:e=>r(e.target.value),required:!0,disabled:t})]}),m&&(0,s.jsx)("div",{className:"rounded-md bg-red-50 p-3 text-sm text-red-600",children:m}),(0,s.jsx)(a.$,{type:"submit",className:"w-full",disabled:t,children:t?"جاري الإرسال...":"إرسال رابط إعادة التعيين"}),(0,s.jsx)("div",{className:"text-center text-sm",children:(0,s.jsx)(u(),{href:"/login",className:"text-blue-600 hover:underline",children:"العودة إلى تسجيل الدخول"})})]})})}},6867:(e,r,t)=>{Promise.resolve().then(t.bind(t,6248)),Promise.resolve().then(t.bind(t,9824))},7168:(e,r,t)=>{"use strict";t.d(r,{$:()=>d});var s=t(5155),n=t(2115),a=t(9708),l=t(2085),i=t(3999);let o=(0,l.F)("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),d=n.forwardRef((e,r)=>{let{className:t,variant:n,size:l,asChild:d=!1,...u}=e,c=d?a.DX:"button";return(0,s.jsx)(c,{className:(0,i.cn)(o({variant:n,size:l,className:t})),ref:r,...u})});d.displayName="Button"},9824:(e,r,t)=>{"use strict";t.d(r,{ClientBoundary:()=>a,t:()=>l});var s=t(5155),n=t(2115);function a(e){let{children:r,fallback:t=(0,s.jsx)("div",{className:"p-8 text-center",children:"جاري التحميل..."})}=e,[a,l]=(0,n.useState)(!1);return((0,n.useEffect)(()=>{l(!0)},[]),a)?(0,s.jsx)(n.Suspense,{fallback:t,children:r}):(0,s.jsx)(s.Fragment,{children:t})}function l(e){let r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:(0,s.jsx)("div",{className:"p-8 text-center",children:"جاري التحميل..."});return function(t){let[a,l]=(0,n.useState)(null),[i,o]=(0,n.useState)(null);return((0,n.useEffect)(()=>{let r=!0;return e().then(e=>{r&&l(()=>e.default)}).catch(e=>{console.error("Error loading component:",e),r&&o(e)}),()=>{r=!1}},[]),i)?(0,s.jsxs)("div",{children:["Error loading component: ",i.message]}):a?(0,s.jsx)(a,{...t}):(0,s.jsx)(s.Fragment,{children:r})}}},9852:(e,r,t)=>{"use strict";t.d(r,{p:()=>l});var s=t(5155),n=t(2115),a=t(3999);let l=n.forwardRef((e,r)=>{let{className:t,type:n,...l}=e;return(0,s.jsx)("input",{type:n,className:(0,a.cn)("flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",t),ref:r,...l})});l.displayName="Input"}},e=>{var r=r=>e(e.s=r);e.O(0,[2848,6874,8441,1684,7358],()=>r(6867)),_N_E=e.O()}]);