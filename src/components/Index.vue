<template>
  <div class="container">
    <carousel></carousel>
    <title-bar></title-bar>
    <hr>
    <node-info></node-info>
  </div>
</template>

<script>
import Carousel from './index/Carousel'
import NodeInfo from './index/NodeInfo'
import Titlebar from './index/TitleBar'
export default {
  name: 'Index',
  components:{
    'carousel':Carousel,
    'node-info':NodeInfo,
    'title-bar':Titlebar
  }
}
</script>

<style scoped>
  hr{
    height:2px;
    border:none;
    border-top:2px solid #c58aad;
   }
</style>
