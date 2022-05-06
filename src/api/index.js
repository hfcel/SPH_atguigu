import requests from './requests'
import mockRequests from './mockAjax'
const reqCategoryList=()=>requests({
    url:'/product/getBaseCategoryList',method: 'get'
})
const reqGetBannerList=()=>mockRequests({url:'/banner',method:'get'});
const reqFloorList=()=>mockRequests.get("/floor");
const reqGetSearchInfo=(params)=>requests({url:"/list",method:"post",data:params});
const reqGoodsInfo=(skuId)=>requests({method:'get',url:`/item/${skuId}`});
// const reqAddorUpdateShopCart=(skuId,skuNum)=>requests({url:`/cart/AddToCart/${skuId}/${skuNum}`,method:'post'})
const reqAddorUpdateShopCart=(skuId,skuNum)=>requests({
    url:`/cart/addToCart/${skuId}/${skuNum}`,method:"post",
})
const reqCartList=()=>requests({url:'/cart/cartList',method:'get'})
const reqDeleteCartById=(skuId)=>requests({url:`/cart/deleteCart/${skuId}`,method:'delete'})
const reqUpdateCheckedByid=(skuId,isChecked)=>requests({url:`/cart/checkCart/${skuId}/${isChecked}`,method:'get'})
const reqGetCode=(phone)=>requests({url:`/user/passport/sendCode/${phone}`,method:'get'})
const reqUserRegister=(data)=>requests({url:`/user/passport/register`,
            method:"post",data:data});
const reqUserLogin=(data)=>requests({url:`/user/passport/login`,method:'post',data});
const reqUserInfo=()=>requests({url:'/user/passport/auth/getUserInfo',method:'get'});
const reqLogout=()=>requests({url:'/user/passport/logout',method:'get'});
const reqAddressInfo=()=>requests({url:'/user/userAddress/auth/findUserAddressList',method:'get'});
const reqOrderInfo=()=>requests({url:'/order/auth/trade',method:'get'});
const reqSubmitOrder=(tradeNo,data)=>requests({url:`/order/auth/submitOrder?tradeNo=${tradeNo}`,
            method:'post',data});
const reqPayInfo=(orderId)=>requests({url:`/payment/weixin/createNative/${orderId}`,
            method:'get'});
const reqPayStatus=(orderId)=>requests({url:`/payment/weixin/queryPayStatus/${orderId}`,
            method:'get'});
const reqMyOrderList=(page,limit)=>requests({url:`/order/auth/${page}/${limit}`,
            method:'get'});
export {reqCategoryList,reqGetBannerList,reqFloorList,reqGetSearchInfo,
        reqGoodsInfo,reqAddorUpdateShopCart,reqCartList,reqDeleteCartById,
        reqUpdateCheckedByid,reqGetCode,reqUserRegister,reqUserLogin,
        reqUserInfo,reqLogout,reqAddressInfo,reqOrderInfo,reqSubmitOrder,
        reqPayInfo,reqPayStatus,reqMyOrderList}