const filterAsyncRoutesToTree = function (data,base){
    var realTree=[];
    if(base){
        base[0].childNode=data
    }else {
        base = data
    }
    base.forEach((item)=> {
        var obj = {
            id:item.id,
            type:item.type,
            childNodeType:item.childNodeType,
            parent_id:item.parent_id,
            isTree:true,
            label:item.menu_name
        }

        if(item.childNode && item.childNode.length>0 ){
            obj.children = filterAsyncRoutesToTree(item.childNode)
        }
        realTree.push(obj)
    })

    return realTree
}
const filterDefaultCheckedTree = function ( data ) {
    var realTree=[];
    data.forEach((item)=> {
        if (item.isPick){
            if(item.childNode && item.childNode.length>0 ){
                realTree=realTree.concat(filterDefaultCheckedTree(item.childNode))
            }else {
                realTree.push(item.id);
            }
        }
    });

    return realTree
}

const filterSetCheckedTree = function (data = [], oldData=[]) {
    var realTree=[];
    var obj={};
    oldData.forEach((v)=>{
        data.forEach((item)=> {
            if (item == v.id){
                obj={
                    id:item,
                    type:v.type
                }
                if(v.children && v.children.length>0 ){
                    obj.childNode = filterSetCheckedTree(data,v.children)
                }
                realTree.push(obj);
            }
        });
    });


    return realTree
}
export {
    filterAsyncRoutesToTree,
    filterDefaultCheckedTree,
    filterSetCheckedTree,
}