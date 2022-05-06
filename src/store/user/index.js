import { reqGetCode,reqUserRegister,reqUserLogin,reqUserInfo,reqLogout } from "@/api"
import {setToken,getToken,removeToken} from '@/utils/token'
const state={
    code:'',
    token:getToken(),
    userInfo:{},
}
const mutations={
    GETCODE(state,val){
        state.code=val
    },
    USERLOGIN(state,token){
        state.token=token;
    },
    GETUSERINFO(state,data){
        state.userInfo=data;
    },
    CLEAR(state){
        state.userInfo={};
        state.token="";
        removeToken();
    }
}
const actions={
    async getCode({commit},phone){
        let res=await reqGetCode(phone)
        // console.log(res)
        if(res.code==200){
            commit('GETCODE',res.data)
        }else{
            return Promise.reject(new Error('faile'))
        }
    },
    async userRegister({commit},data){
        let res=await reqUserRegister(data)
        console.log(res)
        if(res.code==200){
            return 'ok'
        }else{
            return Promise.reject(new Error('faile'))
        }
        
    },
    async userLogin({commit},data){
        let res=await reqUserLogin(data);
        // console.log(res)
        if(res.code==200){
            commit("USERLOGIN",res.data.token);
            // localStorage.setItem("TOKEN",res.data.token);
            setToken(res.data.token);
            return 'ok';
        }else{
            return Promise.reject(new Error('faile'));
        }
    },
    async getUserInfo({commit}){
        let res=await reqUserInfo();
        // console.log(res);
        if(res.code==200){
            commit('GETUSERINFO',res.data)
            return "ok"
        }else{
            return Promise.reject(new Error("faile"))
        }
    },
    async logout({commit}){
        let res=await reqLogout();
        // console.log(res);
        if(res=200){
            commit("CLEAR");
            return 'ok'
        }else{
            return Promise.reject(new Error('faile'))
        }
    },
}
const getters={}
export default {
    state,mutations,actions,getters
}