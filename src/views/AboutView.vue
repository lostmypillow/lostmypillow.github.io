<script setup>
import { RouterLink } from 'vue-router'

const projects = [
  {
    "name": "JSearch",
    "logo": "icon.jpg",
    "demo": "https://lostmypillow.github.io/jsearch",
    "github": "https://github.com/lostmypillow/jsearch",

  }
]

</script>
<template>
  <main>
    <div class="flex flex-col w-full h-full items-center justify-start pt-4">
      <div v-for="project in projects"
        class="flex flex-row w-full items-center justify-between border-2 rounded-2xl px-4 py-2 border-black shadow-xl">

        <img :src="project.logo" width="48px" height="48px">

        <label class="text-2xl">
          {{ project.name }}
        </label>

        <a class="flex bg-black text-white rounded-full px-4 py-2 items-center justify-center h-11 w-fit gap-2"
          :href="project.demo" target="_blank" rel="noopener noreferrer">
          Demo
        </a>

        <a class="flex bg-black text-white rounded-full px-4 py-2 items-center justify-center h-11 w-fit gap-2"
          :href="project.github" target="_blank" rel="noopener noreferrer">
          Github
        </a>
      </div>
  
      <div>

      </div>
    </div>
  </main>
</template>

<style></style>
