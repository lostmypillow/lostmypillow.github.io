<script setup lang="ts">
import { saveAs } from "file-saver";
import { VuePDF, usePDF } from '@tato30/vue-pdf'

const {pdf: engPdf} = usePDF({url:'Resume.pdf',cMapUrl: '/cmaps/'})
const { pdf: chiPdf } = usePDF({url:'Resume - ZH.pdf',cMapUrl: '/cmaps/'})
</script>

<template>
 <div class="flex flex-col md:flex-row space-x-4 p-4">
  <div class="flex flex-col flex-1 items-center">
    <Button icon="pi pi-download" label="下載中文履歷" class="mt-4 md:m-auto"  @click="saveAs('/Resume - ZH.pdf', '林家民-履歷.pdf')"  />
    <VuePDF :pdf="chiPdf" class="my-pdf-viewer mt-4 w-full h-full" />
  </div>
  <div class="flex flex-col flex-1 items-center">
    <Button icon="pi pi-download" label="Download English Resume" class="mt-4 md:m-auto" @click="saveAs('/Resume.pdf', 'Johnny-Resume.pdf')" />
    <VuePDF :pdf="engPdf" class="my-pdf-viewer mt-4 w-full h-full" />
  </div>

</div>
   
</template>
<style scoped>
/* Target the VuePDF component's main element specifically */
.my-pdf-viewer {
  /* Hide on mobile */
  display: none !important;
}

/* Re-enable on desktop */
@media (min-width: 768px) { /* Adjust breakpoint as needed */
  .my-pdf-viewer {
    display: block !important; /* Or flex, inline-block, whatever it normally is */
  }
}
</style>