<!--suppress ALL -->
<template>
  <div class="form-horizontal">
    <div class="form-group">
      <img @click = "imgClick" class="col-md-offset-4 img-circle"
           :class = "{pointer:flag == true}"
           alt="100x100" src="https://s20.postimg.cc/wpqva9g65/100x100.jpg"
      />
      <br>
      <input id="upload_avatar" class="d-none" type="file" accept="image/*"/>
    </div>
    <div class="form-group">
      <label class="col-md-4 control-label" for="Username">昵称：</label>
      <div class="col-md-4">
        <label v-if="!flag" class="control-label" for="Username">123</label>
        <input v-if="flag" type="text" class="form-control" name="username" id="Username" value="" placeholder="请输入昵称"/>
      </div>
    </div>
    <div class="form-group">
      <label class="col-md-4 control-label" for="Password">密码：</label>
      <div class="col-md-4">
        <label v-if="!flag" class="control-label" for="Username">123</label>
        <input v-if="flag" type="password" class="form-control " name="password" id="Password" value="" placeholder="请输入密码"/>
      </div>
    </div>
    <div class="form-group">
      <label class="col-md-4 control-label" for="ConfirmPassword">确认密码：</label>
      <div class="col-md-4">
        <label v-if="!flag" class="control-label" for="Username">123</label>
        <input v-if="flag" type="password" class="form-control " name="confirmPassword" id="ConfirmPassword" value=""
               placeholder="请确认密码"/>
      </div>
    </div>
    <div class="form-group">
      <br>
      <div class="col-md-offset-5 col-md-1">
        <button v-if="!flag" @click="flag = !flag" type="submit" class="btn btn-primary btn-lg"> 编辑 </button>
        <button v-if="flag" @click="saveClick" type="submit" class="btn btn-primary btn-lg"> 保存 </button>
      </div>
    </div>

  </div>
</template>

<script>
  export default {
    name: "PersonalInfo",
    data() {
      return {
        flag: false
      }
    },
    methods:{
      imgClick(){
        if(!this.flag)return
        document.getElementById('upload_avatar').click()
      },
      saveClick(){
        this.flag = !this.flag
      }
    }
  }
</script>

<style scoped>
  img {
    display: block;
  }
  .pointer{
    cursor: pointer;
  }
  label {
    float: left;
    display: block;
  }
  .d-none{
    display: none;
  }
</style>
