import Vue from 'vue'
import App from './App.vue'
// Vuex
import store from '@/store'

Vue.config.productionTip = false

// Element UI
import 'element-ui/lib/theme-chalk/switch.css';
import {Switch} from 'element-ui';
Vue.use(Switch)

// Bootstrap
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"

// import customerize scss
import "../src/assets/css/index.scss"

new Vue({
  render: h => h(App),
  store: store,
}).$mount('#app')
