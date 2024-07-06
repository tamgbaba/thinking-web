<template>

 <div id="home">
    <div id="iframediv">
        <iframe src="/tvbox" frameborder="0" width="500px" ></iframe>
    </div>
 </div>

</template>
<script setup lang="ts">
import { onMounted } from 'vue';


onMounted(() => {
})


</script>

<style scoped>
#home {
    margin: 0;
    padding: 0;
    width: 100vw;
    height: 100vh;
    /* overflow: hidden; */
    display: flex;
}
#iframediv{
    margin: 0;
    padding: 0;
    height: 500px;
    width: 500px;
    display: flex;
}
</style>