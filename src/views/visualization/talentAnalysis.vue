<template>
    <div class="knownToproduce">
        <div class="platformBox">
            <div class="box1Width" style="margin-left: 12.6%;">
                <ul class="csyyList">
                <li class="itemList3" v-for="(item, index) in box10">
                    <el-input v-model="item.title"></el-input>
                    &nbsp;
                    <el-input v-model="item.updateTime"></el-input>
                 </li>
                </ul>
                    <div style="text-align: center;margin: 20px auto">
                        <!--<el-button size="small" @click="cancle1">取消</el-button>-->
                        <el-button size="small" @click="save10" type="primary">确定</el-button>
                    </div>
            </div>
        </div>
        <div class="platformBox">
        <!--<p id="platform1" class="title">海洋人才资源现状</p>-->
         <el-input v-model="title1"></el-input>
            <div style="margin-top: 20px">
                <el-button size="small" @click="saveTitle({titleCode:301,titleName:title1})" type="primary">确定</el-button>
            </div>
            <div class="box1Width">
            <!--<p class="subTitle">海洋人才资源构成</p>-->
             <el-input v-model="title2"></el-input>
            <div style="margin-top: 20px;margin-bottom:20px;">
                <el-button size="small" @click="saveTitle({titleCode:30101,titleName:title2})" type="primary">确定</el-button>
            </div>
            <ul class="csyyList" >
                <li class="itemList3" v-for="(item, index) in box1">
                <el-input v-model="item.type"></el-input>
                &nbsp;
                <el-input v-model="item.quantity"></el-input>
                 &nbsp;
                <el-input v-model="item.percent"></el-input>
                <span class="unit">%</span>
                </li>
            </ul>
            <div style="text-align: center;margin: 20px auto">
                <!--<el-button size="small" @click="cancle1">取消</el-button>-->
                <el-button size="small" @click="save1" type="primary">确定</el-button>
            </div>
            </div>

            <div class="box1Width">
                <!--<p class="subTitle">海洋人才学历占比</p>-->
                 <el-input v-model="title3"></el-input>
                <div style="margin-top: 20px;margin-bottom:20px;">
                    <el-button size="small" @click="saveTitle({titleCode:30102,titleName:title3})" type="primary">确定</el-button>
                </div>
                <ul class="csyyList" style=" margin-left: -22%;">
                    <li class="itemList3" v-for="(item, index) in box2">
                    <el-input v-model="item.title"></el-input>
                    &nbsp;
                    <el-input v-model="item.percent"></el-input>
                    <span class="unit">%</span>
                    </li>
                </ul>
                <div style="text-align: center;margin: 20px auto">
                    <!--<el-button size="small" @click="cancle1">取消</el-button>-->
                    <el-button size="small" @click="save2" type="primary">确定</el-button>
                </div>
            </div>
             <div class="box1Width">
                <!--<p class="subTitle">涉海行业就业趋势</p>-->
                 <el-input v-model="title4"></el-input>
                <div style="margin-top: 20px;margin-bottom:20px;">
                    <el-button size="small" @click="saveTitle({titleCode:30103,titleName:title4})" type="primary">确定</el-button>
                </div>
                <ul class="csyyList" style=" margin-left: -22%;">
                    <li class="itemList3" v-for="(item, index) in box3">
                    <el-input v-model="item.title"></el-input>
                    &nbsp;
                    <el-input v-model="item.quality"></el-input>
                    </li>
                </ul>
                <div style="text-align: center;margin: 20px auto">
                   <!-- <el-button size="small" @click="cancle1">取消</el-button>-->
                    <el-button size="small" @click="save3" type="primary">确定</el-button>
                </div>
            </div>
        </div>

          <div class="platformBox">
           <!-- <p id="platform1" class="title">各区域涉海高校数量</p>-->
            <el-input v-model="title5"></el-input>
                <div style="margin-top: 20px;margin-bottom:20px;">
                    <el-button size="small" @click="saveTitle({titleCode:302,titleName:title5})" type="primary">确定</el-button>
                </div>
            <div class="box1Width" style="margin-left: 14%;">
            <ul class="csyyList">
                <li class="itemList3" v-for="(item, index) in box4">
                <el-input v-model="item.title"></el-input>
                &nbsp;
                <el-input v-model="item.quality"></el-input>
                <span class="unit"></span>
                </li>
            </ul>
            <div style="text-align: center;margin: 20px auto">
                <!--<el-button size="small" @click="cancle1">取消</el-button>-->
                <el-button size="small" @click="save4" type="primary">确定</el-button>
            </div>
            </div>
        </div>

        <div class="platformBox">
            <!--<p id="platform1" class="title">全国海洋人才分布</p>-->
             <el-input v-model="title6"></el-input>
                <div style="margin-top: 20px;margin-bottom:20px;">
                    <el-button size="small" @click="saveTitle({titleCode:303,titleName:title6})" type="primary">确定</el-button>
                </div>
            <div class="box1Width" style="margin-left: 12.6%;">
                <ul class="csyyList" >
                    <li class="itemList3" v-for="(item, index) in box5">
                        <el-input v-model="item.title"></el-input>
                        &nbsp;
                        <el-input v-model="item.quality"></el-input>
                    </li>
                </ul>
                <div style="text-align: center;margin: 20px auto">
                    <!--<el-button size="small" @click="cancle1">取消</el-button>-->
                    <el-button size="small" @click="save5" type="primary">确定</el-button>
                </div>
            </div>
        </div>

        <div class="platformBox">
            <!--<p id="platform1" class="title">海洋专家库人才分析</p>-->
             <el-input v-model="title7"></el-input>
                <div style="margin-top: 20px;margin-bottom:20px;">
                    <el-button size="small" @click="saveTitle({titleCode:304,titleName:title7})" type="primary">确定</el-button>
                </div>
            <div class="box1Width" style="margin-left: 14%;">
            <ul class="csyyList">
                <li class="itemList3" v-for="(item, index) in box6">
                <el-input v-model="item.title"></el-input>
                &nbsp;
                <el-input v-model="item.quality"></el-input>
                <span class="unit"></span>
                </li>
            </ul>
            <div style="text-align: center;margin: 20px auto">
                <!--<el-button size="small" @click="cancle1">取消</el-button>-->
                <el-button size="small" @click="save6" type="primary">确定</el-button>
            </div>
            </div>
        </div>

        <div class="platformBox">
            <!--<p id="platform1" class="title">海洋高层次人才分析</p>-->
            <el-input v-model="title8"></el-input>
                <div style="margin-top: 20px;margin-bottom:20px;">
                    <el-button size="small" @click="saveTitle({titleCode:305,titleName:title8})" type="primary">确定</el-button>
                </div>
             <div class="box1Width">
                <el-input v-model="title11"></el-input>
                <div style="margin-top: 20px;margin-bottom:20px;">
                    <el-button size="small" @click="saveTitle({titleCode:30502,titleName:title11})" type="primary">确定</el-button>
                </div>  
              </div>
            <div class="box1Width" style="margin-left: 14%;">
            <ul class="csyyList">
                <li class="itemList3" v-for="(item, index) in box7">
                <el-input v-model="item.title"></el-input>
                &nbsp;
                <el-input v-model="item.percent"></el-input>
                <span class="unit">%</span>
                </li>
            </ul>
            <div style="text-align: center;margin: 20px auto">
                <!--<el-button size="small" @click="cancle1">取消</el-button>-->
                <el-button size="small" @click="save7" type="primary">确定</el-button>
            </div>
            </div>

            <div class="box1Width">
                <!--<p class="subTitle">海洋高层次人才分布</p>-->
                <el-input v-model="title9"></el-input>
                <div style="margin-top: 20px;margin-bottom:20px;">
                    <el-button size="small" @click="saveTitle({titleCode:30501,titleName:title9})" type="primary">确定</el-button>
                </div>
                <ul class="csyyList" style=" margin-left: -22%;">
                    <li class="itemList3" v-for="(item, index) in box8">
                    <el-input v-model="item.title"></el-input>
                    &nbsp;
                    <el-input v-model="item.quality"></el-input>
                     &nbsp;
                    <el-input v-model="item.max"></el-input>
                    </li>
                </ul>
                <div style="text-align: center;margin: 20px auto">
                   <!-- <el-button size="small" @click="cancle1">取消</el-button>-->
                    <el-button size="small" @click="save8" type="primary">确定</el-button>
                </div>
            </div>
        </div>

         <div class="platformBox">
            <!--<p id="platform1" class="title">海洋紧缺人才预警</p>-->
             <el-input v-model="title10"></el-input>
                <div style="margin-top: 20px;margin-bottom:20px;">
                    <el-button size="small" @click="saveTitle({titleCode:306,titleName:title10})" type="primary">确定</el-button>
                </div>
            <div class="box1Width" style="margin-left: 5%;position:relative">
            <i class="el-icon-remove-outline" style="right:6%;position:absolute" @click="remove1"></i>
            <i class="el-icon-circle-plus-outline" style="right:13%;"@click="add1"></i>
            <!--<i class="el-icon-remove-outline" style="right:22%" @click="remove1"></i>-->
            <ul class="csyyList">
                <li class="itemList3" v-for="(item, index) in box9">
                <el-input v-model="item.title"></el-input>
                 &nbsp;
                    <el-input v-model="item.quality"></el-input>
                </li>
            </ul>
            <div style="text-align: center;margin: 20px auto">
                <!--<el-button size="small" @click="cancle1">取消</el-button>-->
                <el-button size="small" @click="save9" type="primary">确定</el-button>
            </div>
            </div>
        </div>

    </div>
</template>
<script>
  import * as $api from  "../../api/ksh/talentAnalysis.js";
export default {
  name: "techniqueResult",
  data(){
    return{
          title1:"",
          title2:"",
          title3:"",
          title4:"",
          title5:"",
          title6:"",
          title7:"",
          title8:"",
          title9:"",
          title10:"",
          title11:'',
         box1: [
          {
            type: '海洋工程技术研究',
            quantity: '',
            percent: '',
            zbStatus:1,
          },{
            type: '海洋基础科学研究',
            quantity: '',
            percent: '',
            zbStatus:1,
          },{
            type: '海洋服务',
            quantity: '',
            percent: '',
            zbStatus:1,
          }],
          box2: [
            {
              title: '博士及以上',
              percent: '',
              perStatus:1
            },{
              title: '硕士研究者',
              percent: '',
               perStatus:1
            },{
              title: '本科',
              percent: '',
               perStatus:1
            },{
              title: '大专及以下',
              percent: '',
              perStatus:1
          }],
          resultLabel:'全国涉海技术成果数量',
          resultValue:'111',
           box3: [
          {
            title: '2012',
            quality: '',
            numStatus:1,
          },{
            title: '2013',
            quality: '',
            numStatus:1,
          },{
            title: '2014',
            quality: '',
            numStatus:1,
          },{
            title: '2015',
            quality: '',
            numStatus:1,
          },{
            title: '2016',
            quality: '',
            numStatus:1,
          },{
            title: '2017',
            value: '',
            numStatus:1,
          }],
          talentFbLabel:'海洋高层次人才占比',
          talentFbValue:'',
          zhSuccessQS:'转化成功率趋势',
           box4: [
          {
            title: '华北',
            quality: '',
            numStatus:2
          },{
            title: '华南',
            quality: '',
            numStatus:2
          },{
            title: '东北',
            quality: '',
            numStatus:2
          },{
            title: '华中',
            quality: '',
            numStatus:2
          },{
            title: '华东',
            quality: '',
            numStatus:2
          }],
            box5: [
          {
            title: '海洋发展战略与规划咨询专家库',
            quality: '32370',
            numStatus:3
          },{
            title: '海洋调查评价与科技创新咨询专家库',
            quality: '32370',
            numStatus:3
          },{
            title: '海洋资源资产管理与评估专家库',
            quality: '32370',
            numStatus:3
          },{
            title: '海域使用评审评估专家库',
            quality: '32370',
            numStatus:3
          },{
            title: '海岛保护与利用评审评估专家库',
            quality: '32370',
            numStatus:3
          },{
            title: '海洋生态保护与利用评审',
            quality: '32370',
            numStatus:3
          },{
            title: '海洋工程环境影响报告评审评估专家库',
            quality: '32370',
            numStatus:3
          },{
            title: '海洋工程勘察设计资质审核专家库',
            quality: '32370',
            numStatus:3
          },{
            title: '海洋可再生能源项目评审评估专家库',
            quality: '32370',
            numStatus:3
          },{
            title: '海洋工程科学技术奖评审专家库',
            quality: '32370',
            numStatus:3
          }],
           box6: [
          {
            title: '院士',
            quality: '',
            numStatus:4
          },{
            title: '国家人才计划',
            quality: '',
            numStatus:4
          },{
            title: '政府特殊津贴专家',
            quality: '',
            numStatus:4
          },{
            title: '海洋领域优秀科技青年',
            quality: '',
            numStatus:4
          },{
            title: '获得国家奖状专家',
            quality: '',
            numStatus:4
          },{
            title: '其他优秀人才',
            quality: '',
            numStatus:4
          }],
          box7:[{
              title:'海洋高层次人才占比',
              percent:'',
              perStatus:2
          }],
           box8:[ {
            title: '院士',
            quality: '',
            max:''
          },{
            title: '国家人才计划',
            quality: '',
             max:''
          },{
            title: '政府特殊津贴专家',
            quality: '',
             max:''
          },{
            title: '海洋领域优秀科技青年',
            quality: '',
             max:''
          },{
            title: '获得国家奖状专家',
            quality: '',
             max:''
          },{
            title: '其他优秀人才',
            quality: '',
             max:''
          }],
           box9:[{
              title:'',
              numStatus:5,
              quality:''
           },
           {
              title:'',
              numStatus:5,
               quality:''
           },{
             title:'',
              numStatus:5,
               quality:''
           }],
           box10:[{
             title:'更新时间',
             updateTime:'',
             tstatus:2
           }]
    }
  },
  mounted(){
    this.init()
  },
  methods:{
     init() {
       //海洋人才资源构成
        $api.selectPerson({
           zbStatus:1
        }).then(res => {
          this.box1 = res.data.list;
        })
        
        //海洋人才学历占比
        $api.selectZbPerson({
           perStatus:1
        }).then(res => {
          this.box2 = res.data.list;
        })

      //海洋高层次人才占比
        $api.selectZbPerson({
           perStatus:2
        }).then(res => {
          this.box7 = res.data.list;
        })

         //涉海行业就业趋势
        $api.kshPersonNum({
           numStatus:1
        }).then(res => {
          this.box3 = res.data.list;
        })

        //各区域涉海高校数量
         $api.kshPersonNum({
           numStatus:2
        }).then(res => {
          this.box4 = res.data.list;
        })

        //全国海洋人才分布
         $api.kshPersonNum({
           numStatus:3
        }).then(res => {
          this.box5 = res.data.list;
        })

          //海洋专家库人才分析
          $api.kshPersonNum({
           numStatus:4
        }).then(res => {
          this.box6 = res.data.list;
        })

        //海洋紧缺人才预警
        $api.kshPersonNum({
           numStatus:5
        }).then(res => {
          this.box9 = res.data.list;
        })

        //海洋高层次人才分布
        $api.kshPersonRadar({
           pageNum:0,
           pageSize:0
        }).then(res => {
          this.box8 = res.data.list;
        })

        //更新时间
        $api.kshIndustryTime({
           tstatus:2
        }).then(res => {
          this.box10 = res.data.list;
        })

        //标题回显
        let arr = [301,30101,30102,30103,302,303,304,305,30501,306,30502]
        arr.forEach((item,index) =>{
            $api.selectInfoByTitleCode({
            titleCode:item
          }).then(res => {
            switch(index){
              case 0:
                this.title1 = res.data.titleName;
                break;
              case 1:
                this.title2 = res.data.titleName;
                break;
              case 2:
                this.title3 = res.data.titleName;
                break;
              case 3:
                this.title4 = res.data.titleName;
                break;
              case 4:
                this.title5 = res.data.titleName;
                break;
              case 5:
                this.title6 = res.data.titleName;
                break;
              case 6:
                this.title7 = res.data.titleName;
                break;
              case 7:
                this.title8 = res.data.titleName;
                break;
              case 8:
                this.title9 = res.data.titleName;
                break;
              case 9:
                this.title10 = res.data.titleName;
                break;
                case 10:
                this.title11 = res.data.titleName;
                break;
            }
            
          })
        })
        

     },

     //更新时间
      save10(){
            $api.updateKshIndustryTime({
            tstatus:2,
            title:this.box10[0].title,
            updateTime:this.box10[0].updateTime
          }).then(res => {
            if(res.code === 200){
                  this.$message({
                    message: '数据更新成功',
                    type: 'success'
                  });
              }
          })  
      },
      save1(){
            $api.insertBatchKshPerson(
              this.box1
            ).then(res => {
              if(res.code === 200){
                  this.$message({
                    message: '数据更新成功',
                    type: 'success'
                  });
              }
          })  
      },
       save2(){
            $api.insertBatchKshPersonZb(
              this.box2
            ).then(res => {
              if(res.code === 200){
                  this.$message({
                    message: '数据更新成功',
                    type: 'success'
                  });
              }
          })  
      }, 
      save7(){
            $api.insertBatchKshPersonZb(
              this.box7
            ).then(res => {
              if(res.code === 200){
                  this.$message({
                    message: '数据更新成功',
                    type: 'success'
                  });
              }
          })  
      }, 
      save3(){
         $api.insertBatchKshPersonNum(
              this.box3
            ).then(res => {
              if(res.code === 200){
                  this.$message({
                    message: '数据更新成功',
                    type: 'success'
                  });
              }
          })  
      },
       save4(){
         $api.insertBatchKshPersonNum(
              this.box4
            ).then(res => {
              if(res.code === 200){
                  this.$message({
                    message: '数据更新成功',
                    type: 'success'
                  });
              }
          })  
      },
      save5(){
         $api.insertBatchKshPersonNum(
              this.box5
            ).then(res => {
              if(res.code === 200){
                  this.$message({
                    message: '数据更新成功',
                    type: 'success'
                  });
              }
          })  
      },
       save6(){
         $api.insertBatchKshPersonNum(
              this.box6
            ).then(res => {
              if(res.code === 200){
                  this.$message({
                    message: '数据更新成功',
                    type: 'success'
                  });
              }
          })  
      },
      save8(){
         $api.insertBatchKshPersonRadar(
              this.box8
            ).then(res => {
              if(res.code === 200){
                  this.$message({
                    message: '数据更新成功',
                    type: 'success'
                  });
              }
          })  
      },
    save9(){
            $api.insertBatchKshPersonNum(
                  this.box9
                ).then(res => {
                  if(res.code === 200){
                      this.$message({
                        message: '数据更新成功',
                        type: 'success'
                      });
                  }
              })  
          },
    add1() {
      this.box9.push({
        title: "",
        numStatus:5
      });
    },
    remove1(){
      this.box9.pop();
    },

    //根据titleCode，修改所有的标题
    saveTitle(param){
      $api.updateKshTitlename(param).then(res =>{
         if(res.code === 200){
                      this.$message({
                        message: '标题更新成功',
                        type: 'success'
                      });
                  }
      })
    }
  },
  components: {}
}
</script>
<style lang="scss" scoped>
.knownToproduce{
    padding-top:30px;
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
    .el-icon-circle-plus-outline{
        position: absolute;
        right: 30%;
        cursor:pointer;
    }
    .subTitle{
        height:50px;
        line-height:50px;
        text-align:left;
        margin-left:2%;
    }
  }
</style>
<style lang="scss">
.knownToproduce .platformBox .el-input {
    width: 20%;
}
</style>