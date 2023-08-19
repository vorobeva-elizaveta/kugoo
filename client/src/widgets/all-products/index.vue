<script setup>
import { ref, watch } from 'vue'
import { ProductCard } from '../../entities/product'
import { getAllProducts } from '../../entities/product'
import { BasePagination as PaginationComponent } from '../../shared/ui-kit/index'
import './styles.model.scss'

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
