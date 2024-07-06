import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: ()=>import('@/views/Home.vue'),
  },
  {
    path: '/tvbox',
    name: 'tvobx',
    component: ()=>import('@/views/tvbox/tvbox.vue'),
  },
];
 
const router = createRouter({
  history: createWebHistory(),
  routes,
});
 
export default router;