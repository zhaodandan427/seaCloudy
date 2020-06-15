<template>
    <div class="member-warp">
        <div class="common-title">
            <h3>待审核资源</h3>
        </div>
        <div class="member-warp-content">
            <div class="condition-box">
                <el-row>
                    <el-col :span="8">
                        <div class="condition-item">
                            <label class="condition-item-title">商品名称:</label>
                            <div class="condition-item-info">
                                <el-input
                                        size="medium"
                                        placeholder="请输入内容"
                                        v-model="params.goodsName"
                                        clearable>
                                </el-input>
                            </div>
                        </div>
                    </el-col>
                    <el-col :span="8">
                        <div class="condition-item">
                            <label class="condition-item-title">商品编号:</label>
                            <div class="condition-item-info">
                                <el-input
                                        size="medium"
                                        placeholder="请输入内容"
                                        v-model="params.goodsSn"
                                        clearable>
                                </el-input>
                            </div>
                        </div>
                    </el-col>
                    <el-col :span="8">
                        <div class="condition-item">
                            <label class="condition-item-title">店铺名称:</label>
                            <div class="condition-item-info">
                                <el-input
                                        size="medium"
                                        placeholder="请输入内容"
                                        v-model="params.shopName"
                                        clearable>
                                </el-input>
                            </div>
                        </div>
                    </el-col>

                    <el-col :span="8">
                        <div class="condition-item">
                            <el-button type="danger" size="medium"  @click="handleSearch">查询</el-button>
                        </div>
                    </el-col>
                </el-row>
            </div>
            <div class="member-main">
                <!--<div class="options">-->
                    <!--<div class="options-left  el-float-left">-->
                        <!--<el-dropdown @command="handlePageSizeChange">-->
                            <!--<el-button type="info" size="mini" plain>-->
                                <!--显示条数<i class="el-icon-arrow-down el-icon&#45;&#45;right"></i>-->
                            <!--</el-button>-->
                            <!--<el-dropdown-menu slot="dropdown">-->
                                <!--<el-dropdown-item :command="10">10</el-dropdown-item>-->
                                <!--<el-dropdown-item :command="20">20</el-dropdown-item>-->
                                <!--<el-dropdown-item :command="50">50</el-dropdown-item>-->
                            <!--</el-dropdown-menu>-->
                        <!--</el-dropdown>-->
                    <!--</div>-->
                <!--</div>-->
                <div class="table">
                    <el-table
                            :data="listData"
                            tooltip-effect="dark"
                            style="width: 100%"
                            border
                    >
                        <el-table-column
                                prop="goodsSn"
                                label="编号"
                                width="100">
                        </el-table-column>
                        <el-table-column
                                label="名称">
                            <template slot-scope="scope">
                                <router-link class="color-blue" :to="{ path: '/goods-details', query: { id: scope.row.goodsId, fromPage:2}}" >
                                    {{scope.row.goodsName}}
                                </router-link>
                            </template>
                        </el-table-column>
                        <el-table-column
                                label="价格">
                            <template slot-scope="scope">
                                {{scope.row.referencePrice | filterPriceStatus}}
                            </template>
                        </el-table-column>
                        <el-table-column
                                label="定金">
                            <template slot-scope="scope">
                                {{scope.row.depositPrice | filterPriceStatus}}
                            </template>
                        </el-table-column>

                        <el-table-column
                                label="类型">
                            <template slot-scope="scope">
                                {{scope.row.itemGoodsType.goodsTypeName}}
                            </template>
                        </el-table-column>

                        <el-table-column
                                prop="shopName"
                                label="店铺">
                        </el-table-column>

                        <el-table-column
                                prop="createTime"
                                label="创建时间"
                                show-overflow-tooltip>
                        </el-table-column>
                        <el-table-column
                                label="操作"
                                width="100px">
                            <template slot-scope="scope">
                                <el-button
                                        v-if="scope.row.status == 1 && scope.row.auditStatus == 0"
                                        type="text"
                                        @click="handleExamine(scope.row.goodsId)">去审核</el-button>

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
    import { getDSJGoodsList } from "../../api/goods/list";

    export default {
        name: "",
        data(){
            return{
                listData:[],
                params:{
                    goodsName:'',
                    goodsSn:'',
                    shopName:'',
                    soldStatus:'',
                    auditStatus:'',
                    pageNum:1,
                    pageSize:10,
                    orderBy:'0',
                },

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
                getDSJGoodsList(this.params).then(res => {
                    console.log(res);
                    this.listData=res.list;
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
              this.params.pageNum=1
                this.getList();
            },
            handleExamine(id){
                this.$router.push({ path: '/goods-examine', query: { id: id,fromPage:2}});
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
