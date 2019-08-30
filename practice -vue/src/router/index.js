import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            component: Home
        },
        {
            path: '/home',
            component: Home
        },
        {
            path: '/classify',
            name: 'Classify',
            component: resolve => require(['@/views/Classify'], resolve)
        },
        {
            path: '/ranking',
            name: 'Ranking',
            component: resolve => require(['@/views/Ranking'], resolve)
        },
        {
            path: '/bookrack',
            name: 'Bookrack',
            component: resolve => require(['@/views/Bookrack'], resolve)
        }
    ],
    linkActiveClass:'active'
})