<template>
<!-- 注册页 -->
  <div class="login">
    <!-- x图标 -->
    <div class="login-delete-icon" @click="closepage">
      <van-icon name="cross" />
    </div>
    <!-- 标题 -->
    <h1 class="login-title">绑定手机号</h1>
    <p class="login-tip">为了保障账号安全,请绑定手机号</p>
    <!-- form表单 -->
    <van-form class="login-form" name="Form" @submit="onSubmit">
      <!-- 手机号 -->
      <van-field
        class="login-form-telephone"
        v-model="phone"
        name="tel"
        label="手机号"
        placeholder="请输入您的手机号码"
      />
      <!-- 验证码 -->
      <van-field
        class="login-form-telcode"
        v-model="code"
        type="tel"
        name="code"
        label="验证码"
        placeholder="请输入验证码"
      />
      <!-- 点击验证码 -->
      <span class="login-form-code" @click="getcode" v-text="msgcode">{{
        msgcode
      }}</span>
      <!-- 提交按钮 -->
      <div class="login-button" style="margin: 16px">
        <van-button
          class="login-button-box"
          round
          block
          type="info"
          native-type="submit"
        >
          立即绑定
        </van-button>
      </div>
    </van-form>
  </div>
</template>

<script>
import { Icon, Form, Field, Button, Notify } from "vant";
export default {
  name: "index",
  components: {
    //注册组件
    [Icon.name]: Icon,
    [Form.name]: Form,
    [Field.name]: Field,
    [Button.name]: Button,
    [Notify.name]: Notify,
  },
  data() {
    return {
      phone: "", //手机号
      code: "", //验证码
      fcode: "14574854875", //存储返回的验证码
      msgcode: "获取验证码",
      codeclick: true, //设置点击有效
    };
  },
  methods: {
    //点击立即提价按钮
    onSubmit() {
      if (this.code == this.fcode) {
        this.$http
          .post("userinfo", { phone: this.phone, code: this.code })
          .then((res) => {
            if (res.status === 200) {
              this.$router.push("/");
            }
          });
      }else {
         Notify({
          message: "验证码错误",
          duration: 1000,
          color: "#000",
          background: "#EFEFEF"
        });
        this.code = ''
      }
    },
    //点击x图标,跳转首页
    closepage() {
      this.$router.push("/");
    },

    //点击获取验证码 点击验证码按钮,验证手机号,请求验证码数据,定时器倒计时
    getcode() {
      //去除手机号空格
      let phonevalue = this.phone.replace(/\s/g, "");
      //设置手机号正则
      let regs = /^1[34578][0-9]{9}$/;
      if (!regs.test(phonevalue)) {
        //规则不匹配,错误提示
        Notify({
          message: "手机格式错误",
          duration: 1000,
          color: "#000",
          background: "#EFEFEF",
        });
      } else {
        //手机号规则匹配,发送请求
        this.$http.get("code").then((res) => {
          
          //倒计时期间点击无效
          if (!this.codeclick) return;
          this.codeclick = false;
          //倒计时开始数值
          let cound = 5;
          this.msgcode = "点击重新发送( " + cound + " )";
          //定时器倒计时开始
          let timeID = setInterval(() => {
            cound--;
            this.msgcode = "点击重新发送( " + cound + " )";
            if (cound == 0) {
              clearInterval(timeID);
              this.msgcode = "获取验证码";
              //倒计时结束,点击有效
              this.codeclick = true;
              //验证码填入
              this.code = res.data.code;
              this.fcode = res.data.code;
            }
          }, 1000);
        });
      }
    },
  },
};
</script>

<style lang="less" scoped>
.login {
  padding: 0 20px;
  position: relative;
  top: 100px;
  .login-delete-icon {
    width: 20px;
    position: absolute;
    top: -47px;
    right: 50px;
  }
  .login-title {
    display: flex;
    justify-content: flex-start;
  }
  .login-tip {
    display: flex;
    justify-content: flex-start;
    color: gray;
    font-size: 14px;
    margin: 15px 0 30px;
  }
  .login-form {
    position: relative;
    .login-form-telephone,
    .login-form-telcode {
      border-radius: 23px;
      background-color: rgba(200, 198, 198, 0.3);
      margin-bottom: 15px;
      position: relative;
      /deep/ .van-field__label {
        width: 50px;
      }
      /deep/ .van-field__error-message {
        position: absolute;
        top: 46px;
      }
    }
    .login-form-code {
      font-size: 12px;
      color: red;
      position: absolute;
      top: 72px;
      right: 25px;
    }
    .login-button {
      margin: 40px 0 0 0 !important;
      .login-button-box {
        background-color: salmon;
        border: none;
      }
    }
  }
}

</style>
