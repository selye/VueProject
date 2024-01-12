import Home from "../view/home.vue";
import About from  "../view/about.vue";
import User from "../view/user.vue";
import LeftSlider from "../components/LeftSlider.vue"
import RightSlider from "../components/RightSlider.vue"

import {createRouter, createWebHistory} from 'vue-router'

const routes = [
    {
        path:'/',
        components: {
            default: Home,
            LeftSlider: LeftSlider,
            RightSlider: RightSlider
        },
        meta:{
            requiresAuth: true,
            title:"首页"
        }
    },
    {
        path:'/about',
        name:"about",
        component: About,
        meta:{
            requiresAuth: true,
            title:"关于"
        }
    },
    {
        path: '/user/:id',
        name: 'user',
        component: User,
        meta:{
            requiresAuth: true,
            title:"用户"
        }
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
})

router.beforeResolve((to) => {
    window.document.title = to.meta.title as string
})



export default router