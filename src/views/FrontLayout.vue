<template>
  <div class="fixed-bottom text-end me-7 mb-10 w-25 ms-auto" :class="{'d-none': !visible}">
    <a href="#"><img src="../../src/assets/img/totop.svg" class="rounded-circle shadow" alt="go top"></a>
  </div>
  <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top d-flex flex-column py-0">
    <div class="container pt-3 pb-1 position-relative">
        <h1><RouterLink to="/" class="nav-logo h3 mb-0">橘子動物醫院 Orange Pet Clinic</RouterLink></h1>
        <div class="d-none d-lg-block"><div class="btn btn-outline-secondary text-primary rounded-pill position-absolute bottom-0 end-0 mb-3 fs-5 px-4">02-28881588</div></div>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
    </div>
    <div class="container-fluid bg-secondary shadow">
      <div class="container">
        <div class="collapse navbar-collapse text-center" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <RouterLink to="/about" class="nav-link p-4">關於我們</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink to="/news" class="nav-link p-4">最新消息</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink to="/works" class="nav-link p-4">服務項目</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink to="/schedule" class="nav-link p-4">當月班表</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink to="/appointment" class="nav-link p-4">預約掛號</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink to="/blog" class="nav-link p-4">衛教資訊</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink to="/contact" class="nav-link p-4">聯絡我們</RouterLink>
          </li>
        </ul>
        </div>
      </div>
    </div>
  </nav>
  <div class="layout-set">
    <RouterView />
  </div>
  <div class="footer border-top">
    <div class="container my-10">
      <div class="d-none d-lg-block">
        <ul class="list-unstyled d-flex mb-7 ms-7 border-bottom">
          <li>
            <RouterLink to="/about" class="nav-link p-3">關於我們</RouterLink>
          </li>
          <li>
            <RouterLink to="/news" class="nav-link p-3">最新消息</RouterLink>
          </li>
          <li>
            <RouterLink to="/works" class="nav-link p-3">服務項目</RouterLink>
          </li>
          <li>
            <RouterLink to="/schedule" class="nav-link p-3">當月班表</RouterLink>
          </li>
          <li>
            <RouterLink to="/appointment" class="nav-link p-3">預約掛號</RouterLink>
          </li>
          <li>
            <RouterLink to="/blog" class="nav-link p-3">衛教資訊</RouterLink>
          </li>
          <li>
            <RouterLink to="/contact" class="nav-link p-3">聯絡我們</RouterLink>
          </li>
      </ul>
      </div>
      <div class="row align-items-lg-center flex-column-reverse flex-lg-row">
        <div class="col-11 col-lg-5 mt-5 mt-lg-0 ms-auto">
          <RouterLink to="/" class="footer-logo mb-3">橘子動物醫院 Orange Pet Clinic</RouterLink >
          <ul class="list-unstyled">
            <li><a href="tel:0228881588" class="text-dark"><span class="material-symbols-rounded fs-5 me-2 align-text-top">call</span>02-28881588</a></li>
            <li><a href="mailto:orange_pet@orange.com.tw" class="text-dark"><span class="material-symbols-rounded fs-5 me-2 align-text-top">mail</span>orange_pet@orange.com.tw</a></li>
            <li><a href="#" class="text-dark"><span class="material-symbols-rounded fs-5 me-2 align-text-top">location_on</span>台北市中山區連雲街100號</a></li>
            <li><span class="material-symbols-rounded fs-5 me-2 align-text-top">schedule</span>營業時間：<br>&emsp;&ensp;上午 10:00-12:00<br>&emsp;&ensp;下午 14:00-17:30<br>&emsp;&ensp;晚間 18:00-20:30</li>
          </ul>
        </div>
        <div class="col-lg-6">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3614.949471435332!2d121.52887861172533!3d25.0357887777228!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a978cc6486e7%3A0x24175f88c959143a!2zMTAw5Y-w5YyX5biC5Lit5q2j5Y2A6YCj6Zuy6KGX!5e0!3m2!1szh-TW!2stw!4v1691730583349!5m2!1szh-TW!2stw" width="100%" height="250px" style="border:0;" allowfullscreen="true" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>
    </div>
    <div class="text-center bg-primary">
      <p class="mb-0 py-4 text-secondary">© Copyright 2023 橘子動物醫院 <span class="d-none d-md-inline-block">Orange Pet Clinic - <a href="#" class="link-notice">後台管理</a></span></p>
    </div>
  </div>
</template>

<script>
import { RouterView } from 'vue-router';

export default {
  data() {
    return {
      visible: false,
    }
  },
  components: {
    RouterView
  },
  methods: {
    handleScroll (){
      this.visible = window.scrollY >= 250 ? true : false
    }
  },
  created () {
    window.addEventListener('scroll', this.handleScroll);
  }
}
</script>

<style scoped lang="scss">  
</style>