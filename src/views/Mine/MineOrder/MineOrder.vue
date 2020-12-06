<template>
  <div class="order">
    <!-- nav导航 -->
    <van-nav-bar title="我的订单" left-arrow fixed @click-left="onClickLeft" />
    <!--  tab订单栏导航 -->
    <div class="order-nav">
      <van-tabs
        class="order-nav-header"
        v-model="active"
        sticky
        :offset-top="46"
        @click="toOrder"
      >
        <van-tab v-for="it in orderList" :title="it.text" :key="it.id">
        </van-tab>
      </van-tabs>
      <div class="order-nav-main">
        <!-- 内容填充区 -->
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>
<script>
import { NavBar, Tab, Tabs } from "vant";
export default {
  name: "MineOrder",
  components: {
    [NavBar.name]: NavBar, //nav导航
    [Tab.name]: Tab,
    [Tabs.name]: Tabs,
  },
  data() {
    return {
      orderID: null, //设置id为空
      active: 0, //默认选中tab为0
      orderList: [], //tab栏数据
    };
  },

  created() {
    this.getOrder();
  },

  methods: {
    //获取传过来的id
    getOrder() {
      this.orderID = this.$route.query;
      this.$http.get("order").then((res) => {
        this.orderList = res.data.orderList;
      });
    },

    //返回到mine页面
    onClickLeft() {
      this.$router.push('/mine');
    },

    //跳转不同tab页面  问题:重复点击会报错
    toOrder(index) {
      let routes = {
        0: "/order/qb",
        1: "/order/dzf",
        2: "/order/dsy",
        3: "/order/ywc",
        4: "/order/tk"
      }[index];
      this.$router.push(routes);
    },
  },
};
</script>
<style lang="less" scoped>
.order {
  height: 100%;
  width: 100%;
  &-nav {
    padding-top: 46px;
    // &-main {
      // height: 500px;
      // background-color: yellow;
    // }
  }
}

//修改nav底部border
/deep/ .van-hairline--bottom::after {
  border: none;
}

// 修改tab栏点击样式
/deep/ .van-tab--active {
  background-color: red;
  color: white;
  border-radius: 10px;
}
</style>