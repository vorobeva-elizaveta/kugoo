<script setup>
import './styles.model.scss'
import { SmallSlider as ProductImagesSlider } from '@/shared/ui-kit'

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
          id: 124
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
          <p class="product-card__price-value" v-if="product.cost">
            {{ product.cost?.toLocaleString() }} ₽
          </p>
          <p class="product-card__price-value" v-else>Цена не указана</p>
        </div>
        <slot name="send-button" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
