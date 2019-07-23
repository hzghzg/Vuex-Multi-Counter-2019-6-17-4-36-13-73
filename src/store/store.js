import Vue from "vue"
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state:{
        sum:0
    },
    getter:{
        result:state=>{
            return state.sum
        }
    },
    mutations:{
        resetSum(state){
            state.sum=0
        },
        addSum(state){
            state.sum++
        },
        subSum(state,payload){
            state.sum-=payload
        }
    }
})