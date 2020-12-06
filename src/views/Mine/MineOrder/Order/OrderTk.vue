<template>
  <div class="orderqb">
    <!-- 数据为空 -->
    <div class="kong" v-if="this.qbList.length == 0">
      <shopcart></shopcart>
    </div>
    <!-- 数据不为空 -->
    <div v-else>
      222
    </div>
  </div>
</template>
<script>
import shopcart from '@/components/ShopCart'
export default {
  components: { 
    shopcart
  },
  data() {
    return {
      qbList: []
    }
  },
  created() {
    this.getQb()
  },
  methods: {
    getQb(){
      this.$http.get('orderqb').then(res => {
        this.qbList = res.data.orderqb
        // console.log(this.qbList);
      })
    }
  },
}
</script>
<style lang="less" scoped>
.orderqb {
  height: 100%;
  width: 100%;
}
</style>