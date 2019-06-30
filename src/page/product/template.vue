<template>
  <div>
    <Header></Header>
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>
<script>
import Header from "@component/product/header";
export default {
  components: {
    Header
  }
};
</script>
<style lang="scss">
@import "./style.scss";
</style>

