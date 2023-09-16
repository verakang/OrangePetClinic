<template>
  <VueLoading :active="isLoading" loader="dots" color="#1ca0b8"/>
  <section class="container mt-7">
    <div class="d-flex align-items-center">
      <h3 class="mx-4">後台管理</h3>
      <a @click.prevent="logout" class="link-notice">登出</a>
    </div>
  </section>
  <section class="container px-5 py-8 d-flex align-items-start">
    <div class="row d-flex w-100 gx-0">
      <div class="col-md-2 nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
        <button class="nav-link active" id="v-pills-booklist-tab" data-bs-toggle="pill" data-bs-target="#v-pills-booklist" type="button" role="tab" aria-controls="v-pills-booklist" aria-selected="true">約診名單</button>
        <button class="nav-link" id="v-pills-news-tab" data-bs-toggle="pill" data-bs-target="#v-pills-news" type="button" role="tab" aria-controls="v-pills-news" aria-selected="false">最新消息</button>
        <button class="nav-link" id="v-pills-blog-tab" data-bs-toggle="pill" data-bs-target="#v-pills-blog" type="button" role="tab" aria-controls="v-pills-blog" aria-selected="false">衛教文章</button>
      </div>
      <div class="col-md-10 tab-content" id="v-pills-tabContent">
        <div class="tab-pane fade show active" id="v-pills-booklist" role="tabpanel" aria-labelledby="v-pills-booklist-tab">
          <div class="admin_table table-responsive px-2">
            <table class="table table-hover">
              <thead class="table-light">
                <tr>
                  <th>#</th>
                  <th style="width: 100">日期</th>
                  <th style="width: 120">時間</th>
                  <th style="width: 80">寵物</th>
                  <th style="width: 80">飼主</th>
                  <th style="width: 120">電話</th>
                  <th>狀況說明</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>1</th>
                  <td>2023/9/20</td>
                  <td>10:00-11:00</td>
                  <td>橘子</td>
                  <td>Vera</td>
                  <td>0911234567</td>
                  <td>食慾不振、拉肚子</td>
                </tr>
                <tr>
                  <th>2</th>
                  <td>2023/9/20</td>
                  <td>10:00-11:00</td>
                  <td>喵喵</td>
                  <td>Peter</td>
                  <td>0910334561</td>
                  <td>嘔吐</td>
                </tr>
                <tr>
                  <th>2</th>
                  <td>2023/9/27</td>
                  <td>19:00-20:00</td>
                  <td>橘子</td>
                  <td>Vera</td>
                  <td>0911234567</td>
                  <td>定期腎指數觀測</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div class="tab-pane fade px-2" id="v-pills-news" role="tabpanel" aria-labelledby="v-pills-news-tab">
          <NewsComponent></NewsComponent>
        </div>
        <div class="tab-pane fade px-2" id="v-pills-blog" role="tabpanel" aria-labelledby="v-pills-blog-tab">
          <BlogComponent></BlogComponent>
        </div>
      </div>
    </div>

  </section>
</template>

<script>
import { RouterLink } from 'vue-router'
import NewsComponent from '@/components/NewsComponent.vue'
import BlogComponent from '@/components/BlogComponent.vue'

export default {
  components: {
    RouterLink, NewsComponent, BlogComponent
  },
  data() {
    return {
      isLoading: false,
    }
  },
  methods: {
    logout () {
      document.cookie = `hexschool=; expires=${new Date()}`
      this.$router.push('/')
    }
  },
  mounted() {
    this.isLoading = true
    setTimeout(()=>{
      this.isLoading = false
    },500)
  }
}
</script>

<style>
  .admin_table {
    white-space: nowrap;
  }
</style>
