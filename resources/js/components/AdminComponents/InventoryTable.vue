<template>
  <div class="p-8">
    <header>
      <h1 class="text-3xl font-bold">Inventory</h1>
      <div class="flex justify-end space-x-4 relative top-[-38px]">
        <Notification />
        <Profile />
      </div>
    </header>

    <div class="flex flex-row justify-between">
      <!-- Element that should be aligned at the start -->
      <div class="flex w-full max-w-32 p-4 sm:whitespace-nowrap md:whitespace-nowrap">
        <h1 class="text-xl font-semibold">Materials</h1>
      </div>

      <!-- Elements that should be aligned at the end -->
      <div class="flex space-x-6">
        <Search />
        <Fillter />
      </div>
    </div>

    <table class="table-auto w-full border-collapse mt-1 shadow-lg">
      <thead class="h-14">
        <tr class="bg-custom-blue text-white">
          <th class="px-4 py-2 border-0 text-center font-bold">Description</th>
          <th class="px-4 py-2 border-0 text-center font-bold">Stocks</th>
          <th class="px-4 py-2 border-0 text-center font-bold">Measurements</th>
          <th class="px-4 py-2 border-0 text-center font-bold">Threshold</th>
          <th class="px-4 py-2 border-0 text-center font-bold">Last Update</th>
        </tr>
      </thead>
      <tbody>
        <tr class="bg-white">
          <td class="text-center px-4 py-2 border-0">50</td>
          <td class="text-center px-4 py-2 border-0">50</td>
          <td class="text-center px-4 py-2 border-0">2 cm</td>
          <td class="text-center px-4 py-2 border-0">10</td>
          <td class="text-center px-4 py-2 border-0">11/26/2024</td>
        </tr>
        <tr class="bg-gray-100">
          <td class="text-center px-4 py-2 border-0">5</td>
          <td class="text-center px-4 py-2 border-0">5</td>
          <td class="text-center px-4 py-2 border-0">2 cm</td>
          <td class="text-center px-4 py-2 border-0">10</td>
          <td class="text-center px-4 py-2 border-0">11/26/2024</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import Profile from '@/components/AdminComponents/Profile.vue';
import Notification from '@/components/AdminComponents/Notification.vue';
import Fillter from '@/components/AdminComponents/Fillter.vue';
import Search from '@/components/AdminComponents/Search.vue';

  export default {
    name: "InventoryTable",

    components:{
        Profile,
        Notification,
        Fillter,
        Search,
    },

  };
</script>