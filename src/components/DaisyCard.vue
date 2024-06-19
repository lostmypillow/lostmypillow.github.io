<script setup>
defineProps(['title'])

import GitHubIcon from './GitHubIcon.vue';
</script>


<template>
<div class="flex items-start card w-full md:w-fit md:basis1/2 bg-base-100  shadow-xl">
    
  <div class="card-body">
    <h2 class="card-title text-2xl">{{title}}</h2>
    <p>
        <slot></slot>
    </p>
    <div v-if="title == 'My Videos'" class="card-actions justify-end">
      <button class="btn btn-primary">View Full Playlist</button>
    </div>

  
  </div>
</div>


</template>