//__dirname 绝对路径;代表的是当前文件的目录
const path = require('path')
function resolve (dir) {
    return path.join(__dirname, dir)
}


module.exports={
    lintOnSave:false,
    devServer:{
        
       open:true,
       proxy: {
        '/3004':{
            target:'http://localhost:3004',
            changeOrigin:true,
            pathRewrite:{
               "^/3004":""
            }
        },
        '/wangyi': {
            target: 'https://m.you.163.com',
            changeOrigin: true,
            secure:false,
            pathRewrite:{
                "^/wangyi":""
            }
        }
       }
    },
    configureWebpack:{
        resolve: {
            alias: {
                'components': resolve('src/components'),
                'pages': resolve('src/pages'),
                'store': resolve('src/store'),
                'http': resolve('src/http'),
            }
        }
    }

}