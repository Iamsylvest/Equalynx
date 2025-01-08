<template>
    <div>
       <UserTable></UserTable>
    </div>
</template>

<script>
import UserTable from '@/components/AdminComponents/UserTable.vue';


export default {
    name: 'UserManagement',

    components: {
        UserTable,
        // List components used here
    }
};
</script>

