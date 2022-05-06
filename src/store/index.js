import Vue from 'vue'
import Vuex from 'vuex'
import search from './search'
import home from './home'
import detail from './detail'
import shopcart from './shopcart'
import user from './user'
import trade from './trade'
Vue.use(Vuex);
export default new Vuex.Store({
        modules:{
            search,
            home,
            detail,
            shopcart,
            user,
            trade,
        },
        
    }
)


// const state = {}
// const actions = {}
// const mutations = {}
// const getters = {}
// export default new Vuex.Store({state,actions,mutations,getters})