<template>
  <div class="formulaire">
    <form @submit.prevent="submit" ref="form" class="form">
      <div class="form__group" :class="{ 'form-group--error': $v.name.$error }">
        <label class="form__group__label">Name</label>
        <input class="form__group__input" v-model.trim="$v.name.$model" />
        <label class="form__label">Mail</label>
        <input class="form__group__input" v-model.trim="$v.mail.$model" />
        <div class="form__msg">
          <label class="form__msg__label">Message</label>
          <textarea
            class="form__msg__input"
            v-model.trim="$v.msg.$model"
          ></textarea>
        </div>
      </div>
      <!-- <div class="error" v-if="!$v.name.required">Votre nom est attendu</div>
      <div class="error" v-if="!$v.name.minLength">
        Votre Nom doit contenir {{ $v.name.$params.minLength.min }} lettres
        minimum.
      </div>

      <div class="error" v-if="!$v.mail.required">Votre email est attendu</div>
      <div class="error" v-if="!$v.mail.minLength">
        Name must have at least {{ $v.mail.$params.minLength }} Password.
      </div>

      <div class="error" v-if="!$v.msg.required">Votre message est attendu</div>
      <div class="error" v-if="!$v.msg.minLength">
        Votre Message doit contenir {{ $v.msg.$params.minLength.min }} lettres
        minimum.
      </div> -->
      <button
        class="button"
        type="submit"
        :disabled="submitStatus === 'PENDING'"
      >
        Envoyer
      </button>
      <button class="button" type="reset">Annuler</button>
      <p class="typo__p" v-if="submitStatus === 'OK'">
        Merci pour votre envoie!
      </p>
      <p class="typo__p" v-if="submitStatus === 'ERROR'">
        Veuillez remplir les champs obligatoires.
      </p>
      <p class="typo__p" v-if="submitStatus === 'PENDING'">Sending...</p>
    </form>
  </div>
</template>

<style lang="scss">
.formulaire {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  .form {
    display: flex;
    flex-direction: column;
    // margin: auto;
    width: 80%;
    height: 100%;
    border: 1px solid black;
    border-radius: 20px;
    background-color: #d2d2d2;

    &__group {
      display: flex;
      flex-direction: column;

      &__input {
        margin: auto;
      }
    }
  }
}
</style>

<script>
import { required, minLength, email } from "vuelidate/lib/validators";
import emailjs from "@emailjs/browser";

export default {
  data() {
    return {
      name: "",
      age: 0,
      submitStatus: null,
      mail: "",
      msg: "",
    };
  },
  validations: {
    name: {
      required,
      minLength: minLength(3),
    },
    mail: {
      required,
      email,
    },
    msg: {
      required,
      minLength: minLength(10),
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
