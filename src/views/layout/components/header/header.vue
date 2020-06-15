<template>
    <div class="admin-head__top">
        <div class="admin-head__setting">
            <a>
                <!--<img class="admin-head__img" src="../../img/logout.png">-->
                <span @click="loginOut">退出</span>
            </a>
        </div>
        <!--<div class="admin-head__password">-->
            <!--<a>-->
                <!--&lt;!&ndash;<img class="admin-head__img" src="../../img/key.png">&ndash;&gt;-->
                <!--<span>修改密码</span>-->
            <!--</a>-->
        <!--</div>-->
        <div class="admin-head__wel">
            <span>欢迎您，系统管理员！{{userName}}</span>
        </div>
    </div>
</template>
<style lang="scss" scoped>
@import "../../../../assets/css/head.scss";
</style>
<script>
export default {
  name: "header1",
  methods: {
    loginOut() {
      //退出登录
      this.$store.dispatch("loginOut").then(res => {
        this.$store.commit("outRouter");
        this.$router.push({ path: "/login" });
      });
    }
  },
  computed: {
    userName() {
      //获取用户名称
      return this.$store.state.user.currUser.real_name;
    }
  }
};
</script>
