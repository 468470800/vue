// 打包JS文件
// 　　指令 webpack  入口文件  出口文件
// 例:  webpack a.js  bundle.js
// 　　这里的指令是可以有缩写的写法就是一个单纯的 webpack 的英文,
// 但是这种写法得配置一个 webpack.config.js的文件
let path = require('path');//专门处理路径的,以当前路径解析出绝对路径
console.log(path.resolve('./dist'))
module.exports = {
  entry:'./src/main.js',//打包 入口文件 webpack 自动查找相关依赖进行打包
  output:{//打包文件
      filename:'bundle.js',//打包后的名字
      path:path.resolve('./dist')//打包 好的 路径
  },
}
