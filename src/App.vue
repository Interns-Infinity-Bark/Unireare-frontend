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
    <div class="container">
      <router-view></router-view>
    </div>
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
  margin-top: 60px;
}
</style>
