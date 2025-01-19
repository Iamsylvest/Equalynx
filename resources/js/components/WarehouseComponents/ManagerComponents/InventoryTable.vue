<template>
  <div class="p-8">
    <header class="flex justify-between items-center mb-10">
        <h1 class=" text-[25px]">Inventory</h1>
      
        <div class="flex space-x-4">
            <Notification />
            <Profile />
        </div>
        </header>

    <div class="flex flex-row justify-between">
      <!-- Element that should be aligned at the start -->
      <div class="flex w-full max-w-32 p-4 sm:whitespace-nowrap md:whitespace-nowrap">
        <h1 class="text-xl">Materials</h1>
      </div>

      <!-- Elements that should be aligned at the end -->
      <div class="flex space-x-6">
        <Search />
        <Fillter />
      </div>
    </div>

    <table class="table-auto w-full border-collapse mt-1 shadow-lg  text-[12px]">
      <thead class="h-14">
        <tr class="bg-custom-blue text-white">
          <th class="px-4 py-2 border-0 text-center font-bold">Description</th>
          <th class="px-4 py-2 border-0 text-center font-bold">Stocks</th>
          <th class="px-4 py-2 border-0 text-center font-bold">Measurements</th>
          <th class="px-4 py-2 border-0 text-center font-bold">Threshold</th>
          <th class="px-4 py-2 border-0 text-center font-bold">Last Update</th>
          <th class="px-4 py-2 border-0 font-bold text-center">Action</th>
        </tr>
      </thead>
      <tbody>

        <tr class="bg-gray-100">
          <td class="text-center px-4 py-2 border-0">5</td>
          <td class="text-center px-4 py-2 border-0">5</td>
          <td class="text-center px-4 py-2 border-0">2 cm</td>
          <td class="text-center px-4 py-2 border-0">10</td>
          <td class="text-center px-4 py-2 border-0">11/26/2024</td>
          <td class="text-center px-4 py-2 border-0 space-x-1">
                                    <!-- add Icon  -->
              <button >
                <RestockMaterialModal/>
              </button>

                <button>
                 <EditThresholdModal/>
                </button>
                
          </td>
        </tr>
      </tbody>
    </table>
                 <!-- CREATE  -->
      <div class="flex justify-center mt-64 absolute">
                <button>
                  <AddMaterialModal/>
               </button>
        </div>
  </div>
</template>

<script>
import Profile from '@/components/WarehouseComponents/ManagerComponents/Profile.vue';
import Notification from '@/components/WarehouseComponents/ManagerComponents/Notification.vue';
import Fillter from '@/components/WarehouseComponents/ManagerComponents/Fillter.vue';
import Search from '@/components/WarehouseComponents/ManagerComponents/Search.vue';
import AddMaterialModal from '@/components/WarehouseComponents/ManagerComponents/AddMaterialModal.vue';
import RestockMaterialModal from '@/components/WarehouseComponents/ManagerComponents/RestockMaterialModal.vue';
import EditThresholdModal from '@/components/WarehouseComponents/ManagerComponents/EditThresholdModal.vue';

  export default {
    name: "InventoryTable",

    components:{
        Profile,
        Notification,
        Fillter,
        Search,
        AddMaterialModal,
        RestockMaterialModal,
        EditThresholdModal,
    },

  };
</script>