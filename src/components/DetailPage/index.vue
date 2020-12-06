<template>
  <div class="detailpage">
    <!-- 顶部nav -->
    <div class="detailpage-nav" ref="nav">
      <van-nav-bar
        class="nav-top"
        title="详情 推荐"
        left-arrow
        fixed
        @click-left="onClickLeft"
      >
        <template #right>
          <van-icon name="like-o" size="20" />
          <van-icon class="share" name="share-o" size="20" />
        </template>
      </van-nav-bar>
    </div>
    <div class="detailpage-main" ref="scroll" @scroll="onScroll">
      <!-- 轮播图,酒店详情 -->
      <div class="detailpage-main-top">
        <img src="@/assets/image/6.jpg" alt="" />
        <div class="detailpage-main-top-detele">
          <p>大鹏山庄·花园泳池</p>
          <p>$8,800<span>起</span></p>
          <van-cell title="当前位置" icon="location-o" is-link to="baidu" />
        </div>
      </div>
      <!-- tab栏 -->
      <div class="detailpage-main-bottom"></div>
    </div>
    <!-- 底部导航 -->
    <div class="detailpage-footer">
      <div class="detailpage-footer-custor">
        <van-icon name="chat-o" />
        <span>在线咨询</span>
      </div>
      <div class="detailpage-footer-box">
        <van-button class="detailpage-footer-box-btn" type="danger" to="index"
          >购买</van-button
        >
      </div>
    </div>
  </div>
</template>
<script>

import { NavBar, Icon, Button, Cell } from "vant";
export default {
  name: "DetailPage",
  components: {
    [NavBar.name]: NavBar, //nav导航
    [Icon.name]: Icon,
    [Button.name]: Button,
    [Cell.name]: Cell,
   
  },
  data() {
    return {};
  },
  created() {},
  methods: {
    //返回到搜索页面
    onClickLeft() {
      this.$router.go(-1);
    },

    onScroll() {
      let scrollTop = this.$refs.scroll.scrollTop;
      // console.log(scrollTop)
      let transColor = Math.floor((scrollTop / 200) * 100) / 100;
      this.$refs.nav.style.backgroundOpacity = transColor;
      // console.log((this.$refs.nav.style.backgroundOpacity = transColor));
    },
  },
};
</script>
<style lang="less" scoped>
.detailpage {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  &-nav {
    width: 100%;
    height: 46px;
    background-color: rgba(red, green, blue, 0);
  }
  &-main {
    width: 100%;
    flex: 1;
    overflow: auto;
    &-top {
      height: 400px;
      img {
        width: 100%;
        height: 200px;
      }
      &-detele {
        width: 100%;
        height: 200px;
        padding: 10px 15px;
        border-top-left-radius: 15px;
        border-top-right-radius: 15px;
        background-color: #fff;
        transform: translateY(-15px);
        p:first-of-type {
          font-size: 20px;
          font-weight: 700;
          margin-bottom: 10px;
        }
        p:last-of-type {
          font-size: 16px;
          font-weight: 700;
          color: red;
          span {
            font-size: 12px;
            color: #ccc;
            margin-left: 5px;
          }
        }
      }
    }
    &-bottom {
      width: 100%;
      height: 500px;
      background-color: red;
    }
  }
  &-footer {
    display: flex;
    width: 100%;
    height: 60px;
    background-color: #fff;
    &-custor {
      width: 40%;
      height: 100%;
      line-height: 60px;
      text-align: center;
    }
    &-box {
      width: 60%;
      height: 100%;
      text-align: center;
      line-height: 60px;
      &-btn {
        width: 200px;
        border-radius: 22px;
      }
    }
  }
}

//修改nav右边图标
/deep/ .van-nav-bar__right {
  width: 80px;
  padding: 0;
  .share {
    margin-left: 20px;
  }
}

//修改nav背景色
/deep/ .van-nav-bar {
  background-color: transparent;
}

//修改nav底部border
/deep/ .van-hairline--bottom::after {
  border: none;
}

//修改nav自带的position
/deep/ .van-nav-bar--fixed {
  position: static;
}

// 修改地理定位
/deep/ .van-cell {
  padding: 0;
}
</style>