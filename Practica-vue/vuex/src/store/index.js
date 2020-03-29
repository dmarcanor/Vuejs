import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

let store = new Vuex.Store({
    state: {
        counter: 0,
        name: "Soy un estado de la app con vuex"
    },

    getters: {
        tripleCounter(state) {
            return state.counter * 3
        }
    },

    mutations: {
        increment(state) {
            state.counter++
        },
        decrement(state) {
            state.counter--
        }
    }
})

export default store