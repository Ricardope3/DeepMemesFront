import Vue from 'vue'
import App from './App.vue'
import "./assets/css/tailwind.css"
import { library } from '@fortawesome/fontawesome-svg-core'
import { faHeart , faHeartBroken,faComments} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
 
library.add(faHeart,faHeartBroken,faComments)
Vue.component('font-awesome-icon', FontAwesomeIcon)
 


//import AppBar from "./components/AppBar.vue"

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
