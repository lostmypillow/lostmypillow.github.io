<script setup lang="ts">
import AkarIconsVueFill from "~icons/akar-icons/vue-fill";
import AkarIconsPythonFill from "~icons/akar-icons/python-fill";
import AkarIconsNextjsFill from '~icons/akar-icons/nextjs-fill';
import AkarIconsReactFill from '~icons/akar-icons/react-fill';
import AkarIconsDjangoFill from '~icons/akar-icons/django-fill';
import AkarIconsJavascriptFill from '~icons/akar-icons/javascript-fill';
defineProps({
  title: {
    type: String,
    default: "Default Title",
  },
  subtitle: {
    type: String,
    default: "Default Subtitle",
  },
  content: {
    type: String,
    default: "Default Content",
  },
  showDemo: {
    type: Boolean,
  },
  demoLink: {
    type: String,
    default: "https://chodansbawige.com",
  },
  showGithub: {
    type: Boolean,
  },
  githubLink: {
    type: String,
    default: "https://github.com",
  },
  techStack: {
    type: Array,
    default: [],
  },
});
</script>
<template>
  <Card style="width: 25rem; overflow: hidden">
    <template #title>{{ title }}</template>
    <template #subtitle>{{ subtitle }}</template>
    <template #content>
      <div v-if="techStack.length > 0" class="flex flex-row gap-4 my-2">

        <Chip v-for="tech in techStack" :label="tech">
          <template #icon>
            <AkarIconsVueFill v-if="tech == 'Vue' || tech == 'Nuxt'" />
            <AkarIconsPythonFill v-if="tech == 'FastAPI' || tech=='Qt6' || tech=='PySide6'" />
            <AkarIconsNextjsFill v-if="tech == 'NextJS'" />
            <AkarIconsReactFill v-if="tech== 'React'" />
            <AkarIconsDjangoFill v-if="tech == 'Django'" />
            <AkarIconsJavascriptFill v-if="tech == 'JavaScript'" />
          </template>
        </Chip>
      </div>


      <div class="m-0" v-html="content"></div>
    </template>
    <template #footer>
      <div class="flex gap-4 mt-1">
        <Button
          v-if="showGithub"
          rounded
          as="a"
          :href="githubLink"
          target="_blank"
          rel="noopener"
          icon="pi pi-github"
          label="GitHub"
          severity="secondary"
          outlined
          class="w-full"
        />
        <Button
          v-if="showDemo"
          rounded
          icon="pi pi-external-link"
          label="Demo"
          class="w-full"
          as="a"
          :href="demoLink"
          target="_blank"
          rel="noopener"
        />
      </div>
    </template>
  </Card>
</template>
