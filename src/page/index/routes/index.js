

import home from "@component/index/home";
const info = () => import(/* webpackChunkName: 'index-info' */ "@component/index/info");
const mail = () => import(/* webpackChunkName: 'index-mail' */ "@component/index/mail");
const routes = [
  {
    path: "/",
    name: "home",
    meta: {
      title: "HOME"
    },
    component: home
  },
  {
    path: "/info",
    name: "index_info",
    meta: {
      title: "INFO"
    },
    component: info
  },
  {
    path: "/mail",
    name: "index_mail",
    meta: {
      title: "MAIL"
    },
    component: mail
  },
];

export default routes;
