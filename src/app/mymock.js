import Mock from 'mockjs'

//注册页面

// 验证码请求接口get
Mock.mock('http://junzhuo.com/code', 'get', {
  'code': Math.floor(Math.random() * 8999 + 1000)
})

// 用户信息提交请求接口post
Mock.mock('http://junzhuo.com/userinfo','post',{
  'msg': 'success'
})


//首页

//获取轮播图接口get
Mock.mock('http://junzhuo.com/lunbo','get',{
  
})

// 热门城市请求接口get
Mock.mock('http://junzhuo.com', 'get', {
  'city': [
    {
      city: '深圳',
      id: 100,
      'img': 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1605768913550&di=f4e99467f49894792245d8222156b7e5&imgtype=0&src=http%3A%2F%2Fpic.baike.soso.com%2Fugc%2Fbaikepic2%2F3859%2F20180604094331-51183205_png_940_599_791616.jpg%2F0'
    },
    {
      city: '广州',
      id: 101,
      'img': 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1605769621014&di=ec02673a009f36ae17a983ae862740e7&imgtype=0&src=http%3A%2F%2Fdingyue.ws.126.net%2F2020%2F0516%2F867b920ej00qaeznc0024d000s600hmp.jpg'
    },
    {
      city: '惠州',
      id: 102,
      'img': 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1605769651145&di=9fb827c38c7aa4a5a0e00eeab9f73583&imgtype=0&src=http%3A%2F%2Fimg.mp.itc.cn%2Fupload%2F20170610%2F08494c09f91845c88084faaf71ef9577_th.jpg'
    }
  ],
  'district': [
    {
      city: '阳江',
      id: 103
    },
    {
      city: '清远',
      id: 104
    },
    {
      city: '佛山',
      id: 105
    },
    {
      city: '河源',
      id: 106
    },
    {
      city: '汕尾',
      id: 107
    },
    {
      city: '东莞',
      id: 108
    },
    {
      city: '香港',
      id: 109
    },
    {
      city: '澳门',
      id: 110
    },
    {
      city: '三亚',
      id: 111
    }
  ]
})



//特卖页

//顶部城市栏接口get
Mock.mock('http://junzhuo.com/allcity','get',{
  citys: [
    {
      title: '惠州',
      id: 301
    },
    {
      title: '深圳',
      id: 302
    },
    {
      title: '清远',
      id: 303
    },
    {
      title: '广州',
      id: 304
    },
    {
      title: '河源',
      id: 305
    },
    {
      title: '东莞',
      id: 306
    }
  ]
})

//特卖旅店详情接口post
Mock.mock('http://junzhuo.com/detail','post',{
  'detailcity|20': [
    {
      'id|+1': 33,
      'img|1': '@image',
      'birthday': '@date("MM-dd")',
      'name': '@name',
      'info|1': ['白皙细腻的沙滩，蔚蓝剔透的海底世界，温柔清新的椰风，雀跃的雪白浪花','以及远离俗世的静谧浪漫。地处北纬18度的三亚，享有“东方夏威夷”的美誉。'],
      'pirce|+10': 341,
      'mpirce|+30': 523
    }
  ]
})


//tsell组件

//tab栏接口get
Mock.mock('http://junzhuo.com/tabs','get',{
  'tabs': [
    {
      'title': '全部',
      'id': 1
    },
    {
      'title': '房源',
      'id': 2
    },
    {
      'title': '美食餐饮',
      'id': 3
    },
    {
      'title': '热销',
      'id': 4
    }
  ]
})

// 我的页面接口get
Mock.mock('http://junzhuo.com/mine','get',{
  info: [
    {
      text: '我的订单',
      id: 600,
      path: '/order'
    },
    {
      text: '我的喜欢',
      id: 601,
      path: '/love'
    },
    {
      text: '常用信息',
      id: 602,
      path: '/info'
    },
    {
      text: '绑定手机号',
      id: 603,
      path: '/tel'
    },
    {
      text: '建议与反馈',
      id: 604,
      path: '/suggest'
    },
    {
      text: '设置',
      id: 605,
      path: '/set'
    }
  ]
})

// 订单状态接口get
Mock.mock('http://junzhuo.com/order','get',{
  orderList: [
    {
      text: '全部',
      id: 610
    },
    {
      text: '待支付',
      id: 611
    },
    {
      text: '待使用',
      id: 612
    },
    {
      text: '已完成',
      id: 613
    },
    {
      text: '取消/退款',
      id: 614
    }
  ]
})

// 全部订单接口get 无数据
Mock.mock('http://junzhuo.com/orderqb','get',{ 
  orderqb: [
   
  ]
})

// 旅客信息接口get 无数据
Mock.mock('http://junzhuo.com/lk','get',{ 
  lkarr: [
    
  ]
})

// 搜索接口get 无数据
Mock.mock('http://junzhuo.com/search','get',{ 
  searchList: [

  ]
})

Mock.setup({
  timeout: 400
})