import Api from "../httpConfig";
import { api } from "../baseApi"

//获取所有商品
export const findAllShop = (data) =>
    Api.post(`${api.userURL}/userManager/findAllShop`,data);

//店铺审核
export const submitCheckShop = (data) =>
 Api.post(`${api.userURL}/userManager/submitCheckShop`,data);

