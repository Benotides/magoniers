<template>
<div>

    <nav>
    
        <RouterLink to="/Mapa" class="nav-link">
            <i class="fas fa-map-marked-alt" title="Mapa de acceso"></i>
            <span class="link-text"></span>
        </RouterLink>
        <RouterLink to="/Convite" class="nav-link">
            <i class="fas fa-utensils" title="Convite"></i>
            <span class="link-text"></span>
        </RouterLink>
        <RouterLink to="/HomeView" class="nav-link">
            <i class="fas fa-edit" title="Rellenar formulario"></i>
            <span class="link-text"></span>
        </RouterLink>
        <RouterLink to="/Ceremonia" class="nav-link">
            <i class="fas fa-heart" title="Ceremonia"></i>
            <span class="link-text"></span>
        </RouterLink>
        <RouterLink to="/Buses" class="nav-link">
            <i class="fas fa-bus" title="Buses"></i>
            <span class="link-text"></span>
        </RouterLink>
        <RouterLink to="/NuestraAventura" class="nav-link">
            <i class="fas fa-compass" title="Nuestra aventura..."></i>
            <span class="link-text">.</span>
        </RouterLink>
    </nav>
</div>
</template>

<style scoped>
nav {
    display: flex;
    justify-content: space-around;
    background-color: #a09898;
    width: auto;
    height: auto;
    background-image: url('../src/assets/MENORCA3.jpeg');
        background-size: cover;
        background-repeat: no-repeat;

}

.nav-link {
    font-family: 'corbel light';
    opacity: 1;
    color: rgb(48, 39, 28);
    text-decoration: none;
    margin: 0.5rem;
    font-size: 1.6rem;
    font-weight: bolder;
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
        margin-bottom: 3%;
        background-size: cover;
        background-repeat: no-repeat;
        width: auto;
        height: auto;
    }
}

@media screen and (max-width: 480px) {
    nav {
        flex-direction: row;
        background-color: #aaa;

        margin-bottom: 0%;

        background-size: cover;
        background-repeat: no-repeat;
        align-items: center;
        width: auto;
        height: auto;
        justify-content: space-between;

    }

    .nav-link {
        font-family: 'corbel light';
        color: rgba(70, 42, 42, 0.801);
        font-weight: bolder;
        text-decoration: none;

    }

    .link-text {
        /* Estilos para mostrar el texto solo en tamaño móvil */
        display: none;

    }

    i {
        font-size: 20px;

    }

}
</style>
