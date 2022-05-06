import { reqCategoryList,reqGetBannerList,reqFloorList } from "@/api"
//home模块的小仓库
const state = {
    categoryList:[],
    bannerList:[],
    floorList:[],
}
const actions = {
    async categoryList({commit}){
        let res=await reqCategoryList();
        if(res.code==200){
            // console.log(res)
            commit("CATEGORYLIST",res.data);
        }else{

        }
    },
    async getBannerList({commit}){
        let res=await reqGetBannerList();
        // console.log(res)
        if(res.code==200){
            commit("GETBANNERLIST",res.data)
        }
    },
    async getFloorList({commit}){
        let res=await reqFloorList();
        if(res.code==200){
            commit("GETFLOORLIST",res.data)
            // console.log(res)
        }
    }
}
const mutations = {
    CATEGORYLIST(state,data){
        state.categoryList=data;
    },
    GETBANNERLIST(state,data){
        state.bannerList=data;
    },
    GETFLOORLIST(state,data){
        state.floorList=data;
    }
}
const getters = {
    
}
 
export default {state,actions,mutations,getters}