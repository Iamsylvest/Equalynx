<template>
  <UserManagementLayout>
    <!-- Content here will be injected into the slot defined in AdminLayout -->

  </UserManagementLayout>
</template>

<script>
import UserLayout from "../layouts/adminLayout/UserLayout.vue";

export default {
    name: 'AdminUserManagement', 
  components: {
    UserLayout,
  },
};
</script>
  