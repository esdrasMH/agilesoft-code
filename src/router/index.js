import Vue from 'vue';
import VueRouter from 'vue-router';
import Superheros from '../components/Superheros.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '*',
    redirect: '/superheroes'
  }, 
  {
    path: '/superheroes',
    name: 'Superheros',
    component: Superheros
  }
];

const router = new VueRouter({
  routes
});

export default router;
