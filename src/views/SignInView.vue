<template>
  <div class="container">
  
    <form class="signin-form">
      <label for="email">Por favor rellena con tu email</label>
      <input class="signin-form-input" type="email" id="email" v-model="email" />
      <label for="password">Y con tu nombre</label>
      <input class="signin-form-input" type="password" id="password" v-model="password" />
      <label for="password">¿Vienes con acompañante?</label>
      <input class="signin-form-input" type="password" id="password" v-model="password" />
      <button class="signin-form-button" type="button" @click.prevent="_handleSignIn">
      Enviar información
      </button>
    </form>
  </div>
</template>

<script>
import { mapState, mapActions } from 'pinia'
import userStore from '@/stores/user.js'

export default {
  name: 'SignInView',
  data() {
    return {
      email: '',
      password: ''
    }
  },
  computed: {
    ...mapState(userStore, ['user'])
  },
  methods: {
    ...mapActions(userStore, ['signIn']),
    _handleSignIn() {
   
        const userData = {
          email: this.email,
          password: this.password
        }
        this.signIn(userData)
        
     
    }
  }
}
</script>

<style scoped>
@import url('../assets/fonts.css');

h1 {
  font-family: 'Aniron', sans-serif;
  margin-top: -50%;
  color: rgb(47, 68, 92);
  align-self: center;
  font-size: 50px;
}
label {
  color: rgb(124, 94, 56);
  margin-bottom: 3%;
  text-align: center;
}
.signin-form {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
  font-family: 'Aniron', sans-serif;
  height: auto;
  
  
}

.signin-form-input {
  width: auto;
  padding: 10px;
  margin-bottom: 20px;
  border-radius: 5px;
  border: 1px solid #ccc;
  font-size: 16px;
}

button {
  font-family: 'Aniron', sans-serif;
  background-color: darkslategrey;
}

.signin-form-button {
  background-color: darkslategrey;
  color: rgb(228, 165, 88);
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  font-size: 18px;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;
}

.signin-form-button:hover {
  background-color: #8e9194;
}

/* Estilos para pantalla de tablet */
@media screen and (max-width: 991px) {
  .signin-form-input {
    width: auto;
  }
  h1 {
    font-size: 30px;
    text-align: center;
    margin-top: -70%;
    color: rgb(47, 68, 92);

  }
}

/* Estilos para pantalla de móvil */
@media screen and (max-width: 767px) {
  .signin-form-input {
    width: auto;
  }
  h1 {
    font-size: 25px;
    text-align: center;
  }
}
@media screen and (max-width: 480px) {
  h1 {
  font-family: 'corbel light';
  /* margin-top: -20%; */
  color: rgba(133, 125, 117, 0.822);
  align-self: center;
  font-size: 30px;
}
  .signin-form-button {
  background-color: rgba(255, 255, 255, 0.8); 
 width: 40%;
 font-size: 10px;
}
}
</style>
