<template>
  <div class="baidu">
    <div class="nav">
      <van-nav-bar
        class="nav-top"
        title="当前位置"
        left-arrow
        fixed
        @click-left="onClickLeft"
      >
      </van-nav-bar>
    </div>
    <baidu-map
    :center="center"
    :zoom="zoom"
    @ready="handler"
    style="height:100%"
    @click="getClickInfo"
    :scroll-wheel-zoom="true"
  >
  </baidu-map>
  </div>
</template>
<script>
import { NavBar } from 'vant'
export default {
  name: "BaiDu",
  components: {
    [NavBar.name]: NavBar
  },
  data() {
    return {
      center: { lng: 109.45744048529967, lat: 36.49771311230842 },
      zoom: 13,
    };
  },
  methods: {
    handler({ BMap, map }) {
      let point = new BMap.Point(109.49926175379778, 36.60449676862417);
      map.centerAndZoom(point, 13);
      let marker = new BMap.Marker(point); // 创建标注
      map.addOverlay(marker); // 将标注添加到地图中
      let circle = new BMap.Circle(point, 6, {
        strokeColor: "Red",
        strokeWeight: 6,
        strokeOpacity: 1,
        Color: "Red",
        fillColor: "#f03",
      });
      map.addOverlay(circle);
    },
    getClickInfo(e) {
      this.center.lng = e.point.lng;
      this.center.lat = e.point.lat;
    },

    //返回到搜索页面
    onClickLeft() {
      this.$router.go(-1);
    },
  },
};
</script>
<style lang="less" scoped>
.baidu {
  width: 100%;
  height: 100%;
}
  
</style>