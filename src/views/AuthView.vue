<template>
  <div  class="auth-view">
    yo soy auth view
    <RouterView />
  </div>
</template>

<script>
import { RouterView } from 'vue-router'

export default {
  name: 'AuthView',
  components: {
    RouterView
  }
}
</script>

<style scoped>
.auth-view {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  font-family: sans-serif;
  background-image: url('../assets/pals2.jpeg');
  background-size: cover;
  background-repeat: no-repeat;
 

}

.auth-view__title {
  font-size: 2rem;
  margin-bottom: 2rem;
}
</style>
