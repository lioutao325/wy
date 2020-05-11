import http from '@/http'
import {CATENAVDATA,CATELIST} from './mutation_types'
const state = {
    classifyData:{},
    navData:{},
}
const  mutations={
    [CATENAVDATA](state,data){
        state.classifyData = data
    },
    [CATELIST](state,data){
        state.navData = data
    },
}
const actions={
    async [CATENAVDATA]({commit}){
        let cateNavData = await http.shop.getCateNavData()
        commit(CATENAVDATA,cateNavData)
    },
    async [CATELIST]({commit}){
        let cateList = await http.shop.getCateList()
        commit(CATELIST,cateList)
    },
}
export default {
    state,
    actions,
    mutations
}