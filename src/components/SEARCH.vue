<template>
  <div class="search">
    <div class="center clearfix" :class="bottom">
      <div class="title">
        <div class="logo">
          <router-link to="/">
            <img
              src="https://s0.meituan.net/bs/fe-web-meituan/10afbf1/img/logo.png"
              alt=""
            />
          </router-link>
        </div>
        <ul class="categorys" :class="navDisplay">
          <li class="categorys-all">全部分类</li>
          <nav class="categorys-list">
            <li v-for="(item, index) in nav" :key="index">
              <a
                href="#"
                v-for="(type, i) in item"
                :key="i"
                :class="[i + 1 === item.length ? '' : 'not-last']"
                >{{ type }}</a
              >
            </li>
          </nav>
        </ul>
      </div>
      <div class="search-input">
        <div class="search-block">
          <input
            type="text"
            placeholder="搜索商家或地点"
            :value="searchWord"
            @input.stop="inputSearchWord"
            @click.stop
            @focus.stop="changedisplay('focus')"
          />
          <button class="search-btn" @click="searchGoods('btn', searchWord)">
            <i class="icofont">&#xe643;</i>
          </button>
        </div>
        <div class="search-suggest" :class="display">
          <ul>
            <li v-for="(word, index) in wordList" :key="index">
              <a href="javascript:;" @click="searchGoods('link', word)">{{
                word
              }}</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "../axios";
export default {
  created() {
    document.querySelector("body").onclick = () => {
      if (this.display != "none") this.display = "none";
    };
  },
  data() {
    return {
      nav: [
        ["美食"],
        ["外卖"],
        ["酒店"],
        ["民宿"],
        ["猫眼电影"],
        ["机票", "火车票"],
        ["休闲娱乐", "KTV"],
        ["生活服务"],
        ["丽人", "美发", "医学美容"],
        ["结婚", "婚纱摄影", "婚宴"],
        ["亲子", "儿童乐园", "幼教"],
        ["运动健身", "健身中心"],
        ["家装", "建材", "家居"],
        ["学习培训", "音乐培训"],
        ["医疗", "健康宠物", "爱车"],
        ["酒吧", "密室逃脱"],
      ],
      searchWord: "",
      wordList: [],
      isClick: false,
      display: "none",
    };
  },
  computed: {
    navDisplay() {
      return this.$store.state.navDisplay;
    },
    bottom(){
      return this.$store.state.bottom;
    },userName(){
      return this.$store.state.username
    }
  },
  methods: {
    search() {
      axios.search().then((res) => {
        if (res.status === "success") {
          this.wordList = res.data.list;
        }
      });
    },
    inputSearchWord(e) {
      const searchWord = e.target.value;
      this.searchWord = searchWord;
      if (!searchWord.trim()) {
        this.wordList = [];
        return;
      }

      if (this.isClick) {
        this.isClick = false;
        return;
      }
      axios.search().then((res) => {
        if (res.status === "success") {
          this.wordList = res.data.list;
        }
      });
    },
    searchGoods(type, word) {
      if(this.$store.state.searchWord === word) return;
      this.$store.commit("changeSearchWord", word);
      if (type === "link") {
        this.searchWord = word;
        this.isClick = true;
      }
      if (this.searchWord) {
        axios.getGoodsList().then((res) => {
          if (res.status === "success") {
            this.$store.commit("changeGoodsList", res.data);
            if (this.$router.currentRoute.name !== "Goods") {
              this.$router.push({ name: "Goods" });
            }
          }
        });
      }
    },
    changedisplay(type) {
      if (type === "blur") {
        this.display = "none";
      } else if (type === "focus") {
        this.display = "";
      }
    },
  },
};
</script>


<style scoped>
@import "../assets/css/search.css";
</style>