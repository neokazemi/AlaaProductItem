<template>
  <div class="container">
    <div class="img-box">
      <img src="@/assets/images/img1.jpg" class="img" alt="img1">
      img</div>
    <div class="content"
    >
      content
      <div class="main-title">
         همایش آرش جمع بندی علوم و فنون
ادبی کنکور
      </div>
      <div class="time-author-box">
        <div class="author">
            <div class="item">A</div>
       <div>محمد صادقی</div>
        
        </div>
        <div class="time">
           <div class="item">B</div>
          <div>20 ساعت</div>
         
        </div>
      </div>
      <div>
        <div class="priceBox">
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div class="discount"></div>
        <div class="icon"></div>
      </div>

    </div>
  </div>
</template>

<style scoped>
.img{
  width: 100%;
  height: 100%;

}
.img-box{

}
.time-author-box{
 display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
}
.author{
   display: flex;
  flex-wrap: nowrap;

}
.time{
     display: flex;
  flex-wrap: nowrap;

}
.item{
  padding-left:6px ;
}
.container{
  padding: 15px;
}
@media only screen and (max-width:375px){

  .img{
    background-color: blue;

  }
}
</style>