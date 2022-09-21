import Vue from 'vue'
import VueRouter from 'vue-router'
import About from '../components/About.vue'
import Projects from '../components/Projects.vue'
Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: import.meta.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'about',
      component: About
    },
    {
      path: '/projects',
      name: 'projects',
      component: Projects
    },
  ]
})

export default router
