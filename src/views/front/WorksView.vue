<template>
  <section class="container py-10">
    <h2 class="text-center mb-7 fst-italic">服務項目<span class="display-2 text-secondary subtitle">/Works</span></h2>
    <div class="row row-cols-2 row-cols-md-3 row-cols-lg-4 row-cols-xxl-5 gy-5">
      <div class="col">
        <div class="works-card card px-0 rounded-4 h-100 border-0">
          <img src="../../assets/img/works_01.svg" class="card-img-top w-50 pt-6 pb-4 mx-auto" alt="works img">
          <div class="card-body">
            <p class="card-text"><h4 class="text-primary">內科服務</h4>
              貓狗常見疾病診斷與治療<br>
              腎臟疾病管理<br>
              呼吸道感染治療
            </p>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="works-card card px-0 rounded-4 h-100 border-0">
          <img src="../../assets/img/works_02.svg" class="card-img-top w-50 pt-6 pb-4 mx-auto" alt="works img">
          <div class="card-body">
            <p class="card-text"><h4 class="text-primary">外科服務</h4>
              貓狗手術治療<br>
              結紮手術（絕育手術）<br>
              腫瘤切除手術
            </p>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="works-card card px-0 rounded-4 h-100 border-0">
          <img src="../../assets/img/works_03.svg" class="card-img-top w-50 pt-6 pb-4 mx-auto" alt="works img">
          <div class="card-body">
            <p class="card-text"><h4 class="text-primary">牙科服務</h4>
              貓狗洗牙與口腔清潔<br>
              牙齒疾病診斷與治療<br>
              牙結石去除
            </p>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="works-card card px-0 rounded-4 h-100 border-0">
          <img src="../../assets/img/works_04.svg" class="card-img-top w-50 pt-6 pb-4 mx-auto" alt="works img">
          <div class="card-body">
            <p class="card-text"><h4 class="text-primary">預防保健</h4>
              貓狗定期健康檢查<br>
              疫苗接種計劃<br>
              避蚤、驅蟲治療
            </p>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="works-card card px-0 rounded-4 h-100 border-0">
          <img src="../../assets/img/works_05.svg" class="card-img-top w-50 pt-6 pb-4 mx-auto" alt="works img">
          <div class="card-body">
            <p class="card-text"><h4 class="text-primary">皮膚科服務</h4>
              貓狗皮膚病診斷與治療<br>
              過敏性皮膚炎治療<br>
              寄生蟲感染治療
            </p>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="works-card card px-0 rounded-4 h-100 border-0">
          <img src="../../assets/img/works_06.svg" class="card-img-top w-50 pt-6 pb-4 mx-auto" alt="works img">
          <div class="card-body">
            <p class="card-text"><h4 class="text-primary">眼科服務</h4>
              貓狗眼睛檢查與治療<br>
              泪腺問題診斷與治療<br>
              眼睛疾病手術
            </p>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="works-card card px-0 rounded-4 h-100 border-0">
          <img src="../../assets/img/works_07.svg" class="card-img-top w-50 pt-6 pb-4 mx-auto" alt="works img">
          <div class="card-body">
            <p class="card-text"><h4 class="text-primary">微創及內視鏡手術</h4>
              腹腔鏡手術<br>
              關節鏡手術<br>
              腫瘤微創手術
            </p>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="works-card card px-0 rounded-4 h-100 border-0">
          <img src="../../assets/img/works_08.svg" class="card-img-top w-50 pt-6 pb-4 mx-auto" alt="works img">
          <div class="card-body">
            <p class="card-text"><h4 class="text-primary">家庭訪視服務</h4>
              家中寵物健康檢查<br>
              家庭環境評估與改善建議<br>
              給予寵物主人實用飼養建議
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="py-10">
    <h2 class="text-center mb-7 fst-italic">設備環境<span class="display-2 text-secondary subtitle">/Equipment</span></h2>
    <swiper
      :slidesPerView="1"
      :spaceBetween="10"
      :loop="true"
      :autoplay="{
        delay: 2000,
        disableOnInteraction: false,
      }"
      :pagination="{
        clickable: true,
      }"
      :breakpoints="{
        '640': {
        slidesPerView: 2,
        spaceBetween: 20,
        },
        '1020': {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        '1280': {
          slidesPerView: 4,
          spaceBetween: 20,
        },
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
.works-card{
  box-shadow: 1px 1px 8px #ddd;
  &:hover {
    background-color: #f9f7f7;
    img {
      transform: rotate(20deg)
    }
}
}

.mySwiper {
  padding: 40px 0 60px 0;
    img {
      width: 100%;
      height: 300px;
    }
  }

</style>