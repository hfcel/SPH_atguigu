// import Home from "@/pages/Home"
import Login from "@/pages/Login"
import Register from "@/pages/Register"
import Search from "@/pages/Search"
import Detail from '@/pages/Detail'
import ShopCart from '@/pages/ShopCart'
import AddCartSuccess from '@/pages/AddCartSuccess'
import Trade from '@/pages/Trade'
import Pay from '@/pages/Pay'
import Paysuccess from '@/pages/PaySuccess'
import Center from '@/pages/Center'
import myOrder from '@/pages/Center/myOrder'
import groupOrder from '@/pages/Center/groupOrder'
export default [
    {
        path:'/center',
        component:Center,
        children:[
            {
                path:'/center/myorder',
                component:myOrder,
                // meta:{
                //     show:true,
                // }
            },
            {
                path:'/center/grouporder',
                component:groupOrder,
                // meta:{
                //     show:true,
                // }
            },
            {
                path:'/center',
                redirect:'/center/myorder',
            }
        ],
        meta:{
            show:true,
        }
    },
    {
        path:'/paysuccess',
        component:Paysuccess,
        // beforeEnter:(to,from,next)=>{
        //     if(from.path=="/pay"){
        //         next();
        //     }else{
        //         next(false);
        //     }
        // },
        meta:{
            show:true,
        }
    },
    {
        path:'/pay',
        component:Pay,
        beforeEnter:(to,from,next)=>{
            if(from.path=="/trade"){
                next();
            }else{
                next(false);
            }
        },
        meta:{
            show:true,
        }
    },
    {
        path:'/trade',
        component:Trade,
        beforeEnter:(to,from,next)=>{
            if(from.path=="/shopcart"){
                next();
            }else{
                next(false);
            }
        },
        meta:{
            show:true,
        }
    },
    {
        name:'addcartsuccess',
        path:'/addcartsuccess',
        component:AddCartSuccess,
        meta:{
            show:true,
        }
    },
    {
        name:'shopcart',
        path:'/shopcart',
        component:ShopCart,
        meta:{
            show:true,
        }
    },
    {
        name:'detail',
        path:'/detail/:skuId?',
        component:Detail,
        meta:{
            show:true,
        }
    },
    {
        path:"/home",
        component:()=>import('@/pages/Home'),
        meta:{
            show:true,
        }
    },
    {
        path:"/login",
        component:Login,
        meta:{
            show:false,
        }
    },
    {
        path:"/register",
        component:Register,
        meta:{
            show:false,
        }
    },
    {
        name:'search',
        path:"/search/:keyword?",
        component:Search,
        meta:{
            show:true,
        }
    },
    {
        path:"*",
        redirect:"/home",
    },
    
]