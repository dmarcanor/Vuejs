import Vue from 'vue'
import App from './App.vue'
import router from './Components/Router/index'



new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
