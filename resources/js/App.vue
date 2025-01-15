<template>
  <div class="flex h-screen ">
    <!-- AdminNavBar -->
    <ManagerNavBar v-if="isManagerNavBarVisible" />
    <!-- Main Content -->
    <div class="flex-1 overflow-auto ">
      <router-view />
    </div>
  </div>
</template>

<script>
import ManagerNavBar from '@/components/ManagerNavBar.vue';


export default {
  name: 'App',
  components:{ ManagerNavBar

  },

  data() {
    return {
      // Flag to control the visibility of the AdminNavBar
      isManagerNavBarVisible: true, // Set to false to hide the navbar
    };
  },
  methods: {
    toggleNavBar() {
      this.isManagerNavBarVisible = !this.isManagernNavBarVisible;
    },
  },
};
</script>

