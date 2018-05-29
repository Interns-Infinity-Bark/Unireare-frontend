<!--suppress ALL -->
<template>
  <div class="form-horizontal">
    <div class="form-group">
      <img @click = "imgClick" class="col-sm-offset-4 avatar avatar-lg"
           :class = "{pointer:flag == true}"
           alt="100x100" src="https://s20.postimg.cc/wpqva9g65/100x100.jpg"
      />
      <br>
      <input id="upload_avatar" class="d-none" type="file" accept="image/*"/>
    </div>
    <div class="form-group">
      <label class="col-md-4 control-label" for="nickname">昵称：</label>
      <div class="col-md-4">
        <label v-if="!flag" class="control-label" for="nickname">123</label>
        <input v-if="flag" type="text" class="form-control" name="nickname" id="nickname" value="" placeholder="请输入昵称"/>
      </div>
    </div>
    <div class="form-group">
      <label class="col-md-4 control-label" for="school">学校：</label>
      <div class="col-md-4">
        <label v-if="!flag" class="control-label" for="school">123</label>
        <input v-if="flag" type="text" class="form-control" name="school" id="school" value="" placeholder="请输入学校"/>
      </div>
    </div>
    <div class="form-group">
      <label class="col-md-4 control-label" for="major">专业：</label>
      <div class="col-md-4">
        <label v-if="!flag" class="control-label" for="major">123</label>
        <input v-if="flag" type="text" class="form-control" name="major" id="major" value="" placeholder="请输入专业"/>
      </div>
    </div>
    <div class="form-group">
      <label class="col-md-4 control-label" for="tel">电话：</label>
      <div class="col-md-4">
        <label v-if="!flag" class="control-label" for="tel">123</label>
        <input v-if="flag" type="text" class="form-control" name="tel" id="tel" value="" placeholder="请输入电话"/>
      </div>
    </div>
    <div class="form-group">
      <label class="col-md-4 control-label" for="motto">个性签名：</label>
      <div class="col-md-4">
        <label v-if="!flag" class="control-label" for="motto">123</label>
        <input v-if="flag" type="text" class="form-control" name="motto" id="motto" value="" placeholder="请输入个性签名"/>
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
    img {
      vertical-align: middle;
      border-style: none;
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
