<script setup lang="ts">
import { useRouter } from "vue-router";
import { useRoute } from "vue-router";
const route = useRoute();
const router = useRouter();
</script>

<template>
  <main
    class="flex flex-col gap-4 items-start justify-start min-h-screen w-screen bg-red-200 py-6 px-6"
  >
    <Toolbar
      class="w-full backdrop-blur-2xl"
      style="
        border-radius: 3rem;
        padding: 1rem 1rem 1rem 1.5rem;
        background-color: rgba(255, 255, 255, 0.4); /* ⭐ This is the change! */
      "
    >
      <template #start>
        <div class="flex flex-row items-center justify-center gap-4">
          <Avatar
            v-tooltip.bottom="route.fullPath != '/'? '回主畫面': ''"
            image="/icon.webp"
            shape="circle"
            size="large"
             :class="route.fullPath != '/'? 'cursor-pointer': ''"
            @click="router.push('/')"
           
          /> <span v-if="route.fullPath != '/'" class="font-extrabold text-center text-3xl leading-none" >
  {{ route.meta.title }}
</span></div>
        
      </template>
      <template #end>
        <div
          class="flex flex-col mt-4 sm:mt-auto sm:flex-row items-center justify-center gap-2 w-full"
        >
          <Button
            :severity="route.fullPath == '/projects' ? 'secondary' : 'primary'"
            class="w-full sm:w-auto"
            rounded
            icon="pi pi-book"
            label="我的專案"
            @click="router.push('/projects')"
          />
           <Button
            :severity="route.fullPath == '/resumes' ? 'secondary' : 'primary'"
            class="w-full sm:w-auto"
            rounded
            icon="pi pi-download"
            label="我的履歷"
            @click="router.push('/resumes')"
          />
          <Button
            class="w-full sm:w-auto"
            rounded
            icon="pi pi-github"
            as="a"
            href="https://github.com/lostmypillow"
            target="_blank"
            rel="noopener"
            label="我的 GitHub"
          />
         
        </div>
      </template>
    </Toolbar>
    <div class="flex  flex-1 w-full h-full items-center justify-center">
      <slot></slot>
    </div>
  </main>
</template>
<style scoped lang="css">
@media (max-width: theme("screens.sm")) {
  /* Use the modern :deep() syntax */
  :deep(.p-toolbar-end) {
    width: 100% !important;
  }
}
</style>
