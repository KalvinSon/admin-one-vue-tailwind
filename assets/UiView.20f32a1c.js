import{r as f,M as w,a3 as T,c as D,w as t,_ as M,o as A,a as e,a4 as V,b as I,d as W,f as _,j as n,H as o,u as l,S as g,E as b,G as x,e as h,h as j,i as r,a5 as $,a6 as E,a7 as d,a8 as G,a9 as H,aa as S,ab as P,ac as q,m as z}from"./index.4d42bdf6.js";import{a as v,_ as F}from"./SectionBottomOtherPages.dcdfd2fc.js";import{a as O,_ as J}from"./FormField.54cca745.js";const K=n("p",null,"This is sample modal",-1),L=n("p",null,"This is sample modal",-1),Q=n("p",null,"This is sample modal",-1),R=r("UI Components"),X=r(" Dark mode "),Y={class:"text-center py-24 lg:py-12 text-gray-500 dark:text-gray-400"},Z=r(" Modal examples "),ll={class:"space-y-12"},el=n("div",{class:"space-y-3"},[n("p",null,"Click to see in action")],-1),tl=n("div",{class:"space-y-3"},[n("h1",{class:"text-2xl"}," Unhandled exception "),n("p",null,"Click to see in action")],-1),ol=n("div",{class:"space-y-3"},[n("h1",{class:"text-2xl"}," Success "),n("p",null,"Click to see in action")],-1),nl=n("h1",{class:"text-2xl text-gray-500 dark:text-gray-400"}," Notifications ",-1),il={class:"flex items-center justify-center mt-6"},al=n("b",null,"Info state",-1),sl=r(". NotificationBar "),ul=n("b",null,"Success state",-1),dl=r(". NotificationBar "),cl=n("b",null,"Warning state",-1),rl=r(". NotificationBar "),ml=n("b",null,"Danger state",-1),_l=r(". NotificationBar "),fl=n("b",null,"White",-1),bl=r(". NotificationBar "),hl=n("b",null,"Contrast",-1),pl=r(". NotificationBar "),gl=r("Buttons"),xl=r("Cards"),vl={class:"grid grid-cols-1 gap-6 mb-6 lg:grid-cols-2"},wl=n("div",{class:"text-center py-24 lg:py-12 text-gray-500 dark:text-gray-400"}," With title ",-1),Bl=n("div",{class:"text-center py-24 lg:py-12 text-gray-500 dark:text-gray-400"}," With title & icons ",-1),Sl={__name:"UiView",setup(yl){const N=f(["Admin","UI Components"]),B=f(!1),y=f(!1),C=f(!1),k=f([]),m=w(()=>k.value.indexOf("outline")>-1),p=f([]),i=w(()=>p.value.indexOf("outline")>-1),a=w(()=>p.value.indexOf("small")>-1),s=w(()=>p.value.indexOf("disabled")>-1),U=T();return(Cl,u)=>(A(),D(M,null,{default:t(()=>[e(V,{modelValue:B.value,"onUpdate:modelValue":u[0]||(u[0]=c=>B.value=c),title:"Please confirm action","button-label":"Confirm","has-cancel":""},{default:t(()=>[K]),_:1},8,["modelValue"]),e(V,{modelValue:y.value,"onUpdate:modelValue":u[1]||(u[1]=c=>y.value=c),"large-title":"Unhandled exception",button:"danger",shake:""},{default:t(()=>[L]),_:1},8,["modelValue"]),e(V,{modelValue:C.value,"onUpdate:modelValue":u[2]||(u[2]=c=>C.value=c),"large-title":"Success",button:"success"},{default:t(()=>[Q]),_:1},8,["modelValue"]),e(I,{"title-stack":N.value},null,8,["title-stack"]),e(W,null,{default:t(()=>[R]),_:1}),e(v,{first:""},{default:t(()=>[X]),_:1}),e(g,null,{default:t(()=>[e(_,{class:"md:w-7/12 lg:w-5/12 xl:w-4/12 shadow-2xl md:mx-auto"},{default:t(()=>[n("div",Y,[e(o,{label:"Toggle",outline:"",onClick:u[3]||(u[3]=c=>l(U).setDarkMode())})])]),_:1})]),_:1}),e(v,null,{default:t(()=>[Z]),_:1}),e(g,null,{default:t(()=>[n("div",ll,[e(_,{title:"Confirm modal","header-icon":l($),class:"cursor-pointer md:w-7/12 lg:w-5/12 xl:w-4/12 shadow-2xl md:mx-auto",hoverable:"",onClick:u[4]||(u[4]=c=>B.value=!0)},{default:t(()=>[el,e(b),e(x,null,{default:t(()=>[e(o,{label:"Confirm",color:"info"}),e(o,{label:"Cancel",color:"info",outline:""})]),_:1})]),_:1},8,["header-icon"]),e(_,{class:"cursor-pointer md:w-7/12 lg:w-5/12 xl:w-4/12 shadow-2xl md:mx-auto",hoverable:"",onClick:u[5]||(u[5]=c=>y.value=!0)},{default:t(()=>[tl,e(b),e(x,null,{default:t(()=>[e(o,{label:"Done",color:"danger"})]),_:1})]),_:1}),e(_,{class:"cursor-pointer md:w-7/12 lg:w-5/12 xl:w-4/12 shadow-2xl md:mx-auto",hoverable:"",onClick:u[6]||(u[6]=c=>C.value=!0)},{default:t(()=>[ol,e(b),e(o,{label:"Done",color:"success"})]),_:1})])]),_:1}),e(v,{custom:""},{default:t(()=>[nl,n("div",il,[e(O,{modelValue:k.value,"onUpdate:modelValue":u[7]||(u[7]=c=>k.value=c),type:"switch",name:"notifications-switch",options:{outline:"Outline"}},null,8,["modelValue"])])]),_:1}),e(g,null,{default:t(()=>[e(h,{color:"info",icon:l(E),outline:l(m)},{right:t(()=>[e(o,{icon:l(d),label:"Button",color:"info",outline:l(m),small:""},null,8,["icon","outline"])]),default:t(()=>[al,sl]),_:1},8,["icon","outline"]),e(h,{color:"success",icon:l(G),outline:l(m)},{right:t(()=>[e(o,{icon:l(d),label:"Button",color:"success",outline:l(m),small:""},null,8,["icon","outline"])]),default:t(()=>[ul,dl]),_:1},8,["icon","outline"]),e(h,{color:"warning",icon:l(H),outline:l(m)},{right:t(()=>[e(o,{icon:l(d),label:"Button",color:"warning",outline:l(m),small:""},null,8,["icon","outline"])]),default:t(()=>[cl,rl]),_:1},8,["icon","outline"]),e(h,{color:"danger",icon:l(S),outline:l(m)},{right:t(()=>[e(o,{icon:l(d),label:"Button",color:"danger",outline:l(m),small:""},null,8,["icon","outline"])]),default:t(()=>[ml,_l]),_:1},8,["icon","outline"]),e(h,{color:"white",icon:l(P),outline:l(m)},{default:t(()=>[fl,bl]),_:1},8,["icon","outline"]),e(h,{color:"contrast",icon:l(q),outline:l(m)},{default:t(()=>[hl,pl]),_:1},8,["icon","outline"])]),_:1}),e(v,null,{default:t(()=>[gl]),_:1}),e(g,null,{default:t(()=>[e(_,null,{default:t(()=>[e(J,{label:"Settings"},{default:t(()=>[e(O,{modelValue:p.value,"onUpdate:modelValue":u[8]||(u[8]=c=>p.value=c),name:"buttons-switch",type:"switch",options:{outline:"Outline",small:"Small",disabled:"Disabled"}},null,8,["modelValue"])]),_:1}),e(b),e(x,null,{default:t(()=>[e(o,{color:"white",label:"Button",small:l(a),outline:l(i),disabled:l(s)},null,8,["small","outline","disabled"]),e(o,{color:"contrast",label:"Button",small:l(a),outline:l(i),disabled:l(s)},null,8,["small","outline","disabled"]),e(o,{color:"info",label:"Button",small:l(a),outline:l(i),disabled:l(s)},null,8,["small","outline","disabled"]),e(o,{color:"success",label:"Button",small:l(a),outline:l(i),disabled:l(s)},null,8,["small","outline","disabled"]),e(o,{color:"warning",label:"Button",small:l(a),outline:l(i),disabled:l(s)},null,8,["small","outline","disabled"]),e(o,{color:"danger",label:"Button",small:l(a),outline:l(i),disabled:l(s)},null,8,["small","outline","disabled"])]),_:1}),e(b),e(x,null,{default:t(()=>[e(o,{color:"white",label:"Button",icon:l(d),small:l(a),outline:l(i),disabled:l(s)},null,8,["icon","small","outline","disabled"]),e(o,{color:"contrast",label:"Button",icon:l(d),small:l(a),outline:l(i),disabled:l(s)},null,8,["icon","small","outline","disabled"]),e(o,{color:"info",label:"Button",icon:l(d),small:l(a),outline:l(i),disabled:l(s)},null,8,["icon","small","outline","disabled"]),e(o,{color:"success",label:"Button",icon:l(d),small:l(a),outline:l(i),disabled:l(s)},null,8,["icon","small","outline","disabled"]),e(o,{color:"warning",label:"Button",icon:l(d),small:l(a),outline:l(i),disabled:l(s)},null,8,["icon","small","outline","disabled"]),e(o,{color:"danger",label:"Button",icon:l(d),small:l(a),outline:l(i),disabled:l(s)},null,8,["icon","small","outline","disabled"])]),_:1}),e(b),e(x,null,{default:t(()=>[e(o,{color:"white",icon:l(d),small:l(a),outline:l(i),disabled:l(s)},null,8,["icon","small","outline","disabled"]),e(o,{color:"contrast",icon:l(d),small:l(a),outline:l(i),disabled:l(s)},null,8,["icon","small","outline","disabled"]),e(o,{color:"info",icon:l(d),small:l(a),outline:l(i),disabled:l(s)},null,8,["icon","small","outline","disabled"]),e(o,{color:"success",icon:l(d),small:l(a),outline:l(i),disabled:l(s)},null,8,["icon","small","outline","disabled"]),e(o,{color:"warning",icon:l(d),small:l(a),outline:l(i),disabled:l(s)},null,8,["icon","small","outline","disabled"]),e(o,{color:"danger",icon:l(d),small:l(a),outline:l(i),disabled:l(s)},null,8,["icon","small","outline","disabled"])]),_:1})]),_:1})]),_:1}),e(v,null,{default:t(()=>[xl]),_:1}),e(g,null,{default:t(()=>[n("div",vl,[e(_,{title:"With Title",mb:""},{default:t(()=>[wl]),_:1}),e(_,{title:"Title & Icons",icon:l(z),"header-icon":l($),mb:""},{default:t(()=>[Bl]),_:1},8,["icon","header-icon"])]),e(j,{icon:l(S),title:"Empty variation"},null,8,["icon"]),e(_,{empty:""})]),_:1}),e(F)]),_:1}))}};export{Sl as default};
