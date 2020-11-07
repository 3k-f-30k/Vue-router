export default {
    state: {
        message: 'hello vuex',
        users: [],
        admin: false,
    },
    mutations: {
        setMessage (state, message) {
            state.message = message
        }
    },
    actions: {
        setMessage ({commit}, payload) {
            commit('setMessage', payload)
        }
    },
    getters: {
        getMesage (state) {
            return state.message
        }
    },
}