import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueToastr from "vue-toastr"
import vuetify from './plugins/vuetify';

Vue.use(VueToastr);

Vue.config.ignoredElements = [/^ion-/]

Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
  