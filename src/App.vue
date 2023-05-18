<script>
import NavBar from '../src/components/NavBar.vue'
export default {
  name: 'App',
  components: {
    NavBar
  }
}
</script>

<template>
  <NavBar />
  <header class="container">
  <h1>Nos Casamos!</h1>
    <img class="logo" src="../src/assets/fotopareja.jpeg" alt="fotonovios" />
    <div class="wrapper"></div>
  </header>
  <RouterView />
</template>

<style scoped>
body {
  font-family: 'Nunito Sans', sans-serif;
  font-weight: 400;
}
h1 {
  font-family: 'corbel light';
  /* margin-top: -20%; */
  color: rgba(133, 125, 117, 0.822);
  align-self: center;
  font-size: 30px;
}
.logo {
  display: block;
  margin: 0 auto;
  width: 250px;
  height: 250px;
  object-fit: contain;
  object-position: center;
  border-radius: 100%;
  display: block;
  margin: 0 auto 2rem;
}

.container {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: rgb(231, 228, 224);
}

header {
  line-height: 1.5;
  max-height: 100vh;
}

/* Estilos para pantalla de tablet */
@media screen and (max-width: 991px) {
  .logo {
    width: 100px;
    height: 100px;
  }
}

/* Estilos para pantalla de móvil */
@media screen and (max-width: 767px) {
  .logo {
    width: 150px;
    height: 150px;
  }
}

@media screen and (max-width: 480px) {
  
  .logo {
    width: 120px;
    height: 120px;
margin-top: 12%;
    border-radius: 80%;
    opacity: 1;
    align-self: center;
  }
  .container {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 150px;
}
h1 {
  font-family: 'corbel light';

  color: rgba(133, 125, 117, 0.822);
  align-self: center;
  font-size: 35px;
}

}

/* Estilos para pantalla de PC */
@media screen and (min-width: 1600px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    flex-wrap: wrap;
  }
}
</style>
