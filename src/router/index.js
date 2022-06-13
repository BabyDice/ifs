import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "accueil",
    component: () => import("../components/PageAccueil.vue"),
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
    path: "/formation",
    name: "formation",
    component: () => import("../components/PageFomation.vue"),
  },
  {
    path: "/bureau",
    name: "bureau",
    component: () => import("../components/PageBureautique.vue"),
  },
  {
    path: "/contact",
    name: "contact",
    component: () => import("../components/PageContact.vue"),
  },
  {
    path: "/propos",
    name: "propos",
    component: () => import("../components/PagePropos.vue"),
  },
  {
    path: "*",
    name: "404",
    component: () => import("../components/PageNotFound.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
