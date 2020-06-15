import Api from "../httpConfig2";
// import Api from "../httpConfig1";
import { api } from "../baseApi";

//获取所有商品
export const findOrderInfo = (data) =>
  Api.post(`${api.orderURL}/orderManager/findOrderInfo`, data);
