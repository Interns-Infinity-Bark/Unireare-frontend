<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-2 column">
        <br><br><br>
        <vertical-title-bar
        @titleClick = "handleClick"
        ></vertical-title-bar>
      </div>
      <div class="col-lg-10 column">
          <h2>{{title}}</h2>
          <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import VerticalTitleBar from "./my_info/VerticalTitleBar";
import PersonalInfo from "./my_info/PersonalInfo";
export default {
  name: 'MyInfo',
  components: {PersonalInfo, VerticalTitleBar},
  data(){
    return{
      title:'我发布的笔记'
    }
  },
  created: function(){
    this.$router.push({name: 'my_node_info'})
  },
  methods:{
    handleClick(item,index){
      this.title = item
      if (index < 3) {
        this.$router.push({name:'my_node_info'})
      }
      else if(index == 4){
        this.$router.push({name:'personal_info'})
      }
      else if(index == 5){
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
