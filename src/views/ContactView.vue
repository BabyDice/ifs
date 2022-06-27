<template>
  <div class="contact">
    <div class="contact__title">
      <h1>Contact</h1>
    </div>
    <div class="contact__container">
      <div class="contact__container__children">
        <div class="contact__container__children__img-p">
          <img
            src="@/assets/logo.png"
            alt="picto-gps"
            width="50px"
            height="50px"
          />
          <p>45, place du commerce 73 230 SAINT ALBAN LEYSSE</p>
          <img
            src="@/assets/logo.png"
            alt="picto-gps"
            width="50px"
            height="50px"
          />
          <p>06 17 03 34 30</p>
          <img
            src="@/assets/logo.png"
            alt="picto-gps"
            width="50px"
            height="50px"
          />
          <p>a.lorenzo@ifs73.fr</p>
        </div>
        <form
          action="#"
          method="post"
          class="contact__container__children__frms"
        >
          <fieldset class="contact__container__children__frms__field">
            <div class="contact__container__children__frms__field__nom-mail">
              <label for="nom">Nom : </label>
              <input
                type="text"
                name="nom"
                id="nom"
                placeholder="Entrer votre Nom"
              />
              <label for="email">Email : </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Entrer votre Email"
              />
              <input
                type="submit"
                value="Envoyer"
                name="envoyer"
                id="envoyer"
              />
            </div>
            <div class="contact__container__children__frms__field__msg">
              <label for="message">Message : </label>
              <textarea
                name="message"
                id="message"
                cols="30"
                rows="10"
              ></textarea>
              <input type="reset" value="Annuler" name="annuler" id="annuler" />
            </div>
          </fieldset>
        </form>
      </div>
    </div>
    <div class="contact__ifrm">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2789.3573539729937!2d5.868390915778069!3d45.64364492947238!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478b09ca39fa5545%3A0x7eeb651ba68a5980!2sINSEEC%20Campus%20Chamb%C3%A9ry%20Savoie!5e0!3m2!1sfr!2sfr!4v1655992931813!5m2!1sfr!2sfr"
        width="600"
        height="450"
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
  }

  &__container {
    width: 100%;
    height: 100%;
    background-color: red;
    padding: 50px;

    &__children {
      display: flex;
      justify-content: center;
      align-items: center;
      // gap: 20vw;

      &__img-p {
        display: flex;
        flex-direction: column;
        align-items: center;

        img {
          margin-bottom: 5%;
        }

        p {
          padding: 5%;
        }
      }

      &__frms {
        width: 50%;
        height: 100%;

        &__field {
          border-radius: 15px;
          background-color: $lastColor;
        }
      }
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
<script>
export default {
  name: "ContactView",
};
</script>
