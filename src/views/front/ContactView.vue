<template>
  <VueLoading :active="isLoading" loader="dots" color="#1ca0b8"/>
  <section>
    <div class="contact_banner position-relative">
      <img src="../../assets/img/contact-banner.jpg" class="w-100 h-100" alt="contact banner">
      <h2 class="text-center mb-7 fst-italic position-absolute top-50 start-50 translate-middle text-secondary">聯絡我們<span class="display-2 d-none d-lg-inline-block subtitle">/Contact Us</span></h2>
    </div>
    <div class="px-4 col-lg-8 col-xxl-6 mx-auto">
      <div class="contact_content container bg-light px-5 py-7 rounded-4 mb-10">
        <h3 class="text-center border-bottom pb-5">
          意見回饋
        </h3>
        <div class="col-sm-9 mx-auto">
          <p class="mt-7">親愛的朋友們～<br>
            我們非常期待聽到您的寶貴意見！如果您對於橘子動物醫院有任何的建議或問題，請您毫不猶豫地填寫以下表格。您的每一個想法都對我們來說都非常重要，我們真心誠摯地期待與您的交流。
            我們承諾，您的意見將被我們用心聆聽，我們會盡快回覆您，以確保您的需求得到妥善處理。感謝您的支持與參與，讓我們一起共同為橘子動物醫院的進步努力！
            橘子動物醫院全體成員上。
          </p>
        </div>
        <div class="mx-auto mt-8">
          <v-form v-slot="{ errors }" @submit="onSubmit" class="d-flex flex-column px-4" ref="form"> 
            <div class="row mb-3">
              <label for="inputName" class="col-sm-2 offset-sm-1 form-label col-form-label text-sm-end">姓名<span class="text-notice ms-1">*</span></label>
              <div class="col-sm-7">
                <v-field name="姓名" type="text" class="form-control" id="inputName"
                :class="{ 'is-invalid': errors['姓名'] }" placeholder="請輸入姓名" rules="required"></v-field>
                <error-message name="姓名" class="invalid-feedback"></error-message>
              </div>
            </div>
            <div class="row mb-3">
              <label for="inputPhone" class="col-sm-2 offset-sm-1 form-label col-form-label text-sm-end">電話<span class="text-notice ms-1">*</span></label>
              <div class="col-sm-7">
                <v-field name="電話" type="tel" class="form-control" id="inputPhone"
                :class="{ 'is-invalid': errors['電話'] }" placeholder="請輸入電話" rules="numeric|min:8|required"></v-field>
                <error-message name="電話" class="invalid-feedback"></error-message>
              </div>
            </div>
            <div class="row mb-3">
              <label for="inputEmail" class="col-sm-2 offset-sm-1 form-label col-form-label text-sm-end">信箱<span class="text-notice ms-1">*</span></label>
              <div class="col-sm-7">
                <v-field name="信箱" type="email" class="form-control" id="inputEmail"
                :class="{ 'is-invalid': errors['信箱'] }" placeholder="請輸入信箱" rules="email|required"></v-field>
                <error-message name="信箱" class="invalid-feedback"></error-message>
              </div>
            </div>
            <div class="row mb-6">
              <label for="inputTextarea" class="col-sm-2 offset-sm-1 form-label col-form-label text-sm-end">留言<span class="text-notice ms-1">*</span></label>
              <div class="col-sm-7">
                <v-field as="textarea" name="留言" class="form-control" id="inputTextarea"
                :class="{ 'is-invalid': errors['留言'] }" placeholder="請留下您的寶貴意見" rules="required"></v-field>
                <error-message name="留言" class="invalid-feedback"></error-message>
              </div>
            </div>
            <div class="offset-6 offset-md-7 offset-lg-8">
              <button type="button" class="btn btn-outline-dark me-4" @click="formReset">取消</button>
              <button type="submit" class="btn btn-primary text-secondary">送出</button>
            </div>
          </v-form>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Swal from 'sweetalert2'

export default {
  data() {
    return {
      isLoading: false,
    }
  },
  methods: {
    onSubmit() {
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: `謝謝您的回饋，我們將盡快回覆您的寶貴意見：）`,
        showConfirmButton: true,
        toast: true
      })
      this.$refs.form.resetForm();
    },
    formReset() {
      this.$refs.form.resetForm();
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
.contact_banner {
  z-index: -1;
  height: 400px;
}
.contact_content {
  box-shadow: 1px 1px 10px #ddd;
  margin-top: -80px;
  z-index: 2;
}
</style>