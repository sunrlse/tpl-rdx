
// import show from "@component/product/show";
const profile = () => import(/* webpackChunkName: 'product-profile' */ "@component/product/profile");
const show = () => import(/* webpackChunkName: 'product-show' */ "@component/product/show");

const routes = [
  {
    path: "/",
    redirect: "/profile"
  },
  {
    path: "/profile",
    name: "product_profile",
    meta: {
      title: "Profile"
    },
    component: profile
  },
  {
    path: "/show",
    name: "product_show",
    meta: {
      title: "Pictures"
    },
    component: show
  }
];

export default  routes;
