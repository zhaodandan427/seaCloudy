<template>
    <div class="breadcrumb-warp">
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <!--<transition-group name="breadcrumb">-->
                <!-- 防止面包屑导航出现 首页/首页， v-if="route.name!='home'" -->
                <el-breadcrumb-item v-for="(item,index) in list" :key="item.path">
                    <a v-if="item.name=='home'" @click.prevent="handleLink(item)">首页</a>
                    <span v-else  >{{item.meta.name }}</span>
                </el-breadcrumb-item>
            <!--</transition-group>-->
        </el-breadcrumb>
    </div>
</template>

<script>
    import { mapState } from 'vuex'
    export default {
        name: "",
        methods:{
            handleLink(item){
                console.log(item);
                const { redirect, path } = item;
                this.$router.push(path);
            }
        },
        computed: {
            ...mapState({
                "crumbList": state => state.menu.crumList
            }),
            list(){
                return [
                    { path: '/home',name:'home', meta: { title: 'home' } }
                ].concat(this.crumbList)
            }
        },
    }
</script>

<style  lang="scss" type="text/scss">
    .breadcrumb-warp{
        padding: 10px 0;
        .el-breadcrumb{
            height: 15px;
        }
    }

</style>