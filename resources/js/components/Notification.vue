<template>

<div>
        <button
            @click="modalNotification= true" class="flex items-center justify-center w-12 h-12  cursor-pointer hover:bg-gray-100 rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
              <path fill-rule="evenodd" d="M5.25 9a6.75 6.75 0 0 1 13.5 0v.75c0 2.123.8 4.057 2.118 5.52a.75.75 0 0 1-.297 1.206c-1.544.57-3.16.99-4.831 1.243a3.75 3.75 0 1 1-7.48 0 24.585 24.585 0 0 1-4.831-1.244.75.75 0 0 1-.298-1.205A8.217 8.217 0 0 0 5.25 9.75V9Zm4.502 8.9a2.25 2.25 0 1 0 4.496 0 25.057 25.057 0 0 1-4.496 0Z" clip-rule="evenodd" />
            </svg>
        </button>

      
                <!-- Modal -->
                    <div v-if="modalNotification" class="absolute inset-0 flex items-center justify-end bg-opacity-50 ">
                        
                        <div @click="modalNotification = false" class="fixed inset-0 z-10 opacity-50" ></div>
                        <div class="overflow-y-auto bg-white border-1 shadow-lg rounded-md px-4 py-10 z-20 mx-4 w-full max-w-sm h-[620px] relative left-[-60px] top-[350px] min-w-[200px] max-h-[700px] min-h-[300px]">
                            
                                         <!-- Notif Content --> 
                                         <div class="relative top-[-30px] space-y-6">


                                          <div >
                                            <h1 class="font-bold text-2xl">Notification</h1>
                                          </div>
                                                <!-- Individual Item -->
                                                <div class="flex items-center space-x-4">
                                                  <img 
                                                    src="@/assets/Sylvest.jpg" 
                                                    alt="Description" 
                                                    class="object-cover w-20 h-20 rounded-full border-4 border-gray-300 shadow-lg"
                                                  >
                                                  <div class="flex-1">
                                                    <p>
                                                      <span class="font-bold">Sylvest Madelo</span> <span>created a new user.</span>
                                                    </p>
                                                    <p class="text-blue-400 text-sm mt-1">10h</p>
                                                  </div>
                                                </div>

                                                <!-- Repeat as needed -->
                                                <div class="flex items-center space-x-4">
                                                  <img 
                                                    src="@/assets/sakura.jpg" 
                                                    alt="Description" 
                                                    class="object-cover w-20 h-20 rounded-full border-4 border-gray-300 shadow-lg"
                                                  >
                                                  <div class="flex-1">
                                                    <p>
                                                      <span class="font-bold">SAKURA</span> <span>created a new user.</span>
                                                    </p>
                                                    <p class="text-blue-400 text-sm mt-1">2h</p>
                                                  </div>
                                                </div>

                                                <div class="flex items-center space-x-4">
                                                  <img 
                                                    src="@/assets/initial.jpg" 
                                                    alt="Description" 
                                                    class=" object-cover w-20 h-20 rounded-full border-4 border-gray-300 shadow-lg"
                                                  >
                                                  <div class="flex-1">
                                                    <p>
                                                      <span class="font-bold">Takumi Fujiwara</span> <span>created a new user.</span>
                                                    </p>
                                                    <p class="text-blue-400 text-sm mt-1">5h</p>
                                                  </div>
                                                </div>

                                                <div class="flex items-center space-x-4">
                                                  <img 
                                                    src="@/assets/frieren.jpg" 
                                                    alt="Description" 
                                                    class=" object-cover w-20 h-20 rounded-full border-4 border-gray-300 shadow-lg"
                                                  >
                                                  <div class="flex-1">
                                                    <p>
                                                      <span class="font-bold">Frieren</span> <span>created a new user.</span>
                                                    </p>
                                                    <p class="text-blue-400 text-sm mt-1">10h</p>
                                                  </div>
                                                </div>

                                                <div class="flex items-center space-x-4">
                                                  <img 
                                                    src="@/assets/himmel.jpg" 
                                                    alt="Description" 
                                                    class=" object-cover w-20 h-20 rounded-full border-4 border-gray-300 shadow-lg"
                                                  >
                                                  <div class="flex-1">
                                                    <p>
                                                      <span class="font-bold">Frieren</span> <span>created a new user.</span>
                                                    </p>
                                                    <p class="text-blue-400 text-sm mt-1">10h</p>
                                                  </div>
                                                </div>

                                                <div class="flex items-center space-x-4">
                                                  <img 
                                                    src="@/assets/frieren.jpg" 
                                                    alt="Description" 
                                                    class=" object-cover w-20 h-20 rounded-full border-4 border-gray-300 shadow-lg"
                                                  >
                                                  <div class="flex-1">
                                                    <p>
                                                      <span class="font-bold">Frieren</span> <span>created a new user.</span>
                                                    </p>
                                                    <p class="text-blue-400 text-sm mt-1">10h</p>
                                                  </div>
                                                </div>
                                                
                                              
                                                
                                                
                                                

                                                <!-- Add more as needed -->
                                              </div>
                                                    
                                                

                                </div>
                      </div>
        </div>


</template>
<script>

 export default {
  name:"Notification",
                data() {
                    return{
                        modalNotification: false,
                    };
                },
                methods: {
                    toggleProfile (){
                        this.modalNotification = !this.modalNotification;
                    },
                },

  };

</script>