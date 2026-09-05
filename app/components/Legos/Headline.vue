<script setup>
defineProps({
  headline: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <a
    :href="headline.link"
    target="_blank"
    rel="noopener noreferrer"
    class="relative flex flex-col gap-2 bg-beige/75 border border-b-0 rounded-t-xl p-4 pb-0 mb-6"
  >
    <div v-if="headline.source === 'other'" :style="{ color: headline.color }">
      {{ headline.other_source }}
    </div>
    <div v-else>
      <img
        :src="`/images/logos/${headline.source}.svg`"
        :alt="headline.source"
        class="h-[.85em]"
      />
    </div>
    <div class="font-headline text-lg leading-tight">
      {{ headline.headline }}
    </div>
    <svg class="absolute -left-px right-[-1.5px] bottom-0 translate-y-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 616.61 16.89">
      <path class="fill-beige/75 stroke-1 stroke-black" d="M616.11,0v16l-13.38-8.15-13.38,8.15-13.38-8.15-13.38,8.15-13.38-8.15-13.38,8.15-13.38-8.15-13.38,8.15-13.38-8.15-13.38,8.15-13.38-8.15-13.38,8.15-13.38-8.15-13.38,8.15-13.38-8.15-13.38,8.15-13.38-8.15-13.38,8.15-13.38-8.15-13.38,8.15-13.38-8.15-13.38,8.15-13.38-8.15-13.38,8.15-13.38-8.15-13.38,8.15-13.38-8.15-13.38,8.15-13.38-8.15-13.38,8.15-13.38-8.15-13.38,8.15-13.38-8.15-13.38,8.15-13.38-8.15-13.38,8.15-13.38-8.15-13.38,8.15-13.38-8.15-13.38,8.15-13.38-8.15-13.38,8.15-13.38-8.15-13.38,8.15L13.88,7.85.5,16V0"/>
    </svg>
  </a>
</template>
