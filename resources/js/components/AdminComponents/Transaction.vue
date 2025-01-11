<template>
  <div class="p-8">
    <header>
      <h1 class="text-3xl font-bold">Transaction</h1>
      <div class="flex justify-end space-x-4 relative top-[-40px]">
        <Notification />
        <Profile />
      </div>
    </header>

    <div class="p-2 relative top-[-10px]">
      <!-- Search, Filter, Delivery Receipt, and Return Receipt buttons aligned on the same line -->
      <div class="flex flex-wrap justify-between sm:space-x-5 sm:space-y-0 space-y-4 mt-5">
        <div class="flex flex-col sm:flex-row sm:space-x-5 sm:space-y-0 space-y-4">
          <Search />
          <Fillter />
        </div>

        <div class="flex flex-col sm:flex-row sm:space-x-7 sm:space-y-0 space-y-4">
          <button
            class="p-3 px-12 text-md font-bold border-b-2 shadow-md rounded-md focus:outline-none w-full sm:w-auto"
            @click="showTable = 'delivery'"
            :class="{
              'bg-custom-blue text-white': showTable === 'delivery',
              'hover:bg-custom-blue hover:text-white': showTable !== 'delivery'
            }"
          >
            Delivery Receipt
          </button>

          <button
            class="p-3 px-12 text-md font-bold border-b-2 shadow-md rounded-md focus:outline-none w-full sm:w-auto"
            @click="showTable = 'return'"
            :class="{
              'bg-custom-blue text-white': showTable === 'return',
              'hover:bg-custom-blue hover:text-white': showTable !== 'return'
            }"
          >
            Return Receipt
          </button>
        </div>
      </div>

          <!-- Delivery Receipt Table -->
      <div v-if="showTable === 'delivery'" class="mt-5">
        <table class="table-auto border-collapse shadow-lg w-full">
          <thead class="h-14 bg-gray-100">
            <tr class="bg-custom-blue text-white">
              <th class="px-6 py-4 font-bold text-center">Date</th>
              <th class="px-6 py-4 font-bold text-center">DR#</th>
              <th class="px-6 py-4 font-bold text-center">Name</th>
              <th class="px-6 py-4 font-bold text-center">Project Name</th>
              <th class="px-6 py-4 font-bold text-center">Approved by</th>
              <th class="px-6 py-4 font-bold text-center">Status</th>
              <th class="px-4 py-2 border-0 font-bold text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr class="bg-white">
              <td class="px-6 py-4 text-center">11/25/2024</td>
              <td class="px-6 py-4 text-center">12345</td>
              <td class="px-6 py-4 text-center">Geryk Martin Bubutan</td>
              <td class="px-6 py-4 text-center">Mcdo</td>
              <td class="px-6 py-4 text-center">(Manager)</td>
              <td class="px-6 py-4 text-center">Pending</td>
              <td class="text-center px-4 py-2 border-0">
                <button class="text-gray-500 hover:underline w-full sm:w-auto">
                  <!-- Icon here -->
                </button>
              </td>
            </tr>
            <tr class="bg-gray-100">
              <td class="px-6 py-4 text-center">11/25/2024</td>
              <td class="px-6 py-4 text-center">12345</td>
              <td class="px-6 py-4 text-center">Geryk Martin Bubutan</td>
              <td class="px-6 py-4 text-center">Mcdo</td>
              <td class="px-6 py-4 text-center">(Manager)</td>
              <td class="px-6 py-4 text-center">Pending</td>
              <td class="text-center px-4 py-2 border-0">
                <button class="text-gray-500 hover:underline w-full sm:w-auto">
                  <!-- Icon here -->
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

              <!-- Return Receipt Table -->
            <!-- Return Receipt Table -->
       <div v-if="showTable === 'return'" class="mt-5">
          <table class="table-auto border-collapse shadow-lg w-full">
            <thead class="h-14 bg-gray-100">
              <tr class="bg-custom-blue text-white">
                <th class="px-6 py-4 font-bold text-center">Date</th>
                <th class="px-6 py-4 font-bold text-center">DR#</th>
                <th class="px-6 py-4 font-bold text-center">Name</th>
                <th class="px-6 py-4 font-bold text-center">Project Name</th>
                <th class="px-6 py-4 font-bold text-center">Approved by</th>
                <th class="px-6 py-4 font-bold text-center">Status</th>
                <th class="px-4 py-2 border-0 font-bold text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr class="bg-white">
                <td class="px-6 py-4 text-center">11/25/2024</td>
                <td class="px-6 py-4 text-center">12345</td>
                <td class="px-6 py-4 text-center">Sylvest Madelo</td>
                <td class="px-6 py-4 text-center">kFC</td>
                <td class="px-6 py-4 text-center">(Manager)</td>
                <td class="px-6 py-4 text-center">Pending</td>
                <td class="text-center px-4 py-2 border-0">
                  <button class="text-gray-500 hover:underline w-full sm:w-auto">
                    <!-- Icon here -->
                  </button>
                </td>
              </tr>
              <tr class="bg-gray-100">
                <td class="px-6 py-4 text-center">11/25/2024</td>
                <td class="px-6 py-4 text-center">12345</td>
                <td class="px-6 py-4 text-center">Geryk Martin Bubutan</td>
                <td class="px-6 py-4 text-center">Mcdo</td>
                <td class="px-6 py-4 text-center">(Manager)</td>
                <td class="px-6 py-4 text-center">Pending</td>
                <td class="text-center px-4 py-2 border-0">
                  <button class="text-gray-500 hover:underline w-full sm:w-auto">
                    <!-- Icon here -->
                  </button>
                </td>
              </tr>
            </tbody>
          </table>

      </div>
    </div>
  </div>
</template>

<script>
import Profile from '@/components/AdminComponents/Profile.vue';
import Notification from '@/components/AdminComponents/Notification.vue';
import Fillter from '@/components/AdminComponents/Fillter.vue';
import Search from '@/components/AdminComponents/Search.vue';

export default {
  name: "Transaction",
  components: {
    Profile,
    Notification,
    Fillter,
    Search,
  },
  data() {
    return {
      showTable: 'delivery', // Set default table to 'delivery' on page load
    };
  },
};
</script>