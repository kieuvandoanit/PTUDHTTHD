import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import {routes} from './routes';
import store from './store'
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import babelPolyfill from 'babel-polyfill';
import firebase from "firebase";
import Chartkick from 'vue-chartkick';
import Chart from 'chart.js';



Vue.config.productionTip = false;

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);


Vue.use(VueRouter);
Vue.use(Chartkick.use(Chart));


/**Config connect firebase */

firebase.initializeApp({
    apiKey: "AIzaSyAm-9zXqBpV9bToj6ZVYnIMtYMmtJ9QokI",
    authDomain: "uploadfileimages.firebaseapp.com",
    projectId: "uploadfileimages",
    storageBucket: "uploadfileimages.appspot.com",
    messagingSenderId: "941202696055",
    appId: "1:941202696055:web:023b8ca93f5219c44fe372",
    measurementId: "G-JCQSYVG7CM"
})


const router = new VueRouter({
    routes
});
router.beforeEach((to, from, next)=>{
    document.title = to.meta.title;
    if (to.name !== 'Login' && !localStorage.getItem('userID')){
        next({ name: 'Login' }); 
    } 
    else next();
});

new Vue({
    el:'#app',
    router,
    store,
    render: h => h(App)
}).$mount('#app');

