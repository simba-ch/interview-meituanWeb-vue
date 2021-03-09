<template>
  <div class="login-module">
    <div class="validate-info" :class="[msg ? 'visible' : '']">
      <i class="tip"></i> {{ msg }}
    </div>
    <span class="login-type">账号登录</span>
    <div
      class="input-wrapper count-input"
      :class="[focus === 'count' ? 'focus' : '']"
    >
      <i class="icofont input-icon">&#xe61b;</i>
      <input
        @focus="setFocus('count')"
        @blur="setFocus()"
        v-model.lazy="count"
        type="text"
        placeholder="请输入账号"
      />
    </div>
    <div
      class="input-wrapper pw-input"
      :class="[focus === 'password' ? 'focus' : '']"
    >
      <i class="icofont input-icon">&#xe66c;</i>
      <input
        @focus="setFocus('password')"
        @blur="setFocus()"
        v-model.lazy="password"
        type="password"
        placeholder="请输入密码"
      />
    </div>
    <div class="cf wjmm">
      <a
        href="https://passport.meituan.com/useraccount/retrievepassword?risk_partner=0&service=www&continue=http%3A%2F%2Fwww.meituan.com%2Faccount%2Fsettoken"
        class="wjmm-txt"
        >忘记密码？</a
      >
    </div>
    <button class="login-btn" @click="login">登陆</button>
    <p class="signup-guide">
      还没有账号？<router-link :to="{ name: 'Register' }" class="color-orange"
        >免费注册</router-link
      >
    </p>
    <div class="oauth-wrapper">
      <h3>用合作网站账号登录</h3>
      <div class="oauth cf">
        <span class="oauth__link--qq"></span>
        <span class="oauth__link--weibo"></span>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "@/axios";
import { mapMutations } from "vuex";
export default {
  data() {
    return {
      focus: false,
      msg: "",
      count: "",
      password: "",
    };
  },
  methods: {
    ...mapMutations(["changeUsername"]),
    setFocus(value) {
      this.msg = "";
      if (value) {
        this.focus = value;
      } else {
        this.focus = "";
      }
    },
    login() {
      axios.login(this.count, this.password).then((response) => {
        if (response.status === "success") {
          this.changeUsername(response.data);
          this.$router.replace("/");
        } else if (response.status === "fail") {
          this.msg = response.msg;
        }
      });
    },
  },
};
</script>

<style scoped>
@import "../assets/css/loginmodule.css";
</style>