<template>
  <div class="bureau">
    <VuelidateForm />
    <EmailJsForm />
  </div>
</template>
<script>
import VuelidateForm from "@/components/VuelidateForm.vue";
import EmailJsForm from "@/components/EmailJsForm.vue";
export default {
  name: "bureauView",
  components: {
    VuelidateForm,
    EmailJsForm,
  },
};
</script>
