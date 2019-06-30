<template>
    <header>
        <div class="logo"><a href="javascript:;">Image</a></div>
        <div class="menu">
            <router-link to="/profile">profile</router-link>
            <router-link to="/show">pictures</router-link>
            <a href="/">Index</a>
        </div>
    </header>
</template>
<script>
import axios from "@util/axios";
export default {
  data() {
    return {
      navs: []
    };
  },
  created() {
    this.getNavs();
  },
  methods: {
    async getNavs() {
      let { data } = await axios.get("/abc/123?id=111");
      console.log(data);
    }
  }
};
</script>

<style lang="scss" scoped>
header {
    height: 60px;
    display: flex;
    justify-content: space-between;
}
.logo {
    width: 200px;
    line-height: 60px;
    text-align: center;
    a {
        font-size: 24px;
        color: #147B96;
        background-image: -webkit-linear-gradient(left, #147B96, #E6D205 25%, #147B96 50%, #E6D205 75%, #147B96);
        -webkit-text-fill-color: transparent;
        -webkit-background-clip: text;
        -webkit-background-size: 200% 100%;
        -webkit-animation: move-light 4s infinite linear;
    }
}
.menu {
    flex: 1;
    display: flex;
    padding: 0 30px;
    justify-content: flex-end;
    align-items: center;
    a {
        color: purple;
        margin: 0 10px;
    }
}
@keyframes move-light {
    0% {
        background-position: 0 0;
    }

    100% {
        background-position: -100% 0;
    }
}
</style>
