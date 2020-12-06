<template>
  <div class="members">
    <!-- 会员中心 -->
    <van-popup
      position="right"
      class="members-pop"
      v-model="show"
      closeable
      :close-on-click-overlay="false"
    >
      <h1>升级VIP会员</h1>
    </van-popup>
    <!-- header 个人信息 -->
    <div class="members-top">
      <p>会员中心</p>
      <div class="members-top-bj"></div>
      <p>安</p>
      <van-button
        class="members-top-membtn"
        color="linear-gradient(to right, #ff6034, #ee0a24)"
      >
        升级成为会员
      </van-button>
      <van-cell is-link @click="showPopup" class="members-top-codebtn"
        >填写邀请码
      </van-cell>
    </div>
    <!-- main 会员权益 -->
    <div class="members-bottom">
      <!-- 标题 -->
      <div class="members-bottom-qy">
        <div class="members-bottom-qy-left"></div>
        会员权益
        <div class="members-bottom-qy-right"></div>
      </div>
      <!-- 会员优惠 -->
      <ul class="members-bottom-list">
        <li>
          <van-icon class="icon" size="25" name="diamond" />
          <span>查询酒店、名宿、旅游资源行业低价</span>
        </li>
        <li>
          <van-icon class="icon" size="25" name="diamond" />
          <span>查询酒店、名宿、旅游资源行业低价</span>
        </li>
        <li>
          <van-icon class="icon" size="25" name="diamond" />
          <span>查询酒店、名宿、旅游资源行业低价</span>
        </li>
      </ul>
    </div>
    <!-- footre tabbar -->
    <tabbar></tabbar>
  </div>
</template>
<script>
import { Button, Icon, Popup, Cell } from "vant";
export default {
  name: "members",
  components: {
    [Button.name]: Button,
    [Icon.name]: Icon,
    [Popup.name]: Popup,
    [Cell.name]: Cell,
  },
  data() {
    return {
      show: false,
    };
  },

  created() {},

  methods: {
    showPopup() {
      this.show = true;
    },
  },
};
</script>
<style lang="less" scoped>
.members {
  height: 100%;
  width: 100%;
  background-color: #fff;
  &-pop {
    width: 335px;
    height: 300px;
    background-color: yellow;
    border-radius: 10px;
    padding: 20px;
    margin-right: 20px;
  }
  &-top {
    height: 230px;
    color: #fff;
    text-align: center;
    background-color: #8cb6c0;
    position: relative;
    &-bj {
      width: 80px;
      height: 80px;
      background-image: url("~@/assets/image/gr.jpg");
      background-size: contain;
      border-radius: 40px;
      margin: 20px auto 10px;
    }
    p:first-of-type {
      font-size: 20px;
      padding-top: 20px;
    }
    &-membtn {
      width: 250px;
      font-size: 20px !important;
      border-radius: 22px;
      position: absolute;
      left: 50%;
      bottom: -22px;
      transform: translateX(-50%);
      box-shadow: 0 5px 9px #ee0a24;
    }
    &-codebtn {
      width: 100px;
      height: 30px;
      line-height: 30px;
      background-color: red;
      padding: 0 0 0 10px;
      border-top-left-radius: 15px;
      border-bottom-left-radius: 15px;
      position: absolute;
      right: 0;
      top: 50%;
      transform: translateY(-50%);
    }
  }
  &-bottom {
    position: relative;
    &-qy {
      display: flex;
      font-size: 20px;
      position: absolute;
      top: 67px;
      left: 50%;
      transform: translateX(-50%);
      &-left {
        margin: 15px 10px 0 0;
        width: 20px;
        height: 1px;
        background-image: linear-gradient(to right, yellow, goldenrod);
      }
      &-right {
        margin: 15px 0 0 10px;
        margin-top: 15px;
        width: 20px;
        height: 1px;
        background-image: linear-gradient(to left, yellow, goldenrod);
      }
    }
    &-list {
      height: 172px;
      width: 335px;
      background-color: goldenrod;
      padding: 5px 20px;
      border-radius: 40px;
      position: absolute;
      top: 110px;
      left: 50%;
      transform: translateX(-50%);

      li {
        height: 50px;
        line-height: 50px;
        position: relative;
        .icon {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
        }
        span {
          margin-left: 25px;
          font-size: 16px;
        }
      }
    }
  }
}

// 修改button
/deep/ .van-button--normal {
  padding: 0 10px;
}

// 修改填写邀请码按钮>图标样式
/deep/ .van-cell__right-icon {
  height: 30px;
  line-height: 30px;
}
// 修改填写邀请码按钮文字样式
/deep/ .van-cell__value--alone {
  color: #fff;
}
</style>