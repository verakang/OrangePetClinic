import{_ as d,r as l,o as c,c as n,a as t,b as m,w as _,t as s,F as h,h as u,e as p}from"./index-1f83b169.js";const{VITE_URL:b,VITE_PATH:f}={VITE_URL:"https://vue3-course-api.hexschool.io",VITE_PATH:"orangepetclinic",VITE_BLOG_PATH:"orangepetclinic-blog",BASE_URL:"/OrangePetClinic/",MODE:"production",DEV:!1,PROD:!0,SSR:!1},v={data(){return{item:{}}},methods:{getItem(){const{id:o}=this.$route.params;this.$http.get(`${b}/v2/api/${f}/article/${o}`).then(a=>{this.item=a.data.article})}},mounted(){this.getItem()}},g={class:"container py-10"},x={style:{"--bs-breadcrumb-divider":"'>'"},"aria-label":"breadcrumb",class:"mb-7"},w={class:"breadcrumb"},E={class:"breadcrumb-item"},T={class:"breadcrumb-item active","aria-current":"page"},V={class:"row px-3"},y={class:"col-md-10 col-xxl-8 p-6 shadow-sm bg-secondary"},I={class:"d-flex mb-7"},D={class:"w-75"},L={class:"ms-auto"},R={class:"border-bottom border-dark border-2"},k={class:"content",style:{"white-space":"pre-line"}},B={class:"col-md-2 mt-5 mt-md-0 d-flex flex-md-column"},P={type:"button",class:"btn btn-primary text-secondary btn-sm rounded-0 me-2 m-md-2"};function $(o,a,A,N,e,O){const i=l("RouterLink");return c(),n("section",g,[t("nav",x,[t("ol",w,[t("li",E,[m(i,{to:"/news"},{default:_(()=>[p("最新消息")]),_:1})]),t("li",T,s(e.item.title),1)])]),t("div",V,[t("div",y,[t("div",I,[t("h5",D,s(e.item.title),1),t("div",L,[t("span",R,s(o.$moment(new Date(e.item.create_at*1e3)).format("YYYY-MM-DD")),1)])]),t("div",k,s(e.item.content),1)]),t("div",B,[(c(!0),n(h,null,u(e.item.tag,r=>(c(),n("div",null,[t("button",P,s(r),1)]))),256))])])])}const Y=d(v,[["render",$]]);export{Y as default};