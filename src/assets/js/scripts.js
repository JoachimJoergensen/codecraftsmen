window.$ = window.jQuery = require('jquery');
window.Vue = require('vue');

Vue.component('header-component', require('./components/HeaderComponent'));
Vue.component('hero-component', require('./components/HeroComponent'));
Vue.component('service-component', require('./components/ServiceComponent'));
Vue.component('about-component', require('./components/AboutComponent'));
Vue.component('footer-component', require('./components/FooterComponent'));

import VueResources from 'vue-resource';
import router from './router';

Vue.use(VueResources);
Vue.http.options.root = 'http://headlesscms.localhost/wp-json/';


const app = new Vue({
    el: '#app',
    router
});