<template>
  <div class="bureau">
    <VuelidateForm />
    <EmailJsForm />
  </div>
</template>
<script>
import VuelidateForm from "@/composants/VuelidateForm.vue";
import EmailJsForm from "@/composants/EmailJsForm.vue";
export default {
  name: "bureauView",
  components: {
    VuelidateForm,
    EmailJsForm,
  },
};
</script>
