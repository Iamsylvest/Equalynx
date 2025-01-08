import { createRouter, createWebHistory } from 'vue-router';
import ManagementAdmin from '../pages/ManagementAdmin.vue';
import InventoryAdmin from '../pages/InventoryAdmin.vue';

const routes = [
  {
    path: '/ManagementAdmin',
    name: 'ManagementAdmin',
    component: ManagementAdmin
  },
  {
    path: '/InventoryAdmin',
    name: 'InventoryAdmin',
    component: InventoryAdmin
  },
  // Other routes
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;