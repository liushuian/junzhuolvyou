import axios from 'axios'

axios.defaults.baseURL = 'http://junzhuo.com'




export default{
  install(Vue){
    Vue.prototype.$http = axios
  }
}