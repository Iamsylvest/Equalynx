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
              <!-- EDIT Icon  -->
                <button>
                    <EditRRmodal/>
                </button>
                                   <!-- View Icon  -->
                        <button>
                          <ViewDRmodal/>
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
                      <!-- EDIT Icon  -->
                  <button>
                      <EditRRmodal/>
                  </button>
           
                <!-- VIEW Icon  -->
                  <button>
                      <ViewRRmodal/>
                  </button>




                                          <!-- PRINT Icon  -->
                  <button>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M6.72 13.829c-.24.03-.48.062-.72.096m.72-.096a42.415 42.415 0 0 1 10.56 0m-10.56 0L6.34 18m10.94-4.171c.24.03.48.062.72.096m-.72-.096L17.66 18m0 0 .229 2.523a1.125 1.125 0 0 1-1.12 1.227H7.231c-.662 0-1.18-.568-1.12-1.227L6.34 18m11.318 0h1.091A2.25 2.25 0 0 0 21 15.75V9.456c0-1.081-.768-2.015-1.837-2.175a48.055 48.055 0 0 0-1.913-.247M6.34 18H5.25A2.25 2.25 0 0 1 3 15.75V9.456c0-1.081.768-2.015 1.837-2.175a48.041 48.041 0 0 1 1.913-.247m10.5 0a48.536 48.536 0 0 0-10.5 0m10.5 0V3.375c0-.621-.504-1.125-1.125-1.125h-8.25c-.621 0-1.125.504-1.125 1.125v3.659M18 10.5h.008v.008H18V10.5Zm-3 0h.008v.008H15V10.5Z" />
                    </svg>
                    </button>
                  
                </td>
              </tr>
            </tbody>
          </table>
      </div>
          <!-- CREATE  -->
      <div class="flex justify-center mt-64 absolute">
                <button>
                  <CreateReturnModal/>
               </button>
        </div>
    </div>
  </div>
</template>

<script>
import Profile from '@/components/WarehouseComponents/ManagerComponents/Profile.vue';
import Notification from '@/components/WarehouseComponents/ManagerComponents/Notification.vue';
import Fillter from '@/components/WarehouseComponents/ManagerComponents/Fillter.vue';
import Search from '@/components/WarehouseComponents/ManagerComponents/Search.vue';
import TransactionDRmodal from '@/components/WarehouseComponents/ManagerComponents/TransactionDRmodal.vue';
import TransactionRRmodal from '@/components/WarehouseComponents/ManagerComponents/TransactionRRmodal.vue';
import CreateReturnModal from '@/components/WarehouseComponents/ManagerComponents/CreateReturnModal.vue';
import ViewDRmodal from '@/components/WarehouseComponents/ManagerComponents/ViewDRmodal.vue';
import ViewRRmodal from '@/components/WarehouseComponents/ManagerComponents/ViewRRmodal.vue';
import EditDRmodal from '@/components/WarehouseComponents/ManagerComponents/EditDRmodal.vue';
import EditRRmodal from '@/components/WarehouseComponents/ManagerComponents/EditRRmodal.vue';

export default {
  name: "Transaction",
  components: {
    Profile,
    Notification,
    Fillter,
    Search,
    TransactionDRmodal,
    TransactionRRmodal,
    CreateReturnModal,
    ViewDRmodal,
    ViewRRmodal,
    EditDRmodal,
    EditRRmodal,
    
  },
  data() {
    return {
      showTable: 'delivery', // Set default table to 'delivery' on page load
    };
  },
};
</script>