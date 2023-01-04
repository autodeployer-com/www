import{_ as p,o as i,c as o,l as d,b as e,t as n,F as r,p as h,i as _,d as u,e as f}from"./app.53e46f3b.js";const c=[{id:1,url:"#sentence1",text:"Load [file]. Load each line as URL and make a [screenshots] in [tiny] resolution on [mobile] device. Save each [screenshot] to [file] in format [png].",input:"Load [file]",process:"Load each line as URL and make a [screenshots] in [tiny] resolution on [mobile] device",output:"Save each [screenshot] to [file] in format [png]",dsl:"letfile.load().getfile.getLine().puppeter.toPng()",installation:`#!/bin/bash 
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
apidsl 'letfile.load().getfile.getLine().puppeter.toPng()'`}];const g=c;console.log(g);const m={props:["url","text","dsl","installation"],data(){return{sentences:c}}},s=a=>(h("data-v-46e95a3f"),a=a(),_(),a),L={class:"sentence"},b={id:"sentence{{sentence.id}}"},S=["href"],R={class:"biglabel"},v=s(()=>e("p",{class:"label"},"Editing:",-1)),I={class:"edit"},P=s(()=>e("p",{class:"label"},"Processing:",-1)),E={class:"processed"},T={class:"get_input"},A=s(()=>e("span",{class:"title"},"INPUT: ",-1)),x={class:"part"},D={class:"get_process"},U=s(()=>e("span",{class:"title"},"PROCESS: ",-1)),k={class:"part"},y={class:"get_output"},N=s(()=>e("span",{class:"title"},"OUTPUT: ",-1)),O={class:"part"},F=s(()=>e("p",{class:"label"},"Translation:",-1)),B=s(()=>e("span",{class:"description"},"Sentence is translated from TEXT to DSL:",-1)),w={class:"dsl"},C={class:"part"},$=s(()=>e("p",{class:"label"},"Deployment:",-1)),J=s(()=>e("span",{class:"description"},"Start the script local and remote over shell:",-1)),M={class:"installation"};function V(a,l){return i(!0),o(r,null,d(a.sentences,t=>(i(),o("div",L,[e("div",b,[e("a",{class:"url",href:t.url},[e("p",R,"Sentence no. "+n(t.id),1)],8,S),v,e("div",I,[e("textarea",null,n(t.text),1)]),P,e("div",E,[e("p",T,[A,e("span",x,n(t.input),1)]),e("p",D,[U,e("span",k,n(t.process),1)]),e("p",y,[N,e("span",O,n(t.output),1)])]),F,B,e("p",w,[e("span",C,n(t.dsl),1)]),$,J,e("div",M,[e("textarea",null,n(t.installation),1)])])]))),256)}const j=p(m,[["render",V],["__scopeId","data-v-46e95a3f"]]),X={id:"frontmatter-title",tabindex:"-1"},q=e("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),H=JSON.parse('{"title":"Example Sentence","description":"","frontmatter":{"layout":"docs","title":"Example Sentence","lang":"en-US"},"headers":[],"relativePath":"app/sentences.md"}'),z={name:"app/sentences.md"},K=Object.assign(z,{setup(a){return(l,t)=>(i(),o("div",null,[e("h1",X,[u(n(l.$frontmatter.title)+" ",1),q]),f(j)]))}});export{H as __pageData,K as default};
