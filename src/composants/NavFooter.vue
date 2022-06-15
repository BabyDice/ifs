<template>
  <div class="footer">
    <footer class="footer__main">
      <div class="footer__main__children">
        <h2 class="footer__main__children__title">Mentions Légales</h2>
      </div>
      <div class="footer__main__children">
        <h2 class="footer__main__children__title">Nous Connaître ?</h2>
        <li class="footer__main__children__liste">A Propos</li>
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
$mainColor: #dd214c;

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
      }

      &__liste {
        color: white;
        // background-color: blue;
        width: 50%;
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
    }
  }
}
</style>

<script>
export default {};
</script>
