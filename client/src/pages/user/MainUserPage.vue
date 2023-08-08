<script setup>
import { MainUserLayout } from '../../layouts/index'
import { AllProductsComponent } from '@/widgets'
</script>

<template>
  <main-user-layout>
    <div class="main-user-page">
      <div class="main-user-page__container">
        <all-products-component />
      </div>
    </div>
  </main-user-layout>
</template>

<style lang="scss" scoped></style>
