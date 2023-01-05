import{_ as f,o as i,c,j as m,v as y,b as s,F as v,l as x,t as d,d as u,p as g,i as C,e as w,a as L}from"./app.42a68bad.js";const h="/data/marketplace.json",k={data(){return{search_value:"",items:[]}},created(){this.fetchItems()},methods:{fetchItems(){fetch(h).then(t=>t.json()).then(t=>{this.items=t})},searchByInput(){this.search_value.length<1&&this.fetchItems();const t=this.items.filter(e=>e.input.toLowerCase().includes(this.search_value.toLowerCase()));this.items=t,console.log("search input: "+this.search_value)},searchCategory(){this.search_value.length<1&&this.fetchItems();const t=this.items.filter(e=>e.category.toLowerCase().includes(this.search_value.toLowerCase()));this.items=t,console.log("search category: "+this.search_value)},setCategory(t){t=t.toLowerCase(),fetch(h).then(e=>e.json()).then(e=>{this.items=e;const r=this.items.filter(l=>l.category.toLowerCase().includes(t));this.items=r,console.log("set category: "+t)})},searchByOutput(){let t=this.search_value.toLowerCase();fetch(h).then(e=>e.json()).then(e=>{this.items=e;const r=this.items.filter(l=>l.output.toLowerCase().includes(t));this.items=r,console.log("search output: "+t)})},deployRemote(t){alert(t)},deployLocal(t){alert(t)},runOnBrowser(t){alert(t)},warn(t,e){e&&e.preventDefault(),alert(t)}}},_=t=>(g("data-v-12cd69c7"),t=t(),C(),t),I={class:"category"},S=_(()=>s("label",{for:"yes"},"#api",-1)),B=_(()=>s("label",{for:"no"},"#regex",-1)),b={class:"item_input"},O=["href"],D={class:"item_category"},T={name:"deployment",id:"deployment",required:""},N=_(()=>s("option",{disabled:"",selected:"",value:""},"RUN on: ... ",-1));function R(t,e,r,l,p,o){return i(),c("div",null,[m(s("input",{type:"text","onUpdate:modelValue":e[0]||(e[0]=a=>p.search_value=a),onKeyup:e[1]||(e[1]=(...a)=>o.searchByInput&&o.searchByInput(...a))},null,544),[[y,p.search_value]]),s("div",I,[s("input",{type:"radio",id:"yes",name:"category",value:"api",onClick:e[2]||(e[2]=a=>o.setCategory("api"))}),S,s("input",{type:"radio",id:"no",name:"category",value:"regex",onClick:e[3]||(e[3]=a=>o.setCategory("regex"))}),B]),s("table",null,[s("tbody",null,[(i(!0),c(v,null,x(p.items,a=>(i(),c("tr",{key:a.id},[s("td",null,[s("h3",null,[s("span",b,[s("a",{href:`${a.url}`},d(a.input),9,O)]),s("span",D," #"+d(a.category),1),u(" -> "),s("select",T,[N,s("option",{onClick:e[4]||(e[4]=(...n)=>o.runOnBrowser&&o.runOnBrowser(...n)),value:"1"},"BROWSER"),s("option",{onClick:e[5]||(e[5]=(...n)=>o.deployRemote&&o.deployRemote(...n)),value:"2"},"CLOUD"),s("option",{onClick:e[6]||(e[6]=(...n)=>o.deployLocal&&o.deployLocal(...n)),value:"3"},"LOCAL PC")])]),u(" "+d(a.output),1)])]))),128))])])])}const V=f(k,[["render",R],["__scopeId","data-v-12cd69c7"]]),j=s("h1",{id:"text-to",tabindex:"-1"},[u("text to ... "),s("a",{class:"header-anchor",href:"#text-to","aria-hidden":"true"},"#")],-1),A=L('<p><span><a href="">text2software</a>, </span><span><a href="">text2app</a>, </span><span><a href="">text2code</a>, </span><span><a href="">text2web</a>, </span><span><a href="">text2regex</a>, </span><span><a href="">text2api</a>, </span><span><a href="">text2vue</a>, </span><span><a href="">text2html</a>, </span> ...</p>',1),U=JSON.parse('{"title":"AutoDeployer.com - text to X marketplace","description":"","frontmatter":{"layout":"docs","title":"AutoDeployer.com - text to X marketplace","lang":"en-US"},"headers":[],"relativePath":"index.md"}'),M={name:"index.md"},E=Object.assign(M,{setup(t){return(e,r)=>(i(),c("div",null,[j,w(V),A]))}});export{U as __pageData,E as default};