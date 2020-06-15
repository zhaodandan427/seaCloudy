<template>
    <div class="role-modify-warp common-bg-white">
        <div class="common-title"><h3>用户信息</h3></div>
        <div style="">
            <div class="details-title">
                基本信息
            </div>

            <div class="details">
                <div class="details-item">
                    <label for="" class="details-item_title">用户名:</label>
                    <div class="details-item_info">{{details.userName}}</div>
                </div>
                <div class="details-item">
                    <label for="" class="details-item_title">手机:</label>
                    <div class="details-item_info">{{details.mobile}}</div>
                </div>
                <div class="details-item">
                    <label for="" class="details-item_title">注册时间:</label>
                    <div class="details-item_info">{{details.regTime}}</div>
                </div>
                <div class="details-item">
                    <label for="" class="details-item_title">最后登录IP:</label>
                    <div class="details-item_info">{{details.lastLoginIp}}</div>
                </div>
                <div class="details-item">
                    <label for="" class="details-item_title">最后登录时间:</label>
                    <div class="details-item_info">{{details.lastLoginTime}}</div>
                </div>

            </div>
            <div class="details-title">
                {{title}}
            </div>


            <div class="details">
                <template v-if="this.userType == 3">
                    <div class="details-item">
                        <label for="" class="details-item_title">企业名称:</label>
                        <div class="details-item_info">{{details.companyName}}</div>
                    </div>
                    <div class="details-item">
                        <label for="" class="details-item_title">身份证号:</label>
                        <div class="details-item_info">{{details.idcard}}</div>
                    </div>
                    <div class="details-item">
                        <label for="" class="details-item_title">联系人:</label>
                        <div class="details-item_info">{{details.linkMan}}</div>
                    </div>
                    <div class="details-item">
                        <label for="" class="details-item_title">营业执照或机构复印件:</label>
                        <div class="details-item_info">
                            <img :src="getImgUrl(item)" alt="营业执照或机构复印件" v-for="item in details.enclosures">
                        </div>
                    </div>
                </template>

                <template v-else>
                    <div class="details-item">
                        <label for="" class="details-item_title">真实姓名:</label>
                        <div class="details-item_info">{{details.realName}}</div>
                    </div>
                    <div class="details-item">
                        <label for="" class="details-item_title">手机号:</label>
                        <div class="details-item_info">{{details.userMobile}}</div>
                    </div>
                    <div class="details-item">
                        <label for="" class="details-item_title">身份证号:</label>
                        <div class="details-item_info">{{details.idcard}}</div>
                    </div>
                    <div class="details-item">
                        <label for="" class="details-item_title">身份证复印件:</label>
                        <div class="details-item_info">
                            <img :src="getImgUrl(item)" alt="身份证复印件" v-for="item in details.enclosures">
                        </div>
                    </div>

                </template>
                <div class="details-item">
                    <label for="" class="details-item_title">审核状态:</label>
                    <div class="details-item_info">
                        {{details.checkStatus | filterAuditUserStatus}}
                    </div>
                </div>
                <div class="details-item">
                    <label for="" class="details-item_title">审核意见:</label>
                    <div class="details-item_info">
                        {{details.auditFeedback}}
                    </div>
                </div>

                <el-button type="primary" @click="goBack">返回</el-button>
            </div>

        </div>
    </div>
</template>

<script>
    import { getAuditPersonDetails ,getAuditShopDetails ,auditCompany,auditPerson} from "../../api/user/list";
    import { api } from "../../api/baseApi"
    export default {
        data() {

            return {
                title:'',
                details:{
                    userName:'',
                    mobile:'',
                    regTime:'',
                    lastLoginIp:'',
                    lastLoginTime:'',
                    companyName:'',
                    realName:'',
                    userMobile:'',
                    idcard:'',
                    enclosures:'',
                    auditFeedback:'',
                    checkStatus:'',

                },
                checkLogId:null,
                userType:null,
            };
        },
        created(){
            this.init();
        },
        methods: {
            init(){
                console.log(this.$route.query);
                this.checkLogId = this.$route.query.checkLogId;
                this.userType = this.$route.query.userType;

                if(this.userType == 2){//个人
                    this.title='个人信息';
                    this.getPersonDetailsById(this.checkLogId);

                }else if(this.userType == 3){//店铺
                    this.title='企业信息';
                    this.getShopDetailsById(this.checkLogId);
                }

            },

            getPersonDetailsById(id){
                getAuditPersonDetails({
                    checkLogId:id
                }).then(res=>{
                    console.log(res);
                    if(res){
                        this.details.userName=res.userName;
                        this.details.mobile=res.mobile;
                        this.details.regTime=res.regTime;
                        this.details.lastLoginIp=res.lastLoginIp;
                        this.details.lastLoginTime =res.lastLoginTime;

                        this.details.realName =res.realName;
                        this.details.userMobile =res.userMobile;
                        this.details.idcard =res.idcard;
                        this.details.enclosures =res.enclosures;

                        this.details.checkStatus =res.checkStatus;
                        this.details.auditFeedback =res.auditFeedback;
                    }

                })
            },
            getShopDetailsById(id){
                getAuditShopDetails({
                    checkLogId:id
                }).then(res=>{
                    if(res){
                        this.details.userName=res.userName;
                        this.details.mobile=res.mobile;
                        this.details.regTime=res.regTime;
                        this.details.lastLoginIp=res.lastLoginIp;
                        this.details.lastLoginTime =res.lastLoginTime;

                        this.details.companyName=res.companyName;
                        this.details.linkMan=res.linkMan;
                        this.details.idcard=res.idcard;
                        this.details.enclosures=res.enclosures;

                        this.details.checkStatus=res.checkStatus;
                        this.details.auditFeedback=res.auditFeedback;
                    }

                })
            },
            goBack(){
                this.$router.push('/examine-record')
            },
            getImgUrl(item){
                return `${api.imgURL}/${item.url}`
            }
        }
    }
</script>

<style scoped type="text/scss" lang="scss">
    .details-title{
        line-height: 30px;
        margin: 0 60px;
        padding: 0 10px;
        background: #cdcdcd;
    }
    .details{
        padding: 10px 280px;
        .details-item{
            overflow: hidden;
            padding: 10px 0;
            .details-item_title{
                width: 90px;
                float: left;
                margin-right: 10px;
                color: #606266;
                text-align: right;
            }
            .details-item_info{
                overflow: hidden;
                word-wrap: break-word;
            }
        }


    }
    .form-box{
        padding: 10px 300px;
        margin-top: 20px;
        border-top: 1px solid;
        border-image: -webkit-linear-gradient(to right,rgba(101,159,234,0),rgba(101,159,234,1),rgba(101,159,234,0)) 30 30;
        border-image: -moz-linear-gradient(to right,rgba(101,159,234,0),rgba(101,159,234,1),rgba(101,159,234,0)) 30 30;
        border-image: linear-gradient(to right,rgba(101,159,234,0),rgba(101,159,234,1),rgba(101,159,234,0)) 30 30;
    }

</style>