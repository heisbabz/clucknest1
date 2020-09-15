import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueToastr from "vue-toastr"
import vuetify from './plugins/vuetify'
import vueCountryRegionSelect from 'vue-country-region-select'
import firebase from 'firebase'

Vue.use(firebase)
Vue.use(VueToastr);
Vue.use(vueCountryRegionSelect);

Vue.config.ignoredElements = [/^ion-/]

Vue.config.productionTip = false

const firebaseConfig = {
  apiKey: "AIzaSyCCJNF2fdwnT4lIPeaVAuNs-sYuB1RHZDY",
  authDomain: "clucknest.firebaseapp.com",
  databaseURL: "https://clucknest.firebaseio.com",
  projectId: "clucknest",
  storageBucket: "clucknest.appspot.com",
  messagingSenderId: "1076141999615",
  appId: "1:1076141999615:web:91362257d98ea6931a93ca",
  measurementId: "G-XE4S14204T"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

let app;

firebase.auth().onAuthStateChanged(()=> {
  if(!app) {
    app = new Vue({
      router,
      vuetify,
      render: h => h(App)
    }).$mount('#app')
  }
})
Vue.config.silent = true;

  