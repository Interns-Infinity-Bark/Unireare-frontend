<template>
  <div class="form-horizontal">
    <br>
    <div class="form-group">
      <label class="col-md-4 control-label" for="OldPassword">原密码：</label>
      <div class="col-md-4">
        <input type="password" class="form-control " name="oldpassword" id="OldPassword" value="" placeholder="请输入密码"/>
      </div>
    </div>
    <div class="form-group">
      <label class="col-md-4 control-label" for="Password">新密码：</label>
      <div class="col-md-4">
        <input type="password" class="form-control " name="password" id="Password" value="" placeholder="请输入密码"/>
      </div>
    </div>
    <div class="form-group">
      <label class="col-md-4 control-label" for="ConfirmPassword">确认密码：</label>
      <div class="col-md-4">
        <input type="password" class="form-control " name="confirmPassword" id="ConfirmPassword" value=""
               placeholder="请确认密码"/>
      </div>
    </div>
    <div class="form-group">
      <br>
        <button type="submit" class="btn btn-warning btn-lg"> 更新密码 </button>
    </div>
  </div>
</template>

<script>
    export default {
        name: "UptadePassword"
    }
</script>

<style scoped>

</style>
