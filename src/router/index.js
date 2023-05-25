import { createRouter, createWebHistory } from 'vue-router'
import Ceremonia from '@/views/Ceremonia.vue'
import Convite from '@/views/Convite.vue'
import Mapa from '@/views/Mapa.vue'
import HomeView from '@/views/HomeView.vue'
import AuthView from '@/views/AuthView.vue'
import Buses from '@/views/Buses.vue'
import NuestraAventura from '@/views/NuestraAventura.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/auth' // Redirige la ruta raíz a '/auth'
    },
    {
      path: '/auth',
      name: 'Auth',
      component: AuthView,
    },
    {
      path: '/ceremonia',
      name: 'Ceremonia',
      component: Ceremonia,
    },

    {
      path: '/Convite',
      name: 'Convite',
      component: Convite,
    },
    {
      path: '/HomeView',
      name: 'Home',
      component: HomeView,
    },
    {
      path: '/Mapa',
      name: 'Mapa',
      component: Mapa,
    },
    {
      path: '/Buses',
      name: 'Buses',
      component: Buses,
    },
    {
      path: '/NuestraAventura',
      name: 'NuestraAventura',
      component: NuestraAventura,
    },

    
    
    
  ]
})


export default router
