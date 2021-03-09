<template>
  <div class="flex-v-center bg-color-body">
    <div class="center space-between topbar">
      <div class="change-city">
        <div class="city"><i class="icofont dingwei">&#xe63e;</i>{{ city }}</div>
        <div>
          <router-link :to="{ name: 'Citys' }" class="change-city-btn"
            >切换城市</router-link
          >
        </div>

        <div class="nearbycitys">
          [
          <a
            v-for="(city, index) in nearbyCitys"
            :key="index"
            href="https://wx.meituan.com/"
            >{{ city }}</a
          >
          ]
        </div>
        <div class="login" v-if="!count">
          <router-link :to="{ name: 'Login' }" class="color-orange"
            >立即登录</router-link
          >
          <router-link :to="{ name: 'Register' }">注册</router-link>
        </div>
        <div class="count" v-if="count">
          <a
            href="https://www.meituan.com/account/userinfo"
            class="color-orange"
            >{{ count }}</a
          >
          <a href="javascript:;" @click="exit">退出</a>
        </div>
      </div>
      <div class="top-nav">
        <ul>
          <li class="has-child">
            <a href="#">我的美团</a>
            <ul class="w-100">
              <li><a href="#"> 我的订单</a></li>
              <li><a href="#"> 我的收藏</a></li>
              <li><a href="#"> 抵用券</a></li>
              <li><a href="#"> 账户设置</a></li>
            </ul>
          </li>
          <li><a href="#">手机APP</a></li>
          <li class="has-child">
            <a href="#">商家中心</a>
            <ul class="merchant">
              <li><a href="#"> 美团餐饮商户中心</a></li>
              <li><a href="#"> 登录商家中心</a></li>
              <li><a href="#"> 美团智能收银</a></li>
              <li><a href="#"> 我想合作</a></li>
              <li><a href="#"> 手机免费开店</a></li>
              <li><a href="#"> 到店综合业务招募</a></li>
              <li><a href="#"> 餐饮合作商招募</a></li>
              <li><a href="#"> 商家申请开票</a></li>
              <li><a href="#"> 免费合作美团排队</a></li>
            </ul>
          </li>
          <li class="has-child">
            <a href="#">美团规则</a>
            <ul class="w-100">
              <li><a href="#">规则中心</a></li>
              <li><a href="#">规则目录</a></li>
              <li><a href="#">规则评议院</a></li>
            </ul>
          </li>
          <li class="has-child">
            <a href="#">网站导航</a>
            <ul class="web-nav">
              <li class="jiulv">
                <h3>酒店旅游</h3>
                <nav>
                  <a href="#"> 国际机票 </a>
                  <a href="#"> 火车票 </a>
                  <a href="#"> 民宿 </a>
                  <a href="#"> 经济型酒店 </a>
                  <a href="#"> 主题酒店 </a>
                  <a href="#"> 商务酒店 </a>
                  <a href="#"> 公寓 </a>
                  <a href="#"> 豪华酒店 </a>
                  <a href="#"> 客栈 </a>
                  <a href="#"> 青年旅社 </a>
                  <a href="#"> 度假酒店 </a>
                  <a href="#"> 别墅 </a>
                  <a href="#"> 农家院 </a>
                </nav>
              </li>
              <li class="meishi">
                <h3>吃美食</h3>
                <nav>
                  <a href="#"> 烤鱼 </a>
                  <a href="#"> 特色小吃 </a>
                  <a href="#"> 烧烤</a>
                  <a href="#"> 自助餐 </a>
                  <a href="#"> 火锅 </a>
                  <a href="#"> 代金券 </a>
                </nav>
              </li>
              <li class="movie">
                <h3>看电影</h3>
                <nav>
                  <a href="#"> 热映电影 </a>
                  <a href="#"> 热门影院 </a>
                  <a href="#"> 热映电影口碑榜 </a>
                  <a href="#"> 最受期待电影 </a>
                  <a href="#"> 国内票房榜 </a>
                  <a href="#"> 北美票房榜 </a>
                  <a href="#"> 电影排行榜 </a>
                </nav>
              </li>
              <li class="app">
                <h3>手机应用</h3>
                <nav>
                  <a href="#"
                    ><img
                      src="https://s0.meituan.net/bs/fe-web-meituan/2d53095/img/appicons/meituan.png"
                      alt=""
                  /></a>
                  <a href="#"
                    ><img
                      src="https://s1.meituan.net/bs/fe-web-meituan/404d350/img/appicons/waimai.png"
                      alt=""
                  /></a>
                  <a href="#"
                    ><img
                      src="https://p0.meituan.net/travelcube/162c3308d9622f6d9cfaa49e60be4dca8573.png"
                      alt=""
                  /></a>
                  <a href="#"
                    ><img
                      src="https://s1.meituan.net/bs/fe-web-meituan/404d350/img/appicons/dianping.png"
                      alt=""
                  /></a>
                  <a href="#"
                    ><img
                      src="https://s1.meituan.net/bs/fe-web-meituan/404d350/img/appicons/maoyan.png"
                      alt=""
                  /></a>
                </nav>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      nearbyCitys: ["江阴", "常州", "桃园"],
    };
  },
  computed: {
    count() {
      return this.$store.state.username;
    },
    city() {
      return this.$store.state.city;
    },
  },
  methods: {
    exit() {
      this.$store.commit("exit");
    },
  },
};
</script>

<style scoped>
@import "../assets/css/topbar.css";
</style>