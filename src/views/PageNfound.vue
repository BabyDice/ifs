<template>
  <div class="container">
    <h1 class="container_text">
      Oh tu t'es perdu ? Viens t'asseoir et griller une guimauve !
    </h1>
    <button onclick="history.back()" class="container_submit" type="submit">
      Partir du camping
    </button>
  </div>
</template>
<style lang="scss" scoped>
@import "../variables";
body {
  height: 100vh;
}
.container {
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  background-size: 280%;
  position: fixed;
  background-position: 240%;
  background-image: url("@/assets/Camoulax/fond1.png");

  @media (min-width: $tablette-screen) {
    display: flex;
    flex-direction: column;
    height: 100vh;
    width: 100vw;
    background-size: 140%;
    position: fixed;
    background-position: 140%;
  }

  @media (min-width: $desktop-screen) {
    display: flex;
    flex-direction: column;
    height: 100vh;
    width: 100vw;
    background-size: 80%;
    position: fixed;
    background-position: 60%;
  }

  &_text {
    color: #ffffff7a;
    text-align: center;
    font-size: 16px;
    margin-top: 50vh;
    @media (min-width: $desktop-screen) {
      color: #ffffff7a;
      font-size: 28px;
      margin-top: 50vh;
    }
  }

  &_submit {
    position: absolute;
    bottom: 200px;
    left: 0;
    right: 0;
    margin: auto;
    height: 44px;
    width: 150px;
    box-shadow: #fff 0 -1px 4px, #ff0 0 -2px 10px, #ff8000 0 -10px 20px,
      red 0 -18px 40px, 5px 5px 15px 5px rgba(255, 239, 0, 0);
    background-color: rgba(255, 213, 87, 0.937);
    border: none;
    @media (min-width: $tablette-screen) {
      height: 44px;
      position: absolute;
      bottom: 200px;
      right: 0;
      left: 60vw;
      margin: auto;
    }
    @media (min-width: $desktop-screen) {
      height: 44px;
      position: absolute;
      bottom: 200px;
      right: 0;
      left: 60vw;
      margin: auto;
    }
  }
}
</style>
<script>
export default { name: "NotFound" };
</script>
