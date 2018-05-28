<template>
  <div class="sidebar">
    <ul class="nav nav-stacked nav-pills">
      <li
      v-for="(item, index) of list"
      :key="index"
      :class = "{active: iscur == index}"
      @click = "handleClick(index,item)"
      ><a href="#">{{item}}</a></li>
    </ul>
  </div>

</template>

<script>
    export default {
        name: "VerticalTitleBar",
      data(){
          return{
            iscur:0,
            list:['我发布的笔记','我收藏的笔记','我购买的笔记','草稿箱','个人信息'],
          }
      },
      methods:{
          handleClick (index,item){
            this.iscur = index;
            this.$emit('titleClick',item,index)
          }
      }
    }
</script>

<style scoped>
  .sidebar {
    display: none;
  }
  @media (min-width: 768px) {
    .sidebar {
      bottom: 0;
      z-index: 100;
      display: block;
      overflow-x: hidden;
      overflow-y: auto; /* Scrollable contents if viewport is shorter than content. */
      background-color: #f5f5f5;
      border-right: 1px solid #eee;
    }
  }

</style>
