<script setup>
  const clickOnSearch = () => {
    alert('Search has begun')
  }
</script>

<template>
  <form>
    <input  class="input"  type="text"   placeholder="Искать здесь...">
    <button class="button" type="submit" @click="clickOnSearch">
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
  background: $white;
  color: $black;
  border: 2px $primary solid;
  
  &::placeholder{
    color: $black;
    font-size: 14px;
    font-weight: 400;
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
  width: 40px;
  height: 40px;
}
</style>
