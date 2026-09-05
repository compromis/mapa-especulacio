
<script setup>
defineProps({
  title: { type: String, required: true }
})
</script>

<template>
  <div class="p-card">
    <h4 class="font-mono text-sm uppercase text-black/50">
      {{ title }}
    </h4>
    <div class="text-base">
      <slot />
    </div>
  </div>
</template>
