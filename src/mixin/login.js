export default {
  data() {
    var validateAccount = (rule, value, callback) => {
      this.visibleUserPwdErr = false;
      if (!value) {
        callback(new Error("请输入手机号"));
      } else if (!this.$root.mobilephoneReg.test(value)) {
        callback(new Error("请输入正确的手机号"));
      } else {
        callback();
      }
    };
    var validatePassword = (rule, value, callback) => {
      this.visibleUserPwdErr = false;
      if (!value) {
        callback(new Error("请输入密码"));
      } else if (value.length < 6) {
        callback(new Error("密码长度不能低于6位"));
      } else {
        callback();
      }
    };
    var validateVcode = (rule, value, callback) => {
      if (!value) {
        callback(new Error("请输入验证码"));
      } else if (value.length < 5) {
        callback(new Error("验证码长度为5位"));
      } else {
        callback();
      }
    };
    return {
      rules: {
        account: [
          {
            validator: validateAccount,
            trigger: ["change", "blur"]
          }
        ],
        password: [
          {
            validator: validatePassword,
            trigger: ["change", "blur"]
          }
        ],
        vcode: [
          {
            validator: validateVcode,
            trigger: ["change", "blur"]
          }
        ]
      }
    };
  }
};
