<template>
    <!-- 过渡动画 -->
    <transition name="fade">
        <div class="img-view" @click="bigImg">
            <!-- 遮罩层 -->
            <div class="img-layer">
                 <div class="img">
                <img :src="imgSrc">
            </div>
            </div>
           
        </div>
    </transition>
</template>
<script>
    export default {
        props: ['imgSrc'],
        methods: {
            bigImg() {
                // 发送事件
                this.$emit('clickit')
            }
        }
    }
</script>
<style scoped>
    /*动画*/
    .fade-enter-active,
    .fade-leave-active {
        transition: all .2s linear;
        transform: translate3D(0, 0, 0);
    }

    .fade-enter,
    .fade-leave-active {
       /* transform: translate3D(100%, 0, 0);*/
    }


    /* bigimg */

    .img-view {
        position: relative;
        width: 100%;
        height: 100%;
    }

    /*遮罩层样式*/
    .img-view .img-layer {
        position: fixed;
        z-index: 999;
        top: 0;
        left: 0;
        background: rgba(0, 0, 0, 0.7);
        width: 100%;
        height: calc(100vh);
        overflow: hidden;
    }

    /*不限制图片大小，实现居中*/
    .img-view .img img {
        width: 600px;
        height: 600px;
        /* //max-width: 100%; */
        display: block;
        position: absolute;
        top: 50%;
        left:50%;
        transform: translate(-50%,-50%);
        z-index: 1000;
    }
</style>
