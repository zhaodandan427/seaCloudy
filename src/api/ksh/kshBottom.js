import Api from "../httpConfig";
import Api1 from "../httpConfig1";
import { api } from "../baseApi";

/*------------涉海知产交易与服务*/
// 知识产权接口
export const insertKshIntellectual = (data) =>
 Api1.post(`${api.kshURL}/kshIntellectual/insertBatchKshIntellectual`, data);

// 第一个模块保存
export const insertBatchKshPersonWarn = (data) =>
 Api1.post(`${api.kshURL}/kshPersonWarn/insertBatchKshPersonWarn`, data);

// 知识产权接口回显
export const selectList = (data) =>
 Api.post(`${api.kshURL}/kshIntellectual/selectList`, data);

// 第一个模块回显
export const kshPersonWarnselectList = (data) =>
 Api.post(`${api.kshURL}/kshPersonWarn/selectList`, data);


/*------------涉海市场检测*/
//市场监测接口
export const insertKshMarket = (data) =>
 Api.post(`${api.kshURL}/kshMarket/insertKshMarket`, data);

//更新时间
export const insertKshIndustryTime = (data) =>
 Api1.post(`${api.kshURL}/kshIndustryTime/insertKshIndustryTime`, data);

//更新时间回显
export const timeSelectList = (data) =>
 Api.post(`${api.kshURL}/kshIndustryTime/selectList`, data);

//市场监测用户类型分析
export const insertBatchKshMarketAnalysis = (data) =>
 Api1.post(`${api.kshURL}/kshMarketAnalysis/insertBatchKshMarketAnalysis`, data);

//市场监测用户类型分析回显
export const AnalysisSelectList = (data) =>
 Api.post(`${api.kshURL}/kshMarketAnalysis/selectList`, data);

//市场监测中间部分（1用户需求分析，2平台交易额，3交易种类分析，4中试转化分析，5海洋知识产权交易分析）
export const insertBatchKshMarket = (data) =>
 Api1.post(`${api.kshURL}/kshMarket/insertBatchKshMarket`, data);

//市场监测中间部分回显
export const kshMarketselectList = (data) =>
 Api.post(`${api.kshURL}/kshMarket/selectList`, data);

//市场监测中间部分回显2
export const kshMarketselectList2 = (data) =>
 Api.post(`${api.kshURL}/kshMarket/selectList2`, data);

//市场监测交易记录接口提交
export const insertBatchKshMarketDetail = (data) =>
 Api1.post(`${api.kshURL}/kshMarketDetail/insertBatchKshMarketDetail`, data);

//市场监测交易记录回显
export const kshMarketDetailselectList = (data) =>
 Api.post(`${api.kshURL}/kshMarketDetail/selectList`, data);

//市场监测金融机构撮合金额趋势分析提交
export const insertBatchKshMarketTendencyAnalysis = (data) =>
 Api1.post(`${api.kshURL}/kshMarketTendencyAnalysis/insertBatchKshMarketTendencyAnalysis`, data);

//市场监测金融机构撮合金额趋势分析回显
export const kshMarketTendencyAnalysisselectList = (data) =>
 Api.post(`${api.kshURL}/kshMarketTendencyAnalysis/selectList`, data);

//科技金融撮合合作分析提交
export const insertBatchKshMarketTendency = (data) =>
 Api1.post(`${api.kshURL}/kshMarketTendency/insertBatchKshMarketTendency`, data);

//科技金融撮合合作分析回显
export const kshMarketTendencyselectList = (data) =>
 Api.post(`${api.kshURL}/kshMarketTendency/selectList`, data);

//通用标题提交
export const updateKshTitlename = (data) =>
 Api1.post(`${api.kshURL}/kshTitlename/updateKshTitlename`, data);

//通用标题回显
export const selectInfoByTitleCode = (data) =>
 Api.get(`${api.kshURL}/kshTitlename/selectInfoByTitleCode`, data);


