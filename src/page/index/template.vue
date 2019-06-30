<template>
  <section>
    <aside>
      <div class="logo">REMOTE</div>
      <ul>
        <li>
          <router-link to="/info">self info</router-link>
        </li>
        <li>
          <router-link to="/mail">self mail</router-link>
        </li>
        <li>
          <a href="/product.html">product</a>
        </li>
      </ul>
    </aside>
    <main>
      <header>
        <div class="page-title">>{{$route.meta.title}}</div>
      </header>
      <div class="main-content">
        <router-view></router-view>
      </div>
    </main>
  </section>
</template>
<script>

export default {
  components:{
    
  },
  created(){
   
  },
  data(){
    return{
      
    };
  },
  methods:{
    
  },
};
</script>
<style lang="scss">
@import "./style.scss";
</style>

