<template>
    <div class="pagination-warp">
        <div class="pagination-box-left">
            共 <span class="common-red-color">{{pages}}</span>页/ <span class="common-red-color">{{total}}</span>条数据
        </div>
        <div class="pagination-box-right">
            <el-pagination
                    @current-change="handleCurrentChange"
                    :current-page.sync="currentpage"
                    :page-size="pageSize"
                    :layout="layout"
                    :total="total">
            </el-pagination>
        </div>
    </div>
</template>

<script>
   export default {
      name: 'pagination',
      data() {
         return {
            currentpage: this.pageNum,
         }
      },
      props: {
         pageSize: { //每页条数
            type: Number,
            default: 10
         },
         pageNum: { //当前页数
            type: Number,
            default: 1
         },
         total: {  //总页数
            type: Number,
            default: 100
         },
         pages: {  //总页数
            type: Number,
            default: 0
         },
         layout: {
            type: String,
            default: 'jumper,prev, pager, next'
         }
      },
      methods: {
         handleCurrentChange(val) {
            console.log(this.currentpage);
            this.$emit('pageChange', val);
         }
      },

   }
</script>

<style lang="scss" type="text/scss" scoped>
/*.pagination{*/
    /*margin:30px 0;*/
    /*overflow: hidden;*/
    /*.div_ctrl{*/
        /*float: right;*/
    /*}*/
/*}*/
/*.txt_total{*/
   /*float: left;*/
   /*line-height: 27px;*/
/*}*/

</style>
