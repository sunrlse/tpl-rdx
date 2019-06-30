import Vue from "vue";
import VueRouter from "vue-router";
import routes from "./routes";
import Tpl from "./template.vue";
import "@assets/style/main.scss";

Vue.use(VueRouter);

const router = new VueRouter({
  //   mode: "history",
  routes: routes
});


new Vue({
  router,
  render: h => h(Tpl),
}).$mount("#app");
