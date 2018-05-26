<template>
    <nav class="navbar" role="navigation">
      <ul class="nav masthead-nav">
        <li><a href="#" @click="newNode">最新笔记</a></li>
        <li><a href="#" @click="hotNode">最热笔记</a></li>
        <form class="navbar-form" role="search">
          <div class="form-group">
            <input type="text" class="form-control" placeholder="请输入关键字">
          </div>
          <button type="submit" class="btn btn-default">搜索</button>
        </form>
      </ul>
    </nav>
</template>

<script>
    export default {
        name: "TitleBar",
      methods:{
        newNode (){
          alert("最新笔记")
        },
        hotNode(){
          alert("最热笔记")
        }
      }
    }
</script>

<style scoped>
  .masthead-nav > * {
    display: inline-block;
    margin-top: 20px;
    margin-left: 20px;
  }
  .masthead-nav > li > a {
    padding-right: 20px;
    padding-left: 20px;
    font-size: 16px;
    font-weight: bold;
    color: rgb(88, 86, 96);
    border-bottom: 2px solid transparent;
  }
  .masthead-nav > li > a:hover,
  .masthead-nav > li > a:focus {
    background-color: transparent;
    border-bottom-color: #000000;
  }
</style>
