<template>
  <div class="container">
    <div class="container card-body">
      <div>
        <form  class="form-body">
          <div class="form-group">
            <label for="电子邮箱_305451519" style="width: 60px; float: left;">电子邮箱</label>
            <input type="email" class="form-control " name="email" id="电子邮箱_305451519" value=""  placeholder="请输入邮箱">
            <div class="invalid-feedback"></div>
          </div>
          <div class="form-group">
            <label for="密码_305451519" style="width: 30px; float: left;">密码</label>
            <input type="password" class="form-control " name="password" id="密码_305451519" value="" placeholder="请输入密码">
            <div class="invalid-feedback"></div>
          </div>
          <button type="submit" class="btn btn-primary btn-block">登录</button>
        </form>
        <div class="register-div">没有帐号？<a class="card-link" href="/register">立即注册</a></div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Login'
}
</script>

<style scoped>
.register-div {
  margin-top: 20px;
  font-size: 16px;
  margin-bottom: 20px;
}
.card-body {
  width: 320px;
  min-height: 280px;
  border:1px solid #D0D0D0;
  margin-top: 150px;
}
.form-body {
  margin-top: 30px;
}
</style>
