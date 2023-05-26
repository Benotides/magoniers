<template>
  <div>
    <h1>Mapa</h1>
    <div>
      <img class="mapa" :src="`${baseUrl}/assets/Mapa.jpeg`" alt="mapafoto" />
      <img class="indicaciones" :src="`${baseUrl}/assets/Indicaciones.jpeg`" alt="ruta" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      baseUrl: import.meta.env.BASE_URL,
    };
  },
};
</script>

<style scoped>
/* Tu estilo CSS aquí */
</style>
