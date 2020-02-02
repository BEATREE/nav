import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Develop from '../components/Develop.vue'
import Recommend from '../components/Recommend.vue'
import Design from '../components/Design.vue'
import Onlinetools from '../components/Onlinetools.vue'



Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    redirect: '/recommend',
    children: [
        { path: 'recommend', component: Recommend},
        { path: 'devspace', component: Develop, },
        { path: 'design', component: Design, },
        { path: 'onlinetools', component: Onlinetools,}

    ]
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
