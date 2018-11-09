import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import iView from 'iview';
import 'iview/dist/styles/iview.css';
import eventBus from './libs/js/vueExtend/eventBus'
import directive from './libs/js/vueExtend/directive'

Vue.use(iView);
Vue.use(eventBus);
Vue.use(directive);
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
