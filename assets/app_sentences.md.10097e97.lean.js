import{_ as r,l as h,o as i,c as o,m as _,b as e,t as n,e as p,w as u,F as m,p as f,i as g,d as L}from"./app.50e771db.js";const d=[{id:1,url:"#sentence1",text:"Load [file]. Load each line as URL and make a [screenshots] in [tiny] resolution on [mobile] device. Save each [screenshot] to [file] in format [png].",input:"Load [file]",process:"Load each line as URL and make a [screenshots] in [tiny] resolution on [mobile] device",output:"Save each [screenshot] to [file] in format [png]",dsl:"letfile.load().getfile.getLine().puppeter.toPng()",installation:`#!/bin/bash 
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
apidsl 'letfile.load().getfile.getLine().puppeter.toPng()'`}];const b=d;console.log(b);const S={props:["url","text","dsl","installation"],data(){return{sentences:d}}},t=a=>(f("data-v-460aa18e"),a=a(),g(),a),v={class:"sentence"},R={id:"sentence{{sentence.id}}"},I=["href"],P={class:"biglabel"},E=t(()=>e("p",{class:"label"},"Editing:",-1)),T=t(()=>e("p",{class:"label"},"Processing:",-1)),x={class:"processed"},A={class:"get_input"},D=t(()=>e("span",{class:"title"},"INPUT: ",-1)),U={class:"part"},k={class:"get_process"},y=t(()=>e("span",{class:"title"},"PROCESS: ",-1)),N={class:"part"},O={class:"get_output"},F=t(()=>e("span",{class:"title"},"OUTPUT: ",-1)),w={class:"part"},B=t(()=>e("p",{class:"label"},"Translation:",-1)),C=t(()=>e("span",{class:"description"},"Sentence is translated from TEXT to DSL:",-1)),$={class:"dsl"},J={class:"part"},M=t(()=>e("p",{class:"label"},"Deployment:",-1)),V=t(()=>e("span",{class:"description"},"Start the script local and remote over shell:",-1)),j={class:"installation"};function X(a,l){const c=h("dev");return i(!0),o(m,null,_(a.sentences,s=>(i(),o("div",v,[e("div",R,[e("a",{class:"url",href:s.url},[e("p",P,"Sentence no. "+n(s.id),1)],8,I),E,p(c,{class:"edit"},{default:u(()=>[e("textarea",null,n(s.text),1)]),_:2},1024),T,e("div",x,[e("p",A,[D,e("span",U,n(s.input),1)]),e("p",k,[y,e("span",N,n(s.process),1)]),e("p",O,[F,e("span",w,n(s.output),1)])]),B,C,e("p",$,[e("span",J,n(s.dsl),1)]),M,V,e("div",j,[e("textarea",null,n(s.installation),1)])])]))),256)}const q=r(S,[["render",X],["__scopeId","data-v-460aa18e"]]),z={id:"frontmatter-title",tabindex:"-1"},G=e("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),Q=JSON.parse('{"title":"Example Sentence","description":"","frontmatter":{"layout":"docs","title":"Example Sentence","lang":"en-US"},"headers":[],"relativePath":"app/sentences.md"}'),H={name:"app/sentences.md"},W=Object.assign(H,{setup(a){return(l,c)=>(i(),o("div",null,[e("h1",z,[L(n(l.$frontmatter.title)+" ",1),G]),p(q)]))}});export{Q as __pageData,W as default};
