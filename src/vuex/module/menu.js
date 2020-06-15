import { getAllHasPowerMenu } from "../../api/menu/menu";
import { dynamicRoutes, baseRouter } from "../../router/routerConfig";
import router from "../../router/router";
import { filterAsyncButton, filterAsyncRoutes } from "../../uilt/menu";
export default {
  state: {
    router: null /** 所有路由 */,
    buttonList: null /** 导航菜单 */,
    crumList: null /** 导航菜单 */
  },
  mutations: {
    setRouter(state, list) {
      //动态设置新的路由
      state.router = [...baseRouter, ...list];
      router.options.routes = state.router;
      console.log("=====》", state.router);
      console.log("=====》", router.options.routes);
      router.addRoutes(state.router);
    },
    outRouter(state, list) {
      state.router = null;
    },
    clearRouter(state) {
      state.router = [];
      router.replace([...baseRouter]);
      // console.log(router.options.routes);
      // location.reload();
    },
    setButtonList(state, list) {
      state.buttonList = list;
    },
    clearButtonList(state) {
      state.buttonList = [];
    },
    setCrumbList(state, list) {
      // console.log(list);
      state.crumList = list;
    }
  },
  actions: {
    async getAsyncRoutes({ commit }) {
      //获取所有权限路由
      let data = await getAllHasPowerMenu();
      let router = filterAsyncRoutes(data, dynamicRoutes);
      let buttonList = filterAsyncButton(data);
      commit("setRouter", router);
      commit("setButtonList", buttonList);
    }
  }
};
