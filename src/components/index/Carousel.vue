<template>
  <div id="myCarousel" class="carousel slide" data-ride="carousel">
    <!-- 轮播（Carousel）指标 -->
    <ol class="carousel-indicators">
      <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
      <li data-target="#myCarousel" data-slide-to="1"></li>
      <li data-target="#myCarousel" data-slide-to="2"></li>
    </ol>
    <!-- 轮播（Carousel）项目 -->
    <div class="carousel-inner" role="listbox">
      <div class="item active">
        <img src="https://s20.postimg.cc/pss3kh7hp/3079382de97c228.jpg" alt="First slide">
        <div class="carousel-caption">标题 1</div>
      </div>
      <div class="item">
        <img src="https://s20.postimg.cc/heh29pvpp/64535234_p0.jpg" alt="Second slide">
        <div class="carousel-caption">标题 2</div>
      </div>
      <div class="item">
        <img src="https://s20.postimg.cc/s1avf3e4t/login.jpg" alt="Third slide">
        <div class="carousel-caption">标题 3</div>
      </div>
    </div>
    <!-- 轮播（Carousel）导航 -->
    <a class="left carousel-control" href="#myCarousel" role="button" data-slide="prev">
      <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
      <span class="sr-only">Previous</span>
    </a>
    <a class="right carousel-control" href="#myCarousel" role="button" data-slide="next">
      <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
      <span class="sr-only">Next</span>
    </a>
  </div>
</template>

<script>
    export default {
        name: "Carousel"
    }
</script>

<style scoped>

</style>
