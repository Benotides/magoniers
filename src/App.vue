<script>
import NavBar from '../src/components/NavBar.vue'
import FooterView from '../src/components/FooterView.vue'

export default {
  name: 'App',
  components: {
    NavBar,
    FooterView
  }
}
</script>

<template>
  <NavBar />
  <header class="container">
    <h1>Nos Casamos!</h1>
    <img class="logo" src="../src/assets/pals.jpeg" alt="fotonovios" />
    <h1>María & Gonzalo</h1>
  </header>
  <RouterView />
  <footer>
    <FooterView />
  </footer>
</template>

<style scoped>
.logo {
  display: block;
  margin: 0 auto;
  width: 130px;
  height: 155px;

  border-radius: 200px;
  margin: 0 auto 1rem;
}

.container {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  text-align: center;
  background-color: rgba(224, 225, 231, 0.637);
  border-radius: 20px;
  margin-top: 2%;
  margin-bottom: 2%;
  margin-left: 2%;
  margin-right: 2%;
}

header {
  line-height: 1.5;
}

h1 {
  font-family: 'Cormorant Garamond', serif;

  color: rgba(133, 125, 117, 0.822);
  font-size: 25px;
  font-style: italic;
}
</style>
