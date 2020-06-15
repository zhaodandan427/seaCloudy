<template>
    <div class="knownToproduce">
        <!--时间-->
        <div class="platformBox">
            <div class="box1Width" style="margin-left: 12.6%;">
                <ul class="csyyList">
                <li class="itemList3">
                    <el-input v-model="updateTimeLabel"></el-input>
                    &nbsp;
                    <el-input v-model="updateTimeValue"></el-input>
                 </li>
                </ul>
                    <div style="text-align: center;margin: 20px auto">
                        <el-button size="small" @click="save1(1)" type="primary">确定</el-button>
                    </div>
            </div>
        </div>
        <!--用户类型分析-->
        <div class="platformBox">
         <p id="platform1" class="title"></p>
            <el-input v-model="title1"></el-input>
            <div style="margin-top: 20px">
                <el-button size="small" @click="save1(12)" type="primary">确定</el-button>
            </div>
            <div class="box1Width" style="position:relative">
                <i class="el-icon-circle-plus-outline" @click="AddList(1)"></i>
                <i class="el-icon-remove-outline" @click="removeList(1)"></i>
                <ul class="csyyList">
                    <li class="itemList3" v-for="(item, index) in box1">
                    <el-input v-model="item.type"></el-input>
                    &nbsp;
                    <el-input v-model="item.quality"></el-input>
                     &nbsp;
                    <el-input v-model="item.mindex"></el-input>
                    <span class="unit"></span>
                    </li>
                </ul>
                <div style="text-align: center;margin: 20px auto">
                    <el-button size="small" @click="save1(2)" type="primary">确定</el-button>
                </div>
            </div>
        </div>
        <!--用户需求分析-->
          <div class="platformBox">
            <p id="platform1" class="title"></p>
              <el-input v-model="title2"></el-input>
              <div style="margin-top: 20px">

                  <el-button size="small" @click="save1(13)" type="primary">确定</el-button>
              </div>
            <div class="box1Width" style="margin-left: 14%;">
            <ul class="csyyList">
                <li class="itemList3" v-for="(item, index) in box2">
                <el-input v-model="item.title"></el-input>
                &nbsp;
                <el-input v-model="item.mindex"></el-input>
                <span class="unit"></span>
                </li>
            </ul>
            <div style="text-align: center;margin: 20px auto">

                <el-button size="small" @click="save1(3)" type="primary">确定</el-button>
            </div>
            </div>
        </div>
        <!--平台交易额-->
        <div class="platformBox">
            <div class="box1Width" style="margin-left: 12.6%;">
                <ul class="csyyList">
                    <li class="itemList3">
                        <el-input v-model="flatMoneyLabel"></el-input>
                        &nbsp;
                        <el-input v-model="flatMoneyValue"></el-input>
                    </li>
                </ul>
                <div style="text-align: center;margin: 20px auto">

                    <el-button size="small" @click="save1(4)" type="primary">确定</el-button>
                </div>
            </div>
        </div>
        <!--交易种类分析-->
        <div class="platformBox">
            <p id="platform1" class="title"></p>
            <el-input v-model="title3"></el-input>
            <div style="margin-top: 20px">

                <el-button size="small" @click="save1(14)" type="primary">确定</el-button>
            </div>
            <div class="box1Width" style="margin-left: 14%;">
            <ul class="csyyList">
                <li class="itemList3" v-for="(item, index) in box3">
                <el-input v-model="item.title"></el-input>
                &nbsp;
                <el-input v-model="item.mindex"></el-input>
                <span class="unit"></span>
                </li>
            </ul>
            <div style="text-align: center;margin: 20px auto">

                <el-button size="small" @click="save1(5)" type="primary">确定</el-button>
            </div>
            </div>
        </div>
        <!--中试转化分析-->
        <div class="platformBox">
            <p id="platform1" class="title"></p>
            <el-input v-model="title4"></el-input>
            <div style="margin-top: 20px;margin-bottom: 20px">

                <el-button size="small" @click="save1(15)" type="primary">确定</el-button>
            </div>
            <div class="box1Width" style="margin-left: 14%;">
                <!--<el-input v-model="zhSuccessQS" style="width: 62%;margin-left: -5%;margin-bottom:20px;"></el-input>-->
            <ul class="csyyList">
                <!--转化成功率-->
                <li class="itemList3">
                <el-input v-model="zhSuccess"></el-input>
                &nbsp;
                <el-input v-model="zhSuccessValue"></el-input>
                <span class="unit"></span>
                </li>
                <div style="margin-top: 20px;margin-bottom: 20px">

                    <el-button size="small" @click="save1(6)" type="primary">确定</el-button>
                </div>
            </ul>
                <!--标题 --转化成功率趋势-->
             <el-input v-model="zhSuccessQS" style="width: 62%;margin-left: -5%;margin-bottom:20px;"></el-input>
                <div style="margin-top: 20px;margin-bottom: 20px">

                    <el-button size="small" @click="save1(16)" type="primary">确定</el-button>
                </div>
               <ul class="csyyList">
                <!--转化成功率趋势-->
                <li class="itemList3" v-for="(item, index) in boxTrend">
                <el-input v-model="item.title"></el-input>
                &nbsp;
                <el-input v-model="item.mindex"></el-input>
                <span class="unit"></span>
                </li>
            </ul>
            <div style="text-align: center;margin: 20px auto">

                <el-button size="small" @click="save1(17)" type="primary">确定</el-button>
            </div>
            </div>
        </div>
        <!--交易记录-->
         <div class="platformBox">
         <p id="platform1" class="title"></p>
             <el-input v-model="titleTrade"></el-input>
             <div style="margin-top: 20px">

                 <el-button size="small" @click="save1(18)" type="primary">确定</el-button>
             </div>
            <div class="box1Width" style="position:relative">
                <i class="el-icon-circle-plus-outline" @click="AddList(2)"></i>
                <i class="el-icon-remove-outline" @click="removeList(2)"></i>
            <ul class="csyyList">
                <li class="itemList3" v-for="(item, index) in box5">
                <el-input v-model="item.type" style="width:24%"></el-input>

                <el-input v-model="item.brif" style="width:24%"></el-input>
                 &nbsp;
                <el-input v-model="item.account" style="width:20%"></el-input>
                  &nbsp;
                <el-input v-model="item.createTime" style="width:20%"></el-input>
                </li>
            </ul>
            <div style="text-align: center;margin: 20px auto">

                <el-button size="small" @click="save1(7)" type="primary">确定</el-button>
            </div>
            </div>
        </div>
        <!--科技金融撮合合作分析-->
        <div class="platformBox">
            <p id="platform1" class="title"></p>
            <el-input v-model="titleKeji"></el-input>
            <div style="margin-top: 20px">

                <el-button size="small" @click="save1(19)" type="primary">确定</el-button>
            </div>
            <div class="box1Width">
            <ul class="csyyList">
                <!--最后增加的标题-->
                <el-input v-model="titleadd"></el-input>
                <div style="margin-top: 20px;margin-bottom: 20px">

                    <el-button size="small" @click="save1(22)" type="primary">确定</el-button>
                </div>
                <li class="itemList3 elMutal topList" v-for="(item, index) in box7">
                    <!--<el-input style="opacity: 0;"></el-input>-->
                    <el-input v-model="item.type"></el-input>
                    <el-input v-model="item.account"></el-input>
                    <el-input v-model="item.max"></el-input>

                </li>
            </ul>
            <div style="text-align: center;margin: 20px auto">

                <el-button size="small" @click="save1(8)" type="primary">确定</el-button>
            </div>
            </div>

            <!--标题-->
            <div class="box1Width">
             <p class="subTitle"></p>
                <el-input v-model="titlePrice" style="width: 40%;"></el-input>
                <div style="margin-top: 20px">

                    <el-button size="small" @click="save1(20)" type="primary">确定</el-button>
                </div>
            <ul class="csyyList">
                <li class="itemList3 elMutal" v-for="(item, index) in box8">
                <el-input v-model="item.createTime"></el-input>
                &nbsp;
                <el-input v-model="item.yhAccount"></el-input>
                  &nbsp;
                <el-input v-model="item.dbAccount"></el-input>
                  &nbsp;
                <el-input v-model="item.xtAccount"></el-input>
                  &nbsp;
                <el-input v-model="item.ftAccount"></el-input>
                  &nbsp;
                <el-input v-model="item.smAccount"></el-input>
                  &nbsp;
                <el-input v-model="item.bxAccount"></el-input>
                </li>
            </ul>
            <div style="text-align: center;margin: 20px auto">
                <el-button size="small" @click="save1(9)" type="primary">确定</el-button>
            </div>
            </div>
        </div>
        <!--海洋知识产权交易分析-->
         <div class="platformBox">
            <p id="platform1" class="title"></p>
             <el-input v-model="title6"></el-input>
             <div style="margin-top: 20px">
                 <el-button size="small" @click="save1(21)" type="primary">确定</el-button>
             </div>
            <div class="box1Width" style="margin-left: 14%;">
            <ul class="csyyList">
                <li class="itemList3" v-for="(item, index) in box6">
                <el-input v-model="item.title"></el-input>
                &nbsp;
                <el-input v-model="item.mindex"></el-input>
                <span class="unit">%</span>
                </li>
            </ul>
            <div style="text-align: center;margin: 20px auto">
                <el-button size="small" @click="save1(10)" type="primary">确定</el-button>
            </div>
            </div>
        </div>

    </div>
</template>
<script>
  import {
    insertKshMarket,
    insertKshIndustryTime,
    timeSelectList,
    AnalysisSelectList,
    insertBatchKshMarketAnalysis,
    insertBatchKshMarket,
    kshMarketselectList,
    kshMarketselectList2,
    kshMarketDetailselectList,
    insertBatchKshMarketDetail,
    insertBatchKshMarketTendencyAnalysis,
    kshMarketTendencyAnalysisselectList,
    insertBatchKshMarketTendency,
    kshMarketTendencyselectList,
    updateKshTitlename,
    selectInfoByTitleCode,
  } from "../../api/ksh/kshBottom";
export default {
  name: "techniqueResult",
  data(){
    return{
        updateTimeLabel:'更新时间',
        updateTimeValue:'2019-08-12',
        title1:'用户类型分析',
        title2:'用户需求分析',
        title3:'交易种类分析',
        title4:'中试转化分析',
        title6:'海洋知识产权交易分析',
        titleTrade:'交易记录',
        titlePrice:'各类金融机构撮合金额趋势分析',
        titleKeji:'科技金融撮合合作分析',
        titleadd:'标题',
         box1: [
         /* {
            type: '企业',
            quality: '',
            mindex: '',
          },{
            type: '个人',
            quality: '',
            mindex: '',
          },{
            type: '科研院校',
            quality: '',
            mindex: '',
          },{
            type: '海洋探测',
            quality: '',
            mindex: '',
          },{
            type: '海洋开发',
            quality: '',
            mindex: '',
          },{
            type: '海洋装备',
            quality: '',
            mindex: '',
          },{
            type: '海洋新材料',
            quality: '',
            mindex: '',
          },{
            type: '海洋高科技服务',
            quality: '',
            mindex: '',
          }*/],
           box2: [
          {
            type: '中式服务',
            value: ''
          },{
            type: '科技金融',
            value: ''
          },{
            type: '专利技术交易',
            value: ''
          },{
            type: '产权事务运营',
            value: ''
          },{
            type: '合作开发',
            value: ''
          }],
          flatMoneyLabel:'平台交易额',
          flatMoneyValue:'111',
           box3: [
          {
            type: '发明专利',
            value: ''
          },{
            type: '技术成果',
            value: ''
          },{
            type: '实用新型',
            value: ''
          },{
            type: '软件著作',
            value: ''
          },{
            type: '外观设计',
            value: ''
          },{
            type: '商标',
            value: ''
          },{
            type: '涉海数据',
            value: ''
          },{
            type: '其他',
            value: ''
          }],
          zhSuccess:'转化成功率',
          zhSuccessValue:'',
          zhSuccessQS:'转化成功率趋势',
          box4: [
          {
            type: '2011',
            value: ''
          },{
            type: '2012',
            value: ''
          },{
            type: '2013',
            value: ''
          },{
            type: '2014',
            value: ''
          },{
            type: '2015',
            value: ''
          },{
            type: '2016',
            value: ''
          },{
            type: '2017',
            value: ''
          },{
            type: '2018',
            value: ''
          }],
          boxTrend:[
            {title:'aa',mindex:33},
            {title:'aa',mindex:33},
          ],
            box5: [
          {
            type: '专利',
            value: '一种全自动设备',
            quality:'300020元',
            mindex:'2018-09-01'
          },{
            type: '专利',
            value: '一种全自动设备',
            quality:'300020元',
            mindex:'2018-09-01'
          },{
            type: '专利',
            value: '一种全自动设备',
            quality:'300020元',
            mindex:'2018-09-01'
          },{
            type: '专利',
            value: '一种全自动设备',
            quality:'300020元',
            mindex:'2018-09-01'
          },{
            type: '专利',
            value: '一种全自动设备',
            quality:'300020元',
            mindex:'2018-09-01'
          }],
           box6: [
          {
            type: '海洋探测',
            value: ''
          },{
            type: '担保',
            value: ''
          },{
            type: '信托',
            value: ''
          },{
            type: '风投',
            value: ''
          },{
            type: '私募',
            value: ''
          },{
            type: '保险',
            value: ''
          }],
          box7:[
           {type: '银行'},
           {type: '银行'},
           {type: '银行'},
           {type: '银行'},
           {type: '银行'},
           {type: '银行'},
          ],
           box8:[{
               type: '2012',
               value: '300020',
               mindex: '300020',
               value3: '300020',
               value4: '300020',
               value5: '300020',
               value6: '300020'
          },{
               type: '2013',
               value: '300020',
               mindex: '300020',
               value3: '300020',
               value4: '300020',
               value5: '300020',
               value6: '300020'
          },{
               type: '2014',
               value: '300020',
               mindex: '300020',
               value3: '300020',
               value4: '300020',
               value5: '300020',
               value6: '300020'
          },{
               type: '2015',
               value: '300020',
               mindex: '300020',
               value3: '300020',
               value4: '300020',
               value5: '300020',
               value6: '300020'
          }]
    }
  },
  mounted(){
    this.init()
  },
  methods:{
    init(){
      let params1={tstatus:3}
      timeSelectList(params1).then( res => {
        console.log('时间查询',res);
        this.updateTimeLabel=res.list[0].title
        this.updateTimeValue=res.list[0].updateTime
      })
      AnalysisSelectList({pageSize:0,pageNum:0}).then( res => {
        console.log('市场监测用户类型分析回显',res);
        this.box1=res.list;
        //this.title1=res.title[0].user
      })
      kshMarketselectList({}).then( res => {
        console.log('中间部分回显',res);
        let arr1=[],
            arr2=[],
            arr3=[],
            arr4=[],
            arr5=[]
        /*res.title.forEach( (item,index) =>{
          if(item.mstatus == 1){
            this.title2=item.headline
          }else if(item.mstatus == 2){

          }else if(item.mstatus == 3){
            this.title3=item.headline
          }else if(item.mstatus == 4){
            this.title4=item.headline
          }else if(item.mstatus == 5){
            this.title6=item.headline
          }
        })*/
        res.list.forEach( (item,index) =>{
          //mstatus (integer, optional): 状态（1用户需求分析，2平台交易额，3交易种类分析，4中试转化分析，5海洋知识产权交易分析）
          if(item.mstatus == 1){
            arr1.push({title:item.title,mindex:item.mindex})
          }else if(item.mstatus == 2){
            this.flatMoneyLabel=item.title
            this.flatMoneyValue=item.mindex
          }else if(item.mstatus == 3){
            arr3.push({title:item.title,mindex:item.mindex})
          }else if(item.mstatus == 4){
            arr4.push({title:item.title,mindex:item.mindex})
          }else if(item.mstatus == 5){
            arr5.push({title:item.title,mindex:item.mindex})
          }
        })
        this.box2=arr1;
        this.box3=arr3;
        //this.box4=arr4;
        this.zhSuccess=arr4[0].title;
        this.zhSuccessValue=arr4[0].mindex;
        this.box6=arr5;
      })
      //转化成功率回显
      kshMarketselectList2({mstatus:4}).then( res => {
        console.log('转化成功率回显',res);
        this.zhSuccess=res.list[0].title;
        this.zhSuccessValue=res.list[0].mindex;
      })
      kshMarketselectList2({mstatus:6}).then( res => {
        console.log('中间部分回显2',res);
        let arr1=[]
        res.list.forEach( (item,index) =>{
          arr1.push({title:item.title,mindex:item.mindex})
        })
        this.boxTrend=arr1;
      })
      kshMarketDetailselectList({}).then( res => {
        console.log('市场监测交易记录回显',res);
        this.box5=res.list;
        //this.titleTrade=res.title[0].headline
      })
      kshMarketTendencyAnalysisselectList({}).then( res => {
        console.log('市场监测金融机构撮合金额趋势分析回显',res);
        this.box8=res.list;
        //this.titlePrice=res.title[0].headline
      })
      kshMarketTendencyselectList({}).then( res => {
        console.log('科技金融撮合合作分析回显',res);
        this.box7=res.list
      })
      //标题回显
      let arr=[
        {titleCode:'401'},//用户类型分析
        {titleCode:'402'},//用户需求分析
        {titleCode:'403'},//交易种类分析
        {titleCode:'404'},//中试转化分析

        {titleCode:'405'},//交易记录
        {titleCode:'406'},//科技金融撮合合作分析
        {titleCode:'40601'},//各类金融机构撮合金额趋势分析
        {titleCode:'407'},//海洋知识产权交易分析
        {titleCode:'40401'},//转化成功率趋势
        {titleCode:'40602'},//最后增加的标题：六大类型分析
      ]
      arr.forEach( (item,index) => {
        selectInfoByTitleCode(item).then( res => {
          console.log('标题回显',res);
          if(item.titleCode=='401'){
            this.title1=res.titleName
          }else if(item.titleCode=='402'){
            this.title2=res.titleName
          }else if(item.titleCode=='403'){
            this.title3=res.titleName
          }else if(item.titleCode==' '){
            this.title4=res.titleName
          }else if(item.titleCode=='405'){
            this.titleTrade=res.titleName
          }else if(item.titleCode=='406'){
            this.titleKeji=res.titleName
          }else if(item.titleCode=='40601'){
            this.titlePrice=res.titleName
          }else if(item.titleCode=='407'){
            this.title6=res.titleName
          }else if(item.titleCode=='40401'){
            this.zhSuccessQS=res.titleName
          }else if(item.titleCode=='40602'){
            this.titleadd=res.titleName
          }
          //titleadd
          //this.box7=res.list
        })
      })

    },
    AddList(type){
      if(type==1){
        this.box1.push({type: '',quality: '',mindex: '',id:null})
      }else if(type==2){
        this.box5.push({type: '',brif: '',account: '',createTime:""})
      }
    },
    removeList(type){
      if(type==1){
        if(this.box1.length != 1){
          this.box1.pop({type: '',quality: '',mindex: '',id:null})
        }else if(this.box1.length == 1){
          this.$message.error("不能全部删除，至少保留一个")
        }
      }else if(type==2){
        if(this.box5.length != 1){
          this.box5.pop({type: '',brif: '',account: '',createTime:""})
        }else if(this.box5.length == 1){
          this.$message.error("不能全部删除，至少保留一个")
        }
      }
    },
    cancle1(){

    },
    save1(type){
      switch (type) {
        case 1:{
          let params={updateTime:this.updateTimeValue,title:this.updateTimeLabel,tstatus:3,id:null}
          this.setTime(params)
          break;
        }
        case 2:{
          this.setinsertBatchKshMarketAnalysis(this.box1)
          break;
        }
        case 3:{
          //用户需求分析
          this.box2.forEach( (item,index) => {
            item.mstatus=1
          })
          this.setinsertBatchKshMarket(this.box2)
          break;
        }
        case 4:{
          //平台交易额
          let params=[{title:this.flatMoneyLabel,mindex:this.flatMoneyValue,mstatus:2}]
          this.setinsertBatchKshMarket(params)
          break;
        }
        case 5:{
          //交易种类分析
          this.box3.forEach( (item,index) => {
            item.mstatus=3
          })
          this.setinsertBatchKshMarket(this.box3)
          break;
        }
        case 6:{
          //中试转化分析--转化成功率
          this.setinsertBatchKshMarket([{title:this.zhSuccess,mindex:this.zhSuccessValue,mstatus:4}])
          break;
        }
        case 7:{
          //交易记录
          this.setinsertBatchKshMarketDetail(this.box5)
          break;
        }
        case 8:{
          //科技金融撮合合作分析
          this.setinsertBatchKshMarketTendency(this.box7)
          break;
        }
        case 9:{
          //各类金融机构撮合金额趋势分析
          this.setinsertBatchKshMarketTendencyAnalysis(this.box8)
          break;
        }
        case 10:{
          //海洋知识产权交易分析
          this.box6.forEach( (item,index) => {
            item.mstatus=5
          })
          this.setinsertBatchKshMarket(this.box6)
          break;
        }
        //标题部分
        case 12:{
          //用户类型分析
          this.setupdateKshTitlename({titleCode:401,titleName:this.title1})
          break;
        }
        case 13:{
          this.setupdateKshTitlename({titleCode:402,titleName:this.title2})
          break;
        }
        case 14:{
          //交易种类分析
          this.setupdateKshTitlename({titleCode:403,titleName:this.title3})
          break;
        }
        case 15:{
          //中试转化分析
          this.setupdateKshTitlename({titleCode:404,titleName:this.title4})
          break;
        }
        case 16:{
          //转化成功率趋势
          this.setupdateKshTitlename({titleCode:40401,titleName:this.zhSuccessQS})
          break;
        }
        /*case 17:{
          //转化成功率趋势--内容
          this.setupdateKshTitlename({titleCode:40401,titleName:this.zhSuccessQS})
          break;
        }*/
        case 17:{
          //转化成功率趋势--内容
          this.boxTrend.forEach( (item,index) => {
            item.mstatus=6
          })
          this.setinsertBatchKshMarket(this.boxTrend)
          break;
        }
        case 18:{
          //交易记录
          this.setupdateKshTitlename({titleCode:405,titleName:this.titleTrade})
          break;
        }
        case 19:{
          //科技金融撮合合作分析
          this.setupdateKshTitlename({titleCode:406,titleName:this.titleKeji})
          break;
        }
        case 20:{
          //各类金融机构撮合金额趋势分析
          this.setupdateKshTitlename({titleCode:40601,titleName:this.titlePrice})
          break;
        }
        case 21:{
          //海洋知识产权交易分析
          this.setupdateKshTitlename({titleCode:407,titleName:this.title6})
          break;
        }
        case 22:{
          //最后增加的标题
          this.setupdateKshTitlename({titleCode:40602,titleName:this.titleadd})
          break;
        }
      }
    },
    setTime(params){
      insertKshIndustryTime(params).then( res=> {
        console.log('更新时间接口',res);
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
    //市场监测用户类型分析提交
    setinsertBatchKshMarketAnalysis(params){
      insertBatchKshMarketAnalysis(params).then( res=> {
        console.log('市场监测用户类型分析',res);
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
    //1用户需求分析，2平台交易额，3交易种类分析，4中试转化分析，5海洋知识产权交易分析----提交
    setinsertBatchKshMarket(params){
      insertBatchKshMarket(params).then( res=> {
        console.log('市场监测中间部分提交',res);
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
    //市场监测交易记录接口提交
    setinsertBatchKshMarketDetail(params){
      insertBatchKshMarketDetail(params).then( res=> {
        console.log('市场监测交易记录接口提交',res);
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
    //市场监测金融机构撮合金额趋势分析提交
    setinsertBatchKshMarketTendencyAnalysis(params){
      insertBatchKshMarketTendencyAnalysis(params).then( res=> {
        console.log('市场监测金融机构撮合金额趋势分析提交',res);
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
    //科技金融撮合合作分析提交
    setinsertBatchKshMarketTendency(params){
      insertBatchKshMarketTendency(params).then( res=> {
        console.log('科技金融撮合合作分析提交',res);
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
    //通用标题提交
    setupdateKshTitlename(params){
      updateKshTitlename(params).then( res=> {
        console.log('标题提交',res);
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
        .label {
            display: inline-block;
            width: 30%;
            text-align: right;
        }
        .el-input {
            width: 20%;
        }
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
          .elMutal{
             .el-input {
              width: 12%;
            }
          }
            /*.topList{
                .el-input {
                    width: 100px;
                    float: left;
                    display: inline;
                }
            }*/
        }
      }
    }
    .el-icon-circle-plus-outline{
        position: absolute;
        right: 0;
        cursor:pointer;
    }
    .el-icon-remove-outline{
        position: absolute;
        right: -34px;
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
