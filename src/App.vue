<template>
  <div id="app" >
  <div class="container">
    <div class="row  main-content">
      <div class="col-md-3 col-sm-6 col-12">
        <div class="product-item-box ">

          <productItem></productItem>
        </div>
      </div>
      <div class="col-md-3 col-sm-6 col-12">
        <div class="product-item-box ">

          <productItem></productItem>
        </div>
      </div>
      <div class="col-md-3 col-sm-6 col-12">
        <div class="product-item-box ">

          <productItem></productItem>
        </div>
      </div>
      <div class="col-md-3 col-sm-6 col-12">
        <div class="product-item-box ">

          <productItem></productItem>
        </div>
      </div>



    </div>
  </div>
  </div>
</template>

<script>
import './assets/style/font.css'
import './assets/style/style1.css'
import './assets/style/style2.css'
import productItem from './components/productItem.vue'

export default {
  data(){
    return {
      list_item:[1,2,3,4]
    }
  },
  name: 'App',
  components: {
    productItem
  }
}
</script>

<style scoped>
.main-content{
  margin-top: 100px;

}

#app{
  width: 100%;
  height: 100%;
}


.product-item-box {
  padding: 15px;
  width: 100%;
  border-radius: 20px;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16);
  background-color: #ffffff;

}

</style>
