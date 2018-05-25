<template>
  <div>
    <div>this is index</div>
    <div>{{status}}</div>
    <div>{{msg}}</div>
    <div>{{data.title}}</div>
    <div>{{data.content}}</div>
    <div>{{data.text}}</div>
  </div>
</template>

<script>
export default {
  name: 'Index',
  data () {
    return {
      status: 'Ninaye1',
      msg: 'Ninaye2',
      data: {}
    }
  },
  created (){
    this.recommend()
  },
  methods: {
    recommend: function () {
      var self = this
      $.ajax({
        url: 'https://sectf.cn/api/',
        type: 'get',
        data: {}
      }).then(function (res) {
        self.status = res.status
        self.msg = res.msg
        self.data = res.data
      }).fail(function () {
        console.log('失败')
      })
    }
  }
}
</script>

<style scoped>

</style>
