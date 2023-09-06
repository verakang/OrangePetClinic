import{S as u}from"./sweetalert2.all-710f7ddf.js";import{_ as p,r as n,o as b,c as h,b as e,a as s,w as v,F as x,e as t,n as c}from"./index-562335f0.js";const g="/OrangePetClinic/assets/contact-banner-c20894d2.jpg";const y={data(){return{isLoading:!1}},methods:{onSubmit(){u.fire({position:"center",icon:"success",title:"謝謝您的回饋，我們將盡快回覆您的寶貴意見：）",showConfirmButton:!0,toast:!0}),this.$refs.form.resetForm()},formReset(){this.$refs.form.resetForm()}},mounted(){this.isLoading=!0,setTimeout(()=>{this.isLoading=!1},500)}},w=s("div",{class:"contact_banner position-relative"},[s("img",{src:g,class:"w-100 h-100",alt:"contact banner"}),s("h2",{class:"text-center mb-7 fst-italic position-absolute top-50 start-50 translate-middle text-secondary"},[t("聯絡我們"),s("span",{class:"display-2 d-none d-lg-inline-block subtitle"},"/Contact Us")])],-1),k={class:"px-4 col-lg-8 col-xxl-6 mx-auto"},C={class:"contact_content container bg-light px-5 py-7 rounded-4 mb-10"},V=s("h3",{class:"text-center border-bottom pb-5"}," 意見回饋 ",-1),L=s("div",{class:"col-sm-9 mx-auto"},[s("p",{class:"mt-7"},[t("親愛的朋友們～"),s("br"),t(" 我們非常期待聽到您的寶貴意見！如果您對於橘子動物醫院有任何的建議或問題，請您毫不猶豫地填寫以下表格。您的每一個想法都對我們來說都非常重要，我們真心誠摯地期待與您的交流。 我們承諾，您的意見將被我們用心聆聽，我們會盡快回覆您，以確保您的需求得到妥善處理。感謝您的支持與參與，讓我們一起共同為橘子動物醫院的進步努力！ 橘子動物醫院全體成員上。 ")])],-1),S={class:"mx-auto mt-8"},N={class:"row mb-3"},q=s("label",{for:"inputName",class:"col-sm-2 offset-sm-1 form-label col-form-label text-sm-end"},[t("姓名"),s("span",{class:"text-notice ms-1"},"*")],-1),B={class:"col-sm-7"},F={class:"row mb-3"},T=s("label",{for:"inputPhone",class:"col-sm-2 offset-sm-1 form-label col-form-label text-sm-end"},[t("電話"),s("span",{class:"text-notice ms-1"},"*")],-1),E={class:"col-sm-7"},P={class:"row mb-3"},R=s("label",{for:"inputEmail",class:"col-sm-2 offset-sm-1 form-label col-form-label text-sm-end"},[t("信箱"),s("span",{class:"text-notice ms-1"},"*")],-1),$={class:"col-sm-7"},j={class:"row mb-6"},z=s("label",{for:"inputTextarea",class:"col-sm-2 offset-sm-1 form-label col-form-label text-sm-end"},[t("留言"),s("span",{class:"text-notice ms-1"},"*")],-1),O={class:"col-sm-7"},U={class:"offset-6 offset-md-7 offset-lg-8"},A=s("button",{type:"submit",class:"btn btn-primary text-secondary"},"送出",-1);function D(G,r,H,I,m,i){const d=n("VueLoading"),o=n("v-field"),a=n("error-message"),_=n("v-form");return b(),h(x,null,[e(d,{active:m.isLoading,loader:"dots",color:"#1ca0b8"},null,8,["active"]),s("section",null,[w,s("div",k,[s("div",C,[V,L,s("div",S,[e(_,{onSubmit:i.onSubmit,class:"d-flex flex-column px-4",ref:"form"},{default:v(({errors:l})=>[s("div",N,[q,s("div",B,[e(o,{name:"姓名",type:"text",class:c(["form-control",{"is-invalid":l.姓名}]),id:"inputName",placeholder:"請輸入姓名",rules:"required"},null,8,["class"]),e(a,{name:"姓名",class:"invalid-feedback"})])]),s("div",F,[T,s("div",E,[e(o,{name:"電話",type:"tel",class:c(["form-control",{"is-invalid":l.電話}]),id:"inputPhone",placeholder:"請輸入電話",rules:"numeric|min:8|required"},null,8,["class"]),e(a,{name:"電話",class:"invalid-feedback"})])]),s("div",P,[R,s("div",$,[e(o,{name:"信箱",type:"email",class:c(["form-control",{"is-invalid":l.信箱}]),id:"inputEmail",placeholder:"請輸入信箱",rules:"email|required"},null,8,["class"]),e(a,{name:"信箱",class:"invalid-feedback"})])]),s("div",j,[z,s("div",O,[e(o,{as:"textarea",name:"留言",class:c(["form-control",{"is-invalid":l.留言}]),id:"inputTextarea",placeholder:"請留下您的寶貴意見",rules:"required"},null,8,["class"]),e(a,{name:"留言",class:"invalid-feedback"})])]),s("div",U,[s("button",{type:"button",class:"btn btn-outline-dark me-4",onClick:r[0]||(r[0]=(...f)=>i.formReset&&i.formReset(...f))},"取消"),A])]),_:1},8,["onSubmit"])])])])])],64)}const M=p(y,[["render",D]]);export{M as default};
