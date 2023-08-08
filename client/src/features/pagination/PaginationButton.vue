<script setup>
defineProps({
  page: {
    type: Number
  },
  mainPage: {
    typr: Number
  }
})
</script>

<template>
  <button class="pagination-button" :class="{ active: mainPage === page }">
    <div class="pagination-button__container">
      {{ page }}
    </div>
  </button>
</template>

<style lang="scss" scoped>
.pagination-button {
  @apply border px-2 py-1 border-purple rounded-[5px] text-purple hover:text-white bg-white hover:bg-light-purple transition-[.2s];

  &.active {
    @apply bg-purple text-white;
  }
}
</style>
