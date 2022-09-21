import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Vuetify from 'vuetify'
import './assets/main.css'
import 'vuetify/dist/vuetify.min.css'
import '@mdi/font/css/materialdesignicons.css'

Vue.use(Vuetify)

new Vue({
  vuetify : new Vuetify(),
  router,
  render: (h) => h(App)
}).$mount('#app')
