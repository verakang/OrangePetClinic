<template>
  <VueLoading :active="isLoading" loader="dots" color="#1ca0b8"/>
  <section class="appointment-wrap pt-10">
    <div>
      <h2 class="text-center fst-italic mb-5">預約掛號<span class="display-2 text-notice subtitle">/Appointment</span></h2>
    </div>
    <div class="appointment-content">
      <ul class="nav nav-tabs container px-3" id="myTab" role="tablist">
        <li class="nav-item" role="presentation">
          <button class="nav-link active" id="notice-tab" data-bs-toggle="tab" data-bs-target="#notice" type="button" role="tab" aria-controls="notice" aria-selected="true">預約須知</button>
        </li>
        <li class="nav-item" role="presentation">
          <button class="nav-link" id="book-tab" data-bs-toggle="tab" data-bs-target="#book" type="button" role="tab" aria-controls="book" aria-selected="false">線上掛號</button>
        </li>
        <li class="nav-item" role="presentation">
          <button class="nav-link" id="check-tab" data-bs-toggle="tab" data-bs-target="#check" type="button" role="tab" aria-controls="check" aria-selected="false">掛號查詢</button>
        </li>
      </ul>
      <div class="tab-content bg-white" id="myTabContent">
        <div class="tab-pane fade container show active py-10 col-10 col-md-8 col-xxl-6" id="notice" role="tabpanel" aria-labelledby="notice-tab">
          <p>親愛的寵物飼主您好，</p>
          <p>感謝您選擇橘子動物醫院為您的愛寵提供醫療服務。以下是本院的預約須知，請您仔細閱讀：</p>
          <p><span class="material-symbols-rounded me-2 text-notice subtitle">done_all</span>預約方式：為了提供更優質的醫療服務，本院實行預約制度。您可以透過網路預約、電話預約或親自前來櫃台預約。預約不僅可以避免長時間的等待，還能確保寵物在最適合的時間得到專業的診療服務。</p>
          <p><span class="material-symbols-rounded me-2 text-notice subtitle">done_all</span>預約時間：請您提前預約，以確保能在您希望的時間內得到預約診療。我們將努力調配醫師與護士的工作時間，使您的預約得到最佳的安排。</p>
          <p><span class="material-symbols-rounded me-2 text-notice subtitle">done_all</span>取消預約：若因故無法前來就診，請您提前通知我們，以便釋放預約名額給其他需要的寵物飼主。我們非常理解生活中的突發狀況，但提前通知取消預約將有助於預約安排的彈性與順暢。</p>
          <p><span class="material-symbols-rounded me-2 text-notice subtitle">done_all</span>緊急情況：緊急狀況下，為了能及時幫助寵物，本院將提供少量現場候診名額。這些名額將由醫護團隊專門預留給出現急需醫療的寵物，確保緊急情況下的快速就診。然而，這可能稍微耽誤已預約飼主的診療時間，我們在此提前致上歉意。</p>
          <p><span class="material-symbols-rounded me-2 text-notice subtitle">done_all</span>醫院規定：為了維護醫院的秩序與寵物健康，請遵守醫院相關規定，勿攜帶其他動物進入診療區域。狗狗請務必穿戴項圈和牽繩，並保持良好的性情，避免在醫院內與其他動物或飼主發生摩擦。</p>
          <p>在橘子動物醫院，我們致力於為每一位寵物提供專業、關愛的醫療服務。如果您對預約須知有任何疑問，或需要協助預約，請隨時與我們聯繫。期待與您攜手守護寵物健康，讓您的毛小孩擁有幸福快樂的生活！</p>
        </div>
        <div class="tab-pane fade container py-10" id="book" role="tabpanel" aria-labelledby="book-tab">
            <div class="row gy-6">
              <div class="col-md-5">
                <div>
                  <div id="datepicker"></div>
                  <p class="m-4 text-primary">每個月 25 日公布下個月班表，於次月 1 日開放預約。</p>
                </div>
              </div>
              <div class="col-md-7">  
                <div class="book-form py-7 rounded-5 bg-light">
                  <h3 class="text-center border-bottom pb-5" id="selectedDate" ref="pickDay">{{ today }}</h3>
                  <v-form v-slot="{ errors }" @submit="onSubmit" class="d-flex flex-column px-4 mt-7" ref='form'>
                    <div class="d-flex justify-content-center mb-3">
                      <label for="inputTime" class="form-label col-form-label text-sm-end me-4">預約時段<span class="text-notice ms-1">*</span></label>
                      <div class="w-75">
                        <v-field name="預約時段" as="select" id="inputTime" class="form-select" aria-label="Default select example"
                        :class="{ 'is-invalid': errors['預約時段'] }" rules="required" v-model="time">
                          <option selected disabled value="">請選擇預約時段</option>
                          <option value="10:00-11:00">10:00-11:00</option>
                          <option value="11:00-12:00">11:00-12:00</option>
                          <option value="14:00-15:00">14:00-15:00</option>
                          <option value="15:00-16:00">15:00-16:00</option>
                          <option value="16:00-17:30">16:00-17:30</option>
                          <option value="18:00-19:00">18:00-19:00</option>
                          <option value="19:00-20:30" disabled>19:00-20:30</option>
                        </v-field> 
                        <span role="alert" class="invalid-feedback">{{ errors["預約時段"] }}</span>
                      </div>
                    </div>
                    <div class="d-flex justify-content-center mb-3">
                      <label for="petName" class="form-label col-form-label text-sm-end me-4">寵物姓名<span class="text-notice ms-1">*</span></label>
                      <div class="w-75">
                        <v-field name="寵物姓名" type="text" class="form-control" id="petName" v-model="petName"
                        :class="{ 'is-invalid': errors['寵物姓名'] }" placeholder="請輸入寵物姓名" rules="required" prop="petName"></v-field>
                        <error-message name="寵物姓名" class="invalid-feedback"></error-message>
                      </div>
                    </div>
                    <div class="d-flex justify-content-center mb-3">
                      <label for="inputName" class="form-label col-form-label text-sm-end me-4">飼主姓名<span class="text-notice ms-1">*</span></label>
                      <div class="w-75">
                        <v-field name="飼主姓名" type="text" class="form-control" id="inputName" v-model="ownerName"
                        :class="{ 'is-invalid': errors['飼主姓名'] }" placeholder="請輸入飼主姓名" rules="required"></v-field>
                        <error-message name="飼主姓名" class="invalid-feedback"></error-message>
                      </div>
                    </div>
                    <div class="d-flex justify-content-center mb-3">
                      <label for="inputPhone" class="form-label col-form-label text-sm-end me-4">聯絡電話<span class="text-notice ms-1">*</span></label>
                      <div class="w-75">
                        <v-field name="聯絡電話" type="tel" class="form-control" id="inputPhone" v-model="phoneNumber"
                        :class="{ 'is-invalid': errors['聯絡電話'] }" placeholder="請輸入聯絡電話" :rules="isPhone"></v-field>
                        <error-message name="聯絡電話" class="invalid-feedback"></error-message>
                        <p class="mt-1 text-primary" style="font-size: 14px;">聯絡電話為查詢依據，請確認後再送出。</p>
                      </div>
                    </div>
                    <div class="d-flex justify-content-center mb-6">
                      <label for="inputTextarea" class="form-label col-form-label text-sm-end me-4">狀況說明<span class="text-notice ms-1">*</span></label>
                      <div class="w-75">
                        <v-field name="狀況說明" as="textarea" type="textarea" class="form-control" id="inputTextarea" v-model="message"
                        :class="{ 'is-invalid': errors['狀況說明'] }" placeholder="請簡述就診原因" rules="required"></v-field>
                        <error-message name="狀況說明" class="invalid-feedback"></error-message>
                      </div>
                    </div>
                    <div class="text-end me-5 me-xl-8">
                      <button type="button" class="btn btn-outline-dark me-4" @click="formReset">取消</button>
                      <button type="submit" class="btn btn-primary text-secondary">送出</button>
                    </div>
                  </v-form>
                </div>
              </div>
            </div>
        </div>
        <div class="tab-pane fade container py-10" id="check" role="tabpanel" aria-labelledby="check-tab">
          <div class="col-md-8 offset-md-2">  
            <div class="book-form py-7 rounded-5 bg-light">
              <v-form  v-slot="{ errors }" @submit="onCheck()" class="border-bottom pb-5 d-flex justify-content-center px-5 px-lg-10" ref='checkForm'>
                <label for="inputPhone" class="form-label col-form-label text-sm-end me-4">聯絡電話<span class="text-notice ms-1">*</span></label>
                <div class="w-75 input-group">
                  <v-field name="聯絡電話" type="tel" class="form-control" id="inputPhone" v-model="number"
                  :class="{ 'is-invalid': errors['聯絡電話'] }" placeholder="請輸入聯絡電話" :rules="isPhone"></v-field>
                  <button type="submit" class="btn btn-primary text-secondary ms-2">查詢</button>
                  <error-message name="聯絡電話" class="invalid-feedback"></error-message>
                </div>
              </v-form>
              <h3 class="text-center my-7">預約資訊</h3>
              <ul class="list-unstyled d-flex flex-wrap col-8 offset-1 offset-lg-2">
                <li v-for="item in tempList" :key="`${item.date}+${item.time}`" class="me-2 mt-2"><button type="button" class="btn btn-sm rounded-0 btn-outline-primary" :class="{'active': item.selected,'text-secondary': item.selected}" @click="getBook(`${item.date}+${item.time}`)" style="width: 94px;">{{ item.date }}</button></li>
              </ul>
              <div v-if="tempList.length!=0">
                <v-form class="d-flex flex-column mt-7 px-5 px-lg-10" ref='bookForm'>
                  <div class="d-flex justify-content-center mb-3">
                    <label for="inputTime" class="form-label col-form-label text-sm-end me-4">預約時段<span class="text-notice ms-1">*</span></label>
                    <div class="w-75">
                      <select name="預約時段" id="inputTime" class="form-select" disabled>
                        <option selected disabled value="">{{ showBook.time }}</option>
                      </select> 
                    </div>
                  </div>
                  <div class="d-flex justify-content-center mb-3">
                    <label for="petName" class="form-label col-form-label text-sm-end me-4">寵物姓名<span class="text-notice ms-1">*</span></label>
                    <div class="w-75">
                      <input name="寵物姓名" type="text" class="form-control disable" id="petName" disabled :value="showBook.petName">
                    </div>
                  </div>
                  <div class="d-flex justify-content-center mb-3">
                    <label for="inputName" class="form-label col-form-label text-sm-end me-4">飼主姓名<span class="text-notice ms-1">*</span></label>
                    <div class="w-75">
                      <input name="飼主姓名" type="text" class="form-control" id="inputName" disabled :value="showBook.ownerName">
                    </div>
                  </div>
                  <div class="d-flex justify-content-center mb-3">
                    <label for="inputTextarea" class="form-label col-form-label text-sm-end me-4">狀況說明<span class="text-notice ms-1">*</span></label>
                    <div class="w-75">
                      <textarea name="狀況說明" type="textarea" class="form-control" id="inputTextarea" disabled>{{ showBook.message }}</textarea>
                    </div>
                  </div>
                  <div class="d-flex justify-content-center mb-6">
                    <label for="state" class="form-label col-form-label text-sm-end me-4">預約狀態<span class="text-notice ms-1">*</span></label>
                    <div class="w-75">
                      <input name="預約狀態" type="text" class="form-control" id="state" disabled :value="showBook.state ? '預約成功':'預約取消'">
                    </div>
                  </div>
                  <div class="text-end me-5 me-xl-8">
                    <button type="button" class="btn btn-outline-primary me-4" @click="deleteBook" :class="{disabled: showBook.state == false}">取消預約</button>
                  </div>
                </v-form>
              </div>
              <div v-else class="text-center pb-7">
                請輸入掛號聯絡電話查詢
              </div>
            </div>
          </div>
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
      selectedDate: null,
      today: null,
      number: '',
      phoneNumber: '',
      message: '',
      time: '',
      petName: '',
      ownerName: '',
      message: '',
      booktemp: {
        phoneNumber: '',
        date: '',
        time: '',
        petName: '',
        ownerName: '',
        message: '',
        selected: true,
        state: true
      },
      bookList: [{
        phoneNumber: '0911234567',
        date: '2023/9/20',
        time: '10:00-11:00',
        petName: '橘子',
        ownerName: 'Vera',
        message: '食慾不振、拉肚子',
        selected: true,
        state: true
        },{
        phoneNumber: '0911234567',
        date: '2023/9/27',
        time: '19:00-20:00',
        petName: '橘子',
        ownerName: 'Vera',
        message: '回診',
        selected: false,
        state: true
        }],
      tempList:[],
      showBook:{}
    }
  },
  methods: {
    getData() {
      const selectedDate = document.getElementById("selectedDate");
      const cal = document.getElementById('datepicker');

      const todayDate = new Date();
      const lastDayOfMonth = new Date(todayDate.getFullYear(), todayDate.getMonth() + 1, 0);
      const formattedToday = moment(todayDate).format('YYYY/M/D');
      this.today = formattedToday;

      const picker = new Pikaday({
        firstDay: 1,
        minDate: todayDate,
        maxDate: lastDayOfMonth,
        format: 'YYYY/M/D',
        defaultDate: todayDate,
        onSelect: function(date) {
          let formattedDate = moment(date).format('YYYY/M/D')
          cal.value = formattedDate
          selectedDate.innerHTML = formattedDate
        }
      });
      picker.setDate(todayDate);
      cal.appendChild(picker.el);
    },
    isPhone(value) {
      const phoneNumber = /^(09)[0-9]{8}$/
      return phoneNumber.test(value) ? true : '請輸入手機號碼共十碼'
    },
    onSubmit() {
      this.booktemp.phoneNumber = this.phoneNumber
      this.booktemp.time = this.time
      this.booktemp.date = this.$refs.pickDay.innerHTML
      this.booktemp.petName = this.petName
      this.booktemp.ownerName = this.ownerName
      this.booktemp.message = this.message
      this.bookList.push(this.booktemp)
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: `預約完成：）`,
        showConfirmButton: false,
        timer: 1000,
        timerProgressBar: true,
        toast: true
      })
      this.$refs.form.resetForm();
    },
    formReset() {
      this.$refs.form.resetForm();
    },
    onCheck() {
      this.tempList = []
      this.bookList.forEach(item => {
        if(item.phoneNumber == this.number){
          if(parseInt(item.date.split('/')[2]) >= parseInt(this.today.split('/')[2])){
            this.tempList.push(item)
          }
        }
      })
      this.tempList.sort(function(a, b) {
        return a.date.split('/')[2] - b.date.split('/')[2]
      })
      if(this.tempList.length != 0){
        this.getBook(`${this.tempList[0].date}+${this.tempList[0].time}`)
      }else{
        this.tempList = []
        this.$refs.checkForm.resetForm();
        Swal.fire({
        position: 'center',
        icon: 'error',
        title: `查無預約資料，請再次確認。`,
        showConfirmButton: true,
        toast: true
      })}
    },
    getBook(check) {
      this.tempList.forEach((item, key) =>{
        this.tempList[key].selected = false
        if(`${item.date}+${item.time}`== check){
          this.tempList[key].selected = true
          this.showBook = item
        }
      })
    },
    deleteBook() {
      Swal.fire({
        position: 'center',
        title: '確認取消約診？',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#1ca0b8',
        cancelButtonColor: '#fea386',
        confirmButtonText: '是，請取消約診。',
        icon: 'success',
        toast: true
      }).then((result) => {
        if (result.isConfirmed) {
          this.showBook.state = false
          Swal.fire({
            position: 'center',
            title:'取消完成',
            text:'您的約診已取消，如有需要請重新預約。',
            icon:'success',
            toast: true
          })
        }
      })
    },
  },
  mounted() {
    this.isLoading = true
    setTimeout(()=>{
      this.isLoading = false
    },500)
    this.getData()
  }
}
</script>

<style>
.appointment-wrap {
  background-image: url(../../assets/img/subs-bg.jpg);
  background-position: center bottom;
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: cover;
}
.pika-single {
  z-index: 0;
  border: 0;
  display: flex;
  justify-content: center;
}
.pika-lendar {
  width: 100%;
  box-shadow: 1px 1px 10px #ddd;
  padding: 20px;
  margin: 0;
  border-radius: 20px;
}
.pika-button {
  text-align: center;
  padding-top: 10px;
  line-height: 30px;
}
.pika-button:hover {
  background-color: #e3eff3;
  color: #333;
}
.is-selected .pika-button {
  background-color: #1ca0b8;
  box-shadow: 0;
}
.is-today .pika-button{
  color: #fea386;
}
.book-form {
  box-shadow: 1px 1px 10px #ddd;
}
.invalid-feedback {
  display: block;
}
.btn-selected {
  background-color: pink;
  font-size: 20px;
}
</style>
