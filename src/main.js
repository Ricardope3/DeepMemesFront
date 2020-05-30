import Vue from 'vue'
import App from './App.vue'
import "./assets/css/tailwind.css"
import { library } from '@fortawesome/fontawesome-svg-core'
import { faHeart, faHeartBroken, faComments } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import store from './store';
import router from './router'
import firebase from 'firebase/app';
import authStore from "./store/modules/auth"
import VModal from 'vue-js-modal'
const firebaseConfig = {
  apiKey: "AIzaSyDrz1eHFs0puJKqHGHEGSn26QtimniOyzc",
  authDomain: "deep-memes.firebaseapp.com",
  databaseURL: "https://deep-memes.firebaseio.com",
  projectId: "deep-memes",
  storageBucket: "deep-memes.appspot.com",
  messagingSenderId: "664277891791",
  appId: "1:664277891791:web:41bcd3c42f66e286ae95ba",
  measurementId: "G-FTG4GC85GF"
};
Vue.use(VModal)
library.add(faHeart, faHeartBroken, faComments)
Vue.component('font-awesome-icon', FontAwesomeIcon)

firebase.initializeApp(firebaseConfig);



Vue.config.productionTip = false


let app;

firebase.auth().onAuthStateChanged(user => {
  if (user) {
    authStore.state.user = { id: user.uid, email: user.email }
  }
  if (!app) {
    app = new Vue({
      store,
      router,
      render: h => h(App)
    }).$mount('#app')

  }
})