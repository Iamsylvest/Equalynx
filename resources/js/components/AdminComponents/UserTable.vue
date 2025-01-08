<template>
  
    <div class="p-8 ">
      
      <header>
           <h1 class="text-3xl">User Management</h1>
            <div class="flex justify-end space-x-4 relative top-[-38px]">
              <Notification/>
              <Profile/>
            </div>
      </header>


          <div class="flex flex-row justify-between">
          <!-- Element that should be aligned at the start -->
              <div class="flex w-full max-w-32 p-4  sm:whitespace-nowrap md:whitespace-nowrap">
                <h1 class="text-xl font-semibold ">All users <span>#</span></h1>
              </div>

              <!-- Elements that should be aligned at the end -->
              <div class="flex space-x-6 ">
                <Search />
                <Fillter />
                <AddUser/>
              </div>
    
      
          </div>


    <table class="table-auto w-full border-collapse mt-1 shadow-lg">
      <thead class="h-14">
        <tr class="bg-gray-100  ">   
          <th class="px-4 py-2 border-0 flex  ml-12 mt-3 font-light  ">Username</th>
          <th class="px-4 py-2 border-0 font-light">Role</th>
          <th class="px-4 py-2 border-0 font-light">Date Added</th>
          <th class="px-4 py-2 border-0 font-light">Status</th>
          <th class="px-4 py-2 border-0 font-light">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr class="bg-white  ">
          <td class="text-center px-4 py-2 border-0 flex items-center justify-start">
          <div class="flex flex-col">
            <span class="font-bold">JohnDoe</span>
            <span class="text-xs ml-12">Hotdog@gmail.com</span>
          </div>
        </td>
          <td class="text-center px-4 py-2 border-0">Admin</td>
          <td class="text-center px-4 py-2 border-0">2024-01-01</td>
          <td class="text-center px-4 py-2 border-0">Active</td>
          <td class="text-center px-4 py-2 border-0">
            <button class="text-gray-500 hover:underline">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
              </svg>
            </button>
          </td>
        </tr>
        <tr class="bg-gray-100 ">
          <td class="text-center px-4 py-2 border-0 flex items-center justify-start">
            <div class="flex flex-col">
              <span class="font-bold">JohnDoe</span>
              <span class="text-xs ml-12">Hotdog@gmail.com</span>
            </div>
          </td>
          <td class="text-center px-4 py-2 border-0">User</td>
          <td class="text-center px-4 py-2 border-0">2024-01-05</td>
          <td class="text-center px-4 py-2 border-0">Inactive</td>
          <td class="text-center px-4 py-2 border-0">
            <button class="text-gray-500 hover:underline">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
              </svg>
            </button>
          </td>
        </tr>
        <tr class="bg-white">
          <td class="text-center px-4 py-2 border-0 flex items-center justify-start">
            <div class="flex flex-col">
              <span class="font-bold">JohnDoe</span>
              <span class="text-xs ml-12">Hotdog@gmail.com</span>
            </div>
          </td>
          <td class="text-center px-4 py-2 border-0">Moderator</td>
          <td class="text-center px-4 py-2 border-0">2024-01-10</td>
          <td class="text-center px-4 py-2 border-0">Active</td>
          <td class="text-center px-4 py-2 border-0">
            <button class="text-gray-500 hover:underline">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
              </svg>
            </button>
          </td>
        </tr>
        <tr class="bg-gray-100">
          <td class="text-center px-4 py-2 border-0 flex items-center justify-start">
            <div class="flex flex-col">
              <span class="font-bold">JohnDoe</span>
              <span class="text-xs ml-12">Hotdog@gmail.com</span>
            </div>
          </td>
          <td class="text-center px-4 py-2 border-0">User</td>
          <td class="text-center px-4 py-2 border-0">2024-01-15</td>
          <td class="text-center px-4 py-2 border-0">Active</td>
          <td class="text-center px-4 py-2 border-0">
            <button class="text-gray-500 hover:underline">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
              </svg>
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  
</template>

<script>
import Profile from '@/components/AdminComponents/Profile.vue';
import Notification from '@/components/AdminComponents/Notification.vue';
import AddUser from '@/components/AdminComponents/AddUser.vue';
import Fillter from '@/components/AdminComponents/Fillter.vue';
import Search from '@/components/AdminComponents/Search.vue';

  export default {
    name: "UserTable",

    components:{
        Profile,
        Notification,
        AddUser,
        Fillter,
        Search,
    },

  };
</script>