import Vue from 'vue'
import App from './App.vue'
import VueLazyload from 'vue-lazyload'
import router from './router'
import TypeNav from '@/components/TypeNav'
import Carousel from '@/components/Carousel'
import store from '@/store'
import Pagination from '@/components/Pagination'
import "@/mock/mockServe"
import 'swiper/css/swiper.css'
import * as API from '@/api'
import {MessageBox} from 'element-ui';
import atm from '@/assets/1.gif'
// console.log(API)
Vue.config.productionTip = false
Vue.component(TypeNav.name,TypeNav);
Vue.component(Carousel.name,Carousel);
Vue.component(Pagination.name,Pagination)
Vue.prototype.$msgbox=MessageBox;
Vue.prototype.$alert=MessageBox.alert;
// import {reqCategoryList} from '@/api'
// console.log(reqCategoryList())


import '@/plugins/validate'
Vue.use(VueLazyload,{
  loading:atm,
});
new Vue({
  render: h => h(App),
  beforeMount(){
    Vue.prototype.$bus=this;
    Vue.prototype.$API=API;
  },
  router,
  store,
}).$mount('#app')
