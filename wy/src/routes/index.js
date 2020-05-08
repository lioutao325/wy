import page from 'pages/page.vue'
import classify from 'pages/classify.vue'
import goodvalue from 'pages/goodvalue.vue'
import cart from 'pages/cart.vue'
import personal from 'pages/personal.vue'
let routes = [
  { path: '/page', component: page },
  { path: '/classify', component: classify },
  { path: '/goodvalue ', component: goodvalue  },
  { path: '/cart', component: cart },
  { path: '/personal', component: personal },
  { path: '/', redirect: '/page' }
  
]
export default routes