<template>
  <div>
    <TypeNav/>
      <ListContainer/>
      <TodayRecommend/>
      <Rank/>
      <Like/>
      <Floor v-for="(floor,index) in floorList" :key=floor.id 
      :list="floor"/>
      <Brand/>
  </div>
</template>

<script>
import ListContainer from "@/pages/Home/ListContainer"
import TodayRecommend from "@/pages/Home/TodayRecommend"
import Rank from "@/pages/Home/Rank"
import Like from "@/pages/Home/Like"
import Floor from "@/pages/Home/Floor"
import Brand from "@/pages/Home/Brand"
import {mapState} from 'vuex'
import { reqFloorList } from '@/api'
export default {
  components:{
    ListContainer,TodayRecommend,Rank,Like,Floor,Brand
  },
  mounted(){
    this.$store.dispatch("getFloorList");
    // this.$store.dispatch('getUserInfo');
  },
  computed:{
    ...mapState({
      floorList:state=>state.home.floorList,
    }),
  }
}
</script>

<style>

</style>