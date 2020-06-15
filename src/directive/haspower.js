import Vue from "vue";
import store from "../vuex/index";
const has = Vue.directive('has', {
    inserted: function (el, binding, vnode) {
        // 获取页面按钮权限
        var buttonList =store.state.menu.buttonList;
        var flag=buttonList.some(function (item) {
            return item == binding.value;
        })
        if (!flag) {
            el.parentNode.removeChild(el);
        }
    }
});
export {has}