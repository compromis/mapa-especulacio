<template>
  <footer class="footer relative z-5 p-4 md:p-base pt-24 max-w-550 mx-auto">
    <div class="p-site md:mx-auto min-h-28 flex flex-col md:flex-row md:items-end gap-4 text-black">
      <div class="text-balance">
        <div class="flex gap-4 items-center mb-4">
          <a href="https://compromis.net" aria-label="Compromís" class="logo compromis">
            <SiteLogo class="h-5" />
          </a>
        </div>
        <p>
          <strong>Mapa de l'especulació</strong> és una campanya de <strong><a href="https://compromis.net">Compromís</a></strong>.
        </p>
      </div>
      <div class="text-nowrap flex gap-4 md:ms-auto">
        <a href="https://compromis.net/avis-legal" class="hover:underline">Política de privacitat</a>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  p {
    margin: 0;
    margin-right: auto;
  }

  a {
    color: var(--white);

    &:hover {
      opacity: .75;
    }
  }
}

.footer-logo {
  height: 1.5rem;
}

@media (max-width: 46rem) {
  .footer {
    .container {
      flex-direction: column;
      justify-content: center;
      text-align: center;
    }
  }
}
</style>