import 'ant-design-vue/dist/antd.css';
import Antd from 'ant-design-vue';
import './styles/style.scss';
Vue.use(Antd);

import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
