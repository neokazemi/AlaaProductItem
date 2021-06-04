<template>
  <div class="product-item-box ">
  <div class="product-item-main-box">
    <a href="#" class="img-box">
      <img :src="product.image" class="img" alt="img1">
     </a>
    <div class="product-item-content">
      <div class="main-title">
        <a href="#" class="title-box">
        <span class="title-text">
           {{product.title }}
        </span>
        </a>
      </div>
      <div class="time-author-box">
        <div  class="box-item">
          <img src="../assets/icons/teacher.png" class="teacher-icon" alt="img1">
          <span class="author">
          {{ product.author }}
         </span>
        </div>
        <div class="box-item">
          <img src="../assets/icons/time.png" class="time-icon" alt="img1">
          <span class="time"> {{product.duration}}</span>
        </div>
      </div>
        <div class="price-box">
          <div class="add-cart-info"> <img src="../assets/icons/add_cart.png" class="add-cart-icon" alt="img1"></div>
          <div class="price-info">
            <div class="main-price">%{{product.price.base}}</div>
           <div class="final-price-box">
             <div class="final-rice">{{product.price.final }}</div>
             <div class="price-Toman">تومان
            </div>
           </div>
          </div>
        </div>
      </div>
    </div>
    <div class="box-item discount" id="discount"> <span>%{{Math.round(((product.price.base-product.price.final) /(product.price.base))*100)}} </span></div>
  </div>
</template>
<script>
export  default {
  props: ['product'],
data(){
  return{
  }
},
  methods:{
  }
}
</script>
