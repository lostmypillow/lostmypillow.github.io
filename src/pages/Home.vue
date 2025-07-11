<script setup lang="ts">
import { useRouter } from "vue-router";
import { ref } from "vue";
import RedButton from "../components/RedButton.vue";
import UserSVG from "../components/svg/UserSVG.vue";
import HelpSVG from "../components/svg/HelpSVG.vue";
import GitHubSVG from "../components/svg/GitHubSVG.vue";
import DownloadSVG from "../components/svg/DownloadSVG.vue";
import SecondButton from "../components/SecondButton.vue";
const router = useRouter();
const showDLBtns = ref(false);
import { saveAs } from "file-saver";
</script>

<template>
  <RedButton @click="router.push('/whoami')">
    <UserSVG /> Learn About Me
  </RedButton>
  <RedButton @click="router.push('/projects')">
    <HelpSVG />
    See My Projects
  </RedButton>
  <RedButton>
    <GitHubSVG />
    <a
      href="https://github.com/lostmypillow"
      target="_blank"
      rel="noreferrer noopener"
    >
      Visit My GitHub
    </a>
  </RedButton>
  <RedButton @click="router.push('/resumes')">
    <DownloadSVG />
    Get My Resume
  </RedButton>

  
</template>
