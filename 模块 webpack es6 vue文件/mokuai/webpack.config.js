//webpack 必须采用高commonjs写法
let path = require('path');//专门处理路径的,以当前路径解析出绝对路径
console.log(path.resolve('./dist'))
module.exports = {
  entry:'./src/main.js',//打包 入口文件 webpack 自动查找相关依赖进行打包
  output:{//打包文件
      filename:'bundle.js',//打包后的名字
      path:path.resolve('./dist')//打包 好的 路径
  },
}
