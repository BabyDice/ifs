<template>
  <div>
    Vous etes sur la page Accueil
    <app-footer></app-footer>
  </div>
</template>

<style></style>

<script>
import Footer from "@/composants/NavFooter.vue";
export default {
  name: "AccueilView",
  components: {
    "app-footer": Footer,
  },
};
</script>
