<template>
  <div class="pagination" >
      <button :disabled="this.startNumandEnd.start<=1" 
                @click="$emit('getPageNo',pageNo-1)">上一页</button>
    <button v-if="this.startNumandEnd.start>1" @click="$emit('getPageNo',1)">1</button>
    
    <button v-if="this.startNumandEnd.start>2">···</button>

    <!-- <button>{{this.startNumandEnd[0]+1}}</button>
    <button>{{this.pageNo-1}}</button>
    <button>{{this.pageNo}}</button>
    <button>{{this.pageNo+1}}</button>
    <button>{{this.pageNo+2}}</button> -->
    <button v-for="(page,index) in startNumandEnd.end" :key="index" 
            :class="{active:page==pageNo}" 
            v-show="page>=startNumandEnd.start" 
            @click="$emit('getPageNo',page)">{{page}}</button>

    <button v-if="startNumandEnd.end<totalPage-1">···</button>
    <button v-if="startNumandEnd.end<totalPage" @click="$emit('getPageNo',totalPage)">
                {{totalPage}}</button>
    <button :disabled="startNumandEnd.end>=totalPage" 
                @click="$emit('getPageNo',pageNo+1)">下一页</button>

    <button style="margin-left: 30px">共 {{total}} 条</button>
  </div>
</template>

<script>
export default {
  name: "Pagination",
  computed:{
      totalPage(){
          return Math.ceil(this.total/this.pageSize);
      },
      startNumandEnd(){
          let start=0,end=0;
          let aside=Math.floor(this.continues/2)
          if(this.totalPage<=this.continues){
              start=0,end=this.totalPage;
          }else{
              start=this.pageNo-aside,end=this.pageNo+aside;
              if(start<1){
                  start=1;end=this.continues;
              }
              if(end>this.totalPage){
                  end=this.totalPage;
                  start=this.totalPage-this.continues+1;
              }
          }
          return {start,end}
      }
  },
  data(){
      return{
        //   pageNo:1,
        //   pageSize:10,
        // continues:3,
      }
  },
  props:["pageNo","pageSize","total","continues"],

};
</script>

<style scoped lang="less">
.pagination {
    text-align: center;
  button {
    margin: 0 5px;
    background-color: #f4f4f5;
    color: #606266;
    outline: none;
    border-radius: 2px;
    padding: 0 4px;
    vertical-align: top;
    display: inline-block;
    font-size: 13px;
    min-width: 35.5px;
    height: 28px;
    line-height: 28px;
    cursor: pointer;
    box-sizing: border-box;
    text-align: center;
    border: 0;

    &[disabled] {
      color: #c0c4cc;
      cursor: not-allowed;
    }

    &.active {
      cursor: not-allowed;
      background-color: #409eff;
      color: #fff;
    }
  }
}
</style>