<template>
    <div class="knownToproduce">
        <div class="platformBox">
            <div class="box1Width" style="margin-left: 14%;">
                <ul class="csyyList">
                    <li class="itemList3">
                        <el-input v-model="box0[0].area"></el-input>
                        &nbsp;
                        <el-input v-model="box0[1].area"></el-input>
                        <span class="unit"></span>
                    </li>
                </ul>
                <el-input v-model="box0[2].area" style="width:400px;margin-bottom:20px;float: left;margin-left: 17%;"></el-input>
                <ul class="csyyList">
                    <li class="itemList3">
                        <el-input v-model="box0[3].area"></el-input>
                        &nbsp;
                        <el-input style="opacity:0;" ></el-input>
                        <span class="unit"></span>
                    </li>
                    <li class="itemList3">
                        <el-input v-model="box0[4].area"></el-input>
                        &nbsp;
                        <el-input style="opacity:0;" ></el-input>
                        <span class="unit"></span>
                    </li>
                    <li class="itemList3">
                        <el-input v-model="box0[5].area"></el-input>
                        &nbsp;
                        <el-input style="opacity:0;"></el-input>
                        <span class="unit"></span>
                    </li>
                    <li class="itemList3">
                        <el-input v-model="box0[6].area"></el-input>
                        &nbsp;
                        <el-input style="opacity:0;" ></el-input>
                        <span class="unit"></span>
                    </li>
                    <li class="itemList3">
                        <el-input v-model="box0[7].area"></el-input>
                        &nbsp;
                        <el-input style="opacity:0;"></el-input>
                        <span class="unit"></span>
                    </li>
                </ul>
                <div style="text-align: center;margin: 20px auto">
                    <el-button size="small" @click="save0" type="primary">确定</el-button>
                </div>
            </div>
        </div>
        <div class="platformBox">
            <div class="box1Width">
            <ul class="csyyList">
                <li class="itemList3" v-for="(item, index) in box1">
                <el-input v-model="item.type"></el-input>
                &nbsp;
                <el-input v-model="item.quantity"></el-input>
                 &nbsp;
                <el-input v-model="item.amount"></el-input>
                <span class="unit"></span>
                </li>
            </ul>
            <div style="text-align: center;margin: 20px auto">
                <el-button size="small" @click="save1" type="primary">确定</el-button>
            </div>
            </div>
        </div>
          <div class="platformBox">
            <div class="box1Width" style="margin-left: 14%;">
             <el-input v-model="box2[0].quantity" style="width:250px;margin-bottom:20px;float: left;margin-left: 17%;"></el-input>
            <ul class="csyyList">
                <li class="itemList3">
                <el-input v-model="box2[1].type"></el-input>
                &nbsp;
                <el-input v-model="box2[1].quantity"></el-input>
                <span class="unit"></span>
                </li>
                <li class="itemList3">
                    <el-input v-model="box2[2].type"></el-input>
                    &nbsp;
                    <el-input v-model="box2[2].quantity"></el-input>
                    <span class="unit"></span>
                </li>
                <li class="itemList3">
                    <el-input v-model="box2[3].type"></el-input>
                    &nbsp;
                    <el-input v-model="box2[3].quantity"></el-input>
                    <span class="unit"></span>
                </li>
                <li class="itemList3">
                    <el-input v-model="box2[4].type"></el-input>
                    &nbsp;
                    <el-input v-model="box2[4].quantity"></el-input>
                    <span class="unit"></span>
                </li>
                <li class="itemList3">
                    <el-input v-model="box2[5].type"></el-input>
                    &nbsp;
                    <el-input v-model="box2[5].quantity"></el-input>
                    <span class="unit"></span>
                </li>
                <li class="itemList3">
                    <el-input v-model="box2[6].type"></el-input>
                    &nbsp;
                    <el-input v-model="box2[6].quantity"></el-input>
                    <span class="unit"></span>
                </li>
            </ul>
            <div style="text-align: center;margin: 20px auto">
                <el-button size="small" @click="save2" type="primary">确定</el-button>
            </div>
            </div>
        </div>
    </div>
</template>
<script>
  import {insertKshIntellectual,selectList,insertBatchKshPersonWarn,kshPersonWarnselectList} from "../../api/ksh/kshBottom";
export default {
  name: "techniqueResult",
  data(){
    return{
      box0: [
        {
          area: '产权交易'
        },
        {
          area: '产权交易'
        },
        {
          area: '产权交易'
        },
        {
          area: '产权交易'
        },
        {
          area: '产权交易'
        },
        {
          area: '产权交易'
        },
        {
          area: '产权交易'
        },
        {
          area: '产权交易'
        },
        ],
         box1: [
          {
            id:1,
            inStatus:1,
            type: '专利',
            quantity: '',
            amount: '',
          },{
             id:2,
             inStatus:1,
            type: '商标',
            quantity: '',
            amount: '',
          },{
             id:7,
             inStatus:1,
            type: '版权',
            quantity: '',
            amount: '',
          },{
             id:8,
           inStatus:1,
            type: '综合服务',
            quantity: '',
            amount: '',
          }],
          sumNumber:'',
           box2: [
             {
               id:3,
               inStatus:2,
               type: '',
               amount: ''
             },
          {
            id:4,
            inStatus:2,
            type: '入驻服务',
            amount: ''
          },{
            id:5,
            inStatus:2,
            type: '涉海需求',
            amount: ''
          },{
               id:6,
            inStatus:2,
            type: '高校合作研发',
            amount: ''
          },{
               id:9,
            inStatus:2,
            type: '专家',
            amount: ''
          },{
               id:10,
            inStatus:2,
            type: '联合开发',
            amount: ''
          },{
               id:11,
            inStatus:2,
            type: '定制开发',
            amount: ''
          }],
      params:{

      }
    }
  },
  mounted(){
     this.init()
  },
  methods:{
    init(){
      this.getList()
      this.getList2()
      this.getList0()
    },
    save0(){
      insertBatchKshPersonWarn(this.box0).then( res=> {
        console.log('模块1提交',res);
        if(res.code == 200){
          this.$message.success('提交成功')
          this.init()
        }else{
          //this.$message.error(res.msg)
        }
      }).catch((res)=> {
        this.$message.error(res)
        //console.log('出错了',res)
      })
    },
    save1(){
      insertKshIntellectual(this.box1).then( res=> {
        console.log('知识产权接111口提交',res);
        if(res.code == 200){
          this.$message.success('提交成功')
          this.init()
        }else{
          //this.$message.error(res.msg)
        }
      }).catch((res)=> {
        this.$message.error(res)
        //console.log('出错了',res)
      })
    },
    save2(){
      insertKshIntellectual(this.box2).then( res=> {
        console.log('需求供需平台接口提交',res);
        if(res.code == 200){
          this.$message.success('提交成功')
          this.init()
        }else{
          this.$message.error(res)
        }
      }).catch((res)=> {
        this.$message.error(res)
      })
    },

    getList0(){
      kshPersonWarnselectList({}).then( res=> {
        console.log('模块1回显',res);
        this.box0=res.list;
      }).catch((res)=> {
        console.log('出错了',res)
      })
    },
    getList(){
      selectList({inStatus:1}).then( res=> {
        console.log('知识产权接口回显',res);
        this.box1=res.list;
      }).catch((res)=> {
        console.log('出错了',res)
      })
    },
    getList2(){
      selectList({inStatus:2}).then( res=> {
        console.log('需求供需平台接口回显',res);
        this.box2=res.list;
      }).catch((res)=> {
        console.log('出错了',res)
      })
    },
    cancle1(){

    },
    cancle2(){

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
  }
</style>
