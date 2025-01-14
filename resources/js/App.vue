<template>
  <div class="flex h-screen ">
    <!-- AdminNavBar -->
    <AdminNavBar v-if="isAdminNavBarVisible" />
    <!-- Main Content -->
    <div class="flex-1 overflow-auto ">
      <router-view />
    </div>
  </div>
</template>

<script>
import AdminNavBar from './components/AdminNavBar.vue';


export default {
  name: 'App',
  components:{ AdminNavBar

  },

  data() {
    return {
      // Flag to control the visibility of the AdminNavBar
      isAdminNavBarVisible: true, // Set to false to hide the navbar
    };
  },
  methods: {
    toggleNavBar() {
      this.isAdminNavBarVisible = !this.isAdminNavBarVisible;
    },
  },
};
</script>

