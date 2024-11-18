<script setup>
import { useRouter } from "vue-router";
import RedButton from "../components/RedButton.vue";
import BackSVG from "../components/svg/BackSVG.vue";
const router = useRouter();
</script>
<template>
  <RedButton @click="router.back()">
    <BackSVG />
    Back to Homepage
  </RedButton>
  <article class="prose text-center">
    <h2>Projects</h2>
    Oops I'm not done with this section yet!
  </article>
</template>
