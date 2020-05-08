<template>
  <div id="app">
    <router-view></router-view>
    <van-tabbar v-model="active" class="list">
        <van-tabbar-item class="item" icon="wap-home-o" to='/page'>首页</van-tabbar-item>
        <van-tabbar-item class="item" icon="search" to='/classify'>分类</van-tabbar-item>
        <van-tabbar-item class="item" icon="search"  to='/goodvalue'>值得买</van-tabbar-item>
        <van-tabbar-item class="item" icon="shopping-cart-o"  to='/car'>购物车</van-tabbar-item>
        <van-tabbar-item class="item" icon="user-o"   to='/personal'>个人</van-tabbar-item>
      </van-tabbar>
  </div>
</template>

<script>
     export default {
    data () {
      return {
        active:'page'
      }
    },
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
    #app
      height 100%
      width 100%
</style>
