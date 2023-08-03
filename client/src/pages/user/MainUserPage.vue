<script setup>
import { MainUserLayout } from '../../layouts/index'
import { BaseButton } from '../../shared/ui-kit/index.js'
</script>

<template>
  <main-user-layout>
    <div class="main-user-page">
      <div class="main-user-page__container">
        <base-button size="big">Смотреть все</base-button>
        <base-button size="big" type="outlined">Смотреть все</base-button>
        <base-button size="big" type="secondary">Кнопка</base-button>
        <base-button size="big" type="light">
          <template #icon-right> <fa-i icon="fa-solid fa-arrow-right" class="ml-3" /> </template>
          <template #default> Кнопка </template>
        </base-button>
        <base-button size="middle">Кнопка</base-button>
        <base-button size="middle" type="outlined">Кнопка</base-button>
        <base-button size="middle" type="secondary">Кнопка</base-button>
        <base-button size="middle" type="light">
          <template #icon-left> <fa-i icon="fa-solid fa-bars" /> </template>
          <template #default> Кнопка </template>
        </base-button>
      </div>
    </div>
  </main-user-layout>
</template>

<style lang="scss" scoped></style>
