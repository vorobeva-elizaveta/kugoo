<script setup>
import { ProductImagesSlider } from './index'
defineProps({
  product: {
    type: Object,
    default: () => ({
      title: 'Kugoo Kirin M4',
      horsepower: 1.2,
      speed: 60,
      accumulator: 2000,
      work_time: 5,
      cost: 29900,
      imgs: [''],
      labels: [
        {
          title: 'ХИТ',
          full_title: '',
          color: '#EE685F',
          id: 123
        },
        {
          title: 'Новинка',
          full_title: '',
          color: '#75D14A',
          id: 123
        }
      ]
    })
  }
})
</script>

<template>
  <div class="product-card" v-if="product != null">
    <div class="product-card__container">
      <div class="product-card__top-block">
        <div
          class="product-card__labels-block"
          v-if="product.labels != null && product.labels.length > 0"
        >
          <span
            class="product-card__label"
            :style="`background-color: ${label.color}`"
            v-for="label of product.labels"
            :key="label.id"
          >
            {{ label.title }}
          </span>
        </div>
        <product-images-slider class="product-card__cover-image" :slidesCount="3">
          <template #slides>
            <div class="slide">
              <img class="" src="/imgs/default-scooter.png" alt="" />
            </div>
            <div class="slide">
              <img class="" src="/imgs/scooter-image2.png" alt="" />
            </div>
            <div class="slide">
              <img class="" src="/imgs/default-scooter.png" alt="" />
            </div>
          </template>
        </product-images-slider>
      </div>
      <div class="product-card__bottom-block">
        <p class="product-card__title">
          {{ product.title }}
        </p>
        <div class="product-card__specifications">
          <div class="specifications__item" v-if="product.accumulator != null">
            <img class="item__icon" src="/icons/accumulator.svg" alt="" />
            <p class="item__value">{{ product.accumulator }} mAh</p>
          </div>
          <div class="specifications__item" v-if="product.horsepower != null">
            <img class="item__icon" src="/icons/power.svg" alt="" />
            <p class="item__value">{{ product.horsepower }} л.с.</p>
          </div>
          <div class="specifications__item" v-if="product.speed != null">
            <img class="item__icon" src="/icons/speedometer.svg" alt="" />
            <p class="item__value">{{ product.speed }} км/ч</p>
          </div>
          <div class="specifications__item" v-if="product.work_time != null">
            <img class="item__icon" src="/icons/timer.svg" alt="" />
            <p class="item__value">{{ product.work_time }} час.</p>
          </div>
        </div>
        <div class="product-card__price-block">
          <p class="product-card__price-value">{{ product.cost?.toLocaleString() }} ₽</p>
        </div>
        <base-button>Купить в 1 клик</base-button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.product-card {
  max-width: 300px;
  @apply border border-gray-300 rounded-[10px] overflow-hidden;

  &__container {
    @apply flex flex-col gap-y-5;
  }

  &__top-block {
    position: relative;
    width: 100%;
    height: 230px;
    overflow: hidden;
  }

  &__labels-block {
    @apply absolute z-[1] top-[10px] left-[10px] flex items-center gap-2;
  }
  &__label {
    @apply block py-1 px-2 rounded-[5px] text-sm
     text-white font-medium;
  }

  &__cover-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &__bottom-block {
    @apply flex flex-col px-6 pb-5 gap-5;
  }

  &__title {
    @apply text-[18px] font-semibold text-black;
  }

  &__specifications {
    display: grid;
    grid-template-columns: 1fr 1fr;
    row-gap: 16px;
    column-gap: 26px;

    .specifications__item {
      @apply flex items-center gap-x-2;
      .item__icon {
      }
      .item__value {
        @apply text-gray-600 text-[14px];
      }
    }
  }

  &__price-value {
    @apply font-semibold text-[20px] text-black;
  }
}
</style>
