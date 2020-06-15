<template>
    <div>
        <template v-for="(item,index) in menuList">
            <el-submenu subid="adminLeft" v-if="item.children && item.children.length>0 && !item.hidden"  :isclose="isclose"
                        :index="String(item.name)" frompage="admin" menu-trigger="click">
                <a :id='item.id' slot="title" :title='item.meta.name'>
                    <i :class="'com-menuContainer__'+item.icon_class"></i>
                    <span v-if="!isclose">{{item.meta.name}}</span>
                </a>
                <menuItem :menuList="item.children"></menuItem>

            </el-submenu>
            <el-menu-item v-else-if="!item.hidden" :issubmenu="true" :isclose="isclose"
                          :index="String(item.name)" :needPassClickAction="true"
                          @emitclick="gotoPage(item.name)" @click="gotoPage(item.name)">
                <a :id='item.id' :title="item.meta.name"
                   :class="{'submenu_open_item':!isclose,'submenu_close_item':isclose}">
                    <li class="com-menuContainer__submenu-icon"></li>
                    <span>{{item.meta.name}}</span>
                </a>
            </el-menu-item>
        </template>
    </div>

</template>

<script>
    export default {
        name: "menuItem",
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
            console.log('this.menuList',this.menuList);
        },
        methods: {
            gotoPage: function(name) {
                console.log(name);
                let path = { name: name};
                this.$router.push(path);
            },
            handleOpen() {
                this.state = 'open';
            },

            handleClose() {
                this.state = 'closed';
            }
        },
    }
</script>

<style lang="scss" type="text/scss">
    .el-submenu .el-menu-item{
        & > a{
            color: #ffffff;
        }
    }
    .el-submenu__title{
        & > a{
            color: #ffffff;
        }
    }
    .el-menu-item {
        & > a{
            color: #ffffff;
        }
    }
    .el-menu-item.is-active{
        & > a{
            color: #409EFF;
        }
    }
    @media screen and (max-width: 1366px) {
        .el-menu-item, .el-submenu__title{
            height: 40px;
            line-height: 40px;
        }
        .el-submenu .el-menu-item{
            height: 34px;
            line-height: 34px;
        }
    }

</style>
