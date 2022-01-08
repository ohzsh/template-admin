import { createApp } from 'vue'
import { createPinia } from 'pinia'
import router from './router'
import App from './App.vue'
import './style/tailwind.scss'
//tailwind导致element-plus 部分样式被覆盖因此需要重新引入element-plus样式
import 'element-plus/dist/index.css'

const app = createApp(App)
app.use(router)
app.use(createPinia())
app.mount('#app')
