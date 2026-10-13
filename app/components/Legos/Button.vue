<script setup>
defineProps({
  variant: {
    type: String,
    default: 'default'
  },
  href: {
    type: String,
    required: true
  },
  size: {
    type: String,
    default: 'md'
  }
})
</script>

<template>
  <div class="group">
    <a
      :href="href"
      class="
        font-semibold flex
        rounded-full group-hover:bg-white group-hover:text-black border-2 border-black items-center
        gap-2 group-hover:shadow-[.25em_.25em_0_0_var(--color-black)] group-hover:-translate-2
        transition-all
      "
      :class="{
        'text-yellow bg-black': variant === 'default',
        'text-black': variant === 'outline',
        'text-black bg-white justify-center': variant === 'white',
        'text-md px-5 py-2': size === 'md',
        'text-base px-4 py-1.5': size === 'base'
      }"
    >
      <slot />
    </a>
  </div>
</template>
