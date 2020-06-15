import Api from "../httpConfig2";
import { api } from "../baseApi"

//更新时间
export const kshIndustryTime = (data) =>
    Api.post(`${api.kshURL}/kshIndustryTime/selectList`,data);
//海洋人才资源构成
export const selectPerson = (data) =>
    Api.post(`${api.kshURL}/kshPerson/selectList`,data);
//海洋人才学历占比
export const selectZbPerson = (data) =>
    Api.post(`${api.kshURL}/kshPersonZb/selectList`,data);
//涉海人才数量
export const kshPersonNum = (data) =>
    Api.post(`${api.kshURL}/kshPersonNum/selectList`,data);
//高层次人才分析
export const kshPersonRadar = (data) =>
    Api.post(`${api.kshURL}/kshPersonRadar/selectList`,data);

//修改时间
export const updateKshIndustryTime = (data) =>
    Api.post(`${api.kshURL}/kshIndustryTime/insertKshIndustryTime`,data);
//海洋人才资源构成
export const insertBatchKshPerson = (data) =>
    Api.post(`${api.kshURL}/kshPerson/insertBatchKshPerson`,data);
//海洋人才分析占比
export const insertBatchKshPersonZb = (data) =>
    Api.post(`${api.kshURL}/kshPersonZb/insertBatchKshPersonZb`,data);
//涉海人才数量统计
export const insertBatchKshPersonNum = (data) =>
    Api.post(`${api.kshURL}/kshPersonNum/insertBatchKshPersonNum`,data);
//海洋高层次人才分布
export const insertBatchKshPersonRadar = (data) =>
    Api.post(`${api.kshURL}/kshPersonRadar/insertBatchKshPersonRadar`,data);

//标题修改
export const updateKshTitlename = (data) =>
    Api.post(`${api.kshURL}/kshTitlename/updateKshTitlename`,data);
//标题回显
export const selectInfoByTitleCode = (data) =>
    Api.get(`${api.kshURL}/kshTitlename/selectInfoByTitleCode`,data);