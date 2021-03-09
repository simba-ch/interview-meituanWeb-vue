import Vue from "vue";
import VueX from "vuex";

Vue.use(VueX);
const state = {
  username: "",
  city: "无锡",
  derivatives: "",
  navDisplay: "",
  goodsList: [],
  searchWord: "",
  bottom: "increment",
};
const getters = {
  goodsArr(state) {
    const arr = [];
    const random = Math.floor(Math.random() * 30) + 10;
    for (let i = 0; i < random; i++) {
      arr.push(state.goodsList);
    }
    return arr.flat();
  },
};
const mutations = {
  changeUsername(state, value) {
    state.username = value;
  },
  exit(state) {
    state.username = "";
  },
  changeCity(state, value) {
    state.city = value;
  },
  changeDerivatives(state, name) {
    state.derivatives = name;
  },
  changeNavDisplay(state, display) {
    state.navDisplay = display;
  },
  changeGoodsList(state, goodsList) {
    state.goodsList = goodsList;
  },
  changeSearchWord(state, word) {
    state.searchWord = word;
  },
  incrementBottom(state, page) {
    if (page === "index") {
      state.bottom = "increment";
    } else {
      state.bottom = "";
    }
  },
};

export default new VueX.Store({
  getters,
  state,
  mutations,
});
