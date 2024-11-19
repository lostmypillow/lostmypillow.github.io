<script setup>
import { RouterView } from "vue-router";
import { useRouter } from "vue-router";
import BackSVG from "./components/svg/BackSVG.vue";
import RedButton from "./components/RedButton.vue";
import { useRoute } from "vue-router";
const route = useRoute();
const router = useRouter();
</script>

<template>
  <main
    class="flex flex-col gap-4 items-center justify-start h-svh w-svw bg-darkBg pt-6"
  >
    <div class="avatar">
      <div class="w-12 md:w-16 rounded-full">
        <img src="/icon.webp" />
      </div>
    </div>
    <article v-if="route.path == '/'" class="prose text-center">
      <h1>LostMyPillow</h1>
    </article>

    <RedButton v-else @click="router.back()">
      <BackSVG />
      Back to Homepage
    </RedButton>
    <RouterView />
  </main>
</template>
