import Vue from 'vue'
import App from './App.vue'
import router from '@/router/router.js'
import request from '@/utils/request'
import Tabbar from '@/components/Tabbar'  //标签栏组件
import '@/app/mymock'
import '@/assets/css/index.css'
import BaiduMap from 'vue-baidu-map'
Vue.use(BaiduMap, {
  ak: 'pGBGI3zpEKPt2DIdybKRsiq5DQcN3zoA'
})
Vue.use(request)
Vue.component('tabbar',Tabbar)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
