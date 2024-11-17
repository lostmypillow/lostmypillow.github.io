<script setup>
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
  <RedButton @click="router.push('/who-am-i')">
    <UserSVG /> Who am I?
  </RedButton>
  <RedButton @click="router.push('/what-im-working-on')">
    <HelpSVG />
    What am I working on?
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
  <RedButton @click="showDLBtns = !showDLBtns">
    <DownloadSVG />
    Download My Resume
  </RedButton>

  <SecondButton v-show="showDLBtns" @click="saveAs('/Resume_ZH.pdf')">
    <span> 中 </span>
    中文履歷
  </SecondButton>
  <SecondButton v-show="showDLBtns" @click="saveAs('/Resume.pdf')">
    <span> en </span>
    English Resume
  </SecondButton>
</template>
