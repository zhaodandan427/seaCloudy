<template>
    <div class="menu-warp">
        <div class="common-title">
            <h3>菜单管理</h3>
        </div>
        <div class="menu-warp-content">
            <div>
                <div class="tree">
                    <el-tree
                            :data="menuTree"
                            node-key="id"
                            @node-click="handleItemTree"
                            ref="tree"
                            :default-expanded-keys="defaultExpandedKey"
                            :default-checked-keys="defaultExpandedKey"
                            :highlight-current="true"
                            :accordion="true"
                            :expand-on-click-node="false">
                            <span class="custom-tree-node" slot-scope="{ node, data }">
                               <span>{{ node.label }}</span>
                               <span v-if="data.type!=2">
                                  <el-button
                                          type="text"
                                          size="mini"
                                          @click="() => openDialog(data)">
                                  Append
                                  </el-button>
                               </span>
                            </span>
                    </el-tree>
                </div>
                <div class="tree-edit">
                    <el-table
                            v-show="tableList"
                            :data="tableList"
                            tooltip-effect="dark"
                            style="width: 100%"
                            border>
                        <el-table-column :label="table.headline" align="center">
                            <el-table-column
                                    prop="menu_name"
                                    label="姓名"
                                    width="120">
                            </el-table-column>
                            <el-table-column

                                    :label="table.title"
                                    show-overflow-tooltip>
                                <template slot-scope="scope">
                                    {{scope.row.type == 2 ?scope.row.func_code:scope.row.menu_url}}
                                </template>
                            </el-table-column>
                            <el-table-column label="操作">
                                <template slot-scope="scope">
                                    <el-button
                                            size="mini"
                                            @click="openDialog(scope.row)">编辑</el-button>
                                    <el-button
                                            size="mini"
                                            type="danger"
                                            @click="handleDelete(scope.row)">删除</el-button>
                                </template>
                            </el-table-column>

                        </el-table-column>

                    </el-table>
                </div>
            </div>
        </div>


        <el-dialog :title="form.title" :visible.sync="dialogFormVisible">
            <el-form :model="form">
                <!-- <el-form-item v-if="!judgeType" label="类型" :label-width="formLabelWidth">
                    <el-radio v-model="form.type" label="0">系统</el-radio>
                    <el-radio v-model="form.type" label="1">菜单</el-radio>
                    <el-radio v-model="form.type" label="2">按钮</el-radio>
                </el-form-item> -->
                <el-form-item label="名称" :label-width="formLabelWidth">
                    <el-input v-model="form.name" autocomplete="off"></el-input>
                </el-form-item>
                <template v-if="form.type != 2">
                    <el-form-item label="地址" :label-width="formLabelWidth">
                        <el-input v-model="form.url" autocomplete="off"></el-input>
                    </el-form-item>
                </template>
                <template v-else="form.type == 2">
                    <el-form-item label="编码" :label-width="formLabelWidth">
                        <el-input v-model="form.funcCode" autocomplete="off"></el-input>
                    </el-form-item>
                </template>
                <el-form-item label="是否显示在导航" :label-width="formLabelWidth">
                    <el-radio v-model="form.memo1" label="1">显示</el-radio>
                    <el-radio v-model="form.memo1" label="0">不显示</el-radio>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="closeDialog()">取 消</el-button>
                <el-button type="primary" @click="judgeHandleTypeByFlag()">确 定</el-button>
            </div>
        </el-dialog>
    </div>
</template>

<script>
    import { mapState } from 'vuex';
    import { addMenu , deleteMenu , editMenu , getAllMenuList, getMenuListById} from "../../../api/management/authority/menu";
    import { filterAsyncRoutesToTree } from "../../../uilt/management/index"

    export default {
        name: "",
        data() {
            return {
                menuTree: null,
                tableList:null,
                handleType:"",
                dialogFormVisible: false,
                table:{
                    title:'',
                    headline:''
                },
                form: {
                    url: '',
                    name: '',
                    type:"",
                    funcCode:'',
                    parentId:'',
                    memo1:''
                },
                formLabelWidth: '120px',
                judgeType:null,
                defaultExpandedKey:[]
            }
        },
        created() {
            this.getAllMenuList();
        },
        methods: {
            openDialog(data) {
                this.dialogFormVisible = true;
                console.log(data);
                if(data.isTree){//add
                    this.form={
                        title:'新建',
                        type:"0",
                        memo1:'1',
                        parentId: data.id,
                        parentType: data.type,
                    };
                    this.judgeType= null;
                }else {//edit
                    this.judgeType= data;
                    this.form={
                        title:'修改',
                        type:data.type,
                        memo1:data.memo1,
                        url: data.menu_url,
                        name: data.menu_name,
                    }
                }
            },
            closeDialog() {
                this.dialogFormVisible = false;
                this.resetForm();
            },
            judgeHandleTypeByFlag(){
                if(!this.judgeType){//add
                    this.handleAppend()
                }else {//edit
                    this.handleEdit(this.judgeType)
                }
            },
            resetForm(){
                this.form={
                    title:'',
                    url: '',
                    name: '',
                    type:'',
                    memo1:'1',
                    parentId:''
                }
            },

            handleAppend(){
                addMenu({
                    menuName:this.form.name,
                    menuUrl:this.form.url,
                    funcCode:this.form.funcCode,
                    type:this.form.type,
                    memo1:this.form.memo1,
                    parentId:this.form.parentId,
                    parentType:this.form.parentType
                }).then((res) => {
                    this.closeDialog()
                    this.getAllMenuList()//update tree
                    this.getTableListById(res.parentId,res.parentType) // update table
                })
            },
            handleDelete(data){
                deleteMenu({
                    id:data.id,
                    type:data.type
                }).then((res) => {
                    console.log(data);
                    this.getAllMenuList()//update tree
                       this.getTableListById(data.parent_id,data.parent_type) // update table
                    })
            },
            handleEdit(data){
                editMenu({
                    menuName:this.form.name,
                    menuUrl:this.form.url,
                    funcCode:this.form.funcCode,
                    type:data.type,
                    memo1:this.form.memo1,
                    id:data.id

                }).then((res) => {
                        this.closeDialog();
                        this.getAllMenuList()//update tree
                        this.getTableListById(data.parent_id,data.parent_type) // update table
                })
            },
            getAllMenuList(){
                getAllMenuList().then((res) => {

                    this.menuTree = filterAsyncRoutesToTree(res,[{//把菜单变成符合组件树的格式
                        id:"",
                        type:"",
                        childNodeType:'1',
                        parent_id:'',
                        menu_name:"工作台",
                        childNode:[]
                    }]);
                    console.log(this.menuTree);

                })
            },

            handleItemTree(data){

                this.defaultExpandedKey = Array.of(this.$refs.tree.getCurrentKey());
                console.log(this.defaultExpandedKey);

                if(data.type != 2){
                    this.table.headline = data.label;
                    this.table.title = data.childNodeType == 2? '编码':'地址';
                    this.getTableListById(data.id,data.type)
                }
            },
            getTableListById(id,type){
                getMenuListById({
                    id:id,
                    type:type
                }).then((res) => { this.tableList = res;})

            },
        },
        computed:{
            ...mapState({'currUser':state => state.user.currUser}),
        }
    }
</script>

<style lang="scss" type="text/scss">
    .menu-warp {
        background-color: #ffffff;
        .menu-warp-content {
            overflow: hidden;
            .tree {
                width: 300px;
                padding: 10px 20px;
                float: left;
            }
            .tree-edit{
                overflow: hidden;
                padding: 10px 40px 10px 10px;
            }
        }
    }
</style>