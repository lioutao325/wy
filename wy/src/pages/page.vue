<template>
   <div> 
    <!-- 输入框 -->
    <div class="header">
      <img src="../assets/images/logo.png" alt="" style="width:69px;height:20px">
      <div class="inputSc">
        <span class="input"><van-icon name="search"  /> 请输入关键字</span>
      </div>
      <button class = 'btn'>登录</button>
    </div>
      <!-- 列表 -->
     <van-tabs>
        <van-tab v-for="(n,inx) in tabBtnlist" :key='inx' :title="n">
         </van-tab> 
     </van-tabs>  
      <!-- 轮播 -->
      <van-swipe class="swiper" :autoplay="3000" indicator-color="white">
        <van-swipe-item  class="swiperItem"><img src="https://yanxuan.nosdn.127.net/31b0c2a0424fe7b152950fa0ed53f8b6.jpg?type=webp&imageView&quality=75&thumbnail=750x0" alt=""></van-swipe-item>
        <van-swipe-item class="swiperItem"><img src="https://yanxuan.nosdn.127.net/84d82137e854e58bf26791db3ba203b8.jpg?type=webp&imageView&quality=75&thumbnail=750x0" alt=""></van-swipe-item>
        <van-swipe-item class="swiperItem"><img src="http://yanxuan-miaobi.nos-jd.163yun.com/3988777_1_6_wap_ac032a0fccc1195727761846263f20ba.jpg?type=webp&imageView&quality=75&thumbnail=750x0" alt=""></van-swipe-item>
      </van-swipe>
      <!-- 小字体 -->
      <div class="advert">
          <div  v-for="(item,index) in (shopData.policyDescList)" :key="index">
            <img :src="item.icon" alt="" style="width:15px;height:15px">
              <span>{{item.desc}}</span>
            </div>
      </div>
     
      <!-- 商品分类 -->
      <div class="shoplist">
        <div v-if="shopData.kingKongModule">
          <div class="shoplist-for" v-for="(item,inx) in shopData.kingKongModule.kingKongList" :key="inx">
            <img :src="item.picUrl" alt="" style="width:50px;height:50px">
            <div>{{item.text}}</div>
          </div>
        </div>
      </div>
      
      <!-- 广告图片 -->
      <div class="advertising">
           <img src="https://yanxuan.nosdn.127.net/7db5ad89be165b82b6a3e261029d0122.gif?imageView&quality=75" alt="">
      </div>
       <div class="floor">
       <!-- 新人专享礼 -->
      <div class="activity">
           <div class="title"><span>-</span><p>新人专享礼</p><span>-</span></div>
              <div class="content">
                  <div class="left"></div>
                        <div class="right"></div>
                  </div>
            </div>

      </div>     
  </div> 
</template>

<script>
import {mapState,mapActions} from 'vuex'
import {INDEXDATE} from 'store/mutation_types'
export default {
  name: 'page',
  data() {
    return {
      tabBtnlist:['推荐','居家生活','服饰鞋包','美食酒水','个护清洁','母婴亲子','运动旅行','数码家电','全球特色'],
    }
  },
   computed: {
           ...mapState({shopData:state=> state.page.pageData})
  },
  methods: {
    ...mapActions([INDEXDATE])
  },
  async mounted() {
   await this[INDEXDATE]()
   console.log(this.shopData)
  },
}

</script>

<style scoped  lang="stylus" >
   .header
      height 40px
      width 100%
      padding  0 20px
      display flex
      align-items center
      position relative
      z-index 90 
      background #fff
      img 
        width 100px
        height 40px
        margin-right 10px
      .inputSc
        width 170px
        height 30px
        background #ededed
        text-align center
        line-height 30px
        color #666
        border-radius 10px
      .btn
        width 35px
        height 30px
        color  #dd1a21
        margin-left 10px
        border 2px solid #dd1a21
        text-align center
        line-height 30px
        border-radius 5px
		.swiper
      position relative
      width 100%
      height 150px
      .swiperItem
        width 100%
        height 100%
        img 
          width 100%
          height 150px
    .advert
      width 100%
      height 15px
      display flex
      justify-content space-around
      align-items center
    .shoplist
        width 100%
        height 100px
        flex-wrap wrap
        .shoplist-for
          float left
          flex-direction column
          align-items center
          margin-left 5px
          img 
            margin 0 10px 10px 3px
            display inline-block           
    .advertising
        width 100%
        height 100px
        margin-bottom 50px
        img 
          width 100%
          height 100%
    .floor
      background #eee
      overflow hidden
      .activity
      width 100%
      margin-top 20px
      background-color #fff
      pading 0 30px
      .title
        width 100%
        height 90px
        float left
        justify-content center
        font-size 32px
        align-items center
        color #333
      span 
        width 30px
        height 4px
        background  #666
        margin 0 10px
      .content
        width 100%
        background-color pink 
</style>