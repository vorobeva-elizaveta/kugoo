<script setup>
import { ref } from 'vue'
import { BaseLoader } from './index'

defineProps({
  type: {
    type: String,
    default: 'primary',
    validator: (val) => ['primary', 'secondary', 'outlined', 'light'].includes(val)
  },
  size: {
    type: String,
    default: 'middle',
    validator: (val) => ['big', 'middle', 'small'].includes(val)
  }
})

let loadingStatus = ref(false)

const setLoadingStatus = (status) => {
  loadingStatus.value = status
}

defineExpose({ setLoadingStatus })
</script>

<template>
  <button class="base-button" :class="`${type} ${size}`">
    <slot name="icon-left" />
    <span :class="{ invisible: loadingStatus == true }">
      <slot />
    </span>
    <base-loader class="base-button__loader" size="middle" v-if="loadingStatus == true" />
    <slot name="icon-right" />
  </button>
</template>

<style lang="scss">
.base-button {
  @apply relative flex items-center justify-center gap-2;

  & span.invisible {
    @apply opacity-0;
  }

  &.primary {
    @apply bg-purple text-white border-2 border-purple rounded-[5px];

    &:hover {
      @apply bg-light-purple border-light-purple text-white;
      transition: 0.2s;
    }
  }

  &.secondary {
    @apply bg-orange text-white border-2 border-orange rounded-[5px];

    &:hover {
      @apply bg-light-orange border-light-orange text-white;
      transition: 0.2s;
    }
  }

  &.outlined {
    @apply border-2 border-purple rounded-[5px] text-purple;

    &:hover {
      @apply bg-purple text-white;
      transition: 0.2s;

      .base-button__loader .path {
        stroke: rgb(255, 255, 255) !important;
      }
    }

    .base-button__loader .path {
      stroke: $purple !important;
    }
  }

  &.light {
    @apply border-2 border-white bg-white rounded-[5px] text-purple;

    &:hover {
      @apply bg-gray-100;
      transition: 0.2s;
    }

    .base-button__loader .path {
      stroke: $purple !important;
    }
  }

  &.big {
    @apply px-[25px] py-[15px] text-[16px] leading-[23px];
  }

  &.middle {
    @apply px-[20px] py-[10px] text-[14px] leading-[17px];
  }

  &.small {
  }

  &__loader {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 20px;
    height: 20px;
    margin: -10px 0 0 -10px;
  }
}
</style>
