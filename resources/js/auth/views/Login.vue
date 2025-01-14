<template>
    <div class="h-screen bg-cover bg-center relative" :style="{ backgroundImage: `url(${backgroundImage})` }">
      <!-- Overlay content -->
      <div class="absolute inset-0 bg-opacity-50 flex justify-center items-center">
        <div class="p-9 bg-white w-full max-w-md h-auto rounded-lg shadow-lg sm:mx-4 md:mx-8 lg:mx-16 xl:mx-32">
          <form action="" @submit.prevent="handleLogin">
            <!-- Logo -->
            <div class="flex justify-center mb-6">
              <img
                src="@/assets/EqualynxLogo.png"
                alt="Equalynx Logo"
                class="w-32 h-32 object-contain"
              />
            </div>
  
         
            <!-- Username -->
            <div class="flex flex-col mb-4">
              <label for="username" class="text-sm font-medium text-gray-700">Username:</label>
              <input
                type="text"
                id="username"
                v-model="username"
                class="mt-1 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-custom-blue"
                required
              />
            </div>
  
            <!-- Password -->
            <div class="flex flex-col mb-6">
              <label for="password" class="text-sm font-medium text-gray-700">Password:</label>
              <input
                type="password"
                id="password"
                v-model="password"
                class="mt-1 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-custom-blue"
                required
              />
            </div>
  
            <!-- Remember Me and Forgot Password -->
            <div class="flex justify-between items-center mb-6">
              <div class="flex items-center">
                <input type="checkbox" id="remember" class="mr-2" />
                <label for="remember" class="text-sm text-gray-700">Remember Me</label>
              </div>
              <p class="text-sm text-blue-500 hover:underline cursor-pointer">Forgot Password?</p>
            </div>
  
            <!-- Submit Button -->
            <div class="flex justify-end ml-1">
              <router-link
                to="/UserManagment"
                class="w-full px-4 py-3 bg-custom-blue text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-custom-blue transition duration-200 text-center"
              >
                Login
              </router-link>
            </div>
          </form>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import backgroundImage from '@/assets/dataCenter.jpg'; // Import the image
  
  export default {
    name: 'Login',
    data() {
      return {
        backgroundImage, // Add the imported image to your data
      };
    },
  };
  </script>