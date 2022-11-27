<script setup lang="ts">
import TheHeader from '../components/general/TheHeader.vue';
import TheFooter from '../components/general/TheFooter.vue';
</script>

<template>
  <div class="bg-gray-100">
    <TheHeader/>
      <div class="container mx-auto my-5 px-4 py-6 bg-gray-50 min-h-[calc(100vh-420px)] rounded flex">
      <GeneralTheSidebar/>
      <slot />
    </div>
    <TheFooter/>
  </div>
</template>
