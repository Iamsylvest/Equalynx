<template>
    <div>
      <button @click="generatePDF">Download PDF</button>
      <!-- This is the content we want in the PDF -->
      <div ref="pdfContent" class="pdf-content text-[25px]">
        <div class="m-10">
          <div class="flex items-center justify-between w-full">
            <img src="@/assets/img/EqualynxLogo.png" alt="Equalynx Logo" class="w-[600px] h-[400px]" />
            <h1 class="text-[100px] font-bold">Return Materials</h1>
          </div>

          <div class="text-[40px] flex items-center justify-between w-full">
            <div>
              <p> Date: 2/20/2025 </p>
              <p> Project Name: McDonald's Marcos H Way</p>
            </div>

            <div>
              <p> DR#: 2134 </p>
              <p> Location: 1 Gunting St, Marikina, 1801 Metro Manila </p>
            </div>
          </div>

        </div>




        <!-- Table -->
        <div class="flex items-center justify-center my-[150px]">
          <div class="w-full">
            <table class="w-full border border-gray-200">
            <thead class="bg-[#365486] text-white"> 
              <tr>
                <th class="p-3 text-left">Material ID </th>
                <th class="p-3 text-left">Material Name </th>
                <th class="p-3 text-left">Status</th>
                <th class="p-3 text-left">Quantity</th>
                <th class="p-3 text-left">Measurement</th>
                
              </tr>
            </thead>

            <tbody>
              <tr class='border-b border-gray-200'>
                <td class="p-3"> 24 </td>
                <td class="p-3">PVC Pipe</td>
                <td class="p-3">50</td>
                <td class="p-3">2 cm</td>
                <td class="p-3">10 </td>  
              </tr>

              <tr class='border-b border-gray-200'>
                <td class="p-3"> </td>
                <td class="p-3"></td>
                <td class="p-3"></td>
                <td class="p-3"></td>
                <td class="p-3"></td>  
              </tr>

              <tr class='border-b border-gray-200'>
                <td class="p-3"> </td>
                <td class="p-3"></td>
                <td class="p-3"></td>
                <td class="p-3"></td>
                <td class="p-3"></td>  
              </tr>

              <tr class='border-b border-gray-200'>
                <td class="p-3"> </td>
                <td class="p-3"></td>
                <td class="p-3"></td>
                <td class="p-3"></td>
                <td class="p-3"></td>  
              </tr>

              <tr class='border-b border-gray-200'>
                <td class="p-3"> </td>
                <td class="p-3"></td>
                <td class="p-3"></td>
                <td class="p-3"></td>
                <td class="p-3"></td>  
              </tr>

              <tr class='border-b border-gray-200'>
                <td class="p-3"> </td>
                <td class="p-3"></td>
                <td class="p-3"></td>
                <td class="p-3"></td>
                <td class="p-3"></td>  
              </tr>
            </tbody>
            </table>
          </div>
        </div>

        <div class="m-10">
          <div class="text-[40px] flex items-center justify-between w-full">
            <div>
                <p> Returned By: _____________________ </p>
              <p class="text-[25px] text-right pr-5"> Signature over Printed name </p>
              
            </div>

            <div>
              <p> Approved By: _____________________ </p>
              <p class="text-[25px] text-right pr-5"> Signature over Printed name </p>
            </div>
          </div>
        </div>

        

       


      </div>
    </div>
  </template>
  
  <script>
  import { jsPDF } from "jspdf";
  import html2canvas from "html2canvas";
  import logo from '@/assets/img/EqualynxLogo.png';
  
  export default {
    
    methods: {
      generatePDF() {
        const content = this.$refs.pdfContent;
  
        html2canvas(content, { scale: 2 }).then((canvas) => {
          const imgData = canvas.toDataURL("image/png");
          const pdf = new jsPDF("p", "mm", "a4");
  
          const imgWidth = 190;
          const imgHeight = (canvas.height * imgWidth) / canvas.width;
  
          pdf.addImage(imgData, "PNG", 10, 10, imgWidth, imgHeight);
          pdf.save("return_materials.pdf");
        });
      },
    },
  };
  </script>
  
