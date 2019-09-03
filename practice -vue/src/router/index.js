import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'

Vue.use(Router)

const router = new Router({
    routes: [
        {
            path: '/',
            component: Home
        },
        {
            path: '/home',
            component: Home,
        },
        {
            path: '/classify',
            name: 'Classify',
            component: resolve => require(['@/views/Classify'], resolve),
            children: [
                {
                    path: '/',
                    name: 'Hot',
                    component: resolve => require(['@/views/Hot'], resolve)
                },
                {
                    path: '/classify/hot',
                    name: 'Hot',
                    component: resolve => require(['@/views/Hot'], resolve)
                },
                {
                    path: '/classify/newbook',
                    name: 'Newbook',
                    component: resolve => require(['@/views/Newbook'], resolve)
                },
                {
                    path: '/classify/free',
                    name: 'Free',
                    component: resolve => require(['@/views/Free'], resolve)
                },
                {
                    path: '/classify/end',
                    name: 'End',
                    component: resolve => require(['@/views/End'], resolve)
                }

            ]
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
        },
        {
            path: '/login',
            name: 'Login',
            component: resolve => require(['@/views/Login'], resolve)
        },
        {
            path: '/details/:id',
            name: 'Details',
            component: resolve => require(['@/views/Details'], resolve)
        },
        {
            path: '*',
            name: '404',
            component: resolve => require(['@/views/404'], resolve)
        }
    ],
    linkActiveClass: 'active'
})

let way = ['/bookrack']

router.beforeEach((to, from, next) => {
    if (way.includes(to.path)) {
        if (localStorage.getItem('user')) {
            next()
        } else {
            next('/login')
        }
    } else {
        next()
    }
})


export default router;