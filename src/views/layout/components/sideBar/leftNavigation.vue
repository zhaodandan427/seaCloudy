<template>
    <div class="admin-left">
        <div>
            <img src="../../../../assets/img/logo.png" alt="">
            <span class="left__font">后台管理</span>
        </div>
        <menucontainer class="sidebar" :menuList="routes"></menucontainer>
    </div>
</template>
<style lang="scss" scoped>
    @import '../../../../assets/css/leftNavigation.scss';
    /*.sidebar{*/
        /*overflow-y: scroll;*/
    /*}*/

</style>
<script>
    import menucontainer from './menuContainer.vue';
    export default{
        name: 'leftnav',
        components: {
            menucontainer
        },
        computed:{
            routes(){
                console.log('111111111',this.$router.options.routes)
                return this.$router.options.routes;
            }
        }
    };
</script>
