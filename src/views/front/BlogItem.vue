<template>
  <section class="container py-10">
    <nav style="--bs-breadcrumb-divider: '>';" aria-label="breadcrumb" class="mb-7">
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><RouterLink to="/blog">衛教資訊</RouterLink></li>
        <li class="breadcrumb-item active" aria-current="page">{{ item.title }}</li>
      </ol>
    </nav>
    <div class="row px-3">
      <div class="col-md-10 p-6 shadow-sm bg-secondary">
        <div class="d-flex mb-4">
          <h5 class="w-75">{{ item.title }}</h5>
          <div class="ms-auto">
            <span class="border-bottom border-dark border-2">{{ $moment(new Date(item.create_at * 1000)).format('YYYY-MM-DD') }}</span>
          </div>
        </div>
        <div class="mb-5" style="height: 400px;">
          <img :src="item.image" alt="blog image" class="w-100 h-100">
        </div>
        <div class="content" style="white-space: pre-line;">
          {{ item.content }}
        </div>
      </div>
      <div class="col-md-2 mt-5 mt-md-0 d-flex flex-md-column">
        <div v-for="tag in item.tag">
          <button type="button" class="btn btn-primary text-secondary btn-sm rounded-0 me-2 m-md-2">{{ tag }}</button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { RouterLink } from 'vue-router'
const { VITE_URL, VITE_BLOG_PATH } = import.meta.env

export default {
  data() {
    return {
      item: {}
    }
  },
  methods: {
    getItem() {
      const { id } = this.$route.params
      this.$http
      .get(`${VITE_URL}/v2/api/${VITE_BLOG_PATH}/article/${id}`)
      .then((res)=>{
        this.item = res.data.article
      })
    }
  },
  mounted() {
    this.getItem()
  }
}
</script>
