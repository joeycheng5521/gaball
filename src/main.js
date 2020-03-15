import Vue from 'vue';
import App from './App';
import { router } from './router';
import './assets/css/common.less'

new Vue({
  router,
  el: '#app',
  render: h => h(App)
});
