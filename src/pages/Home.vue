<script setup lang="ts">
import { useRouter } from "vue-router";
import { ref } from "vue";
import UserSVG from "../components/svg/UserSVG.vue";
import HelpSVG from "../components/svg/HelpSVG.vue";
import GitHubSVG from "../components/svg/GitHubSVG.vue";
import DownloadSVG from "../components/svg/DownloadSVG.vue";
const router = useRouter();
const showDLBtns = ref(false);
import { saveAs } from "file-saver";
</script>

<template>


</template>
