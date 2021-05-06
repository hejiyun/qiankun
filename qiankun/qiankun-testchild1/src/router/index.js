import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

  const routes = [
  {
    path: '/long',
    name: 'linjunjie',
    component: () => import(/* webpackChunkName: "about" */ '../components/HelloWorld.vue')
  },
]
const router = new VueRouter({
  base: '/',
  mode: 'history',
  routes,
});

export default router
