<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  
    <main>
        <h1 class="text-4xl text-center font-bold">
          I'm Johnny Lin, <br /> a.k.a LostMyPillow
        </h1>
        <p class="text-center">
          I make apps
          <br />with sensible UI/UX and no frills.
    
        </p>
        <a
          class="flex bg-black text-white rounded-full px-4 py-2 items-center justify-center h-11 w-fit gap-2"
          href="https://github.com/lostmypillow"
          target="_blank"
          rel="noopener noreferrer"
        >
          <!-- <img src="/github-white.svg" width={28} height={28} alt="GitHub logo" /> -->
          See my GitHub
        </a>

        <RouterLink to="/about" class="flex bg-black text-white rounded-full px-4 py-2 items-center justify-center h-11 w-fit gap-2">See My Apps</RouterLink>
            
  </main>
</template>
