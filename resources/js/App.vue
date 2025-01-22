<template>
  <div class="flex h-screen ">
    <!-- AdminNavBar -->
    <Procurement v-if="isAdminNavBarVisible" />
    <!-- Main Content -->
    <div class="flex-1 overflow-auto ">
      <router-view />
    </div>
  </div>
</template>

<script>
import Procurement from './components/Procurement_Navbar.vue';


export default {
  name: 'App',
  components: {
    Procurement,

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
