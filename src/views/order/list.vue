<template>
  <div class="member-warp">
    <div class="common-title">
      <h3>订单查询</h3>
    </div>
    <div class="member-warp-content">
      <div class="condition-box">
        <el-row>
          <el-col :span="4">
            <div class="condition-item">
              <label class="condition-item-title">订单编号:</label>
              <div class="condition-item-info">
                <el-input size="medium" placeholder="请输入内容" v-model="params.orderCode" clearable></el-input>
              </div>
            </div>
          </el-col>
          <el-col :span="4">
            <div class="condition-item">
              <label class="condition-item-title">买家账号:</label>
              <div class="condition-item-info">
                <el-input size="medium" placeholder="请输入内容" v-model="params.userName" clearable></el-input>
              </div>
            </div>
          </el-col>
          <el-col :span="4">
            <div class="condition-item">
              <label class="condition-item-title">订单状态:</label>
              <div class="condition-item-info">
                <el-select v-model="params.status" placeholder="请选择" :popper-append-to-body="false">
                  <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  ></el-option>
                </el-select>
              </div>
            </div>
          </el-col>
          <!-- <el-col :span="4">
                        <div class="condition-item">
                            <label class="condition-item-title">账号类型:</label>
                            <div class="condition-item-info">
                                <el-select v-model="params.userType" placeholder="请选择">
                                    <el-option
                                            v-for="item in options1"
                                            :key="item.value"
                                            :label="item.label"
                                            :value="item.value">
                                    </el-option>
                                </el-select>
                            </div>
                        </div>
                    </el-col>
                    <el-col :span="4">
                        <div class="condition-item">
                            <label class="condition-item-title">支付状态:</label>
                            <div class="condition-item-info">
                                <el-select v-model="params.payStatus" placeholder="请选择">
                                    <el-option
                                            v-for="item in options2"
                                            :key="item.value"
                                            :label="item.label"
                                            :value="item.value">
                                    </el-option>
                                </el-select>
                            </div>
                        </div>
          </el-col>-->
        </el-row>
        <el-row>
          <el-col :span="11">
            <div class="condition-item">
              <label class="condition-item-title">下单时间:</label>
              <div class="condition-item-info timeWidth">
                <el-date-picker
                  v-model="params.startTime"
                  type="date"
                  value-format="yyyy-MM-dd"
                  placeholder="选择日期"
                ></el-date-picker>
                <span style="margin-right: 10px;margin-left: 10px;">至</span>
                <el-date-picker
                  v-model="params.endTime"
                  type="date"
                  value-format="yyyy-MM-dd"
                  placeholder="选择日期"
                ></el-date-picker>
              </div>
            </div>
          </el-col>
          <el-col :span="11">
            <div class="condition-item">
              <label class="condition-item-title">订单金额:</label>
              <div class="condition-item-info timeWidth">
                <el-input size="medium" placeholder="请输入内容" v-model="params.startPayment" clearable></el-input>
                <span style="margin-right: 10px;margin-left: 10px;">至</span>
                <el-input size="medium" placeholder="请输入内容" v-model="params.endPayment" clearable></el-input>
              </div>
            </div>
          </el-col>
          <el-col :span="2">
            <div class="condition-item">
              <el-button type="danger" size="medium" @click="handleSearch">查询</el-button>
            </div>
          </el-col>
        </el-row>
      </div>
      <div class="member-main">
        <div class="options">
          <div class="options-left el-float-left">
            <el-dropdown @command="handlePageSizeChange">
              <el-button type="info" size="mini" plain>
                显示条数
                <i class="el-icon-arrow-down el-icon--right"></i>
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
          <el-table :data="listData" tooltip-effect="dark" style="width: 100%" border>
            <el-table-column type="index" label="序号" width="100"></el-table-column>
            <el-table-column prop="orderCode" label="订单编号"></el-table-column>
            <el-table-column prop="userName" label="买家账号"></el-table-column>
            <el-table-column prop="realName" label="实名认证"></el-table-column>
            <el-table-column prop="userType" label="类型"></el-table-column>
            <el-table-column prop="deposit" label="订单金额"></el-table-column>
            <el-table-column label="订单状态">
              <template slot-scope="scope">{{scope.row.status | orderStatus}}</template>
            </el-table-column>
            <el-table-column prop="createTime" label="订单时间" show-overflow-tooltip></el-table-column>
          </el-table>
          <div class="pagination-warp">
            <div class="pagination-box-left">
              共
              <span class="common-red-color">{{pagination.pages}}</span>页/
              <span class="common-red-color">{{pagination.total}}</span>条数据
            </div>
            <div class="pagination-box-right">
              <el-pagination
                @current-change="handleCurrentChange"
                :current-page.sync="params.pageNum"
                :page-size="params.pageSize"
                layout=" prev, pager, next"
                :total=" pagination.total"
              ></el-pagination>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { findOrderInfo } from "../../api/order/order";

export default {
  name: "",
  data() {
    return {
      options: [
        {
          value: "",
          label: "全部"
        },
        {
          value: "1",
          label: "待付定金"
        },
        {
          value: "2",
          label: "卖家服务中"
        },
        {
          value: "3",
          label: "待确认服务"
        },
        {
          value: "4",
          label: "订单结束"
        },
        {
          value: "5",
          label: "已取消"
        },
        {
          value: "6",
          label: "退款成功"
        }
      ],
      options1: [
        {
          value: "1",
          label: "个人"
        },
        {
          value: "2",
          label: "企业"
        }
      ],
      options2: [],
      value: "",
      //   tipData: {
      //     auditFeedback: "",
      //     accountStatus: ""
      //   },
      radio: "1",
      arr: ["全部", "待审核", "已通过", "未通过"],
      listData: [],
      params: {
        orderCode: "",
        userName: "",
        status: "", //订单状态（1待付定金，2卖家服务中，3待确认服务，4订单结束，5已取消，6退款成功）
        //   userType:'',//账号类型： 2个人 3企业
        //   payStatus:'',
        startPayment: "",
        endPayment: "",
        startTime: "",
        endTime: "",
        pageNum: 1,
        pageSize: 10
      },
      //审核参数
      soldOutForm: {
        //goodsId:"",
        auditFeedback: "",
        checkStatus: "1",
        userId: ""
      },
      pagination: {
        //分页参数
        total: null,
        pages: null
      },
      dialogFormVisible: false,
      examineVisible: false, //店铺审核弹窗
      rules: {
        auditFeedback: [
          { required: true, message: "请输入审核意见", trigger: "blur" }
        ]
      }
    };
  },
  watch: {},
  mounted() {
    this.init();
  },
  methods: {
    init() {
      this.getList();
    },
    getList() {
      findOrderInfo(this.params)
        .then(res => {
          // console.log("订单列表查询", res);
          this.listData = res.data.list;
          this.pagination.pageNum = res.data.pageNum;
          this.pagination.pageSize = res.data.pageSize;
          this.pagination.pages = res.data.pages;
          this.pagination.total = res.data.total;
        })
        .catch(res => {
          console.log(res);
        });
    },
    handleSearch() {
      this.params.pageNum = 1;
      this.getList();
    },
    handleCurrentChange() {
      this.getList();
    },
    handlePageSizeChange(data) {
      this.params.pageSize = data;
      this.getList();
    }
  },
  created(){
    this.init();
  }
};
</script>

<style scoped lang="scss" type="text/scss">
.member-warp {
  .el-col {
    margin-bottom: 20px;
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
}
</style>
