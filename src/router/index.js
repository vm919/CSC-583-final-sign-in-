import Vue from 'vue';
import VueRouter from 'vue-router';
import index from '../components/Index.vue';
import showAllUsers from '../components/ShowAllUsers.vue';
import register from '../components/Register.vue';
import VueAxios from 'vue-axios';
import axios from 'axios';
import 'jquery/jquery.js';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/js/dist/scrollspy.js';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import BootstrapVue from 'bootstrap-vue';
import Scrollspy from 'vue2-scrollspy';

Vue.use(Scrollspy);
Vue.use(VueAxios, axios);
Vue.use(VueRouter)
Vue.use(BootstrapVue);

const router =  new VueRouter({
    routes: [
        {
            path: '/',
            name: 'index',
            component: index
        },
        {
            path: '/register',
            name: 'register',
            component: register
        },
        {
            path: '/showallusers',
            name: 'showallusers',
            component: showAllUsers
        }
    ], mode:"history"
})

export default router;
