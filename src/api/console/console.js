import Api from "../httpConfig";
import { api } from "../baseApi";

//获取所有商品
export const findStatistics = (data) =>
  Api.get(`${api.orderURL}/orderManager/findStatistics`, data);
// 会员信息
export const findStatisticsUser = (data) =>
  Api.get(`${api.userURL}/statistics/findStatisticsUser`, data);
// 商品信息
export const selectGoodsControl = (data) =>
  Api.get(`${api.goodsURL}/itemGoodsBackground/selectGoodsControl`, data);