<script setup lang="ts">
import { useRouter } from "vue-router";
import RedButton from "../components/RedButton.vue";
import BackSVG from "../components/svg/BackSVG.vue";
const router = useRouter();
</script>
<template>
  <article class="text-start">
    <h2 class="font-bold text-4xl">About Me</h2>
    <ul>
      <li>Coffee</li>
      <li>Tea</li>
      <li>Milk</li>
    </ul>
  </article>
</template>