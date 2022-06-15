<template>
  <footer class="footer">
    <section class="footer__main">
      <div class="footer_main_child">
        <h1>Mentions Légales</h1>
      </div>
      <div class="footer_main_child">
        <h1>Nous Connaître ?</h1>
      </div>
      <div class="footer_main_child">
        <img src="#" />
        <img src="#" />
      </div>
    </section>
  </footer>
</template>

<style>
footer {
  background-color: red;
  width: 100%;
  height: 200px;
  border-radius: 20px 20px 0 0;
}

.footer__main {
  display: flex;
  justify-content: center;
  align-items: center;
  /* background-color: aqua; */
  height: 100%;
  gap: 100px;
  text-align: center;
}

.footer__main__child {
  flex: 3;
}
</style>

<script>
export default {};
</script>
