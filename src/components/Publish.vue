<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-md-12" style="margin-top: 50px">
          <div class="panel-group" id="accordion">
            <div class="panel panel-primary">
              <div class="panel-heading">
                <h4 class="panel-title">
                  <span class="glyphicon glyphicon-file">
                  </span>发表笔记
                </h4>
              </div>
              <div id="collapseOne" class="panel-collapse collapse in">
                <div class="panel-body">
                  <div class="row">
                    <div class="col-md-12">
                      <div class="col-md-2">
                        <div class="form-group">

                          <input type="text" class="form-control" placeholder="科目" required/>
                        </div>
                      </div>
                      <div class="col-md-10">
                        <div class="form-group">

                          <input type="text" class="form-control" placeholder="标题" required/>
                        </div>
                      </div>
                      <div class="col-md-12">
                        <div class="form-group">
                          <div class="col-center-block">
                            <div ref="editor" style="text-align:left" id="div1">
                              <p>爱分享</p></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-2  ">
                    <div class="form-group">
                      <select class="form-control" id="category" @change="dochange">
                        <option value="2">收费</option>
                        <option value="1">免费</option>
                      </select>
                    </div>
                  </div>
                  <div class="col-md-2">
                    <div class="form-group">
                      <input type="text" class="form-control" id="tags" placeholder="价格"/>
                    </div>
                  </div>
                  <div class="col-md-offset-8">
                    <button v-on:click="getContent" type="submit" class="btn btn-sm btn-danger">
                      <span class="glyphicon glyphicon-floppy-disk"></span>保存草稿
                    </button>
                    <button type="button" class="btn btn-default btn-sm col-md-offset-1">
                      <span class="glyphicon glyphicon-eye-open"></span>预览
                    </button>
                    <button v-on:click="getContent" type="submit" class="btn btn-success btn-sm col-md-offset-1">
                      <span class="glyphicon glyphicon-upload"></span>发表
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import E from 'wangeditor'


  export default {
    name: 'editor',
    data() {
      return {
        editorContent: ''
      }
    },
    methods: {
      getContent: function () {
        alert(this.editorContent)
      },
      dochange: function () {
        var checkVal = $("#category").find("option:selected").val();
        if (checkVal == "1") {
          $("#tags").attr("disabled", true);
        } else {
          $("#tags").attr("disabled", false);
        }
      }
    },
    mounted() {
      var editor = new E(this.$refs.editor)
      editor.customConfig.onchange = (html) => {
        this.editorContent = html
      }
      editor.customConfig.menus = [
        'head',
        'bold',
        'italic',
        'underline',
        'foreColor',
        'backColor',
        'link',
        'justify',  // 对齐方式
        'quote',  // 引用
        'emoticon',  // 表情
        'image',  // 插入图片
        'code',  // 插入代码
        'undo',  // 撤销
        'redo'  // 重复
      ]
      editor.customConfig.uploadImgServer = '127.0.0.1:8080/upload'
      editor.create()
    }


  }


</script>

<style>
  .col-center-block {
    float: none;
    display: block;
    margin-left: auto;
    margin-right: auto;
  }


</style>
