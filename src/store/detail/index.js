import { reqGoodsInfo,reqAddorUpdateShopCart } from "@/api"
import getuuid from "@/utils/uuid_token"
const state={
    goodsInfo:{},
    uuid_token:getuuid(),
}
const mutations={
    GOODSINFO(state,data){
        state.goodsInfo=data
    }
}
const actions={
    async goodsInfo({commit},val){
        let res=await reqGoodsInfo(val);
        // console.log(res) 
        if(res.code==200){
            commit("GOODSINFO",res.data)
        }
    },
    async addorUpdateShopCart({commit},{skuId,skuNum}){
        let res=await reqAddorUpdateShopCart(skuId,skuNum)
        // console.log(res)
        if(res.code==200){
            return 'ok'
        }else{
            return Promise.reject(new Error('faile'))
        }
    }
}
const getters={
    categoryView(state){
        return state.goodsInfo.categoryView||{};
    },
    skuInfo(state){
        return state.goodsInfo.skuInfo||{};
    },
    spuSaleAttrList(state){
        return state.goodsInfo.spuSaleAttrList||[];
    }
}
export default {
    state,mutations,actions,getters
}