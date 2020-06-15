<template>
  <div class="console-wrap">
    <el-row :gutter="20">
      <el-col :span="12">
        <el-card shadow="always">
          <div class="title-header">
            <p class="title">&nbsp;&nbsp;订单信息</p>
          </div>
          <div>
            <p>待付款订单：{{listDataOrder.notPaid}}</p>
            <p>已付款订单：{{listDataOrder.paid}}</p>
            <p>已取消订单：{{listDataOrder.cancelPaid}}</p>
          </div>
        </el-card>
        <div class="box"></div>
        <el-card shadow="always">
          <div class="title-header">
            <p class="title">&nbsp;&nbsp;用户信息</p>
          </div>
          <p>用户总数：{{listDataMember.allUserCount}}</p>
          <p>购买过商品用户：{{listDataOrder.usefulUserCount}}</p>
          <p>待审核用户：{{listDataMember.checkUserCount}}</p>
          <p>实名用户：{{listDataMember.authUserCount}}</p>
          <p>已关闭用户：{{listDataMember.disabledUserCount}}</p>
        </el-card>
      </el-col>
      <el-col :span="12">
        <el-card shadow="always">
          <div class="title-header">
            <p class="title">&nbsp;&nbsp;商品信息</p>
          </div>
          <p>上架商品：{{listDataGoods.soldInGoods}}</p>
          <p>下架商品：{{listDataGoods.soldOutGoods}}</p>
          <p>销售商品：{{listDataOrder.sellCount}}</p>
          <p>商品分类：{{listDataGoods.goodsTypes}}</p>
        </el-card>
        <div class="box"></div>
        <el-card shadow="always">
          <div class="title-header">
            <p class="title">&nbsp;&nbsp;平台介绍</p>
          </div>
          <p>平台所有者：海上云交易中心</p>
          <p>传真：0759-3823899</p>
          <p>地址：广东省湛江市赤坎区海田路288号金海酒店8709室</p>
          <p>邮箱：cherryhuang@zs-bigdata.com</p>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import {
  findStatistics,
  findStatisticsUser,
  selectGoodsControl
} from "../../api/console/console";

export default {
  name: "",
  data() {
    return {
      listDataOrder: {},
      listDataMember: {},
      listDataGoods: {}
    };
  },
  methods: {
    getList() {
      findStatistics()
        .then(res => {
          console.log("订单列表查询", res);
          this.listDataOrder = res;
          console.log(this.listDataOrder, "----------");
        })
        .catch(res => {
          console.log(res);
        });
      findStatisticsUser()
        .then(res => {
          console.log("会员信息查询", res);
          this.listDataMember = res;
        })
        .catch(res => {
          console.log(res);
        });
      selectGoodsControl()
        .then(res => {
          console.log("商品信息查询", res);
          this.listDataGoods = res;
        })
        .catch(res => {
          console.log(res);
        });
    }
  },
  created() {
    this.getList();
  }
};
</script>

<style lang="scss" type="text/scss">
.console-wrap {
  padding: 30px;
  height: 1000px;
  .title-header {
    .title {
      border-left: 3px solid #ff9600;
      font-size: 16px;
      font-weight: bold;
      height: 22px;
      line-height: 22px;
      padding: 0px;
    }
  }
  p {
    border-bottom: 1px solid #f0f0f0;
    height: 40px;
    line-height: 40px;
    padding-left: 40px;
  }
  .box {
    height: 20px;
    width: 100%;
  }
}
</style>
