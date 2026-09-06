<script setup>
useHead({
  htmlAttrs: { lang: 'ca-ES', class: 'bg-yellow font-sans bg-linear-to-r from-yellow to-[#f98a02] from-60%' },
  meta: [
    { name: 'theme-color', content: '#f1f0eb' },
    { name: 'msapplication-TileColor', content: '#f1f0eb' },
    { name: 'apple-mobile-web-app-title', content: 'Mans' }
  ],
  link: [
    { rel: 'icon', type: 'image/x-icon', href: 'https://compromis.net/sub/icons/favicon.ico' },
    { rel: 'icon', type: 'image/png', sizes: '32x32', href: 'https://compromis.net/sub/icons/favicon32.png' },
    { rel: 'icon', type: 'image/png', sizes: '192x192', href: 'https://compromis.net/sub/icons/favicon192.png' },
    { rel: 'preconnect', href: 'https://compromis.net' },
    { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
    { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
    { rel: 'stylesheet', href: 'https://compromis.net/sub/fonts/manrope.css?variable' },
    { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Instrument+Serif&family=JetBrains+Mono&family=DM+Serif+Display&display=swap' },
  ],
  script: [
    { src: 'https://server.fillout.com/embed/v1/' }
  ]
})
</script>

<template>
  <div>
    <NuxtRouteAnnouncer />
    <SiteNav />
    <main class="min-h-svh font-medium">
      <slot />
    </main>
    <SiteFooter />
  </div>
</template>

<style>

</style>