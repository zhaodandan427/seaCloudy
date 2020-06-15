<template>
    <div class="member-warp new-member-warp" >
        <div class="common-title">
            <h3>高校管理</h3>
        </div>
        <div class="member-warp-content">
            <div class="condition-box">
                <el-row>
                    <el-col>
                        <div class="condition-item" style="float: right">
                            <el-button type="danger" size="medium"  @click="add()">新增</el-button>
                        </div>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="12">
                        <div class="condition-item" style="width: 800px">
                            <label class="condition-item-title">所在地区:</label>
                            <div class="condition-item-info">
                                <el-select :popper-append-to-body="false" @change="next" v-model="areavalue1" filterable placeholder="请选择">
                                    <el-option
                                            v-for="item in area1"
                                            :key="item.value"
                                            :label="item.label"
                                            :value="item"

                                    >
                                    </el-option>
                                </el-select>
                                <el-select :popper-append-to-body="false" @change="next2" v-model="areavalue2" filterable placeholder="请选择">
                                    <el-option
                                            v-for="item in area2"
                                            :key="item.value"
                                            :label="item.label"
                                            :value="item">
                                    </el-option>
                                </el-select>
                                <el-select :popper-append-to-body="false" @change="next3" v-model="areavalue3" filterable placeholder="请选择">
                                    <el-option
                                            v-for="item in area3"
                                            :key="item.value"
                                            :label="item.label"
                                            :value="item">
                                    </el-option>
                                </el-select>
                                <!--<el-select :popper-append-to-body="false" v-model="value4" filterable placeholder="请选择">
                                    <el-option
                                            v-for="item in options4"
                                            :key="item.value"
                                            :label="item.label"
                                            :value="item.value">
                                    </el-option>
                                </el-select>-->
                            </div>
                        </div>
                    </el-col>
                    <el-col :span="4">
                        <div class="condition-item">
                            <el-button type="danger" size="medium"  @click="handleSearch">查询</el-button>
                        </div>
                    </el-col>
                </el-row>
            </div>
            <div class="member-main">
                <div class="table">
                    <el-table
                            :data="listData"
                            tooltip-effect="dark"
                            style="width: 100%"
                            border
                    >
                        <el-table-column
                                label="照片"
                                width="100">
                            <template slot-scope="scope">
                                <img style="width: 50px;height: 50px" :src="scope.row.universitiesPicture" alt="">
                            </template>
                        </el-table-column>
                        <el-table-column
                                prop="universitiesName"
                                label="高校名称">
                        </el-table-column>
                        <el-table-column
                                prop="universitiesAddress"
                                label="所在地区">
                        </el-table-column>
                        <el-table-column
                                prop="universitiesTelephone"
                                label="联系方式">
                        </el-table-column>
                        <el-table-column
                                prop="researchDirection"
                                label="研究方向">
                        </el-table-column>
                        <el-table-column
                                label="操作"
                        >
                            <template slot-scope="scope">
                                <el-button
                                        type="text"
                                        @click="goto(scope.row.id,1)">查看</el-button>
                                <el-button
                                        type="text"
                                        @click="goto(scope.row.id,2)">编辑</el-button>
                                <el-button
                                        type="text"
                                        @click="del(scope.row.id)">删除</el-button>
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
  import {SelectAreaList,zbUniversitiesSectList,deleteZbTalents,deleteZbUniversities} from "../../api/talentUniversity/talentUniversity";

  export default {
    name: "",
    data(){
      return{
        areavalue1:'',
        areavalue2:'',
        areavalue3:'',
        area1:[],
        area2:[],
        area3:[],
        options: [],
        value: '',
        options2: [],
        value2: '',
        options3: [],
        value3: '',
        options4: [],
        value4: '',
        tipData:{
          auditFeedback:'',
          accountStatus:'',
        },
        radio: '1',
        select:0,
        arr:['全部','待审核','已通过','未通过',],
        listData:[],
        params:{
          pageNum:1,
          pageSize:10,
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
        this.init()
      }
    },
    mounted(){
      this.init()
    },
    methods:{
      delete(id){
        deleteZbUniversities({id:id}).then(res => {
          console.log('删除',res);
          if(res.code==200){
            this.$message.success("删除成功")
            this.init()
          }
        })
         .catch((res)=> {
           this.$message.error(res);
         })
      },
      getArea(params){
        SelectAreaList(params).then(res => {
          console.log('地区',res);
          let arr=[]
          res.forEach( (item,index) => {
            arr.push({value:item.code,label:item.shortName})
          })
          arr.unshift({value:0,label:'全部'})
          this.area1=arr;
        })
         .catch((res)=> {
           this.$message.error(res);
         })
      },
      next(code){
        console.log('code',code);
        if(code.label=='全部'){
          this.params.universitiesProvince=''
        }else{
          this.params.universitiesProvince=code.label
        }
        SelectAreaList({level:2,parentCode:code.value}).then(res => {
          console.log('地区2',res);
          let arr=[]
          res.forEach( (item,index) => {
            arr.push({value:item.code,label:item.shortName})
          })
          if(arr.length>0){
            arr.unshift({value:"",label:'全部'})
          }
          this.area2=arr;
          this.areavalue2="";
          this.areavalue3="";
          this.params.universitiesCity=""
          this.params.universitiesCounty=""
        })
         .catch((res)=> {
           //this.$message.error(res);
         })
      },
      next2(code){
        if(code.label=='全部'){
          this.params.universitiesCity=''
        }else{
          this.params.universitiesCity=code.label
        }
        SelectAreaList({level:3,parentCode:code.value}).then(res => {
          console.log('地区3',res);
          let arr=[]
          res.forEach( (item,index) => {
            arr.push({value:item.code,label:item.shortName})
          })
          if(arr.length>0){
            arr.unshift({value:"",label:'全部'})
          }
          this.area3=arr;
          this.areavalue3="";
          this.params.universitiesCounty=""
        })
         .catch((res)=> {
           //this.$message.error(res);
         })
      },
      next3(code){
        if(code.label=='全部'){
          this.params.universitiesCounty=''
        }else{
          console.log('------------',code.label);
          this.params.universitiesCounty=code.label
        }

      },
      del(id){
        this.$confirm('删除后数据无法恢复，确认删除吗？', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.delete(id)
          /*this.$message({
            type: 'success',
            message: '删除成功!'
          });*/

        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });
        });
      },
      goto(id,type){
        this.$router.push({path:'/universityDetail',query:{id:id,type:type}})
      },
      add(){
        this.$router.push({path:'/universityDetail',query:{type:3}})
      },
      init(){
        this.getList();
        let param={level:1,parentCode:0}
        this.getArea(param);
      },
      getList(){
        zbUniversitiesSectList(this.params).then(res => {
          console.log('高校分页列表查询',res);
          this.listData=res.list
          res.list.forEach( (item,index) =>{
            item.universitiesPicture=window.IMGURL+'/'+item.universitiesPicture
          })
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
                        width: 700px;

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
<style lang="scss">
    .member-warp {
        .el-scrollbar {
            .el-scrollbar__wrap {
                overflow-x: scroll !important;
            }
        }
    }
    .new-member-warp{
        .el-select{
            width: 20%;
        }
    }
</style>
