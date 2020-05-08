import Vue from 'vue'
import App from './App.vue'

import router from '@/router' 

import 'amfe-flexible/index.js'

import store from 'store'


import {Col,Row,Search,Tab,Tabs,Swipe,SwipeItem,Grid,GridItem, Tabbar, TabbarItem } from 'vant';

Vue.use(Col).use(Row).use(Search).use(Tab).use(Tabs).use(Swipe).use(SwipeItem).use(Grid).use(GridItem).use(Tabbar).use(TabbarItem);
 

Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
