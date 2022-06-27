<template>
  <div class="contact">
    <form @submit.prevent="submit">
      <!--name-->
      <div class="form-group" :class="{ 'form-group--error': $v.name.$error }">
        <label class="form__label">Name</label>
        <input class="form__input" v-model.trim="$v.name.$model" />
      </div>
      <div class="error" v-if="!$v.name.required">Nom est attendu</div>
      <div class="error" v-if="!$v.name.minLength">
        Name must have at least {{ $v.name.$params.minLength.min }} letters.
      </div>
      <!--mail-->
      <div class="form-group" :class="{ 'form-group--error': $v.mail.$error }">
        <label class="form__label">Email</label>
        <input class="form__input" v-model.trim="$v.mail.$model" />
      </div>
      <div class="error" v-if="!$v.mail.required">Email est attendu</div>
      <!--message-->
      <div
        class="form-group"
        :class="{ 'form-group--error': $v.message.$error }"
      >
        <label class="form__label">Message</label>
        <textarea
          class="form__input"
          v-model.trim="$v.message.$model"
        ></textarea>
      </div>
      <div class="error" v-if="!$v.message.required">Message est attendu</div>
      <div class="error" v-if="!$v.message.minLength">
        Name must have at least {{ $v.message.$params.minLength.min }} letters.
      </div>
      <button
        class="button"
        type="submit"
        :disabled="submitStatus === 'PENDING'"
      >
        Envoyer!
      </button>
      <p class="typo__p" v-if="submitStatus === 'OK'">
        Merci pour votre envoi!
      </p>
      <p class="typo__p" v-if="submitStatus === 'ERROR'">
        Svp Verifier si les informations sont correctes
      </p>
      <p class="typo__p" v-if="submitStatus === 'PENDING'">Sending...</p>
    </form>
  </div>
</template>

<style></style>

<script>
import {
  required,
  minLength,
  email,
  maxLength,
} from "vuelidate/lib/validators";

export default {
  data() {
    return {
      name: "",
      mail: "",
      message: "",
      age: 0,
      submitStatus: null,
    };
  },
  validations: {
    name: {
      required,
      minLength: minLength(4),
    },
    mail: {
      required,
      email,
    },
    message: {
      required,
      minLength: minLength(10),
      maxLength: maxLength(255),
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
        setTimeout(() => {
          this.submitStatus = "OK";
        }, 500);
      }
    },
  },
};
</script>
