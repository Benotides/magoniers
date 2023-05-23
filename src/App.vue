<script>
import NavBar from '../src/components/NavBar.vue'
export default {
    name: 'App',
    components: {
        NavBar,

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
</template>

<style scoped>
.logo {
    display: block;
    margin: 0 auto;
    width: 170px;
    height: 200px;

    border-radius:200px;
    margin: 0 auto 1rem;
}

.container {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    text-align: center;
    background-color: rgb(231, 228, 224);

}

header {
    line-height: 1.5;

}

h1 {
    font-family: 'Cormorant Garamond', serif;

    color: rgba(133, 125, 117, 0.822);
    font-size: 25px;
}
</style>
