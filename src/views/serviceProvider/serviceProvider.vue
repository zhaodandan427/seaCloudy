<template>
    <div class="member-warp">
        <div class="common-title">
            <h3>服务商管理</h3>
        </div>
        <div class="member-warp-content">
            <div class="condition-box">
                <el-row>
                    <el-col :span="8">
                        <div class="condition-item">
                            <label class="condition-item-title">类型:</label>
                            <div class="tab" >
                                <div :class="{selectActive:select1==index}"
                                     @click="tabChange1(index)"
                                     class="item" v-for="(item,index) in arr1">
                                    {{item}}
                                </div>
                            </div>
                        </div>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="12">
                        <div class="condition-item">
                            <label class="condition-item-title">状态:</label>
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
                    <el-col :span="4">
                        <div class="condition-item">
                            <label class="condition-item-title">服务商名称:</label>
                            <div class="condition-item-info">
                                <el-input
                                        size="medium"
                                        placeholder="请输入内容"
                                        v-model="params.upname"
                                        clearable>
                                </el-input>
                            </div>
                        </div>
                    </el-col>
                    <el-col :span="12">
                        <div class="condition-item">
                            <label class="condition-item-title">提交日期:</label>
                            <div class="condition-item-info timeWidth">
                                <el-date-picker
                                        v-model="startTime"
                                        type="date"
                                        value-format="yyyy/MM/dd"
                                        placeholder="选择日期">
                                </el-date-picker>
                                <span style="margin-right: 10px;margin-left: 10px;">至</span>
                                <el-date-picker
                                        v-model="endTime"
                                        type="date"
                                        value-format="yyyy/MM/dd"
                                        placeholder="选择日期">
                                </el-date-picker>
                            </div>
                        </div>
                    </el-col>
                    <el-col :span="4">
                        <div class="condition-item">
                            <el-button type="danger" size="medium"  @click="handleSearch">搜索</el-button>
                        </div>
                    </el-col>
                </el-row>
            </div>
            <div class="member-main">
                <div class="options">
                    <!--<div class="options-left  el-float-left">
                        <el-dropdown @command="handlePageSizeChange">
                            <el-button type="info" size="mini" plain>
                                显示条数<i class="el-icon-arrow-down el-icon&#45;&#45;right"></i>
                            </el-button>
                            <el-dropdown-menu slot="dropdown">
                                <el-dropdown-item :command="10">10</el-dropdown-item>
                                <el-dropdown-item :command="20">20</el-dropdown-item>
                                <el-dropdown-item :command="50">50</el-dropdown-item>
                            </el-dropdown-menu>
                        </el-dropdown>
                    </div>-->
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
                                width="50">
                        </el-table-column>
                        <el-table-column
                                prop="upname"
                                label="服务商名称">
                        </el-table-column>
                        <el-table-column
                                prop="authType"
                                label="类型"
                                width="100">
                            <template slot-scope="scope">
                                {{scope.row.authType | serviceStatus}}
                            </template>
                        </el-table-column>
                        <el-table-column
                                prop="phoneNum"
                                label="手机号码"
                                width="150">
                        </el-table-column>
                        <el-table-column
                                prop="addTime"
                                label="注册时间"
                                width="200"
                                show-overflow-tooltip>
                        </el-table-column>
                        <el-table-column
                                prop="specialSkills"
                                width="250"
                                label="	擅长领域">
                        </el-table-column>
                        <el-table-column
                                label="状态"
                                width="100">
                            <template slot-scope="scope">
                                {{scope.row.status  | serviceexamineStatus}}
                            </template>
                        </el-table-column>
                        <el-table-column
                                prop="addTime"
                                label="提交日期"
                                width="200"
                                show-overflow-tooltip>
                        </el-table-column>
                        <el-table-column
                                label="操作"
                                width="100px">
                            <template slot-scope="scope">
                                <el-button
                                        v-if="scope.row.status == 2||scope.row.status == 3"
                                        type="text"
                                        @click="openDialogForm(scope.row.userId)">查看</el-button>
                                <el-button
                                        v-if="scope.row.status == 0||scope.row.status == 1"
                                        type="text"
                                        @click="openDialogForm(scope.row.userId)">审核</el-button>
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
                                    :current-page.sync="params.currentPage"
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
                    <!--{{scope.row.status  | filterStoreStatus}}-->
                    {{tipData.status | filterStoreStatus}}
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
  import { ProvidergetList,getOne,check } from "../../api/serviceProvider/serviceProvider";

  export default {
    name: "",
    data(){
      return{
        pagination:{//分页参数
          total:null,
          pages:null
        },
        tipData:{
          auditFeedback:'',
          status:'',
        },
        radio: '1',
        select1:0,
        select:0,
        arr1:['全部','个人服务商','企业服务商',],
        arr:['全部','审核中','已认证','认证失败',],
        listData:[],
        startTime:'',
        endTime:'',
        params:{
          /*startTime:'',
          endTime:'',*/
          upname:'',
          currentPage:1,
          pageSize:10,
          //authType:1,//1个人2企业
          //status:0,//认证状态 0.未认证 1.审核中 2.已认证 3.认证失败
        },
        //审核参数
        soldOutForm:{
          //goodsId:"",
          auditFeedback:"",
          checkStatus: '',
          userId:'',
        },
        vpagination:{//分页参数
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
        this.startTime="";
        this.endTime="";
        if(!this.params.startTime){
          delete(this.params.startTime);
        }
        if(!this.params.endTime){
          delete(this.params.endTime);
        }
        this.params.upname='';
        this.init()
      },
      select1(value,oldValue){
        this.startTime="";
        this.endTime="";
        if(!this.params.startTime){
          delete(this.params.startTime);
        }
        if(!this.params.endTime){
          delete(this.params.endTime);
        }
        this.params.upname='';
        this.init()
      }
    },
    mounted(){
      this.init()
    },
    methods:{
      tabChange1(index){
        this.select1=index;
        switch (index) {
          case 0 :{
            this.params.authType='';
            this.params.currentPage=1
            break;
          }
          case 1 :{
            this.params.authType=2;
            this.params.currentPage=1
            break;
          }
          case 2 :{
            this.params.authType=4;
            this.params.currentPage=1
            break;
          }
        }
      },
      tabChange(index){
        this.select=index;
        switch (index) {
          case 0 :{
            this.params.status="";
            this.params.currentPage=1
            break;
          }
          case 1 :{
            this.params.status=1;
            this.params.currentPage=1
            break;
          }
          case 2 :{
            this.params.status=2;
            this.params.currentPage=1
            break;
          }
          case 3 :{
            this.params.status=3;
            this.params.currentPage=1
            break;
          }
        }
      },
      init(){
        this.getList();
      },
      getList(){
        //this.params.currentPage=1
        if(this.startTime != ''){
          this.params.startTime=this.startTime
        }
        if(this.endTime != ''){
          this.params.endTime=this.endTime
        }
        ProvidergetList(this.params).then(res => {
          console.log('服务商列表',res);
          this.listData=res.list;

          this.pagination.currentPage=res.currentPage;
          this.pagination.pageSize=res.pageSize;
          this.pagination.pages=res.totalPage;
          this.pagination.total=res.totalItems;
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
            this.pagination.currentPage=res.currentPage;
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
        this.params.currentPage=1
        this.getList();
      },
      openDialogForm(userId){
        this.$router.push({path:'/detail',query:{userId:userId}})
        /*this.dialogFormVisible = true;
        this.tipData.auditFeedback=x;
        this.tipData.status=y;*/
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
        this.params.currentPage=1
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
