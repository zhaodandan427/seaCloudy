<template>
    <div class="role-setup-warp common-bg-white">
        <div class="common-title"><h3>角色管理</h3></div>
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
    import {filterAsyncRoutesToTree,filterDefaultCheckedTree,filterSetCheckedTree} from "../../../uilt/management";
    import {getMenuListByRoleId,addPowerToRole} from "../../../api/management/authority/role";

    export default {
        name: "",
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
                getMenuListByRoleId({
                    role_id:this.$route.query.roleid
                }).then(res => {
                        this.premssionList = filterAsyncRoutesToTree(res);//把菜单转化成tree格式
                        this.checkedList = filterDefaultCheckedTree(res);//设置tree的默认值
                    })
                    .catch(function (res) {
                        this.$message.error(res.msg);
                    })
            },
            getCheckedKeys() {//得到选中的值的id，并用filterSetCheckedTree转换成提交的数据格式
                var data = this.$refs.tree.getCheckedKeys().concat(this.$refs.tree.getHalfCheckedKeys());
                console.log(data);//被选中值的id数组
                return filterSetCheckedTree(data,this.premssionList);
            },
            handleSave(){
                // this.getCheckedKeys();
                addPowerToRole({
                    role_id:this.$route.query.roleid,
                    powerList:this.getCheckedKeys()
                }).then((res)=>{
                        this.goBack();
                        console.log(res);
                    })
            },
            goBack(){
                this.$router.push('/role')
            },
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