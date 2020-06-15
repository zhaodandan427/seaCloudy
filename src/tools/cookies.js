import Cookies from "js-cookie";

// User
const tokenKey = "tokenKey";
export const getToken = () => Cookies.get(tokenKey);
export const setToken = token => Cookies.set(tokenKey, token);
export const removeToken = () => Cookies.remove(tokenKey);

const userName = "userName";
export const getUserName = () => Cookies.get(userName);
export const setUserName = name => Cookies.set(userName, name);
export const removeUserName = () => Cookies.remove(userName);
