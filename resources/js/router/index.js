import { createRouter, createWebHistory } from 'vue-router';

import ManagerInventory from '@/pages/Manager/ManagerInventory.vue';
import ManagerTransaction from '@/pages/Manager/ManagerTransaction.vue';
import ManagerSettings from '@/pages/Manager/ManagerSettings.vue';
import ManagerActivityLogs from '@/pages/Manager/ManagerActivityLogs.vue';
import Login from '@/auth/views/Login.vue';


const routes = [

        {path: '/', name: 'Login', component: Login,   meta: { navbar: 'default' },
    },
        {path: '/ManagerInventory', name: 'ManagerInventory', component: ManagerInventory, meta: { navbar: 'default' }, 
    },
        {path: '/ManagerTransaction', name: 'ManagerTransaction', component: ManagerTransaction, meta: { navbar: 'default' }, 
    },
        {path: '/ManagerActivityLogs', name: 'ManagerActivityLogs', component: ManagerActivityLogs, meta: { navbar: 'default' },  
    },
    
        {path: '/ManagerSettings', name: 'ManagerSettings', component: ManagerSettings, meta: { navbar: 'default' },  
    },

     
    // Add other routes as needed
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;