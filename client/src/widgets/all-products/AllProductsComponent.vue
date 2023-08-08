<script setup>
import { ProductCard } from '@/features/index.js'
import { getAllProducts } from '@/shared/API/products.js'
import { ref, watch } from 'vue'
import { PaginationComponent } from '@/features/index'

let products = ref(),
  pagesCount = ref(1),
  mainPage = ref(1)

const onLoadComponent = async () => {
  await getAllProductsByPage()
}

const getAllProductsByPage = async () => {
  const { pages, result } = await getAllProducts(mainPage.value, 5)
  products.value = result
  pagesCount.value = pages
}

watch(mainPage, () => {
  getAllProductsByPage()
})

onLoadComponent()
</script>

<template>
  <div class="all-products-component">
    <div class="all-products-component__container">
      <div class="all-products-component__products-list">
        <product-card
          class="all-products-component__product-card"
          v-for="product of products"
          :product="product"
        />
      </div>
      <pagination-component
        class="all-products-component__pagination-block"
        :pages="pagesCount"
        :main-page="1"
        v-model:mainPage="mainPage"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.all-products-component {
  &__container {
  }

  &__products-list {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 12px;
  }

  &__product-card {
    width: 100%;
  }

  &__pagination-block {
    @apply mt-4;
  }
}
</style>
