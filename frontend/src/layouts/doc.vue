<script setup lang="ts">
import TheHeader from '../components/general/TheHeader.vue';
import TheFooter from '../components/general/TheFooter.vue';
</script>

<template>
  <div class="bg-gray-100 h-screen">
    <TheHeader/>
    <div class="container mx-auto max-w-4xl px-4 py-6">
      <slot />
      <TheFooter/>
    </div>
  </div>
</template>
