import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

const routes = [
  {
    path: '/index',
    component: () => import('@/views/index'),
    meta: {
      title: '注册页'
    }
  },
  {
    path: '/',
    component: () => import('@/views/HomePage'),
    meta: {
      title: '首页'
    }
  },
  {
    path: '/specialsell',
    component: () => import('@/views/SpecialSell'),
    meta: {
      title: '特卖'
    }
  },
  {
    path: '/destination',
    component: () => import('@/views/Destination'),
    meta: {
      title: '目的地'
    }
  },
  {
    path: '/members',
    component: () => import('@/views/Members'),
    meta: {
      title: '会员中心'
    }
  },
  {
    path: '/mine',
    component: () => import('@/views/Mine'),
    meta: {
      title: '我的'
    },
  },
  {
    path: '/order',
    component: () => import('@/views/Mine/MineOrder/MineOrder'),
    meta: {
      title: '我的订单'
    },
    children: [
      {
        path: 'qb',
        component: () => import('@/views/Mine/MineOrder/Order/OrderQb')
      },
      {
        path: 'dzf',
        component: () => import('@/views/Mine/MineOrder/Order/OrderDzf')
      },
      {
        path: 'dsy',
        component: () => import('@/views/Mine/MineOrder/Order/OrderDsy')
      },
      {
        path: 'ywc',
        component: () => import('@/views/Mine/MineOrder/Order/OrderYwc')
      },
      {
        path: 'tk',
        component: () => import('@/views/Mine/MineOrder/Order/OrderTk')
      }
    ]
  },
  {
    path: '/love',
    component: () => import('@/views/Mine/MineLove'),
    meta: {
      title: '我的喜欢'
    }
  },
  {
    path: '/info',
    component: () => import('@/views/Mine/MineInfo/MineInfo'),
    meta: {
      title: '常用信息'
    }
  },
  {
    path: '/tel',
    component: () => import('@/views/Mine/MineTel'),
    meta: {
      title: '绑定手机号'
    }
  },
  {
    path: '/suggest',
    component: () => import('@/views/Mine/MineSuggest'),
    meta: {
      title: '建议与反馈'
    }
  },
  {
    path: '/set',
    component: () => import('@/views/Mine/MineSet'),
    meta: {
      title: '设置'
    }
  },
  {
    path: '/hotel',
    component: () => import('@/views/Mine/MineInfo/Tohotel'),
    meta: {
      title: '新增常用旅客'
    }
  },
  {
    path: '/search',
    component: () => import('@/components/Search'),
    meta: {
      title: '搜索'
    }
  },
  {
    path: '/detailpage',
    component: () => import('@/components/DetailPage'),
    meta: {
      title: '房源详情页'
    }
  },
  {
    path: '/baidu',
    component: () => import('@/components/Baidu'),
    meta: {
      title: '百度地图定位'
    }
  },


]

const router = new Router({
  routes
})

// router.beforeEach((to, from, next) => {
//   if (to.path === '/index') {
//     next()
//   } else {
//     next()
//   }
// })

export default router