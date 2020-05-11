let Koa = require('koa')
let KoaRouter = require('koa-router');


const app = new Koa();
const router = new KoaRouter();

//主页
let indexData = require('./datas/index.json');
router.get('/indexData', (ctx, next) => {
  ctx.body = indexData
});


router.get('/test', (ctx, next) => {
  // 1. 获取路由参数： query对象
  
  // 2. 返回路由数据
  ctx.body = '测试返回内容'
});

router.post('/test2', (ctx, next) => {
  // 1. 请求参数： body
  ctx.body = 'post请求的测试数据'
})




// // 主页导航页面数据
// let indexCateList = require('./datas/indexCateModule.json')
// router.get('/getindexCateList', async (ctx, next) => {
// 	// 生成的H5应用存在跨域问题，通过CORS设置跨域配置
// 	ctx.set('Access-Control-Allow-Origin', '*')
// 	await new Promise(resolve => setTimeout(() => resolve(),2000))
// 	ctx.body = indexCateList;
// });

// 分类左页面数据 
let cateNavData = require('./datas/cateNavDatas.json');
router.get('/getCateNavData', async (ctx, next) => {
	ctx.body = {
		data: cateNavData
	};
});
// 分类右页面数据 
let cateList = require('./datas/cateLists.json');
router.get('/getCateList', async (ctx, next) => {
	ctx.body = {
		data: cateList
	};
});






app
  .use(router.routes())
  .use(router.allowedMethods())



app.listen('3004', () => {
  console.log('服务器地址: http://localhost:3004');
})
