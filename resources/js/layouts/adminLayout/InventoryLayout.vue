<template>
    <div class="flex">
      <!-- AdminNavbar controls the toggling of the side panel -->
      <AdminNavbar @toggleSidePanel="toggleSidePanel" />
  
      <!-- Main content that will adjust based on the side panel visibility -->
      <div class="flex-1" >
        <!-- Table and other content -->
        <Table />
  
        <!-- Slot for additional content -->
        <slot />
      </div>
    </div>
  </template>
  <script>
  import AdminNavbar from "../../components/adminComponents/AdminNavbar.vue";

  
  export default {
    name: 'InventoryLayout',
    components: {
      AdminNavbar,

    },
  };

  </script>