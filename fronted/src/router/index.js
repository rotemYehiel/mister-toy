import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import toyAppPage from '../views/toy-app-page.vue'
import toyDetails from '../views/toy-details.vue'
import toyEdit from '../views/edit.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/About.vue')
    },
    {
        path: '/toy-app-page',
        name: 'toy-app-page',
        component: toyAppPage
    },
    {
        path: '/edit/:id?',
        name: 'edit',
        component: toyEdit

    },
    {
        path: '/:id',
        name: 'toy-details',
        component: toyDetails
    }
]

const router = new VueRouter({
    routes
})

export default router