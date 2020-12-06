<template>
  <div class="love">
    <van-nav-bar title="常用信息" left-arrow fixed @click-left="onClickLeft" />
    <!-- 旅客 地址栏 -->
    <div class="love-tab">
      <van-tabs class="love-tab-list" v-model="active" animated :offset-top="46">
        <van-tab class="love-tab-list-top" v-for="it in infoList" :title="it" :key="it.id">
          <div :class="active === 0 ? 'love-ly' : 'love-dz'">
            <!-- 旅客信息页面 -->
            <div class="love-ly" v-if="active == 0">
              <!-- 无旅客信息 -->
              <div class="noinfo">--暂无相关信息--</div>
              <!-- 有旅客信息 -->
              <div></div>
              <!-- 新增旅客按钮 -->
              <router-link to="/hotel">
              <van-button class="love-ly-button" type="danger">+ 新增常用旅客</van-button>
              </router-link>
            </div>
            <!-- 地址信息页面 -->
            <div class="love-dz" v-else>
              <!-- 无旅客信息 -->
              <div class="noinfo">--暂无相关信息--</div>
              <!-- 有旅客信息 -->
              <div></div>
              <!-- 新增旅客按钮 -->
              <van-button class="love-dz-button" type="danger">+ 新增常用地址</van-button>
            </div>
          </div>
        </van-tab>
      </van-tabs>
    </div>
  </div>
</template>
<script>
import { NavBar, Tab, Tabs, Button } from "vant";
export default {
  name: "MineInfo",
  components: {
    [NavBar.name]: NavBar, //nav导航
    [Tab.name]: Tab,
    [Tabs.name]: Tabs,
    [Button.name]: Button
  },
  data() {
    return {
      active: 0, //默认选中tab栏第一个
      infoList: ["旅客", "地址"],
      // custList: [] //设置旅客列表
    };
  },
  created() {
    // this.getCust()
  },
  methods: {
    //返回到mine页面
    onClickLeft() {
      this.$router.push("/mine");
    },
    
    //获取旅客信息
    // getCust(){
    //   this.$http.get('lk').then(res => {
    //     this.custList = res.data.lkarr
    //   })
    // }
  },
};
</script>
<style lang="less" scoped>
.love {
  height: 100%;
  width: 100%;
  &-tab {
    height: 100%;
    padding-top: 46px;
    &-list {
      height: 100%;
      display: flex;
      flex-direction: column;
    }
  }
}

.love-ly,.love-dz {
  .noinfo {
    padding-top: 50px;
  }
  &-button {
    width: 250px;
    border-radius: 22px;
    position: absolute;
    left: 50%;
    bottom: 30px;
    transform: translateX(-50%);

  }
}

// .love-dz {
  // background-color: blue;
// }


// 使用flex布局,高度
/deep/ .van-tabs__wrap {
  height: 44px;
}

// 修改content内容水平/垂直样式
/deep/ .van-tabs__content {
  flex: 1;
  text-align: center;
}

//修改nav底部border
/deep/ .van-hairline--bottom::after {
  border: none;
}

//修改顶部nav背景样式
/deep/ .van-nav-bar {
  background-color: transparent;
}

//修改tab栏边框样式
/deep/ .van-tabs__wrap {
  border-radius: 5px;
  margin: 0 10px;
  box-shadow: 0 0 5px gray;
}

</style>