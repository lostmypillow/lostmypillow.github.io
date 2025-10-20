<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { RouterView } from 'vue-router'
import MainLayout from './layouts/MainLayout.vue'

const fontsLoaded = ref(false)

onMounted(async () => {
  await document.fonts.ready
  await new Promise(r => setTimeout(r, 50))
  fontsLoaded.value = true
})
</script>

<template>
  <div class="relative min-h-screen overflow-hidden">
    <MainLayout>
      <!-- Route transition -->
      <RouterView v-slot="{ Component }">
        <Transition
            mode="out-in"
            enter-active-class="transition-all duration-700 ease-out"
            leave-active-class="transition-all duration-700 ease-out"
            enter-from-class="opacity-0 blur-md"
            enter-to-class="opacity-100 blur-0"
            leave-from-class="opacity-100 blur-md"
            leave-to-class="opacity-0 blur-md"
        >
          <component :is="Component" />
        </Transition>
      </RouterView>
    </MainLayout>

    <!-- Overlay blur while waiting for fonts -->
    <Transition
        enter-active-class="transition-all duration-700 ease-out"
        leave-active-class="transition-all duration-700 ease-out"
        enter-from-class="opacity-100 backdrop-blur-md"
        enter-to-class="opacity-0 backdrop-blur-0"
        leave-from-class="opacity-100 backdrop-blur-md"
        leave-to-class="opacity-0 backdrop-blur-0"
    >
      <div
          v-if="!fontsLoaded"
          class="absolute inset-0 flex items-center justify-center bg-white/30 backdrop-blur-md"
      >
        <Avatar
            image="/icon.webp"
            shape="circle"
            size="large"
            class="animate-spin-pulse"
        />
      </div>
    </Transition>
  </div>
</template>

<style scoped>
@keyframes spin-pulse {
  0% {
    transform: rotate(0deg) scale(1);
  }
  50% {
    transform: rotate(180deg) scale(1.08);
  }
  100% {
    transform: rotate(360deg) scale(1);
  }
}

.animate-spin-pulse {
  animation: spin-pulse 3.5s ease-in-out infinite;
}
</style>
