<script>
import VuelidateForm from "@/composants/VuelidateForm.vue";
export default {
  name: "ContactView",
  components: { VuelidateForm },
};
</script>

<template>
  <div class="contact">
    <div class="contact__title">
      <h1>Contact</h1>
    </div>
    <div class="contact__composants">
      <VuelidateForm />
    </div>
    <hr />
    <div class="contact__container">
      <div class="contact__container__children">
        <div class="contact__container__children__img-p">
          <img
            src="@/assets/contactform/Wireframe/Vectorimgss.png"
            alt="picto-gps"
          />
          <p>45, place du commerce 73 230 SAINT ALBAN LEYSSE</p>
          <img
            src="@/assets/contactform/Wireframe/Vectorimgss-3.png"
            alt="picto-gps"
          />
          <p>06 17 03 34 30</p>
          <img src="@/assets/logo.png" alt="picto-gps" />
          <p>a.lorenzo@ifs73.fr</p>
        </div>
      </div>
    </div>
    <hr />
    <div class="contact__ifrm">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2789.3573539729937!2d5.868390915778069!3d45.64364492947238!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478b09ca39fa5545%3A0x7eeb651ba68a5980!2sINSEEC%20Campus%20Chamb%C3%A9ry%20Savoie!5e0!3m2!1sfr!2sfr!4v1655992931813!5m2!1sfr!2sfr"
        style="border: 0"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/_variablesscss";
.contact {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;

  &__title {
    font-family: $fontfamilyMedium;
    font-size: 24px;
    margin-top: 5%;
  }

  &__container {
    width: 100%;
    height: 100%;
    // background-color: red;
    padding: 50px;

    &__children {
      display: flex;
      justify-content: center;
      align-items: center;
      // gap: 20vw;

      &__img-p {
        display: flex;
        align-items: center;
        width: 100%;
        justify-content: center;
        margin: auto;
        @media screen and (min-width: 390px) {
          flex-direction: column;
        }
        // @media (min-width: $tablette) {
        //   flex-direction: row;
        // }

        img {
          margin-bottom: 5%;
          height: 6rem;
        }

        p {
          padding: 5%;
        }
      }
    }
  }

  hr {
    border: 1px solid black;
    width: 40%;
    margin: 5% auto;
  }

  &__ifrm {
    margin-bottom: 5%;
    iframe {
      width: 50%;
      border-radius: 20px;
      margin: auto;
      height: 50vh;
    }
  }
}

@media (min-width: $mobile) {
}

@media (min-width: $tablette) {
}

@media (min-width: $desktop) {
}
</style>
