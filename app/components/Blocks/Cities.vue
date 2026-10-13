<template>
  <section class="flex flex-col gap-4 max-w-250">
    <h3 class="sr-only">Municipis</h3>
    <input
      v-model="search"
      type="search"
      placeholder="Cerca un municipi..."
      aria-label="Cerca un municipi"
      class="w-full rounded-full border-2 px-4 py-2 bg-white"
    >
    <ul v-if="filteredCities.length" class="flex flex-wrap gap-2">
      <li v-for="city in filteredCities" :key="city.name">
        <LegosButton :href="`#pin-${city.firstId}`" variant="white" size="base">
          {{ city.name }}
          <span v-if="city.count > 1" class="font-mono bg-orange text-white w-[1.5em] h-[1.5em] text-[.9rem] flex items-center justify-center rounded-full">{{ city.count }}</span>
        </LegosButton>
      </li>
    </ul>
    <p v-else class="text-black/50">Cap municipi trobat.</p>
  </section>
</template>

<script lang="ts" setup>
const props = defineProps({
  cases: {
    type: Array as PropType<any[]>,
    required: true
  }
})

const search = ref('')

const normalize = (s: string) =>
  s.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase()

const cities = computed(() => {
  const groups = new Map<string, { name: string, firstId: string, count: number }>()
  for (const item of props.cases) {
    const name = item.fields?.name
    if (!name) continue
    const group = groups.get(name)
    if (group) group.count++
    else groups.set(name, { name, firstId: item.id, count: 1 })
  }
  return [...groups.values()].sort((a, b) => a.name.localeCompare(b.name, 'ca'))
})

const filteredCities = computed(() => {
  const q = normalize(search.value.trim())
  return q ? cities.value.filter(c => normalize(c.name).includes(q)) : cities.value
})
</script>

