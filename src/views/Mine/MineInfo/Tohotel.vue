<template>
  <div class="hotel">
    <van-nav-bar
      title="新增常用旅客"
      left-arrow
      fixed
      @click-left="onClickLeft"
    />
    <!-- 旅客信息 -->
    <div class="hotel-list">
      <div class="hotel-list-title">
        <h1>旅客姓名</h1>
        <van-field v-model="text" label="中文名" label-width="50" placeholder="请与证件姓名一致"/>
        <van-field v-model="text" label="英文名" label-width="50" placeholder="姓 (如HUAN)   / 名 (如MEIMEI)"/>
        <div class="hotel-list-title-tip">*为保证顺利出行,请确保姓名和证件一致</div>
      </div>
      <div class="hotel-list-cred">
        <h1>证件</h1>
        <van-field v-model="shenfen" type="number" label-width="50" label="身份证" placeholder="请填写证件号码"/>
        <van-field v-model="huzhao" type="number"  label-width="50" label="护照" placeholder="请填写证件号码"/>
      </div>

      <van-field
        class="hotel-list-tel"
        label-width="50"
        v-model="tel"
        type="tel"
        label="手机号"
        placeholder="常用手机号"
      />

      <van-field
        class="hotel-list-email"
        label-width="50"
        v-model="email"
        type="email"
        label="邮箱"
        placeholder="常用邮箱"
      />

      <van-button class="hotel-list-btn" type="danger">保存</van-button>
    </div>
  </div>
</template>
<script>
import { NavBar, Button, Field } from "vant";
export default {
  name: "Tohotel",
  components: {
    [NavBar.name]: NavBar, //nav导航
    [Button.name]: Button,
    [Field.name]: Field,
  },
  data() {
    return {
      tel: "",
      email: "",
    };
  },

  methods: {
    //返回到mine页面
    onClickLeft() {
      this.$router.push("/info");
    },
  },
};
</script>
<style lang="less" scoped>
.hotel {
  height: 100%;
  width: 100%;
  &-list {
    height: 100%;
    width: 100%;
    padding: 10px 10px;
    padding-top: 50px;
    &-title {
      height: 165px;
      background-color: #fff;
      padding: 10px 10px;
      border-radius: 10px;
      &-tip {
        height: 44px;
        line-height: 44px;
        color: #9cdcf0;
        margin-left: 16px;
      }
    }
    &-cred {
      height: 124px;
      background-color: #fff;
      padding: 10px 10px;
      border-radius: 10px;
      margin-top: 8px;
    }
    &-tel,
    &-email {
      margin-top: 8px;
      border-radius: 10px;
    }
    &-btn {
      width: 250px;
      border-radius: 22px;
      position: absolute;
      left: 50%;
      bottom: 30px;
      transform: translateX(-50%);
    }
  }
}

//修改nav底部border
/deep/ .van-hairline--bottom::after {
  border: none;
}

//修改顶部nav背景样式
/deep/ .van-nav-bar {
  background-color: transparent;
}
</style>