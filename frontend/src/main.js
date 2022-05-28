import { createApp, VueElement } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import './main.css'

axios.interceptors.request.use(
    function(successfulReq) {
        if (!successfulReq.url.includes('login') && !successfulReq.url.includes('register') && !successfulReq.url.includes('refresh')){
            store.dispatch('refreshToken')
        }
        return successfulReq
    },
    function(error){
        return Promise.reject(error)
    }
)

const app = createApp(App).use(store).use(router).mount('#app')