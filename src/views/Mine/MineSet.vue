<template>
  <div class="mineset">
    <van-nav-bar title="设置" left-arrow fixed @click-left="onClickLeft" />
    <div class="mineset-list">
      <div class="mineset-list-first">
        <van-cell title="推荐给好友" is-link @click="show = true" />
        <van-action-sheet
          class="goodfirend"
          v-model="show"
          cancel-text="取消"
          close-on-click-action
          @cancel="onCancel"
        >
          <div class="goodfirend-box">
            <div class="goodfirend-box-list">
              <img src="@/assets/image/weixin.jpg" alt="">
              <p>分享至微信</p>
            </div>
            <div class="goodfirend-box-list">
              <img src="@/assets/image/pyq.jpg" alt="">
              <p>分享至朋友圈</p>
            </div>
            <div class="goodfirend-box-list">
              <img src="@/assets/image/shouc.jpg" alt="">
              <p>添加至收藏</p>
            </div>
          </div>
        </van-action-sheet>
        <van-cell title="建议与反馈" is-link />
      </div>
      <div class="mineset-list-second">
        <van-cell title="当前版本" value="V4.1.0" />
        <van-cell title="关于君酌旅游" is-link />
      </div>
      <div class="mineset-list-three">
        <van-cell title="清除缓存" value="39.4M" />
      </div>
      <div class="mineset-list-four">
        <van-cell value="退出登录" is-link />
      </div>
    </div>
  </div>
</template>
<script>
import { NavBar, Cell, CellGroup, ActionSheet, Toast } from "vant";
export default {
  name: "MineSet",
  components: {
    [NavBar.name]: NavBar, //nav导航
    [Cell.name]: Cell,
    [CellGroup.name]: CellGroup,
    [ActionSheet.name]: ActionSheet,
    [Toast.name]: Toast,
  },
  data() {
    return {
      show: false,
      actions: [{ name: "选项一" }, { name: "选项二" }, { name: "选项三" }],
    };
  },

  methods: {
    //返回到mine页面
    onClickLeft() {
      this.$router.push("/mine");
    },

    //点击收起推荐好友弹框
    onCancel() {
      Toast("取消");
    },
  },
};
</script>
<style lang="less" scoped>
.mineset {
  height: 100%;
  width: 100%;
  &-list {
    padding-top: 55px;
    &-second {
      margin: 10px 0;
    }
    &-four {
      margin-top: 30px;
    }
  }
}

//推荐好友样式
.goodfirend {
  // height: 200px;
  background-color: transparent;
  &-box {
    height: 125px;
    margin: 0 30px;
    background-color: #fff;
    display: flex;
    justify-content: space-around;
    padding: 20px 20px 0;
    border-radius: 15px;
    &-list {
      width: 100px;
      height: 50px;
      border-radius: 5px;
      text-align: center;
      img {
        width: 70px;
        height: 70px;
        border-radius: 10px;
      }
    }

  }
}

//修改推荐好友弹框取消上的行样式
/deep/ .van-action-sheet__gap {
  height: 10px;
  background-color: transparent;
}

//修改推荐好友弹框取消按钮样式
/deep/ .van-action-sheet__cancel {
  width: 84%;
  color: rgb(76, 76, 235);
  border-radius: 15px;
  margin-bottom: 20px;
  margin-left: 30px;

}

//设置登录样式
/deep/ .van-cell__value--alone {
  text-align: center;
}

//修改nav底部border
/deep/ .van-hairline--bottom::after {
  border: none;
}
</style>