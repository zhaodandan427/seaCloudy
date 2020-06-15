import Api from "../httpConfig3";
// import Api from "../httpConfig1";
import { api } from "../baseApi";

// 需求大厅 查询列表
export const getAuthInfoByUserId = (data) =>
  Api.post(`${api.crowdURL}/back/require/allRequirement`, data)
// 详情  
export const ReqCheck = (data) =>
  Api.get(`${api.crowdURL}/back/require/ReqCheck`, data)
// 详情tab
export const ReqCheckTab = (data) =>
  Api.get(`${api.crowdURL}/back/requireApply/viewApply`, data)
// 需求审核
export const requirementCheck = (data) =>
  Api.post(`${api.crowdURL}/back/require/requirementCheck`, data)
// 发布
export const publish5 = (data) =>
  Api.put(`${api.crowdURL}/back/require/publish5`, data)
// 流标
export const publish16 = (data) =>
  Api.put(`${api.crowdURL}/back/require/publish16`, data)
// 选择供应商
export const checkEnroll = (data) =>
  Api.get(`${api.crowdURL}/back/require/checkEnroll`, data)
// 验收
export const checkAdvice = (data) =>
  Api.put(`${api.crowdURL}/back/require/checkAdvice`, data)
// 退款/付款信息查询
export const selectRefundInfo = (data) =>
  Api.get(`${api.crowdURL}/back/refund/selectRefundInfo`, data)
// 提交退款/付款信息
export const goRefund = (data) =>
  Api.post(`${api.crowdURL}/back/refund/goRefund`, data)