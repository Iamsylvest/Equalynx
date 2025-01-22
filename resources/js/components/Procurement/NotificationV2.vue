<template>
    <div class="p-8">
        <header class="flex justify-between items-center mb-10">
        <h1 class="text-3xl font-bold">Notification</h1>
      
        <div class="flex space-x-4">
            <Notification />
            <Profile />
        </div>
        </header>
  
        <div 
        class="flex flex-row items-center justify-between p-4 space-x-6 border-b-2 border-gray">
            <!-- First group of buttons (Today & Previous) -->
            <div class="flex space-x-4">
                <button 
                @click="showNotif = 'Today'"
                :class="{'text-blue-700 underline': showNotif === 'Today',
                         'hover:text-blue-700 hover:underline': showNotif === 'Today'
            }"
                class="px-4 py-2 whitespace-nowrap hover:text-blue-700 hover:underline">Today</button>
                <button 
                :class="{'text-blue-700 underline': showNotif === 'Previous',
                            'hover:text-blue-700 hover:underline': showNotif === 'Previous'
             }"  
                @click="showNotif = 'Previous'"
                class="px-4 py-2 whitespace-nowrap hover:text-blue-700 hover:underline">Previous</button>
            </div>

            <!-- Second group of buttons (Mark as read & Clear all) -->
            <div class="flex space-x-4">
                <button class="px-4 py-2 whitespace-nowrap hover:text-blue-700 hover:underline">Mark as read</button>
                <button class="px-4 py-2 whitespace-nowrap hover:text-red-700 hover:underline">Clear all</button>
            </div>  
        </div>


        <div v-if=" showNotif === 'Today'" class="flex flex-row items-center justify-between p-4 space-x-6 border-b-2 border-gray">
            <!-- First group of buttons (Today & Previous) -->
            <div class="flex space-x-4">
                <button class="px-4 py-2 whitespace-nowrap"> DR #123 has been approved by (Manager)</button>
   
            </div>

            <!-- Second group of buttons (Mark as read & Clear all) -->
            <div class="flex space-x-4">
                <button class="px-4 py-2 whitespace-nowrap text-gray-400">2 hours ago</button>
 
            </div>  
        </div>

        <div  v-if="showNotif === 'Today'" class="flex flex-row items-center justify-between p-4 space-x-6 border-b-2 border-gray">
            <!-- First group of buttons (Today & Previous) -->
            <div class="flex space-x-4">
                <p class="px-4 py-2 whitespace-nowrap"> DR #123 has been approved by (Manager)</p>
   
            </div>

            <!-- Second group of buttons (Mark as read & Clear all) -->
            <div class="flex space-x-4">
                <p class="px-4 py-2 whitespace-nowrap text-gray-400">2 houdsadsaddsars ago</p>
 
            </div>  
            

        </div>

        <div  v-if="showNotif === 'Previous'" class="flex flex-row items-center justify-between p-4 space-x-6 border-b-2 border-gray">
            <!-- First group of buttons (Today & Previous) -->
            <div class="flex space-x-4">
                <p class="px-4 py-2 whitespace-nowrap"> DR #123 has been approved by (Manager)</p>
   
            </div>

            <!-- Second group of buttons (Mark as read & Clear all) -->
            <div class="flex space-x-4">
                <p class="px-4 py-2 whitespace-nowrap text-gray-400">2 houdsadsaddsars ago</p>
 
            </div>  
            

        </div>

        <div  v-if="showNotif === 'Previous'" class="flex flex-row items-center justify-between p-4 space-x-6 border-b-2 border-gray">
            <!-- First group of buttons (Today & Previous) -->
            <div class="flex space-x-4">
                <p class="px-4 py-2 whitespace-nowrap"> DR #123 has been approved by (Manager)</p>
   
            </div>

            <!-- Second group of buttons (Mark as read & Clear all) -->
            <div class="flex space-x-4">
                <p class="px-4 py-2 whitespace-nowrap text-gray-400">2 houdsadsaddsars ago</p>
 
            </div>  
            

        </div>
        <div  v-if="showNotif === 'Previous'" class="flex flex-row items-center justify-between p-4 space-x-6 border-b-2 border-gray">
            <!-- First group of buttons (Today & Previous) -->
            <div class="flex space-x-4">
                <p class="px-4 py-2 whitespace-nowrap"> DR #123 has been approved by (Manager)</p>
   
            </div>

            <!-- Second group of buttons (Mark as read & Clear all) -->
            <div class="flex space-x-4">
                <p class="px-4 py-2 whitespace-nowrap text-gray-400">2 houdsadsaddsars ago</p>
 
            </div>  
            

        </div>


        
        
</div>
  </template>
  
  <script>
  import Profile from '@/components/Procurement/Profile.vue';
  import Notification from '@/components/Procurement/Notification.vue';

  
  
  
    export default {
      name: "Transaction",
       components:{
          Profile,
          Notification, 

        },
        data () {
            return {
               showNotif: 'Today',
            };
        },
    
    };
  </script>