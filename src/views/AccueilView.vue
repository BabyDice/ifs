<template>
  <div>
    <app-nav></app-nav>
    Vous etes sur la page Accueil
    <app-footer></app-footer>
  </div>
</template>

<style></style>

<script>
import Footer from "@/composants/NavFooter.vue";
import Nav from "@/composants/NavBar.vue";
export default {
  name: "AccueilView",
  components: {
    "app-footer": Footer,
    "app-nav": Nav,
  },
};
</script>
