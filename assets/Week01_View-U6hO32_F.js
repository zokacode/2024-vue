import{r,c as i,a as e,F as _,b,o as l,t as c,w as p,v as u}from"./index-Dbu87jjc.js";const k={class:"container my-5"},y={class:"row d-flex justify-content-center"},x={class:"divborder"},g={scope:"row"},C={class:"text-center"},w=["disabled","onClick"],$={class:"mx-2"},B=["onClick"],M=["data-bs-target","onClick"],V=["id"],E={class:"modal-dialog modal-dialog-centered"},I={class:"modal-content"},L=e("div",{class:"modal-header"},[e("h5",{class:"modal-title",id:"exampleModalLabel"},"修改資料"),e("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),U={class:"modal-body"},D={class:"mb-3"},F=["for"],N=["id"],Q={class:"mb-3"},S=["for"],T=["id"],j={class:"mb-3"},W=["for"],q=["id"],z={class:"modal-footer"},A=e("button",{type:"button",class:"btn btn-secondary","data-bs-dismiss":"modal"},"關閉",-1),G=["onClick"],K={__name:"Week01_View",setup(H){const v=r([{name:"品項"},{name:"描述"},{name:"價格"},{name:"庫存"},{name:"操作"}]),d=r([{id:1,name:"珍珠奶茶",description:"香濃奶茶搭配QQ珍珠",price:50,stock:20},{id:2,name:"冬瓜檸檬",description:"清新冬瓜配上新鮮檸檬",price:45,stock:15},{id:3,name:"翡翠檸檬",description:"綠茶與檸檬的完美結合",price:55,stock:30},{id:4,name:"四季春茶",description:"香醇四季春茶，回甘無比",price:45,stock:10},{id:5,name:"阿薩姆奶茶",description:"阿薩姆紅茶搭配香醇鮮奶",price:50,stock:25},{id:6,name:"檸檬冰茶",description:"檸檬與冰茶的清新組合",price:45,stock:20},{id:7,name:"芒果綠茶",description:"芒果與綠茶的獨特風味",price:55,stock:18},{id:8,name:"抹茶拿鐵",description:"抹茶與鮮奶的絕配",price:60,stock:20}]),n=r({name:"",description:"",price:""});function m(a,o){d.value.map(t=>(t.id==a&&(t.stock+=o),t))}function h(a){const o=d.value.find(t=>t.id==a);o&&(n.value={name:o.name,description:o.description,price:o.price})}function f(a){const o=d.value.findIndex(t=>t.id==a);d.value[o]!=-1?(d.value[o]={...d.value[o],name:n.value.name,description:n.value.description,price:n.value.price},alert("更新成功!"),bootstrap.Modal.getInstance(document.getElementById(`modal-${a}`)).hide()):(alert("更新失敗!"),bootstrap.Modal.getInstance(document.getElementById(`modal-${a}`)).hide())}return(a,o)=>(l(),i("div",k,[e("div",y,[e("table",x,[e("thead",null,[e("tr",null,[(l(!0),i(_,null,b(v.value,(t,s)=>(l(),i("th",{scope:"col",class:"fw-bold",key:s},c(t.name),1))),128))])]),e("tbody",null,[(l(!0),i(_,null,b(d.value,t=>(l(),i("tr",{key:t.id},[e("td",g,c(t.name),1),e("td",null,c(t.description),1),e("td",null,"NT$ "+c(t.price),1),e("td",C,[e("button",{disabled:t.stock==0,class:"btn btn-sm btn-secondary py-1 px-2",onClick:s=>m(t.id,-1)},"-",8,w),e("span",$,c(t.stock),1),e("button",{class:"btn btn-sm btn-primary py-1 px-2",onClick:s=>m(t.id,1)},"+",8,B)]),e("td",null,[e("button",{class:"btn btn-sm py-1 px-2","data-bs-toggle":"modal","data-bs-target":"#modal-"+t.id,onClick:s=>h(t.id)},"📝",8,M),e("div",{class:"modal fade",id:"modal-"+t.id,tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true"},[e("div",E,[e("div",I,[L,e("div",U,[e("div",D,[e("label",{for:"name"+t.id,class:"form-label"},"品項名稱",8,F),p(e("input",{type:"text",class:"form-control",id:"name"+t.id,placeholder:"品項名稱","onUpdate:modelValue":o[0]||(o[0]=s=>n.value.name=s)},null,8,N),[[u,n.value.name]])]),e("div",Q,[e("label",{for:"description"+t.id,class:"form-label"},"描述",8,S),p(e("textarea",{class:"form-control",id:"description"+t.id,rows:"3","onUpdate:modelValue":o[1]||(o[1]=s=>n.value.description=s)},null,8,T),[[u,n.value.description]])]),e("div",j,[e("label",{for:"price"+t.id,class:"form-label"},"價格",8,W),p(e("input",{type:"number",class:"form-control",id:"price"+t.id,placeholder:"價格","onUpdate:modelValue":o[2]||(o[2]=s=>n.value.price=s)},null,8,q),[[u,n.value.price]])])]),e("div",z,[A,e("button",{type:"button",class:"btn btn-primary",onClick:s=>f(t.id)},"更新",8,G)])])])],8,V)])]))),128))])])])]))}};export{K as default};
