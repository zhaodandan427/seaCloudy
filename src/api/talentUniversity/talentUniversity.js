import Api from "../httpConfig";
import Api1 from "../httpConfig2";
import { api } from "../baseApi";

//专家分页列表查询
export const zbTalentsselSectList = (data) =>
  Api.post(`${api.crowdURL}/zbTalents/selectList`, data);
//专家页面根据id下拉查询
export const selectList = (data) =>
  Api.get(`${api.crowdURL}/zbTalents/selectAreaList`, data)
//地区下拉查询
export const SelectAreaList = (data) =>
 Api.get(`${api.crowdURL}/zbUniversities/selectAreaList`, data)
//专家新增
export const insertZbTalents = (data) =>
 Api1.post(`${api.crowdURL}/zbTalents/insertZbTalents`, data);
//根据id查询详情
export const selectInfoById = (data) =>
 Api1.get(`${api.crowdURL}/zbTalents/selectInfoById`, data);
//专家新增
export const updateZbTalents = (data) =>
 Api1.post(`${api.crowdURL}/zbTalents/updateZbTalents`, data);
//根据id删除
export const deleteZbTalents = (data) =>
 Api1.get(`${api.crowdURL}/zbTalents/deleteZbTalents`, data);

/*--------------高校*/
//高校分页列表查询
export const zbUniversitiesSectList = (data) =>
 Api.post(`${api.crowdURL}/zbUniversities/selectList`, data);
//高校新增
export const insertZbUniversities = (data) =>
 Api1.post(`${api.crowdURL}/zbUniversities/insertZbUniversities`, data);
//高校详情
export const zbUniversitiesselectInfoById = (data) =>
 Api.get(`${api.crowdURL}/zbUniversities/selectInfoById`, data);
//高校修改
export const updateZbUniversities = (data) =>
 Api1.post(`${api.crowdURL}/zbUniversities/updateZbUniversities`, data);
//高校删除
export const deleteZbUniversities = (data) =>
 Api1.get(`${api.crowdURL}/zbUniversities/deleteZbUniversities`, data);
