import http from '@/http'
import {INDEXDATE} from './mutation_types'
const state = {
    pageData:{},
    test:"123"
}
const  mutations={
    [INDEXDATE](state,data){
        state.pageData = data
    },
}
const actions={
    async [INDEXDATE]({commit}){
        let indexData = await http.shop.getIndexData()
        commit(INDEXDATE,indexData)
    },
}
export default {
    state,
    actions,
    mutations
}