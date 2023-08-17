import { createApp } from 'vue'
import { createPinia } from 'pinia'
import axios from 'axios'
import VueAxios from 'vue-axios'
import './assets/all.scss'
import 'bootstrap/dist/js/bootstrap.min.js';

import App from './App.vue'
import router from './router'

const app = createApp(App)
app.use(VueAxios, axios)
app.use(createPinia())
app.use(router)

app.mount('#app')

//Vue 換頁高度回到頂端
router.afterEach((to, from, next) => {
	window.scrollTo(0, 0);
});
