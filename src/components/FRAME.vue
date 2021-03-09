<template>
  <div :class="topBar">
    <div class="index-nav-container" :class="bgColor">
      <ul class="cf">
        <li
          v-for="(type, name, index) in nav"
          :key="name"
          :class="[type, { active: active === index }]"
          @mouseenter="enter(name, index), $emit('change-list', who, name)"
        >
          {{ name }}
        </li>
      </ul>
    </div>
    <div :class="content">
      <slot />
    </div>
  </div>
</template>


<script>
export default {
  name: "Frame",
  props: ["topBar", "content", "list", "nav", "who",'bgColor'],
  data() {
    return {
      active: 1,
    };
  },
  methods: {
    enter(name, index) {
      if (name === "全部" || index === 0) return;
      this.active = index;
    },
  },
};
</script>

<style scoped>
@import "../assets/css/frame.css";
</style>