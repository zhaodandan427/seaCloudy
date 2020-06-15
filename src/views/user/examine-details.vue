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
               <template v-if="this.userType == 5">
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

            </div>
            <div class="form-box">
                <el-form
                        :model="params"
                        ref="roleParams"
                        :rules="rules"
                        label-width="100px" class="demo-ruleForm">
                    <el-form-item label="审核状态" prop="checkStatus">
                        <el-radio-group v-model="params.checkStatus">
                            <el-radio :label="1">通过</el-radio>
                            <el-radio :label="2">驳回</el-radio>
                        </el-radio-group>
                    </el-form-item>

                    <el-form-item
                            label="审核意见"
                            prop="auditFeedback">
                        <el-input
                                placeholder="请输入审核意见"
                                type="textarea"
                                maxlength="300"
                                show-word-limit
                                v-model="params.auditFeedback"
                        ></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="goBack">取消</el-button>
                        <el-button type="primary" @click="submitForm('roleParams')">提交审核</el-button>
                    </el-form-item>
                </el-form>
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
                roleParams:{
                    roleName:'',
                    roleFunction:''
                },
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
                    linkMan:'',

                },
                params:{
                    userId:'',
                    auditFeedback:'',
                    checkStatus:'',
                },
                userId:null,
                userType:null,
                rules: {
                    checkStatus: [
                        { required: true, message: '请输入审核状态', trigger: 'change' }
                    ],
                    auditFeedback: [
                        { required: true, message: '请输入审核意见', trigger: 'blur' }
                    ]
                }
            };
        },
        created(){
            this.init();
        },
        methods: {
            init(){
                console.log(this.$route.query);
                this.userId = this.$route.query.userId;
                this.userType = this.$route.query.userType;

                if(this.userType == 4){//个人
                    this.title='个人信息';
                    this.getPersonDetailsById(this.userId)

                }else if(this.userType == 5){//店铺
                    this.title='企业信息';
                    this.getShopDetailsById(this.userId)
                }



            },
            submitForm(ref) {
                console.log( this.$refs[ref]);
                this.$refs[ref].validate((valid) => {
                    if (valid) {

                        if(this.userType == 4){//个人
                            auditPerson({
                                userId:this.userId,
                                checkStatus:this.params.checkStatus,
                                auditFeedback:this.params.auditFeedback,
                            })
                                .then(res => {
                                    this.$message({
                                        message: '审核成功',
                                        duration: 2000,
                                        type: "success"
                                    });
                                    this.goBack();
                                })
                                .catch(res => {
                                    this.$message({
                                        message: res,
                                        center: true
                                    });
                                })

                        }else if(this.userType == 5){//店铺
                            auditCompany({
                                userId:this.userId,
                                checkStatus:this.params.checkStatus,
                                auditFeedback:this.params.auditFeedback,
                            })
                                .then(res => {
                                    this.$message({
                                        message: '审核成功',
                                        duration: 2000,
                                        type: "success"
                                    });
                                    this.goBack();
                                })
                                .catch(res => {
                                    this.$message({
                                        message: res,
                                        center: true
                                    });
                                })
                        }




                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            },
            getPersonDetailsById(id){//个人详情
                getAuditPersonDetails({
                    userId:id
                }).then(res=>{
                    console.log(res,'详情-----------------');
                    this.details.userName=res.userName;
                    this.details.mobile=res.mobile;
                    this.details.regTime=res.regTime;
                    this.details.lastLoginIp=res.lastLoginIp;
                    this.details.lastLoginTime =res.lastLoginTime;

                    this.details.realName =res.realName;
                    this.details.userMobile =res.userMobile;
                    this.details.idcard =res.idcard;
                    this.details.enclosures =res.enclosures;


                })
            },
            getShopDetailsById(id){//店铺详情
                getAuditShopDetails({
                    userId:id
                }).then(res=>{
                    console.log(res);
                    this.details.userName=res.userName;
                    this.details.mobile=res.mobile;
                    this.details.regTime=res.regTime;
                    this.details.lastLoginIp=res.lastLoginIp;
                    this.details.lastLoginTime =res.lastLoginTime;

                    this.details.companyName=res.companyName;
                    this.details.idcard=res.idcard;
                    this.details.linkMan=res.linkMan;
                    this.details.enclosures=res.enclosures;


                })
            },
            resetForm(ref) {
                this.$refs[ref].resetFields();
            },
            goBack(){
                this.$router.push('/user-examine')
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
                img{
                    width: 300px;
                }
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
