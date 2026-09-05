<script setup>
defineProps({
  item: {
    type: Object,
    required: true
  },
  inView: {
    type: Boolean,
    required: true
  },
  number: {
    type: Number,
    required: true
  }
})
</script>

<template>
  <article
    class="border-2 rounded-2xl max-w-250 transition-all duration-300 ease-in-out"
    :class="{
      'bg-white in-view': inView
    }"
  >
    <div class="text-base flex border-b-2">
      <span class="p-card border-r-2 font-bold">#{{ number }}</span>
      <h3 class="p-card font-bold">{{ item.fields.name }}</h3>
      <span class="p-card ms-auto uppercase font-mono text-black/50">{{ item.fields.comarca }}</span>
    </div>
    <LegosFactRow>
      <LegosFact title="Tipus" class="grow">
        {{ item.fields.type }}
      </LegosFact>
      <LegosFact title="Estat" class="basis-[25%]">
        <span class="flex items-center gap-2">
          <span
            class="h-[1em] w-[1em] rounded-full"
            :class="{
              'bg-amber-500': item.fields.status === 'Projectat',
              'bg-green-500': item.fields.status === 'Paralitzat',
              'bg-orange-500': item.fields.status === 'En tramitació',
              'bg-blue-500': item.fields.status === 'Reactivat',
              'bg-amber-800': item.fields.status === 'Judicialitzat'
            }"
          />
          {{ item.fields.status }}
        </span>
      </LegosFact>
    </LegosFactRow>
    <LegosFactRow v-if="item.fields.affects || item.fields.area">
      <LegosFact v-if="item.fields.affects" title="Affecció" class="grow">
        {{ item.fields.affects }}
      </LegosFact>
      <LegosFact v-if="item.fields.area" title="Superfície afectada" class="basis-[25%]">
        {{ item.fields.area }} m²
      </LegosFact>
    </LegosFactRow>
    <LegosFactRow v-if="item.fields.description">
      <LegosFact title="Descripció">
        <div v-html="item.fields.description" class="prose font-medium" />
      </LegosFact>
    </LegosFactRow>
    <LegosFactRow v-if="item.fields.compromis">
      <LegosFact title="Què està fent Compromís">
        <div v-html="item.fields.compromis" class="prose font-medium" />
      </LegosFact>
    </LegosFactRow>
    <LegosFactRow v-if="item.fields.headlines && item.fields.headlines.length > 0">
      <LegosFact title="En la premsa" class="grow">
        <ul class="mt-2 flex flex-col gap-3">
          <li v-for="headline in item.fields.headlines" :key="headline">
            <LegosHeadline :headline="headline" />
          </li>
        </ul>
      </LegosFact>
    </LegosFactRow>
    <LegosFactRow v-if="item.fields.gallery && item.fields.gallery.length > 0">
      <LegosFact title="Fotos">
        <ul class="flex gap-card mt-2">
          <li v-for="photo in item.fields.gallery" :key="photo">
            <img :src="photo" alt="" class="w-full rounded-lg" />
          </li>
        </ul>
      </LegosFact>
    </LegosFactRow>
  </article>
</template>