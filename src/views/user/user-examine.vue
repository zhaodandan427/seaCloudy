<template>
    <div class="member-warp">
        <div class="common-title">
            <h3>用户审核</h3>
        </div>
        <div class="member-warp-content">
            <div class="condition-box">
                <el-row>
                    <el-col :span="8">
                        <div class="condition-item">
                            <label class="condition-item-title">用户名:</label>
                            <div class="condition-item-info">
                                <el-input
                                        size="medium"
                                        placeholder="请输入内容"
                                        v-model="params.userName"
                                        clearable>
                                </el-input>
                            </div>
                        </div>
                    </el-col>
                    <el-col :span="8">
                        <div class="condition-item">
                            <label class="condition-item-title">电话:</label>
                            <div class="condition-item-info">
                                <el-input
                                        size="medium"
                                        placeholder="请输入内容"
                                        v-model="params.mobile"
                                        clearable>
                                </el-input>
                            </div>
                        </div>
                    </el-col>

                    <!--<el-col :span="8">-->
                        <!--<div class="condition-item" >-->
                            <!--<label class="condition-item-title">用户类型:</label>-->
                            <!--<div class="condition-item-info">-->
                                <!--<el-select size="medium"-->
                                           <!--clearable-->
                                           <!--filterable-->
                                           <!--v-model="params.userType" placeholder="请选择审核状态">-->
                                    <!--<el-option-->

                                            <!--v-for="item in userType"-->
                                            <!--:key="item.value"-->
                                            <!--:label="item.label"-->
                                            <!--:value="item.value"></el-option>-->
                                <!--</el-select>-->
                            <!--</div>-->

                        <!--</div>-->
                    <!--</el-col>-->


                    <el-col :span="8">
                        <div class="condition-item">
                            <el-button type="danger" size="medium"  @click="handleSearch">查询</el-button>
                        </div>
                    </el-col>
                </el-row>
            </div>
            <div class="member-main">
                <div class="options">
                    <div class="options-left  el-float-left">
                        <el-dropdown @command="handlePageSizeChange">
                            <el-button type="info" size="mini" plain>
                                显示条数<i class="el-icon-arrow-down el-icon--right"></i>
                            </el-button>
                            <el-dropdown-menu slot="dropdown">
                                <el-dropdown-item :command="10">10</el-dropdown-item>
                                <el-dropdown-item :command="20">20</el-dropdown-item>
                                <el-dropdown-item :command="50">50</el-dropdown-item>
                            </el-dropdown-menu>
                        </el-dropdown>
                    </div>
                </div>
                <div class="table">
                    <el-table
                            :data="listData"
                            tooltip-effect="dark"
                            style="width: 100%"
                            border
                    >

                        <el-table-column
                                prop="userName"
                                label="用户名">
                        </el-table-column>

                        <el-table-column
                                prop="mobile"
                                label="电话">
                        </el-table-column>
                        <el-table-column
                                prop="real_name"
                                label="用户类型">
                            <template slot-scope="scope">
                                {{scope.row.userType | filterUserAllType}}
                            </template>
                        </el-table-column>

                        <el-table-column
                                prop="checkTime"
                                label="提交审核时间"
                                show-overflow-tooltip>
                        </el-table-column>

                        <el-table-column
                                label="操作"
                                width="80px">
                            <template slot-scope="scope">
                                <el-button
                                        v-if="scope.row.userType == 4 || scope.row.userType == 5"
                                        type="text"
                                        @click="handleExamine(scope.row)">审核</el-button>

                            </template>
                        </el-table-column>
                    </el-table>
                    <div class="pagination-warp">
                        <div class="pagination-box-left">
                            共 <span class="common-red-color">{{pagination.pages}}</span>页/ <span class="common-red-color">{{pagination.total}}</span>条数据
                        </div>
                        <div class="pagination-box-right">

                            <el-pagination
                                    @current-change="handleCurrentChange"
                                    :current-page.sync="params.pageNum"
                                    :page-size="params.pageSize"
                                    layout=" prev, pager, next"
                                    :total=" pagination.total">
                            </el-pagination>
                        </div>
                    </div>
                </div>

            </div>
        </div>




    </div>
</template>

<script>
    import { getAuditUserList } from "../../api/user/list";
    import { userType } from "../../type";

    export default {
        name: "",
        data(){
            return{
                listData:[],
                params:{
                    userName:null,
                    mobile:null,
                    userType:null,
                    pageNum:1,
                    pageSize:10,
                },

                userType:userType,
                pagination:{//分页参数
                    total:null,
                    pages:null
                },

            }
        },
        mounted(){
            this.init()
        },
        methods:{
            init(){
                this.getList();
            },
            getList(){
                getAuditUserList(this.params).then(res => {
                    console.log(res.list);
                    this.listData = res.list;
                    this.pagination.pageNum=res.pageNum;
                    this.pagination.pageSize=res.pageSize;
                    this.pagination.pages=res.pages;
                    this.pagination.total=res.total;

                })
                    .catch((res)=> {
                        this.$message.error(res);
                    })
            },
            handleSearch(){
                this.getList();
            },
            handleExamine(data){
                this.$router.push({ path: '/examine-details', query: { userId: data.userId ,userType:data.userType}});
            },

            handleCurrentChange(data){
                this.getList()
            },
            handleOrderByChange(data){
                this.params.orderBy=data;
                this.getList();

            },
            handlePageSizeChange(data){
                this.params.pageSize=data;
                this.getList();

            }
        }
    }
</script>

<style lang="scss" type="text/scss">

    .member-warp{
        background-color: #ffffff;
        .member-warp-content{
            padding: 0 20px;
            .condition-box{
                padding-bottom: 20px;
                border-bottom: dashed 1px #D0D0D0;
                .condition-item{

                    .condition-item-title{
                        color:#999999;
                        padding-right: 20px;
                    }
                    .condition-item-info{
                        display: inline-block;
                        width: 160px;
                    }


                }
            }
            .member-main{
                .options{
                    padding: 10px 0;
                    .options-left{
                        .el-dropdown{
                            margin: 0 10px!important;
                        }
                    }
                }
            }
        }
    }

</style>