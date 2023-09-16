<script>
import { RouterLink } from 'vue-router'

export default {
  components: {
    RouterLink
  }
}
</script>

<template>
  <section class="container py-10 text-center">
    <h3>404頁面</h3>
    <p>您要找的頁面不存在：(</p>
    <RouterLink to="/" class="btn btn-primary mt-5">回首頁</RouterLink>
  </section>
</template>
