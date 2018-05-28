<template>
  <form>
    <div class="form-group">
      <label for="Username">昵称：</label>
      <input type="text" class="form-control " name="username" id="Username" value=""  placeholder="请输入昵称">
    </div>
    <div class="form-group">
      <label for="Password">密码:</label>
      <input type="password" class="form-control " name="password" id="Password" value="" placeholder="请输入密码">
    </div>
    <div class="form-group">
      <label for="ConfirmPassword">确认密码：</label>
      <input type="password" class="form-control " name="confirmPassword" id="ConfirmPassword" value="" placeholder="请确认密码">
    </div>
    <button type="submit" class="btn btn-primary">编辑</button>&emsp;
    <button type="submit" class="btn btn-primary">保存</button>
  </form>
</template>

<script>
    export default {
        name: "PersonalInfo"
    }
</script>

<style scoped>
label{
  float: left;
}
</style>
