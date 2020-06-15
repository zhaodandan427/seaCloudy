import axios from 'axios'
import { getToken } from "../tools/cookies";
import { Loading } from 'element-ui';
import { Message } from 'element-ui';

// axios 配置
axios.defaults.timeout = 50000;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';

const baseURL = window.BASEURL;

let instance = axios.create({});

//请求拦截器
instance.interceptors.request.use(config =>{
    // console.log("请求拦截器");
    // console.log(document.cookie);

    var currUser = getToken();
    if(currUser){
        config.headers.Authorization = currUser;
    }
    return config;
},err => {
    return Promise.reject(err);
});

//响应拦截器
instance.interceptors.response.use(config => {// 响应成功关闭loading
    //console.log(config);
    let code = config.data.code;
    let data = ''
    switch (code){
        case 200 ://请求成功：不同人写的code成功码不一样
            data = config.data;
            break;
        default:
           Message({
                message: config.data.msg,
                type: 'error'
                });
    }
    return data;
}, err => {

    return Promise.reject(err);
});
//封装公共get，post请求
let api = {
    baseUrl: baseURL,
    fileDownLoadPath: "http://192.168.15.3:8080/upload/",
    post: function(url, params) {
        return new Promise((resolve, reject) => {
            instance.post(baseURL + url, params).then(response => {
                resolve(response);
            }).catch((error) => {
                reject(error);
            })
        });
    },
    get: function(url, params) {
        return new Promise((resolve, reject) => {
            instance.get(baseURL + url, { params: params }).then(response => {
                resolve(response);
            }).catch((error) => {reject(error);})
        });
    }
};


export default api;


