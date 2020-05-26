import Vue from 'vue'
import axios  from 'axios' 

// axios.defaults.baseURL="http://localhost:3000"
const http = axios.create({
    baseURL: "http://121.199.59.164:80",
    maxContentLength: Infinity
})
Vue.prototype.$ajax = http