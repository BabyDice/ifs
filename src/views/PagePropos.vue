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
.container {
  background-image: url(http://localhost:8080/img/cube.a0c446fb.png);
  height: 720px;
  width: 500px;

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
    }
  }

  &__text {
    height: 33vh;
    width: 78%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    h1 {
      text-align: center;
      font-size: 1.8rem;
      color: #dd214c;
      font-family: Poppins;
    }
    p {
      font-size: 1rem;
      color: #000000;
      font-family: Poppins;
      margin: auto;
      width: 94%;
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
