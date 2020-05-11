import page from 'pages/page.vue'
import classify from 'pages/classify.vue'
import buy from 'pages/buy.vue'
import cart from 'pages/cart.vue'
import personal from 'pages/personal.vue'
import search from 'pages/search.vue'
let routes = [
  { path: '/page', component: page },
  { path: '/classify', component: classify },
  { path: '/buy ', component: buy },
  { path: '/cart', component: cart},
  { path: '/personal', component: personal },
  { path: '/search', component: search},
  { path: '/', redirect: '/page' }
  
]
export default routes