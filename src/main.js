import Vue from 'vue';
import 'bootstrap/dist/css/bootstrap.css'; // import Bootstrap css files
import 'bootstrap-vue/dist/bootstrap-vue.css';
import { BootstrapVue } from 'bootstrap-vue';
import VueRouter from 'vue-router';


import { library } from '@fortawesome/fontawesome-svg-core';
import { faCloud, faUserSecret } from '@fortawesome/free-solid-svg-icons';
import { faFontAwesome, faLinkedin, faTwitterSquare } from '@fortawesome/free-brands-svg-icons';
import { faAngry, faEnvelope, faFilePdf } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

import App from './App.vue';
import Project from './components/Projects.vue';
import About from './components/About.vue';
import Experience from './components/Experience.vue';


library.add(faUserSecret, faFontAwesome, faAngry, faFilePdf, faLinkedin, faEnvelope, faTwitterSquare, faCloud);

// Install BootstrapVue
Vue.use(BootstrapVue);
Vue.use(VueRouter);

Vue.component('font-awesome-icon', FontAwesomeIcon);

// Stops the warning from appearing in the console regarding being in development mode
Vue.config.productionTip = false;

const routes = [
  {
    path: '/',
    component: About,
    meta:
      {
        title: 'Kyle Wei - About',
      },
  },
  {
    path: '/projects',
    component: Project,
    meta:
      {
        title: 'Kyle Wei - Projects',
      },
  },
  {
    path: '/about',
    component: About,
    meta:
      {
        title: 'Kyle Wei - About',
      },
  },
  {
    path: '/experience',
    component: Experience,
    meta:
      {
        title: 'Kyle Wei - Experience',
      },
  },
];

const router = new VueRouter({
  routes,
});

new Vue({
  render: h => h(App),
  router,
}).$mount('#app');
