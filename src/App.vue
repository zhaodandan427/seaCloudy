<template>
  <div>
    <!--<div id="system-base" class="system-base"></div>-->
    <div id="app">
      <router-view />
      <!--<remote-script :src="getBaseUrl()"></remote-script>-->
      <!--<remote-script :src="getBaseBarUrl()"></remote-script>-->
      <!--<remote-css :href="getBaseBarCssUrl()"></remote-css>-->
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    getBaseUrl() {
      return `${window.mainSystemUrl}/system/assets/js/base.js`;
    },
    getBaseBarUrl() {
      return `${window.mainSystemUrl}/system/assets/js/system-base-bar.js`;
    },
    getBaseBarCssUrl() {
      return `${window.mainSystemUrl}/system/assets/css/system-base-bar.css`;
    }
  },
  components: {
    // 'remote-css': {
    //     render(createElement) {
    //         return createElement('link', {attrs: {rel: 'stylesheet', href: this.href}});
    //     },
    //     props: {
    //         href: { type: String, required: true}
    //     }
    // }
  }
};
</script>

<style>
</style>
