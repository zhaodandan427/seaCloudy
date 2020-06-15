import Api from "../httpConfig";
import { api } from "../baseApi"

//获取所有商品
export const getGoodsList = (data) =>
    Api.post(`${api.goodsURL}/itemGoodsBackground/selectList`,data);

//获取所有待上架商品
export const getDSJGoodsList = (data) =>
    Api.post(`${api.goodsURL}/itemGoodsBackground/selectListDSJ`,data);

//获取所有已上架商品
export const getYSJGoodsList = (data) =>
    Api.post(`${api.goodsURL}/itemGoodsBackground/selectListYSJ`,data);

//根据商品id得到商品详情
export const getGoodsDetailById = (data) =>
    Api.get(`${api.goodsURL}/itemGoodsBackground/selectInfoById`,data);

//审核商品
export const auditGoods = (data) =>
    Api.get(`${api.goodsURL}/itemGoodsBackground/auditGoods`,data);

//下架商品
export const soldOutGoods = (data) =>
    Api.get(`${api.goodsURL}/itemGoodsBackground/soldOutGoods`,data);