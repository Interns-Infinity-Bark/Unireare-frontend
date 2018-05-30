<!--suppress ALL -->
<template>
  <div class="form-horizontal">
    <div class="form-group">
      <div class="col-md-offset-3 col-md-2">
        <img @click = "imgClick" class="avatar avatar-lg"
             :class = "{pointer:flag == true}"
             alt="100x100" src="https://s20.postimg.cc/wpqva9g65/100x100.jpg"
        />
        <input id="upload_avatar" class="d-none" type="file" accept="image/*"/>
      </div>
      <div class="col-md-4">
        <br><br>
        <input v-show="motto_flag" type="text" class="form-control"
               name="motto" id="motto" value="1111111"
               placeholder="请输入个性签名"
               @blur="wowowo"
        />
        <label v-show="!motto_flag" class="control-label" for="motto" @click="ninini">这是我的个性签名</label>
      </div>
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
      <br>
      <div>
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
        flag: false,
        motto_flag: false
      }
    },
    methods:{
      imgClick(){
        if(!this.flag)return
        document.getElementById('upload_avatar').click()
      },
      saveClick(){
        this.flag = !this.flag
      },
      ninini(){
        this.motto_flag = true
      },
      wowowo(){
        this.motto_flag = false
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
