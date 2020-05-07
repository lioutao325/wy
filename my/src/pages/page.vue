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
          内容 {{ n }}
         </van-tab>
      </van-tabs>
      <!-- 轮播 -->
      <van-swipe   :autoplay="3000" indicator-color="white">
        <van-swipe-item v-for="(n,inx) in imgObj" :key='inx'>
          <img src="n" >
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
      <van-grid :column-num="5">
        <van-grid-item v-for="(n,inx) in goodCategories" :key="inx" />
          <img : src="n.imgurl"/>
          <div>
            {{n.goodText}}
          </div>

      </van-grid>
      <!-- 底部导航 -->
      <van-tabbar v-model="active">
        <van-tabbar-item icon="home-o">首页</van-tabbar-item>
        <van-tabbar-item icon="search" dot>分类</van-tabbar-item>
        <van-tabbar-item icon="friends-o" badge="5">值得买</van-tabbar-item>
        <van-tabbar-item icon="setting-o" badge="20">购物车</van-tabbar-item>
        <van-tabbar-item icon="setting-o" badge="20">个人</van-tabbar-item>
      </van-tabbar>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      tabBtnlist:['推荐','居家生活','服饰鞋包','美食酒水','个护清洁','母婴亲子','运动旅行','数码家电','全球特色'],
      imgObj:[
        "https://yanxuan.nosdn.127.net/91038b7db8982d4288d71f0547a2569d.jpg?type=webp&imageView&quality=75&thumbnail=750x0",
        "https://yanxuan.nosdn.127.net/8d6ea84dbf81210291edc275327f6c50.jpg?type=webp&imageView&quality=75&thumbnail=750x0",
        "https://yanxuan.nosdn.127.net/a12c510b428bbcc4fdf1eb4bdfd86ae4.png?type=webp&imageView&quality=75&thumbnail=750x0"
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
  .log{
    width: 2rem;
    display: inline-block;
    margin: .2rem 0 0 .3rem;
  }
  .input{
    width: 3.5rem;
    margin: 1rem 0 0 .1rem;
    padding: 0;
  }
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