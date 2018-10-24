import Vue from 'vue';
import Router from 'vue-router';
import Homepage from '../pages/HomePage';
import Services from '../pages/ServicePage';
import About from '../pages/AboutPage';
import Contact from '../pages/ContactPage';

Vue.use(Router);


export default new Router ({
    
    mode: 'history',
    linkActiveClass: 'is-active', 
    routes: [
        {
            path: '/',
            name: Homepage,
            component: Homepage
        },
        {
            path: '/services',
            name: Services,
            component: Services
        },
        {
            path: '/about',
            name: About,
            component: About
        },
        {
            path: '/contact',
            name: Contact,
            component: Contact
        }
    ]

});