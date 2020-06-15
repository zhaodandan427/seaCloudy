import Api from "../../httpConfig";
import { api } from "../../baseApi"

//获取所有菜单
export const getAllMenuList = (data) =>
    Api.get(`${api.backURL}/bamSysMenu/selectTree`,data);

//根据id获取某一个菜单下的子菜单
export const getMenuListById = (data) =>
    Api.get(`${api.backURL}/bamSysMenu/queryMenuList`,data);

//增加
export const addMenu = (data) =>
    Api.post(`${api.backURL}/bamSysMenu/insertBamSysMenu`,data);

//删除
export const deleteMenu = (data) =>
    Api.get(`${api.backURL}/bamSysMenu/deleteBamSysMenu`,data);

//修改
export const editMenu = (data) =>
    Api.post(`${api.backURL}/bamSysMenu/updateBamSysMenu`,data);
