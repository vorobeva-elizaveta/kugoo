<script setup>
import { PaginationButton } from '../index'

let props = defineProps({
  pages: {
    type: Number,
    default: 1
  },
  mainPage: {
    type: Number,
    default: 1
  }
})

const onClickPaginationButton = (page) => {
  emit('update:mainPage', page)
}

const emit = defineEmits(['update:mainPage'])
</script>

<template>
  <div class="pagination-component">
    <div class="pagination-component__container">
      <pagination-button
        v-for="page in pages"
        :page="page"
        :main-page="mainPage"
        @click="onClickPaginationButton(page)"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
