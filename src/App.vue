<template xmlns="http://www.w3.org/1999/html">
  <div id="app" >
  <div class="container">
    <div class="row  main-content">
      <div class="col-md-3 col-sm-6 col-12">
        <div class="box">
          <productItem></productItem>
        </div>
      </div>
      <div class="col-md-3 col-sm-6 col-12">
        <div class="box">
          <productItem></productItem>
        </div>
      </div>
      <div class="col-md-3 col-sm-6 col-12">
        <div class="box">
          <productItem></productItem>
        </div>
      </div>
      <div class="col-md-3 col-sm-6 col-12">
        <div class="box">
          <productItem></productItem>
        </div>
      </div>
      <div class="col-md-3 col-sm-6 col-12">
        <div class="box">
          <productItem></productItem>
        </div>
      </div>
    </div>
  </div>
  </div>
</template>

<script>

import productItem from './components/productItem.vue'

export default {
  name: 'App',
  components: {
    productItem
  }
}
</script>

<style>
.main-content{
  margin-top: 100px;
}
#app{
  width: 100%;
  height: 100%;
 background-color: #f0ba51 ;
}

.box {
  width: 100%;
  height: 375px;
  border-radius: 20px;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16);
  background-color: #ffffff;
  border: solid 1px red;
}

</style>
