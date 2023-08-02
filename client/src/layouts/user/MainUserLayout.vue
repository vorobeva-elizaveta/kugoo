<script setup>
import { MainHeaderComponent } from '@/widgets/index.js'
</script>

<template>
  <div class="main-user-layout">
    <div class="main-user-layout__container">
      <main-header-component />
      <slot />
      <!-- TODO здесь будет подвал сайта -->
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
