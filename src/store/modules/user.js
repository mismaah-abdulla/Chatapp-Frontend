import axios from 'axios'
const state = {
    username: localStorage.getItem('username') || '',
    token: localStorage.getItem('token') || '',
    status: '',
}
const getters = {
    isLoggedIn: state => !!state.token,
    authStatus: state => state.status,
    getCurrentUser: state => state.username
}
const actions = {
    login: ({commit}, payload) => {
        return new Promise((resolve, reject) => {
            commit('auth_request')
            let host = location.host
            axios({url: `http://${host}/api/login`, data: payload, method: 'POST' })
            .then(resp => {
                const token = resp.data.token
                const username = resp.data.username
                localStorage.setItem('username', username)
                localStorage.setItem('token', token)
                axios.defaults.headers.common['Authorization'] = token
                commit('auth_success', resp.data)
                resolve(resp)
            })
            .catch(err => {
                commit('auth_error')
                localStorage.removeItem('token')
                reject(err.response.data)
            })
        }) 
    },
    logout({commit}){
        return new Promise((resolve, reject) => {
          commit('logout')
          localStorage.removeItem('token')
          delete axios.defaults.headers.common['Authorization']
          resolve()
        })
    }
}
const mutations = {
    auth_success(state, data){
        state.status = 'success'
        state.token = data.token
        state.username = data.username
    },
    auth_error(state){
        state.status = 'error'
    },
    auth_request(state){
        state.status = 'loading'
    },
    logout(state){
        state.status = ''
        state.token = ''
        state.username = ''
    },
}
export default {state, getters, actions, mutations}