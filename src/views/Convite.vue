<template>
  <div class="Image">
    <div class="content">
      <h1 class="title">Convite</h1>
      <p>
        Masia Mas Vidrier abre sus puertas a las 13.30 horas
        <br />
        Cierre de fiesta a las 11.30 pm
      </p>
    </div>
  </div>
</template>

<script></script>

<style scoped>
p {
  text-align: center;
  font-family: 'Cormorant Garamond', serif;
  color: rgb(252, 238, 238);
  font-size: 17px;
}

h1.title {
  font-family: 'Cormorant Garamond', serif;
  color: rgb(128, 86, 36);
  font-size: 30px;
  text-align: center;
}

.Image {
  position: relative;
  height: 300px;
  width: auto;
  background-image: url('../src/assets/Masvidrier.jpeg');
  background-size: cover;
  background-repeat: no-repeat;
}

.content {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
