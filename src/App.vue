<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>




      <nav class="flex flex-row items-center justify-between px-4 h-14">
        <RouterLink to="/" class="text-center font-bold text-2xl">LMP</RouterLink>
        <!-- <RouterLink to="/about">About</RouterLink> -->
      </nav>

  </header>

  <RouterView class="flex flex-col h-full grow items-center justify-center gap-4 px-4" />
</template>

