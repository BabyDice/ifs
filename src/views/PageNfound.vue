<template>
  <div class="container">
    <h1 class="container_text">
      Oh tu t'es perdu ? Viens t'asseoir et griller une guimauve !
    </h1>
    <button class="container_submit" type="submit">Partir du camping</button>
  </div>
</template>
<style lang="scss" scoped>
body {
  height: 100vh;
  border: 9px rgb(17, 255, 17) solid;
}
.container {
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  background-size: 280%;
  position: fixed;
  background-position: 240%;
  // background-color: greenyellow;
  background-image: url("@/assets/Camoulax/fond1.png");

  &_text {
    color: brown;
    text-align: center;
  }

  &_submit {
    position: absolute;
    bottom: 200px;
    left: 0;
    right: 0;
    margin: auto;
    max-width: 15vh;
  }
  @media screen and (min-width: 640px) {
  }
}
</style>
<script>
export default { name: "NotFound" };
</script>
