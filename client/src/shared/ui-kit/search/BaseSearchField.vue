<script>

</script>

<template>
  <form>
    <input type="text" placeholder="Искать здесь...">
    <button type="submit"></button>
  </form>
</template>

<style scoped lang="scss">
  @import "@/app/styles/variables.scss";

form {
  position: relative;
  margin: 0 auto;
}
input {
  width: 100%;
  height: 40px;
  padding-left: 10px;   
  border: 2px $primary solid;
  border-radius: 5px;
  outline: none;
  background: $white;
  color: $black;
}
button {
  position: absolute; 
  top: 0;
  right: -3px;
  width: 40px;
  height: 40px;
  border: none;
  background: $primary;
  border-radius: 0 5px 5px 0;   
  cursor: pointer;
}
button:before {
  content: "";
  font-family: FontAwesome;
  font-size: 16px;
  color: #F9F0DA;
}
</style>
