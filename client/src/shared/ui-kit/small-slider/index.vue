<script setup>
import { ref, computed, toRefs } from 'vue'
import './styles.model.scss'

const props = defineProps({
    marginBetween: String,
    slidesCount: Number
  }),
  { slidesCount } = toRefs(props)

const refSlider = ref(),
  refSliderOffsetWidth = computed(() => refSlider.value?.offsetWidth),
  translateX = ref(0)

const onClickNextButton = () => {
  if (translateX.value >= (slidesCount.value - 1) * refSliderOffsetWidth.value) {
    return (translateX.value = 0)
  }
  translateX.value += refSliderOffsetWidth.value
}

const onClickPrevButton = () => {
  if (translateX.value == 0) {
    return
  }
  translateX.value -= refSliderOffsetWidth.value
}
</script>

<template>
  <div class="product-images-slider" ref="refSlider">
    <div class="product-images-slider__container">
      <div class="product-images-slider__buttons">
        <button
          class="product-images-slider__prev-button product-images-slider__navigation-button"
          @click="onClickPrevButton"
        >
          <img src="/icons/arrow-left.svg" alt="" />
        </button>
        <button
          class="product-images-slider__next-button product-images-slider__navigation-button"
          @click="onClickNextButton"
        >
          <img src="/icons/arrow-right.svg" alt="" />
        </button>
      </div>
      <div
        class="product-images-slider__slides"
        :style="`width: ${
          refSliderOffsetWidth * slidesCount
        }px; transform: translateX(-${translateX}px)`"
      >
        <slot name="slides" />
      </div>
    </div>
  </div>
</template>

<style lang="scss"></style>
