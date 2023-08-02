<script setup>
//import { login, getAllProducts } from '@/shared/API/index.js'
//login('vliza162@gmail.com', 'Malishka2004_')
//getAllProducts()

//удалить
import BaseButton from '@/shared/ui-kit/button/BaseButton.vue'
import BaseSearchField from '@/shared/ui-kit/search/BaseSearchField.vue'

const clickOnButton = () => {
  alert('Button was clicked')
}

</script>

<template>
  <!-- удалить -->
  <div>
    <div>
      <base-button color="primary" @click="clickOnButton">Каталог</base-button>
      <base-button color="secondary" @click="clickOnButton">Каталог</base-button>
    </div>
    <div>
      <base-button color="gray"    :rounded="true">    <font-awesome-icon icon="fa-solid fa-basket-shopping" style="transform: translate(0, 2px)"/> Корзина</base-button>
      <base-button color="primary" :outlined="true">   <font-awesome-icon icon="fa-solid fa-bars"            style="transform: translate(0, 0.5px)"/> Каталог</base-button>
      <base-button color="primary" size="small" :rounded="true">Доступна рассрочка</base-button>
    </div>
    <div>
      <base-button color="primary" size="icon" :rounded="true" icon="paper-plane">Подписаться</base-button>
      <base-button color="primary" size="icon" :rounded="true" :outlined="true" icon="basket-shopping">Подписаться</base-button>
    </div>
    <div id="test2"><base-search-field/></div>
    <div id="test3">
      <base-search-field type="secondary"/>
    </div>

  </div>
</template>

<style lang="scss" scoped>
//удалить
#test1{
  font-weight: 400;
  padding: 7px 15px;
  text-align: center;
}

#test2{
  width: 300px;
}

#test3{
  width: 300px;
}
div{
  margin: 4px;
}
</style>
