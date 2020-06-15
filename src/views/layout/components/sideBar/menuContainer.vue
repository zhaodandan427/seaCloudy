<template>

   <el-scrollbar>
        <el-menu ref="elmenu" mode="vertical" :default-active="activeIndex"  background-color="#162238" text-color="#fff" style="width:200px;">
            <menuTemplateItem :menuList="menuList"></menuTemplateItem>
        </el-menu>
    </el-scrollbar>

</template>
<style lang="scss" scoped>
    /*@import '../assets/img-path.scss';*/
    @import '../../../../assets/css/menuContainer.scss';
</style>
<script>
    import menuTemplateItem from './menuTemplateItem.vue';
    export default{
      name: 'menurouter',
      components: {
          menuTemplateItem
      },
      props: {
        isclose: {
          type: Boolean,
          require: false,
          default: false
        },
        menuList: {
          type: Array
        }
      },
      created(){
      },
      computed:{
          activeIndex(){
              return this.$route.name
          }
      }
    };
</script>
<style lang="scss" type="text/scss">

    // reset element-ui css
    .horizontal-collapse-transition {
        transition: 0s width ease-in-out, 0s padding-left ease-in-out, 0s padding-right ease-in-out;
    }

    .el-scrollbar {
        height: 100%;

        .el-scrollbar__wrap {
            overflow-x: hidden !important;
        }
        .el-scrollbar__view {
            height: 100%
        }

        .el-scrollbar__bar {
            &.is-vertical {
                right: 0px;
            }

            &.is-horizontal {
                display: none;
            }
        }
    }
    .el-menu {
        border: none;
        height: 100%;
        width: 100% !important;
    }

</style>