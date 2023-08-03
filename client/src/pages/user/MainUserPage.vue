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
        <base-button size="big" type="light">Кнопка</base-button>
        <br />
        <br />
        <base-button size="middle">Кнопка</base-button>
        <base-button size="middle" type="outlined">Кнопка</base-button>
        <base-button size="middle" type="secondary">Кнопка</base-button>
        <base-button size="middle" type="light">Кнопка</base-button>
      </div>
    </div>
  </main-user-layout>
</template>

<style lang="scss" scoped></style>
