//search模块的小仓库
import { reqGetSearchInfo } from "@/api"
const state = {
    searchList:{},
}
const actions = {
    async searchList({commit},data={}){
        let res=await reqGetSearchInfo(data);
        // console.log(res)
        if(res.code==200){
            commit("SEARCHLIST",res.data);
        }
    }
}
const mutations = {
    SEARCHLIST(state,data){
        state.searchList=data;
    }
}
const getters = {
    goodsList:state=>state.searchList.goodsList||[],
    attrsList:state=>state.searchList.attrsList||[],
    trademarkList:state=>state.searchList.trademarkList||[],
}
 
export default {state,actions,mutations,getters}