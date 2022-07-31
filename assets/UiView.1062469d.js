import{N as p,A as x,Z as U,c as D,w as o,_ as A,o as M,a as e,$ as k,f as _,h as n,d as t,u as l,S as g,q as v,e as h,t as $,b as W,i as f,a0 as O,a1 as I,a2 as c,a3 as R,a4 as j,a5 as S,a6 as q,a7 as E,k as P}from"./index.a4423064.js";import{_ as w}from"./SectionTitle.28909bef.js";import{a as N,_ as Z}from"./FormField.24e284c6.js";const z=n("p",null,"This is sample modal",-1),F=n("p",null,"This is sample modal",-1),G=n("p",null,"This is sample modal",-1),H=f(" Dark mode "),J={class:"text-center py-24 lg:py-12 text-gray-500 dark:text-slate-400"},K=f(" Modal examples "),L={class:"space-y-12"},Q=n("div",{class:"space-y-3"},[n("p",null,"Click to see in action")],-1),X=n("div",{class:"space-y-3"},[n("h1",{class:"text-2xl"}," Unhandled exception "),n("p",null,"Click to see in action")],-1),Y=n("div",{class:"space-y-3"},[n("h1",{class:"text-2xl"}," Success "),n("p",null,"Click to see in action")],-1),ll=n("h1",{class:"text-2xl text-gray-500 dark:text-slate-400"}," Notifications ",-1),el={class:"flex items-center justify-center mt-6"},ol=n("b",null,"Info state",-1),tl=f(". NotificationBar "),nl=n("b",null,"Success state",-1),il=f(". NotificationBar "),al=n("b",null,"Warning state",-1),sl=f(". NotificationBar "),ul=n("b",null,"Danger state",-1),dl=f(". NotificationBar "),cl=n("b",null,"Contrast",-1),rl=f(". NotificationBar "),ml=n("b",null,"White",-1),fl=f(". NotificationBar "),_l=f("Buttons"),bl=f("Cards"),hl={class:"grid grid-cols-1 gap-6 mb-6 lg:grid-cols-2"},pl=n("div",{class:"text-center py-24 lg:py-12 text-gray-500 dark:text-slate-400"}," With title ",-1),xl=n("div",{class:"text-center py-24 lg:py-12 text-gray-500 dark:text-slate-400"}," With title & icons ",-1),yl={__name:"UiView",setup(gl){const B=p(!1),C=p(!1),y=p(!1),V=p([]),m=x(()=>V.value.indexOf("outline")>-1),b=p([]),i=x(()=>b.value.indexOf("outline")>-1),a=x(()=>b.value.indexOf("small")>-1),s=x(()=>b.value.indexOf("disabled")>-1),u=x(()=>b.value.indexOf("rounded")>-1),T=U();return(vl,d)=>(M(),D(A,null,{default:o(()=>[e(k,{modelValue:B.value,"onUpdate:modelValue":d[0]||(d[0]=r=>B.value=r),title:"Please confirm action","button-label":"Confirm","has-cancel":""},{default:o(()=>[z]),_:1},8,["modelValue"]),e(k,{modelValue:C.value,"onUpdate:modelValue":d[1]||(d[1]=r=>C.value=r),"large-title":"Unhandled exception",button:"danger",shake:""},{default:o(()=>[F]),_:1},8,["modelValue"]),e(k,{modelValue:y.value,"onUpdate:modelValue":d[2]||(d[2]=r=>y.value=r),"large-title":"Success",button:"success"},{default:o(()=>[G]),_:1},8,["modelValue"]),e(w,{first:""},{default:o(()=>[H]),_:1}),e(g,null,{default:o(()=>[e(_,{class:"md:w-7/12 lg:w-5/12 xl:w-4/12 shadow-2xl md:mx-auto"},{default:o(()=>[n("div",J,[e(t,{label:"Toggle",color:"contrast",onClick:d[3]||(d[3]=r=>l(T).setDarkMode())})])]),_:1})]),_:1}),e(w,null,{default:o(()=>[K]),_:1}),e(g,null,{default:o(()=>[n("div",L,[e(_,{title:"Confirm modal","header-icon":l(O),class:"cursor-pointer md:w-7/12 lg:w-5/12 xl:w-4/12 shadow-2xl md:mx-auto",hoverable:"",onClick:d[4]||(d[4]=r=>B.value=!0)},{footer:o(()=>[e(v,null,{default:o(()=>[e(t,{label:"Confirm",color:"info"}),e(t,{label:"Cancel",color:"info",outline:""})]),_:1})]),default:o(()=>[Q]),_:1},8,["header-icon"]),e(_,{class:"cursor-pointer md:w-7/12 lg:w-5/12 xl:w-4/12 shadow-2xl md:mx-auto",hoverable:"",onClick:d[5]||(d[5]=r=>C.value=!0)},{footer:o(()=>[e(v,null,{default:o(()=>[e(t,{label:"Done",color:"danger"})]),_:1})]),default:o(()=>[X]),_:1}),e(_,{class:"cursor-pointer md:w-7/12 lg:w-5/12 xl:w-4/12 shadow-2xl md:mx-auto",hoverable:"",onClick:d[6]||(d[6]=r=>y.value=!0)},{footer:o(()=>[e(t,{label:"Done",color:"success"})]),default:o(()=>[Y]),_:1})])]),_:1}),e(w,{custom:""},{default:o(()=>[ll,n("div",el,[e(N,{modelValue:V.value,"onUpdate:modelValue":d[7]||(d[7]=r=>V.value=r),type:"switch",name:"notifications-switch",options:{outline:"Outline"}},null,8,["modelValue"])])]),_:1}),e(g,null,{default:o(()=>[e(h,{color:"info",icon:l(I),outline:l(m)},{right:o(()=>[e(t,{icon:l(c),label:"Button",color:"info",outline:l(m),small:""},null,8,["icon","outline"])]),default:o(()=>[ol,tl]),_:1},8,["icon","outline"]),e(h,{color:"success",icon:l(R),outline:l(m)},{right:o(()=>[e(t,{icon:l(c),label:"Button",color:"success",outline:l(m),small:""},null,8,["icon","outline"])]),default:o(()=>[nl,il]),_:1},8,["icon","outline"]),e(h,{color:"warning",icon:l(j),outline:l(m)},{right:o(()=>[e(t,{icon:l(c),label:"Button",color:"warning",outline:l(m),small:""},null,8,["icon","outline"])]),default:o(()=>[al,sl]),_:1},8,["icon","outline"]),e(h,{color:"danger",icon:l(S),outline:l(m)},{right:o(()=>[e(t,{icon:l(c),label:"Button",color:"danger",outline:l(m),small:""},null,8,["icon","outline"])]),default:o(()=>[ul,dl]),_:1},8,["icon","outline"]),e(h,{color:"contrast",icon:l(q),outline:l(m)},{default:o(()=>[cl,rl]),_:1},8,["icon","outline"]),e(h,{color:"white",icon:l(E),outline:l(m)},{default:o(()=>[ml,fl]),_:1},8,["icon","outline"])]),_:1}),e(w,null,{default:o(()=>[_l]),_:1}),e(g,null,{default:o(()=>[e(_,null,{default:o(()=>[e(Z,{label:"Settings"},{default:o(()=>[e(N,{modelValue:b.value,"onUpdate:modelValue":d[8]||(d[8]=r=>b.value=r),name:"buttons-switch",type:"switch",options:{outline:"Outline",small:"Small",rounded:"Rounded",disabled:"Disabled"}},null,8,["modelValue"])]),_:1}),e($),e(v,null,{default:o(()=>[e(t,{color:"white",label:"Button",small:l(a),outline:l(i),disabled:l(s),"rounded-full":l(u)},null,8,["small","outline","disabled","rounded-full"]),e(t,{color:"contrast",label:"Button",small:l(a),outline:l(i),disabled:l(s),"rounded-full":l(u)},null,8,["small","outline","disabled","rounded-full"]),e(t,{color:"info",label:"Button",small:l(a),outline:l(i),disabled:l(s),"rounded-full":l(u)},null,8,["small","outline","disabled","rounded-full"]),e(t,{color:"success",label:"Button",small:l(a),outline:l(i),disabled:l(s),"rounded-full":l(u)},null,8,["small","outline","disabled","rounded-full"]),e(t,{color:"warning",label:"Button",small:l(a),outline:l(i),disabled:l(s),"rounded-full":l(u)},null,8,["small","outline","disabled","rounded-full"]),e(t,{color:"danger",label:"Button",small:l(a),outline:l(i),disabled:l(s),"rounded-full":l(u)},null,8,["small","outline","disabled","rounded-full"])]),_:1}),e($),e(v,null,{default:o(()=>[e(t,{color:"white",label:"Button",icon:l(c),small:l(a),outline:l(i),disabled:l(s),"rounded-full":l(u)},null,8,["icon","small","outline","disabled","rounded-full"]),e(t,{color:"contrast",label:"Button",icon:l(c),small:l(a),outline:l(i),disabled:l(s),"rounded-full":l(u)},null,8,["icon","small","outline","disabled","rounded-full"]),e(t,{color:"info",label:"Button",icon:l(c),small:l(a),outline:l(i),disabled:l(s),"rounded-full":l(u)},null,8,["icon","small","outline","disabled","rounded-full"]),e(t,{color:"success",label:"Button",icon:l(c),small:l(a),outline:l(i),disabled:l(s),"rounded-full":l(u)},null,8,["icon","small","outline","disabled","rounded-full"]),e(t,{color:"warning",label:"Button",icon:l(c),small:l(a),outline:l(i),disabled:l(s),"rounded-full":l(u)},null,8,["icon","small","outline","disabled","rounded-full"]),e(t,{color:"danger",label:"Button",icon:l(c),small:l(a),outline:l(i),disabled:l(s),"rounded-full":l(u)},null,8,["icon","small","outline","disabled","rounded-full"])]),_:1}),e($),e(v,null,{default:o(()=>[e(t,{color:"white",icon:l(c),small:l(a),outline:l(i),disabled:l(s),"rounded-full":l(u)},null,8,["icon","small","outline","disabled","rounded-full"]),e(t,{color:"contrast",icon:l(c),small:l(a),outline:l(i),disabled:l(s),"rounded-full":l(u)},null,8,["icon","small","outline","disabled","rounded-full"]),e(t,{color:"info",icon:l(c),small:l(a),outline:l(i),disabled:l(s),"rounded-full":l(u)},null,8,["icon","small","outline","disabled","rounded-full"]),e(t,{color:"success",icon:l(c),small:l(a),outline:l(i),disabled:l(s),"rounded-full":l(u)},null,8,["icon","small","outline","disabled","rounded-full"]),e(t,{color:"warning",icon:l(c),small:l(a),outline:l(i),disabled:l(s),"rounded-full":l(u)},null,8,["icon","small","outline","disabled","rounded-full"]),e(t,{color:"danger",icon:l(c),small:l(a),outline:l(i),disabled:l(s),"rounded-full":l(u)},null,8,["icon","small","outline","disabled","rounded-full"])]),_:1})]),_:1})]),_:1}),e(w,null,{default:o(()=>[bl]),_:1}),e(g,null,{default:o(()=>[n("div",hl,[e(_,{title:"With Title",mb:""},{default:o(()=>[pl]),_:1}),e(_,{title:"Title & Icons",icon:l(P),"header-icon":l(O),mb:""},{default:o(()=>[xl]),_:1},8,["icon","header-icon"])]),e(W,{icon:l(S),title:"Empty variation"},null,8,["icon"]),e(_,{empty:""})]),_:1})]),_:1}))}};export{yl as default};
