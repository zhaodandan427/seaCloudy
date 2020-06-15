<template>
    <div class="member-warp">
        <div class="common-title">
            <h3>人才管理</h3>
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
                    <el-col :span="6">
                        <div class="condition-item">
                            <label class="condition-item-title">姓名:</label>
                            <div class="condition-item-info">
                                <el-input
                                        size="medium"
                                        placeholder="请输入内容"
                                        v-model="params.name"
                                        clearable>
                                </el-input>
                            </div>
                        </div>
                    </el-col>
                    <el-col :span="6">
                        <div class="condition-item">
                            <label class="condition-item-title">性别:</label>
                            <div class="condition-item-info">
                                <el-select :popper-append-to-body="false" v-model="params.sex" placeholder="请选择">
                                    <el-option
                                            v-for="item in options"
                                            :key="item.value"
                                            :label="item.label"
                                            :value="item.value">
                                    </el-option>
                                </el-select>
                            </div>
                        </div>
                    </el-col>
                    <el-col :span="6">
                        <div class="condition-item">
                            <label class="condition-item-title">工作单位:</label>
                            <div class="condition-item-info">
                                <el-input
                                        size="medium"
                                        placeholder="请输入内容"
                                        v-model="params.workerUnit"
                                        clearable>
                                </el-input>
                            </div>
                        </div>
                    </el-col>
                    <el-col :span="6">
                        <div class="condition-item">
                            <label class="condition-item-title">职称:</label>
                            <div class="condition-item-info">
                                <el-select :popper-append-to-body="false" v-model="params.professional" filterable placeholder="请选择">
                                    <el-option
                                            v-for="item in options2"
                                            :key="item.value"
                                            :label="item.label"
                                            :value="item.value">
                                    </el-option>
                                </el-select>
                            </div>
                        </div>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="6">
                        <div class="condition-item">
                            <label class="condition-item-title">单位地址:</label>
                            <div class="condition-item-info">
                                <!--<el-select v-model="areavalue1" filterable placeholder="请选择">
                                    <el-option
                                            v-for="item in area1"
                                            :key="item.value"
                                            :label="item.label"
                                            :value="item.value"
                                            @change=""
                                    >
                                    </el-option>
                                </el-select>
                                <el-select v-model="areavalue" filterable placeholder="请选择">
                                    <el-option
                                            v-for="item in area"
                                            :key="item.value"
                                            :label="item.label"
                                            :value="item.value">
                                    </el-option>
                                </el-select>
                                <el-select v-model="areavalue" filterable placeholder="请选择">
                                    <el-option
                                            v-for="item in area"
                                            :key="item.value"
                                            :label="item.label"
                                            :value="item.value">
                                    </el-option>
                                </el-select>-->
                                <el-input
                                        size="medium"
                                        placeholder="请输入内容"
                                        v-model="params.addressUnit"
                                        clearable>
                                </el-input>
                            </div>
                        </div>
                    </el-col>
                    <el-col :span="6">
                        <div class="condition-item">
                            <label class="condition-item-title">学历:</label>
                            <div class="condition-item-info">
                                <el-select :popper-append-to-body="false" v-model="params.education" placeholder="请选择">
                                    <el-option
                                            v-for="item in options3"
                                            :key="item.value"
                                            :label="item.label"
                                            :value="item.value">
                                    </el-option>
                                </el-select>
                            </div>
                        </div>
                    </el-col>
                    <el-col :span="6">
                        <div class="condition-item">
                            <label class="condition-item-title">现从事专业:</label>
                            <div class="condition-item-info">
                                <el-select :popper-append-to-body="false" v-model="params.nowMajor" filterable placeholder="请选择">
                                    <el-option
                                            v-for="item in options4"
                                            :key="item.value"
                                            :label="item.label"
                                            :value="item.value">
                                    </el-option>
                                </el-select>
                            </div>
                        </div>
                    </el-col>
                    <el-col :span="2">
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
                                <img style="width: 50px;height: 50px" :src="scope.row.expertPicture" alt="">
                            </template>
                        </el-table-column>
                        <el-table-column
                                prop="name"
                                label="姓名">
                        </el-table-column>
                        <el-table-column
                                prop="sex"
                                label="性别">
                        </el-table-column>
                        <el-table-column
                                prop="workerUnit"
                                label="工作单位">
                        </el-table-column>
                        <el-table-column
                                prop="professional"
                                label="职称">
                        </el-table-column>
                        <el-table-column
                            prop="addressUnit"
                            label="单位地址">
                        </el-table-column>
                        <el-table-column
                            prop="education"
                            label="学历">
                        </el-table-column>
                        <el-table-column
                                prop="nowMajor"
                                label="现在从事专业">
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
  import { zbTalentsselSectList,SelectAreaList,deleteZbTalents,selectList} from "../../api/talentUniversity/talentUniversity";
  import Mixin from "@/assets/mixins/Mixin.js";
  export default {
    mixins:[Mixin],
    name: "",
    data(){
      return{
        area: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }],
        areavalue: '',
        area1: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }],
        areavalue1: '',
        tyoeId:"",//1地区，2职称，3学历，4专业
        options: [
          {
            value: '',
            label: '全部'
          },{
          value: '男',
          label: '男'
        }, {
          value: '女',
          label: '女'
        }],
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
          name:'',
          sex:'',
          workerUnit:'',
          professional:'',
          addressUnit:'',
          education:'',
          nowMajor:'',
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
        this.params.startTime='';
        this.params.endTime='';
        this.params.companyName='';
        this.params.mobile='';
        this.init()
      }
    },
    mounted(){
      this.init()
      this.getSelect()
    },
    methods:{
      getSelect(){
        //1地区，2职称，3学历，4专业
        for (let i = 2; i < 5; i++) {
          selectList({tyoeId:i}).then(res => {
            //console.log('专家页面根据id下拉查询',res);
            if(i==2){
              let arr=[]
              res.forEach( (item,index) =>{
                arr.push({value:item,label:item})
              })
              arr.unshift({value:"",label:'全部'})
              this.options2=arr
            }else if(i==3){
              let arr=[]
              res.forEach( (item,index) =>{
                arr.push({value:item,label:item})
              })
              arr.unshift({value:"",label:'全部'})
              this.options3=arr
            }else if(i==4){
              let arr=[]
              res.forEach( (item,index) =>{
                arr.push({value:item,label:item})
              })
              arr.unshift({value:"",label:'全部'})
              this.options4=arr
            }
          })
           .catch((res)=> {
             this.$message.error(res);
           })
        }

      },
      delete(id){
        deleteZbTalents({id:id}).then(res => {
          console.log('删除',res);
          if(res.code==200){
            this.$message.success("修改成功")
            this.getList()
          }
        })
         .catch((res)=> {
           this.$message.error(res);
         })
      },
      del(id){
        this.$confirm('删除后数据无法恢复，确认删除吗？', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.delete(id)
          this.$message({
            type: 'success',
            message: '删除成功!'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });
        });
      },
      goto(id,type){
        this.$router.push({path:'/talentDetail',query:{id:id,type:type}})
      },
      add(){
        this.$router.push({path:'/talentDetail',query:{type:3}})
      },
      init(){
        this.getList();
        //this.getSelect();
        let param={level:1,parentCode:0}
        this.getArea(param);
      },
      getList(){
        zbTalentsselSectList(this.params).then(res => {
          console.log('专家分页列表查询',res);
          res.list.forEach( (item,index) =>{
            item.expertPicture=window.IMGURL+'/'+item.expertPicture
          })
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
      getArea(params){
        SelectAreaList(params).then(res => {
          console.log('地区',res);
          let arr=[]
          res.forEach( (item,index) => {
            arr.push({value:item.code,label:item.fullName})
          })
          this.area1=arr;
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
      handleCurrentChange(data){
        this.getList()
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
<style lang="scss">
    .member-warp {
        .el-scrollbar {
            .el-scrollbar__wrap {
                overflow-x: scroll !important;
            }
        }
    }
</style>
