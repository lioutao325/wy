<template>
  <div >
      <div class="heard" >
         <van-search @click="$router.push('/search')"  placeholder="请输入搜索关键词"  />
      </div>
      <div class="contentContainer">
        <div class="left">
          <div class="leftContent">
            <ul class="content">
              <li class="navItem" 
                   v-for="item in shopData.data.categoryL1List" :key="item.id"
                   @click="changeNavId(item.id)"
                  :class="{active:item.id===navId}">
                {{item.name}}
              </li>
            </ul>
          </div>
        </div>
        <div class="right">
          <div class="rightContent">
            <div class="cateScroll">
              <div class="content" >
                <div class="pic">
                  <img src="">
                </div>
                <div class="goodsList" >
                  <ul class="list" v-if=" cateObj">
                    <li class="goodItem" v-for="(item,index) in cateObj.categoryList" :key="index">
                      <img :src="item.bannerUrl">
                      <div class="name">
                        <span>{{item.name}}</span>
                      </div>
                    </li>
                  </ul>
                  <ul class="list" v-if="cateObj.subCateList">
                    <li class="goodItem"  v-for="item in cateObj.subCateList" :key="item.id">
                      <img :src="item.wapBannerUrl">
                      <div class="name">
                        <span>{{item.name}}</span>
                      </div>
                    </li>
                  </ul>
                </div> 
              </div>
            </div>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
import {mapState,mapActions} from 'vuex'
import {CATENAVDATA,CATELIST} from 'store/mutation_types'
  export default {
    name:'classify',
    data() {
    return {
       navId:0,

    }
  },
   computed: {
           ...mapState({shopData:state=> state.classify.classifyData,
                        navData:state=>state.classify.navData
           }),
      cateObj(){
         return this.navData.data.find(item => item.id === this.navId)
      }
          
  },
  methods: {
    ...mapActions([CATENAVDATA,CATELIST]),
    changeNavId(id){
        this.navId = id
      },
  },
  async mounted() {
   await this[CATENAVDATA]()
   await this[CATELIST]() 
  this.navId=  this.shopData.data.categoryL1List[0].id 

   console.log(this.cateNavObj)
  console.log(this.cateObj) 

   
   
  

   this.$nextTick(()=>{
        new BScroll( '.left .cateNavwrapper', {
            scrollY: true,
            click: true
        })
        new BScroll( '.right .cateListwrapper', {
            scrollY: true,
            click: true
        })
      })   
      
  },
  
}
</script>

<style lang="stylus" scoped>
.contentContainer
    width 375px
    height 573px
    padding 20px 0 50px
    position relative
    .left
      width 81px
      height 534px
      right-border-1px(#ddd)
      padding 20px 0
      .leftContent
        height 534px
        .content
          width 81px
          height 536px
          .navItem
            width 81px
            height 25px
            line-height 25px
            text-align center
            margin-top 20px
            font-size 14px
            position relative
            color #333
            &.active
              color #ab2b2b
              &:before
                display block
                content ''
                width 3px
                height 25px
                position absolute
                left 0
                top 0
                background #ab2b2b
            &:first-child
              margin-top 0
          
            
                  
    .right
      position absolute
      right 0
      top 44px
      width 294px
      height 574px
      margin-left 81px
      box-sizing border-box
      padding 0 15px 10px
      .rightContent
        height 549px
        .cateScroll
          .content
            width 264px
            height 800px
            .pic
              width 264px
              height 96px
              margin-bottom 15px
              img
                width 200px
                height 96px
            .goodsList
              width 264px
              height 437px 
              .list
                display flex
                flex-wrap wrap
                .goodItem
                  margin-bottom 4px
                  width 72px
                  height 108px
                  &:nth-child(3n+2)
                    margin 0 0 4px
                  img
                    display block
                    width 72px
                    height 72px
                  .name
                    width 72px
                    height 36px
                    text-align center
                    font-size 12px
                    line-height 16px
                    color #333
            
            
</style>