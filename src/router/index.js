import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import interimaire from '../views/interimaire.vue'
import Form from '../views/test/Form.vue'
import Tabs from '../views/test/Tabs.vue'
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
    path: '/test/form',
    name: 'Form',
    component: Form
  },
  {
    path: '/test/tabs',
    name: 'Tabs',
    component: Tabs
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
