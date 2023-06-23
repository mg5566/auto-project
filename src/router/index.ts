import { RouteRecordRaw } from 'vue-router';
import WithTS from '../pages/WithTS/WithTS.vue';
import WithJS from '../pages/WithJS/WithJS.vue';
import Fallback from '../pages/Fallback/Fallback.vue';
import { createRouter, createWebHashHistory } from 'vue-router';

export const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/with-ts',
  },
  {
    path: '/with-ts',
    component: WithTS,
  },
  {
    path: '/with-js',
    component: WithJS,
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'Fallback',
    component: Fallback,
  },
];

export const router = createRouter({
  history: createWebHashHistory(),
  routes,
})
