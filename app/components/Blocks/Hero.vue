<template>
  <header class="flex flex-col gap-4 mb-[2vh]">
    <SiteLogo class="mb-[5vh]" />
    <h1 class="font-headline text-5xl tracking-tight leading-[.85] mb-7">
      <img src="~/assets/images/pin.png" alt="" class="inline-block h-[1em] mx-[-.3em] translate-y-[-.15em]" />
      Mapa de l’
      <img src="~/assets/images/money-mouth-face.png" alt="" class="inline-block h-[1em] mx-[-.28em] translate-y-[-.1em]" />
      especulació<br>al
      <img src="~/assets/images/pv-emoji.png" alt="" class="inline-block h-[1.5em] my-[-.3em] ms-[-.1em] me-[-.3em] translate-y-[-.1em]" />
      País Valencià
    </h1>
    <h2 class="font-extrabold text-md max-w-[50ch] leading-tight text-balance">
      Cartografia de macroprojectes, pressions urbanístiques i conflictes territorials
    </h2>
    <p class="max-w-[70ch] leading-snug text-base">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </p>
    <p class="flex gap-3">
      <LegosButton
        href="#form"
      >
        <img src="~/assets/images/warning.png" alt="" class="h-[1em] group-hover:-rotate-3 group-hover:scale-125 transition-all" />
        Denuncia
      </LegosButton>
      <LegosButton
        href="#share"
        variant="outline"
      >
        <img src="~/assets/images/megaphone.png" alt="" class="h-[1em] group-hover:rotate-8 group-hover:scale-125 transition-all" />
        Comparteix
      </LegosButton>
    </p>
  </header>
</template>
