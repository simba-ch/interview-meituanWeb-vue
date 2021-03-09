<template>
  <div class="register-module">
    <div>
      <div class="form-field count">
        <label for="count">账号</label>
        <input
          v-model.lazy="count"
          type="text"
          id="count"
          @focus="setFocus('infoCount', 'count')"
          @blur="validateCount"
          :class="warn.count"
        />
        <span v-if="unitiveTip" class="unitive-tip"
          >注册成功后，全美团通用</span
        >
        <span class="inline-tip" v-if="infoCount !== '' && infoCount !== 'true'"
          ><i class="icofont tip-status tip-status--opinfo color-warn">&#xe61f;</i>{{ infoCount }}</span
        >
        <i class="icofont tip-status inline-tip color-success" v-if="infoCount === 'true'"
          >&#xe67d;</i
        >
      </div>
      <div class="form-field pw">
        <label for="password">创建密码</label>
        <input
          type="password"
          id="password"
          v-model="password"
          @focus="setFocus('infoPassword', 'password')"
          @blur="validatePassword"
          :class="strengthBar"
        />
        <span
          class="inline-tip"
          v-if="infoPassword !== '' && infoPassword !== 'true'"
          ><i class="icofont tip-status color-warn">&#xe61f;</i>{{ infoPassword }}</span
        >
        <i
          class="icofont tip-status inline-tip color-success"
          v-if="infoPassword !== '' && infoPassword === 'true'"
          >&#xe67d;</i
        >
      </div>
      <div class="form-field">
        <div class="pw-strength">
          <div class="pw-strength-bar" :class="strengthBar"></div>
          <div class="pw-strength-letter">
            <span class="pw-strength-label">弱</span>
            <span class="pw-strength-label">中</span>
            <span class="pw-strength-label">强</span>
          </div>
        </div>
      </div>
      <div class="form-field repw">
        <label for="repassword">确认密码</label>
        <input
          type="password"
          id="repassword"
          v-model="confirmPassword"
          @blur="validateConfirmPassword"
          @focus="setFocus('infoConfirmPassword', 'confirmPassword')"
          :class="warn.confirmPassword"
        />
        <span
          class="inline-tip"
          v-if="infoConfirmPassword !== '' && confirm === 'false'"
          ><i class="icofont tip-status color-warn">&#xe61f;</i
          >{{ infoConfirmPassword }}</span
        >
        <i
          class="icofont tip-status inline-tip color-success"
          v-if="confirmPassword !== '' && confirm === 'true'"
          >&#xe67d;</i
        >
      </div>
      <div class="form-field">
        <button class="submit" @click="send">同意以下协议并注册</button>
      </div>
    </div>
    <div class="term">
      <a
        class="f1"
        href="https://rules-center.meituan.com/rules-detail/4"
        target="_blank"
        >《美团用户服务协议》</a
      >
      <a
        class="f1"
        href="https://rules-center.meituan.com/rules-detail/2"
        target="_blank"
        >《美团隐私政策》</a
      >
    </div>
  </div>
</template>


<script>
import { mapMutations } from "vuex";
import axios from "../axios";
const validateCountReg = /^(?=\w{4,16})(?=\w*[a-zA-Z])(?=\w*_)(?=\w*\d)\w*$/;
const validatePassWordReg = /^(?=\w{6,16})(?=\w*[a-zA-Z])(?=\w*\d)(?=\w*_)\w*$/;
const strong = /^(?=\w{6,16})(?=\w*[a-z])(?=\w*[A-Z])(?=\w*\d)(?=\w*_)\w*$/;
const middle = /^(?=\w{6,16})(?=\w*[a-zA-Z])(?=\w*\d)(?=\w*_)\w*$/;
export default {
  data() {
    return {
      unitiveTip: true,
      infoCount: "",
      infoPassword: "",
      infoConfirmPassword: "",
      count: "",
      password: "",
      confirmPassword: "",
      warn: {
        count: "",
        password: "",
        confirmPassword: "",
      },
    };
  },
  computed: {
    strengthBar() {
      if (this.password === "") {
        return "";
      } else if (strong.test(this.password)) {
        return "strong";
      } else if (middle.test(this.password)) {
        return "middle";
      } else {
        return "weak";
      }
    },
    confirm() {
      if (this.password === this.confirmPassword && this.password !== "") {
        return "true";
      } else {
        return "false";
      }
    },
  },
  methods: {
    changeUnitiveTip() {
      this.unitiveTip = false;
    },
    setFocus(info, type) {
      if (type === "count" && this.unitiveTip === true) this.unitiveTip = false;
      this[info] = "";
      this.warn[type] = "";
    },
    validateCount() {
      if (validateCountReg.test(this.count)) {
        this.infoCount = "true";
      } else {
        this.warn.count = "warn";
        this.infoCount = "用户名必须为4-16位的字母数字下划线组成";
      }
    },
    validatePassword() {
      if (validatePassWordReg.test(this.password)) {
        this.infoPassword = "true";
      } else {
        this.infoPassword = "密码必须为6-16位的字母数字下划线组成";
      }
    },
    send() {
      axios
        .register(this.count, this.password, this.confirmPassword)
        .then((response) => {
          if (response.status === "success") {
            this.changeUsername(response.data);
            this.$router.replace("/");
            return;
          } else if (response.status === "fail") {
            this.infoCount = response.msg;
          }
        });
    },
    ...mapMutations(["changeUsername"]),
    validateConfirmPassword() {
      if (
        this.confirmPassword === "" ||
        this.password !== this.confirmPassword
      ) {
        this.infoConfirmPassword = "两次输入的密码不一致";
      }
    },
  },
};
</script>


<style scoped>
@import "../assets/css/registermodule.css";
</style>