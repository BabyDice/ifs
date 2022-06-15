import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
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
    component: () => import("@/views/FormationView.vue"),
  },
  {
    path: "/bureau",
    name: "bureau",
    component: () => import("@/views/BureautiqueView.vue"),
  },
  {
    path: "/contact",
    name: "contact",
    component: () => import("@/views/ContactView.vue"),
  },
  {
    path: "/propos",
    name: "propos",
    component: () => import("@/views/ProposView.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
