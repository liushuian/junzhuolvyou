<template>
  <div class="love">
    <van-nav-bar title="绑定手机号" left-arrow fixed @click-left="onClickLeft" />
  </div>
</template>
<script>
import { NavBar } from "vant";
export default {
  name: 'MineTel',
  components: {
    [NavBar.name]: NavBar, //nav导航
  },
  data() {
    return {
      
    }
  },

  methods: {
     //返回到mine页面
    onClickLeft() {
      this.$router.push('/mine');
    },
  },
}
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