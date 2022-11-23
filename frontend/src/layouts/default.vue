<script setup lang="ts">

</script>

<template>
  <div class="bg-gray-900 h-screen">
    <GeneralHeader/>
    <div className="container max-w-4xl mx-auto">
      <slot/>
      <GeneralFooter/>
    </div>
  </div>
</template>
