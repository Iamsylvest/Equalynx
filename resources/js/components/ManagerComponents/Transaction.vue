<template>
  <div class="p-8">
    <header class="flex justify-between items-center mb-10">
        <h1 class=" text-[25px]">Transaction</h1>
      
        <div class="flex space-x-4">
            <Notification />
            <Profile />
        </div>
        </header>

    <div class="p-2 relative top-[-10px]">
      <!-- Search, Filter, Delivery Receipt, and Return Receipt buttons aligned on the same line -->
      <div class="flex flex-wrap justify-between sm:space-x-5 sm:space-y-0 space-y-4 ">
        <div class="flex flex-col sm:flex-row sm:space-x-5 sm:space-y-0 space-y-4">
          <Search />
          <Fillter />
        </div>

        <div class="flex flex-col sm:flex-row sm:space-x-7 sm:space-y-0 space-y-4">
          <button
            class="p-3 px-12 text-[12px] font-bold border-b-2 shadow-md rounded-md focus:outline-none w-full sm:w-auto"
            @click="showTable = 'delivery'"
            :class="{
              'bg-custom-blue text-white': showTable === 'delivery',
              'hover:bg-custom-blue hover:text-white': showTable !== 'delivery'
            }"
          >
            Delivery Receipt
          </button>

          <button
            class="p-3 px-12 text-[12px] font-bold border-b-2 shadow-md rounded-md focus:outline-none w-full sm:w-auto"
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
        <table class="table-auto border-collapse shadow-lg w-full  text-[12px]">
          <thead class="h-14 bg-gray-100">
            <tr class="bg-custom-blue text-white">
              <th class="px-6 py-4 font-bold text-center">Date</th>
              <th class="px-6 py-4 font-bold text-center">DR#</th>
              <th class="px-6 py-4 font-bold text-center">Creater by</th>
              <th class="px-6 py-4 font-bold text-center">Project Name</th>
              <th class="px-6 py-4 font-bold text-center">Approved by</th>
              <th class="px-6 py-4 font-bold text-center">Status</th>
              <th class="px-4 py-2 border-0 font-bold text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr class="bg-white">
              <td class="px-6 py-4 text-center">11/25/2024</td>
              <td class="px-6 py-4 text-center underline">
                <button> 
                    <TransactionDRmodal/>
              </button>
            </td>
              <td class="px-6 py-4 text-center">Geryk Martin Bubutan</td>
              <td class="px-6 py-4 text-center">Mcdo</td>
              <td class="px-6 py-4 text-center">(Manager)</td>
              <td class="px-6 py-4 text-center">Pending</td>
              <td class="text-center px-4 py-2 border-0 space-x-1">
                <button class="text-gray-500 hover:underline w-full sm:w-auto">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                      <path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                    </svg>
                  </button>
                        <!-- PRINT Icon  -->
                        <button class="text-gray-500 hover:underline w-full sm:w-auto">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6.72 13.829c-.24.03-.48.062-.72.096m.72-.096a42.415 42.415 0 0 1 10.56 0m-10.56 0L6.34 18m10.94-4.171c.24.03.48.062.72.096m-.72-.096L17.66 18m0 0 .229 2.523a1.125 1.125 0 0 1-1.12 1.227H7.231c-.662 0-1.18-.568-1.12-1.227L6.34 18m11.318 0h1.091A2.25 2.25 0 0 0 21 15.75V9.456c0-1.081-.768-2.015-1.837-2.175a48.055 48.055 0 0 0-1.913-.247M6.34 18H5.25A2.25 2.25 0 0 1 3 15.75V9.456c0-1.081.768-2.015 1.837-2.175a48.041 48.041 0 0 1 1.913-.247m10.5 0a48.536 48.536 0 0 0-10.5 0m10.5 0V3.375c0-.621-.504-1.125-1.125-1.125h-8.25c-.621 0-1.125.504-1.125 1.125v3.659M18 10.5h.008v.008H18V10.5Zm-3 0h.008v.008H15V10.5Z" />
                          </svg>
                        </button>
                              <!-- DELETE Icon  -->
                    <button class="text-gray-500 hover:underline w-full sm:w-auto">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                      </svg>
                    </button>
              </td>
            </tr>
            <tr class="bg-gray-100">
              <td class="px-6 py-4 text-center">11/25/2024</td>
              <td class="px-6 py-4 text-center underline">12345</td>
              <td class="px-6 py-4 text-center">Geryk Martin Bubutan</td>
              <td class="px-6 py-4 text-center">Mcdo</td>
              <td class="px-6 py-4 text-center">(Manager)</td>
              <td class="px-6 py-4 text-center">Pending</td>
              <td class="text-center px-4 py-2 border-0 space-x-1">
                <button class="text-gray-500 hover:underline w-full sm:w-auto">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                      <path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                    </svg>
                  </button>
                        <!-- PRINT Icon  -->
                        <button class="text-gray-500 hover:underline w-full sm:w-auto">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6.72 13.829c-.24.03-.48.062-.72.096m.72-.096a42.415 42.415 0 0 1 10.56 0m-10.56 0L6.34 18m10.94-4.171c.24.03.48.062.72.096m-.72-.096L17.66 18m0 0 .229 2.523a1.125 1.125 0 0 1-1.12 1.227H7.231c-.662 0-1.18-.568-1.12-1.227L6.34 18m11.318 0h1.091A2.25 2.25 0 0 0 21 15.75V9.456c0-1.081-.768-2.015-1.837-2.175a48.055 48.055 0 0 0-1.913-.247M6.34 18H5.25A2.25 2.25 0 0 1 3 15.75V9.456c0-1.081.768-2.015 1.837-2.175a48.041 48.041 0 0 1 1.913-.247m10.5 0a48.536 48.536 0 0 0-10.5 0m10.5 0V3.375c0-.621-.504-1.125-1.125-1.125h-8.25c-.621 0-1.125.504-1.125 1.125v3.659M18 10.5h.008v.008H18V10.5Zm-3 0h.008v.008H15V10.5Z" />
                          </svg>
                        </button>
                              <!-- DELETE Icon  -->
                    <button class="text-gray-500 hover:underline w-full sm:w-auto">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                      </svg>
                    </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

              <!-- Return Receipt Table -->
            <!-- Return Receipt Table -->
       <div v-if="showTable === 'return'" class="mt-5">
          <table class="table-auto border-collapse shadow-lg w-full  text-[12px]">
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
                <td class="px-6 py-4 text-center underline">
                  <button> 
                    <TransactionRRmodal/>
                  </button>
                </td>
                <td class="px-6 py-4 text-center">Sylvest Madelo</td>
                <td class="px-6 py-4 text-center">kFC</td>
                <td class="px-6 py-4 text-center">(Manager)</td>
                <td class="px-6 py-4 text-center">Pending</td>
                <td class="text-center px-4 py-2 border-0 space-x-1">
                <!-- VIEW Icon  -->
                <button class="text-gray-500 hover:underline w-full sm:w-auto">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                      <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    </svg>

                  </button>
                  
                </td>
              </tr>
              <tr class="bg-gray-100">
                <td class="px-6 py-4 text-center">11/25/2024</td>
                <td class="px-6 py-4 text-center underline">12345</td>
                <td class="px-6 py-4 text-center">Geryk Martin Bubutan</td>
                <td class="px-6 py-4 text-center">Mcdo</td>
                <td class="px-6 py-4 text-center">(Manager)</td>
                <td class="px-6 py-4 text-center">Pending</td>
                <td class="text-center px-4 py-2 border-0 space-x-1">
                   <!-- VIEW Icon  -->
                  <button class="text-gray-500 hover:underline w-full sm:w-auto">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                      <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    </svg>

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
import Profile from '@/components/ManagerComponents/Profile.vue';
import Notification from '@/components/ManagerComponents/Notification.vue';
import Fillter from '@/components/ManagerComponents/Fillter.vue';
import Search from '@/components/ManagerComponents/Search.vue';
import TransactionDRmodal from '@/components/ManagerComponents/TransactionDRmodal.vue';
import TransactionRRmodal from '@/components/ManagerComponents/TransactionRRmodal.vue';

export default {
  name: "Transaction",
  components: {
    Profile,
    Notification,
    Fillter,
    Search,
    TransactionDRmodal,
    TransactionRRmodal,
  },
  data() {
    return {
      showTable: 'delivery', // Set default table to 'delivery' on page load
    };
  },
};
</script>