import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Register from './views/Register.vue'
import Chats from './views/Chats.vue'
import About from './views/About.vue'

Vue.use(Router)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/about',
        name: 'About',
        component: About
    },
    {
        path: '/register',
        name: 'Register',
        component: Register
    },
    {
        path: '/chats',
        name: 'Chats',
        component: Chats
    }
]

const router = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
