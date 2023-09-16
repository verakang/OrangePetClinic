<template>
  <VueLoading :active="isLoading" loader="dots" color="#1ca0b8"/>
  <section class="container">
    <h2 class="text-center my-7 fst-italic">登入後台<span class="display-2 d-none d-lg-inline-block subtitle text-secondary">/Login</span></h2>
    <div class="row d-flex flex-column align-items-center my-10">
      <v-form v-slot="{ errors }" @submit="login" id="form" class="form-signin col-10 col-md-8 col-lg-5" ref="login">
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">Email</label>
          <v-field name="信箱" type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" 
          :class="{ 'is-invalid': errors['信箱'] }" placeholder="請輸入信箱" rules="email|required" v-model="user.username"></v-field>
          <error-message name="信箱" class="invalid-feedback"></error-message>
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">Password</label>
          <v-field name="密碼" type="password" class="form-control" id="exampleInputPassword1" 
          :class="{ 'is-invalid': errors['密碼'] }" placeholder="請輸入密碼" rules="required" v-model="user.password"></v-field>
          <error-message name="密碼" class="invalid-feedback"></error-message>
        </div>
        <button class="btn btn-lg btn-primary w-100 mt-3 text-white" type="submit">
          登入
        </button>
      </v-form>
    </div>
  </section>
</template>

<script>
const { VITE_URL } = import.meta.env
import Swal from 'sweetalert2'

export default {
  data() {
    return {
      isLoading: false,
      user: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    checkLogin () {
      const token = document.cookie.replace(/(?:(?:^|.*;\s*)hexschool\s*=\s*([^;]*).*$)|^.*$/, '$1')
      this.$http.defaults.headers.common.Authorization = token
      const url = `${VITE_URL}/v2/api/user/check`
      this.$http
        .post(url)
        .then(() => {
          this.isLoading = false
          this.$router.push('/admin')
        })
        .catch((err) => {
          this.isLoading = false
          console.log(err)
        })
    },
    login() {
      const url = `${VITE_URL}/v2/admin/signin`
      this.$http
        .post(url, this.user)
        .then((res) => {
          const { expired, token } = res.data
          document.cookie = `hexschool=${token}; expires=${new Date(expired)}`
          this.$router.push('/admin')
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: '登入成功！',
            showConfirmButton: false,
            timer: 800,
            timerProgressBar: true,
            toast: true
          })
        })
        .catch((err) => {
          Swal.fire({
            position: 'center',
            icon: 'error',
            title: `${err.response.data.message}，請再次確認～`,
            showConfirmButton: true,
            toast: true
          })
          this.formReset()
        })
    },
    formReset() {
      this.$refs.login.resetForm();
    }
  },
  mounted() {
    this.isLoading = true
    this.checkLogin ()
  }
}
</script>
