<template>
    <div class="p-8 "> <!-- Added lg:p-16 for larger screens -->
      
      <header>
        <h1 class="text-3xl font-bold">Activity Logs</h1>
        <div class="flex justify-end space-x-4 relative top-[-38px]">
          <Notification />
          <Profile />
        </div>
      </header>
  
      <div class="flex flex-row ml-[-25px]">
        <button
          class="flex-grow ml-7 p-3 px-2 text-md font-bold border-b-2 shadow-md rounded-md focus:outline-none max-w-64"
          @click="showTable = 'delivery'"
          :class="{
            'bg-custom-blue text-white': showTable === 'delivery',
            'hover:bg-custom-blue hover:text-white': showTable !== 'delivery'
          }"
        >
          Delivery Receipt
        </button>
  
        <!-- Buttons  Return Receipt -->
        <button
          class="flex-grow ml-7 p-3 px-2 2 text-lg font-bold border-b-2 shadow-md rounded-md focus:outline-none max-w-64"
          @click="showTable = 'return'"
          :class="{
            'bg-custom-blue text-white': showTable === 'return',
            'hover:bg-custom-blue hover:text-white': showTable !== 'return'
          }"
        >
          Return Receipt
        </button>
  
        <button
          class="flex-grow ml-7 p-3 text-lg font-bold border-b-2 shadow-md rounded-md focus:outline-none max-w-64"
          @click="showTable = 'inventory'"
          :class="{
            'bg-custom-blue text-white': showTable === 'inventory',
            'hover:bg-custom-blue hover:text-white': showTable !== 'return'
          }"
        >
          Inventory
        </button>
      </div>
  
      <div class="flex-wrap gap-2 border-2 px-5 mb-8 mt-5">
        <div class="flex flex-wrap md:flex-nowrap gap-4 md:gap-8 relative mt-5 mb-5">
          <div class="flex flex-grow space-x-2 w-full md:w-auto">
            <label for="date-input" class="whitespace-nowrap relative top-2 text-md font-medium text-gray-700">Start Date:</label>
            <input 
              type="date" 
              id="date-input" 
              v-model="selectedDate" 
              class="mt-1 border-2 px-10 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm w-full md:w-auto"
            />
          </div>
          
          <div class="flex flex-grow space-x-2 w-full md:w-auto">
            <label for="date-input" class="whitespace-nowrap relative top-2 text-md font-medium text-gray-700">End Date:</label>
            <input 
              type="date" 
              id="date-input" 
              v-model="selectedStartEnd" 
              class="mt-1 border-2 px-10 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm w-full md:w-auto"
            />
          </div>
  
          <div class="flex flex-grow w-full md:w-auto">
            <button class="mt-1 px-12 rounded-sm border-green-300 shadow-sm sm:text-md bg-green-300 hover:bg-green-400 w-full md:w-auto">
              Search
            </button>
          </div>
  
          <div class="flex flex-grow w-full md:w-auto">
            <select
              class="border px-10 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 h-7 w-full md:w-auto"
            >
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
                    <tr class="bg-white">
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

    components:{
        Profile,
        Notification,
       
    },
    data() {
          return {
          showTable: 'delivery', // Track which table is displayed (either 'delivery' or 'return')     // Sample data for delivery receipt// Sample data for return receipt
          selectedStartDate: '', // Bind to this property
          selectedStartEnd: '',    
          };
     },

  };
</script>