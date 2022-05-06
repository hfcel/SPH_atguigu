<template>
  <div class="swiper-container" ref="ss">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="(img,index) in skuImageList" :key="img.id" 
            @click="changeIndex(index)">
        <img :src="img.imgUrl" :class="{active:index==currentIndex}" @click="sendImg(index)">
      </div>
    </div>
    <div class="swiper-button-next"></div>
    <div class="swiper-button-prev"></div>
  </div>
</template>

<script>

  import Swiper from 'swiper'
  export default {
    name: "ImageList",
    props:['skuImageList'],
    data(){
      return {
        currentIndex:0,
      }
      
    },
    methods:{
      changeIndex(index){
        this.currentIndex=index;
        // console.log(index)
      },
      sendImg(index){
        this.$bus.$emit("sendImg",index)
      }
    },
    watch:{
      skuImageList(newVal,oldVal){
        this.$nextTick(()=>{
          var mySwiper = new Swiper(this.$refs.ss, {
            //   direction: "vertical", // 垂直切换选项
            // loop: true, // 循环模式选项

            // 如果需要分页器
            // pagination: {
            //   el: ".swiper-pagination",
            //   clickable: true,
            // },

            // 如果需要前进后退按钮
            navigation: {
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            },

            // 如果需要滚动条
            // scrollbar: {
            //   el: ".swiper-scrollbar",
            // },
            slidesPerView:3,
            slidesPerGroup:1,
          });
        })
      }
    },

  }
</script>

<style lang="less" scoped>
  .swiper-container {
    height: 56px;
    width: 412px;
    box-sizing: border-box;
    padding: 0 12px;

    .swiper-slide {
      width: 56px;
      height: 56px;

      img {
        width: 100%;
        height: 100%;
        border: 1px solid #ccc;
        padding: 2px;
        width: 50px;
        height: 50px;
        display: block;

        &.active {
          border: 2px solid #f60;
          padding: 1px;
        }

        // &:hover {
        //   border: 2px solid #f60;
        //   padding: 1px;
        // }
      }
    }

    .swiper-button-next {
      left: auto;
      right: 0;
    }

    .swiper-button-prev {
      left: 0;
      right: auto;
    }

    .swiper-button-next,
    .swiper-button-prev {
      box-sizing: border-box;
      width: 12px;
      height: 56px;
      background: rgb(235, 235, 235);
      border: 1px solid rgb(204, 204, 204);
      top: 0;
      margin-top: 0;
      &::after {
        font-size: 12px;
      }
    }
  }
</style>