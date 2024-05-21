<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>

  <main class="items-center justify-center">
    <h1 class="text-4xl text-center font-bold">
      I'm Johnny Lin, <br /> a.k.a LostMyPillow
    </h1>
    <p class="text-center text-xl">
      I make apps
      <br />with sensible UI/UX and no frills.

    </p>
    <NuxtLink class="flex bg-black text-white rounded-full px-4 py-2 items-center justify-center h-11 w-fit gap-2"
      to="https://github.com/lostmypillow" target="_blank" rel="noopener noreferrer">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
        class="feather feather-github">
        <path
          d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22">
        </path>
      </svg>

      See my GitHub
    </NuxtLink>

    <NuxtLink to="/portfolio"
      class="flex bg-black text-white rounded-full px-4 py-2 items-center justify-center h-11 w-fit gap-2"><svg
        xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
        stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-briefcase">
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
      </svg>See My Apps</NuxtLink>

  </main>
</template>
