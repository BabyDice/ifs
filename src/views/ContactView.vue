<template>
  <div class="contact">
    <NavFooter />
    <h1>Contact</h1>
    <form action="#" method="post" class="container">
      <div class="container__box1">
        <label for="nom">Nom</label>
        <input
          type="text"
          name="nom"
          id="nom"
          class="input-name"
          placeholder="Entrer votre nom"
        />
        <label for="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          class="input-email"
          placeholder="Entrer votre email"
        />
      </div>
      <div class="container__box2">
        <label for="message">Message</label>
        <textarea rows="20" cols="50%"></textarea>
      </div>
      <div class="container__inpt">
        <input type="reset" value="Annuler" name="annuler" />
        <input type="submit" value="Envoyer" name="envoyer" />
      </div>
    </form>
    <div class="contact__infos">
      <img src="#" alt="logo-position-geographique" />
      <p>45, place du commerce 73 230 SAINT ALBAN LEYSSE</p>
      <img src="#" alt="logo-telephone-mobile" />
      <p>06 17 03 34 30</p>
      <img src="#" alt="logo-email" />
      <p>a.lorenzo@ifs73.fr</p>
    </div>
    <div class="contact__frme">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2789.357353972989!2d5.868390915646061!3d45.64364492947247!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478b09ca39fa5545%3A0x7eeb651ba68a5980!2sINSEEC%20Campus%20Chamb%C3%A9ry%20Savoie!5e0!3m2!1sfr!2sfr!4v1655469131535!5m2!1sfr!2sfr"
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
  // background-image: url("@/assets/background-cloud/top.png");
  background-position: center;
  width: 100%;
  height: 100%;

  &__infos {
    width: 100%;
    height: 100%;
    font-family: $fontfamilyMedium;
    color: black;
    padding: 20%;

    p {
      margin: 10% auto;
    }
  }

  h1 {
    font-family: $fontfamilyMedium;
    color: black;
  }

  &__frme {
    display: flex;
    padding: 5%;
    justify-content: center;
    align-items: center;

    iframe {
      border-radius: 20px;
      filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    }
  }

  .container {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-auto-rows: minmax(100px, auto);
    height: 100%;
    width: 100%;
    // background-color: blue;
    gap: 4px;

    &__box1,
    &__box2 {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin: auto;
      // background-color: red;
      height: 100%;
      width: 100%;

      label {
        color: white;
        font-family: $fontfamilyMedium;
        padding: 4%;
      }

      input {
        border: none;
        border-radius: 20px;
        text-align: center;
        background: rgba(210, 210, 210, 0.2);
        width: 50%;
        height: 50px;
        box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.25);
        color: white;
        font-weight: bold;
        font-family: $fontfamilyRegular;
      }

      textarea {
        border-radius: 20px;
        border: none;
        background: rgba(210, 210, 210, 0.2);
        box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.25);
      }
    }

    &__inpt {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      border: none;
      border-radius: 20px;
      width: 100%;
      margin: 5% auto;
      gap: 24px;
      height: 100%;

      input {
        border: none;
        border-radius: 20px;
        text-align: center;
        background: rgba(210, 210, 210, 0.2);
        width: 50%;
        height: 50px;
        box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.25);
        color: rgb(136, 77, 77);
        font-weight: bold;
        font-family: $fontfamilyRegular;
        cursor: pointer;
      }
    }
  }
  @media (min-width: 425px) {
    .container {
      grid-template-columns: repeat(1, 1fr);
    }
  }

  @media (min-width: 768px) {
    .container {
      grid-template-columns: repeat(1, 1fr);
    }
  }

  @media (min-width: 1024px) {
    .container {
      grid-template-columns: repeat(2, 1fr);
      position: static;

      right: 8vw;
      top: 40vh;
      z-index: 2;
      background-color: #f8f8f8;
      border-radius: 20px;
      width: 90%;
      height: 80vh;
      margin: auto;
      border: 1px solid black;

      &__box1,
      &__box2 {
        height: initial;
        margin-top: 10%;
        width: 100%;
        label {
          color: black;
          font-family: $fontfamilyMedium;
        }

        input {
          border: none;
          border-radius: 20px;
          background: rgba(210, 210, 210, 0.2);
          width: 80%;
          box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.25);
          color: black;
          font-weight: bold;
          font-family: $fontfamilyRegular;
        }

        textarea {
          display: flex;
          height: 21vh;
          width: 80%;
          border-radius: 20px;
          border: none;
          padding: 5%;
        }
      }

      &__inpt {
        position: absolute;
        flex-direction: row;
        background-color: red;
        width: 80%;
        margin: auto;
        height: auto;
        bottom: 0;
        left: 180px;
      }
    }
    .contact {
      width: 100%;
      height: 100%;
      background-color: #f8f8f8;

      &__infos {
        display: none;
      }

      &__frme {
        // position: absolute;
        // z-index: 0;
        // top: 0;
        width: 100%;
        // background-color: red;
        margin-top: 10%;

        iframe {
          width: 1780px;
          height: 550px;
        }
      }
    }
  }
}
</style>
<script>
export default {
  name: "ContactView",
};
</script>
