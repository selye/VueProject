import { createApp } from 'vue'
import ArcoVue from '@arco-design/web-vue';
import '@arco-design/web-vue/dist/arco.css';
import './style.css'
import App from './App.vue'
import Blog from "./components/Blog.vue"
import router from "../src/router"
import store from "../store"

const app = createApp(App)


app.component('Blog',Blog)
app.use(router).use(store).use(ArcoVue,{ componentPrefix: 'jw' })
app.mount("#app")

