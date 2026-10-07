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
      <span class="p-card ms-auto uppercase font-mono text-black/50 pe-5">{{ item.fields.comarca }}</span>
    </div>
      <LegosFactRow v-if="item.fields.actuacio || item.fields.area">
      <LegosFact v-if="item.fields.actuacio" title="Actuació" class="grow font-bold">
        {{ item.fields.actuacio }}
      </LegosFact>
      <LegosFact v-if="item.fields.area" title="Superfície afectada" class="basis-[38%]">
        {{ item.fields.area }} m²
      </LegosFact>
    </LegosFactRow>
    <LegosFactRow>
      <LegosFact title="Tipus" class="grow">
        {{ item.fields.type }}
      </LegosFact>
      <LegosFact title="Estat" class="basis-[50%]">
        <span class="flex items-baseline gap-2">
          <span
            class="h-[1em] w-[1em] top-0.5 relative shrink-0 rounded-full bg-amber-500"
          />
          {{ item.fields.status }}
        </span>
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