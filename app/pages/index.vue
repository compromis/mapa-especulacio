<script setup>
const config = useRuntimeConfig()

/* SEO Metatags */
const title = 'Mapa de l\'especulació - Compromís'
const ogTitle = title
const description = 'Descripcio'
const ogImage = config.public.url + '/images/og-image.png'
const keywords = ''
const twitterSite = 'compromis'

useSeoMeta({
  title,
  ogTitle,
  description,
  ogDescription: description,
  ogImage,
  twitterCard: 'summary_large_image',
  keywords,
  ogSiteName: title,
  twitterSite,
  ogType: 'website'
})

useHead({ title })

// Cases
const { $wp } = useNuxtApp()
const { data: cases } = await useAsyncData(`cases`, () => $wp.cases())
</script>

<template>
  <main>
    <div class="grid md:grid-cols-12 gap-6 md:gap-20 p-4 md:p-base">
      <div class="md:col-span-7 flex flex-col gap-base">
        <BlocksHero />
        <BlocksMap :cases="cases" class="md:hidden" />
        <BlocksCases :cases="cases" />
        <BlocksForm />
        <BlocksShare />
      </div>
      <BlocksMap :cases="cases" class="hidden md:block md:col-span-5" />
    </div>
  </main>
</template>
