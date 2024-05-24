<script setup>
import { RouterLink } from 'vue-router'

const projects = [
  {
    "name": "JSearch",
    "desc": "React Frontend for OMDb API",
    "logo": "/jsearch.webp",
    "demo": "https://lostmypillow.github.io/jsearch",
    "github": "https://github.com/lostmypillow/jsearch",
    "screenshots": [
      "/mobile_google.webp", "/mobile_movies.webp", "/desktop_google.webp", "/desktop_movies.webp",
    ]

  },
  {
    "name": "JCourses",
    "desc": "Web Scraper API written in Django",
    "logo": "/jcourses.webp",
    "demo": "http://lostmypillow.pythonanywhere.com/api/docs",
    "github": "https://github.com/lostmypillow/jcourses",
    "screenshots": [
      "/jcourses1.webp", "/jcourses2.webp", "/jcourses3.webp", "/jcourses4.webp", "/jcourses5.webp",
    ]

  },
  {
    "name": "LeosPen",
    "desc": "Sell Leonardo this pen",
    "logo": "/leospen.webp",
    "demo": "https://lostmypillow.github.io/leospen/",
    "github": "https://github.com/lostmypillow/leospen",
    "screenshots": [
      "/leospen1.webp", "/leospen2.webp", "/leospen3.webp", "/leospen4.webp",
    ]
  },
  {
    "name": "JZuvio",
    "desc": "A Better Zuvio",
    "logo": "/placeholder48.webp",
    "demo": "/sorry",
    "github": "https://github.com/lostmypillow/jzuvio",
    "screenshots": [
      "/placeholder.webp",
    ]
  },
]

</script>
<template>
  <main class="flex flex-col md:flex-wrap items-center justify-start md:px-96 pb-6 gap-6">


<Card v-for="project in projects" :name="project.name" :desc="project.desc" :logo="project.logo"
      :demo="project.demo" :github="project.github"  />

  
  </main>
</template>

<style>

</style>
