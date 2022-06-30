<template>
  <div>
    Vous etes sur la page Accueil
    <ContactValiduateVue />
    <!-- <EmailJSVue /> -->
  </div>
</template>

<style></style>

<script>
import ContactValiduateVue from "@/composants/VuelidateForm.vue";
// import EmailJSVue from "@/composants/EmailJsForm.vue";
export default {
  name: "AccueilView",
  components: { ContactValiduateVue },
};
</script>
