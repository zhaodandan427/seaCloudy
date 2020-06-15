<template>
    <div class="member-warp">
        <div class="common-title">
            <h3>店铺审核</h3>
        </div>
        <div class="member-warp-content">
            <div class="condition-box">
                <el-row>
                    <el-col :span="8">
                        <div class="condition-item">
                            <label class="condition-item-title">审核状态:</label>
                            <div class="tab" >
                                <div :class="{selectActive:select==index}"
                                     @click="tabChange(index)"
                                     class="item" v-for="(item,index) in arr">
                                    {{item}}
                                </div>
                            </div>
                        </div>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="8">
                        <div class="condition-item">
                            <label class="condition-item-title">单位名称:</label>
                            <div class="condition-item-info">
                                <el-input
                                        size="medium"
                                        placeholder="请输入内容"
                                        v-model="params.companyName"
                                        clearable>
                                </el-input>
                            </div>
                        </div>
                    </el-col>
                    <el-col :span="8">
                        <div class="condition-item">
                            <label class="condition-item-title">联系电话:</label>
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
                    <el-col :span="16">
                        <div class="condition-item">
                            <label class="condition-item-title">申请日期:</label>
                            <div class="condition-item-info timeWidth">
                                <el-date-picker
                                        v-model="params.startTime"
                                        type="date"
                                        value-format="yyyy-MM-dd"
                                        placeholder="选择日期">
                                </el-date-picker>
                                <span style="margin-right: 10px;margin-left: 10px;">至</span>
                                <el-date-picker
                                        v-model="params.endTime"
                                        type="date"
                                        value-format="yyyy-MM-dd"
                                        placeholder="选择日期">
                                </el-date-picker>
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
                                type="index"
                                label="序号"
                                width="100">
                        </el-table-column>
                        <el-table-column
                                prop="companyName"
                                label="企业名称">
                        </el-table-column>
                        <el-table-column
                                prop="linkMan"
                                label="联系人">
                        </el-table-column>
                        <el-table-column
                                prop="mobile"
                                label="联系电话">
                        </el-table-column>
                        <el-table-column
                                label="审核状态">
                            <template slot-scope="scope">
                                {{scope.row.accountStatus  | filterStoreStatus}}
                            </template>
                        </el-table-column>
                        <el-table-column
                                prop="applyTime"
                                label="申请日期"
                                show-overflow-tooltip>
                        </el-table-column>
                        <el-table-column
                                label="操作"
                                width="100px">
                            <template slot-scope="scope">
                                <el-button
                                        v-if="scope.row.accountStatus == 2 || scope.row.accountStatus == 3"
                                        type="text"
                                        @click="openDialogForm(scope.row.auditFeedback,scope.row.accountStatus)">查看</el-button>
                                <el-button
                                        v-if="scope.row.accountStatus == 1 "
                                        type="text"
                                        @click="openExamineForm(scope.row.shopId,scope.row.userId)">审核</el-button>
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
        <el-dialog title="提示" :visible.sync="dialogFormVisible">
            <el-form :model="tipData" ref="roleParams"
                     >
                <el-form-item label="审核意见:">
                    {{tipData.auditFeedback}}
                </el-form-item>
                <el-form-item label="审核结果:">
                    <!--{{scope.row.accountStatus  | filterStoreStatus}}-->
                    {{tipData.accountStatus | filterStoreStatus}}
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="dialogFormVisible = false">确定</el-button>
                <!--<el-button type="primary" @click="handleSoldOut('roleParams')">确 定</el-button>-->
            </div>
        </el-dialog>
        <el-dialog title="店铺审核" :visible.sync="examineVisible">
            <el-form :model="soldOutForm" ref="examineParams"
                     :rules="rules">
                <el-form-item
                        label="审核意见:"
                        prop="auditFeedback">
                    <el-input
                            placeholder="请输入审核意见"
                            type="textarea"
                            maxlength="200"
                            show-word-limit
                            v-model.trim="soldOutForm.auditFeedback"
                    ></el-input>
                </el-form-item>
                <el-form-item
                        label="结果:"
                        >
                    <el-radio v-model="soldOutForm.checkStatus" label="1">通过</el-radio>
                    <el-radio v-model="soldOutForm.checkStatus" label="2">未通过</el-radio>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="examineVisible = false">取 消</el-button>
                <el-button type="primary" @click="handleExamine('examineParams')">确 定</el-button>
            </div>
        </el-dialog>
    </div>
</template>

<script>
    import { findAllShop,submitCheckShop} from "../../api/store/store";

    export default {
        name: "",
        data(){
            return{
                tipData:{
                  auditFeedback:'',
                  accountStatus:'',
                },
                radio: '1',
                select:0,
                arr:['全部','待审核','已通过','未通过',],
                listData:[],
                params:{
                    startTime:'',
                    endTime:'',
                    companyName:'',
                    mobile:'',
                    pageNum:1,
                    pageSize:10,
                    accountStatus:0,//店铺申请状态：0申请开店 1审核中 2审核通过 3审核失败
                    /*orderBy:'0',
                    soldStatus:'',
                    auditStatus:'',*/
                },
                //审核参数
                soldOutForm:{
                    //goodsId:"",
                    auditFeedback:"",
                    checkStatus: '',
                    userId:'',
                },
                pagination:{//分页参数
                    total:null,
                    pages:null
                },
                dialogFormVisible:false,
                examineVisible:false,//店铺审核弹窗
                rules: {
                    auditFeedback: [
                        { required: true, message: '请输入审核意见', trigger: 'blur' }
                    ]
                }
            }
        },
      watch:{
        select(value,oldValue){
          this.params.startTime='';
          this.params.endTime='';
          this.params.companyName='';
          this.params.mobile='';
          this.init()
        }
      },
        mounted(){
            this.init()
        },
        methods:{
          tabChange(index){
            this.select=index;
            switch (index) {
              case 0 :{
                this.params.accountStatus='';
                this.params.pageNum=1
                break;
              }
              case 1 :{
                this.params.accountStatus=1;
                this.params.pageNum=1
                break;
              }
              case 2 :{
                this.params.accountStatus=2;
                this.params.pageNum=1
                break;
              }
              case 3 :{
                this.params.accountStatus=3;
                this.params.pageNum=1
                break;
              }
            }
          },
            init(){
                this.getList();
            },
            getList(){
              findAllShop(this.params).then(res => {
                    this.listData=res.list;
                    console.log('店铺列表',this.listData);
                    this.pagination.pageNum=res.pageNum;
                    this.pagination.pageSize=res.pageSize;
                    this.pagination.pages=res.pages;
                    this.pagination.total=res.total;
                })
                    .catch((res)=> {
                        this.$message.error(res);
                    })
            },
            //店铺审核提交
            submitCheckShopFun(){
              submitCheckShop(this.soldOutForm).then(res => {
              console.log('店铺审核提交');
              if(res == '店铺审核失败'){
                this.$message({
                  message: '审核失败',
                  duration: 2000,
                  type: "info"
                });
              }else{
                this.$message({
                  message: '审核成功',
                  duration: 2000,
                  type: "success"
                });
                this.getList();
              }

              /*if(res.list.length>0){
                this.listData=res.list;
                this.pagination.pageNum=res.pageNum;
                this.pagination.pageSize=res.pageSize;
                this.pagination.pages=res.pages;
                this.pagination.total=res.total;
              }*/
            })
             .catch((res)=> {
               this.$message.error(res);
             })
          },
            handleSearch(){
                this.getList();
            },
            openDialogForm(x,y){
                this.dialogFormVisible = true;
                this.tipData.auditFeedback=x;
                this.tipData.accountStatus=y;
                //this.soldOutForm.goodsId = id;
            },
          openExamineForm(x,y){
            this.soldOutForm.userId=y;
            this.examineVisible = true;
          },
          handleExamine(ref){
            this.$refs[ref].validate((valid) => {
              if (valid) {
                this.submitCheckShopFun()
                this.examineVisible=false
              } else {
                console.log('error submit!!');
                return false;
              }
            });

          },
            handleSoldOut(ref){
                this.$refs[ref].validate((valid) => {
                    if (valid) {
                        soldOutGoods({
                            goodsId:this.soldOutForm.goodsId,
                            soldOutReason:this.soldOutForm.soldOutReason,
                        }).then(res=>{
                            this.dialogFormVisible = false;
                            this.getList()
                            this.$message({
                                message: '下架成功',
                                duration: 2000,
                                type: "success"
                            });
                        }).catch(res=>{
                            this.$message({
                                message: res,
                                center: true
                            });
                        })
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
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
                this.params.pageNum=1
                this.getList();
            }
        }
    }
</script>

<style scoped lang="scss" type="text/scss">
    .member-warp{
        .el-col{
            margin-bottom: 20px;
        }
        background-color: #ffffff;
        .member-warp-content{
            padding: 0 20px;
            .condition-box{
                padding-bottom: 20px;
                border-bottom: dashed 1px #D0D0D0;
                .tab{
                    display: inline-block;
                    overflow: hidden;
                    .item{
                        display: inline-block;
                        font-size: 16px;
                        float: left;
                        //line-height: 40px;
                        color: #333333;
                        padding: 6px 25px;
                        box-sizing: border-box;
                        cursor: pointer;
                        &.active{
                            background: red;
                        }
                        //font-weight: bold;
                    }
                    .selectActive{
                        background: #f56c6c;
                        color: #fff;
                    }
                }
                .condition-item{

                    .condition-item-title{
                        color:#999999;
                        padding-right: 20px;
                    }
                    .condition-item-info{
                        display: inline-block;
                        width: 160px;

                    }
                    .timeWidth{
                        width: 600px;
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
