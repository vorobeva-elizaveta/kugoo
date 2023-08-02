<script setup>
//import { login, getAllProducts } from '@/shared/API/index.js'
//login('vliza162@gmail.com', 'Malishka2004_')
//getAllProducts()

//удалить
import BaseButton from '@/shared/ui-kit/button/BaseButton.vue'
import BaseSearchField from '@/shared/ui-kit/search/BaseSearchField.vue'
import BaseInput from '@/shared/ui-kit/input/BaseInput.vue'
import {ref} from 'vue'

const clickOnButton = () => {
  alert('Button was clicked')
}

let inputValue = ref('')

</script>

<template>
  <!-- удалить -->
  <div>
    <div>
      <base-button color="primary"   @click="clickOnButton">Каталог</base-button>
      <base-button color="secondary" @click="clickOnButton">Каталог</base-button>
    </div>
    <div>
      <base-button color="gray"    :rounded="true"> <font-awesome-icon icon="fa-solid fa-basket-shopping" style="transform: translate(0, 2px)"/>   Корзина</base-button>
      <base-button color="primary" :outlined="true"><font-awesome-icon icon="fa-solid fa-bars"            style="transform: translate(0, 0.5px)"/> Каталог</base-button>
      <base-button color="primary" size="small" :rounded="true">Доступна рассрочка</base-button>
    </div>
    <div>
      <base-button color="primary" size="icon" :rounded="true" icon="paper-plane">Подписаться</base-button>
      <base-button color="primary" size="icon" :rounded="true" :outlined="true" icon="basket-shopping">Подписаться</base-button>
    </div>
    <div id="test2"><base-search-field/></div>
    
    <form>
      {{ inputValue }}
      <div id="test3"> 
        <base-input placeholder="Введите e-mail" v-model="inputValue"></base-input>
      </div>
      <div id="test4"> 
        <base-input type="secondary" placeholder="Введите имя"></base-input>
      </div>
      <base-button color="primary" size="big" :outlined="true" id="test1">Подписаться</base-button>
    </form>
  </div>
</template>

<style lang="scss" scoped>
//удалить
@import "@/app/styles/variables.scss";
#test1{
  font-weight: 400;
  padding: 7px 15px;
  &:hover{
    background: $primary;
    border-color: $primary;
  }
}
#test2{
  width: 300px;
}
#test3{
  height: 92px;
  width: 390px; 
  background: $secondary;
  padding: 20px
}
#test4{
  height: 92px;
  width: 390px; 
  background: $white;
  padding: 20px
}

div{
  margin: 4px;
}
</style>
