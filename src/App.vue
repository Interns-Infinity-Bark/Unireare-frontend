<template>
  <div id="app">
    <nav class="navbar navbar-inverse navbar-fixed-top">
      <div class="container">
        <div class="row">
          <div class="navbar-brand col-md-2" style="color: white">{{ProjectName}}</div>
          <router-link to="/index" class="navbar-brand col-md-1">{{IndexButton}}</router-link>
          <router-link to="/publish" class="navbar-brand col-md-1">{{PublishButton}}</router-link>
          <router-link to="/myinfo" class="navbar-brand col-md-1">{{MyInfoButton}}</router-link>
          <router-link to="/login" class="navbar-brand col-md-7 text-right">{{LoginButton}}</router-link>
        </div>
      </div>
    </nav>
    <div class="min-height">
      <router-view></router-view>
    </div>
    <footer class="bottow-height">
      <div class="container">
        <p style="color: white; font-size: 16px; margin-top: 15px" class="text-center">Copyright © 2018 <strong>爱分享</strong>. All Rights Reserved.</p>
        <p><a href="#" class="mr-2"  style="color: white; font-size: 16px">关于我们</a> <a href="mailto:admin@email.sectf.cn"  style="color: white; font-size: 16px">联系我们</a></p>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      ProjectName: '爱分享',
      IndexButton: '首页',
      MyInfoButton: '我的',
      PublishButton: '发布',
      LoginButton: '登入'
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 51px;
}
.min-height {
  min-height: 600px;
}
.bottow-height{
  height: 82px;
  background-color: #737373;
}
</style>
