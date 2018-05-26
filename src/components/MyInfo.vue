<template>
  <div>
    <main class="container">
      <div>
        <div class="row">
          <div class="col">
            <div class="text-center user-center">
              <div>
                <img :src="imgSrc">
              </div>
              <p>{{userName}}</p>
              <p>{{email}}</p>
            </div>
          </div>
        </div>
      </div>
    </main>
    <div>this is myinfo</div>
  </div>
</template>

<script>
import '../../static/bootstrap-3.3.7-dist/js/jquery'
import '../../static/bootstrap-3.3.7-dist/js/bootstrap'
export default {
  name: 'MyInfo',
  data () {
    return {
      userName: 'Ninaye',
      email: '734389987',
      imgSrc: '../../static/img/logo.png'
    }
  }
}
</script>

<style scoped>
@import "../../static/bootstrap-3.3.7-dist/css/bootstrap.css"
.user-center {
  position: relative;
  margin-top: 45px;
}
</style>
