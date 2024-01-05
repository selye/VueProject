import Home from "../view/home.vue";
import About from  "../view/about.vue";
import User from "../view/user.vue";
import LeftSlider from "../components/LeftSlider.vue"
import RightSlider from "../components/RightSlider.vue"

import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path:'/',
        components: {
            default: Home,
            LeftSlider: LeftSlider,
            RightSlider: RightSlider
        }
    },
    {
        path:'/about',
        name:"about",
        component: About
    },
    {
        path: '/user/:id',
        name: 'user',
        component: User
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router