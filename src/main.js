import { createApp } from 'vue'
import App from './App.vue'
import 'amfe-flexible'
import './assets/reset.css'
// 全局引入按需引入UI库 vant
import { vantPlugins } from './vant/index'
import router from './router';
import store from './store';
const app = createApp(App)
app.use(router)
app.use(store)
app.use(vantPlugins)
app.mount('#app')
