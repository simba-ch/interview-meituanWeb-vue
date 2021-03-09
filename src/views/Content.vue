<template>
  <div class="content">
    <router-view></router-view>
    <div class="footer-nav">
      <h3 class="nav-tittle">美团导航</h3>
      <dl class="b-n-content">
        <div class="b-n-classification">
          <dt class="b-n-subtitle">热门城市</dt>
          <div class="b-n-sublist">
            <dd
              class="b-n-list-item"
              v-for="hotCity in hotCitys"
              :key="hotCity.id"
            >
              <a
                href="javascript:;"
                :title="hotCity.name"
                @click="changeCity(hotCity.name)"
                >{{ hotCity.name }}</a
              >
            </dd>
          </div>
        </div>
        <div class="b-n-classification">
          <dt class="b-n-subtitle">热门分类</dt>
          <div
            class="b-n-sublist"
            :class="[derivatives === 'goods' ? 'last' : '']"
          >
            <dd
              class="b-n-list-item"
              v-for="hotType in hotTypes"
              :key="hotType"
            >
              <a href="javascript:;" :title="hotType">{{ hotType }}</a>
            </dd>
          </div>
        </div>
        <div
          class="b-n-classification"
          id="derivatives"
          :class="[derivatives === 'goods' ? 'none' : '']"
        >
          <dt class="b-n-subtitle">周边热门</dt>
          <div class="b-n-sublist last">
            <dd
              class="b-n-list-item"
              v-for="hotSearch in hotSearchs"
              :key="hotSearch"
            >
              <a href="javascript:;" :title="hotSearch">{{ hotSearch }}</a>
            </dd>
          </div>
        </div>
      </dl>
    </div>
  </div>
</template>

<script>
import axios from "../axios";
export default {
  data() {
    return {
      provinces: [],
      type: [
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
      hotSearchs: [],
      rankASCitys: [
        {
          id: 55,
          name: "南京",
          pinyin: "nanjing",
          acronym: "nj",
          rank: "A",
          firstChar: "N",
        },
        {
          id: 1,
          name: "北京",
          pinyin: "beijing",
          acronym: "bj",
          rank: "S",
          firstChar: "B",
        },
        {
          id: 50,
          name: "杭州",
          pinyin: "hangzhou",
          acronym: "hz",
          rank: "A",
          firstChar: "H",
        },
        {
          id: 10,
          name: "上海",
          pinyin: "shanghai",
          acronym: "sh",
          rank: "S",
          firstChar: "S",
        },
        {
          id: 40,
          name: "天津",
          pinyin: "tianjin",
          acronym: "tj",
          rank: "A",
          firstChar: "T",
        },
        {
          id: 42,
          name: "西安",
          pinyin: "xian",
          acronym: "xa",
          rank: "A",
          firstChar: "X",
        },
        {
          id: 59,
          name: "成都",
          pinyin: "chengdu",
          acronym: "cd",
          rank: "A",
          firstChar: "C",
        },
        {
          id: 57,
          name: "武汉",
          pinyin: "wuhan",
          acronym: "wh",
          rank: "A",
          firstChar: "W",
        },
        {
          id: 20,
          name: "广州",
          pinyin: "guangzhou",
          acronym: "gz",
          rank: "A",
          firstChar: "G",
        },
        {
          id: 30,
          name: "深圳",
          pinyin: "shenzhen",
          acronym: "sz",
          rank: "A",
          firstChar: "S",
        },
        {
          id: 45,
          name: "重庆",
          pinyin: "chongqing",
          acronym: "cq",
          rank: "A",
          firstChar: "C",
        },
      ],
      rankBCitys: [
        {
          id: 60,
          name: "青岛",
          pinyin: "qingdao",
          acronym: "qd",
          rank: "B",
          firstChar: "Q",
        },
        {
          id: 96,
          name: "济南",
          pinyin: "jinan",
          acronym: "jn",
          rank: "B",
          firstChar: "J",
        },
        {
          id: 52,
          name: "无锡",
          pinyin: "wuxi",
          acronym: "wx",
          rank: "B",
          firstChar: "W",
        },
        {
          id: 80,
          name: "苏州",
          pinyin: "suzhou",
          acronym: "su",
          rank: "B",
          firstChar: "S",
        },
        {
          id: 89,
          name: "常州",
          pinyin: "changzhou",
          acronym: "cz",
          rank: "B",
          firstChar: "C",
        },
        {
          id: 114,
          name: "昆明",
          pinyin: "kunming",
          acronym: "km",
          rank: "B",
          firstChar: "K",
        },
        {
          id: 51,
          name: "宁波",
          pinyin: "ningbo",
          acronym: "nb",
          rank: "B",
          firstChar: "N",
        },
        {
          id: 112,
          name: "温州",
          pinyin: "wenzhou",
          acronym: "wz",
          rank: "B",
          firstChar: "W",
        },
        {
          id: 107,
          name: "贵阳",
          pinyin: "guiyang",
          acronym: "gy",
          rank: "B",
          firstChar: "G",
        },
        {
          id: 56,
          name: "合肥",
          pinyin: "hefei",
          acronym: "hf",
          rank: "B",
          firstChar: "H",
        },
        {
          id: 70,
          name: "长沙",
          pinyin: "changsha",
          acronym: "chs",
          rank: "B",
          firstChar: "C",
        },
        {
          id: 76,
          name: "石家庄",
          pinyin: "shijiazhuang",
          acronym: "sjz",
          rank: "B",
          firstChar: "S",
        },
        {
          id: 65,
          name: "大连",
          pinyin: "dalian",
          acronym: "dl",
          rank: "B",
          firstChar: "D",
        },
        {
          id: 66,
          name: "沈阳",
          pinyin: "shenyang",
          acronym: "sy",
          rank: "B",
          firstChar: "S",
        },
        {
          id: 116,
          name: "长春",
          pinyin: "changchun",
          acronym: "cc",
          rank: "B",
          firstChar: "C",
        },
        {
          id: 44,
          name: "福州",
          pinyin: "fuzhou",
          acronym: "fz",
          rank: "B",
          firstChar: "F",
        },
        {
          id: 62,
          name: "厦门",
          pinyin: "xiamen",
          acronym: "xm",
          rank: "B",
          firstChar: "X",
        },
        {
          id: 91,
          name: "东莞",
          pinyin: "dongguan",
          acronym: "dg",
          rank: "B",
          firstChar: "D",
        },
        {
          id: 92,
          name: "佛山",
          pinyin: "foshan",
          acronym: "fs",
          rank: "B",
          firstChar: "F",
        },
        {
          id: 101,
          name: "太原",
          pinyin: "taiyuan",
          acronym: "ty",
          rank: "B",
          firstChar: "T",
        },
        {
          id: 105,
          name: "哈尔滨",
          pinyin: "haerbin",
          acronym: "hrb",
          rank: "B",
          firstChar: "H",
        },
        {
          id: 73,
          name: "郑州",
          pinyin: "zhengzhou",
          acronym: "zz",
          rank: "B",
          firstChar: "Z",
        },
        {
          id: 99,
          name: "南宁",
          pinyin: "nanning",
          acronym: "nn",
          rank: "B",
          firstChar: "N",
        },
      ],
    };
  },
  created() {
    axios.getCityList().then((res) => {
      if (res.status === "success") {
        this.provinces = res.data;
      }
    });
    axios.getHotSearchs().then((res) => {
      if (res.status === "success") {
        this.hotSearchs = res.data;
      }
    });
  },
  computed: {
    citys() {
      const result = {};
      this.provinces
        .map((province) => {
          return province.cityInfoList;
        })
        .flat()
        .forEach((city) => {
          if (!result[city.rank]) result[city.rank] = [];
          result[city.rank].push(city);
        });
      return result;
    },
    hotCitys() {
      const rankBCity = this.rankBCitys;
      const maxNum = rankBCity.length;
      const randomArr = [];

      while (randomArr.length < 9) {
        let i = Math.floor(Math.random() * maxNum);
        let item = rankBCity[i];
        if (!randomArr.includes(item)) randomArr.push(item);
      }
      return [this.rankASCitys, randomArr].flat().sort(() => {
        return Math.random() - 0.5;
      });
    },
    hotTypes() {
      const arr = [];
      const typeArr = this.type.flat();
      while (arr.length < 20) {
        arr.push(typeArr[Math.floor(Math.random() * 31)]);
      }
      return [...new Set(arr)];
    },
    derivatives() {
      return this.$store.state.derivatives;
    },
  },
  methods: {
    changeCity(value) {
      this.$store.commit("changeCity", value);
      document.body.scrollTop = document.documentElement.scrollTop = 0;
    },
  },
};
</script>

<style scoped>
@import "../assets/css/content.css";
</style>