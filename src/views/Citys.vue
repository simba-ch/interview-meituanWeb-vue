<template>
  <div class="citys center">
    <div class="op-area">
      <div class="choose-by-province">
        <h3 class="l-attr">按省份选择:</h3>
        <div class="choose-wrap">
          <div class="province-choose" @click.stop="appear('province')">
            {{ province }}
            <i class="icofont icon-downarrow">&#xe62e;</i>
            <div class="chart w-province" v-if="appearName === 'province'">
              <h3>省份</h3>
              <ul>
                <li
                  v-for="province in provinces"
                  :key="province.provinceCode"
                  :class="[active === province.provinceCode ? 'active' : '']"
                  @click.stop="selectProvince(province)"
                >
                  {{ province.provinceName }}
                </li>
              </ul>
            </div>
          </div>
          <div
            class="city-choose"
            @click.stop="appear('city')"
            :class="citys ? 'allow' : ''"
          >
            {{ city }}
            <i class="icofont icon-downarrow">&#xe62e;</i>
            <div class="chart" v-if="appearName === 'city' && citys">
              <h3>城市</h3>
              <ul :style="{ width: wCity }">
                <li
                  v-for="city in citys.cityInfoList"
                  :key="city.id"
                  @click.stop="changeCity(city.name)"
                >
                  {{ city.name }}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="search">
        <h3 class="l-attr">直接搜索：</h3>
        <input
          type="text"
          placeholder="请输入城市中文或拼音"
          class="search-text"
          v-model="searchCity"
        />
        <div class="suggest-city-container" v-if="keyCitys">
          <p class="no-match-city" v-if="keyCitys === '未找到匹配的城市'">
            {{ keyCitys }}
          </p>
          <ul v-else-if="searchCity !== ''">
            <li
              v-for="city in keyCitys"
              :key="city.id"
              @click="changeCity(city.name)"
            >
              {{ city.name }}
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="citylist">
      <h3 class="l-tittle">热门城市：</h3>
      <p class="r-info">
        <a
          href="javascript:;"
          v-for="city in hotCitys"
          :key="city.id"
          @click="changeCity(city.name)"
          >{{ city.name }}</a
        >
      </p>
    </div>
    <div class="citylist">
      <h3 class="l-tittle">最近访问：</h3>
      <p class="r-info">
        <a
          href="javascript:;"
          v-for="city in recentCitys"
          :key="city.id"
          @click="changeCity(city.name)"
          >{{ city.name }}</a
        >
      </p>
    </div>
    <div class="alphabet">
      <h3 class="l-tittle">按拼音首字母选择：</h3>
      <p class="r-info">
        <a
          v-for="letter in letterArr"
          :key="letter"
          class="letter"
          :href="'#' + letter"
        >
          {{ letter }}
        </a>
      </p>
    </div>
    <div class="alphabet-city-area">
      <div
        v-for="(citys, key) in allCitys"
        :key="key"
        :id="key"
        class="city-area"
      >
        <span class="city-label">{{ key }}</span>
        <ul class="cities">
          <li
            class="city"
            v-for="city in citys"
            :key="city.id"
            @click="changeCity(city.name)"
            :class="[city.rank === 'S' || city.rank === 'A' ? 'sa-city' : '']"
          >
            {{ city.name }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>


<script>
import axios from "../axios";
export default {
  data() {
    return {
      cityList: [],
      province: "省份",
      city: "城市",
      characters: "ABCDEFGHJKLMNPQRSTWXYZ",
      appearName: "",
      active: "",
      wCity: "",
      searchCity: "",
      allCitys: {},
      hotCitys: [],
      recentCitys: [],
    };
  },
  created() {
    this.$store.commit('incrementBottom','citys');
    this.$store.commit("changeNavDisplay", "");
    axios.getCityList().then((res) => {
      if (res.status === "success") {
        this.cityList = res.data;
        const citys = res.data
          .map((itemCity) => {
            return itemCity.cityInfoList;
          })
          .flat()
          .sort((firCity, secCity) => {
            return (
              firCity.firstChar.codePointAt(0) -
              secCity.firstChar.codePointAt(0)
            );
          });
        citys.forEach((city) => {
          if (this.allCitys[city.firstChar] === undefined)
            this.allCitys[city.firstChar] = [];
          this.allCitys[city.firstChar].push(city);
        });
      }
    });
    axios.getHotCitys().then((res) => {
      if (res.status === "success") {
        this.hotCitys = res.data;
      }
    });
    axios.getRecentCitys().then((res) => {
      if (res.status === "success") {
        this.recentCitys = res.data;
      }
    });
  },
  computed: {
    provinces() {
      return this.cityList
        .map((item) => {
          return {
            provinceName: item.provinceName,
            provinceCode: item.provinceCode,
          };
        })
        .sort((firEl, secEl) => {
          return +firEl.provinceCode - +secEl.provinceCode;
        });
    },
    citys() {
      const selectedProvince = this.cityList.find((item) => {
        return item.provinceName === this.province;
      });
      if (selectedProvince === undefined) return;
      const len = selectedProvince.cityInfoList.length;
      this.setWCity(len);
      return selectedProvince;
    },
    keyCitys() {
      const arr = new Array();
      let regStr = "(?=";
      if (this.searchCity === "") return "";
      const len = this.searchCity.length;
      for (let i = 0; i < len; i++) {
        if (
          this.searchCity.codePointAt(i) >= 65 &&
          this.searchCity.codePointAt(i) <= 90
        ) {
          const keyword = this.searchCity[i].toLowerCase();
          regStr += `[a-z\\u4e00-\\u9fa5]*${keyword}`;
        } else {
          regStr += `[a-z\\u4e00-\\u9fa5]*${this.searchCity[i]}`;
        }
        if (i === len - 1) regStr += ")";
      }
      const reg = new RegExp(regStr);
      for (const key in this.allCitys) {
        if (Object.hasOwnProperty.call(this.allCitys, key)) {
          const element = this.allCitys[key];
          element.forEach((city) => {
            if (reg.test(city.pinyin) || reg.test(city.name)) {
              arr.push(city);
            }
          });
        }
      }
      const result = [...new Set(arr)];
      if (result.length === 0) {
        return "未找到匹配的城市";
      } else {
        return result;
      }
    },
    letterArr() {
      return this.characters.split("");
    },
  },
  methods: {
    appear(province) {
      this.appearName = province;
    },
    selectProvince(province) {
      this.active = province.provinceCode;
      this.province = province.provinceName;
      this.appearName = "";
    },
    changeCity(cityName) {
      this.$store.commit("changeCity", cityName);
      this.$router.push("/");
    },
    setWCity(num) {
      if (num % 12) {
        this.wCity = Math.ceil(num / 12) * 90 + "px";
      } else {
        this.wCity = Math.floor(num / 12) * 90 + "px";
      }
    },
  },
  mounted() {
    const body = document.querySelector("body");
    body.onclick = () => {
      this.appearName = "";
    };
  },
};
</script>


<style scoped>
@import "../assets/css/citys.css";
</style>