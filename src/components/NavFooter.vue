<script>
import Vue from "vue";
new Vue({
  el: "footer",
  data: {
    footer: false,
  },
});
</script>

<template>
  <div class="footer" id="footer">
    <footer class="footer__main" v-show="!footer">
      <div class="footer__main__children">
        <h2 class="footer__main__children__title">Mentions Légales</h2>
      </div>
      <div class="footer__main__children">
        <h2>
          <router-link to="/condition" class="footer__main__children__title"
            >Condition General</router-link
          >
        </h2>
      </div>
      <div class="footer__main__children">
        <h2>
          <router-link to="/propos" class="footer__main__children__title"
            >Nous Connaître ?</router-link
          >
        </h2>
      </div>
      <div class="footer__main__children">
        <span class="footer__main__children__contain">
          <a
            href="https://www.linkedin.com/company/ifs73/about/"
            target="blank"
          >
            <img
              src="@/assets/visuel_footer/linkedin.svg"
              class="footer__main__children__contain__img"
            />
          </a>
        </span>
        <span class="footer__main__children__contain">
          <a href="https://www.facebook.com/ifs73/?fref=ts" target="blank">
            <img
              src="@/assets/visuel_footer/facebook.svg"
              class="footer__main__children__contain__img"
            />
          </a>
        </span>
      </div>
    </footer>
  </div>
</template>

<style lang="scss">
@import "@/_variable.scss";
/* Declarations Couleurs */
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@500&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Poppins&display=swap");
$mainColor: #dd214c;
$fontfamilyMedium: "Poppins", sans-serif;
$fontfamilyRegular: "Poppins", sans-serif;

.footer {
  width: 100%;
  height: 158px;

  &__main {
    display: flex;
    align-items: start;
    background-color: $mainColor;
    border-radius: 20px 20px 0 0;
    width: 100%;
    height: 100%;

    &__children {
      flex: 2;
      margin: 20px;
      display: flex;
      justify-content: center;

      &__title {
        font-size: 20px;
        font-family: $fontfamilyMedium;

        text-decoration: none;
        text-decoration-style: none;
        text-decoration-color: none;
        text-decoration-thickness: none;
        color: $blanc;
      }

      &__liste {
        color: white;
        font-family: $fontfamilyRegular;
        width: 30%;
        margin: auto;
        display: flex;
        justify-content: start;
        padding: 15px;
      }

      &__contain {
        display: flex;
        flex-direction: row;
        justify-content: center;

        &__img {
          width: 3rem;
          height: 5vh;
        }
      }

      h2 {
      }
    }
  }

  @media screen and (max-width: 495px) {
    &__main {
      align-items: center;
      flex-direction: column;
      background-color: $mainColor;
      height: 100vh;

      &__children__liste {
        width: 100%;
      }
    }
  }

  @media screen and (max-width: 1024px) {
    &__main {
      align-items: center;
      flex-direction: column;
      background-color: $mainColor;
      height: 100vh;

      &__children__liste {
        width: 100%;
      }
    }
  }
}
</style>

<script>
export default { name: "NavFooter" };
</script>
