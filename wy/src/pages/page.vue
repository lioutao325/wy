<template>
   <div> 
    <!-- 输入框 -->
    <van-row>
      <van-col >
        <img src="../assets/images/logo.png" alt="">
      </van-col>
      <van-col >
            <van-field  class="input"
            v-model="value" placeholder="请输入用户名"  />
      </van-col>
      <van-col >
        <div class="btn">登录</div>
      </van-col>
  </van-row>
      <!-- 列表 -->
    <van-tabs>
        <van-tab v-for="(n,inx) in tabBtnlist" :key='inx' :title="n">
           <!-- {{ n }} -->
         </van-tab> 
     </van-tabs> 
      <!-- 轮播 -->
      <van-swipe   :autoplay="3000" indicator-color="white">
        <van-swipe-item v-for="(n,inx) in imgObj" :key='inx'>
          <img src="n.img" >
        </van-swipe-item>
      </van-swipe>

      <!-- 广告 -->
      <van-row class="advert">
        <van-col span="8">
          <i class="icon-1"></i>
          <span>网易自营品牌</span>
        </van-col>
        <van-col span="8">
          <i class="icon-2"></i>
          <span>
               30天无忧退货
          </span>
         
        </van-col>
        <van-col span="8">
          <span>
            48小时快速退款
          </span>
          <i class="icon-3"></i>
        </van-col>
      </van-row>
      <!-- 商品分类 -->
      <!-- <van-grid :column-num="5">
        <van-grid-item v-for="(n,inx) in goodCategories" :key="inx" />
          <img : src="n.imgurl"/>
          <div>
            {{n.goodText}}
          </div>

      </van-grid> -->
  </div> 
</template>

<script>
export default {
  name: 'page',
  data() {
    return {
      tabBtnlist:['推荐','居家生活','服饰鞋包','美食酒水','个护清洁','母婴亲子','运动旅行','数码家电','全球特色'],
      imgObj:[
       {img:require('../assets/lunbo/2bf4fadc1c718c3456aecee6e094bb9c.webp')},
       {img:require('../assets/lunbo/3988455_1_5_wap_00470d2ea53c9fffa103e84539d45b92.webp')},
       {img:require('../assets/lunbo/e7faa23b843641c871f34aff7960e43e.webp')},
      ],
      goodCategories:[
        {
          imgurl:require('../assets/images/goodCategories/1.png'),
          goodText:'新品首发'
        }, {
          imgurl:require('../assets/images/goodCategories/2.png'),
          goodText:'居家生活'
        }, {
          imgurl:require('../assets/images/goodCategories/3.png'),
          goodText:'服饰鞋包'
        }, {
        imgurl:require('../assets/images/goodCategories/4.png'),
          goodText:'美食酒水'
        }, {
          imgurl:require('../assets/images/goodCategories/5.png'),
          goodText:'个护清洁'
        }, {
        imgurl:require('../assets/images/goodCategories/6.png'),
          goodText:'母婴亲子'
        }, {
          imgurl:require('../assets/images/goodCategories/7.png'),
          goodText:'运动旅行'
        }, {
          imgurl:require('../assets/images/goodCategories/8.png'),
          goodText:'数码家电' 
        }, {
          imgurl:require('../assets/images/goodCategories/9.png'),
          goodText:'全球特色'
        }, {
          imgurl:require('../assets/images/goodCategories/10.gif'),
          goodText:'好货抄底'
        },
      ]
    }
  },
  
}
</script>

<style scoped>
  .btn{
    margin: .15rem  0 0 .2rem;
    width: .8rem; 
    height: .45rem;
    color: #f00;
    text-align: center;
    font-size: .22rem;
    border-radius: .1rem;
    border: 1px solid #f00;
  }
  .advert{
     text-align: center;
    height: .6rem;
    line-height: .6rem; 
  }
  .advert i{
    display: inline-block;
    background: no-repeat;
    background-size: 100%;
    width: .4rem;
    height: .4rem;
    vertical-align: middle;
  } 
  .advert i.icon-1{
    background-image: url('../assets/images/a03dd909803b9ac032eba58b7253a2f6.png');
  }
  .advert i.icon-2{
    background-image: url('../assets/images/2d0402ffcd52b3ec3b07422681c42a89.png');
  }
  .advert i.icon-3{
    background-image: url('../assets/images/eb61ee48e8942dbd1784c9ee75ebe955.png');
  } 
</style>