<template>
  <div class="container">
    <div class="row">
      <div class="col-md-2 column">
        <br><br><br>
        <vertical-title-bar
        @titleClick = "handleClick"
        ></vertical-title-bar>
      </div>
      <div class="col-md-10 column">
        <div class="row">
          <h2 class="col-md-offset-1">{{title}}</h2>
        </div>
          <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import VerticalTitleBar from "./my_info/VerticalTitleBar"
export default {
  name: 'MyInfo',
  components: {VerticalTitleBar},
  data(){
    return{
      title:'我发布的笔记'
    }
  },
  created(){
    this.$router.push({name: 'my_node_info'})
  },
  methods:{
    handleClick(item,index){
      this.title = item
      if (index <= 2) {
        this.$router.push({name:'my_node_info'})
      }
      else if(index === 4){
        this.$router.push({name:'personal_info'})
      }
      else if(index === 5){
        this.$router.push({name:'update_password'})
      }
    }
  }
}
</script>

<style scoped>
/*.box{*/
  /*border: 1px solid black;*/
/*}*/
</style>
