<template>
  <div>
    <div class="title">
      <h1 class="title__propos">À propos</h1>
    </div>
    <div class="container">
      <div class="container__img">
        <img src="../assets/Camoulax/Amandine/cadre.png" alt="" />
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
    <div class="container3">
      <h3 class="container3__valeur">
        Bienveillance - Ecoute - Esprit d’equipe
      </h3>
    </div>
  </div>
</template>
<!-- _____________________________________SCSS_________________________________________ -->
<style lang="scss" scoped>
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
  background-image: url("../assets/Camoulax/composant/cubeOp.png");
  height: 720px;
  width: 548px;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  @media (min-width: $tablette-screen) {
    background-image: url("../assets/Camoulax/composant/cubeOp.png");
    height: 272px;
    width: 722px;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    position: center;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    margin-left: 24px;
    border-radius: 20px;
  }
  @media (min-width: $desktop-screen) {
    height: 380px;
    width: 980px;
    border: #dd214c solid 2px;
    border-radius: 20px;
    margin-left: 24vw;
    background-image: url("../assets/Camoulax/composant/cubeOp.png");
  }
  // _______________________________________________Image___________________________________________________________
  &__img {
    height: 54vh;
    width: 80%;
    display: flex;
    justify-content: center;
    align-items: center;
    @media (min-width: $desktop-screen) {
      height: 54vh;
      width: 30%;
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
        height: 66%;
        margin-left: 2vw;
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
      margin: auto;
      width: 78%;
      text-align: start;
      display: flex;
      align-items: center;
    }
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
      margin-right: 2vh;
      display: flex;
      align-items: center;
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
// _______________________________________________Button___________________________________________________________
.btn {
  background-color: #dd214c;
  border-radius: 20px;
  color: white;
  width: 37%;
  height: 20vh;
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
  }
}
// _______________________________________________End title___________________________________________________________
.container3 {
  &__valeur {
    font-size: 1.2rem;
    margin-top: 10%;
    margin-bottom: 10%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-left: 6vw;

    @media (min-width: $desktop-screen) {
      font-size: 1.6rem;
      margin-top: 4%;
      margin-bottom: 2%;
    }
  }
}
</style>
<script>
export default { name: "ProposView" };
</script>
