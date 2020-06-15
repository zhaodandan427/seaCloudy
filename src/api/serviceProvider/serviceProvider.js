import Api from "../httpConfig";
import { api } from "../baseApi";

//服务商列表查询
export const ProvidergetList = (data) =>
  Api.get(`${api.crowdURL}/back/Provider/getList`, data);
//服务商详情
export const getOne = (data) =>
  Api.get(`${api.crowdURL}/back/Provider/getOne`, data)
//服务商审核
export const check = (data) =>
 Api.put(`${api.crowdURL}/back/Provider/check`, data)

