/**
 * author:
 * notes：常用工具函数的集合
 */
//防抖
export function debounce(fn,wait){
    var timer = null;
    return function(...args){
        let _ctx = this; //保存Vue的this上下文
        clearTimeout(timer)
        timer = setTimeout(()=>{
            fn.apply(_ctx,args) //剩余参数
        },wait)
    }
}

//单例模式  AOP
export function getSingle (fn) {
    let instance = null;
    return function (...args) {
        return (instance || (instance = fn.apply(this,args)))
    }
}
//节流
export function throttle(fn,wait,time){
    var previous = null; //记录上一次运行的时间
    var timer = null;

    return function(){
        var now = +new Date();

        if(!previous) previous = now;
        //当上一次执行的时间与当前的时间差大于设置的执行间隔时长的话，就主动执行一次
        if(now - previous > time){
            clearTimeout(timer);
            fn();
            previous = now;// 执行函数后，马上记录当前时间
        }else{
            clearTimeout(timer);
            timer = setTimeout(function(){
                fn();
            },wait);
        }
    }
}
//判断空数组，null,undefined,空字符串,空对象
export function isEmpty(obj){
    //基础数据类型，是非空值
    if(typeof obj === 'boolean' || typeof obj === 'number'){
        return false
    }
    if(obj == '' || obj == null || obj == undefined || (obj && Array.isArray(obj) && !obj.length) || (obj && Object.keys(obj).length === 0)){
        return true;
    }else{
        return false;
    }
}


//浮动数四舍五入  v表示要保存小数位
export function decimal(num,v) {
    let vv = Math.pow(10,v);
    return Math.round(num*vv)/vv;
}



