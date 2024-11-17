<script setup>
import { RouterView } from "vue-router";
</script>

<template>
  <main
    class="flex flex-col gap-4 items-center justify-start h-svh w-svw bg-darkBg pt-6"
  >
    <div class="avatar">
      <div class="w-16 rounded-full">
        <img src="/icon.webp" />
      </div>
    </div>
    <article class="prose text-center">
      <h1>LostMyPillow</h1>
    </article>

    <RouterView />
  </main>
</template>
