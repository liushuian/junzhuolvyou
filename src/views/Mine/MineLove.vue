<template>
  <div class="love">
    <van-nav-bar title="我的喜欢" left-arrow fixed @click-left="onClickLeft" />
    <div class="kong" v-if="this.qbList.length == 0">
      <shopcart></shopcart>
    </div>
    <!-- 数据不为空 -->
    <div v-else>222</div>
  </div>
</template>
<script>
import shopcart from "@/components/ShopCart";
import { NavBar } from "vant";
export default {
  name: "MineLove",
  components: {
    [NavBar.name]: NavBar, //nav导航
    shopcart,
  },
  data() {
    return {
      qbList: [],
    };
  },

  methods: {
    //返回到mine页面
    onClickLeft() {
      this.$router.push("/mine");
    },

    getQb() {
      this.$http.get("orderqb").then((res) => {
        this.qbList = res.data.orderqb;
        // console.log(this.qbList);
      });
    },
  },
};
</script>
<style lang="less" scoped>
.love {
  height: 100%;
  width: 100%;
}

//修改nav底部border
/deep/ .van-hairline--bottom::after {
  border: none;
}
</style>