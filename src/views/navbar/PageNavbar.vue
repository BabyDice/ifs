<script></script>

<template>
  <nav class="navbar">
    <nav>
      <ul class="main">
        <li>
          <router-link :to="{ name: 'accueil' }">Accueil</router-link>
        </li>
        <li class="deroulant">
          <router-link :to="{ name: 'formation' }">Formation</router-link>
          <ul class="sous">
            <li>
              <router-link class="sous-element" :to="{ name: 'bureau' }"
                >Bureautique</router-link
              >
            </li>
          </ul>
        </li>
        <li>
          <img
            src="../../assets/navbar/logo_final_ifs78.svg"
            width="50px"
            height="50px"
          />
        </li>
        <li>
          <router-link :to="{ name: 'propos' }">A propos</router-link>
        </li>
        <li>
          <router-link :to="{ name: 'contact' }">Contact</router-link>
        </li>
      </ul>
    </nav>
  </nav>
</template>

<style>
* {
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 30px;
}

nav {
  background: rgba(255, 255, 255, 0.25);
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(15px);
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
}

.main {
  display: flex;
  text-decoration: none;
  list-style: none;
  justify-content: center;
  align-items: center;
  /* width: clamp(15px, 40em, 100px); */
}

li {
  flex: 2;
}

.sous-element {
  font-size: 20px;
}

nav a:hover {
  color: orange;
  border-bottom: 2px solid gold;
}

.sous {
  display: none;
  box-shadow: 0px 1px 2px #ccc;
  background-color: white;
  position: absolute;
  /* margin-top: 5px; */
  padding: 4%;
  width: 20%;
  z-index: 1000;
}

nav > ul li:hover .sous {
  display: block;
}

.sous li {
  float: none;
  width: 0%;
  text-align: center;
}

.sous a {
  padding: 10px;
  border-bottom: none;
}

.sous a:hover {
  border-bottom: none;
  background-color: RGBa(200, 200, 200, 0.1);
}

.deroulant > a::after {
  content: " ▼";
  font-size: 24px;
}
</style>

<script>
export default {};
</script>
