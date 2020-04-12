import Vue from 'vue'
import App from './App.vue'
import "./assets/css/tailwind.css"
import { library } from '@fortawesome/fontawesome-svg-core'
import { faHeart , faHeartBroken,faComments} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import store from './store';

library.add(faHeart,faHeartBroken,faComments)
Vue.component('font-awesome-icon', FontAwesomeIcon)
 



Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
