<template>
  <div>
    <nav>
      <RouterLink to="/" class="nav-link">Ceremonia</RouterLink>
      <RouterLink to="/auth/sign-in" class="nav-link">Convite</RouterLink>
      <RouterLink to="/auth/sign-up" class="nav-link">Rellenar formulario</RouterLink>
      <RouterLink to="/auth/ceremonia" class="nav-link">Mapa de acceso</RouterLink>
      <RouterLink to="/auth/sign-up" class="nav-link">Buses</RouterLink>
      <RouterLink to="/auth/sign-up" class="nav-link">Nuestra aventura...</RouterLink>
    </nav>
  </div>
</template>

<style scoped>
nav {
  display: flex;
  justify-content: center;
  background-color: #aaa;
  padding: 1.5rem;
  margin-bottom: 3%;
  background-image: url('../assets/g1.jpeg');
  background-size: cover;
  background-repeat: no-repeat;
  width: auto;
  height: auto; /* Mantener la proporción de aspecto de la imagen */
}

.nav-link {
  font-family: 'Aniron', sans-serif;
  opacity: 1;
  color: rgb(95, 62, 22);
  text-decoration: none;
  margin: 0 3rem;
  font-size: 1rem;
}

.nav-link:hover {
  text-decoration: underline;
}

@media screen and (max-width: 768px) {
  nav {
    flex-direction: column;
    display: flex;
    justify-content: center;
    background-color: #aaa;
    padding: 1rem;
    margin-bottom: 3%;
    background-image: url('../assets/monasterio.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    width: auto;
  }
}

@media screen and (max-width: 450px) {
  nav {
    flex-direction: column;
    background-color: #aaa;
    padding: 1rem;
    margin-bottom: 0%;
    background-image: url('../assets/g1.jpeg');
  background-size: cover;
  background-repeat: no-repeat;
    align-items: center;
    opacity: 0.9;
    width: auto;
    height: auto;

  }
  .nav-link {
    font-family: 'corbel light';
    color: rgba(226, 214, 202, 0.822);
    text-decoration: none;
    margin-left:6%;
    font-size: 20px;
    margin:0;

  }

}
</style>
