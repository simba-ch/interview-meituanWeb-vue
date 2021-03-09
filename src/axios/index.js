import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";

Vue.use(VueAxios, axios);
const appkey = "simba_1579087548504";
const xhr = Vue.axios;

xhr.defaults.baseURL = "https://open.duyiedu.com";
xhr.interceptors.response.use((response) => {
  return response.data;
});

const login = function(userName, password) {
  return xhr.get("/api/meituan/login", {
    params: {
      userName,
      password,
      appkey,
    },
  });
};
const register = function(userName, password, rePassword) {
  return xhr.get("/api/meituan/register", {
    params: {
      appkey,
      userName,
      password,
      rePassword,
    },
  });
};

const nav = function() {
  return xhr.get("/api/meituan/index/nav.json", {
    params: {
      appkey,
    },
  });
};

const search = function() {
  return axios.get("/api/meituan/header/search.json", {
    params: {
      appkey,
    },
  });
};

const getCityList = function() {
  return xhr.get("/api/meituan/city/province.json", {
    params: {
      appkey,
    },
  });
};

const getHotCitys = function() {
  return xhr.get("/api/meituan/city/hot.json", {
    params: {
      appkey,
    },
  });
};

const getRecentCitys = function() {
  return xhr.get("/api/meituan/city/recents.json", {
    params: { appkey },
  });
};

const getHotSearchs = function() {
  return xhr.get("/api/meituan/header/searchHotWords.json", {
    params: {
      appkey,
    },
  });
};
const getGoodsList = function() {
  return xhr.get("/api/meituan/list/goodsList.json", {
    params: {
      appkey,
    },
  });
};

const getIndexResults = function() {
  return xhr.get("/api/meituan/index/resultsByKeywords.json", {
    params: {
      appkey,
    },
  });
};
export default {
  login,
  register,
  nav,
  search,
  getCityList,
  getHotCitys,
  getRecentCitys,
  getHotSearchs,
  getGoodsList,
  getIndexResults,
};
