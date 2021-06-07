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
<style scoped>

.product-item-box {
  margin-bottom: 25px;
  padding: 15px;
  border-radius: 20px;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16);
  background-color: #ffffff;
}
.img {
  width: 100%;
  height: 100%;
}
/*----------------title--------------*/
.main-title {
  margin-top: 7px;
  margin-bottom: 5px;
}
.main-title .title-box{
  display: flex;
  align-items: center;
  width: 100%;
  height: 48px;
}
.main-title .title-box .title-text {
  font-size: 16px;
  font-weight: 500;
  font-stretch:normal;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  letter-spacing: normal;
  color: #333333;
  overflow: hidden;
}


/*--------------------author box---------------------*/

.time-author-box {
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  font-size: 13px;
  margin-bottom: 10px;
}

.author {
  color: #666666;

}
.teacher-icon {
  width: 13px;
  height: 13px;
  margin-left: 6px;

}

.time-icon {
  width: 12px;
  height: 12px;
  margin-left: 6px;

}

.time {
  color: #666666;
}

.box-item {
  display: flex;
  justify-content: center;
  align-items: center;
}

/*-------------------price box----------------------*/
.add-cart-info {
  display: flex;
  justify-content: center;
  align-items: center;
}

.price-info {
  display: flex;
  justify-content: center;
  align-items: baseline;
}

.final-price-box {
  display: flex;
  justify-content: center;
  align-items: center;
}

.price-box {
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
}

.discount {
  width: 54px;
  height: 54px;
  border-radius: 0 20px 0 20px;
  order: -1;
  position: absolute;
  background-color: #ff5050;
  color: white;
  top: 0;
  right: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.main-price {
  color: #ff5050;
  text-decoration: #333333 line-through;
  font-size: 13px;
}

.final-rice {
  margin-left: 6px;
  margin-right: 11px;
  font-size: 18px;
}

.add-cart-icon {
  width: 19px;
  order: 1;
}

.price-box .price-Toman {
  font-size: 13px;
}

@media screen and (max-width: 990px) {

  .price-box .main-price {
    font-size: 18px;
  }
}

@media screen and (max-width: 768px) {
  .product-item-box{
    border-radius: 10px;
  }
  .add-cart-info {
    order: 2;
  }
  .product-item-box {
    padding-bottom: 0;
  }
  .product-item-main-box {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  .product-item-content {
    width: calc(100% - 90px);
    padding-right: 15px;
  }
  .img-box {
    width: 90px;
    height: 90px;
  }
  /*----------------title--------------*/
  .main-title {
    padding: 0;
  }

  /*-------------------price box----------------------*/
  .price-info {
    flex-direction: column;
  }
  .price-box .main-price {
    font-size: 11px;
  }
  .final-price-box {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .discount {
    border-radius: 10px 10px 0 0;
    position: absolute;
    top:auto;
    bottom: 25px;
  }
  .price-box{
    justify-content: flex-end;
  }
  .add-cart-info{
    margin-right: 30px;
  }
}
@media screen and (max-width: 300px) {
  .product-item-content {
    width: calc(100% - 70px);
    padding-right: 10px;
  }
  .img-box {
    width: 70px;
    height: 70px;
  }
}
</style>
