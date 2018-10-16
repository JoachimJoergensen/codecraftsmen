window.$ = window.jQuery = require('jquery');
window.Vue = require('vue');

Vue.component('hero', require('./components/Hero.vue'));
Vue.component('header-component', require('./components/HeaderComponent.vue'));
Vue.component('services', require('./components/Services.vue'));
Vue.component('about', require('./components/About.vue'));
Vue.component('footer-component', require('./components/FooterComponent.vue'));

const app = new Vue({
    el: '#app'
});