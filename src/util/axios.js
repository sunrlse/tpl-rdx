import axios from "axios";
import config from "@config/index";
axios.defaults.baseURL = config[process.env.API_ENV];
axios.defaults.timeout = 60000;

axios.interceptors.request.use(
  config => {
    if (config.method === "post") {
      config.data = {  ...config.data };
    } else if (config.method === "get") {
      config.params = { ...config.params };
    }
    return config;
  }, function (error) {
    return Promise.reject(error); 
  }
);

axios.interceptors.response.use(
  res => {
    return res;
  }, function(error) {
    return Promise.resolve(error); 
  }
);

export default axios;