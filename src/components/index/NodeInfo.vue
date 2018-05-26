<template>
  <div class="container">
    <div class="row clearfix">
      <div class="col-md-1 column"></div>
      <div class="col-md-4 column">
        <div class="row clearfix node hovereffect">
          <div class="overlay">
            <h4>笔记标题</h4>
            <a class="info" href="#">查看详细信息</a>
          </div>
          <div class="col-md-3 column">
            <img alt="100x100" src="https://s20.postimg.cc/wpqva9g65/100x100.jpg"/>
          </div>
          <div class="col-md-9 column">
            <h3>笔记标题</h3>
            <h5>
              <span class="label label-default">用户名</span>
              <img alt="30x30" src="https://s20.postimg.cc/76yix8h6l/30x30.jpg"/>23
              <img alt="30x30" src="https://s20.postimg.cc/ie7d5pdj1/love_30x30.jpg"/>23
              <img alt="30x30" src="https://s20.postimg.cc/ug2qzv271/shop_30x30.jpg"/>23
            </h5>
          </div>
        </div>
      </div>
      <div class="col-md-2 column"></div>
      <div class="col-md-4 column node hovereffect">
        <div class="row clearfix">
          <div class="overlay">
            <h4>笔记标题</h4>
            <a class="info" href="#">查看详细信息</a>
          </div>
          <div class="col-md-3 column">
            <img alt="100x100" src="https://s20.postimg.cc/wpqva9g65/100x100.jpg"/>
          </div>
          <div class="col-md-9 column">
            <h3>笔记标题</h3>
            <h5>
              <span class="label label-default">用户名</span>
              <img alt="30x30" src="https://s20.postimg.cc/76yix8h6l/30x30.jpg"/>23
              <img alt="30x30" src="https://s20.postimg.cc/ie7d5pdj1/love_30x30.jpg"/>23
              <img alt="30x30" src="https://s20.postimg.cc/ug2qzv271/shop_30x30.jpg"/>23
            </h5>
          </div>
        </div>
      </div>
      <div class="col-md-1 column"></div>
    </div>
    <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
  </div>
</template>

<script>
  export default {
    name: "NodeInfo"
  }
</script>

<style scoped>
.node{
  border: 2px solid rgba(92, 96, 88, 0.66);
}
.hovereffect{
  -webkit-transition:all .3s linear;
  transition:all .3s linear;
}
.hovereffect:hover{
  -ms-transform:scale(1.1);
  -webkit-transform:scale(1.1);
  transform:scale(1.1);
}
.hovereffect .overlay {
  width:100%;
  height:100%;
  position:absolute;
  overflow: hidden;
  z-index: 1;
  opacity:0;
  background-color: rgba(7, 5, 15, 0.5);
  -webkit-transition:all .4s ease-in-out;
  transition:all .4s ease-in-out
}
.hovereffect a.info {
  text-decoration:none;
  display:inline-block;
  text-transform:uppercase;
  color:#fff;
  border:2px solid #fff;
  background-color:transparent;
  opacity:0;
  filter:alpha(opacity=0);
  -webkit-transition:all .2s ease-in-out;
  transition:all .2s ease-in-out;
  margin:0 auto;

}
.hovereffect a.info:hover {
  box-shadow:0 0 5px #fff;
}
.hovereffect:hover .overlay {
  opacity:1;
  filter:alpha(opacity=100);
}
.hovereffect:hover h4,.hovereffect:hover a.info {
  opacity:1;
  filter:alpha(opacity=100);
  -ms-transform:translatey(0);
  -webkit-transform:translatey(0);
  transform:translatey(0);
}
.hovereffect h4 {
  text-transform:uppercase;
  color:#fff;
  text-align:center;
  position:relative;
  font-size:17px;
  background:rgba(0,0,0,0.6);
  -webkit-transform:translatey(-100px);
  -ms-transform:translatey(-100px);
  transform:translatey(-100px);
  -webkit-transition:all .2s ease-in-out;
  transition:all .2s ease-in-out;
  padding:10px;
}
.hovereffect:hover a.info {
  -webkit-transition-delay:.2s;
  transition-delay:.2s;
}
</style>
