<template>
  <div class="member-warp">
    <div class="common-title">
      <h3>需求详情</h3>
    </div>
    <div class="member-warp-content">
      <div class="condition-box">
        <el-steps :active="stepNum" align-center>
          <el-step title="发布需求" :description="step.addTime"></el-step>
          <el-step title="平台审核" :description="step.checkTime"></el-step>
          <el-step title="悬赏费用托管" :description="step.trusteeTime"></el-step>
          <el-step title="待发布" :description="step.pressTime"></el-step>
          <el-step title="供应商工作" :description="step.workingTime"></el-step>
          <el-step title="验收付款" :description="detalStatus==14?'':step.payTime" :status="detalStatus==14?'wait':''"></el-step>
          <el-step title="评价" :description="detalStatus==14?'':step.cancelTime" :status="detalStatus==14?'wait':''"></el-step>
        </el-steps>
      </div>
      <div class="member-main">
        <div class="options">
          <div class="options-left el-float-left"></div>
        </div>
        <!-- <el-form :inline="true" :model="formInline" class="demo-form-inline">
          <el-row>
            <el-col :span="10">
              <el-form-item label="需求方">
                <el-input v-model="formInline.requiremetName"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="10">
              <el-form-item label="需求方联系人">
                <el-input v-model="formInline.contactName"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="10">
              <el-form-item label="需求标题">
                <el-input v-model="formInline.title"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="10">
              <el-form-item label="需求标签">
                <el-input v-model="formInline.tag"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-form-item label="需求类型">
              <el-input v-model="formInline.type"></el-input>
            </el-form-item>
          </el-row>
          <el-row>
            <el-form-item label="需求描述">
              <el-input v-model="formInline.description"></el-input>
            </el-form-item>
          </el-row>
          <el-row>
            <el-form-item label="附件">
              <el-link
                type="primary"
                :href="fileList.filePath"
                target="_blank"
              >{{fileList.fileName}}</el-link>
            </el-form-item>
          </el-row>
          <el-row>
            <el-col :span="10">
              <el-form-item label="交付截止日期">
                <el-input v-model="formInline.deliveryDeadline"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="10">
              <el-form-item label="报名截止日期">
                <el-date-picker
                  v-model="formInline.applyDeadline"
                  type="datetime"
                  placeholder="选择日期时间"
                  value-format="yyyy-MM-dd HH:mm:ss"
                  default-time="12:00:00"
                ></el-date-picker>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-form-item label="悬赏金额">
              <el-input v-model="formInline.rewardMoney"></el-input>
            </el-form-item>
          </el-row>
          <el-row>
            <el-form-item label="交付验收要求">
              <el-input v-model="formInline.checkRemark"></el-input>
            </el-form-item>
          </el-row>
          <el-row>
            <el-form-item label="审核意见" v-if="formInline.status == 1">
              <el-input v-model="formCheck.checkContent"></el-input>
            </el-form-item>
          </el-row>
        </el-form>-->

        <ul>
          <li>
            <el-row>
              <el-col
                :span="12"
                style="border: 1px solid #ccc;padding: 10px;height: 50px;"
              >需求方：{{formInline.requiremetName}}</el-col>
              <el-col
                :span="12"
                style="border: 1px solid #ccc;padding: 10px;height: 50px;"
              >需求方联系人：{{formInline.contactPhone}}</el-col>
            </el-row>
            <el-row>
              <el-col
                :span="12"
                style="border: 1px solid #ccc;padding: 10px;height: 50px;"
              >需求标题：{{formInline.title}}</el-col>
              <el-col :span="12" style="border: 1px solid #ccc;padding: 10px;height: 50px;">
                需求标签：
                <el-tag>{{formInline.tag}}</el-tag>
              </el-col>
            </el-row>
            <el-row>
              <el-col
                :span="24"
                style="border: 1px solid #ccc;padding: 10px;height: 50px;"
              >需求类型：{{formInline.type | reqType}}</el-col>
            </el-row>
            <el-row>
              <el-col :span="24" style="border: 1px solid #ccc;padding: 10px;height: 200px;">
                需求描述：&nbsp;&nbsp;&nbsp;&nbsp;
                <el-input
                  type="textarea"
                  :disabled="true"
                  :rows="8"
                  v-model="formInline.description"
                ></el-input>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="24" style="border: 1px solid #ccc;padding: 10px;height: 50px;">
                附件：
                <div v-for="(item, index) in fileList" :key="index" style="display: inline-block;">
                  <a class="el-link el-link--primary is-underline" style="margin-right:15px;"
                    v-if="item.type == 0"
                    type="primary"
                    :href="imgUrl+'/'+item.filePath"
                    target="_blank"
                  >{{item.fileName}}</a>
                </div>
              </el-col>
            </el-row>
            <el-row>
              <el-col
                :span="12"
                style="border: 1px solid #ccc;padding: 10px;height: 50px;"
              >交付截止日期：{{formInline.deliveryDeadline}}</el-col>
              <el-col :span="12" style="border: 1px solid #ccc;padding: 10px;height: 50px;">
              	<span style="color: red;" v-if="detalStatus!=1">*</span>
                报名截止日期：
                <el-date-picker :disabled="detalStatus==1"
                  size="mini"
                  v-model="formInline.applyDeadline"
                  @change="changeDate"
                  type="datetime"
                  placeholder="选择日期时间"
                  value-format="yyyy-MM-dd HH:mm:ss"
                  default-time="12:00:00"
                ></el-date-picker>
              </el-col>
            </el-row>
            <el-row>
              <el-col
                :span="24"
                style="border: 1px solid #ccc;padding: 10px;height: 50px;"
              >悬赏金额：{{formInline.rewardMoney}}</el-col>
            </el-row>
            <el-row>
              <el-col :span="24" style="border: 1px solid #ccc;padding: 10px;height: 200px;">
                交付验收要求：
                <el-input
                  type="textarea"
                  :disabled="true"
                  :rows="8"
                  v-model="formInline.checkRemark"
                ></el-input>
              </el-col>
            </el-row>
            <el-row>
              <el-col
                :span="24"
                style="border: 1px solid #ccc;padding: 10px;height: 200px;"
                v-if="formInline.status == 1"
              >
                <span style="color: red;">*</span>审核意见：&nbsp;&nbsp;&nbsp;&nbsp;
                <el-input
                  type="textarea"
                  :rows="8"
                  placeholder="请输入内容"
                  v-model="formInline.checkContent"
                ></el-input>
              </el-col>
            </el-row>
          </li>
        </ul>

        <div class="button-box" v-if="formInline.status == 1">
          <el-button type="primary" @click="isPass(1)">通过</el-button>
          <el-button type="primary" @click="isPass(2)">不通过</el-button>
        </div>
        <div class="button-box" v-if="formInline.status == 4">
          <el-button type="primary" @click="publishReq">发布</el-button>
        </div>

        <el-tabs type="border-card" v-if="formInline.status != 1 && formInline.status != 4">
          <el-tab-pane label="任务报名">
            <p class="check-status">{{zbProVo.status | checkedStatus}}</p>
            <el-table :data="tableData1" border style="width: 100%">
              <el-table-column prop="orgName" label="公司名称" width="230"></el-table-column>
              <el-table-column prop="ucreditValue" label="信誉" width="80"></el-table-column>
              <el-table-column prop="addTime" label="报名时间" width="180"></el-table-column>
              <el-table-column prop="status" label="状态" width="100">
                <template slot-scope="scope">
                  <span style="margin-left: 10px">{{ scope.row.status | reqDetailStatus }}</span>
                </template>
              </el-table-column>
              <el-table-column prop="userName" label="联系人" width="80"></el-table-column>
              <el-table-column prop="mobile" label="手机号" width="130"></el-table-column>
              <el-table-column prop="applyContent" label="自荐理由描述"></el-table-column>
              <el-table-column prop="date" label="操作" width="100" v-if="formInline.status == 6">
                <!--<el-button type="primary">选中</el-button>-->
                <template slot-scope="scope">
                  <el-button
                    type="primary"
                    plain
                    @click="checkedServer(scope.row.id, scope.row.requirementId)"
                  >选中</el-button>
                </template>
              </el-table-column>
            </el-table>
            <p>温馨提示:报名结束后，请在上述报名用户名单尽快进行资格审查，筛选确认中标用户。</p>
            <div class="pagination-warp">
              <div class="pagination-box-left">
                共
                <span class="common-red-color">{{pagination.pages}}</span>页/
                <span class="common-red-color">{{pagination.total}}</span>条数据
              </div>
              <div class="pagination-box-right">
                <el-pagination
                  @current-change="handleCurrentChange"
                  :current-page.sync="paramPage.currentPage"
                  :page-size="pagination.pageSize"
                  layout=" prev, pager, next"
                  :total=" pagination.total"
                ></el-pagination>
              </div>
            </div>
            <div class="button-box" v-if="formInline.status == 6 && tableData1.length > 0">
              <el-button type="primary" @click="submitServer">提交</el-button>
            </div>
            <div class="button-box" v-if="formInline.status == 6 && tableData1.length === 0">
              <el-button type="primary" @click="publishReq">重新发布</el-button>
              <el-button type="primary" @click="publishLost">确认流标</el-button>
            </div>
            <div class="button-box" v-if="formInline.status == 9">
              <el-button type="primary" @click="openDialog">成果验收</el-button>
              <el-button type="primary" @click="goBack">返回</el-button>
            </div>
            <div class="button-box" v-if="formInline.status == 11">
              <el-button type="primary" @click="payFor">去付款</el-button>
              <el-button type="primary" @click="goBack">返回</el-button>
            </div>
            <div class="button-box" v-if="formInline.status == 16">
              <el-button type="primary" @click="payFor">去退款</el-button>
              <el-button type="primary" @click="goBack">返回</el-button>
            </div>
          </el-tab-pane>

          <el-tab-pane label="任务成果">
            <el-table :data="tableData2" border style="width: 100%">
              <el-table-column prop="title" label="方案标题" width="200"></el-table-column>
              <el-table-column prop="content" label="方案描述"></el-table-column>
              <el-table-column prop="address" label="方案附件" width="200">
                <template slot-scope="scope">
                  <div v-for="(item, index) in fileList" :key="index" style="display: inline-block;">
                    <a class="el-link el-link--primary" style="margin-right:15px;"
                       v-if="item.type == 1"
                       type="primary"
                       :href="imgUrl+'/'+item.filePath"
                       target="_blank"
                    >{{item.fileName}}</a>
                  </div>
                </template>
              </el-table-column>
            </el-table>
          </el-tab-pane>
          <el-tab-pane label="任务评价">
            <el-table :data="tableData3" border style="width: 100%">
              <el-table-column prop="userType" label width="200">
                <template slot-scope="scope">
                  <span style="margin-left: 10px">{{ scope.row.userType | commentUserType }}</span>
                </template>
              </el-table-column>
              <el-table-column prop="level" label="评价级别" width="200">
                <template slot-scope="scope">
                  <!-- <span style="margin-left: 10px">{{ scope.row.level}}</span> -->
                  <el-rate v-model="scope.row.level" disabled show-score text-color="#ff9900"></el-rate>
                </template>
              </el-table-column>
              <el-table-column prop="content" label="评价内容"></el-table-column>
              <el-table-column prop="addTime" label="评价时间" width="200"></el-table-column>
            </el-table>
          </el-tab-pane>
        </el-tabs>
      </div>
    </div>

    <el-dialog title="方案验收" :visible.sync="dialogFormVisible">
      <el-form :model="checkForm">
        <el-form-item label :label-width="formLabelWidth">
          <el-radio v-model="checkForm.radio" label="1">通过</el-radio>
          <el-radio v-model="checkForm.radio" label="2">不通过</el-radio>
        </el-form-item>
        <el-form-item label="验收意见" :label-width="formLabelWidth">
          <el-input
            type="textarea"
            placeholder="请输入内容，少于100字"
            v-model="checkForm.advice"
            maxlength="100"
            show-word-limit
            :rows="5"
          ></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="checkAccept">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
    import { api } from '../../api/baseApi'
import {
  ReqCheck,
  ReqCheckTab,
  requirementCheck,
  publish5,
  publish16,
  checkEnroll,
  checkAdvice
} from "../../api/order/requirement";

export default {
  name: "",
  data() {
    return {
      dialogFormVisible: false,
      checkForm: {
        radio: "1",
        advice: ""
      },
      formLabelWidth: "120px",
      step: {},
      stepNum: null,
      formInline: {
        applyDeadline: "", // 报名截止时间 ,
        checkRemark: "", // 交付验收要求 ,
        contactName: "", // 联系人名称 ,
        contactPhone: "", // 联系人电话 ,
        deliveryDeadline: "", // 交付截止时间 ,
        description: "", //: 需求描述 ,
        id: "", // 需求id ,
        managedMoney: "", // 托管金额 ,
        requiremetName: "", // 需求方 ,
        rewardMoney: "", // 悬赏金额 ,
        tag: "", // 需求标签 ,
        title: "", // 需求标题 ,
        trusteePercent: "", // 托管比例 ,
        type: "", // 需求类型
        status: "", // 需求状态
        checkContent:''//审核意见
      },
      fileList: [],
      formCheck: {
        checkContent: "",
        checkStatus: null,
        requirementId: null,
        applyDeadline:null
      },
      zbProVo: {},
      tableData1: [],
      tableData2: [],
      tableData3: [],
      selectServer: {
        id: "",
        requirementId: ""
      },
      startDate: "",
      endDate: "",
      pagination: {
        //分页参数
        total: null,
        pages: null
      },
      // value: "",
      //   tipData: {
      //     auditFeedback: "",
      //     accountStatus: ""
      //   },
      // arr: ["全部", "待审核", "已通过", "未通过"],
      // listData: [],
      params: {
        id: ""
      },
      pagination: {
        //分页参数
        total: null,
        pages: null
      },
      paramPage: {
        currentPage: 1,
        pageSize: 10,
        id: ""
      },
      dialogFormVisible: false,
      // examineVisible: false, //店铺审核弹窗
      // rules: {
      //   auditFeedback: [
      //     { required: true, message: "请输入审核意见", trigger: "blur" }
      //   ]
      // }
        imgUrl:'',
        detalStatus:''
    };
  },
  watch: {},
  mounted() {
      this.imgUrl = api.imgURL;
    this.init();
  },
  methods: {
    init() {
      this.getList();
    },
    getList() {
      //console.log(this.$route.query.status);
      this.params.id = this.$route.query.id;
      this.startDate = this.$route.query.startDate;
      this.endDate = this.$route.query.endDate;
      this.detalStatus = this.$route.query.status;

      ReqCheck(this.params)
        .then(res => {
          console.log("详情查询", res);
          this.step = res.data.reqTimesVo;
          if (this.step.cancelTime) {
            this.stepNum = 7;
          } else if (this.step.payTime) {
            this.stepNum = 6;
          } else if (this.step.workingTime) {
            this.stepNum = 5;
          } else if (this.step.pressTime) {
            this.stepNum = 4;
          } else if (this.step.trusteeTime) {
            this.stepNum = 3;
          } else if (this.step.checkTime) {
            this.stepNum = 2;
          } else if (this.step.addTime) {
            this.stepNum = 1;
          }
          this.formInline = res.data.reqInfoVo;
          if (res.data.annInfoVoList) {
            this.fileList = res.data.annInfoVoList;
            // console.log(res.data.annInfoVoList);
          } else {
            this.fileList = [];
          }
          if (res.data.applyList) {
            //根据userType类型判断，若userType=2，userName=userName，否则userName=orgName
            this.tableData1 = res.data.applyList.list;
            for (var i = 0; i < this.tableData1.length; i++) {
              if (this.tableData1[i].userType=='4'){
                this.tableData1[i].userName=this.tableData1[i].orgName;
              }

            }
            //console.log("whh",this.tableData1)

            this.pagination.pageNum = res.data.applyList.currentPage;
            this.pagination.pageSize = res.data.applyList.pageSize;
            this.pagination.pages = res.data.applyList.totalPage;
            this.pagination.total = res.data.applyList.totalItems;
          } else {
            this.tableData1 = [];
          }

          if (res.data.zbProVoList) {
            this.tableData2 = res.data.zbProVoList;
          } else {
            this.tableData2 = [];
          }

          if (res.data.zbComVolist) {
            this.tableData3 = res.data.zbComVolist;
          } else {
            this.tableData3 = [];
          }
          this.zbProVo = res.data.zbProVoList[0];
        })
        .catch(res => {
          console.log(res);
        });
    },
    changeDate() {
      //console.log('---开始时间',this.startDate, this.endDate);
      //console.log('---结束时间',this.formInline.applyDeadline);
      /*if (
        this.formInline.applyDeadline <= this.endDate &&
        this.formInline.applyDeadline >= this.startDate
      ) {
        // console.log('true');
      } else {
        //console.log("false");
        this.formInline.applyDeadline = "";
        this.$message.error("时间不能早于发布日期，不能晚于交付日期");
      }*/
    },
    handleCurrentChange(val) {
      this.params.id = this.$route.query.id;
      this.params.currentPage = val 
      this.params.pageSize = 3
      ReqCheckTab( this.params)
        .then(res => {
          // console.log(res);
          this.tableData1 = res.data.list
        })
        .catch(res => {
          console.log(res);
        });
    },
    // 返回
    goBack() {
      this.$router.go(-1);
    },
    // 审核
    isPass(s) {
      // console.log(s);
      this.formCheck.checkStatus = s;
      this.formCheck.requirementId = this.formInline.id;
      this.formCheck.checkContent = this.formInline.checkContent;
      
      this.formCheck.applyDeadline = this.formInline.applyDeadline;
      //console.log('this.formInline.checkContent.trim()',this.formInline.checkContent)
      if (!this.formInline.checkContent || this.formInline.checkContent.trim() == "") {
        this.$message.error("请输入审核意见");
      }else if(this.formInline.checkContent.trim().length>200){
          this.$message.error("审核意见字数不得大于200字");
      }else if(!this.formCheck.applyDeadline && this.detalStatus!=1){
      	this.$message.error("请输入报名截止日期");
      } else {
        requirementCheck(this.formCheck)
          .then(res => {
             //console.log(res);
            if (res.code == 1) {
              this.$message.success("提交成功");
              this.$router.go(-1);
            } else {
              this.$message.error(res.message);
            }
          })
          .catch(res => {
            console.log(res);
          });
      }
    },
    // 发布
    publishReq() {
      let param = {
        id: this.formInline.id,
        status: 5,
        applyDeadline: this.formInline.applyDeadline
      };
      if (!this.formInline.applyDeadline) {
        this.$message.error("报名截止时间不能为空");
      } else {
        publish5(param)
          .then(res => {
            // console.log(res);
            if (res.code == 1) {
              this.$message.success("发布成功");
              this.$router.go(-1);
            } else {
              this.$message.error(res.message);
            }
          })
          .catch(res => {
            console.log(res);
          });
      }
    },
    // 确认流标
    publishLost() {
      let param = {
        id: this.formInline.id,
        status: 16
      };
      // console.log(param)
      publish16(param)
        .then(res => {
          // console.log(res);
          if (res.code == 1) {
            this.$message.success("流标成功");
            this.$router.go(-1);
          } else {
            this.$message.error(res.message);
          }
        })
        .catch(res => {
          console.log(res);
        });
    },
    // 选择供应商
    checkedServer(id, reqId) {
      this.selectServer.id = id;
      this.selectServer.requirementId = reqId;
    },
    // 提交选中供应商
    submitServer() {
      checkEnroll(this.selectServer)
        .then(res => {
          // console.log(res);
          if (res.code == 1) {
            this.$message.success("提交成功");
            this.$router.go(-1);
          } else {
            this.$message.error(res.message);
          }
        })
        .catch(res => {
          console.log(res);
        });
    },
    openDialog() {
      this.dialogFormVisible = true;
    },
    // 验收
    checkAccept() {
      // console.log(this.zbProVo)
      let param = {
        id: this.formInline.id,
        status: this.checkForm.radio,
        programId: this.zbProVo.id,
        checkAdvice: this.checkForm.advice
      };
      if (this.checkForm.advice != "") {
        checkAdvice(param)
          .then(res => {
            // console.log(res);
            if (res.code == 1) {
              this.$message.success("提交成功");
              this.$router.go(-1);
            } else {
              this.$message.error(res.message);
            }
          })
          .catch(res => {
            console.log(res);
          });
        this.dialogFormVisible = false;
      } else {
        this.$message.error("请填写验收意见");
      }
    },
    payFor() {
      // console.log("pay");
      this.$router.push({
        path: "/payPage",
        query: { requiredmentId: this.formInline.id }
      });
    }
  },
  created() {
    this.init();
  }
};
</script>

<style scoped lang="scss" type="text/scss">
.member-warp {
  /deep/ .el-textarea.is-disabled .el-textarea__inner {
    color: #333;
  }
  ul {
    margin-bottom: 20px;
  }
  .el-textarea {
    width: 90%;
  }
  /deep/ .el-form-item__label {
    width: 160px !important;
  }
  .button-box {
    text-align: center;
  }
  .check-status {
    text-align: right;
    margin-bottom: 10px;
  }
  background-color: #ffffff;
  .member-warp-content {
    padding: 0 20px;
    .condition-box {
      padding-bottom: 20px;
      border-bottom: dashed 1px #d0d0d0;
      .condition-item {
        .condition-item-title {
          color: #999999;
          padding-right: 20px;
        }
        .condition-item-info {
          display: inline-block;
          width: 160px;
        }
        .timeWidth {
          width: 600px;
        }
      }
    }
    .member-main {
      padding-top: 20px;
      padding-bottom: 20px;
      .options {
        padding: 10px 0;
        .options-left {
          .el-dropdown {
            margin: 0 10px !important;
          }
        }
      }
    }
  }
}
</style>
<style lang="scss">
.member-warp {
  .el-input {
    width: auto;
  }
  .condition-box {
    .el-scrollbar {
      .el-scrollbar__wrap {
        overflow-x: scroll !important;
      }
    }
  }
  .member-warp-content .is-horizontal.el-step{
    width:15%
  }
  .el-link.el-link--primary {
    color: #409EFF;
  }
}
</style>
