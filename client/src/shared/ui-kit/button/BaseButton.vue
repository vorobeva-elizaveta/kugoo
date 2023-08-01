<script setup>
  const props = defineProps({
    size: {
      type: String,
      default: 'big'
    },
    color: {
      type: String,
      default: 'primary'
    },
    outlined: {
      type: Boolean,
      default: false,
      required: false
    },
    rounded: {
      type: Boolean,
      default: false,
      required: false
    },
    disabled: {
      type: Boolean,
      default: false,
      required: false
    },
    icon: {
      type: String,
      required: false
    }
    // type: {
    //   type: String,
    //   default: 'basic',
    //   required: false
    // }

  });

  const emit = defineEmits(['click'])

  const clickOnButton = () => {
    emit('click');
  }
</script>

<template>
  <button 
    :class="[
      'button', `button_${color}`, `button_${size}`,
      {'button_outlined': outlined},
      {'button_rounded': rounded}
      ]"
    :disabled="disabled"
    @click="clickOnButton"
  >
    <span v-if="icon">
      <font-awesome-icon style="transform: translate(0, 1.5px); transform: scale(1.2, 1.2)" :icon="`fa-solid fa-${icon}`"></font-awesome-icon>
    </span>
    <slot v-else/>
  </button>
</template>

<style lang="scss">
@import "@/app/styles/variables.scss";
.button{
  border-radius: 5px;
  border: none;
  color: #fff;
  cursor: pointer;
  transition: 0.2s;

  &_primary {
    background: $primary;
    border: 2px solid $primary;
    &:enabled:hover{
      background: $primary-light;
      border-color: $primary-light;
    }
  }
  &_secondary {
    background: $secondary;
    border: 2px solid $secondary;
    &:enabled:hover{
      background: $secondary-light;
      border-color: $secondary-light;
    }
  }
  &_gray {
    background: $gray-100;
    border: 2px solid $gray-100;
    color: black;
    &:enabled:hover{
      background: $gray-100;
      border-color: $gray-100;
      color: $primary;
    }
  }

  &_icon{
    padding: 3px;
    border-width: 1px;
    margin: 2px;
  }
  &_small{
    padding: 3px 7px;
    font-weight: 400;
    font-size: 10px;
    letter-spacing: 0.5px;
  }
  &_big{
    line-height: 40px;
    padding: 0 15px;
    font-size: 16px;
    font-weight: 500;
  }

  &_rounded{
    border-radius: 30px;
  }

  &_outlined{
    background: $white;
    color: $primary;
    &:hover{
      color: $white;
      background: $primary;
    }
  }

  &:disabled{
    opacity: 0.6;
    cursor: default;
    &:hover{
      opacity: 0.6;
    }
  }
}
</style>
