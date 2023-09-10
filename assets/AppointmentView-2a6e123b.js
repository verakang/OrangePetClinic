import{S as _}from"./sweetalert2.all-6c0139a6.js";import{_ as w,r as h,o as p,c as b,b as a,a as e,t as f,w as v,F as g,g as N,e as l,n as r}from"./index-fbd2faae.js";const B={data(){return{isLoading:!1,selectedDate:null,today:null,number:"",phoneNumber:"",message:"",time:"",petName:"",ownerName:"",message:"",booktemp:{phoneNumber:"",date:"",time:"",petName:"",ownerName:"",message:"",selected:!0,state:!0},bookList:[{phoneNumber:"0911234567",date:"2023/9/20",time:"10:00-11:00",petName:"橘子",ownerName:"Vera",message:"食慾不振、拉肚子",selected:!0,state:!0},{phoneNumber:"0911234567",date:"2023/9/27",time:"19:00-20:00",petName:"橘子",ownerName:"Vera",message:"回診",selected:!1,state:!0}],tempList:[],showBook:{}}},methods:{getData(){const i=document.getElementById("selectedDate"),t=document.getElementById("datepicker"),d=new Date,k=new Date(d.getFullYear(),d.getMonth()+1,0),s=moment(d).format("YYYY/M/D");this.today=s;const c=new Pikaday({firstDay:1,minDate:d,maxDate:k,format:"YYYY/M/D",defaultDate:d,onSelect:function(x){let m=moment(x).format("YYYY/M/D");t.value=m,i.innerHTML=m}});c.setDate(d),t.appendChild(c.el)},isPhone(i){return/^(09)[0-9]{8}$/.test(i)?!0:"請輸入手機號碼共十碼"},onSubmit(){this.booktemp.phoneNumber=this.phoneNumber,this.booktemp.time=this.time,this.booktemp.date=this.$refs.pickDay.innerHTML,this.booktemp.petName=this.petName,this.booktemp.ownerName=this.ownerName,this.booktemp.message=this.message,this.bookList.push(this.booktemp),_.fire({position:"center",icon:"success",title:"預約完成：）",showConfirmButton:!1,timer:1e3,timerProgressBar:!0,toast:!0}),this.$refs.form.resetForm()},formReset(){this.$refs.form.resetForm()},onCheck(){this.tempList=[],this.bookList.forEach(i=>{i.phoneNumber==this.number&&this.tempList.push(i)}),this.tempList.sort(function(i,t){return i.date.split("/")[2]-t.date.split("/")[2]}),this.tempList.length!=0?this.getBook(this.tempList[0].date):(this.tempList=[],this.$refs.checkForm.resetForm(),_.fire({position:"center",icon:"error",title:"查無預約資料，請再次確認。",showConfirmButton:!0,toast:!0}))},getBook(i){this.tempList.forEach((t,d)=>{this.tempList[d].selected=!1,t.date==i&&(this.tempList[d].selected=!0,this.showBook=t)})},deleteBook(){_.fire({position:"center",title:"確認取消約診？",icon:"warning",showCancelButton:!0,confirmButtonColor:"#1ca0b8",cancelButtonColor:"#fea386",confirmButtonText:"是，請取消約診。",icon:"success",toast:!0}).then(i=>{i.isConfirmed&&(this.showBook.state=!1,_.fire({position:"center",title:"取消完成",text:"您的約診已取消，如有需要請重新預約。",icon:"success",toast:!0}))})}},mounted(){this.isLoading=!0,setTimeout(()=>{this.isLoading=!1},500),this.getData()}},V={class:"appointment-wrap pt-10"},L=e("div",null,[e("h2",{class:"text-center fst-italic mb-5"},[l("預約掛號"),e("span",{class:"display-2 text-notice subtitle"},"/Appointment")])],-1),D={class:"appointment-content"},C=e("ul",{class:"nav nav-tabs container px-3",id:"myTab",role:"tablist"},[e("li",{class:"nav-item",role:"presentation"},[e("button",{class:"nav-link active",id:"home-tab","data-bs-toggle":"tab","data-bs-target":"#home",type:"button",role:"tab","aria-controls":"home","aria-selected":"true"},"預約須知")]),e("li",{class:"nav-item",role:"presentation"},[e("button",{class:"nav-link",id:"profile-tab","data-bs-toggle":"tab","data-bs-target":"#profile",type:"button",role:"tab","aria-controls":"profile","aria-selected":"false"},"線上掛號")]),e("li",{class:"nav-item",role:"presentation"},[e("button",{class:"nav-link",id:"contact-tab","data-bs-toggle":"tab","data-bs-target":"#contact",type:"button",role:"tab","aria-controls":"contact","aria-selected":"false"},"掛號查詢")])],-1),T={class:"tab-content bg-white",id:"myTabContent"},Y=e("div",{class:"tab-pane fade container show active py-10 col-10 col-md-8 col-xxl-6",id:"home",role:"tabpanel","aria-labelledby":"home-tab"},[e("p",null,"親愛的寵物飼主您好，"),e("p",null,"感謝您選擇橘子動物醫院為您的愛寵提供醫療服務。以下是本院的預約須知，請您仔細閱讀："),e("p",null,[e("span",{class:"material-symbols-rounded me-2 text-notice subtitle"},"done_all"),l("預約方式：為了提供更優質的醫療服務，本院實行預約制度。您可以透過網路預約、電話預約或親自前來櫃台預約。預約不僅可以避免長時間的等待，還能確保寵物在最適合的時間得到專業的診療服務。")]),e("p",null,[e("span",{class:"material-symbols-rounded me-2 text-notice subtitle"},"done_all"),l("預約時間：請您提前預約，以確保能在您希望的時間內得到預約診療。我們將努力調配醫師與護士的工作時間，使您的預約得到最佳的安排。")]),e("p",null,[e("span",{class:"material-symbols-rounded me-2 text-notice subtitle"},"done_all"),l("取消預約：若因故無法前來就診，請您提前通知我們，以便釋放預約名額給其他需要的寵物飼主。我們非常理解生活中的突發狀況，但提前通知取消預約將有助於預約安排的彈性與順暢。")]),e("p",null,[e("span",{class:"material-symbols-rounded me-2 text-notice subtitle"},"done_all"),l("緊急情況：緊急狀況下，為了能及時幫助寵物，本院將提供少量現場候診名額。這些名額將由醫護團隊專門預留給出現急需醫療的寵物，確保緊急情況下的快速就診。然而，這可能稍微耽誤已預約飼主的診療時間，我們在此提前致上歉意。")]),e("p",null,[e("span",{class:"material-symbols-rounded me-2 text-notice subtitle"},"done_all"),l("醫院規定：為了維護醫院的秩序與寵物健康，請遵守醫院相關規定，勿攜帶其他動物進入診療區域。狗狗請務必穿戴項圈和牽繩，並保持良好的性情，避免在醫院內與其他動物或飼主發生摩擦。")]),e("p",null,"在橘子動物醫院，我們致力於為每一位寵物提供專業、關愛的醫療服務。如果您對預約須知有任何疑問，或需要協助預約，請隨時與我們聯繫。期待與您攜手守護寵物健康，讓您的毛小孩擁有幸福快樂的生活！")],-1),j={class:"tab-pane fade container py-10",id:"profile",role:"tabpanel","aria-labelledby":"profile-tab"},F={class:"row gy-6"},P=e("div",{class:"col-md-5"},[e("div",null,[e("div",{id:"datepicker"}),e("p",{class:"m-4 text-primary"},"每個月 20 日公布下個月班表，並開放預約。")])],-1),S={class:"col-md-7"},M={class:"book-form py-7 rounded-5 bg-light"},U={class:"d-flex justify-content-center mb-3"},E=e("label",{for:"inputTime",class:"form-label col-form-label text-sm-end me-4"},[l("預約時段"),e("span",{class:"text-notice ms-1"},"*")],-1),q={class:"w-75"},A=e("option",{selected:"",disabled:"",value:""},"請選擇預約時段",-1),R=e("option",{value:"10:00-11:00"},"10:00-11:00",-1),z=e("option",{value:"11:00-12:00"},"11:00-12:00",-1),H=e("option",{value:"14:00-15:00"},"14:00-15:00",-1),I=e("option",{value:"15:00-16:00"},"15:00-16:00",-1),O=e("option",{value:"16:00-17:30"},"16:00-17:30",-1),G=e("option",{value:"18:00-19:00"},"18:00-19:00",-1),J=e("option",{value:"19:00-20:30",disabled:""},"19:00-20:30",-1),K={role:"alert",class:"invalid-feedback"},Q={class:"d-flex justify-content-center mb-3"},W=e("label",{for:"petName",class:"form-label col-form-label text-sm-end me-4"},[l("寵物姓名"),e("span",{class:"text-notice ms-1"},"*")],-1),X={class:"w-75"},Z={class:"d-flex justify-content-center mb-3"},$=e("label",{for:"inputName",class:"form-label col-form-label text-sm-end me-4"},[l("飼主姓名"),e("span",{class:"text-notice ms-1"},"*")],-1),ee={class:"w-75"},te={class:"d-flex justify-content-center mb-3"},se=e("label",{for:"inputPhone",class:"form-label col-form-label text-sm-end me-4"},[l("聯絡電話"),e("span",{class:"text-notice ms-1"},"*")],-1),oe={class:"w-75"},le=e("p",{class:"mt-1 text-primary",style:{"font-size":"14px"}},"聯絡電話為查詢依據，請確認後再送出。",-1),ae={class:"d-flex justify-content-center mb-6"},ne=e("label",{for:"inputTextarea",class:"form-label col-form-label text-sm-end me-4"},[l("狀況說明"),e("span",{class:"text-notice ms-1"},"*")],-1),ie={class:"w-75"},ce={class:"text-end me-5 me-xl-8"},de=e("button",{type:"submit",class:"btn btn-primary text-secondary"},"送出",-1),me={class:"tab-pane fade container py-10",id:"contact",role:"tabpanel","aria-labelledby":"contact-tab"},re={class:"col-md-8 offset-md-2"},ue={class:"book-form py-7 rounded-5 bg-light"},pe=e("label",{for:"inputPhone",class:"form-label col-form-label text-sm-end me-4"},[l("聯絡電話"),e("span",{class:"text-notice ms-1"},"*")],-1),be={class:"w-75 input-group"},fe=e("button",{type:"submit",class:"btn btn-primary text-secondary ms-2"},"查詢",-1),_e=e("h3",{class:"text-center my-7"},"預約資訊",-1),he={class:"list-unstyled d-flex col-10 offset-1 offset-lg-2"},ve=["onClick"],xe={key:0},ye={class:"d-flex justify-content-center mb-3"},ke=e("label",{for:"inputTime",class:"form-label col-form-label text-sm-end me-4"},[l("預約時段"),e("span",{class:"text-notice ms-1"},"*")],-1),ge={class:"w-75"},we={name:"預約時段",id:"inputTime",class:"form-select",disabled:""},Ne={selected:"",disabled:"",value:""},Be={class:"d-flex justify-content-center mb-3"},Ve=e("label",{for:"petName",class:"form-label col-form-label text-sm-end me-4"},[l("寵物姓名"),e("span",{class:"text-notice ms-1"},"*")],-1),Le={class:"w-75"},De=["value"],Ce={class:"d-flex justify-content-center mb-3"},Te=e("label",{for:"inputName",class:"form-label col-form-label text-sm-end me-4"},[l("飼主姓名"),e("span",{class:"text-notice ms-1"},"*")],-1),Ye={class:"w-75"},je=["value"],Fe={class:"d-flex justify-content-center mb-3"},Pe=e("label",{for:"inputTextarea",class:"form-label col-form-label text-sm-end me-4"},[l("狀況說明"),e("span",{class:"text-notice ms-1"},"*")],-1),Se={class:"w-75"},Me={name:"狀況說明",type:"textarea",class:"form-control",id:"inputTextarea",disabled:""},Ue={class:"d-flex justify-content-center mb-6"},Ee=e("label",{for:"state",class:"form-label col-form-label text-sm-end me-4"},[l("預約狀態"),e("span",{class:"text-notice ms-1"},"*")],-1),qe={class:"w-75"},Ae=["value"],Re={class:"text-end me-5 me-xl-8"},ze={key:1,class:"text-center pb-7"};function He(i,t,d,k,s,c){const x=h("VueLoading"),m=h("v-field"),u=h("error-message"),y=h("v-form");return p(),b(g,null,[a(x,{active:s.isLoading,loader:"dots",color:"#1ca0b8"},null,8,["active"]),e("section",V,[L,e("div",D,[C,e("div",T,[Y,e("div",j,[e("div",F,[P,e("div",S,[e("div",M,[e("h3",{class:"text-center border-bottom pb-5",id:"selectedDate",ref:"pickDay"},f(s.today),513),a(y,{onSubmit:c.onSubmit,class:"d-flex flex-column px-4 mt-7",ref:"form"},{default:v(({errors:o})=>[e("div",U,[E,e("div",q,[a(m,{name:"預約時段",as:"select",id:"inputTime",class:r(["form-select",{"is-invalid":o.預約時段}]),"aria-label":"Default select example",rules:"required",modelValue:s.time,"onUpdate:modelValue":t[0]||(t[0]=n=>s.time=n)},{default:v(()=>[A,R,z,H,I,O,G,J]),_:2},1032,["class","modelValue"]),e("span",K,f(o.預約時段),1)])]),e("div",Q,[W,e("div",X,[a(m,{name:"寵物姓名",type:"text",class:r(["form-control",{"is-invalid":o.寵物姓名}]),id:"petName",modelValue:s.petName,"onUpdate:modelValue":t[1]||(t[1]=n=>s.petName=n),placeholder:"請輸入寵物姓名",rules:"required",prop:"petName"},null,8,["modelValue","class"]),a(u,{name:"寵物姓名",class:"invalid-feedback"})])]),e("div",Z,[$,e("div",ee,[a(m,{name:"飼主姓名",type:"text",class:r(["form-control",{"is-invalid":o.飼主姓名}]),id:"inputName",modelValue:s.ownerName,"onUpdate:modelValue":t[2]||(t[2]=n=>s.ownerName=n),placeholder:"請輸入飼主姓名",rules:"required"},null,8,["modelValue","class"]),a(u,{name:"飼主姓名",class:"invalid-feedback"})])]),e("div",te,[se,e("div",oe,[a(m,{name:"聯絡電話",type:"tel",class:r(["form-control",{"is-invalid":o.聯絡電話}]),id:"inputPhone",modelValue:s.phoneNumber,"onUpdate:modelValue":t[3]||(t[3]=n=>s.phoneNumber=n),placeholder:"請輸入聯絡電話",rules:c.isPhone},null,8,["modelValue","class","rules"]),a(u,{name:"聯絡電話",class:"invalid-feedback"}),le])]),e("div",ae,[ne,e("div",ie,[a(m,{name:"狀況說明",as:"textarea",type:"textarea",class:r(["form-control",{"is-invalid":o.狀況說明}]),id:"inputTextarea",modelValue:s.message,"onUpdate:modelValue":t[4]||(t[4]=n=>s.message=n),placeholder:"請簡述就診原因",rules:"required"},null,8,["modelValue","class"]),a(u,{name:"狀況說明",class:"invalid-feedback"})])]),e("div",ce,[e("button",{type:"button",class:"btn btn-outline-dark me-4",onClick:t[5]||(t[5]=(...n)=>c.formReset&&c.formReset(...n))},"取消"),de])]),_:1},8,["onSubmit"])])])])]),e("div",me,[e("div",re,[e("div",ue,[a(y,{onSubmit:t[7]||(t[7]=o=>c.onCheck()),class:"border-bottom pb-5 d-flex justify-content-center px-5 px-lg-10",ref:"checkForm"},{default:v(({errors:o})=>[pe,e("div",be,[a(m,{name:"聯絡電話",type:"tel",class:r(["form-control",{"is-invalid":o.聯絡電話}]),id:"inputPhone",modelValue:s.number,"onUpdate:modelValue":t[6]||(t[6]=n=>s.number=n),placeholder:"請輸入聯絡電話",rules:c.isPhone},null,8,["modelValue","class","rules"]),fe,a(u,{name:"聯絡電話",class:"invalid-feedback"})])]),_:1},512),_e,e("ul",he,[(p(!0),b(g,null,N(s.tempList,o=>(p(),b("li",{key:`${o.date}+${o.time}`},[e("button",{type:"button",class:r(["btn btn-sm rounded-0 btn-outline-primary me-2",{active:o.selected,"text-secondary":o.selected}]),onClick:n=>c.getBook(o.date)},f(o.date),11,ve)]))),128))]),s.tempList.length!=0?(p(),b("div",xe,[a(y,{class:"d-flex flex-column mt-7 px-5 px-lg-10",ref:"bookForm"},{default:v(()=>[e("div",ye,[ke,e("div",ge,[e("select",we,[e("option",Ne,f(s.showBook.time),1)])])]),e("div",Be,[Ve,e("div",Le,[e("input",{name:"寵物姓名",type:"text",class:"form-control disable",id:"petName",disabled:"",value:s.showBook.petName},null,8,De)])]),e("div",Ce,[Te,e("div",Ye,[e("input",{name:"飼主姓名",type:"text",class:"form-control",id:"inputName",disabled:"",value:s.showBook.ownerName},null,8,je)])]),e("div",Fe,[Pe,e("div",Se,[e("textarea",Me,f(s.showBook.message),1)])]),e("div",Ue,[Ee,e("div",qe,[e("input",{name:"預約狀態",type:"text",class:"form-control",id:"state",disabled:"",value:s.showBook.state?"預約成功":"預約取消"},null,8,Ae)])]),e("div",Re,[e("button",{type:"button",class:r(["btn btn-outline-primary me-4",{disabled:s.showBook.state==!1}]),onClick:t[8]||(t[8]=(...o)=>c.deleteBook&&c.deleteBook(...o))},"取消預約",2)])]),_:1},512)])):(p(),b("div",ze," 請輸入掛號聯絡電話查詢 "))])])])])])])],64)}const Ge=w(B,[["render",He]]);export{Ge as default};
