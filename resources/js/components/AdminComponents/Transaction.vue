<template>
  
    <div class="p-8 ">
      <header>
           <h1 class="text-3xl font-bold">Transaction</h1>
            <div class="flex justify-end space-x-4 relative top-[-40px]">
              <Notification/>
              <Profile/>
            </div>
      </header>

    </div>

        

      <div class="p-2 relative top-[-40px]"> <!-- Added padding for the container -->

        <div class="flex flex-row justify-end space-x-5 relative right-5">
          <Search/>
          <Fillter/>
        </div>
      <!-- Buttons  Delivery Receipt -->
      <button
          class="p-3 px-12 text-md font-bold border-b-2 shadow-md rounded-md focus:outline-none"
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
          class="ml-7 p-3 px-12 text-lg font-bold border-b-2 shadow-md rounded-md focus:outline-none"
          @click="showTable = 'return'"
          :class="{
            'bg-custom-blue text-white': showTable === 'return',
            'hover:bg-custom-blue hover:text-white': showTable !== 'return'
          }"
        >
          Return Receipt
        </button>

      <!-- Delivery Receipt Table -->
      <div v-if="showTable === 'delivery'" class="mt-5  ">
        <table class="table-auto border-collapse shadow-lg w-full ">
          <thead class="h-14 bg-gray-100">
            <tr class="bg-custom-blue text-white">
              <th class="px-6 py-4 font-bold text-left">Date</th>
              <th class="px-6 py-4 font-bold text-left">DR#</th>
              <th class="px-6 py-4 font-bold text-left">Name</th>
              <th class="px-6 py-4 font-bold text-left">Project Name</th>
              <th class="px-6 py-4 font-bold text-left">Approved by</th>
              <th class="px-6 py-4 font-bold text-left">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr class="bg-white">
              <td class="px-6 py-4">11/25/2024</td>
              <td class="px-6 py-4">12345</td>
              <td class="px-6 py-4">Geryk Martin Bubutan</td>
              <td class="px-6 py-4">Mcdo</td>
              <td class="px-6 py-4">(Manager)</td>
              <td class="px-6 py-4">Pending</td>
            </tr>
            <tr class="bg-gray-100">
              <td class="px-6 py-4">11/25/2024</td>
              <td class="px-6 py-4">12345</td>
              <td class="px-6 py-4">Geryk Martin Bubutan</td>
              <td class="px-6 py-4">Mcdo</td>
              <td class="px-6 py-4">(Manager)</td>
              <td class="px-6 py-4">Pending</td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- Return Receipt Table -->
      <div v-if="showTable === 'return'" class="mt-5 ">
        <table class="table-auto border-collapse shadow-lg w-full ">
          <thead class="h-14 bg-gray-100">
            <tr class="bg-custom-blue text-white">
              <th class="px-6 py-4 font-bold text-left">Date</th>
              <th class="px-6 py-4 font-bold text-left">DR#</th>
              <th class="px-6 py-4 font-bold text-left">Name</th>
              <th class="px-6 py-4 font-bold text-left">Project Name</th>
              <th class="px-6 py-4 font-bold text-left">Approved by</th>
              <th class="px-6 py-4 font-bold text-left">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr class="bg-white">
              <td class="px-6 py-4">11/25/2024</td>
              <td class="px-6 py-4">12345</td>
              <td class="px-6 py-4">Sylvest Madelo</td>
              <td class="px-6 py-4">kFC</td>
              <td class="px-6 py-4">(Manager)</td>
              <td class="px-6 py-4">Pending</td>
            </tr>
            <tr class="bg-gray-100">
              <td class="px-6 py-4">11/25/2024</td>
              <td class="px-6 py-4">12345</td>
              <td class="px-6 py-4">Geryk Martin Bubutan</td>
              <td class="px-6 py-4">Mcdo</td>
              <td class="px-6 py-4">(Manager)</td>
              <td class="px-6 py-4">Pending</td>
            </tr>
          </tbody>
        </table>
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
     components:{
        Profile,
        Notification, 
        Fillter,
        Search, 
      },

        data() {
          return {
          showTable: 'delivery', // Track which table is displayed (either 'delivery' or 'return')     // Sample data for delivery receipt// Sample data for return receipt
       
          };
     },
  
  };
</script>