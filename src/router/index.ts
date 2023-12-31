import { RouteRecordRaw, createRouter, createWebHashHistory } from 'vue-router';
import WithTS from '../pages/WithTS.vue';
import WithJS from '../pages/WithJS.vue';
import Fallback from '../pages/Fallback.vue';
import TestPage from '../pages/TestPage.vue';

const routeRecords: RouteRecordRaw[] = [
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
  {
    path: '/test',
    name: 'Test',
    component: TestPage,
  }
];

export const router = createRouter({
  history: createWebHashHistory(),
  routes: routeRecords,
})
