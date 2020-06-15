import { loginIn, loginOut } from "../../api/login/login";
import { setToken, getToken, removeToken } from "../../tools/cookies";
export default {
  state: {
    userToken: getToken() || "",
    currUser: {}
  },
  // getters: {
  //     getCurrUser(state) {
  //         return state.currUser;
  //     }
  // },
  mutations: {
    setUserToken(state, token) {
      setToken(token);
      state.userToken = token;
    },
    clearUserToken(state, token) {
      removeToken();
      state.userToken = "";
    },
    setCurrUser(state, _currUser) {
      state.currUser = _currUser;
    },
    clearCurrUser(state, _currUser) {
      state.currUser = _currUser;
    }
  },
  actions: {
    async loginIn({ commit }, info) {
      //登录

      var data = await loginIn(info);
      console.log(data);
      commit("setUserToken", data.loginToken);
      commit("setCurrUser", data);

      return data;
    },
    async loginOut({ commit }) {
      //登出

      var data = await loginOut();
      // console.log(data);
      commit("clearUserToken", "");
      commit("clearCurrUser", "");
      commit("clearRouter");
    }
  }
};
