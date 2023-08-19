<script setup>
import './styles.model.scss'

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
