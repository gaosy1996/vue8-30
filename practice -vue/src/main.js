// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

//axios
import axios from 'axios';
Vue.prototype.axios = axios;

//reset
import '@/assets/css/reset.css';

//自适应
import '@/assets/js/font.js';

//动画
import 'animate.css';

//swiper
import  VueAwesomeSwiper  from  'vue-awesome-swiper'
import  'swiper/dist/css/swiper.css'
Vue.use(VueAwesomeSwiper); 

//vuex
import store from './store'

//min ui
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI)

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    components: { App },
    template: '<App/>'
})