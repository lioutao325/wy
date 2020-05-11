<template>

    <div class="middle">
        <div id="heard">
            <div class="header-icon">
               <van-icon class="icon one" name="wap-home-o"  @click="$router.push('/page')"/>
              <img src="../assets/images/logo.png" alt="">
              <van-icon class="icon two " name="search" @click="$router.push('/search')" />
              <van-icon class="icon three" name="cart-o"  @click="$router.push('/cart')"/>
             
            </div>                                                                                                             
        </div>
        <div class="logowrap">
            <img class="logo" src="//yanxuan.nosdn.127.net/39c5e4583753d4c3cb868a64c2c109ea.png">
        </div>
        <div class="logintype">
            <div class="phonetype" >
                <span class="text">手机号快捷登录</span>
            </div>
            <div class="mailtype">
                <span class="text">邮箱账号登录</span>
            </div>
        </div>
        <div class="foot">
            <div class="wx">
                <span>微信</span>
            </div>
            <div class="qq">
                <span>QQ</span>
            </div>
            <div class="wb">
                <span>微博</span>
            </div>
        </div>
         <div class="haha" style="height:70px;"> 
        </div>
    </div> 
    
</template>

<script>
  export default {
    
  }
</script>

<style lang="stylus" scoped>
.middle
    width 375px
    height 530px
    background #f2f5f4
    .header-icon
      padding  10px 0  0 20px
      .icon
        font-size 25px
        color #333
      .one
        margin-right 50px
      .two
         margin 0 20px 0 20px
    .logowrap
        width 375px
        height 45px
        padding 80px 0  116px  90px
        .logo 
            width 134px
            height 45px
    .logintype
        padding 0 20px
        width 280px
        height 110px
        .phonetype
            width 280px
            height 47px
            background #dd1a21
            color #fff
            margin-bottom 16px
            border-radius 4px
            display flex
            justify-content center
            line-height 47px
            .text
                font-size 14px
        .mailtype
            width 280px
            height 45px
            color #dd1a21
            display flex
            justify-content center
            line-height 45px
            border-radius 4px
            border 1px solid #dd1a21 
            .text
                font-size 14px
    .foot      
        font-size 14px
        color #7f7f7f
        width 375px
        height 20px
        padding 70px  0 20px 70px
        div
            display inline-block
            padding 0 20px
            height 20px
            line-height 20px
            span 
                margin-left 4px
            .qq
                border-left 1px solid #979797
                border-right 1px solid #979797
</style>