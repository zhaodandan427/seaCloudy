import Api from "../../httpConfig";
import { api } from "../../baseApi"

//获取所有成员
export const getMemberList = (data) =>
    Api.post(`${api.backURL}/bamSysUser/selectList`,data);


//增加
export const addMember = (data) =>
    Api.post(`${api.backURL}/bamSysUser/insertBamSysUser`,data);

//删除成员
export const deleteMember = (data) =>
    Api.get(`${api.backURL}/bamSysUser/deleteBamSysUser`,data);

//修改成员
export const editMember = (data) =>
    Api.post(`${api.backURL}/bamSysUser/updateBamSysUser`,data);

//修改用户状态
export const updateUserStatus = (data) =>
    Api.get(`${api.backURL}/bamSysUser/updateUserStatus`,data);

//初始化密码
export const initPassWord = (data) =>
    Api.get(`${api.backURL}/bamSysUser/initPassWord`,data);

//初始化密码
export const checkMemberName = (data) =>
    Api.get(`${api.backURL}/bamSysUser/checkName`,data);
