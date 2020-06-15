<template>
    <div class="admin-content__top">
    	<div class="admin-content__middle">
    		<div class="admin-content__inside">
				<Breadcrumb></Breadcrumb>
    		</div>
    	</div>
    </div>
</template>

<style lang="scss" scoped>
	@import '../../../../assets/css/adminContent.scss';
</style>
<script>

    import Breadcrumb from "@/views/management/index.vue";
    export default {
        name: "home",
        components: {
            Breadcrumb
        }
    }
</script>