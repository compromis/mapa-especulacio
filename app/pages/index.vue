<script setup>
const config = useRuntimeConfig()

/* SEO Metatags */
const title = 'Mapa de l\'especulació al País Valencià - Compromís'
const ogTitle = title
const description = 'Cartografia de macroprojectes, pressions urbanístiques i conflictes territorials'
const ogImage = config.public.url + '/images/og-image.png'
const keywords = 'especulacio, vivenda, urbanisme, especulación, vivienda, urbanismo, mapa, compromis, valencia, país valencià, comunidad valenciana'
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
    <div class="grid md:grid-cols-12 gap-6 md:gap-10 p-4 md:p-base max-w-550 mx-auto">
      <div class="md:col-span-7 flex flex-col gap-base">
        <BlocksHero />
        <BlocksMap :cases="cases" class="md:hidden" />
        <BlocksCities :cases="cases" />
        <BlocksCases :cases="cases" />
        <BlocksForm />
        <BlocksShare />
      </div>
      <BlocksMap :cases="cases" class="hidden md:block md:col-span-5" />
    </div>
  </main>
</template>
