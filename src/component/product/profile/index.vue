<template>
    <div class="iframe-wrap">
        <iframe src="https://cn.bing.com" frameborder="0" scrolling="auto"></iframe>
    </div>
</template>
<script>
export default {
    
};
</script>
<style lang="scss" scoped>
.iframe-wrap {
    width: 75vw;
    height: 50vw;
    margin: 30px auto;
    box-shadow: 0 0 5px dimgray;
    iframe {
        width: 100%;
        height: 100%;
    }
}
</style>
