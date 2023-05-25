<template>
  <div class="box">
    <h1>Formulario de bodas</h1>
    <div class="plus">
      <label class="etiquetas" for="name">Nombre y apellido :</label>
      <input type="text" id="name" v-model="nombre" />
    </div>
    <div>
      <label class="etiquetas" for="acompañante">Acompañante?:</label>
      <input type="text" id="acompañante" v-model="acompañante" />
    </div>
    <div>
      <label class="etiquetas" for="alergia">Alergias:</label>
      <input type="text" id="alergia" v-model="alergia" />
    </div>
    <div>
      <label class="etiquetas" for="bus">Cogerás el bus?:</label>
      <input type="checkbox" id="bus" v-model="cogerBus" />
      <br />

      <label class="etiquetas" for="bus">Y tu acompañante cogerá el bus?:</label>
      <input type="checkbox" id="bus" v-model="cogerBus" />
    </div>
    <button @click="enviarFormulario">Enviar</button>
  </div>
</template>

<script>
import { mapState } from 'pinia'
import taskStore from '@/stores/taskStore.js'
import userStore from '@/stores/user.js'
export default {
  data() {
    return {
      nombre: '',
      acompañante: '',
      alergia: '',
      cogerBus: false
    }
  },
  computed: {
    ...mapState(taskStore, ['tasksList']),
    ...mapState(userStore, ['user']),
    completedTaskList() {
      return this.tasksList.filter((task) => task.is_complete)
    },
    uncompletedTaskList() {
      return this.tasksList.filter((task) => !task.is_complete)
    }
  },
  methods: {
    enviarFormulario() {
      // Aquí puedes realizar acciones con los datos del formulario, como enviarlos a un servidor o realizar alguna validación
      console.log('Datos del formulario:')
      console.log('Nombre:', this.nombre)
      console.log('Acompañante:', this.acompañante)
      console.log('Alergia:', this.alergia)
      console.log('Coger bus:', this.cogerBus)
    }
  }
}
</script>

<style scoped>
@import url('../assets/fonts.css');

.box {
  display: flex;
  justify-content: center;
  flex-direction: column;
}

.plus {
  display: flex;
  flex-direction: row;
  /* align-items: center;
    justify-content: center; */
}

h1 {
  font-family: 'Aniron', sans-serif;
  align-self: center;
  margin-top: 3%;
  color: rgb(128, 86, 36);
  font-family: 'corbel light';
}

.etiquetas {
  /* background-color: rgba(209, 204, 190, 0.589); */
  color: rgb(107, 67, 18);
  font-family: 'corbel light';
}

.etiquetas:hover {
  background-color: rgb(228, 190, 143);
}

.tareasnuevas {
  font-size: 20px;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  width: 60%;
  height: auto;
}

.acciones {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: auto;
}

input {
  margin-top: 0.8rem;
  background-color: #dbd7d2;
  color: white;
  border: none;
  padding: 0.5rem 0.5rem;
  border-radius: 10px;
  cursor: pointer;
  margin: 6px;
  width: auto;
  align-self: center;

  font-size: 0.8rem;
}

button:hover {
  background-color: rgb(73, 43, 9);
}

input[type='text'] {
  padding: 0.5rem;
  border: 1px solid #918484;
  border-radius: 4px;
  margin-right: 1rem;
  width: 40%;
}

/* Responsive para dispositivos móviles */
@media (max-width: 480px) {
  label {
    width: auto;
  }

  .box {
    margin-left: 5%;
    margin-right: 3%;
    display: flex;
  }

  h1 {
    font-family: 'Cormorant Garamond', serif;
    color: rgb(128, 86, 36);
    font-size: 30px;
    text-align: center;
  }

  .add {
    margin-left: 1%;
    width: auto;
  }

  tbody td {
    border: 1px solid #ccc;
  }

  .tareasnuevas {
    font-size: 18px;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  }
  button {
    margin-bottom: 6%;
    width: 50%;
    align-self: center;
    margin-top: 6%;
    border-radius: 20px;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    background-color: #dbd7d2;
    border: 1px solid #ccc;
    color: rgb(107, 67, 18);
  }
}
</style>
