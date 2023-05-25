<template>
  <div class="Image">
    <h1>
      Ceremonia en <br />
      El Monestir de Sant Cugat
    </h1>
    <p>
      La novia entrará a las 11.30 horas
      <br />
    </p>
    <div></div>
  </div>
  <RouterView />
</template>

<script>
import { RouterView } from 'vue-router'
export default {
  name: 'CeremoniaMonestir',
  components: {
    RouterView
  },
  data() {
    return {}
  },

  mounted() {},

  methods: {}
}
</script>

<style scoped>
h1 {
  font-family: 'Cormorant Garamond', serif;

  color: rgb(128, 86, 36);
  font-size: 25px;
  text-align: center;
}

.Image {
  position: relative;
  height: 300px;
  width: auto;
  background-image: url('../src/assets/monasterio 2.jpeg');
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 20px;
  margin-bottom: 2%;
  margin-left: 2%;
  margin-right: 2%;
}

p {
  text-align: center;
  font-family: 'Cormorant Garamond', serif;
  color: rgb(252, 238, 238);
  font-size: 17px;
}
</style>
