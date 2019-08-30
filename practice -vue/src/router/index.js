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
            path: '/discover',
            name: 'Discover',
            component: resolve => require(['@/views/Discover'], resolve)
        },
        {
            path: '/order',
            name: 'Order',
            component: resolve => require(['@/views/Order'], resolve)
        },
        {
            path: '/my',
            name: 'My',
            component: resolve => require(['@/views/My'], resolve)
        }
    ]
})