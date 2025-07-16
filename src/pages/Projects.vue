<script setup lang="ts">
import ProjectCard from "../components/ProjectCard.vue";
import projects from "../projects.json"

</script>
<template>
  <div
    class="flex flex-row flex-wrap items-start w-full justify-start gap-8 pt-6"
  >
    <ProjectCard
      v-for="(project, index) in projects"
      :key="index"
      :title="project.title"
      :subtitle="project.subtitle"
      :content="project.content"
      :show-demo="project.showDemo"
      :demo-link="project.demoLink"
      :show-github="project.showGithub"
      :github-link="project.githubLink"
      :tech-stack="project.techStack"
    />
  </div>
</template>
