import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
Vue.use(Vuex);

const state = {
    swiperList:[],
}

const mutations = {
    getSwiperList(state,obj){
        state.swiperList = obj
    }
}

const actions = {
    getSwiperListFn({commit}){
        axios.get('api/homeData.json').then(res=>{
            commit('getSwiperList',res.data.data[0].vacationList)
        })
    }
}



export default new Vuex.Store({
    state,
    mutations,
    actions
})