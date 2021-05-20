import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import interimaire from '../views/interimaire.vue'
import Calendrier from '../views/Calendar'
import Test from '../views/test/test.vue'
import Test2 from '../views/test/test2.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/interimaire',
    component:interimaire,
  },
  {
    path: '/test',
    name: 'Test',
    component: Test
  },
  {
    path: '/test2',
    name: 'Test',
    component: Test2
  },
  {
    path:"/calendrier",
    name:"calendrier",
    component: Calendrier
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
