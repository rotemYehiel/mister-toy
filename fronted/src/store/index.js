import Vue from 'vue'
import Vuex from 'vuex'
// import { toysService } from '../services/toys.service.js'
import { toyStore } from './toy.store.js'

Vue.use(Vuex)

export default new Vuex.Store({
    strict: true,
    state: {},
    mutations: {},
    getters: {},
    actions: {},
    modules: {
        toyStore
    }
})