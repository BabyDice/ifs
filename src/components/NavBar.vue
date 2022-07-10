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
          <img
            src="../assets/visuel_acceuil/logo_final.svg"
            alt="Logo ifs78"
            class="nav__main__children__flex__logo"
          />
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

<style lang="scss">
/* Declarations Couleurs */
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@500&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Poppins&display=swap");
@import "../_variable.scss";

@media screen and (min-width: 390px) {
  .nav {
    width: 100%;
    background-color: chocolate;
    border-radius: 0 0 20px 20px;
    background: rgba(255, 255, 255, 0.25);
    box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.25);
    backdrop-filter: blur(15px);

    &__main {
      width: 100%;
      height: 100%;
      padding: 0;

      &__children {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        // background-color: aquamarine;
        height: 100%;
        list-style: none;
        gap: 14px;

        &__flex {
          flex: 2;

          &__logo {
            @include logo;
          }

          .nav-link {
            text-decoration: none;
            font-family: $fontfamilyMedium;
          }
        }
      }
    }
  }
}

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
}
</style>

<script>
export default { name: "NavBar" };
</script>
