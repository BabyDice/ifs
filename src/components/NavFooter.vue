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
        <img src="@/assets/logo.png" class="footer__main__children__img" />
        <img src="@/assets/logo.png" class="footer__main__children__img" />
      </div>
    </footer>
  </div>
</template>

<style lang="scss">
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

      &__title {
        color: white;
        font-size: 20px;
        font-family: $fontfamilyMedium;
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

      &__img {
        width: 96px;
        height: 96px;
        margin: 5px;
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
