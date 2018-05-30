<template>
  <div>
    <br>
    <div class="row clearfix">
      <div class="col-md-5 column">
        <div class="row clearfix node hovereffect">
          <div class="overlay">
            <h4>笔记标题</h4>
            <a class="info" href="#" @click="nodeClick">查看详细信息</a>
          </div>
          <div class="col-md-3">
            <img class="avatar avatar-lg" alt="100x100" src="https://s20.postimg.cc/wpqva9g65/100x100.jpg"/>
          </div>
          <div class="col-md-9">
            <h3>笔记标题</h3>
            <h5>
              <span class="label label-default label-info">用户名</span>
              <img src="../../../static/img/交流.svg" />23
              <img src="../../../static/img/收藏.svg"/>23
              <img src="../../../static/img/购物车下单.svg" />23
            </h5>
          </div>
        </div>
      </div>
      <div class="col-sm-offset-2 col-md-5 column">
        <div class="row clearfix node hovereffect">
          <div class="overlay">
            <h4>笔记标题</h4>
            <a class="info" href="#">查看详细信息</a>
          </div>
          <div class="col-md-3 column">
            <img class="avatar avatar-lg" alt="100x100" src="https://s20.postimg.cc/wpqva9g65/100x100.jpg"/>
          </div>
          <div class="col-md-9 column">
            <h3>笔记标题</h3>
            <h5>
              <span class="label label-default label-info">用户名</span>
              <img src="../../../static/img/交流.svg" />23
              <img src="../../../static/img/收藏.svg"/>23
              <img src="../../../static/img/购物车下单.svg" />23
            </h5>
          </div>
        </div>
      </div>
    </div>
    <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
  </div>
</template>

<script>
  export default {
    name: "MyNodeInfo",
    methods:{
      nodeClick(){
        this.$router.push({path: '/detail'})
      }
    }
  }
</script>

<style scoped>
  .node{
    border: 1px solid rgba(92, 96, 88, 0.66);
    border-radius:25px;
    -moz-border-radius:25px;
  }
  .hovereffect{
    -webkit-transition:all .3s linear;
    transition:all .3s linear;
  }
  .hovereffect >div{
    border-radius:25px;
    -moz-border-radius:25px;
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
  @media (min-width: 768px){
    .avatar-lg {
      width: 70px;
      height: 70px;
    }
  }
  .avatar-lg {
    width: 100px;
    height: 100px;
  }
  .avatar {
    border-radius: 50%;
    -webkit-box-shadow: 0 0 0.5em rgba(0,0,0,.25);
    box-shadow: 0 0 0.5em rgba(0,0,0,.25);
  }
</style>
