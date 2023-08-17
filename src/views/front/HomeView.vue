<template>
  <section class="banner container-fluid px-0 bg-secondary">
    <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>
      <div class="carousel-inner" style="height: 560px;">
        <div class="carousel-item active h-100">
          <img src="../../assets/img/index-banner.jpg" class="d-block w-100 h-100" alt="...">
          <div class="carousel-caption d-none d-md-block bg-light opacity-75">
            <h5>橘子動物醫院</h5>
            <p>「陪伴不打烊，夥伴的健康永不止息」——橘子動物醫院，始終與您的寵物同在。</p>
          </div>
        </div>
        <div class="carousel-item h-100">
          <img src="../../assets/img/adopt.jpg" class="d-block w-100 h-100" alt="...">
          <div class="carousel-caption d-none d-md-block bg-light opacity-75">
            <h5>【公益活動】「愛心救援：受傷流浪犬找到新家！」</h5>
            <p>感謝所有參與的志工和領養家庭一同讓他們重新獲得幸福。</p>
          </div>
        </div>
        <div class="carousel-item h-100">
          <img src="../../assets/img/sun_protection.jpg" class="d-block w-100 h-100" alt="...">
          <div class="carousel-caption d-none d-md-block bg-light opacity-75">
            <h5>【貓狗健康小知識衛教】</h5>
            <p>夏日炙熱，別忘了給寵物防曬保護，呵護貓狗嬌嫩肌膚！</p>
          </div>
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  </section>
  <section class="bg-primary">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-10 d-flex flex-column flex-lg-row justify-content-around align-items-center py-5 my-7 rounded-4 border border-secondary text-secondary">
          <div class="fs-5 slogan position-relative">
            「橘子動物醫院」全年無休<br>給您365天、無微不至的關懷
          </div>
          <div class="mt-4 mt-lg-0">
            營業時間：<br>上午 10:00-12:00<br>下午 14:00-17:30<br>晚間 18:00-20:30
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="container pt-7 pb-10">
    <div class="row justify-content-center">
      <h2 class="text-center mb-7 fst-italic">最新消息<span class="display-2 text-secondary">/news</span></h2>
      <ul class="news-list col-10 col-lg-10 list-unstyled">
        <li class="px-5 py-6 position-relative border-bottom">
          <time datetime="2023-08-15" class="border-bottom border-2 border-primary text-primary">2023/08/15</time>
          <div class="d-flex flex-column flex-xl-row justify-content-between ms-4 mt-5">
            <p class="stretched-link link-dark d-block mb-0">「暑期防疫守護，寵物免費健康檢查！」立即預約，全方位呵護您的毛小孩。</p>
            <a href="#" class="stretched-link link-notice align-self-end mt-4 mt-xl-0">read more ></a>
          </div>
        </li>
        <li class="px-5 py-6 position-relative border-bottom">
          <time datetime="2023-08-01" class="border-bottom border-2 border-primary text-primary">2023/08/01</time>
          <div class="d-flex flex-column flex-xl-row justify-content-between ms-4 mt-5">
            <p class="stretched-link link-dark d-block mb-0">「寵物牙科健康月，全線牙垢清潔產品八折起！」獻給毛孩最貼心的口腔護理，預約專屬門診方案。</p>
            <a href="#" class="stretched-link link-notice align-self-end mt-4 mt-xl-0">read more ></a>
          </div>
        </li>
        <li class="px-5 py-6 position-relative border-bottom">
          <time datetime="2023-06-20" class="border-bottom border-2 border-primary text-primary">2023/06/20</time>
          <div class="d-flex flex-column flex-xl-row justify-content-between ms-4 mt-5">
            <p class="stretched-link link-dark d-block mb-0">「寵物肥胖防治講座，讓毛孩健康活力！」專業獸醫團隊分享科學飲食與運動計畫，一同擁抱活潑生活。</p>
            <a href="#" class="stretched-link link-notice align-self-end mt-4 mt-xl-0">read more ></a>
          </div>
        </li>
        <li class="px-5 py-6 position-relative border-bottom">
          <time datetime="2023-04-30" class="border-bottom border-2 border-primary text-primary">2023/04/30</time>
          <div class="d-flex flex-column flex-xl-row justify-content-between ms-4 mt-5">
            <p class="stretched-link link-dark d-block mb-0">「愛心救援：受傷流浪犬找到新家！」感謝所有參與的志工和領養家庭，一同讓牠們重新獲得幸福。</p>
            <a href="#" class="stretched-link link-notice align-self-end mt-4 mt-xl-0">read more ></a>
          </div>
        </li>
        <li class="px-5 py-6 position-relative">
          <time datetime="2023-02-15" class="border-bottom border-2 border-primary text-primary">2023/02/15</time>
          <div class="d-flex flex-column flex-xl-row justify-content-between ms-4 mt-5">
            <p class="stretched-link link-dark d-block mb-0">「特價藥品大放送！疫苗、膳食補充品，優惠不可錯過！」數量有限，請儘早洽詢領取。</p>
            <a href="#" class="stretched-link link-notice align-self-end mt-4 mt-xl-0">read more ></a>
          </div>
        </li>
      </ul>
    </div>
  </section>
  <section class="about py-10">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-10 col-lg-8">
          <h2 class="text-center mb-7 fst-italic">醫院簡介<span class="display-2 text-secondary">/Intro</span></h2>
          <p>歡迎來到橘子動物醫院！我們致力於為您的毛小孩提供最優質的醫療服務，以專業知識和貼心關懷照顧每一位家庭成員。我們的獸醫團隊充滿熱情，擁有豐富臨床經驗，提供從健康檢查、疫苗接種到手術等全方位的醫療解決方案。</p>
          <p>我們更著重於與您的互動，願意分享養寵物的珍貴經驗和建議，提供日常照顧、飲食指導和行為建議等，確保您和寵物的每一刻都充滿愛和溫暖</p>
          <p>在橘子動物醫院，預防是我們的重點，定期健康檢查有助於早期發現潛在問題，讓您的寵物遠離疾病煩惱。我們將根據寵物的特定需求，量身定制健康管理計劃，讓牠們擁有健康長壽的美好生活。</p>
          <p>醫院環境特別設計以迎合貓狗的需求，舒適的就診環境和護士的愛心照顧，讓每次就診都成為輕鬆愉悅的體驗。</p>
          <p>在橘子動物醫院，每一位主人和寵物都是我們大家庭的一部分。感謝您選擇橘子動物醫院，期待我們一同開啟愛與關懷的旅程。</p>
        </div>
      </div>
    </div>
  </section>
  <section class="container-fluid py-10">
    <h2 class="text-center mb-7 fst-italic">環境設備<span class="display-2 text-secondary">/Equipment</span></h2>
    <swiper
      :breakpoints="{ 600:{ slidesPerView:2 }, 1020:{ slidesPerView:3 } }"
      :spaceBetween="20"
      :loop="true"
      :autoplay="{
        delay: 2000,
        disableOnInteraction: false,
      }"
      :pagination="{
        clickable: true,
      }"
      :modules="modules"
      class="mySwiper">
      <swiper-slide><img src="../../assets/img/edpt_01.jpeg" alt="equipment photo"></swiper-slide>
      <swiper-slide><img src="../../assets/img/edpt_02.jpeg" alt="equipment photo"></swiper-slide>
      <swiper-slide><img src="../../assets/img/edpt_03.jpg" alt="equipment photo"></swiper-slide>
      <swiper-slide><img src="../../assets/img/edpt_04.jpeg" alt="equipment photo"></swiper-slide>
      <swiper-slide><img src="../../assets/img/edpt_05.jpeg" alt="equipment photo"></swiper-slide>
      <swiper-slide><img src="../../assets/img/edpt_06.jpeg" alt="equipment photo"></swiper-slide>
      <swiper-slide><img src="../../assets/img/edpt_07.jpeg" alt="equipment photo"></swiper-slide>
      <swiper-slide><img src="../../assets/img/edpt_08.jpg" alt="equipment photo"></swiper-slide>
    </swiper>
  </section>
  <section class="container">

  </section>
  <section class="subs">
    <div class="container">
      <div class="row py-10 align-items-center">
        <div class="col-lg-6 text-center mb-5 mb-lg-0">
          <p class="mb-0 fs-3 text-primary fst-italic">Psubscribe now！</p>
          <span class="fs-5">立即訂閱，掌握最新活動資訊！</span>
        </div>
        <div class="col-lg-6">
          <div class="input-group">
            <input type="text" class="form-control" placeholder="請輸入 E-mail" aria-describedby="button-addon">
            <button class="btn btn-outline-primary" type="button" id="button-addon">訂閱</button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  // Import Swiper Vue.js components
  import { Swiper, SwiperSlide } from 'swiper/vue';

  // Import Swiper styles
  import 'swiper/css';
  import 'swiper/css/pagination';

  // import required modules
  import { Pagination, Autoplay } from 'swiper/modules';

  export default {
    components: {
      Swiper,
      SwiperSlide,
    },
    setup() {
      return {
        modules: [Pagination, Autoplay],
      };
    },
  };
</script>

<style scoped lang="scss">
.news-list li{
  &:hover{
    cursor: pointer;
    background-color: #f9f7f7;
    a {
      transform: translateX(10px);
    }
  }
}
.slogan::before{
  content: '';
  width: 30px;
  height: 2px;
  background-color: #e3eff3;
  position: absolute;
  top: 50%;
  right: -40px;
}
.slogan::after{
  content: '';
  width: 30px;
  height: 2px;
  background-color: #e3eff3;
  position: absolute;
  top: 50%;
  left: -40px;
}
.about {
  background-image: linear-gradient(to right, rgb(106, 165, 185), rgba(227, 239, 243, 0));
}
.mySwiper {
  padding: 40px 0 60px 0;
  img {
  width: 100%;
  height: 300px;
}
}
.subs {
  background-image: url(../../assets/img/subs-bg.jpg);
  background-position: center bottom;
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>