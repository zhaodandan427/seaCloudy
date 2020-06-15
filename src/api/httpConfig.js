import axios from "axios";
import { getToken } from "../tools/cookies";
import { Loading } from "element-ui";
import qs from "qs";

// axios 配置
axios.defaults.timeout = 50000;
axios.defaults.headers.post["Content-Type"] =
  "application/x-www-form-urlencoded;charset=UTF-8";

const baseURL = window.BASEURL;

let instance = axios.create({});

//请求拦截器
instance.interceptors.request.use(
  config => {
    // console.log("请求拦截器");
    //console.log('------------',config);
    if (config.method == "put") {
      config.headers["Content-Type"] = "application/x-www-form-urlencoded";
    }
    var currUser = getToken();
    if (currUser) {
      config.headers.Authorization = currUser;
    }
    return config;
  },
  err => {
    return Promise.reject(err);
  }
);

//响应拦截器
instance.interceptors.response.use(
  config => {
    // 响应成功关闭loading
    //console.log(config);
    let code = config.data.code;
    let data = "";
    switch (code) {
      case 1: //请求成功
        data = config.data.data;
        break;
      case "1": //请求成功
        data = config.data.data;
        break;
      case 200: //请求成功：不同人写的code成功码不一样
        data = config.data.data;
        break;
      case 0: //请求成功但是返回的信息是错误额度
        data = Promise.reject(config.data.msg);
        break;
      case -3: //验证码错误
        data = Promise.reject(config.data.msg);
        break;
      case 250: // 用户名不存在
        data = Promise.reject("用户名或密码错误");
        break;
      case 251: // 密码错误
        data = Promise.reject("用户名或密码错误");
        break;
      case 255: //没有登录
        data = Promise.reject(config.data.msg);
      // router.push({path:'/login'});
      case 500: //审核失败
        data = Promise.reject(config.data.msg);
        break;
    }
    return data;
  },
  err => {
    return Promise.reject(err);
  }
);
//封装公共get，post请求
let api = {
  baseUrl: baseURL,
  fileDownLoadPath: "http://192.168.15.3:8080/upload/",
  post: function(url, params) {
    return new Promise((resolve, reject) => {
      instance
        .post(baseURL + url, params)
        .then(response => {
          resolve(response);
        })
        .catch(error => {
          reject(error);
        });
    });
  },
  get: function(url, params) {
    return new Promise((resolve, reject) => {
      instance
        .get(baseURL + url, { params: params })
        .then(response => {
          resolve(response);
        })
        .catch(error => {
          reject(error);
        });
    });
  },
  put: function(url, params) {
    return new Promise((resolve, reject) => {
      instance
        .put(baseURL + url + "?" + qs.stringify(params))
        .then(response => {
          resolve(response);
        })
        .catch(error => {
          reject(error);
        });
    });
  }
};

export default api;
