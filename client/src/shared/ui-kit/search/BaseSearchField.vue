<script setup>
  const props = defineProps({
    type: {
      sype: String,
      default: 'primary'
    }
  })

  const clickOnSearch = () => {
    alert('Search has begun')
  }
</script>

<template>
  <form>
    <input  :class="['input',  `input_${type}`]"  type="text"   placeholder="Искать здесь...">
    <button :class="['button', `button_${type}`]" type="submit" @click="clickOnSearch">
      <font-awesome-icon icon="fa-solid fa-magnifying-glass"/>
    </button>
  </form>
</template>

<style scoped lang="scss">
  @import "@/app/styles/variables.scss";

form {
  position: relative; 
}
.input {
  width: 100%;
  height: 40px;
  padding-left: 10px;   
  border-radius: 5px;
  outline: none;
  &_primary{
    background: $white;
    color: $black;
    border: 2px $primary solid;
  }
  &_secondary{
    background: $sky;
    color: $white;
    border: 2px $sky solid;
    height: 53px;
  }
  &_secondary::placeholder{
    color: $white;
    font-size: 16px;
    font-weight: 300;
    line-height: 23px;

  }
}
.button {
  color: $white;
  position: absolute; 
  top: 0;
  right: -3px;
  border: none;
  background: $primary;
  border-radius: 0 5px 5px 0;   
  cursor: pointer;
  &_primary{
    width: 40px;
    height: 40px;
  }
  &_secondary{
    visibility: collapse;
  }
}
</style>
