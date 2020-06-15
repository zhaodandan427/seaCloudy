import Vue from "vue";
import Router from "vue-router";
import {baseRouter} from "./routerConfig";

Vue.use(Router);


let router = new Router({
  routes:baseRouter
});


export default router;
