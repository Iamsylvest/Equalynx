<template>
    <div>
     <ActivityLogsTable />
    </div>
</template>

<script>
import ActivityLogsTable from '@/components/ManagerComponents/ActivityLogsTable.vue'; 


export default {
    name: 'ActivityLogs',

    components: {
        ActivityLogsTable,
        // List components used here
    }
};
</script>
