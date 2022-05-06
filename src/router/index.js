import Vue from "vue";
import VueRouter from "vue-router";
import routes from './routes';
import store from '@/store';
Vue.use(VueRouter);
let originPush=VueRouter.prototype.push;
let originReplace=VueRouter.prototype.replace;
VueRouter.prototype.push=function(location,resolve,reject){
    if(resolve&&reject){
        originPush.call(this,location,resolve,reject);
    }else{
        originPush.call(this,location,()=>{},()=>{});
    }
}
VueRouter.prototype.replace=function(location,resolve,reject){
    if(resolve&&reject){
        originReplace.call(this,location,resolve,reject);
    }else{
        originReplace.call(this,location,()=>{},()=>{});
    }
}

const router= new VueRouter({
    routes,
    scrollBehavior (to, from, savedPosition) {
        return {y:0}
    }
})
router.beforeEach(async (to,from,next)=>{
    // next();
    // console.log(store)
    let name=store.state.user.userInfo.name;
    let token=store.state.user.token;
    if(token){
        if(to.path=='/login'){
            next('/home');
        }else{
            if(name){
                next();
            }else{
                try {
                    await store.dispatch('getUserInfo');
                    next();
                } catch (error) {
                    // alert(error.message);
                    //清除token
                    store.dispatch('logout');
                    next('/login');
                }
            }
            
        }
    }else{
        
        let topath=to.path;
        if(topath.indexOf('/pay')!=-1||topath.indexOf('/paysuccess')!=-1||topath.indexOf('/center')!=-1){
            next("/login?redirect="+topath);
        }else{
            next();
        }
        // next();
    }
});
export default router
