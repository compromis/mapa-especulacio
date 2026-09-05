<script setup>
defineProps({
  cases: {
    type: Array,
    required: true
  }
})

const { caseInView, caseElements } = useHighlightedCase({ track: true })
</script>

<template>
  <section class="flex flex-col gap-base">
    <h3 class="sr-only">Casos</h3>
    <BlocksCase
      v-for="(item, i) in cases" :key="item.id"
      ref="caseElements"
      :item="item"
      :in-view="caseInView === `pin-${item.id}`"
      :id="`pin-${item.id}`"
      :number="i + 1"
    >
      {{ item.fields.name }}
    </BlocksCase>
  </section>
</template>
