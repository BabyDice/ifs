<template>
  <div>
    Vous etes sur la page Accueil
    <ContactValiduateVue />
    <EmailJSVue />
  </div>
</template>

<style></style>

<script>
import ContactValiduateVue from "@/composants/ContactValiduate.vue";
import EmailJSVue from "@/composants/EmailJS.vue";
export default {
  name: "AccueilView",
  components: { ContactValiduateVue, EmailJSVue },
};
</script>
