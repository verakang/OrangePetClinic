<template>
  <section class="container py-10">
    <h2 class="text-center mb-7 fst-italic">衛教資訊<span class="display-2 text-secondary subtitle">/Blog</span></h2>
    <div class="row row-cols-1 row-cols-md-2 gy-5">
      <div class="col" v-for="item in articles" :key="item.id">
        <div class="card position-relative h-100">
          <div class="card-body">
            <span class="border-bottom border-primary border-2 text-primary">{{ $moment(new Date(item.create_at * 1000)).format('YYYY-MM-DD') }}</span>
            <h5 class="card-title mt-4">{{ item.title }}</h5>
          </div>
          <div class="d-flex px-4 mb-4">
            <div v-for="tag in item.tag">
              <button type="button" class="btn btn-primary text-secondary btn-sm rounded-0 me-2">{{ tag }}</button>
            </div>
            <RouterLink :to="`/blogitem/${item.id}`" class="stretched-link link-notice ms-auto">read more ></RouterLink>
          </div>
        </div>
      </div>
    </div>
  </section>
  <Pagination class="container mb-8" :pages="page" @change-page="getArticles"></Pagination>
</template>

<script>
import { RouterLink } from 'vue-router'
import Pagination from '@/components/PaginationComponent.vue'
const { VITE_URL, VITE_BLOG_PATH } = import.meta.env

export default {
  data() {
    return {
      articles:[],
      page: {},
      current_page: {}
    }
  },  
  components: {
    RouterLink, Pagination
  },
  methods: {
    getArticles(page = 1) {
      this.$http
      .get(`${VITE_URL}/v2/api/${VITE_BLOG_PATH}/articles?page=${page}`)
      .then((res)=>{
        this.page = res.data.pagination
        this.current_page = res.data.pagination.current_page
        this.articles = res.data.articles
        window.scrollTo(0, 0);
      })
    }
  },
  mounted() {
    this.getArticles()
  }
}
</script>