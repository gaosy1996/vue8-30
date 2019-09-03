import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
Vue.use(Vuex);

const state = {
    swiperList: [],
    hotList: [],
    newBookList: [],
    freeList: [],
    endList: [],
    myBookShelf: []
}

const mutations = {
    getSwiperList(state, obj) {
        state.swiperList = obj
    },
    getHotList(state, obj) {
        state.hotList = obj
    },
    getnewBookList(state, obj) {
        state.newBookList = obj
    },
    getFreeList(state, obj) {
        state.freeList = obj
    },
    getEndList(state, obj) {
        state.endList = obj
    },
    addMyBookShelf(state, obj) {
        state.myBookShelf.push(obj)
    },
    removeMyBookShelf(state, id) {
        console.log("111111")
        let idx = state.myBookShelf.findIndex(item => item.id === id);
        state.myBookShelf.splice(idx,1)
  
    }

}

const actions = {
    //swiper数据
    getSwiperListFn({ commit }) {
        axios.get('api/homeData.json').then(res => {
            commit('getSwiperList', res.data.data[0].vacationList)
        })
    },
    //热门数据
    getHotListFn({ commit }) {
        axios.get('api/data.json').then(res => {
            commit('getHotList', res.data.ranklist0)
        })
    },
    //新书数据
    getnewBookListFn({ commit }) {
        axios.get('api/data.json').then(res => {
            commit('getnewBookList', res.data.ranklist1)
        })
    },
    //免费新书数据
    getFreeListFn({ commit }) {
        axios.get('api/data.json').then(res => {
            commit('getFreeList', res.data.ranklist2)
        })
    },
    //完本数据
    getEndListFn({ commit }) {
        axios.get('api/data.json').then(res => {
            commit('getEndList', res.data.ranklist3)
        })
    }
}

export default new Vuex.Store({
    state,
    mutations,
    actions
})