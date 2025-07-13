<script setup lang="ts">
import ProjectCard from '../components/ProjectCard.vue';

const projectList = [
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,9
  ,
]
</script>
<template>
<div class="flex flex-row flex-wrap items-center justify-between gap-6">
<ProjectCard v-for="project in projectList" />
</div>
</template>
