<template>
    <InventoryLayout>
      <!-- Content here will be injected into the slot defined in InventoryLayout -->

    </InventoryLayout>
  </template>
  
  <script>
import InventoryLayout from "../layouts/adminLayout/inventoryLayout.vue";
  
  export default {
      name: 'AdminInventory',
    components: {
      InventoryLayout,
    },
  };
  </script>
    