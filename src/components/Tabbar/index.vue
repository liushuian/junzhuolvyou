<template>
  <van-tabbar v-model="active" route>
    <van-tabbar-item replace to="/" icon="home-o">首页</van-tabbar-item>
    <van-tabbar-item replace to="/specialsell" icon="fire-o">特卖</van-tabbar-item>
    <van-tabbar-item replace to="/destination" icon="location-o">目的地</van-tabbar-item>
    <van-tabbar-item replace to="/members" icon="diamond-o">会员中心</van-tabbar-item>
    <van-tabbar-item replace to="/mine" icon="smile-o">我的</van-tabbar-item>
  </van-tabbar>
</template>

<script>
import { Tabbar, TabbarItem } from "vant";
export default {
  name: "Tabbar",
  components: {
    [Tabbar.name]: Tabbar,
    [TabbarItem.name]: TabbarItem
  },
  data() {
    return {
      active: 0,
    };
  }
};
</script>

<style lang="less">
</style>