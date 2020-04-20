import Vue from 'vue';
import 'bootstrap/dist/css/bootstrap.css'; // import Bootstrap css files
import 'bootstrap-vue/dist/bootstrap-vue.css';
import { BootstrapVue } from 'bootstrap-vue';
import VueRouter from 'vue-router';


import { library } from '@fortawesome/fontawesome-svg-core';
import { faUserSecret } from '@fortawesome/free-solid-svg-icons';
import { faFontAwesome } from '@fortawesome/free-brands-svg-icons';
import { faAngry, faFilePdf } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

import App from './App.vue';
import MainPage from './components/MainPage.vue';
import Project from './components/Projects.vue';
import Education from './components/Education.vue';
import Experience from './components/Experience.vue';


library.add(faUserSecret, faFontAwesome, faAngry, faFilePdf);

// Install BootstrapVue
Vue.use(BootstrapVue);
Vue.use(VueRouter);

Vue.component('font-awesome-icon', FontAwesomeIcon);

// Stops the warning from appearing in the console regarding being in development mode
Vue.config.productionTip = false;

const routes = [
  { path: '/', component: MainPage },
  { path: '/home', component: MainPage },
  { path: '/projects', component: Project },
  { path: '/education', component: Education },
  { path: '/experience', component: Experience },
];

const router = new VueRouter({
  routes,
});

new Vue({
  render: h => h(App),
  router,
}).$mount('#app');