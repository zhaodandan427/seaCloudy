const filterAsyncRoutes = function (userRouter = [], allRouter = []) {
    var realRoutes = [];
    allRouter.forEach((v) => {
        userRouter.forEach((item) => {
            if (item.menu_name === v.meta.name) {
                if(item.childNode && item.childNode.length>0 ){
                    v.children = filterAsyncRoutes(item.childNode,v.children)
                }
                realRoutes.push(v);
            }
        })
    })
    //生成我需要的路由了
    return realRoutes;
}

const filterAsyncButton = function (data = []) {
    let button=[];
    function recursionButton(data){
        data.forEach((item)=> {
            if(item.type!=2&&item.childNode && item.childNode.length>0){
                recursionButton(item.childNode);
            }else if (item.type == 2) {
                button.push(item.func_code);
            }

        })
    }
    recursionButton(data);
    return button;
}
export {filterAsyncButton,filterAsyncRoutes}