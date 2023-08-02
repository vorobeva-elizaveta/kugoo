<script setup>
  const props = defineProps({
    type: {
        type: String,
        default: 'primary'
    },
    placeholder: {
        type: String,
        default: 'Искать здесь...'
    }
  })
</script>

<template>
    <input :class="['input', `input_${type}`]" type="text" :placeholder="placeholder" v-model="inputValue">
</template>

<style lang="scss" scoped>
@import "@/app/styles/variables.scss";
.input{
  width: 100%;
  padding-left: 10px;
  border-radius: 5px;
  outline: none;
  &_primary{
    color: $white;
    height: 53px;
    background: rgba(255, 255, 255, 0.2);
    border: 2px rgba(255, 255, 255, 0.3) solid;
    font-size: 16px;
    font-weight: 400;
    &::placeholder{
        color: $white;
    }
  }
  &_secondary{
    background: $white;
    color: $black;
    border: 2px $primary solid;
    height: 40px;
    font-size: 14px;
    &::placeholder{
        color: $black;
    }
  }
}

</style>