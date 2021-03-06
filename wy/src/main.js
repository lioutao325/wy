import Vue from 'vue'
import App from './App.vue'

import router from '@/router' 

import 'amfe-flexible'

import store from 'store'



//vant
import {Field,Col,Row,Search,Tab,Tabs,Swipe,SwipeItem,
  Grid,GridItem, Tabbar, TabbarItem,Icon,Toast} from 'vant';

Vue.use(Field).use(Col).use(Row).use(Search).use(Tab).use(Tabs).use(Swipe)
.use(SwipeItem).use(Grid).use(GridItem).use(Tabbar).use(TabbarItem).use(Icon).use(Toast);
 

Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
