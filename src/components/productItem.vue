<template>
  <div class="product-item-box ">
  <div class="product-item-main-box">
    <div class="img-box">
      <img src="@/assets/images/img1.jpg" class="img" alt="img1">
     </div>
    <div class="product-item-content">

      <div class="main-title">
        <span class="title-text">
          همایش آرش جمع بندی علوم و فنون
ادبی کنکور
        </span>

      </div>
      <div class="time-author-box">
        <div class="box-item">
          <img src="../assets/icons/teacher.png" class="teacher-icon" alt="img1">
          <span class="author">
          محمد صادقی
         </span>

        </div>
        <div class="box-item">
          <img src="../assets/icons/time.png" class="time-icon" alt="img1">
          <span class="time"> {{20 | persianDigit }} ساعت</span>

        </div>
      </div>
      <div>
        <div class="price-box">
          <div class="box-item"> <img src="../assets/icons/add_cart.png" class="add-cart-icon" alt="img1"></div>
          <div class="box-item discount"> <span>{{ discount | persianDigit }} </span></div>
          <div class="box-item">
            <div class="main-price">{{ price | persianDigit }}</div>
            <div class="final-rice">{{ finalPrice | persianDigit }}</div>
            <div class="price-Toman">تومان</div>
          </div>
        </div>
      </div>

    </div>
  </div>
  </div>
</template>
<script>

export  default {
data(){
  return{
    price:1500,
    discount:'30%',
    finalPrice:1200,

  }
},
  methods:{
    discountPercent(){
      return  this.discount=(this.finalPrice/this.price)
    }
  }
}
</script>
<style scoped>
.product-item-box {
  margin-bottom: 25px;
}
.img{
  width: 100%;
  height: 100%;
}
/*----------------title--------------*/
.main-title{
  padding: 20px 0 15px 0;
}
.main-title title-text{
  width: 100%;
  font-size: 16px;
  font-weight: 500;
  font-stretch: normal;
  line-height: 1.5;
  letter-spacing: normal;
  color: #333333;

}
/*--------------------author box---------------------*/

.time-author-box{
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  font-size: 13px;
}
.author{
  color: #666666;

}
.teacher-icon{
  width: 13px;
  height: 13px;
  margin-left: 6px;

}
.time-icon{
  width: 12px;
  height: 12px;
  margin-left: 6px;

}
.time{
  color: #666666;
}
.box-item{
  display: flex;
  justify-content: center;
  align-items: center;
}
/*-------------------price box----------------------*/
.price-box{
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
}
.discount{
  width: 54px;
  height: 54px;
  border-radius: 0 20px 0 20px;
  order: -1;
  position: absolute;
  background-color: #ff5050;
  color: white;
  top: 0 ;
  right: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.main-price{
  color: #ff5050;
  text-decoration: #333333 line-through;
  margin-left: 6px;
  font-size: 13px;
}
.final-rice{
  margin-left: 6px;
  font-size: 18px;
}
.discount span{
  width: 35px;
}
.add-cart-icon{
  width: 19px;
}
.price-box .price-Toman{
  font-size: 13px;
}
@media only screen and (max-width:1200px){


}
@media only screen and (max-width:990px){

  .price-box .main-price{
    font-size: 18px;
  }
}
@media only screen and (max-width:768px){
.product-item-main-box{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
  .product-item-content{
    width: calc( 100% - 90px );
    padding-right: 15px;
  }
  .img-box{
    width: 90px;
    height: 90px;
  }

  /*----------------title--------------*/
  .main-title{
    padding:  0;
  }
  /*-------------------price box----------------------*/
  add-cart-icon{}
  main-price{}
  final-rice{}

}
@media only screen and (max-width:300px){
  .product-item-content{
    width: calc( 100% - 70px );
    padding-right: 10px;
  }
  .img-box{
    width: 70px;
    height: 70px;
  }
}
</style>
