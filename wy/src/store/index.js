import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);
import page from './page.js'
import classify from './classify'
export default new Vuex.Store({
modules:{
   page,
   classify 
}
})