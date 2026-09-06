<script setup>
defineProps({
  variant: {
    type: String,
    default: 'default'
  },
  href: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div class="group">
    <a
      :href="href"
      class="
        font-semibold text-md px-5 py-2 flex
        rounded-full group-hover:bg-white group-hover:text-black border-2 border-black items-center
        gap-2 group-hover:shadow-[.25em_.25em_0_0_var(--color-black)] group-hover:-translate-2
        transition-all
      "
      :class="{
        'text-yellow bg-black': variant === 'default',
        'text-black': variant === 'outline'
      }"
    >
      <slot />
    </a>
  </div>
</template>
