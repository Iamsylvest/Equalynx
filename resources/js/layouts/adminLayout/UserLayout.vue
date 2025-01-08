<template>
  <div class="flex">
    <!-- AdminNavbar controls the toggling of the side panel -->
    <AdminNavbar @toggleSidePanel="toggleSidePanel" />
    <router-view />   <!-- Routed components will be injected here -->
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
import Table from "../../components/adminComponents/UserManagement/Table.vue";

export default {
  name: 'UserLayout',
  components: {
    AdminNavbar,
    Table,
  },
};
</script>