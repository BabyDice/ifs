<template>
  <div>
    <div class="title">
      <h1 class="title__propos">À propos</h1>
    </div>
    <div class="container">
      <div class="container__img">
        <img src="@/assets/visuel_Apropos/cadre.png" alt="" />
      </div>
      <div class="container__text">
        <h2>Amandine Lorenzo</h2>
        <p>
          <strong>Metier: </strong> Assistante de direction/formatrice
          bureautique/Gérante.<br />
          <strong>Description: </strong> Gérante de la sociéte I.F.S.73, j’ai la
          chance aujourd’hui d’allier mon intérêt pour l’organisation et la
          gestion avec mon sens de la communication et du partage. <br />
          <strong>Diplôme: </strong> Bachelor management et gestion des
          entreprises.
        </p>
        <router-link class="btn" to="/contact">Contactez-moi</router-link>
      </div>
    </div>
    <div class="valeur">
      <h3>Bienveillance - Ecoute - Esprit d’equipe</h3>
    </div>
  </div>
</template>
<!-- _____________________________________SCSS_________________________________________ -->
<style lang="scss" scoped>
@import "@/_variable.scss";
// _______________________________________________Title About___________________________________________________________

.title {
  &__propos {
    font-size: 1.8rem;
    margin-top: 10%;
    margin-bottom: 2vh;
    font-family: "Poppins";
    color: #dd214c;

    @media (min-width: $tablette-screen) {
      font-size: 1.8rem;
      margin-top: 7%;
      margin-bottom: 4vh;
      font-family: "Poppins";
      color: #dd214c;
    }

    @media (min-width: $desktop-screen) {
      font-size: 1.8rem;
      margin-bottom: 4vh;
      font-family: "Poppins";
      color: rgb(224 51 88);
      margin-top: 8vh;
    }
  }
}

// _______________________________________________Container___________________________________________________________
.container {
  background-image: url("@/assets/visuel_Apropos/cubeOp.png");
  height: 100vh;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: $tablette-screen) {
    background-image: url("@/assets/visuel_Apropos/cubeOp.png");
    height: 30vh;
    width: 722px;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    position: center;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    margin-left: 7vw;
    border-radius: 20px;
  }

  @media (min-width: $desktop-screen) {
    height: 70vh;
    width: 60vw;
    border: #dd214c solid 2px;
    border-radius: 20px;
    margin-left: 19vw;
    background-image: url("@/assets/visuel_Apropos/cubeOp.png");
    display: flex;
    align-items: center;
  }

  // _______________________________________________Image___________________________________________________________
  &__img {
    height: 40vh;
    width: 80%;
    display: flex;
    justify-content: center;
    align-items: center;

    @media (min-width: $desktop-screen) {
      height: 54vh;
      width: 25vw;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    img {
      height: 96%;
      margin: auto;
      border-radius: 20px;
      border: 3px solid #dd214c;

      @media (min-width: $tablette-screen) {
        height: 56%;
        margin-left: 2vw;
      }

      @media (min-width: $desktop-screen) {
        height: 50vh;
        object-fit: cover;
        margin-left: 3vw;
      }
    }
  }

  // _______________________________________________Text___________________________________________________________
  &__text {
    height: 33vh;
    width: 78%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;

    @media (min-width: $tablette-screen) {
      height: 26vh;
      width: 290%;
      display: flex;
      justify-content: right;
      align-items: end;
    }

    @media (min-width: $desktop-screen) {
      font-size: 0.8rem;
      color: #000000;
      font-family: Poppins;
      width: 35vw;
      height: 59vh;
      display: flex;
      align-items: center;
      text-align: center;
      // border: #dd214c 5px solid;
      justify-content: center;
      flex-direction: column;
      gap: 18px;
    }

    h2 {
      text-align: center;
      font-size: 1.8rem;
      color: #dd214c;
      font-family: Poppins;

      @media (min-width: $tablette-screen) {
        text-align: center;
        font-size: 1.6rem;
        color: #dd214c;
        font-family: Poppins;
        margin-right: 14vh;
        margin-bottom: 2vh;
      }

      @media (min-width: $desktop-screen) {
        display: flex;
        align-items: center;
        text-align: center;
        margin-left: 3vw;
        margin-top: 8vh;
      }
    }

    p {
      font-size: 1rem;
      color: #000000;
      font-family: Poppins;
      margin: auto;
      width: 94%;

      @media (min-width: $tablette-screen) {
        font-size: 0.8rem;
        color: #000000;
        font-family: Poppins;
        margin: auto;
        width: 78%;
        text-align: start;
        margin-left: 71px;
      }

      @media (min-width: $desktop-screen) {
        font-size: 1.1rem;
        margin-bottom: 0;
        padding-bottom: 30px;
        width: 28vw;
      }
    }
  }
}

.valeur {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 15vh;

  h3 {
    font-size: 1rem;
    font-weight: bold;
  }

  @media (min-width: $tablette-screen) {
    margin-top: 5vh;
    margin-bottom: 5vh;

    h3 {
      font-size: 1.3rem;
    }
  }
}

// _______________________________________________Button___________________________________________________________
.btn {
  background-color: #dd214c;
  border-radius: 20px;
  color: white;
  width: 40vw;
  height: 40vh;
  border: none;
  text-decoration: none;
  font-family: poppins;
  box-shadow: 3px 3px 9px 1px rgb(255 255 255 / 39%);
  margin-top: 14px;
  margin-bottom: 10vh;

  @media (min-width: $tablette-screen) {
    background-color: #dd214c;
    color: white;
    width: 26%;
    font-family: poppins;
    box-shadow: 3px 3px 9px 1px rgb(255 255 255 / 39%);
    margin-right: 22vw;
    font-size: 0.8rem;
    padding: 1vh;
    margin-top: 3vh;
  }

  @media (min-width: $desktop-screen) {
    margin-top: 0;
    font-size: 1rem;
    align-items: center;
    justify-content: center;
    margin-right: 0;
    display: flex;
    align-self: center;
    width: 16vw;
  }
}

// _______________________________________________End title___________________________________________________________
</style>

<script>
export default {
  name: "ProposView",
};
</script>
