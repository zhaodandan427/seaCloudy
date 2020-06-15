<template>
    <div class="role-modify-warp common-bg-white">
        <div class="common-title"><h3>商品审核</h3></div>
        <div style="">
            <div class="details">
                <div class="details-item">
                    <label for="" class="details-item_title">当前类目:</label>
                    <div class="details-item_info">{{details.itemGoodsType.goodsTypeName}}</div>
                </div>
                <div class="details-item">
                    <label for="" class="details-item_title">商品名称:</label>
                    <div class="details-item_info">{{details.goodsName}}</div>
                </div>
                <div class="details-item">
                    <label for="" class="details-item_title">商品简介:</label>
                    <div class="details-item_info">{{details.goodsIntro}}</div>
                </div>
                <div class="details-item">
                    <label for="" class="details-item_title">行业:</label>
                    <div class="details-item_info">
                        <el-tag>{{details.itemGoodsIndustry.industryName}}</el-tag>
                    </div>
                </div>
                <div class="details-item">
                    <label for="" class="details-item_title">商品图标:</label>
                    <div class="details-item_info">
                        <img :src="details.goodsPic" alt="商品图标">
                    </div>
                </div>
                <div class="details-item">
                    <label for="" class="details-item_title">参考价格:</label>
                    <div class="details-item_info">{{details.referencePrice | filterPriceStatus}}</div>
                </div>
                <div class="details-item">
                    <label for="" class="details-item_title">定金:</label>
                    <div class="details-item_info">{{details.depositPrice | filterPriceStatus}}</div>
                </div>
                <div class="details-item">
                    <label for="" class="details-item_title">专利信息:</label>
                    <div class="details-item_info" v-html="details.goodsInfo"></div>
                </div>
                <div class="details-item">
                    <label for="" class="details-item_title">专利详情:</label>
                    <div class="details-item_info" v-html="details.goodsDetails"></div>
                </div>
                <div class="details-item">
                    <label for="" class="details-item_title">售后服务:</label>
                    <div class="details-item_info" v-html="details.afterSalesService "></div>
                </div>
            </div>
            <div class="form-box">
                <el-form
                        :model="params"
                        ref="roleParams"
                        :rules="rules"
                        label-width="100px" class="demo-ruleForm">
                    <el-form-item label="审核状态" prop="status">
                        <el-radio-group v-model="params.status">
                            <el-radio :label="1">通过</el-radio>
                            <el-radio :label="-1">驳回</el-radio>
                        </el-radio-group>
                    </el-form-item>

                    <el-form-item
                            label="审核意见"
                            prop="auditOpinion">
                        <el-input
                                placeholder="请输入审核意见"
                                type="textarea"
                                maxlength="200"
                                show-word-limit
                                v-model.trim="params.auditOpinion"
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
    import {getGoodsDetailById,auditGoods} from "../../api/goods/list";
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
                    goodsName:'',
                    goodsIntro:'',
                    itemGoodsLabel:'',
                    goodsPic:'',
                    referencePrice:'',
                    depositPrice:'',
                    goodsInfo:'',
                    goodsDetails:'',
                    afterSalesService :'',
                    itemGoodsType :'',
                    auditStatus :'',
                    status :'',
                    itemGoodsIndustry:{
                      industryName:''
                    }
                },
                params:{
                    goodsId:'',
                    status:'',
                    auditOpinion:'',
                },
                goodsId:null,
                rules: {
                    status: [
                        { required: true, message: '请输入审核状态', trigger: 'change' }
                    ],
                    auditOpinion: [
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
                this.goodsId = this.$route.query.id;
                console.log(this.goodsId);
                this.getGoodsDetailById(this.goodsId)

            },
            submitForm(ref) {
                console.log( this.$refs[ref]);
                this.$refs[ref].validate((valid) => {
                    if (valid) {
                            auditGoods({
                                goodsId:this.goodsId,
                                status:this.params.status,
                                auditOpinion:this.params.auditOpinion,
                            })
                                .then(res => {
                                    this.$message({
                                        message: "提交成功",
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

                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            },
            getGoodsDetailById(id){
                getGoodsDetailById({
                    id:id
                }).then(res=>{
                    console.log(res);
                    this.details.goodsName=res.goodsName;
                    this.details.goodsIntro=res.goodsIntro;
                    this.details.itemGoodsLabel=res.itemGoodsLabel;
                    this.details.goodsPic=`${api.imgURL}/${res.goodsPic}`;
                    this.details.referencePrice =res.referencePrice;
                    this.details.depositPrice=res.depositPrice;
                    this.details.goodsInfo=res.goodsInfo;
                    this.details.goodsDetails=res.goodsDetails;
                    this.details.afterSalesService =res.afterSalesService ;
                    this.details.itemGoodsType =res.itemGoodsType ;
                    this.details.auditStatus =res.auditStatus ;
                    this.details.status =res.status ;
                    this.details.itemGoodsIndustry.industryName =res.itemGoodsIndustry.industryName;
                  //itemGoodsIndustry:{industryName:''}

                })
            },
            resetForm(ref) {
                this.$refs[ref].resetFields();
            },
            goBack(){
                console.log(this.$route.query.fromPage);
                if(this.$route.query.fromPage == 1){
                    this.$router.push('/goods-list')

                }else {
                    this.$router.push('/stayOnShelf')

                }
            }
        }
    }
</script>

<style scoped type="text/scss" lang="scss">
  .form-box{
      padding: 10px 300px;
      margin-top: 20px;
      border-top: 1px solid;
      border-image: -webkit-linear-gradient(to right,rgba(101,159,234,0),rgba(101,159,234,1),rgba(101,159,234,0)) 30 30;
      border-image: -moz-linear-gradient(to right,rgba(101,159,234,0),rgba(101,159,234,1),rgba(101,159,234,0)) 30 30;
      border-image: linear-gradient(to right,rgba(101,159,234,0),rgba(101,159,234,1),rgba(101,159,234,0)) 30 30;
  }

</style>
