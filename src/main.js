import Vue from 'vue'
import App from './App.vue'
import "./assets/css/tailwind.css"
//import AppBar from "./components/AppBar.vue"

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
