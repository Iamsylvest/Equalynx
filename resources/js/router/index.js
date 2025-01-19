import { createRouter, createWebHistory } from 'vue-router';

import WarehouseInventory from '@/pages/Warehouse/WarehouseInventory.vue';
import WarehouseTransaction from '@/pages/Warehouse/WarehouseTransaction.vue';
import WarehouseSettings from '@/pages/Warehouse/WarehouseSettings.vue';
import Login from '@/auth/views/Login.vue';


const routes = [

        {path: '/', name: 'Login', component: Login,   meta: { navbar: 'default' },
    },
        {path: '/WarehouseInventory', name: 'WarehouseInventory', component: WarehouseInventory, meta: { navbar: 'default' }, 
    },
        {path: '/WarehouseTransaction', name: 'WarehouseTransaction', component: WarehouseTransaction, meta: { navbar: 'default' }, 
    },
        {path: '/WarehouseSettings', name: 'WarehouseSettings', component: WarehouseSettings, meta: { navbar: 'default' },  
    },

     
    // Add other routes as needed
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;