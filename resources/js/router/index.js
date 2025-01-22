import { createRouter, createWebHistory } from 'vue-router';

import Procurement_Dashboard from '@/pages/Procurement/Procurement_Dashboard.vue';
import Procurement_Inventory from '@/pages/Procurement/Procurement_Inventory.vue';
import Procurement_Transaction from '@/pages/Procurement/Procurement_Transaction.vue';
import Procurement_Notification from '@/pages/Procurement/Procurement_Notification.vue';
import Procurement_Settings from '@/pages/Procurement/Procurement_Settings.vue';




const routes = [

    {
        path: '/', name: 'Procurement_Dashboard', component: Procurement_Dashboard, meta: { navbar: 'default' },
    },
    {
        path: '/Procurement_Inventory', name: 'Procurement_Inventory', component: Procurement_Inventory, meta: { navbar: 'default' },
    },
    {
        path: '/Procurement_Transaction', name: 'Procurement_Transaction', component: Procurement_Transaction, meta: { navbar: 'default' },
    },
    {
        path: '/Procurement_Notification', name: 'Procurement_Notification', component: Procurement_Notification, meta: { navbar: 'default' },
    },
    {
        path: '/Procurement_Settings', name: 'Procurement_Settings', component: Procurement_Settings, meta: { navbar: 'default' },
    },


    // Add other routes as needed
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;