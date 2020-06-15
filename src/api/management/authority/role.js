import Api from "../../httpConfig";
import { api } from "../../baseApi"

//获取所有菜单
export const getRoleList = (data) =>
    Api.post(`${api.backURL}/bamSysRole/selectList`,data);

//根据角色id获取权限列表
export const getMenuListByRoleId = (data) =>
    Api.get(`${api.backURL}/bamSysRole/queryMenuList`,data);

//根据角色id查询角色信息
export const getRoleById = (data) =>
    Api.get(`${api.backURL}/bamSysRole/selectById`,data);

//给角色添加权限
export const addPowerToRole = (data) =>
    Api.post(`${api.backURL}/bamSysRole/insertPowerList`,data);
//增加
export const addRole = (data) =>
    Api.post(`${api.backURL}/bamSysRole/insertBamSysRole`,data);

//删除
export const deleteRole = (data) =>
    Api.get(`${api.backURL}/bamSysRole/deleteBamSysRole`,data);

//修改
export const editRole = (data) =>
    Api.post(`${api.backURL}/bamSysRole/updateBamSysRole`,data);

//更新角色的状态
export const updateRoleStatus = (data) =>
    Api.get(`${api.backURL}/bamSysRole/updateRoleStatus`,data);

//测试角色是否重复
export const checkRoleName = (data) =>
    Api.get(`${api.backURL}/bamSysRole/checkRoleName`,data);
//测试角色是否重复
export const getOnRoleList = (data) =>
    Api.post(`${api.backURL}/bamSysRole/queryOnList`,data);

