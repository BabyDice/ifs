<template>
  <div class="nav">
    <nav class="nav__main">
      <ul class="nav__main__children">
        <li class="nav__main__children__flex">
          <router-link to="/" class="nav-link">Accueil</router-link>
        </li>
        <li class="nav__main__children__flex">
          <router-link to="/formation" class="nav-link">Formation</router-link>
        </li>
        <li class="nav__main__children__flex">
<<<<<<< HEAD
          <img src="#" alt="Logo ifs78" />
=======
          <img
            src="../assets/visuel_acceuil/logo_final.svg"
            alt="Logo ifs78"
            class="nav__main__children__flex__logo"
          />
>>>>>>> a2feb93b3b3858381264b1d1b6138c86aca7738f
        </li>
        <li class="nav__main__children__flex">
          <router-link to="/propos" class="nav-link">A propos</router-link>
        </li>
        <li class="nav__main__children__flex">
          <router-link to="/contact" class="nav-link">Contact</router-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<<<<<<< HEAD
<style lang="scss" scoped>
/* Declarations Couleurs */
@import "@/_variablesscss";
.nav {
  width: 100%;
  height: 180px;
=======
<style lang="scss">
/* Declarations Couleurs */
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@500&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Poppins&display=swap");
@import "../_variable.scss";

.nav {
  width: 100%;
  height: 10vh;
>>>>>>> a2feb93b3b3858381264b1d1b6138c86aca7738f
  background-color: chocolate;
  border-radius: 0 0 20px 20px;
  background: rgba(255, 255, 255, 0.25);
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(15px);

  &__main {
    width: 100%;
    height: 100%;
<<<<<<< HEAD
=======
    padding: 0;
>>>>>>> a2feb93b3b3858381264b1d1b6138c86aca7738f

    &__children {
      display: flex;
      justify-content: center;
      align-items: center;
      // background-color: aquamarine;
      height: 100%;
      list-style: none;
<<<<<<< HEAD
      gap: 14px;
      margin: 14px;

      &__flex {
        flex: 2;
      }
    }
  }

  @media screen and (max-width: 495px) {
    .nav {
      height: 200px;
      // background-color: aqua;

      &__main {
        width: 100%;
        height: 158px;
        // background-color: gold;

        &__children {
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
=======

      &__flex {
        flex: 2;

        &__logo {
          @include logo;
        }

        .nav-link {
          text-decoration: none;
          font-family: $fontfamilyMedium;
>>>>>>> a2feb93b3b3858381264b1d1b6138c86aca7738f
        }
      }
    }
  }
}

<<<<<<< HEAD
.nav-link {
  text-decoration: none;
  font-family: $fontfamilyMedium;
=======
@media screen and (min-width: 428px) {
  .nav {
    height: 20vh;

    &__main {
      width: 100%;

      // background-color: gold;
      &__children {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        height: 100%;
        display: flex;
        flex-direction: column;
      }
    }
  }
}

@media (min-width: 810px) {
  .nav {
    height: 10vh;

    &__main {
      width: 100%;

      // background-color: gold;
      &__children {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: row;
        height: 100%;
      }
    }
  }
}

@media screen and (min-width: 1920px) {
  .nav {
    height: 5vh;

    &__main {
      width: 100%;

      // background-color: gold;
      &__children {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: row;

        &__flex {
          flex: 2;
        }
      }
    }
  }
>>>>>>> a2feb93b3b3858381264b1d1b6138c86aca7738f
}
</style>

<script>
export default { name: "NavBar" };
</script>
