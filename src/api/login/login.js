import Api from "../httpConfig";
import { api } from "../baseApi"
//登录
export const loginIn = (data) =>
    Api.post(`${api.backURL}/bamSysUser/login`,data)
//退出
export const loginOut = (data) =>
    Api.post(`${api.backURL}/bamSysUser/outLogin`,data)
//验证是否登录
export const validateLogin = () =>
    Api.get(`${api.backURL}/common/checkLoginState`)