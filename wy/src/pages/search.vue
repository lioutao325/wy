<template>
    <div id="searchContainer">
      
           <form action="/">
                <van-search 
                    v-model="value"
                    show-action
                    :placeholder="SearchInitData.defaultKeyword.keyword"
                    @search="onSearch"
                    @cancel="onCancel"

                 />
            </form>
       
        <div class="searchBottom">
          <div class="header">
            <h3>热门搜索</h3>
          </div>
          <div class="list">
            <div  class="listItem" v-for="(item,index) in SearchInitData.hotKeywordVOList" :key="index"
                :class="{active:item.extra}">
              <span >{{item.keyword}}</span>
            </div>
          </div>
        </div>
  </div>
   
</template>

<script>
import { Toast } from 'vant';
import http from 'http'
    export default {
        name:"search",
        data () {
            return { 
                 value: '',
                 SearchData:[],
                 SearchInitData:{},
            }
        },
        methods: {
            async getSearchData(value){
                let getSearchData= await http.wangyi.getSearchData({keyword:value})
                if(getSearchData.code === "200") this.SearchData = getSearchData.data
               
            },
          onSearch(value){
                this.repSearchData()
            },
            onCancel() {
                this.$router.go(-1)
            },
        },
        async mounted() {
           let  getSearchInitData= await http.wangyi.getSearchInitData()
                    if(getSearchInitData.code === "200") this.SearchInitData = getSearchInitData.data
        },
        
    }
</script>

<style lang="stylus" scoped>
  .searchContent
    width 100%
    height 100%
  .searchBottom
    width 375px
    height 218px
    .header
        width 345px
        height 45px
        line-height 45px
        margin 0 auto
        h3
            font-size 14px
            color #999
    .list
        display flex
        flex-wrap wrap
        width 345px
        box-sizing border-box
        padding 0 15px 15px
        .listItem
            display block
            font-size 12px
            color #333
            line-height 23px
            margin 0 10px 10px 0
            padding 0 8px
            border 1px solid #999
            border-radius 2px
          .highlight
            border-color #dd1a21
            color #dd1a21
    
            
           
</style>