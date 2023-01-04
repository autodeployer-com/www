import{_ as h,r as u,o as n,c as s,b as e,j as f,v as m,k as d,F as p,l as g,t as r,u as L,p as _,i as b}from"../app.6e071721.js";const S=[{id:1,url:"#sentence1",text:"Load [file]. Load each line as URL and make a [screenshots] in [tiny] resolution on [mobile] device. Save each [screenshot] to [file] in format [png].",input:"Load [file]",process:"Load each line as URL and make a [screenshots] in [tiny] resolution on [mobile] device",output:"Save each [screenshot] to [file] in format [png]",dsl:"letfile.load().getfile.getLine().puppeter.toPng()",installation:`#!/bin/bash 
#INSTALL APIDSL
curl https://raw.githubusercontent.com/apidsl/bash/main/apidsl.sh -o apidsl
./apidsl init
# CREATE FOLDER
mkdir 1667145230
cd 1667145230
# IMPORT LIBRARIES
apidsl --get https://github.com/letfile/file	
apidsl --get https://github.com/leteach/file
apidsl --get https://github.com/puppeter/file
# RUN APIDSL
apidsl 'letfile.load().getfile.getLine().puppeter.toPng()'`},{id:2,url:"#sentence2",text:"Load [file]. Load each line as URL and make a [screenshots] in [tiny] resolution on [mobile] device. Save each [screenshot] to [file] in format [png].",input:"Load [file]",process:"Load each line as URL and make a [screenshots] in [tiny] resolution on [mobile] device",output:"Save each [screenshot] to [file] in format [png]",dsl:"letfile.load().getfile.getLine().puppeter.toPng()",installation:`#!/bin/bash 
#INSTALL APIDSL
curl https://raw.githubusercontent.com/apidsl/bash/main/apidsl.sh -o apidsl
./apidsl init
# CREATE FOLDER
mkdir 1667145230
cd 1667145230
# IMPORT LIBRARIES
apidsl --get https://github.com/letfile/file	
apidsl --get https://github.com/leteach/file
apidsl --get https://github.com/puppeter/file
# RUN APIDSL
apidsl 'letfile.load().getfile.getLine().puppeter.toPng()'`},{id:3,url:"#sentence3",text:"Load [file]. Load each line as URL and make a [screenshots] in [tiny] resolution on [mobile] device. Save each [screenshot] to [file] in format [png].",input:"Load [file]",process:"Load each line as URL and make a [screenshots] in [tiny] resolution on [mobile] device",output:"Save each [screenshot] to [file] in format [png]",dsl:"letfile.load().getfile.getLine().puppeter.toPng()",installation:`#!/bin/bash 
#INSTALL APIDSL
curl https://raw.githubusercontent.com/apidsl/bash/main/apidsl.sh -o apidsl
./apidsl init
# CREATE FOLDER
mkdir 1667145230
cd 1667145230
# IMPORT LIBRARIES
apidsl --get https://github.com/letfile/file	
apidsl --get https://github.com/leteach/file
apidsl --get https://github.com/puppeter/file
# RUN APIDSL
apidsl 'letfile.load().getfile.getLine().puppeter.toPng()'`}];const v=i=>(_("data-v-04bc3169"),i=i(),b(),i),R={class:"search_box"},I={key:0,method:"get",class:"search_form",id:"search_form",action:"#",onsubmit:"return false;"},k={key:0},A={class:"button_send"},P={class:"sentence"},E={id:"sentence{{sentence.id}}"},y=["href"],D={class:"biglabel"},T=v(()=>e("p",{class:"label"},"Editing:",-1)),U={class:"edit"},F={__name:"SentenceFromJson",setup(i){const l=S;console.log(l);const c=u(!0);return(o,a)=>(n(),s(p,null,[e("div",R,[c.value?(n(),s("form",I,[e("div",null,[e("fieldset",null,[f(e("input",{"onUpdate:modelValue":a[0]||(a[0]=t=>o.search_label=t),placeholder:""},null,512),[[m,o.search_label]])])]),c.value?(n(),s("div",k,[e("fieldset",A,[e("button",{onClick:a[1]||(a[1]=(...t)=>o.search&&o.search(...t))},"Search")])])):d("",!0)])):d("",!0)]),(n(!0),s(p,null,g(L(l),t=>(n(),s("div",P,[e("div",E,[e("a",{class:"url",href:t.url},[e("p",D,"Sentence no. "+r(t.id),1)],8,y),T,e("div",U,[e("textarea",null,r(t.text),1)])])]))),256))],64))}},x=h(F,[["__scopeId","data-v-04bc3169"]]);export{x as S};
