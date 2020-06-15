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
                <div class="details-item">
                    <el-button type="primary" @click="goBack">返回</el-button>

                </div>
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
                goodsId:null,
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

                })
            },
            resetForm(ref) {
                this.$refs[ref].resetFields();
            },
            goBack(){
                console.log(this.$route.query.fromPage);
                if(this.$route.query.fromPage == 1){
                    this.$router.push('/goods-list')

                }else if (this.$route.query.fromPage == 2) {
                    this.$router.push('/stayOnShelf')

                }else {
                    this.$router.push('/onShelf')

                }
            }
        }
    }
</script>
