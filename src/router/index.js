import Vue from "vue";
import VueRouter from "vue-router";
import Root from "@/views/Root.vue";
import Home from "../views/Home.vue";
import Citys from "@/views/Citys.vue";
import Goods from "@/views/Goods.vue";
import Blank from "@/views/Blank.vue";
import Register from "@/views/Register.vue";
import Login from "@/views/Login.vue";
import Content from "@/views/Content.vue";
import Index from "@/views/Index.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "/",
    component: Root,
    children: [
      {
        path: "/home",
        name: "/home",
        alias: "/",
        redirect: { name: "Index" },
        component: Home,
        children: [
          {
            path: "content",
            name: "Content",
            component: Content,
            children: [
              {
                path: "/goods",
                name: "Goods",
                component: Goods,
              },
              {
                path: "index",
                name: "Index",
                component: Index,
              },
            ],
          },
          {
            path: "/changeCity",
            name: "Citys",
            component: Citys,
          },
        ],
      },
      {
        path: "blank",
        name: "Blank",
        component: Blank,
        children: [
          {
            path: "/register",
            name: "Register",
            component: Register,
          },
          {
            path: "/login",
            name: "Login",
            component: Login,
          },
        ],
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
});

router.beforeEach((to, from, next) => {
  if (to.name === "Register") {
    document.querySelector("body").classList.add("bg-color-white");
  }
  next();
});

export default router;
