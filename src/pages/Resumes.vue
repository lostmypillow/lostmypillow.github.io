<script setup lang="ts">
import RedButton from "../components/RedButton.vue";
import { saveAs } from "file-saver";
import SecondButton from "../components/SecondButton.vue";
</script>

<template>
     <article class="prose text-center">
  <h2>Resumes</h2></article>
  <SecondButton @click="saveAs('/Resume_ZH.pdf')">
    <span> 中 </span>
    中文履歷
  </SecondButton>
  <SecondButton @click="saveAs('/Resume.pdf')">
    <span> en </span>
    English Resume
  </SecondButton>
</template>
