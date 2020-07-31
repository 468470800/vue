function Girl(){
   //发布emit订阅 on {女生失恋:['哭‘,’购物‘,'吃']}
    this._events = {}
}
Girl.prototype.on = function(eventName,callback){
    //[].slice.cal (arguments,1)
    //Array.from(arguments).slice(1)
    if(this._events[eventName]){
        this._events[eventName].push(callback)
    }else{
        this._events[eventName] = [callback]
    }
};
Girl.prototype.emit = function(eventName,...args){
    if(this._events[eventName]){
        this._events[eventName].forEach(cb=>cb(...args))
    };//.apply(this,args)
};
let girl = new Girl();
let cry = () =>{console.log('哭')};
let shopping = () =>{console.log('购物')};
let eat = () =>{console.log('吃')};
girl.on('失恋',cry);
girl.on('失恋',eat);
girl.on('失恋',shopping);
girl.emit('失恋');