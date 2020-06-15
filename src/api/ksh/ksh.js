import Api from "../httpConfig2";
import { api } from "../baseApi";

// 标题查询
export const titleList = (data) =>
  Api.get(`${api.kshURL}/kshTitlename/selectInfoByTitleCode`, data);
// 标题修改
export const titleUpdate = (data) =>
  Api.post(`${api.kshURL}/kshTitlename/updateKshTitlename`, data);
 
//涉海技术成果类别统计
export const techTypesTotal = (data) =>
  Api.post(`${api.kshURL}/kshTechnique/selectList`, data);
// 涉海成果变化趋势  
export const techResultChange = (data) =>
  Api.post(`${api.kshURL}/kshTechniqueTendency/selectList`, data)
// 涉海技术成果全国流动
export const techResultFlow = (data) =>
  Api.post(`${api.kshURL}/kshTechniqueFlow/selectList`, data)
// 涉海技术成果数是排行
export const techResulRank = (data) =>
  Api.post(`${api.kshURL}/kshTechniqueRank/selectList`, data)
// 科研文献发布情况分析
export const techDocAnalysis = (data) =>
  Api.post(`${api.kshURL}/kshTechniquePublish/selectList`, data)
// 研发投入与成果输出量关联分析
export const relateAnalysis = (data) =>
  Api.post(`${api.kshURL}/kshTechniqueRelate/selectList`, data)

// 涉海技术成果类别统计修改
export const techTypesTotalSave = (data) =>
  Api.post(`${api.kshURL}/kshTechnique/insertBatchKshTechnique`, data)
// 涉海成果变化趋势修改
export const techResultChangeSave = (data) =>
  Api.post(`${api.kshURL}/kshTechniqueTendency/insertBatchKshTechniqueTendency`, data)
// 涉海技术成果全国流动修改
export const techResultFlowSave = (data) =>
  Api.post(`${api.kshURL}/kshTechniqueFlow/insertBatchKshTechniqueFlow`, data)
// 涉海技术成果数是排行修改
export const techResulRankSave = (data) =>
  Api.post(`${api.kshURL}/kshTechniqueRank/insertBatchKshTechniqueRank`, data)
// 科研文献发布情况分析修改
export const techDocAnalysisSave = (data) =>
  Api.post(`${api.kshURL}/kshTechniquePublish/insertBatchKshTechniquePublish`, data)
// 研发投入与成果输出量关联分析修改
export const relateAnalysisSave = (data) =>
  Api.post(`${api.kshURL}/kshTechniqueRelate/insertBatchKshTechniqueRelate`, data)


// 涉海产业指标检测
// 更新时间查询接口
export const industryTime = (data) =>
  Api.post(`${api.kshURL}/kshIndustryTime/selectList`, data)
// 更新时间插入接口
export const insertTime = (data) =>
  Api.post(`${api.kshURL}/kshIndustryTime/insertKshIndustryTime`, data)
// 涉海机构数量统计
export const industryTotal = (data) =>
  Api.post(`${api.kshURL}/kshIndustry/selectList`, data)
// 中国海洋科技创新指数  状态（1创新指数，2比重，3产值比例）
export const industryZb = (data) =>
  Api.post(`${api.kshURL}/kshIndustryZb/selectList`, data)
// 涉海机构数量修改提交  
export const industryTotalSave = (data) =>
  Api.post(`${api.kshURL}/kshIndustry/insertBatchKshIndustry`, data)
// 中国海洋科技创新指数  状态（1创新指数，2比重，3产值比例）
export const industryZbSave = (data) =>
  Api.post(`${api.kshURL}/kshIndustryZb/insertBatchKshIndustry`, data)


//海洋生产总值占国内生产总值比重--柱状图保存框-
export const barSave = (data) =>
  Api.post(`${api.kshURL}/kshIndustryPercent/selectList`, data)   //查询
export const barInsert= (data) =>
  Api.post(`${api.kshURL}/kshIndustryPercent/insertBatchKshIndustryPercent`, data)   //保存 