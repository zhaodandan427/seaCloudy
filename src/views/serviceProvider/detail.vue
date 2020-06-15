<template>
    <div class="service-warp">
        <div class="each">
            <div class="title">
                基本信息
            </div>
            <div class="wrapper">
                <p><span>姓名:</span><span>{{detail.upname}}</span></p>
                <p><span>手机号码:</span><span>{{detail.phoneNum}}</span></p>
                <p><span>注册时间:</span><span>{{detail.registerTime}}</span></p>
                 <p><span>所在地域:</span><span>{{detail.ucity}}</span></p>
            </div>
        </div>
        <div class="each">
            <div class="title topBorder">
                认证信息
            </div>
            <div class="wrapper">
                <p><span>认证状态:</span><span>{{detail.status | serviceexamineStatus}}</span></p>
                <p><span>擅长领域:</span><span>{{detail.specialSkills}}</span></p>
                <p><span>个人简介:</span><span>{{detail.providerDesc}}</span></p>
            </div>
        </div>
        <!--个人----教育经历-->
        <div v-if="detail.authType == 2" class="each">
            <div class="title topBorder">
                教育经历
            </div>
            <div class="list-wrap" v-for=" (item,index) in detail.educationsExpList">
                <div><span>毕业院校：{{item.schoolName}}</span></div>
                <div><span>起始时间：{{item.startTime}}- {{item.endTime}}</span></div>
                <div><span>专业名称：{{item.major}}</span></div>
                <div><span>学历：{{item.edu | eduStatus}}</span></div>
                <div>
                    <span v-if="item.orExam !==1&&item.orExam !==2">是否统招：未知</span>
                    <span v-if="item.orExam==1">是否统招：统招</span>
                    <span v-if="item.orExam==2">是否统招：非统招</span>
                </div>
                <div><span v-for=" (item,index) in item.certPathsList">
                    证明材料列表：
                    <img @click="clickImg($event)" style="width: 60px;height: 40px" :src="imgURL+item.certPath" alt="">
                    <bigImg v-if="bigImgShow" @clickit="viewImg" :imgSrc="imgSrc"></bigImg>
                    <a style="text-decoration: underline;color: #409EFF"
                       type="primary"
                       :href="imgURL+item.certPath"
                       target="_blank"
                    >{{item.certName}}</a>
                </span></div>
            </div>
        </div>
        <!--个人----工作经历-->
        <div v-if="detail.authType == 2" class="each">
            <div class="title topBorder">
                工作经历
            </div>
            <div class="list-wrap topBorder" v-for=" (item,index) in detail.worksExpList">
                <div><span>公司名称：{{item.companyName}}</span></div>
                <div><span>起始时间：{{item.startTime}}- {{item.endTime}}</span></div>
                <div><span>部门名称：{{item.departName}}</span></div>
                <div><span>地址：{{item.position}}</span></div>
                <div><span v-for=" (item,index) in item.certPathsList">
                    证明材料列表：
                    <img @click="clickImg($event)" style="width: 60px;height: 40px" :src="imgURL+item.certPath" alt="">
                    <bigImg v-if="bigImgShow" @clickit="viewImg" :imgSrc="imgSrc"></bigImg>
                    <a style="text-decoration: underline;color: #409EFF"
                       type="primary"
                       :href="imgURL+item.certPath"
                       target="_blank"
                    >{{item.certName}}</a>
                </span></div>

            </div>
        </div>
        <!--个人----项目经验-->
        <div v-if="detail.authType == 2" class="each">
            <div class="title">
                项目经验
            </div>
            <div class="list-wrap topBorder" v-for=" (item,index) in detail.projectsExpList">
                    <div><span>项目名称：{{item.projectName}}</span></div>
                    <div><span>起始时间：{{item.startTime}}- {{item.endTime}}</span></div>
                    <div><span>工作职责：{{item.projectDuty}}</span></div>
                    <div><span>项目描述：{{item.projectDesc}}</span></div>
            </div>
        </div>
        <!--企业----应用案例-->
        <div v-if="detail.authType == 4" class="each">
            <div class="title">
                应用案例
            </div>
            <div class="list-wrap topBorder" v-for=" (item,index) in detail.appCaseList">
                <div><span>{{item.caseName}} ({{item.startTime}}- {{item.startTime}})</span></div>
                <div><span>案例概述：{{item.caseView}}</span></div>
                <div><span>解决方案：{{item.caseDesc}}</span></div>
                <div><span v-for=" (item,index) in item.certPathsList">
                    证明材料：
                        <img @click="clickImg($event)" style="width: 60px;height: 40px" :src="imgURL+item.certPath" alt="">
                        <bigImg v-if="bigImgShow" @clickit="viewImg" :imgSrc="imgSrc"></bigImg>
                    <a style="text-decoration: underline;color: #409EFF"
                       type="primary"
                       :href="imgURL+item.certPath"
                       target="_blank"
                    >{{item.certName}}</a>
                    </span>
                </div>
            </div>
        </div>
        <!--企业----软件著作权-->
        <div v-if="detail.authType == 4" class="each">
            <div class="title">
                软件著作权
            </div>
            <div class="list-wrap topBorder" v-for=" (item,index) in detail.swpList">
                <div><span>{{item.softWareName}} (首次发表日期：{{item.publicTime}})</span></div>
                <div><span>登记号：{{item.registerNum}}</span></div>
                <div><span>软件用途：{{item.purpose}}</span></div>
                <div>
                    <span v-for=" (item,index) in item.certPathsList">证明材料：
                        <img @click="clickImg($event)" style="width: 60px;height: 40px" :src="imgURL+item.certPath" alt="">
                        <bigImg v-if="bigImgShow" @clickit="viewImg" :imgSrc="imgSrc"></bigImg>
                        <a style="text-decoration: underline;color: #409EFF"
                           type="primary"
                           :href="imgURL+item.certPath"
                           target="_blank"
                        >{{item.certName}}</a>
                    </span></div>
            </div>
        </div>
        <!--企业----发明专利-->
        <div v-if="detail.authType == 4" class="each">
            <div class="title">
                发明专利
            </div>
            <div class="list-wrap topBorder" v-for=" (item,index) in detail.inPatentsList">
                <div><span>{{item.patentName}} (申请日期：{{item.applyTime}})</span></div>
                <div><span>专利号：{{item.patentNum}}</span></div>
                <div><span>专利概述：{{item.patentDesc}}</span></div>
                <div><span v-for=" (item,index) in item.certPathsList">证明材料：
                <img  @click="clickImg($event)" style="width: 60px;height: 40px;" :src="imgURL+item.certPath" alt="">
                    <bigImg v-if="bigImgShow" @clickit="viewImg" :imgSrc="imgSrc"></bigImg>
                    <a style="text-decoration: underline;color: #409EFF"
                       type="primary"
                       :href="imgURL+item.certPath"
                       target="_blank"
                    >{{item.certName}}</a>
                </span></div>
            </div>
        </div>
        <div class="footerButton">
            <el-button v-if="detail.status==0 ||detail.status==1 ||detail.status==3" @click="back(1)" type="primary">通过认证</el-button>
            <el-button v-if="detail.status==0 ||detail.status==1 ||detail.status==3" @click="back(2)">不通过认证</el-button>
            <el-button @click="goto()">返回</el-button>
        </div>
        <el-dialog
                title="提示"
                :visible.sync="centerDialogVisible"
                width="30%"
                center>
            <span>需要注意的是内容是默认不居中的</span>
            <span slot="footer" class="dialog-footer">
    <el-button @click="centerDialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="centerDialogVisible = false">确 定</el-button>
  </span>
        </el-dialog>
    </div>
</template>

<script>
  import bigImg from '@/components/bigImg/bigImg'
  import { getOne ,check} from "../../api/serviceProvider/serviceProvider";
  export default {
    name: "",
    components:{
      bigImg
    },
    data(){
      return{
        bigImgShow:false,
        userId:'',
        detail:{},
        centerDialogVisible: false,
        imgURL:window.IMGURL+'/'
      }
    },
    watch:{

    },
    mounted(){
      this.userId=this.$route.query.userId
      console.log('userId',this.userId);
      this.init()
    },
    methods:{
      viewImg(){
        this.bigImgShow = false;
      },
      clickImg(e){
        // console.log(e);
        this.bigImgShow=true
        // 获取当前图片地址
        this.imgSrc = e.currentTarget.src;
      },
        init(){
          this.getList()
        },
      goto(){
        this.$router.go(-1);
      },
        back(type){
          let param={}
          if(type==1){
            param={userId:this.userId,status:2}//通过
          }else if(type==2){
            param={userId:this.userId,status:3}//不通过
          }
          this.getCheck(param)


        },
          getCheck(param){
            check(param).then( res => {
              console.log('审核',res);
              this.$message.success(res);
              this.$router.go(-1);
            }).catch( (res) => {
              this.$message.error(res);
            })
          },
        getList(){
         getOne({userId:this.userId}).then( res => {
           console.log('服务商详情',res);
           this.detail=res.list[0]
         }).catch( (res) => {
           this.$message.error(res);
         })
        }

    }
  }
</script>

<style scoped lang="scss" type="text/scss">
    .service-warp{
        height:auto;
        width:100%;
        border: 1px solid #ddd;
        overflow: hidden;
        .title{
            background: #F5F6FA;
            padding-left: 10px;
            height: 39px;
            line-height: 39px;
            color: #333;
            font-size: 12px;
            border-bottom: 1px solid #ddd;
        }
        .topBorder{
            border-top: 1px solid #ddd;
        }
        .wrapper{
            text-align: center;
        }
        .list-wrap{
            img{
                cursor: pointer;
            }
            div{
                padding-top: 10px;
                padding-bottom: 10px;
                margin-left: 10px;
                border-bottom: 1px solid #ddd;
            }
            p{
                display: flex;
                justify-content: space-between;
                border-bottom: 1px solid #ddd;
                span{
                    display: inline-block;
                    height: 39px;
                    line-height: 39px;
                    flex:1;
                    &:nth-child(1){
                        margin-left: 10px;
                    }
                }
                &:nth-child(4){
                    margin-bottom: 20px;
                }
            }
        }
        .footerButton{
            margin-top: 10px;
        }
    }
</style>
