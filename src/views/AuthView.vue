<template>
  <body>
    <div class="auth-view">
      <div class="imagen">
        <p>
          Ceremonia día 25 de octubre <br />
          Monestir de Sant Cugat 11.30 <br />
          Por favor confirma asistencia
          <RouterLink to="/HomeView" class="nav-link"
            ><button class="icon-button"><i class="fas fa-edit"></i></button
          ></RouterLink>
        </p>
      </div>
      <!-- <RouterView /> -->
    </div>
  </body>
</template>

<script>
// import { RouterView } from 'vue-router'

// export default {
//   name: 'AuthView',
//   components: {
//     RouterView
//   }
// }
</script>

<style scoped>
body {
  /* background-image: url('../src/assets/pals1.jpeg');
        background-size: cover;
        background-repeat: no-repeat; */
  display: flex;
  flex-direction: column;
  align-items: center;
  width: auto;
  height: auto;
}

.icon-button {
  background-color: transparent;
  border: none;
  cursor: pointer;
}

h1 {
  font-family: 'corbel light';

  color: rgba(133, 125, 117, 0.822);
  font-size: 50px;
}

.logo {
  display: block;
  margin: 0 auto;
  width: 250px;
  height: 250px;
  object-fit: contain;
  object-position: center;
  border-radius: 100%;
  margin: 0 auto 1rem;
}

p {
  text-align: center;
  font-family: 'corbel light';
  font-size: 30px;
  color: rgba(177, 109, 40, 0.822);
  white-space: pre-line;
  font-weight: bolder;
  margin-top: 30%;
}

header {
  line-height: 1.5;
  max-height: 100vh;
}

@media screen and (max-width: 480px) {
  body {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: auto;
    height: auto;
  }

  .imagen {
    background-image: url('../src/assets/MENORCA3.jpeg');
    background-size: cover;
    background-repeat: no-repeat;
    width: 80%;
    height: 80%;
    justify-content: center;
    align-items: center;
    text-align: center;
    align-self: center;
    margin-top: 10%;
    margin-bottom: 12%;
    border-radius: 10px;
  }

  p {
    text-align: center;
    font-family: 'corbel light';
    color: rgba(105, 62, 18, 0.822);
    white-space: pre-line;
    font-weight: bolder;
    font-size: 15px;
    width: auto;
    margin-top: 11%;
    padding: 2%;
    height: 200px;
  }

  .auth-view {
    display: flex;
    justify-content: center;

    align-items: center;
    text-align: center;
    background-color: rgba(224, 225, 231, 0.637);
    width: 100%;
    height: 100%;
  }

  button {
    color: rgb(116, 84, 44);
    font-size: 15px;
  }
}
</style>
