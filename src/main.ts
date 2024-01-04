import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import Blog from "./components/Blog.vue"
import router from "../src/router"
import store from "../store"

const app = createApp(App)

app.component('Blog',Blog)
app.use(router).use(store)
app.mount("#app")

