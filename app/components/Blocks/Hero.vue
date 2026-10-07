<template>
  <header class="flex flex-col gap-5 mb-[4vh] p-2 md:p-0">
    <SiteLogo class="mb-[8vh]" />
    <h1 class="font-heading text-3xl md:text-5xl tracking-tight leading-[.85] mb-[5vh]">
      <img src="~/assets/images/pin.png" alt="" class="inline-block h-[1em] mx-[-.3em] translate-y-[-.15em]" />
      Mapa de <span class="whitespace-nowrap">l’
      <img src="~/assets/images/money-mouth-face.png" alt="" class="inline-block h-[1em] mx-[-.28em] translate-y-[-.1em]" />
      especulació</span><br>al
      <img src="~/assets/images/pv-emoji.png" alt="" class="inline-block h-[1.5em] my-[-.3em] ms-[-.1em] me-[-.3em] translate-y-[-.1em]" />
      País Valencià
    </h1>
    <h2 class="font-extrabold text-md max-w-[50ch] leading-tight text-balance">
      Cartografia de macroprojectes, pressions urbanístiques i conflictes territorials
    </h2>
    <p class="max-w-[70ch] leading-snug text-base">
      Durant dècades, el territori valencià ha estat sotmés a un model de creixement basat en la transformació del sòl i en les expectatives de rendibilitat econòmica. El valor del sòl s’ha calculat en funció del seu potencial urbanístic i no de les funcions ambientals que compleix per al conjunt de la societat.
    </p>
    <p class="max-w-[70ch] leading-snug text-base">
    Però el territori és finit i la crisi climàtica ens obliga a entendre que un sòl agrícola, una plana d’inundació o un espai periurbà no són simplement terrenys disponibles per al negoci d’uns pocs: són infraestructura ambiental, espais de protecció i elements essencials per a un territori i una societat resilients.
    </p>
    <p class="max-w-[70ch] leading-snug text-base">
    Aquest mapa fa visibles els punts on actualment s’està donant aquesta pressió i evidencia la necessitat d’un canvi del model territorial que erradique l’especulació del nostre territori, permeta la desclassificació de sòls inadequats i reconega i protegisca les funcions ambientals de què ens proveeix.
    </p>
    <p class="max-w-[70ch] leading-snug text-base">
    Davant del fals dilema entre protegir el territori o garantir habitatge assequible, defensem un model que faça compatibles ambdós objectius. La solució no és devorar més horta, més espais naturals o més sòl protegit, sinó aprofitar millor les ciutats existents: completar buits urbans, reconvertir sòls i edificis infrautilitzats i impulsar la rehabilitació i la densificació dels espais ja urbanitzats. Necessitem més habitatges, però també més territori protegit, més resiliència climàtica i més qualitat de vida. El creixement urbà del futur ha de produir-se cap endins i no a costa dels últims espais lliures del territori valencià.
    </p>
    <p class="md:hidden flex gap-3">
      <LegosButton
        href="#map"
        class="block w-full"
        variant="white"
      >
        <img src="~/assets/images/warning.png" alt="" class="h-[1em] group-hover:-rotate-3 group-hover:scale-125 transition-all" />
        Veure el mapa
      </LegosButton>
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
