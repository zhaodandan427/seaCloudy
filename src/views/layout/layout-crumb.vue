<template>
    <div>
        <adminHeader></adminHeader>
        <leftNav></leftNav>
        <contentCrumb></contentCrumb>
    </div>

</template>

<style lang="scss" scoped>
@import "../../assets/css/index.scss";
</style>
<script>
import adminHeader from "./components/header/header.vue";
import leftNav from "./components/sideBar/leftNavigation.vue";
import contentCrumb from "./components/content/content-crumb";
export default {
  name: "app",
  components: {
    adminHeader,
    leftNav,
    contentCrumb
  }
};
</script>
