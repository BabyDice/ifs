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
          <img src="#" alt="Logo ifs78" />
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

<style lang="scss" scoped>
/* Declarations Couleurs */
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@500&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Poppins&display=swap");
$mainColor: #dd214c;
$navColor: #f4f4f4;
$fontfamilyMedium: "Poppins", sans-serif;
$fontfamilyRegular: "Poppins", sans-serif;

.nav {
  width: 100%;
  height: 180px;
  background-color: chocolate;
  border-radius: 0 0 20px 20px;
  background: rgba(255, 255, 255, 0.25);
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(15px);

  &__main {
    width: 100%;
    height: 100%;

    &__children {
      display: flex;
      justify-content: center;
      align-items: center;
      // background-color: aquamarine;
      height: 100%;
      list-style: none;
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
      background-color: aqua !important;

      &__main {
        width: 100%;
        height: 158px;
        // background-color: gold;

        &__children {
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
        }
      }
    }
  }
}

.nav-link {
  text-decoration: none;
  font-family: $fontfamilyMedium;
}
</style>

<script>
export default { name: "NavBar" };
</script>
