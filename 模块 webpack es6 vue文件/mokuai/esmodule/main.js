// main.js文件、 导入关键字 import
// import {str, str2,a} from './a.js'
// 需要导出的值 {str ，str2} 默认当前文件夹{xxx} from引入文件 './a.js';
// console.log(str,str2)
// a()
import * as b from './a.js'//所有的* as 坐标
console.log(b.str,b.str2);
b.a();

import xxx from './b.js'//默认导出当前文件夹
console.log(xxx)


