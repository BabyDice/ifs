<script>
import { VueRecaptcha } from "vue-recaptcha";

export default {
  components: { VueRecaptcha },
  name: "VueRecaptcha",
};
</script>

<template>
  <div class="main">
    <vue-recaptcha
      sitekey="6Lflw8MgAAAAAN3unp976MK_cL-FbypmUnGaqSZY"
      :loadRecaptchaScript="true"
    ></vue-recaptcha>
  </div>
</template>
