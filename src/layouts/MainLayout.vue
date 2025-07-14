<script setup lang="ts">
import { useRouter } from "vue-router";
import { useRoute } from "vue-router";
const route = useRoute();
const router = useRouter();
</script>

<template>
  <main
    class="flex flex-col gap-4 items-start justify-start min-h-screen w-screen bg-red-200 py-6 px-6"
  >
    <Toolbar
      class="w-full backdrop-blur-2xl"
      style="
        border-radius: 3rem;
        padding: 1rem 1rem 1rem 1.5rem;
        background-color: rgba(255, 255, 255, 0.4); /* ⭐ This is the change! */
      "
    >
      <template #start>
        <div class="flex flex-row items-center justify-start gap-4">
          <Avatar @click="router.push('/')" image="/icon.webp" shape="circle" size="large" />

          <h1 @click="router.push('/')" class="font-extrabold text-4xl">林家民</h1>
        </div>
      </template>
      <template #end>
        <div
          class="flex flex-col mt-4 sm:mt-auto sm:flex-row items-center justify-center gap-2 w-full"
        >
          <Button
            :severity="route.fullPath == '/about' ? 'secondary' : 'primary'"
            class="w-full sm:w-auto"
            rounded
            icon="pi pi-user"
            label="About Me"
            @click="router.push('/about')"
          />
          <Button
            :severity="route.fullPath == '/projects' ? 'secondary' : 'primary'"
            class="w-full sm:w-auto"
            rounded
            icon="pi pi-book"
            label="My Projects"
            @click="router.push('/projects')"
          />
          <Button
            class="w-full sm:w-auto"
            rounded
            icon="pi pi-github"
            as="a"
            href="https://github.com/lostmypillow"
            target="_blank"
            rel="noopener"
            label="Visit My GitHub"
          />
          <Button
            :severity="route.fullPath == '/resumes' ? 'secondary' : 'primary'"
            class="w-full sm:w-auto"
            rounded
            icon="pi pi-download"
            label="Get My Resume"
            @click="router.push('/resumes')"
          />
        </div>
      </template>
    </Toolbar>
    <div class="flex items-start justify-start h-full w-full">
      <slot></slot>
    </div>
  </main>
</template>
<style scoped lang="css">
@media (max-width: theme("screens.sm")) {
  /* Use the modern :deep() syntax */
  :deep(.p-toolbar-end) {
    width: 100% !important;
  }
}
</style>
