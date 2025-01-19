<template>

    <div>
           <!-- DRSHOWMODAL -->
            <button @click="showDrmodal = true ">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                </svg>
            </button>

            <div v-if="showDrmodal" class="fixed inset-0 bg-gray-800 bg-opacity-50 z-50 overflow-y-auto">
            <!-- Modal Overlay (Click to Close) -->
            <div @click="showDrmodal = false" class="absolute inset-0"></div>

            <!-- Modal Content -->
            <div class="relative bg-white shadow-lg rounded-md max-w-5xl w-full mx-auto mt-10 mb-10">
                <!-- Header -->
                <div class="sticky top-0 bg-custom-blue p-4 rounded-t-md z-10">
                <div class="flex items-center justify-between">
                    <h1 class="text-lg text-white font-semibold m-auto">Delivery Receipt #12345</h1>
                    <button @click="showDrmodal = false" class="text-white hover:text-gray-300 focus:outline-none">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    </button>
                </div>
                </div>

                <!-- Form Content -->
                <form @submit.prevent="handleSubmit" class="p-6 space-y-6">
                <!-- Grid Container for 3 Columns -->
                <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <!-- Column 1: General Information -->
                    <div class="bg-gray-100 p-4 rounded-md shadow">
                    <h2 class="font-medium text-gray-700 mb-4">General Information</h2>
                    <div class="space-y-3">
                        <div>
                        <label for="createdBy" class="flex item-start justify-start text-sm text-gray-600">Created by:</label>
                        <input id="createdBy" type="text" class="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300">
                        </div>
                        <div>
                        <label for="date" class="flex item-start justify-start text-sm text-gray-600">Date:</label>
                        <input id="date" type="date" class="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300">
                        </div>
                        <div>
                        <label for="projectName" class="flex item-start justify-start text-sm text-gray-600">Project Name:</label>
                        <input id="projectName" type="text" class="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300">
                        </div>
                        <div>
                        <label for="status" class="flex item-start justify-start text-sm text-gray-600">Status:</label>
                        <select id="status" class="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300">
                            <option value="">Pending</option>
                            <option value="">Approved</option>
                        </select>
                        </div>
                        <div>
                        <label for="remarks" class="flex item-start justify-start text-sm text-gray-600">Remarks:</label>
                        <input id="remarks" type="text" class="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300">
                        </div>
                    </div>
                    </div>

                         <!-- Column 2: Material Details -->
                        <div class="bg-gray-100 p-4 rounded-md shadow">
                        <h2 class="font-medium text-gray-700 mb-4">Material Details</h2>
                        <!-- Flex Row -->
                        <div class="flex flex-wrap gap-3">
                            <!-- Material -->
                            <div class="flex-1">
                            <label for="material" class="flex item-start justify-start text-sm text-gray-600">Material:</label>
                            <select id="material" class="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300">
                                <option value="">PVC Pipe</option>
                                <option value="">Cable</option>
                            </select>
                            </div>
                            <!-- Measurement -->
                            <div class="flex-1">
                            <label for="measurement" class="flex item-start justify-start text-sm text-gray-600">Measurement:</label>
                            <select id="measurement" class="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300">
                                <option value="">cm</option>
                                <option value="">m</option>
                            </select>
                            </div>
                            <!-- Quantity -->
                            <div class="flex-1">
                            <label for="quantity" class="flex item-start justify-start text-sm text-gray-600">Quantity:</label>
                            <select id="quantity" class="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300">
                                <option value="">2</option>
                                <option value="">3</option>
                            </select>
                            </div>
                           
                        </div>
                        <div class="flex mt-5">
                            <p class="text-red-300 text-sm">Add material +</p>
                            </div>
                        </div>

                    <!-- Column 3: Location Details -->
                    <div class="bg-gray-100 p-4 rounded-md shadow">
                    <h2 class="font-medium text-gray-700 mb-4">Location Details</h2>
                    <div class="space-y-3">
                        <div>
                        <label for="location" class="flex item-start justify-start text-sm text-gray-600">Location:</label>
                        <input id="location" type="text" class="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300">
                        </div>
                        <div>
                        <label for="latitude" class="flex item-start justify-start text-sm text-gray-600">Latitude:</label>
                        <input id="latitude" type="text" class="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300">
                        </div>
                        <div>
                        <label for="longitude" class="flex item-start justify-start text-sm text-gray-600">Longitude:</label>
                        <input id="longitude" type="text" class="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300">
                        </div>
                    </div>
                    </div>
                </div>

                <!-- Submit Button -->
                <div class="flex justify-center mt-8">
                    <button type="submit" class="px-6 py-3 bg-green-500 text-white font-semibold rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-300 transition">
                    Save
                    </button>
                </div>
                </form>
            </div>
            </div>

    </div>


</template>
<script>
export default{
name: 'ViewRRmodal',

    data (){
        return {
            showDrmodal: false,
        }
    },
}
</script>