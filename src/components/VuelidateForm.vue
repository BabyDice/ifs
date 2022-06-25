<template>
  <div class="formulaire">
    <form @submit.prevent="submit" ref="form">
      <div class="form-group" :class="{ 'form-group--error': $v.name.$error }">
        <label class="form__label">Name</label>
        <input class="form__input" v-model.trim="$v.name.$model" />
        <label class="form__label">PassWord</label>
        <input class="form__input" v-model.trim="$v.pssword.$model" />
      </div>
      <div class="error" v-if="!$v.name.required">Name is required</div>
      <div class="error" v-if="!$v.name.minLength">
        Name must have at least {{ $v.name.$params.minLength.min }} letters.
      </div>

      <div class="error" v-if="!$v.pssword.required">Number is required</div>
      <div class="error" v-if="!$v.pssword.minLength">
        Name must have at least {{ $v.pssword.$params.minLength.min }} Password.
      </div>
      <button
        class="button"
        type="submit"
        :disabled="submitStatus === 'PENDING'"
      >
        Submit!
      </button>
      <p class="typo__p" v-if="submitStatus === 'OK'">
        Thanks for your submission!
      </p>
      <p class="typo__p" v-if="submitStatus === 'ERROR'">
        Please fill the form correctly.
      </p>
      <p class="typo__p" v-if="submitStatus === 'PENDING'">Sending...</p>
    </form>
  </div>
</template>

<style lang="scss"></style>

<script>
import { required, minLength } from "vuelidate/lib/validators";
import emailjs from "@emailjs/browser";

export default {
  data() {
    return {
      name: "",
      age: 0,
      submitStatus: null,
      pssword: "",
    };
  },
  validations: {
    name: {
      required,
      minLength: minLength(4),
    },
    pssword: {
      required,
      minLength: minLength(8),
    },
  },
  methods: {
    submit() {
      console.log("submit!");
      this.$v.$touch();
      if (this.$v.$invalid) {
        this.submitStatus = "ERROR";
      } else {
        // do your submit logic here
        this.submitStatus = "PENDING";
        emailjs
          .sendForm(
            "service_f0ns79q",
            "template_wj3e9hd",
            this.$refs.form,
            "ZAG2PeOHvH8fTwjpW"
          )
          .then(
            (result) => {
              console.log("SUCCESS!", result.text);
            },
            (error) => {
              console.log("FAILED...", error.text);
            }
          );
        setTimeout(() => {
          this.submitStatus = "OK";
        }, 500);
      }
    },
  },
};
</script>
