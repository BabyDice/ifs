<script>
import Footer from "@/components/NavFooter.vue";
import Nav from "@/components/NavBar.vue";
export default {
  name: "App",
  components: {
    "app-footer": Footer,
    "app-nav": Nav,
  },
};
</script>

<template>
  <div id="app">
    <app-nav></app-nav>

    <router-view />
    <app-footer></app-footer>
  </div>
</template>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app {
  background-image: url("@/assets/background-cloud/top.png");
  background-repeat: no-repeat;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #ffffff;
    }
  }
}
</style>
