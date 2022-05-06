import { reqCartList,reqDeleteCartById,reqUpdateCheckedByid } from "@/api"
const state={
    cartList:[],
}
const actions={
    async cartList({commit}){
        let res=await reqCartList();
        // console.log(res)
        if(res.code==200){
            commit('CARTLIST',res.data)
        }
    },
    async deleteCartBySkuId({commit},skuId){
        let res=await reqDeleteCartById(skuId)
        // console.log(res)
        if(res.code==200){
            return 'ok'
        }else{
            return Promise.reject(new Error('faile'))
        }
    },
    async updateCheckedByid({commit},{skuId,isChecked}){
        let res=await reqUpdateCheckedByid(skuId,isChecked)
        if(res.code==200){
            return 'ok'
        }else{
            return Promise.reject(new Error('faile'))
        }
    },
    deleteAllCheckedCart({dispatch,getters}){
        let promiseAll=[]
        getters.cartList.cartInfoList.forEach(item=>{
            let promise=item.isChecked==1?dispatch('deleteCartBySkuId',item.skuId):""
            promiseAll.push(promise)
        })
        return Promise.all(promiseAll)
    },
    updateAllCheck({dispatch,getters},checked){
        // alert("@@@",checked)
        console.log(checked)
        let promiseAll=[]
        getters.cartList.cartInfoList.forEach(item=>{
            let ifCheck=checked?'1':'0'
            // console.log(ifCheck)
            let promise=dispatch('updateCheckedByid',{
                skuId:item.skuId,
                isChecked:ifCheck
            })
            promiseAll.push(promise)
        })
        return Promise.all(promiseAll)
    }
}
const mutations={
    CARTLIST(state,data){
        state.cartList=data;
    }
}

const getters={
    // cartInfoList(state){
    //     return state.cartList[0].cartInfoList
    // }
    cartList(state){
        return state.cartList[0]||{}
    }
}
export default{
    state,actions,mutations,getters
}