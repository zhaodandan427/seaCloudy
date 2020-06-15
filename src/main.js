import Vue from "vue";
import App from "./App.vue";
import router from "./router/router";
import store from "./vuex/index";

import ElementUI from "element-ui";
import echarts from "echarts";
import Api from "./api/httpConfig";
import haspower from "./directive/haspower";
import * as Filters from "./filters/filters";
import "@/permission"; //引入权限控制

import "./assets/css/reset.css";
import "./assets/css/common.scss";
import "./assets/font/iconfont.css";

import "element-ui/lib/theme-chalk/index.css";

Vue.prototype.api = Api;
Vue.prototype.$echarts = echarts;
Vue.config.productionTip = false;
Vue.use(ElementUI);

Object.keys(Filters).forEach(key => {
  Vue.filter(key, Filters[key]);
});

new Vue({
  router,
  store,
  created() {},
  data() {
    return {
      mobilephoneReg: /^1((3[\d])|(4[5,6,9])|(5[0-3,5-9])|(6[5-7])|(7[0-8])|(8[1-3,5-8])|(9[1,8,9]))\d{8}$/, //手机号正则
      pwdReg: /^(?![\d]+$)(?![a-zA-Z]+$)(?![^\da-zA-Z]+$)[\da-zA-Z~!@#$%&*()\-=\+\{\}|;:'",\.\<\>\/\?]{6,20}$/, //密码正则
      /*IDNum:/^[1-9]\d{5}(18|19|20|(3\d))\d{2}((0[1-9])|(1[0-2]))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/,//身份证正则*/
      IDNum: /^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$|^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/, // 身份证号码为15位或者18位，15位时全为数字，18位前17位为数字，最后一位是校验位，可能为数字或字符X
      email: /^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/, //邮箱校验
      phone: /^((13[0-9])|(14[5|7])|(15([0-3]|[5-9]))|(18[0,5-9]))\d{8}$|^((13[0-9])|(14[5|7])|(15([0-3]|[5-9]))|(18[0,5-9]))\d{8}$|^0\d{2,3}-?\d{7,8}$/ //办公电话
    };
  },
  render: h => h(App)
}).$mount("#app");
