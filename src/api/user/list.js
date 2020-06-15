import Api from "../httpConfig";
import { api } from "../baseApi"

//获取所有用户
export const getUserList = (data) =>
    Api.post(`${api.userURL}/userManager/findUserManagerInfo`,data);

//获取所有待审核用户
export const getAuditUserList = (data) =>
    Api.post(`${api.userURL}/userManager/findCheckUserInfo`,data);


//审核企业
export const auditCompany = (data) =>
    Api.post(`${api.userURL}/userManager/checkCompanyInfo`,data);
//审核个人
export const auditPerson = (data) =>
    Api.post(`${api.userURL}/userManager/checkPersonInfo`,data);






//获取审核记录
export const getAuditRecord = (data) =>
    Api.post(`${api.userURL}/userManager/findCheckLogList`,data);


//获取审核记录个人信息
export const getAuditPersonDetails = (data) =>
    Api.get(`${api.userURL}/userManager/findCheckPersonInfo`,data);


//获取审核记录企业
export const getAuditShopDetails = (data) =>
    Api.get(`${api.userURL}/userManager/findCheckShopInfo`,data);

