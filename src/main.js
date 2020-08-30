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

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
Vue.config.silent = true;

  