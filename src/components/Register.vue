<template>
  <div class="container">
    <div class="container card-body">
      <div>
        <form  class="form-body">
          <div class="form-group">
            <label for="Username" style="width: 30px; float: left;">昵称</label>
            <input type="text" class="form-control " name="username" id="Username" value=""  placeholder="请输入昵称">
            <div class="invalid-feedback"></div>
          </div>
          <div class="form-group">
            <label for="Email" style="width: 60px; float: left;">电子邮箱</label>
            <input type="email" class="form-control " name="email" id="Email" value=""  placeholder="请输入邮箱">
            <div class="invalid-feedback"></div>
          </div>
          <div class="form-group">
            <label for="Verification" style="width: 135px; float: left;">邮箱验证码 点击获取</label>
            <input type="text" class="form-control " name="verification" id="Verification" value=""  placeholder="请输入验证码">
            <div class="invalid-feedback"></div>
          </div>
          <div class="form-group">
            <label for="Password" style="width: 30px; float: left;">密码</label>
            <input type="password" class="form-control " name="password" id="Password" value="" placeholder="请输入密码">
            <div class="invalid-feedback"></div>
          </div>
          <div class="form-group">
            <label for="ConfirmPassword" style="width: 60px; float: left;">确认密码</label>
            <input type="password" class="form-control " name="confirmPassword" id="ConfirmPassword" value="" placeholder="请确认密码">
            <div class="invalid-feedback"></div>
          </div>
          <button type="submit" class="btn btn-primary btn-block">注册</button>
        </form>
        <div class="register-main">已有账号？<a class="card-link" href="/login">立即登入</a></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Register'
}
</script>

<style scoped>

.register-main {
  margin-top: 20px;
  font-size: 16px;
  margin-bottom: 20px;
}
.card-body {
  width: 320px;
  min-height: 280px;
  border:1px solid #D0D0D0;
  margin-top: 50px;
}
.form-body {
  margin-top: 30px;
}
</style>
