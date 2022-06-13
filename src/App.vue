<script>
import PageNavbar from "./components/navbar/PageNavbar.vue";
export default {
  components: { PageNavbar },
};
</script>

<template>
  <div id="app">
    <PageNavbar />
    <!-- <nav>
      <router-link to="/">Accueil</router-link> |
      <router-link to="/formation">Formation</router-link>
      <router-link to="/propos">A propos</router-link>
      <router-link to="/contact">Contact</router-link>
    </nav> -->
    <router-view />
  </div>
</template>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app {
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
      color: #42b983;
    }
  }
}
</style>
