import { createRouter, createWebHistory } from 'vue-router'
//import Polygon from "@/components/Polygon.vue"
import PolygonTestnet from "@/components/PolygonTestnet.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Polygon',
      component: PolygonTestnet
    },
    {
      path: '/',
      name: 'PolygonTestnet',
      component: PolygonTestnet
    }
  ]
})

export default router
