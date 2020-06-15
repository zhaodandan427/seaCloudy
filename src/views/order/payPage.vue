<template>
  <div>
    <!-- <el-rate v-model="value" disabled show-score text-color="#ff9900" score-template="{value}"></el-rate> -->
    <ul class="info-list">
      <li>姓名：{{payName}}</li>
      <li>
        金额：
        <el-input v-model="infoData.refundAmount" placeholder="请输入内容" style="width: 400px;"></el-input>
      </li>
      <li>
        备注：
        <el-input
          type="textarea"
          :rows="5"
          placeholder="请输入内容"
          v-model="infoData.desc"
          style="width: 400px;"
        ></el-input>
      </li>
    </ul>
    <div class="button-box">
      <el-button type="primary" @click="submit">确认</el-button>
      <el-button type="primary" @click="goBack">返回</el-button>
    </div>
  </div>
</template>

<script>
import { selectRefundInfo, goRefund } from "../../api/order/requirement";
export default {
  name: "",
  data() {
    return {
      payName: "",
      infoData: {
        refundAmount: "",
        desc: "",
        requirementId: ""
      }
    };
  },
  methods: {
    init() {
      //   console.log(this.$route.query.requiredmentId);
      selectRefundInfo({ requiredmentId: this.$route.query.requiredmentId })
        .then(res => {
          console.log(res);
          this.payName = res.data;
          this.infoData.refundAmount = res.data2;
          this.infoData.requirementId = this.$route.query.requiredmentId;
        })
        .catch(res => {
          console.log(res);
        });
    },
    submit() {
      goRefund(this.infoData)
        .then(res => {
          console.log(res);
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
    goBack() {
      this.$router.go(-1);
    }
  },
  created() {
    this.init();
  }
};
</script>

<style lang="scss" scoped>
.info-list {
  width: 500px;
  margin: 0 auto;
  padding: 20px 0px;
  li {
    margin-bottom: 20px;
  }
}
.button-box {
  text-align: center;
  padding-bottom: 20px;
}
</style>