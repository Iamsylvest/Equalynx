<template>

    <div>
           <!-- DRSHOWMODAL -->
            <button @click="showRRmodal = true " class="text-green-500" >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
                  <path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 9a.75.75 0 0 0-1.5 0v2.25H9a.75.75 0 0 0 0 1.5h2.25V15a.75.75 0 0 0 1.5 0v-2.25H15a.75.75 0 0 0 0-1.5h-2.25V9Z" clip-rule="evenodd" />
                </svg>
            </button>

            <div v-if="showRRmodal" class="fixed inset-0 bg-gray-800 bg-opacity-50 z-50 overflow-y-auto">
            <!-- Modal Overlay (Click to Close) -->
            <div @click="showRRmodal = false" class="absolute inset-0"></div>

            <!-- Modal Content -->
            <div class="relative bg-white shadow-lg rounded-md max-w-2xl w-full mx-auto mt-32 mb-10">
                <!-- Header -->
                <div class="sticky top-0 bg-custom-blue p-4 rounded-t-md z-10">
                <div class="flex items-center justify-between">
                    <h1 class="flex text-lg text-white font-semibold space-x-2">
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M6.429 9.75 2.25 12l4.179 2.25m0-4.5 5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0 4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0-5.571 3-5.571-3" />
                            </svg>
                        </div>
                       <div>
                        RESTOCK MATERIAL
                       </div>
                        
                    </h1>

                    <button @click="showRRmodal = false" class="text-white hover:text-gray-300 focus:outline-none">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    </button>
                </div>
                </div>

                <!-- Form Content -->
                <form @submit.prevent="handleSubmit" class="p-12 ">
                <div class="grid grid-cols-1 gap-4">
                    <!-- ADD MATERIAL -->
                    <div class= "">
                    <div class=" space-y-8">
                        <div class="flex space-x-2 ml-10">
                            <label for="description" class="flex item-start justify-start text-[15px] text-gray-600">Description:</label>
                            <input id="description" type="text" class="w-full border min-w-[200px] border-gray-300  px-2 focus:outline-none focus:ring-2 focus:ring-blue-300">
                        </div>
                        <div class="flex ml-[-24px] space-x-2">
                                <label for="quantity" class="flex item-start justify-start text-[15px] text-gray-600 whitespace-nowrap  ">Material Quantity
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                                </svg>
                                    :
                            </label>
                    
                        
                            <input id="quantity" type="text" class="w-full border min-w-[200px] border-gray-300 px-2 focus:outline-none focus:ring-2 focus:ring-blue-300"
                            >
                        </div>
                        <div class="flex space-x-3 ml-12">
                            <label for="threshold" class=" flex item-start justify-start text-[15px] text-gray-600 relative left-1">Threshold:</label>
                            <input id="threshold" type="text" class="w-full border min-w-[40px] border-gray-300 px-2  focus:outline-none focus:ring-2 focus:ring-blue-300">
                            <label for="measurement" class="flex item-start justify-start text-[15px] text-gray-600 relative left-1">Measurement:</label>
                            <input id="measurement" type="text" class="w-full border min-w-[40px] border-gray-300 px-2 focus:outline-none focus:ring-2 focus:ring-blue-300">
                        </div>
                      
                     
                    </div>
                    </div>

                     
                </div>

                <!-- Submit Button -->
                <div class="flex justify-start mt-8 ml-32">
                    <button type="submit" class="px-6 py-2 shadow-md bg-green-500 text-[12px] rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-300 transition">
                        Add Material
                    </button>
                </div>
                </form>
            </div>
            </div>

    </div>


</template>
<script>
export default{
name: 'RestockMaterialModal',

    data (){
        return {
            showRRmodal: false,
        }
    },
}
</script>