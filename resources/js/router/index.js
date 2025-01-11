import { createRouter, createWebHistory } from 'vue-router';

import UserManagement from '@/pages/Admin/UserManagement.vue';
import AdminInventory from '@/pages/Admin/AdminInventory.vue';
import AdminTransaction from '@/pages/Admin/AdminTransaction.vue';
import AdminNotification from '@/pages/Admin/AdminNotification.vue';
import AdminSettings from '@/pages/Admin/AdminSettings.vue';
import ActivityLogs from '@/pages/Admin/ActivityLogs.vue';



const routes = [

        {path: '/', name: 'UserManagement', component: UserManagement,   meta: { navbar: 'default' },
    },
        {path: '/AdminInventory', name: 'AdminInventory', component: AdminInventory, meta: { navbar: 'default' }, 
    },
        {path: '/AdminTransaction', name: 'AdminTransaction', component: AdminTransaction, meta: { navbar: 'default' }, 
    },
        {path: '/ActivityLogs', name: 'ActivityLogs', component: ActivityLogs, meta: { navbar: 'default' },  
    },
        {path: '/AdminNotification', name: 'AdminNotification', component: AdminNotification, meta: { navbar: 'default' },  
    },
        {path: '/AdminSettings', name: 'AdminSettings', component: AdminSettings, meta: { navbar: 'default' },  
    },
        {path: '/ActivityLogs', name: 'ActivityLogs', component: ActivityLogs, meta: { navbar: 'default' },  
    },
     
    // Add other routes as needed
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;