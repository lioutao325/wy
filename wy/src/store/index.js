import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);
import page from './page.js'
export default new Vuex.Store({
modules:{
   page
}
})