<template>
  <div class="industryIndexWapper">
    <div class="platformBox">
      <div class="box1Width" style="margin-left: 20.6%;">
        <ul class="csyyList">
          <li class="itemList3">
            <el-input v-model="timeTitle"></el-input>&nbsp;
            <el-input v-model="updateTime"></el-input>
          </li>
        </ul>
        <div style="text-align: center;margin: 20px auto">
          <!-- <el-button size="small" @click="cancel1">取消</el-button> -->
          <el-button size="small" @click="save1" type="primary">确定</el-button>
        </div>
      </div>
    </div>
    <div class="platformBox">
      <!-- <p id="platform1" class="title">涉海机构数量统计</p> -->
      <el-input v-model="title1" style="width:270px;margin-bottom: 10px;margin-left: 6px;"></el-input>
      <el-button size="small" @click="updateTitle(201,title1)" type="primary">修改</el-button>
      <div class="box1Width">
        <ul class="csyyList">
          <li class="itemList3" v-for="(item, index) in box1" :key="index">
            <el-input v-model="item.title"></el-input>&nbsp;
            <el-input v-model="item.quality"></el-input>
            <span class="unit"></span>
          </li>
        </ul>
        <div style="text-align: center;margin: 20px auto">
          <!-- <el-button size="small" @click="cancel2">取消</el-button> -->
          <el-button size="small" @click="save2" type="primary">确定</el-button>
        </div>
      </div>
    </div>

    <div class="platformBox">
      <!-- <p id="platform1" class="title">中国海洋科技创新指数</p> -->
      <el-input v-model="title2" style="width:270px;margin-bottom: 10px;margin-left: 6px;"></el-input>
      <el-button size="small" @click="updateTitle(202,title2)" type="primary">修改</el-button>
      <div class="box1Width">
        <ul class="csyyList">
          <li class="itemList3" v-for="(item, index) in box2" :key="index">
            <el-input v-model="item.title"></el-input>&nbsp;
            <el-input v-model="item.zbIndex"></el-input>
            <span class="unit"></span>
          </li>
        </ul>
        <div style="text-align: center;margin: 20px auto">
          <!-- <el-button size="small" @click="cancel2">取消</el-button> -->
          <el-button size="small" @click="save3(box2)" type="primary">确定</el-button>
        </div>
      </div>
    </div>

    <div class="platformBox">
      <!-- <p id="platform1" class="title">海洋生产总值占国内生产总值比重</p> -->
      <el-input v-model="title3" style="width:270px;margin-bottom: 10px;margin-left: 6px;"></el-input>
      <el-button size="small" @click="updateTitle(203,title3)" type="primary">修改</el-button>
      <div class="box1Width">
        <ul class="csyyList">
          <li class="itemList3" v-for="(item, index) in box3" :key="index">
            <el-input v-model="item.title"></el-input>&nbsp;
            <el-input v-model="item.zbIndex"></el-input>
            <span class="unit"></span>
          </li>
        </ul>
        <div style="text-align: center;margin: 20px auto">
          <!-- <el-button size="small" @click="cancel2">取消</el-button> -->
          <el-button size="small" @click="save3(box3)" type="primary">确定</el-button>
        </div>
      </div>
       <div class="box1Width">
        <ul class="csyyList">
          <li style="width:21%" class="itemList3" v-for="(item, index) in box6" :key="index">{{item}}</li>
        </ul>
      </div>
       <div class="box1Width">
        <ul class="csyyList">
          <li class="itemList3" v-for="(item, index) in box5" :key="index">
            <el-input v-model="item.year" style="width:22%"></el-input>&nbsp;
            <el-input v-model="item.percent"  style="width:22%"></el-input>&nbsp;% &nbsp;
            <el-input v-model="item.oceanProduct"  style="width:22%"></el-input>&nbsp;
            <el-input v-model="item.gdp"  style="width:22%"></el-input>
            <span class="unit"></span>
          </li>
        </ul>
        <div style="text-align: center;margin: 20px auto">
          <!-- <el-button size="small" @click="cancel2">取消</el-button> -->
          <el-button size="small" @click="save5(box5)" type="primary">确定</el-button>
        </div>
      </div>
    </div>

    <div class="platformBox">
      <!-- <p id="platform1" class="title">主要涉海产业产值比例</p> -->
      <el-input v-model="title4" style="width:270px;margin-bottom: 10px;margin-left: 6px;"></el-input>
      <el-button size="small" @click="updateTitle(204,title4)" type="primary">修改</el-button>
      <div class="box1Width">
        <ul class="csyyList">
          <li class="itemList3" v-for="(item, index) in box4" :key="index">
            <el-input v-model="item.title"></el-input>&nbsp;
            <el-input v-model="item.zbIndex"></el-input>
            <span class="unit"></span>
          </li>
        </ul>
        <div style="text-align: center;margin: 20px auto">
          <!-- <el-button size="small" @click="cancel2">取消</el-button> -->
          <el-button size="small" @click="save3(box4)" type="primary">确定</el-button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import {
  industryTime,
  insertTime,
  industryTotal,
  industryZb,
  industryTotalSave,
  industryZbSave,
  titleList,
  titleUpdate,
  barSave,
  barInsert
} from "../../api/ksh/ksh";

export default {
  name: "techniqueResult",
  data() {
    return {
      params: {
        pageNum: 0,
        pageSize: 0
      },
      // updateTime: [],
      updateTime: "",
      timeTitle: "",
      box1: [],
      box2: [],
      box3: [],
      box4: [],
      box5: [],
      box6:[
        '年份',
        '占比',
        '海洋生产总值',
        '国内生产总值'

      ],
      title1: "",
      title2: "",
      title3: "",
      title4: ""
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      titleList({ titleCode: 201 })
        .then(res => {
          console.log(res, "201");
          this.title1 = res.data.titleName;
        })
        .catch(res => {
          console.log(res);
        });
      titleList({ titleCode: 202 })
        .then(res => {
          console.log(res, "202");
          this.title2 = res.data.titleName;
        })
        .catch(res => {
          console.log(res);
        });
      titleList({ titleCode: 203 })
        .then(res => {
          console.log(res, "203");
          this.title3 = res.data.titleName;
        })
        .catch(res => {
          console.log(res);
        });
      titleList({ titleCode: 204 })
        .then(res => {
          console.log(res, "204");
          this.title4 = res.data.titleName;
        })
        .catch(res => {
          console.log(res);
        });

      industryTime({ tstatus: 1 })
        .then(res => {
          console.log("更新时间", res);
          this.updateTime = res.data.list[0].updateTime;
          this.timeTitle = res.data.list[0].title;
        })
        .catch(res => {
          console.log(res);
        });
      industryTotal(this.params)
        .then(res => {
          // console.log("涉海机构数量统计", res);
          this.box1 = res.data.list;
        })
        .catch(res => {
          console.log(res);
        });
      industryZb({ zbStatus: 1 })
        .then(res => {
          // console.log("创新指数", res);
          this.box2 = res.data.list;
        })
        .catch(res => {
          console.log(res);
        });
      industryZb({ zbStatus: 2 })
        .then(res => {
          // console.log("比重", res);
          this.box3 = res.data.list;
        })
        .catch(res => {
          console.log(res);
        });
      industryZb({ zbStatus: 3 })
        .then(res => {
          // console.log("产值比例", res);
          this.box4 = res.data.list;
        })
        .catch(res => {
          console.log(res);
        });
        barSave(this.params)
        .then(res => {
          // console.log("涉海机构数量统计", res);
          this.box5 = res.data.list;
        })
        .catch(res => {
          console.log(res);
        });
    },
    save1() {
      // console.log(this.updateTime);
      insertTime({
        tstatus: 1,
        updateTime: this.updateTime,
        title: this.timeTitle
      })
        .then(res => {
          console.log(res);
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
    cancel1() {},
    save2() {
      // console.log("机构数量提交");
      let arr = this.box1;
      industryTotalSave(this.box1)
        .then(res => {
          // console.log(res);
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
    cancel2() {},
    save3(param) {
      // console.log(param);
      industryZbSave(param)
        .then(res => {
          // console.log(res);
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
    save5(param){
      barInsert(param)
        .then(res => {
             if (res.code === 200) {
            this.$message.success("提交成功");
            this.init();
          } else {
            this.$message.error(res.msg);
          }
        })
    },
    updateTitle(code, title) {
      console.log(code, title);
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
  components: {}
};
</script>
<style lang="scss" scoped>
.industryIndexWapper {
  .platformBox {
    width: 100%;
    //   height: calc(100vh - 60px);
    padding: 20px;
    box-sizing: border-box;
    overflow-y: scroll;
    overflow-x: hidden;
    .box1Width {
      width: 55%;
      text-align: center;
      margin: 0 auto;
      .csyyList {
        .itemList3 {
          text-align: center;
          width: 100%;
          display: inline-block;
          margin-bottom: 15px;
          margin-right: 20px;
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
}
</style>