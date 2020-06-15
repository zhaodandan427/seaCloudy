import Api from "../httpConfig";
import { api } from "../baseApi"
//登录
export const getAllHasPowerMenu = () =>
    Api.get(`${api.backURL}/bamSysUser/roleSystemMenuPower`);
