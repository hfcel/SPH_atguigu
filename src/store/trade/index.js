import { reqAddressInfo,reqOrderInfo } from "@/api"
const state={
    address:[],
    orderInfo:{},
}
const mutations={
    ADDRESSINFO(state,data){
        state.address=data;
    },
    GETORDERINFO(state,data){
        state.orderInfo=data;
    }
}
const actions={
    async addressInfo({commit}){
        let res=await reqAddressInfo();
        // console.log(res);
        if(res.code==200){
            commit("ADDRESSINFO",res.data);
        }
    },
    async getOrderInfo({commit}){
        let res=await reqOrderInfo();
        if(res.code==200){
            commit("GETORDERINFO",res.data);
        }
    }
}
const getters={}
export default {state,mutations,actions,getters}