import Vue from 'vue';
import 'bootstrap/dist/css/bootstrap.css'; // import Bootstrap css files
import 'bootstrap-vue/dist/bootstrap-vue.css';
import { BootstrapVue } from 'bootstrap-vue';
import App from './App.vue';
// Install BootstrapVue
Vue.use(BootstrapVue);

// Stops the warning from appearing in the console regarding being in development mode
Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app');
