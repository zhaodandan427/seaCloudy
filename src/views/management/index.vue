<template>
    <div class="sub-layout">
        <div class="main-warp">
            <Breadcrumb/>
            <div class="main">
                <router-view/>
            </div>
        </div>
    </div>
</template>

<script>

    import Breadcrumb from "@/components/Breadcrumb.vue";
    export default {
        name: "home",
        components: {

            Breadcrumb
        }
    }
</script>

<style scoped lang="scss" type="text/scss">
.sub-layout{
    height: 100%;
    .main-warp{

        padding: 0 10px;
        height: 100%;
        .main{
            width: 100%;
            min-height: 200px;
            background-color: #ffffff;
        }
    }
}
</style>