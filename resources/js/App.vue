<template>
  <div class="flex h-screen ">
    <!-- AdminNavBar -->
    <WarehouseNavBar v-if="isWarehouseNavBarVisible" />
    <!-- Main Content -->
    <div class="flex-1 overflow-auto ">
      <router-view />
    </div>
  </div>
</template>

<script>
import WarehouseNavBar from '@/components/WarehouseNavBar.vue';


export default {
  name: 'App',
  components:{ WarehouseNavBar

  },

  data() {
    return {
      // Flag to control the visibility of the AdminNavBar
      isWarehouseNavBarVisible: true, // Set to false to hide the navbar
    };
  },
  methods: {
    toggleNavBar() {
      this.isWarehouseNavBarVisible = !this.isWarehouseNavBarVisible;
    },
  },
};
</script>

