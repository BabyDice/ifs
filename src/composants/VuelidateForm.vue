<template>
  <div class="formulaire">
    <form @submit.prevent="submit" ref="form" class="form">
      <div class="form__group" :class="{ 'form-group--error': $v.name.$error }">
        <p class="typo__p" v-if="submitStatus === 'ERROR'">
          Veuillez remplir les champs obligatoires.
        </p>
        <label class="form__group__label">Name</label>
        <input class="form__group__input" v-model.trim="$v.name.$model" />
        <div class="error" v-if="!$v.name.required">Votre nom est attendu</div>
        <div class="error" v-if="!$v.name.minLength">
          Votre Nom doit contenir {{ $v.name.$params.minLength.min }} lettres
          minimum.
        </div>
        <label class="form__group__label">Mail</label>
        <input class="form__group__input" v-model.trim="$v.mail.$model" />
        <div class="error" v-if="!$v.mail.required">
          Votre email est attendu
        </div>
        <!-- <div class="error" v-if="!$v.mail.minLength">
          Name must have at least {{ $v.mail.$params.minLength }} Password.
        </div> -->
        <label class="form__msg__label">Message</label>
        <textarea
          class="form__msg__input"
          v-model.trim="$v.msg.$model"
          rows="10px"
        ></textarea>
        <div class="error" v-if="!$v.msg.required">
          Votre message est attendu
        </div>
        <div class="error" v-if="!$v.msg.minLength">
          Votre Message doit contenir {{ $v.msg.$params.minLength.min }} lettres
          minimum.
        </div>
        <div class="form__btn">
          <button
            class="button"
            type="submit"
            :disabled="submitStatus === 'PENDING'"
          >
            Envoyer
          </button>
          <button class="button" type="reset">Annuler</button>
        </div>
        <p class="typo__p" v-if="submitStatus === 'OK'">
          Merci pour votre envoie!
        </p>
      </div>

      <p class="typo__p" v-if="submitStatus === 'PENDING'">Envoie...</p>
    </form>
  </div>
</template>

<style lang="scss">
@import "../_variablesscss";
.formulaire {
  .form {
    border: 1px solid black;
    border-radius: 20px;
    display: flex;
    height: 850px;
    width: 80%;
    background: #f8f8f8;
    margin: auto;

    .typo__p {
      font-size: 16px;
      font-family: $fontfamilyMedium;
    }

    &__group {
      display: flex;
      flex-direction: column;
      margin: auto;
      width: 80%;
      gap: 24px;
      label {
        display: flex;
        font-family: $fontfamilyMedium;
        font-size: 16px;
      }

      input {
        line-height: 10vh;
        padding: 2%;
        border-radius: 15px;
        border: none;
        background: rgba(210, 210, 210, 0.16);
        border: 1px solid #000000;
        box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.15);
      }

      textarea {
        border: none;
        border-radius: 15px;
        padding: 2%;
        background: rgba(210, 210, 210, 0.16);
        border: 1px solid #000000;
        box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.15);
      }
    }

    &__btn {
      display: flex;
      justify-content: space-around;
      gap: 24px;

      button {
        width: 50%;
        border: none;
        border-radius: 15px;
        line-height: 6vh;
        background: rgba(210, 210, 210, 0.16);
        border: 1px solid #000000;
        box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.15);
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
