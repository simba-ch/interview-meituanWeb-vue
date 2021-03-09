<template>
  <div class="login-page bg-blank">
    <header class="cf">
      <router-link class="site-logo" to="/">美团网</router-link>
    </header>
    <div>
      <div class="site-body cf">
        <div class="pg-unitive-login">
          <img
            src="//s0.meituan.net/bs/file/?f=fe-sso-fs:build/page/static/banner/www.jpg"
            width="480"
            height="370"
            alt="美团网"
          />
        </div>
        <LOGIN />
      </div>
    </div>
    <footer>
      <div class="site-info-nav cf">
        <ul>
          <li class="first">
            <a rel="nofollow" href="https://about.meituan.com/about.html"
              >关于美团</a
            >
          </li>
          <li>
            <a rel="nofollow" href="https://zhaopin.meituan.com/">加入我们</a>
          </li>
          <li>
            <a
              rel="nofollow"
              href="http://emis.meishi.meituan.com/merchantsSettled"
              >商家入驻</a
            >
          </li>
          <li>
            <a rel="nofollow" href="https://www.meituan.com/help/faq"
              >帮助中心</a
            >
          </li>
          <li class="last">
            <a href="http://meituan.com/mobile">美团手机版</a>
          </li>
        </ul>
      </div>
      <div class="copyright">
        <p>
          ©<span>2021</span>
          <a href="https://www.meituan.com">美团网团购</a>
          meituan.com
          <a href="http://www.miibeian.gov.cn/" target="_blank"
            >京ICP证070791号</a
          >
          京公网安备11010502025545号
        </p>
      </div>
    </footer>
  </div>
</template>

<script>
import LOGIN from "@/components/LOGIN.vue";
export default {
  components: {
    LOGIN,
  },
};
</script>

<style scoped>
@import "../assets/css/login.css";
</style>