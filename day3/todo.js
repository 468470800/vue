
const vm = new Vue({
  el:"#app",
  data:{
    todos:[
      {isSelected:false,title:"学习"},
      {isSelected:false,title:"vue react"},
      {isSelected:false,title:"每天干到凌晨两三点"},
      {isSelected:false,title:"代码写五遍,面试题写五遍"},
    ],
    title:''
  },
  methods:{
    //数据      双向数据绑定
    add(){//添加
      // alert(this.title);
      this.todos.push({
        isSelected:false,
        title:this.title
      });
      this.title='';
    },
    remove(todo){//传参数收到参数
      //删除    当前todo 里面的每一项过滤取反每一项比对相同返回false即可
      this.todos = this.todos.filter(item=>item!==todo)

    }
},
  computed:{
    count(){
      return this.todos.filter(item=>!item.isSelected).length;
    }
  }
});
// 将数据渲染到页面   1.
// 敲击回车 event keycode13   写入到页面  2.
// 删除功能     3.
// 计算一下当前没有    4.
