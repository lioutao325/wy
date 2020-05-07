<template>
  <div id="app">
    <van-tabbar v-model="active">
        <van-tabbar-item icon="wap-home-o" to='/page'>首页</van-tabbar-item>
        <van-tabbar-item icon="search" to='/classify'>分类</van-tabbar-item>
        <van-tabbar-item icon="goods-collect-o"  to='/goodvalue'>值得买</van-tabbar-item>
        <van-tabbar-item icon="shopping-cart-o"  to='/car'>购物车</van-tabbar-item>
        <van-tabbar-item icon="user-o"   to='/personal'>个人</van-tabbar-item>
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
 
</style>
