<template>
  <div>
    <div class="img-box">
      <img src="@/assets/images/img1.jpg" class="img" alt="img1">
      img</div>
    <div class="content"
    >
      content
      <div class="main-title">
        title
      </div>
      <div class="time-author-box">
        <div class="author">
          <div></div>
          <div></div>
        </div>
        <div class="time">
          <div></div>
          <div></div>
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
  height: 230px;

}
.img-box{
  padding: 15px;
}
@media only screen and (max-width:375px){

  .img{
    background-color: blue;

  }
}
</style>