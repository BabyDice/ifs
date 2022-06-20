import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "accueil",
    component: () => import("../views/PageAccueil.vue"),
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "@/views/AboutView.vue"),
  },
  {
    path: "/",
    name: "accueil",
    component: () => import("@/views/AccueilView.vue"),
  },
  {
    path: "/formation",
    name: "formation",
    component: () => import("../views/PageFormation.vue"),
  },
  {
    path: "/bureau",
    name: "bureau",
    component: () => import("../views/PageBureautique.vue"),
  },
  {
    path: "/contact",
    name: "contact",
    component: () => import("../views/PageContact.vue"),
  },
  {
    path: "/propos",
    name: "propos",
    component: () => import("../views/PagePropos.vue"),
  },
  {
    path: "/*",
    name: "404",
    component: () => import("../views/PageNfound.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
