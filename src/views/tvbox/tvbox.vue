<template>
    <div id="tvbox">
        <iframe src="https://home.tvbox.xn--fiqs8s/" id="homeIframe" @load="iframeLoad($event)"
            frameborder="0"></iframe>
    </div>
</template>
<script setup lang="ts">
import { onMounted } from 'vue';

// setup 函数内的代码会被自动注入到组件中
const iframeLoad = (event: Event) => {
    const iframe = event.target ;
 
};
onMounted(() => {
})


</script>

<style scoped>
#tvbox {
    margin: 0;
    padding: 0;
    width: 100vw;
    height: 100vh;
    /* overflow: hidden; */
    display: flex;
}

#homeIframe {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
}


</style>