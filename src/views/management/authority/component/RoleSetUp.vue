<template>
    <div class="role-setup-warp common-bg-white">
        <div class="role-setup-warp-content">
            <el-tree
                    :data="premssionList"
                    show-checkbox
                    ref="tree"
                    node-key="id"
                    :default-checked-keys="checkedList"
                    :default-expanded-keys="checkedList"
                    highlight-current>
            </el-tree>

            <div class="buttons">
                <el-button plain @click="handleSave">保存</el-button>
                <el-button type="primary" plain @click="goBack">取消</el-button>
                <!--<el-button type="primary" plain @click="setCheckedNodes"></el-button>-->
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "",
        props:['roleId'],
        data(){
            return {
                premssionList:null,
                checkedList:null
            }
        },
        created(){
            this.init();
        },
        methods:{
            init(){
                this.getPermissionList();
            },
            getPermissionList(){
                this.api.get(`/bamSysRole/queryMenuList`,{
                    role_id:this.roleId
                })
                    .then(res => {
                        if (res.code == "1") {
                            this.premssionList=this.recursionTree(res.data);
                            this.checkedList=this.recursionDefaultCheckedTree(res.data);//setting default values
                        }else {
                            this.$message.error(res.msg);
                        }
                    })
                    .catch(function (res) {
                        this.$message.error(res.msg);
                    })
            },
            getCheckedKeys() {
                var data = this.$refs.tree.getCheckedKeys().concat(this.$refs.tree.getHalfCheckedKeys())
                return this.recursionSetCheckedTree(data,this.premssionList);
            },
            handleSave(){
                this
                    .api
                    .post(`/bamSysRole/insertPowerList`,{
                        role_id:this.roleId,
                        powerList:this.getCheckedKeys()
                    })
                    .then((res)=>{
                        console.log(res);
                        this.$router.push('/role')
                    })
            },
            goBack(){
                this.$router.push('/role')
            },
            recursionSetCheckedTree(data = [],olddata=[]){
                var realTree=[];
                var obj={};
                olddata.forEach((v)=>{
                    data.forEach((item)=> {

                        if (item == v.id){
                            obj={
                                id:item,
                                type:v.type
                            }
                            if(v.children && v.children.length>0 ){
                                obj.childNode = this.recursionSetCheckedTree(data,v.children)
                            }
                            realTree.push(obj);
                        }
                    });
                });


                return realTree
            },
            recursionDefaultCheckedTree(data){
                var realTree=[];
                data.forEach((item)=> {
                    if (item.isPick){
                        if(item.childNode && item.childNode.length>0 ){
                            realTree=realTree.concat(this.recursionDefaultCheckedTree(item.childNode))
                        }else {
                            realTree.push(item.id);
                        }
                    }
                });

                return realTree
            },
            recursionTree(data,base){
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
                        obj.children = this.recursionTree(item.childNode)
                    }
                    realTree.push(obj)
                })

                return realTree
            }
        },
        watch:{
            roleId(v,o){

                    this.getPermissionList()

            }
        }

    }
</script>

<style scoped lang="scss" type="text/scss">

    .role-setup-warp{
       .role-setup-warp-content{
           padding: 10px 20px;
           .content-item{
               padding: 10px;
               .save-btn{
                   text-align: center;
               }
           }
           .area{
               border: solid 1px #dddddd;
               margin: 10px;
               padding: 10px;

           }

       }
    }


</style>