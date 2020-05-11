<template>
  <div id="shopContainer">
    <div class="header">
      <span class="shoptxt">购物车</span>
      <div class="right">领券</div>
    </div>
     <div class="advert">
          <div  v-for="(item,index) in (shopData.policyDescList)" :key="index">
            <img :src="item.icon" alt="" style="width:15px;height:15px">
              <span>{{item.desc}}</span>
            </div>
      </div>
    <div class="main">
      <div class="shopcar">
        <div class="shopcarimg">
          <img src="http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/noCart-d6193bd6e4.png">
        </div>
        <div class="text">去添加点什么吧</div>
      </div>
      <div class="login" @click="$router.push('/personal')">登录</div>
    </div>
  </div>
</template>

<script>
import {mapState,mapActions} from 'vuex'
import {INDEXDATE} from 'store/mutation_types'
  export default {
     computed: {
           ...mapState({shopData:state=> state.page.pageData})
  },
  methods: {
    ...mapActions([INDEXDATE])
    
  },
  async mounted() {
   await this[INDEXDATE]()
 
  },
  }
</script>

<style lang="stylus" scoped>
#shopContainer
  .header
    width 100%
    height 44px
    padding 0 15px
    display flex
    justify-content space-between
    align-items center
    .shoptxt
      color #333333
      font-size 18px
    .right
      color #dd1a21
      font-size 15px
      padding-right 15px
    
  .advert
      width 100%
      height 15px
      display flex
      justify-content space-around
      align-items center

  .main
    width 100%
    height 100%
    background #f4f4f4
    padding-top 183px
    .shopcar
      .shopcarimg
        width 124px
        height 124px
        margin 0 auto
        img 
          width 124px
          height 124px
      .text
        color #999999
        font-size 14px
        text-align center
        height 14px
        margin-bottom 25px
    .login
      width 239px
      height 46px
      background #dd1a21
      font-size 15px
      text-align center
      line-height 46px
      margin 0  45px
      color #ffffff
      border-radius 4px

</style>