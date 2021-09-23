import Vue from 'vue'
import VueRouter from 'vue-router'
import Header from '../components/Header.vue'
import Home from '../components/Home.vue'
import Formulaire from '../components/Formulaire.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/headpage',
        name: 'Header',
        component: Header
    },
    {
        path: '/homepage',
        name: 'Home',
        component: Home
    },
    {
        path: '/formpage',
        name: 'Formulaire',
        component: Formulaire
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router