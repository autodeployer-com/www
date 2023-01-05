import{_ as f,o as i,c,j as m,v as y,b as s,F as x,l as g,t as h,d,p as v,i as C,e as w,a as k}from"./app.ab26ee35.js";const u="/data/marketplace.json",I={data(){return{search_value:"",items:[]}},created(){this.fetchItems()},methods:{fetchItems(){fetch(u).then(t=>t.json()).then(t=>{this.items=t})},searchByInput(){this.search_value.length<1&&this.fetchItems();const t=this.items.filter(e=>e.input.toLowerCase().includes(this.search_value.toLowerCase()));this.items=t,console.log("search input: "+this.search_value)},searchCategory(){this.search_value.length<1&&this.fetchItems();const t=this.items.filter(e=>e.category.toLowerCase().includes(this.search_value.toLowerCase()));this.items=t,console.log("search category: "+this.search_value)},setCategory(t){t=t.toLowerCase(),fetch(u).then(e=>e.json()).then(e=>{this.items=e;const r=this.items.filter(l=>l.category.toLowerCase().includes(t));this.items=r,console.log("set category: "+t)})},searchByOutput(){let t=this.search_value.toLowerCase();fetch(u).then(e=>e.json()).then(e=>{this.items=e;const r=this.items.filter(l=>l.output.toLowerCase().includes(t));this.items=r,console.log("search output: "+t)})},deployRemote(t){alert(t)},deployLocal(t){alert(t)},runOnBrowser(t){alert(t)},warn(t,e){e&&e.preventDefault(),alert(t)}}},_=t=>(v("data-v-89699cf1"),t=t(),C(),t),L={class:"category"},S=_(()=>s("label",{for:"yes"},"#api",-1)),b=_(()=>s("label",{for:"no"},"#regex",-1)),B={class:"item_input"},D={href:"{{ item.url }}"},O={class:"item_category"},T=_(()=>s("span",{class:"item_button"}," RUN on:",-1));function N(t,e,r,l,p,a){return i(),c("div",null,[m(s("input",{type:"text","onUpdate:modelValue":e[0]||(e[0]=o=>p.search_value=o),onKeyup:e[1]||(e[1]=(...o)=>a.searchByInput&&a.searchByInput(...o))},null,544),[[y,p.search_value]]),s("div",L,[s("input",{type:"radio",id:"yes",name:"category",value:"api",onClick:e[2]||(e[2]=o=>a.setCategory("api"))}),S,s("input",{type:"radio",id:"no",name:"category",value:"regex",onClick:e[3]||(e[3]=o=>a.setCategory("regex"))}),b]),s("table",null,[s("tbody",null,[(i(!0),c(x,null,g(p.items,o=>(i(),c("tr",{key:o.id},[s("td",null,[s("h3",null,[s("span",B,[s("a",D,h(o.input),1)]),s("span",O," #"+h(o.category),1),d(" -> "),T,s("button",{onClick:e[4]||(e[4]=(...n)=>a.runOnBrowser&&a.runOnBrowser(...n))},"BROWSER"),s("button",{onClick:e[5]||(e[5]=(...n)=>a.deployRemote&&a.deployRemote(...n))},"CLOUD"),s("button",{onClick:e[6]||(e[6]=(...n)=>a.deployLocal&&a.deployLocal(...n))},"PC")]),d(" "+h(o.output),1)])]))),128))])])])}const R=f(I,[["render",N],["__scopeId","data-v-89699cf1"]]),V=s("h1",{id:"text-to",tabindex:"-1"},[d("text to ... "),s("a",{class:"header-anchor",href:"#text-to","aria-hidden":"true"},"#")],-1),j=k("",1),P=JSON.parse('{"title":"AutoDeployer.com - text to X marketplace","description":"","frontmatter":{"layout":"docs","title":"AutoDeployer.com - text to X marketplace","lang":"en-US"},"headers":[],"relativePath":"index.md"}'),A={name:"index.md"},U=Object.assign(A,{setup(t){return(e,r)=>(i(),c("div",null,[V,w(R),j]))}});export{P as __pageData,U as default};
