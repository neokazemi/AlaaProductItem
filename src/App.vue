<template>
  <div id="app">

  <div class="container">
    <div class="row">
      <div class="col-md-3 col-sm-6 col-12">
        <div class="box"></div>
      </div>
      <div class="col-md-3 col-sm-6 col-12">
        <div class="box"></div>
      </div>
      <div class="col-md-3 col-sm-6 col-12">
        <div class="box"></div>
      </div>
      <div class="col-md-3 col-sm-6 col-12">
        <div class="box"></div>
      </div>
      <div class="col-md-3 col-sm-6 col-12">
        <div class="box"></div>
      </div>
      <div class="col-md-3 col-sm-6 col-12">
        <div class="box"></div>
      </div>
      <div class="col-md-3 col-sm-6 col-12">
        <div class="box"></div>
      </div>
      <div class="col-md-3 col-sm-6 col-12">
        <div class="box"></div>
      </div>
    </div>
  </div>
    <productItem></productItem>
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
.box {
  width: 100%;
  height: 100px;
  border: solid 1px red;
}

</style>
