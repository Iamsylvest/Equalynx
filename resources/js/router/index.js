import { createRouter, createWebHistory } from 'vue-router';

import UserManagement from '@/pages/Admin/UserManagement.vue';
import AdminInventory from '@/pages/Admin/AdminInventory.vue';
import ActivityLogs from '@/pages/Admin/ActivityLogs.vue';
import AdminTransaction from '@/pages/Admin/AdminTransaction.vue';
import AdminNotification from '@/pages/Admin/AdminNotification.vue';
import AdminSettings from '@/pages/Admin/AdminSettings.vue';

const routes = [

        {path: '/', name: 'UserManagement', component: UserManagement
    },
        {path: '/AdminInventory', name: 'AdminInventory', component: AdminInventory
    },
        {path: '/AdminTransaction', name: 'AdminTransaction', component: AdminTransaction
    },
        {path: '/ActivityLogs', name: 'ActivityLogs', component: ActivityLogs 
    },
        {path: '/AdminNotification', name: 'AdminNotification', component: AdminNotification 
    },
        {path: '/AdminSettings', name: 'AdminSettings', component: AdminSettings 
    },
    // Add other routes as needed
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;