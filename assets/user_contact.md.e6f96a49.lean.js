import{_ as y,r as s,o as l,c as a,b as e,j as w,v as k,k as r,p as x,i as S,d as v,t as N,e as E}from"./app.8cc017fd.js";const d=c=>(x("data-v-0092a3ae"),c=c(),S(),c),I={class:"contact"},T={key:0,method:"get",class:"email_form",id:"email_form"},W=d(()=>e("div",null,"Name:",-1)),C=d(()=>e("div",null,"E-mail:",-1)),L=d(()=>e("div",null,"Message:",-1)),V={key:1},R={key:2,class:"tip custom-block info_message"},A=d(()=>e("p",{class:"custom-block-title"},"Info",-1)),D=d(()=>e("p",null,[v("We got your Email! What can be the next step? Join us on "),e("a",{href:"https://www.linkedin.com/showcase/dialogware/"},"linkedin")],-1)),O=[A,D],U={key:3,class:"warning custom-block warning_message"},j=d(()=>e("p",{class:"custom-block-title"},"Error",-1)),B=d(()=>e("p",null,"Please fill the fields with min. 3 characters",-1)),G=[j,B],J={key:4,class:"warning custom-block error_message"},M=d(()=>e("p",{class:"custom-block-title"},"Error",-1)),P=d(()=>e("p",null,[v("Sending message is not possible, contact me please on "),e("a",{href:"https://www.linkedin.com/in/tom-sapletta-com"},"linkedin")],-1)),F=[M,P],Q={__name:"Contact",setup(c){const n=s(""),o=s(""),b=s(""),u=s(""),i=s(!1),_=s(!1),p=s(!1),m=s(!0);function $(){if(_.value=!1,i.value=!1,u.value.length<2||o.value.length<5||n.value.length<3)i.value=!0;else{i.value=!1;var g=`https://email.dialogware.com/?type=QUESTION&name=${u.value}&message=${n.value}&email=${o.value}`;fetch(g,{method:"get"}).then(t=>t.json()).then(t=>{n.value=t.message,o.value=t.email,b.value=t.text,u.value=t.name,t.found>5?_.value=!0:(_.value=!1,i.value=!1,m.value=!1,p.value=!0)})}}return(g,t)=>(l(),a("div",I,[m.value?(l(),a("form",T,[e("div",null,[e("fieldset",null,[e("label",null,[W,w(e("input",{"onUpdate:modelValue":t[0]||(t[0]=h=>u.value=h),placeholder:"name"},null,512),[[k,u.value]])])]),e("fieldset",null,[e("label",null,[C,w(e("input",{"onUpdate:modelValue":t[1]||(t[1]=h=>o.value=h),placeholder:"@"},null,512),[[k,o.value]])])]),e("fieldset",null,[e("label",null,[L,w(e("textarea",{"onUpdate:modelValue":t[2]||(t[2]=h=>n.value=h),placeholder:"message"},null,512),[[k,n.value]])])])])])):r("",!0),m.value?(l(),a("div",V,[e("fieldset",{class:"button_send"},[e("button",{onClick:$},"Send Message")])])):r("",!0),p.value?(l(),a("div",R,O)):r("",!0),i.value?(l(),a("div",U,G)):r("",!0),_.value?(l(),a("div",J,F)):r("",!0)]))}},Y=y(Q,[["__scopeId","data-v-0092a3ae"]]);const f=c=>(x("data-v-b21d1f34"),c=c(),S(),c),q={class:"newsletter"},z={key:0,method:"get",class:"email_form",id:"email_form",action:"#",onsubmit:"return false;"},H={key:0},K={key:1,class:"tip custom-block info_message"},X=f(()=>e("p",{class:"custom-block-title"},"Info",-1)),Z=f(()=>e("p",null,[v("We got your Email! What can be the next step? Join us on "),e("a",{href:"https://www.linkedin.com/showcase/dialogware/"},"linkedin")],-1)),ee=[X,Z],te={key:2,class:"warning custom-block warning_message"},se=f(()=>e("p",{class:"custom-block-title"},"Error",-1)),le=f(()=>e("p",null,"Please fill the fields with min. 6 characters",-1)),ae=[se,le],oe={key:3,class:"warning custom-block error_message"},ne=f(()=>e("p",{class:"custom-block-title"},"Error",-1)),ie=f(()=>e("p",null,[v("Sending message is not possible, contact me please on "),e("a",{href:"https://www.linkedin.com/in/tom-sapletta-com"},"linkedin")],-1)),ce=[ne,ie],ue={__name:"Newsletter",setup(c){const n=s(""),o=s(""),b=s(""),u=s(""),i=s(!1),_=s(!1),p=s(!1),m=s(!0);function $(){if(u.value="DIALOGWARE-ian",n.value="Thank You  for a registration on DIALOGWARE NEWSLETTER.",_.value=!1,i.value=!1,u.value.length<2||o.value.length<4||n.value.length<4)i.value=!0;else{i.value=!1;var g=`https://email.dialogware.com/?type=NEWSLETTER&name=${u.value}&message=${n.value}&email=${o.value}`;fetch(g,{method:"get"}).then(t=>t.json()).then(t=>{o.value=t.email,b.value=t.text,u.value=t.name,t.found>5?_.value=!0:(_.value=!1,i.value=!1,m.value=!1,p.value=!0)})}}return(g,t)=>(l(),a("div",q,[m.value?(l(),a("form",z,[e("div",null,[e("fieldset",null,[w(e("input",{"onUpdate:modelValue":t[0]||(t[0]=h=>o.value=h),placeholder:"@"},null,512),[[k,o.value]])])]),m.value?(l(),a("div",H,[e("fieldset",{class:"button_send"},[e("button",{onClick:$},"Subscribe")])])):r("",!0)])):r("",!0),p.value?(l(),a("div",K,ee)):r("",!0),i.value?(l(),a("div",te,ae)):r("",!0),_.value?(l(),a("div",oe,ce)):r("",!0)]))}},re=y(ue,[["__scopeId","data-v-b21d1f34"]]),_e={id:"frontmatter-title",tabindex:"-1"},de=e("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),me=e("h2",{id:"newsletter",tabindex:"-1"},[v("NEWSLETTER "),e("a",{class:"header-anchor",href:"#newsletter","aria-hidden":"true"},"#")],-1),he=e("p",null,"Leave your email to be the first DIALOGWARE-ian 😃",-1),pe=JSON.parse('{"title":"Contact Form","description":"","frontmatter":{"title":"Contact Form","lang":"en-US","tags":["configuration","theme","contact"]},"headers":[{"level":2,"title":"NEWSLETTER","slug":"newsletter","link":"#newsletter","children":[]}],"relativePath":"user/contact.md"}'),ve={name:"user/contact.md"},ge=Object.assign(ve,{setup(c){return(n,o)=>(l(),a("div",null,[e("h1",_e,[v(N(n.$frontmatter.title)+" ",1),de]),E(Y),me,he,E(re)]))}});export{pe as __pageData,ge as default};
