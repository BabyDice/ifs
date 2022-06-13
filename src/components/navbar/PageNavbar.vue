<script></script>

<template>
  <nav class="navbar">
    <nav>
      <ul class="main">
        <li><router-link to="/">Accueil</router-link></li>
        <li class="formation">
          <router-link to="/formation">Formation</router-link>
          <ul class="sous">
            <li><router-link to="">Bureautique</router-link></li>
          </ul>
        </li>
        <li><img src="../../assets/logo.png" width="50px" height="50px" /></li>
        <li><router-link to="/propos">A propos</router-link></li>
        <li><router-link to="/contact">Contact</router-link></li>
      </ul>
    </nav>
  </nav>
</template>

<style>
nav {
  background: rgba(255, 255, 255, 0.25);
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(15px);
  display: flex;
  flex-direction: column;
}

.main {
  display: flex;
  text-decoration: none;
  list-style: none;
  justify-content: center;
  align-items: center;
}

li {
  flex: 2;
}

.formation:hover {
}
</style>

<script>
export default {};
</script>
