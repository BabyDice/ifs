<template>
  <div class="contact">
    <h1>Contact</h1>
    <div class="contact__main">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2789.357353972993!2d5.868390915778063!3d45.643644929472394!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478b09ca39fa5545%3A0x7eeb651ba68a5980!2sINSEEC%20Campus%20Chamb%C3%A9ry%20Savoie!5e0!3m2!1sfr!2sfr!4v1655379216729!5m2!1sfr!2sfr"
        width="100%"
        height="450"
        style="border: 0"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
        class="contact__main__frame"
      >
      </iframe>
      <form class="contact__main__forms">
        <fieldset class="contact__main__forms__field">
          <div class="contact__main__forms__children">
            <label>Nom : </label>
            <input
              type="text"
              id="nom"
              name="nom"
              placeholder="Entrer votre Nom"
            />
            <label>Mail : </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Entrer votre Email"
            />
          </div>
          <div class="contact__main__forms__children">
            <label>Message : </label>
            <textarea></textarea>
          </div>
          <input type="submit" value="Envoyer" name="envoyer" id="envoyer" />
          <input type="reset" value="Annuler" name="reset" id="reset" />
        </fieldset>
      </form>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@500&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Poppins&display=swap");
$mainColor: #dd214c;
$fontfamilyMedium: "Poppins", sans-serif;
$fontfamilyRegular: "Poppins", sans-serif;
.contact {
  width: 100%;
  height: 100vh;

  h1 {
    margin: 2% auto 2%;
    font-family: $fontfamilyMedium;
  }

  &__main {
    flex-direction: column;
    position: relative;
    width: 100%;

    &__forms {
      display: flex;
      position: absolute;
      top: 20px;
      right: 20px;
      bottom: 20px;
      height: 90%;

      &__field {
        display: flex;
        flex-direction: column;
        padding: 15px;
        -webkit-border-radius: 20px;
        -moz-border-radius: 20px;
        border-radius: 20px;
        height: 100%;
        background-color: #f8f8f8;
      }
    }

    &__frame {
      border-radius: 20px;
      filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    }
  }
}
</style>
<script>
export default { name: "ContactView" };
</script>
