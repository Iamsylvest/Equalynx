<template>
  <div class="p-8">
    <header class="flex justify-between items-center mb-10">
      <h1 class="text-3xl font-bold">Activity Logs</h1>
      <div class="flex space-x-4">
        <Notification />
        <Profile />
      </div>
    </header>

    <div class="flex flex-wrap gap-4 sm:flex-col md:flex-row md:gap-2 relative top-5">
      <button
        class="flex-grow sm:w-full md:w-auto p-3 text-md font-bold border-b-2 shadow-md rounded-md focus:outline-none max-w-64"
        @click="showTable = 'delivery'"
        :class="{
          'bg-custom-blue text-white': showTable === 'delivery',
          'hover:bg-custom-blue hover:text-white': showTable !== 'delivery'
        }"
      >
        Delivery Receipt
      </button>

      <button
        class="flex-grow sm:w-full md:w-auto p-3 text-md font-bold border-b-2 shadow-md rounded-md focus:outline-none max-w-64"
        @click="showTable = 'return'"
        :class="{
          'bg-custom-blue text-white': showTable === 'return',
          'hover:bg-custom-blue hover:text-white': showTable !== 'return'
        }"
      >
        Return Receipt
      </button>

      <button
        class="flex-grow sm:w-full md:w-auto p-3 text-md font-bold border-b-2 shadow-md rounded-md focus:outline-none max-w-64"
        @click="showTable = 'inventory'"
        :class="{
          'bg-custom-blue text-white': showTable === 'inventory',
          'hover:bg-custom-blue hover:text-white': showTable !== 'inventory'
        }"
      >
        Inventory
      </button>
    </div>

    <div class="flex-wrap gap-2 md:gap-8 border-2 px-5 mb-8 mt-10">
      <div class="flex flex-wrap gap-4 md:flex-nowrap mt-5 mb-5">
        <div class="flex-grow w-full md:w-auto">
          <label for="start-date" class="whitespace-nowrap text-md font-medium text-gray-700">Start Date:</label>
          <input
            type="date"
            id="start-date"
            v-model="selectedStartDate"
            class="mt-1 border-2 px-4 py-2 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm w-full md:w-auto"
          />
        </div>

        <div class="flex-grow w-full md:w-auto">
          <label for="end-date" class="whitespace-nowrap text-md font-medium text-gray-700">End Date:</label>
          <input
            type="date"
            id="end-date"
            v-model="selectedStartEnd"
            class="mt-1 border-2 px-4 py-2 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm w-full md:w-auto"
          />
        </div>

        <div class="flex-grow w-full md:w-auto">
          <button class="mt-1 px-6 py-2 rounded-sm bg-green-300 hover:bg-green-400 w-full md:w-auto">
            Search
          </button>
        </div>

        <div class="flex-grow w-full md:w-auto">
          <select class="border-2 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-full md:w-auto">
            <option value="" disabled selected>Select Activity Type</option>
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </select>
        </div>
      </div>
    </div>

    <div v-if="showTable === 'delivery'" class="mt-5">
      <!-- Delivery Receipt ActivityLogs -->
      <table class="table-auto border-collapse shadow-lg w-full">
        <thead class="h-14 bg-gray-100">
          <tr class="bg-custom-blue text-white">
            <th class="px-6 py-4 font-bold text-center">Time Stamp</th>
            <th class="px-6 py-4 font-bold text-center">User</th>
            <th class="px-6 py-4 font-bold text-center">Role</th>
            <th class="px-6 py-4 font-bold text-center">Activity</th>
            <th class="px-6 py-4 font-bold text-center">DR#</th>
          </tr>
        </thead>
        <tbody class="text-center">
          <tr class="bg-white">
            <td class="px-6 py-4">11/25/2024</td>
            <td class="px-6 py-4">12345</td>
            <td class="px-6 py-4">Geryk Martin Bubutan</td>
            <td class="px-6 py-4">Mcdo</td>
            <td class="px-6 py-4">(Manager)</td>
          </tr>
          <tr class="bg-gray-100">
            <td class="px-6 py-4">11/25/2024</td>
            <td class="px-6 py-4">12345</td>
            <td class="px-6 py-4">Geryk Martin Bubutan</td>
            <td class="px-6 py-4">Mcdo</td>
            <td class="px-6 py-4">(Manager)</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div v-if="showTable === 'return'" class="mt-5">
      <!-- Return Receipt ActivityLogs -->
      <table class="table-auto border-collapse shadow-lg w-full">
        <thead class="h-14 bg-gray-100">
          <tr class="bg-custom-blue text-white">
            <th class="px-6 py-4 font-bold text-center">Time Stamp</th>
            <th class="px-6 py-4 font-bold text-center">User</th>
            <th class="px-6 py-4 font-bold text-center">Role</th>
            <th class="px-6 py-4 font-bold text-center">Activity</th>
            <th class="px-6 py-4 font-bold text-center">DR#</th>
          </tr>
        </thead>
        <tbody class="text-center">
          <tr class="bg-white">
            <td class="px-6 py-4">11/25/2024</td>
            <td class="px-6 py-4">12345</td>
            <td class="px-6 py-4">Sylvest Madelo</td>
            <td class="px-6 py-4">kFC</td>
            <td class="px-6 py-4">(Manager)</td>
          </tr>
          <tr class="bg-gray-100">
            <td class="px-6 py-4">11/25/2024</td>
            <td class="px-6 py-4">12345</td>
            <td class="px-6 py-4">Geryk Martin Bubutan</td>
            <td class="px-6 py-4">Mcdo</td>
            <td class="px-6 py-4">(Manager)</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div v-if="showTable === 'inventory'" class="mt-5">
      <!-- Inventory Receipt ActivityLogs -->
      <table class="table-auto border-collapse shadow-lg w-full">
        <thead class="h-14 bg-gray-100">
          <tr class="bg-custom-blue text-white">
            <th class="px-6 py-4 font-bold text-center">Time Stamp</th>
            <th class="px-6 py-4 font-bold text-center">User</th>
            <th class="px-6 py-4 font-bold text-center">Role</th>
            <th class="px-6 py-4 font-bold text-center">Activity</th>
            <th class="px-6 py-4 font-bold text-center">DR#</th>
          </tr>
        </thead>
        <tbody class="text-center">
          <tr class="bg-white">
            <td class="px-6 py-4">11/25/2024</td>
            <td class="px-6 py-4">12345</td>
            <td class="px-6 py-4">Sylvest Madelo</td>
            <td class="px-6 py-4">kFC</td>
            <td class="px-6 py-4">(Manager)</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import Profile from '@/components/AdminComponents/Profile.vue';
import Notification from '@/components/AdminComponents/Notification.vue';

export default {
  name: 'ActivityLogsTable',
  components: {
    Profile,
    Notification,
  },
  data() {
    return {
      showTable: 'delivery', // Track which table is displayed (either 'delivery' or 'return')
      selectedStartDate: '', // Bind to this property
      selectedStartEnd: '',
    };
  },
};
</script>
