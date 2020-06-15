<template>
    <div class="pagination-warp">
        <div class="pagination-box-left">
            共 <span class="common-red-color">{{pages}}</span>页/ <span class="common-red-color">{{total}}</span>条数据
        </div>
        <div class="pagination-box-right">
            <el-pagination
                    @size-change="handleSizeChange"
                    @current-change="handleCurrentChange"
                    :current-page="curPage"
                    :page-size="pageSize"
                    :layout="layout"
                    :total="total">
            </el-pagination>
        </div>
    </div>
</template>

<script>
    export default {
        name: "",
        props: {
            pages:{
                type: Number,
                default: 0
            },
            pageSize: { //每页条数
                type: Number,
                default: 10
            },
            curPage: { //当前页
                type: Number,
                default: 1
            },
            total: {  //总页数
                type: Number,
                default: 100
            },
            layout: {
                type: String,
                default: 'prev, pager, next, jumper'
            }
            // thisProject: {
            //     type: Object,
            //     default:function(){
            //         return {};
            //     }
            // },
            // versionId: {
            //     type: Number,
            //     default:function(){
            //         return {};
            //     }
            // }
        },
         methods: {
         handleCurrentChange(val) {
            console.log(val)
            this.$emit('pageChange', val);
         },
         handleSizeChange(val){

         }
      },
    }
</script>

<style scoped lang="scss" type="text/scss">

    .pagination-warp{
        overflow: hidden;
        padding: 15px;
        .pagination-box-left{
            float: left;
            padding:3px;
        }
        .pagination-box-right{
            float: right;
        }
    }

</style>