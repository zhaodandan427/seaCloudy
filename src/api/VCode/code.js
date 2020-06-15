import Api from "../httpConfig";
import { api } from "../baseApi"

//生成验证码的前置接口
export const getBeforeCaptcha = () =>
    Api.get(`${api.backURL}/bamSysUser/getBeforeCaptcha`)
//生成验证码
export const getCaptcha = (data) =>
    `${api.baseURL}${api.backURL}/bamSysUser/getcaptcha?CaptchaCode=${data}`;
