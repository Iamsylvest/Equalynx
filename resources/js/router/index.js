import { createRouter, createWebHistory } from 'vue-router';

import AdminDashboard from '../pages/AdminDashboard.vue';

const routes = [
  { path: '/', component: AdminDashboard },

];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;