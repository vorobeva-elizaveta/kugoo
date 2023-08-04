<script setup>
import { ref, computed, toRefs } from 'vue'

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

<style lang="scss">
.product-images-slider {
  overflow: hidden;

  &__buttons {
    @apply absolute opacity-0 hover:opacity-100 z-[1] flex items-center justify-between w-full h-full px-4;
  }

  &__navigation-button {
    @apply w-10 h-10 flex items-center justify-center rounded-full bg-white hover:bg-gray-50;
  }

  &__prev-button {
  }
  &__next-button {
  }

  &__slides {
    @apply flex;
    pointer-events: none;
    height: 100%;
    position: absolute;
    transition: all 0.2s;

    div {
      width: 100%;
      height: 100%;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }
}
</style>
