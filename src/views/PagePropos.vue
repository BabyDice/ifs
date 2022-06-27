<template>
  <div>
    <div class="container">
      <div class="container__img">
        <img src="../assets/Camoulax/Amandine/cadre.png" alt="" />
      </div>
      <div class="container__text">
        <h1>Amandine Lorenzo</h1>
        <p>
          <strong>Metier: </strong> Assistante de direction/formatrice
          bureautique/Gérante.<br />
          <strong>Description: </strong> Gérante de la sociéte I.F.S.73, j’ai la
          chance aujourd’hui d’allier mon intérêt pour l’organisation et la
          gestion avec mon sens de la communication et du partage. <br />
          <strong>Diplôme: </strong> Bachelor management et gestion des
          entreprises.
        </p>
      </div>
      <div class="container__botn">
        <router-link class="btn" to="/contact">Contactez-moi</router-link>
      </div>
    </div>
    <h2>Bienveillance - Ecoute - Esprit d’equipe</h2>
  </div>
</template>
<!-- ______________________________________SCSS__________________________________________ -->
<style lang="scss" scoped>
@import "../variables";
.container {
  background-image: url("../assets/Camoulax/composant/cube.png");
  height: 720px;
  width: 500px;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  @media (min-width: $tablette-screen) {
    background-image: url("../assets/Camoulax/composant/cube.png");
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
    margin-top: 93px;
    border-radius: 20px;
  }

  &__img {
    height: 47vh;
    width: 80%;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      height: 96%;
      margin: auto;
      border-radius: 20px;
      border: 3px solid #dd214c;
      @media (min-width: $tablette-screen) {
        height: 66%;
        margin: auto;
        border-radius: 20px;
        border: 3px solid #dd214c;
      }
    }
  }

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
    h1 {
      text-align: center;
      font-size: 1.8rem;
      color: #dd214c;
      font-family: Poppins;
      @media (min-width: $tablette-screen) {
        text-align: center;
        font-size: 1.8rem;
        color: #dd214c;
        font-family: Poppins;
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
        width: 103%;
        text-align: start;
        margin-left: 71px;
      }
    }
  }
  &__botn {
    display: flex;
    justify-content: center;
    width: 80%;
    height: 10%;
    align-items: center;
    .btn {
      background-color: #dd214c;
      border-radius: 20px;
      color: white;
      width: 37%;
      height: 40px;
      border: none;
      text-decoration: none;
      display: flex;
      align-items: center;
      justify-content: center;
      font-family: poppins;
      box-shadow: 3px 3px 9px 1px rgb(255 255 255 / 39%);
    }
  }
}
h2 {
  font-size: 1.2rem;
  margin-top: 10%;
  margin-bottom: 10%;
}
</style>
<script>
export default { name: "ProposView" };
</script>
