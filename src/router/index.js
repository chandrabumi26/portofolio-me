import Vue from 'vue'
import VueRouter from 'vue-router'
import About from '../components/About.vue'
import Projects from '../components/Projects.vue'
import NFTs from '../components/NFT.vue'
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
    {
      path: '/nfts',
      name: 'nft',
      component: NFTs
    },
  ]
})

export default router
