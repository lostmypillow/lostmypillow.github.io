<script setup>
import { RouterLink } from 'vue-router'

const projects = [
  {
    "name": "JSearch",
    "desc": "OMDb API Frontend",
    "logo": "jsearch.webp",
    "demo": "https://lostmypillow.github.io/jsearch",
    "github": "https://github.com/lostmypillow/jsearch",
    "screenshots": [
      "mobile_google.webp", "mobile_movies.webp", "desktop_google.webp", "desktop_movies.webp",
    ]

  },
  {
    "name": "JCourses",
    "desc": "NTUT Scraper Backend",
    "logo": "jcourses.webp",
    "demo": "http://lostmypillow.pythonanywhere.com/api/docs",
    "github": "https://github.com/lostmypillow/jcourses",
    "screenshots": [
      "jcourses1.webp", "jcourses2.webp", "jcourses3.webp", "jcourses4.webp", "jcourses5.webp",
    ]

  },
  {
    "name": "JZuvio",
    "desc": "A Better Zuvio",
    "logo": "placeholder48.webp",
    "demo": "/sorry",
    "github": "https://github.com/lostmypillow/jzuvio",
    "screenshots": [
      "placeholder.webp",
  ]
  },
]

</script>
<template>
  <main class="flex md:flex-wrap md:flex-row items-center md:items-start justify-start pt-4 gap-8">


    <Card v-for="project in projects" :name="project.name" :desc="project.desc" :logo="project.logo"
      :demo="project.demo" :github="project.github" :screenshots="project.screenshots" />
    <div>

    </div>

  </main>
</template>

<style></style>
