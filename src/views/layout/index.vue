<template>
    <div>
        <adminHeader></adminHeader>
        <leftNav></leftNav>
        <adminContent></adminContent>
    </div>

</template>

<style lang="scss" scoped>
@import "../../assets/css/index.scss";
</style>
<script>
import adminHeader from "./components/header/header.vue";
import leftNav from "./components/sideBar/leftNavigation.vue";
import adminContent from "./components/content/content.vue";
export default {
  name: "app",
  components: {
    adminHeader,
    leftNav,
    adminContent
  }
};
</script>
