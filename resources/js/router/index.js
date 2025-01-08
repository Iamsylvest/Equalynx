import { createRouter, createWebHistory } from 'vue-router';
import UserManagement from '@/pages/Admin/UserManagement.vue';

const routes = [
    {
        path: '/', name: 'UserManagement', component: UserManagement
    },
    // Add other routes as needed
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;