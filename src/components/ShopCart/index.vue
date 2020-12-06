<template>
  <div class="shopcart">
    <!-- 空状态 -->
    <van-empty description="您还没有相关订单">
      <van-button round type="danger" class="bottom-button"> 看看还有哪些想买的 </van-button>
    </van-empty>
  </div>
</template>
<script>
import { Empty, Button } from 'vant';
export default {
  name: 'shopcart',
  components: {
    [Empty.name]: Empty,
    [Button.name]: Button
  }
}
</script>
<style lang="less" scoped>
   .bottom-button {
    width: 160px;
    height: 40px;
  }

//修改图标垂直位置
  /deep/ .van-empty {
    margin-top: 100px;
  }
</style>