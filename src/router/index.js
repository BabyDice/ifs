import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/",
    name: "accueil",
    component: require("../components/PageAccueil.vue"),
  },
  {
    path: "/formation",
    name: "formaion",
    component: require("../components/PageFomation.vue"),
  },
  {
    path: "/bureau",
    name: "bureau",
    component: require("../components/PageBureautique.vue"),
  },
  {
    path: "/contact",
    name: "contact",
    component: require("../components/PageContact.vue"),
  },
  {
    path: "/propos",
    name: "propos",
    component: require("../components/PagePropos.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
