import{_ as l,r as d,o as c,c as i,a as t,b as m,w as _,t as s,F as h,h as u,e as b}from"./index-1f83b169.js";const{VITE_URL:p,VITE_BLOG_PATH:g}={VITE_URL:"https://vue3-course-api.hexschool.io",VITE_PATH:"orangepetclinic",VITE_BLOG_PATH:"orangepetclinic-blog",BASE_URL:"/OrangePetClinic/",MODE:"production",DEV:!1,PROD:!0,SSR:!1},v={data(){return{item:{}}},methods:{getItem(){const{id:o}=this.$route.params;this.$http.get(`${p}/v2/api/${g}/article/${o}`).then(a=>{this.item=a.data.article})}},mounted(){this.getItem()}},f={class:"container py-10"},x={style:{"--bs-breadcrumb-divider":"'>'"},"aria-label":"breadcrumb",class:"mb-7"},y={class:"breadcrumb"},E={class:"breadcrumb-item"},T={class:"breadcrumb-item active","aria-current":"page"},V={class:"row px-3"},w={class:"col-md-10 p-6 shadow-sm bg-secondary"},I={class:"d-flex mb-4"},L={class:"w-75"},B={class:"ms-auto"},D={class:"border-bottom border-dark border-2"},R={class:"mb-5",style:{height:"400px"}},k=["src"],O={class:"content",style:{"white-space":"pre-line"}},P={class:"col-md-2 mt-5 mt-md-0 d-flex flex-md-column"},A={type:"button",class:"btn btn-primary text-secondary btn-sm rounded-0 me-2 m-md-2"};function S(o,a,Y,$,e,C){const n=d("RouterLink");return c(),i("section",f,[t("nav",x,[t("ol",y,[t("li",E,[m(n,{to:"/blog"},{default:_(()=>[b("衛教資訊")]),_:1})]),t("li",T,s(e.item.title),1)])]),t("div",V,[t("div",w,[t("div",I,[t("h5",L,s(e.item.title),1),t("div",B,[t("span",D,s(o.$moment(new Date(e.item.create_at*1e3)).format("YYYY-MM-DD")),1)])]),t("div",R,[t("img",{src:e.item.image,alt:"blog image",class:"w-100 h-100"},null,8,k)]),t("div",O,s(e.item.content),1)]),t("div",P,[(c(!0),i(h,null,u(e.item.tag,r=>(c(),i("div",null,[t("button",A,s(r),1)]))),256))])])])}const M=l(v,[["render",S]]);export{M as default};