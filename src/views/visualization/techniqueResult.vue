<template>
  <div class="knownToproduce">
    <div class="platformBox">
      <!-- <p id="platform1" class="title">涉海技术成果概况</p> -->
      <el-input v-model="title1" style="width:270px;margin-bottom: 10px;margin-left: 6px;"></el-input>
      <el-button size="small" @click="updateTitle(101,title1)" type="primary">修改</el-button>
      <div class="box1Width">
        <!-- <p class="subTitle">涉海技术成果类别统计</p> -->
        <el-input v-model="title2" style="width:270px;margin-bottom: 10px;margin-left: 6px;"></el-input>
        <el-button size="small" @click="updateTitle(10101,title2)" type="primary">修改</el-button>
        <i class="el-icon-circle-plus-outline" style="right:19%" @click="add1"></i>
        <i class="el-icon-remove-outline" style="right:22%" @click="remove1"></i>
        <ul class="csyyList" style="position:relative">
          <li class="itemList3" v-for="(item, index) in box1" :key="index">
            <el-input v-model="item.type"></el-input>&nbsp;
            <el-input v-model="item.quantity"></el-input>&nbsp;
            <el-input v-model="item.percent"></el-input>
            <span class="unit">%</span>
          </li>
        </ul>
        <div style="text-align: center;margin: 20px auto">
          <!-- <el-button size="small" @click="cancel1">取消</el-button> -->
          <el-button size="small" @click="save1(box1)" type="primary">确定</el-button>
        </div>
      </div>

      <div class="box1Width">
        <!-- <p class="subTitle">涉海技术成果变化趋势</p> -->
        <el-input v-model="title3" style="width:270px;margin-bottom: 10px;margin-left: 6px;"></el-input>
        <el-button size="small" @click="updateTitle(10102,title3)" type="primary">修改</el-button>
        <i class="el-icon-circle-plus-outline" style="right:19%;margin-top: 35px;" @click="add2"></i>
        <i class="el-icon-remove-outline" style="right:22%;margin-top: 35px;" @click="remove2"></i>
        <ul class="csyyList">
          <li class="itemList3">
            <span></span>
            <span>新增量</span>
            <span>累计量</span>
          </li>
        </ul>
        <ul class="csyyList">
          <li class="itemList3" v-for="(item, index) in box2" :key="index">
            <el-input v-model="item.year"></el-input>&nbsp;
            <el-input v-model="item.increase"></el-input>&nbsp;
            <el-input v-model="item.total"></el-input>
          </li>
        </ul>
        <div style="text-align: center;margin: 20px auto">
          <!-- <el-button size="small" @click="cancel1">取消</el-button> -->
          <el-button size="small" @click="save2(box2)" type="primary">确定</el-button>
        </div>
      </div>
    </div>

    <div class="platformBox">
      <!-- <p id="platform1" class="title">涉海技术成果转化分析</p> -->
      <el-input v-model="title4" style="width:270px;margin-bottom: 10px;margin-left: 6px;"></el-input>
      <el-button size="small" @click="updateTitle(102,title4)" type="primary">修改</el-button>
      <div class="box1Width">
        <!-- <p class="subTitle">涉海技术成果应用趋势</p> -->
        <el-input v-model="title5" style="width:270px;margin-bottom: 10px;margin-left: 6px;"></el-input>
        <el-button size="small" @click="updateTitle(10201,title5)" type="primary">修改</el-button>
        <i class="el-icon-circle-plus-outline" style="right:19%" @click="add3"></i>
        <i class="el-icon-remove-outline" style="right:22%" @click="remove3"></i>
        <ul class="csyyList">
          <li class="itemList3" v-for="(item, index) in box3" :key="index">
            <el-input v-model="item.type"></el-input>&nbsp;
            <el-input v-model="item.quantity"></el-input>&nbsp;
            <el-input v-model="item.percent"></el-input>
            <span class="unit">%</span>
          </li>
        </ul>
        <div style="text-align: center;margin: 20px auto">
          <!-- <el-button size="small" @click="cancel1">取消</el-button> -->
          <el-button size="small" @click="save1(box3)" type="primary">确定</el-button>
        </div>
      </div>
      <div class="box1Width" style="margin-left: 13.6%;">
        <ul class="csyyList">
          <li class="itemList3">
            <el-input v-model="resultLabel"></el-input>&nbsp;
            <el-input v-model="resultValue"></el-input>
            <span class="unit">%</span>
          </li>
        </ul>
        <div style="text-align: center;margin: 20px auto">
          <!-- <el-button size="small" @click="cancel1">取消</el-button> -->
          <el-button size="small" @click="save7" type="primary">确定</el-button>
        </div>
      </div>
    </div>

    <div class="platformBox">
      <!-- <p id="platform1" class="title">涉海技术成果全国流动</p> -->
      <el-input v-model="title6" style="width:270px;margin-bottom: 10px;margin-left: 6px;"></el-input>
      <el-button size="small" @click="updateTitle(103,title6)" type="primary">修改</el-button>
      <div class="box1Width">
        <ul class="csyyList" style=" margin-left: -22%;">
          <li class="itemList3" v-for="(item, index) in box4" :key="index">
            <el-input v-model="item.title"></el-input>&nbsp;
            <el-input v-model="item.quality"></el-input>
          </li>
        </ul>
        <div style="text-align: center;margin: 20px auto">
          <!-- <el-button size="small" @click="cancel1">取消</el-button> -->
          <el-button size="small" @click="save3(box4)" type="primary">确定</el-button>
        </div>
      </div>
    </div>

    <div class="platformBox">
      <!-- <p id="platform1" class="title">涉海技术成果数是排行</p> -->
      <el-input v-model="title7" style="width:270px;margin-bottom: 10px;margin-left: 6px;"></el-input>
      <el-button size="small" @click="updateTitle(104,title7)" type="primary">修改</el-button>
      <div class="box1Width" style="margin-left: 14%;">
        <ul class="csyyList" style="float: left;width: 50%;">
          <li class="itemList3" v-for="(item, index) in box5" :key="index">
            <el-input v-model="item.area"></el-input>&nbsp;
            <el-input v-model="item.quality"></el-input>
            <span class="unit"></span>
          </li>
        </ul>
        <!-- <ul class="csyyList" style="float: right;width: 50%;">
          <li class="itemList3" v-for="(item, index) in box6" :key="index">
            <el-input v-model="item.zb"></el-input>&nbsp;
            <el-input v-model="item.value"></el-input>
            <span class="unit"></span>
          </li>
        </ul>-->
        <div style="text-align: center;margin: 40px auto">
          <!-- <el-button size="small" @click="cancel1">取消</el-button> -->
          <el-button size="small" @click="save4(box5)" type="primary">确定</el-button>
        </div>
      </div>
    </div>
    <div class="platformBox">
      <!-- <p id="platform1" class="title">四大领域分析</p> -->
      <el-input v-model="title8" style="width:270px;margin-bottom: 10px;margin-left: 6px;"></el-input>
      <el-button size="small" @click="updateTitle(105,title8)" type="primary">修改</el-button>
      <div class="box1Width">
        <ul class="csyyList">
          <li class="itemList3" v-for="(item, index) in box7" :key="index">
            <el-input v-model="item.type"></el-input>&nbsp;
            <el-input v-model="item.quantity"></el-input>&nbsp;
            <el-input v-model="item.percent"></el-input>
            <span class="unit">%</span>
          </li>
        </ul>
        <div style="text-align: center;margin: 20px auto">
          <!-- <el-button size="small" @click="cancel1">取消</el-button> -->
          <el-button size="small" @click="save1(box7)" type="primary">确定</el-button>
        </div>
      </div>

      <div class="box1Width">
        <!-- <p class="subTitle">科研文献发布情况分析</p> -->
        <el-input v-model="title9" style="width:270px;margin-bottom: 10px;margin-left: 6px;"></el-input>
        <el-button size="small" @click="updateTitle(10501,title9)" type="primary">修改</el-button>
        <ul class="csyyList" style="margin-left: -22%;">
          <li class="itemList3" v-for="(item, index) in box8" :key="index">
            <el-input v-model="item.title"></el-input>&nbsp;
            <el-input v-model="item.percent"></el-input>
            <span class="unit">%</span>
          </li>
        </ul>
        <div style="text-align: center;margin: 20px auto">
          <!-- <el-button size="small" @click="cancel1">取消</el-button> -->
          <el-button size="small" @click="save5(box8)" type="primary">确定</el-button>
        </div>
      </div>
    </div>
    <div class="platformBox">
      <!-- <p id="platform1" class="title">研发投入与成果输出量关联分析</p> -->
      <el-input v-model="title10" style="width:270px;margin-bottom: 10px;margin-left: 6px;"></el-input>
      <el-button size="small" @click="updateTitle(106,title10)" type="primary">修改</el-button>
      <div class="box1Width">
        <ul class="csyyList">
          <li class="itemList3">
            <span>投入</span>
            <span>产出</span>
          </li>
        </ul>
        <ul class="csyyList" style="margin-left: -24%;">
          <li class="itemList3" v-for="(item, index) in box9" :key="index">
            <el-input v-model="item.input"></el-input>&nbsp;
            <el-input v-model="item.quality"></el-input>
          </li>
        </ul>
        <div style="text-align: center;margin: 20px auto">
          <!-- <el-button size="small" @click="cancel1">取消</el-button> -->
          <el-button size="small" @click="save6(box9)" type="primary">确定</el-button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import {
  techTypesTotal,
  techResultChange,
  techResultFlow,
  techResulRank,
  techDocAnalysis,
  relateAnalysis,
  techTypesTotalSave,
  titleList,
  titleUpdate,
  techResultChangeSave,
  techResultFlowSave,
  techResulRankSave,
  techDocAnalysisSave,
  relateAnalysisSave
} from "../../api/ksh/ksh";

export default {
  name: "techniqueResult",
  data() {
    return {
      resultLabel: "",
      resultValue: "",
      title1: "",
      title2: "",
      title3: "",
      title4: "",
      title5: "",
      title6: "",
      title7: "",
      title8: "",
      title9: "",
      title10: "",
      box1: [],
      box2: [],
      box3: [],
      // talentFbLabel: "海洋高层次人才占比",
      // talentFbValue: "",
      // zhSuccessQS: "转化成功率趋势",
      box4: [],
      box5: [],
      // box6: [
      //   {
      //     zb: "中国海洋大学",
      //     value: ""
      //   },
      //   {
      //     zb: "厦门大学",
      //     value: ""
      //   },
      //   {
      //     zb: "中山大学",
      //     value: ""
      //   },
      //   {
      //     zb: "同济大学",
      //     value: ""
      //   },
      //   {
      //     zb: "浙江海洋大学",
      //     value: ""
      //   }
      // ],
      box7: [],
      box8: [],
      box9: [],
      params1: {
        teStatus: 1
      },
      params2: {
        teStatus: 2
      },
      params3: {
        teStatus: 3
      },
      params4: {
        pageNum: 0,
        pageSize: 0
      }
    };
  },
  mounted() {},
  methods: {
    init() {
      titleList({ titleCode: 101 })
        .then(res => {
          // console.log(res, "101");
          this.title1 = res.data.titleName;
        })
        .catch(res => {
          console.log(res);
        });
      titleList({ titleCode: 10101 })
        .then(res => {
          // console.log(res, "10101");
          this.title2 = res.data.titleName;
        })
        .catch(res => {
          console.log(res);
        });
      titleList({ titleCode: 10102 })
        .then(res => {
          // console.log(res, "10102");
          this.title3 = res.data.titleName;
        })
        .catch(res => {
          console.log(res);
        });
      titleList({ titleCode: 102 })
        .then(res => {
          // console.log(res, "102");
          this.title4 = res.data.titleName;
        })
        .catch(res => {
          console.log(res);
        });
      titleList({ titleCode: 10201 })
        .then(res => {
          // console.log(res, "10201");
          this.title5 = res.data.titleName;
        })
        .catch(res => {
          console.log(res);
        });
      titleList({ titleCode: 103 })
        .then(res => {
          // console.log(res, "103");
          this.title6 = res.data.titleName;
        })
        .catch(res => {
          console.log(res);
        });
      titleList({ titleCode: 104 })
        .then(res => {
          // console.log(res, "104");
          this.title7 = res.data.titleName;
        })
        .catch(res => {
          console.log(res);
        });
      titleList({ titleCode: 105 })
        .then(res => {
          // console.log(res, "105");
          this.title8 = res.data.titleName;
        })
        .catch(res => {
          console.log(res);
        });
      titleList({ titleCode: 10501 })
        .then(res => {
          // console.log(res, "10501");
          this.title9 = res.data.titleName;
        })
        .catch(res => {
          console.log(res);
        });
      titleList({ titleCode: 106 })
        .then(res => {
          // console.log(res, "106");
          this.title10 = res.data.titleName;
        })
        .catch(res => {
          console.log(res);
        });

      techTypesTotal(this.params1)
        .then(res => {
          // console.log("涉海类别1", res);
          this.box1 = res.data.list;
          // this.title1 = res.data.title;
        })
        .catch(res => {
          console.log(res);
        });
      techTypesTotal(this.params2)
        .then(res => {
          // console.log("涉海成果应用趋势", res);
          this.box3 = res.data.list;
        })
        .catch(res => {
          console.log(res);
        });
      techTypesTotal(this.params3)
        .then(res => {
          // console.log("四大领域", res);
          this.box7 = res.data.list;
        })
        .catch(res => {
          console.log(res);
        });
      techResultChange(this.params4)
        .then(res => {
          // console.log('涉海成果变化趋势',res);
          this.box2 = res.data.list;
        })
        .catch(res => {
          console.log(res);
        });
      techResultFlow(this.params4)
        .then(res => {
          // console.log('涉海成果全国流动',res);
          this.box4 = res.data.list;
        })
        .catch(res => {
          console.log(res);
        });
      techResulRank(this.params4)
        .then(res => {
          // console.log('涉海成果数量排行',res);
          this.box5 = res.data.list;
        })
        .catch(res => {
          console.log(res);
        });
      techDocAnalysis({ pstatus: 1, pageNum: 0, pageSize: 0 })
        .then(res => {
          // console.log('科研文献分析',res);
          this.box8 = res.data.list;
        })
        .catch(res => {
          console.log(res);
        });
      techDocAnalysis({ pstatus: 2, pageNum: 0, pageSize: 0 })
        .then(res => {
          // console.log("技术成果应用率", res);
          // this.box8 = res.data.list;
          this.resultLabel = res.data.list[0].title;
          this.resultValue = res.data.list[0].percent;
        })
        .catch(res => {
          console.log(res);
        });
      relateAnalysis(this.params4)
        .then(res => {
          // console.log("关联分析", res);
          this.box9 = res.data.list;
        })
        .catch(res => {
          console.log(res);
        });
    },
    add1() {
      // console.log('1111');
      this.box1.push({
        type: "",
        quantity: "",
        percent: "",
        teStatus: 1,
        headline: null
      });
    },
    add2() {
      // console.log('2222');
      this.box2.push({
        year: "",
        increase: "",
        total: ""
      });
    },
    add3() {
      // console.log('3333');
      this.box3.push({
        type: "",
        quantity: "",
        percent: "",
        teStatus: 2
      });
    },
    remove1() {
      this.box1.pop();
    },
    remove2() {
      this.box2.pop();
    },
    remove3() {
      this.box3.pop();
    },
    save1(data) {
      // console.log(data);
      techTypesTotalSave(data).then(res => {
        // console.log(res);
        if (res.code === 200) {
          this.$message.success("提交成功");
          this.init();
        } else {
          this.$message.error(res.msg);
        }
      });
    },
    save2(data) {
      techResultChangeSave(data)
        .then(res => {
          // console.log(res, "涉海技术成果变化趋势");
          if (res.code === 200) {
            this.$message.success("提交成功");
            this.init();
          } else {
            this.$message.error(res.msg);
          }
        })
        .catch(res => {
          console.log(res);
        });
    },
    save3(data) {
      techResultFlowSave(data)
        .then(res => {
          // console.log(res, "涉海技术成果全国流动");
          if (res.code === 200) {
            this.$message.success("提交成功");
            this.init();
          } else {
            this.$message.error(res.msg);
          }
        })
        .catch(res => {
          console.log(res);
        });
    },
    save4(data) {
      techResulRankSave(data)
        .then(res => {
          // console.log(res, "涉海技术成果数是排行");
          if (res.code === 200) {
            this.$message.success("提交成功");
            this.init();
          } else {
            this.$message.error(res.msg);
          }
        })
        .catch(res => {
          console.log(res);
        });
    },
    save5(data) {
      techDocAnalysisSave(data)
        .then(res => {
          // console.log(res, "文献");
          if (res.code === 200) {
            this.$message.success("提交成功");
            this.init();
          } else {
            this.$message.error(res.msg);
          }
        })
        .catch(res => {
          console.log(res);
        });
    },
    save6(data) {
      relateAnalysisSave(data)
        .then(res => {
          // console.log(res, "投入");
          if (res.code === 200) {
            this.$message.success("提交成功");
            this.init();
          } else {
            this.$message.error(res.msg);
          }
        })
        .catch(res => {
          console.log(res);
        });
    },
    save7() {
      let arrParamas = [
        {
          title: this.resultLabel,
          percent: this.resultValue,
          pstatus: 2
        }
      ]
      techDocAnalysisSave(arrParamas)
        .then(res => {
          // console.log(res, "技术成果应用率");
          if (res.code === 200) {
            this.$message.success("提交成功");
            this.init();
          } else {
            this.$message.error(res.msg);
          }
        })
        .catch(res => {
          console.log(res);
        });
    },
    updateTitle(code, title) {
      // console.log(code, title);
      let params = {
        titleCode: code,
        titleName: title
      };
      titleUpdate(params)
        .then(res => {
          // console.log(res);
          if (res.code === 200) {
            this.$message.success("修改成功");
            this.init();
          } else {
            this.$message.error(res.msg);
          }
        })
        .catch(res => {
          console.log(res);
        });
    }
  },
  components: {},
  created() {
    this.init();
  }
};
</script>
<style lang="scss" scoped>
.knownToproduce {
  .platformBox {
    width: 100%;
    //   height: calc(100vh - 60px);
    padding: 20px;
    box-sizing: border-box;
    overflow-y: scroll;
    overflow-x: hidden;
    .box1Width {
      width: 55%;
      margin: 0 auto;
      .csyyList {
        text-align: center;
        .itemList3 {
          text-align: center;
          width: 100%;
          display: inline-block;
          margin-bottom: 15px;
          margin-right: 20px;
          span {
            width: 33.3%;
            text-align: center;
            display: inline-block;
          }
          .label {
            display: inline-block;
            width: 30%;
            text-align: right;
          }
          .el-input {
            width: 30%;
          }
          .unit {
            display: inline-block;
            width: 5%;
          }
        }
      }
    }
  }
  .el-icon-circle-plus-outline {
    position: absolute;
    right: 30%;
    cursor: pointer;
  }
  .el-icon-remove-outline {
    position: absolute;
    right: 40%;
    cursor: pointer;
  }
  .subTitle {
    height: 50px;
    line-height: 50px;
    text-align: left;
    margin-left: 2%;
  }
}
</style>