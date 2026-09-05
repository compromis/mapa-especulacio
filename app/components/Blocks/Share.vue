<script setup>
const texts = {
  title: 'Comparteix el mapa!',
  intro: 'Comparteix la campanya amb les teues amistats!',
  other: 'Altres...',
  shareable_title: 'Fes que passe! - Compromís',
  shareable_image: 'https://quepasse.com/images/og-image/val.png',
  shareable_text: 'Que passe el tren quan toca. Que passe el metro sense esperes eternes... Fes que passe!',
  shareable_url: 'https://quepasse.com'
}

/* Url and text */
const url = computed(() => {
  return texts.shareable_url
})

const text = computed(() => {
  return encodeURIComponent(texts.shareable_text)
})

const urlAndText = computed(() => {
  return `${text.value} ${url.value}`
})

/* Share dialog */
const payload = {
  title: texts.shareable_title,
  text: text.value,
  url: url.value,
  image: texts.shareable_image
}

const canShare = computed(() => window && window.navigator.share)
const share = async () => {
  if (canShare.value) {
    await navigator.share(payload)
  }
}
</script>

<template>
  <section id="share">
    <div class="max-w-250 p-site">
      <div class="border-2 border-black rounded-2xl overflow-clip">
        <div class="py-6 px-8 border-b-2 border-black">
          <h2 class="text-xl font-heading">{{ texts.title }}</h2>
          <p class="text-base">{{ texts.intro }}</p>
        </div>
        <div class="buttons grid md:grid-cols-2">
          <a :href="`https://wa.me/?text=${urlAndText}`" class="md:border-r-2 border-b-2 border-black">
            <span>-&gt;</span> WhatsApp
          </a>
          <a :href="`https://t.me/share/url?url=${urlAndText}`" class="border-b-2 border-black">
            <span>-&gt;</span> Telegram
          </a>
          <a :href="`https://x.com/intent/post/?text=${text}&url=${url}&hashtags=`" class="md:border-r-2 border-b-2 md:border-b-0 border-black">
            <span>-&gt;</span> X / Twitter
          </a>
          <a v-if="canShare" href="#" @click.prevent="share">
            <span>-&gt;</span> {{ texts.other }}
          </a>
          <a v-else :href="`https://www.facebook.com/sharer/sharer.php?u=${url}`">
            <span>-&gt;</span> Facebook
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.buttons a {
  padding: calc(var(--spacing) * 6);
  font-size: var(--text-lg);
  display: flex;
  gap: .5em;
  transition: .5s ease;

  span {
    max-width: 0;
    overflow: clip;
    transition: .5s ease;
    white-space: nowrap;
    color: var(--color-orange);
  }
}

.buttons a:hover {
    background: var(--color-white);
    color: var(--color-orange);
    text-decoration: none;

    span {
      max-width: 2em;
    }
}
</style>