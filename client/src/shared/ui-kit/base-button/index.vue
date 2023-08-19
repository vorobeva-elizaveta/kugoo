<script setup>
import { ref } from 'vue'
import { BaseLoader } from '../index'
import './styles.model.scss'

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

<style lang="scss"></style>
