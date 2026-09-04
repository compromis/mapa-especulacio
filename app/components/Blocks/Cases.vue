<script setup>
defineProps({
  cases: {
    type: Array,
    required: true
  }
})
</script>

<template>
  <section class="flex flex-col gap-4">
    <article
      v-for="item in cases" :key="item.id"
      class="border-2 rounded-lg h-[50vh]"
      :id="`pin-${item.id}`"
    >
      {{ item.fields.name }}
    </article>
  </section>
</template>
