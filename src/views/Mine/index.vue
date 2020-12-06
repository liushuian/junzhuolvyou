<template>
  <div class="mine">
    <!-- 我的 -->
    <!-- header  -->
    <div class="mine-header">
      <p class="mine-header-me">我的</p>
      <div class="mine-header-pt">
        <div>一</div>
        <div class="mine-header-pt-cj">酒店民宿旅游资源查价平台</div>
        <div>一</div>
      </div>
      <!-- 个人图标 -->
      <div class="mine-header-bg">
        <div class="mine-header-bg-gr"></div>
        <p>安</p>
      </div>
      <!-- 信息查询 -->
      <ul class="mine-header-info">
        <li v-for="item in infoList" :key="item.id" @click="toPage(item)">
          <span>{{ item.text }}</span>
          <van-icon class="icon" name="arrow" />
        </li>
      </ul>
    </div>
    <!-- main -->
    <!-- footer -->
    <tabbar></tabbar>
  </div>
</template>
<script>
import {Icon} from 'vant'
export default {
  name: "mine",
  components: {
    [Icon.name]: Icon,
  },
  data() {
    return {
      infoList: [], //设置空info列表
    };
  },

  created() {
    this.getInfo();
  },

  methods: {
    // 获取info信息列表
    getInfo() {
      this.$http.get("mine").then((res) => {
        this.infoList = res.data.info;
      });
    },

    //跳转页面
    toPage ({path,id}) {
      this.$router.push({path: path,query:{ID:id}})
    }
  },
};
</script>
<style lang="less" scoped>
.mine {
  height: 100%;
  width: 100%;
  &-header {
    height: 300px;
    background-color: red;
    border-bottom-left-radius: 50px;
    border-bottom-right-radius: 50px;
    box-shadow: 0 3px 12px red;
    &-me {
      color: #fff;
      font-size: 16px;
      font-weight: bold;
      text-align: center;
      padding: 20px 0;
    }
    &-pt {
      display: flex;
      justify-content: space-around;
      color: #fff;
      &-cj {
        font-size: 25px;
        font-family: "华文行楷";
      }
    }
    &-bg {
      height: 150px;
      background-color: #fff;
      text-align: center;
      line-height: 231px;
      border-radius: 5px;
      margin: 10px;
      position: relative;
      &-gr {
        width: 80px;
        height: 80px;
        border-radius: 40px;
        background-image: url("~@/assets/image/gr.jpg");
        background-size: contain;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -75%);
      }
    }
    &-info {
      color: #333;
      background-color: #fff;
      border-radius: 5px;
      padding: 0 10px;
      margin: 20px 10px 0;
      box-shadow: 0 2px 8px gray;
      li {
        height: 40px;
        line-height: 40px;
        border-bottom: 1px solid #ccc;
        position: relative;
        .icon {
          position: absolute;
          right: 0;
          top: 50%;
          transform: translateY(-50%);
        }
      }
      li:last-child {
        border-bottom: none;
      }
    }
  }
}
</style>