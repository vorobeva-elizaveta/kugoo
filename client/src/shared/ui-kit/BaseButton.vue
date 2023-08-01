<script setup>
defineProps({
  type: {
    type: String,
    default: 'primary',
    validator: (val) => ['primary', 'secondary'].includes(val)
  },
  size: {
    type: String,
    default: 'middle',
    validator: (val) => ['big', 'middle', 'small'].includes(val)
  }
})
</script>

<template>
  <button class="base-button" :class="`${type} ${size}`">
    <slot />
  </button>
</template>

<style lang="scss"></style>
