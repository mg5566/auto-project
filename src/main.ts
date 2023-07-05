import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { router } from './router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import { createPinia } from 'pinia'
import { worker } from './mocks/browser'

const app = createApp(App);

const pinia = createPinia();

app.use(ElementPlus);
app.use(router);
app.use(pinia);

worker.start();

app.mount('#app')
