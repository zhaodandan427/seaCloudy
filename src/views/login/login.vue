<template>
    <div class="login-wrap">
        <div class="login-header">
            <img src="../../assets/img/logo.png" alt="logo" class="logo">
            <h1>管理控制台</h1>
        </div>
        <div class="login-main">
            <div class="login-box">
                <el-form class="login-box_from" ref="form" :model="form" label-width="20px">
                    <p class="user-pwd-err" v-show="visibleUserPwdErr">{{msgErr}}</p>
                    <el-form-item class="login-box_from-item" >
                        <img slot="label" src="../../assets/img/login/user.png" />
                        <el-input v-model="form.userName" placeholder="请输入用户名"></el-input>
                    </el-form-item>
                    <el-form-item class="login-box_from-item" >
                        <img slot="label" src="../../assets/img/login/pwd.png" />
                        <el-input type="password" v-model="form.password" placeholder="请输入密码"></el-input>
                    </el-form-item>
                    <el-form-item class="login-box_from-item">
                        <div class="captcha-input">
                            <el-input  placeholder="请输入验证码" v-model="form.captcha" @keyup.enter.native="loginHandle"></el-input>
                        </div>
                        <img class="captcha-img" :src="imgSrc" alt="验证码" @click="updateCaptcha">
                    </el-form-item>

                    <!--<div class="login-box_from-item">-->
                        <!--<el-checkbox v-model="checked" class="remember-account">记住账号</el-checkbox>-->
                    <!--</div>-->

                    <el-button class="btn--register" type="primary" @click="loginHandle" >登录</el-button>
                </el-form>
            </div>
        </div>
        <div class="login-footer">
            Copyright ©2017 HaiShangYun.com All Right Reserved 粤ICP备0061401
        </div>
    </div>
</template>

<script>
import { getBeforeCaptcha, getCaptcha } from "../../api/VCode/code";
// import loginyanz from '../../mixin/login'
export default {
  name: "login",
  // mixins: [loginyanz],
  data() {
    return {
      form: {
        userName: "",
        password: "",
        captcha: "",
        captchaCode: ""
      },
      visibleUserPwdErr: false,
      msgErr: "",
      checked: "",
      imgSrc: "",
      captchaCode: ""
    };
  },
  created() {
    console.log("created");
    this.updateCaptcha();
  },
  methods: {
    loginHandle() {
      //登录
      if (this.form.userName && this.form.password && this.form.captcha) {
        this.$store
          .dispatch("loginIn", {
            userName: this.form.userName,
            password: this.form.password,
            captcha: this.form.captcha,
            captchaCode: this.captchaCode
          })
          .then(res => {
            //登录成功跳转
            console.log(res);
            this.$router.push({ path: "/" });
          })
          .catch(res => {
            //错误处理
            this.visibleUserPwdErr = true;
            this.msgErr = res;
            this.updateCaptcha();
            console.log(res);
          });
      } else {
        this.visibleUserPwdErr = true;
        this.msgErr = "用户名或密码或验证码不能为空！";
      }
    },
    updateCaptcha() {
      //获取验证码
      getBeforeCaptcha()
        .then(res => {
          this.captchaCode = res;
          this.imgSrc = getCaptcha(this.captchaCode);
          console.log(res);
        })
        .catch(res => {
          console.log(res);
        });
    }
  }
};
</script>

<style scoped type="text/scss" lang="scss">
.user-pwd-err {
  color: red;
}
.login-wrap {
  height: 100%;
  min-height: 1080px;
  position: relative;
  .login-header {
    position: absolute;
    top: 0;
    width: 100%;
    background: url("../../assets/img/login/bg-header.png");
    height: 62px;
  }
  .login-main {
    height: 1080px;
    background: url("../../assets/img/login/bg.png");
    background-size: 100% 100%;
    .login-box {
      position: absolute;
      left: 50%;
      top: 65%;
      transform: translate(-50%, -50%);
      height: 640px;
      width: 458px;
      padding: 35px 0;
      background: url("../../assets/img/login/bg_login.png");
      background-size: 100% 100%;
      .login-box_from {
        padding: 80px 50px 20px;
        &-item {
          padding: 10px;
          border-bottom: 1px solid;
          border-image: -webkit-linear-gradient(
              to right,
              rgba(101, 159, 234, 0),
              rgba(101, 159, 234, 1),
              rgba(101, 159, 234, 0)
            )
            30 30;
          border-image: -moz-linear-gradient(
              to right,
              rgba(101, 159, 234, 0),
              rgba(101, 159, 234, 1),
              rgba(101, 159, 234, 0)
            )
            30 30;
          border-image: linear-gradient(
              to right,
              rgba(101, 159, 234, 0),
              rgba(101, 159, 234, 1),
              rgba(101, 159, 234, 0)
            )
            30 30;
          .captcha-input {
            display: inline-block;
            width: 50%;
          }
          .captcha-img {
            width: 40%;
            height: 40px;
            display: inline-block;
          }
          &:last-child {
            border-bottom: none !important;
          }
        }
        .btn--register {
          width: 100px;
          padding: 15px;
          margin-top: 10px;
        }
      }
    }
  }
  .login-footer {
    position: absolute;
    bottom: 0;
    width: 100%;
    text-align: center;
    height: 40px;
    line-height: 40px;
    color: #949494;
    background-color: rgba(125, 125, 126, 0.5);
  }
}
</style>
<style type="text/scss" lang="scss">
.login-wrap {
  .el-input {
    .el-input__inner {
      background: transparent !important;
      border: none !important;
      color: #ffffff;
    }
  }
  .btn--register {
    width: 100% !important;
    padding: 15px;
  }
  .el-checkbox__label {
    color: #ffffff;
    font-size: 12px;
  }
  .el-checkbox__inner {
    width: 14px;
    height: 14px;
  }
  .el-checkbox.remember-account {
    margin-left: 10px;
  }
  .el-form-item__label {
    padding: 10px 12px 0 0;
    line-height: 0;
  }
  .el-form-item__content {
    line-height: 0;
  }
  .el-form-item {
    margin-bottom: 0px !important;
  }
}
</style>
