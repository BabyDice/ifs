<script>
import { VueRecaptcha } from "vue-recaptcha";
export default {
  components: { VueRecaptcha },

  methods: {
    onEvent() {
      // when you need a reCAPTCHA challenge
      this.$refs.recaptcha.execute();
    },
  },
};
</script>

<template>
  <div class="main">
    <div class="principal">
      <vue-recaptcha
        sitekey="6Lflw8MgAAAAAN3unp976MK_cL-FbypmUnGaqSZY"
        ref="recaptcha"
        theme="dark"
        loadRecaptchaScript="true"
      />
    </div>
  </div>
</template>

<style>
.principal {
  border: red solid 2px;
}
</style>
