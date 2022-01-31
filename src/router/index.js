import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    children: [
      {
        path: "",
        name: "BlogList",
        component: () => import("@/components/BlogList"),
      },
      {
        path: '/blogDetail/:id',
        name: 'BlogDetail',
        component: () => import("@/components/BlogDetail"),
      },
      {
        path: '/addBlog',
        name: 'AddBlog',
        component: () => import("@/components/AddBlog"),
      },
      {
        path: '/editBlog/:id',
        name: 'EditBlog',
        component: () => import("@/components/EditBlog"),
      },
    ]
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
