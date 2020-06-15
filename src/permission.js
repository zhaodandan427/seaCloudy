import {getToken} from "./tools/cookies";
import store from "./vuex";
import router from "./router/router";
import {validateLogin} from "./api/login/login";

router.beforeEach((to, from, next) => {
    if (getToken()) { //如果有token
        validateLogin().then( res =>{
            if(!res){
                console.log("2.1登录成功");
                console.log(store.state.menu.router);
                if (!store.state.menu.router) {
                    console.log("3.2.没有菜单列表");
                    store
                        .dispatch("getAsyncRoutes")
                        .then((res) => {
                            console.log("5.1.获取菜单");
                            console.log(to);
                            next({'path':to.fullPath});
                        })
                        .catch((res) => {
                            console.log(res);
                            next();
                        })

                } else {
                    next();
                }
            }else {
                if (to.path === '/login') {
                    // In the free login whitelist, go directly
                    next();
                } else {
                    // Other pages that do not have permission to access are redirected to the login page.
                    next(`/login?redirect=${to.path}`);
                }
            }
        }).catch(res=>{
            if (to.path === '/login') {
                // In the free login whitelist, go directly
                next();
            } else {
                // Other pages that do not have permission to access are redirected to the login page.
                next(`/login?redirect=${to.path}`);
            }
        })


    } else {//如果没有token
        if (to.path === '/login') {
            // In the free login whitelist, go directly
            next();
        } else {
            // Other pages that do not have permission to access are redirected to the login page.
            next(`/login?redirect=${to.path}`);
        }
    }
});

router.afterEach((to) => {
    let crumbList = to.matched;
    console.log(crumbList);
    store.commit('setCrumbList', crumbList)

})
