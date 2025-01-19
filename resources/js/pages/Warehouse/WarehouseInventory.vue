<template>
    <div>
      <InventoryTable>
        
      </InventoryTable>
    </div>
</template>

<script>
import InventoryTable from '@/components/WarehouseComponents/ManagerComponents/InventoryTable.vue';


export default {
    name: 'WarehouseInventory',

    components: {
        InventoryTable,
        // List components used here
    }
};
</script>
