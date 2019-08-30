import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
Vue.use(Vuex);

const state = {
    dataList: [],
    menuList: [],
}

const mutations = {
    getData(state, obj) {
        state.dataList = obj
    },
    getMenuList(state, obj) {
        state.menuList = obj
    }
}

const actions = {
    getDataFn({ commit }) {
        axios.get('api/banner.json').then((res) => {
            commit('getData', res.data.BannerList)
        })
    },
    getMenuListFn({ commit }) {
        axios.get('api/list.json').then((res) => {
            commit('getMenuList', res.data)
        })
    },
    
}



export default new Vuex.Store({
    state,
    mutations,
    actions
})