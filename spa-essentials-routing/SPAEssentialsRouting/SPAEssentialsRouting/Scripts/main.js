import Vue from 'vue'
import axios from 'axios'
import VueRouter from 'vue-router';

import router from './routes';

window.Vue = Vue;
Vue.use(VueRouter);

window.axios = axios;
window.axios.defaults.headers.common = {
    'X-Requested-With': 'XMLHttpRequest'
};

const app = new Vue({
    el: '#app',

    router
});