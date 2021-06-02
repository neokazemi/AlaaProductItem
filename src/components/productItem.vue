<template>
  <div class="product-item-box ">
  <div class="product-item-main-box">
    <a href="#" class="img-box">
      <img :src="product.image" class="img" alt="img1">
     </a>

    <div class="product-item-content">

      <div class="main-title">
        <a href="#" class="title-text">
         {{product.title
          }}
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
      <div>
        <div class="price-box">
          <div class="box-item"> <img src="../assets/icons/add_cart.png" class="add-cart-icon" alt="img1"></div>

          <div class="box-item">
            <div class="main-price">%{{product.price.base}}</div>
            <div class="final-rice">{{product.price.final }}</div>
            <div>تومان</div>
          </div>
        </div>
      </div>

    </div>
    <div class="box-item discount"> <span>%{{Math.round(((product.price.base-product.price.final) /(product.price.base))*100)}} </span></div>
  </div>
  </div>
</template>
<script>

export  default {
  props: ['product'],
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
  padding: 15px;
  width: 100%;
  border-radius: 20px;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16);
  background-color: #ffffff;

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
  order: 1;
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
  add-cart-icon{
    order: 5;
  }
  main-price{

  }
  final-rice{

  }
  .discount{
   border-radius: 10px 10px 0 0;
    position: absolute;
    top:auto;
    bottom: 0px ;
  right: 40%;

  }

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
