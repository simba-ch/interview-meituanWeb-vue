<template>
  <div class="register">
    <header>
      <div class="wrapper cf">
        <router-link class="site-logo" to="/">美团</router-link>
        <div class="login-block">
          <span class="tip">已有美团账号？</span>
          <router-link class="register-login-btn" :to="{ name: 'Login' }"
            >登录</router-link
          >
        </div>
      </div>
    </header>
    <REGISTER />
    <footer class="footer">
      <p class="copyright">
        ©<a class="f1" href="https://www.meituan.com">meituan.com</a>&nbsp;
        <a class="f1" target="_blank" href="http://www.miibeian.gov.cn/"
          >京ICP证070791号</a
        >&nbsp;
        <span class="f1">京公网安备11010502025545号</span>
      </p>
    </footer>
  </div>
</template>
<script>
import REGISTER from "@/components/REGISTER.vue";
export default {
  components: {
    REGISTER,
  },
};
</script>



<style scoped>
@import "../assets/css/register.css";
</style>