<template>
  <div>
    <app-footer></app-footer>
    Vous etes sur la page Accueil
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
