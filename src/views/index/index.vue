<template>
    <div class="index-warp">
       <div class="side-bar"><SideBar/></div>
       <div class="main-warp">
           <router-view/>
       </div>
    </div>
</template>

<script>

    import SideBar from "@/components/Sidebar";

    export default {
      name: "home",
      components: {
          SideBar
      }
    }
</script>

<style scoped lang="scss" type="text/scss">

  .index-warp{
      position: relative;
      height: 100%;
      min-width: 1200px;
      .side-bar{
          width: 180px;
          float: left;
          height: 100%;
      }
      .main-warp{
          margin-left: 180px;
          height: 100%;
          .main{
              width: 100%;
              min-height: 200px;
              background-color: #c1c1c1;
          }
      }
  }
</style>