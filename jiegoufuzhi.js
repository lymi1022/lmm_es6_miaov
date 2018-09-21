/* 基本概念
    本质上就是一种匹配模式，只要等号两边的模式相同，那么左边的变量就可以被赋予对应的值
    解构赋值主要分为：
    1.数组的解构赋值
    2.对象的解构赋值
    3.基本类型的解构赋值
*/
function jiegou1(){
    // 三次的声明，可以通过解构幅值一句话搞定
    let a = 1;
    let b = 2;
    let c = 3;
    // 解构赋值法
    let [a,b,c] = [1,2,3]
}

// 1.数组的解构赋值,
function shuzu(){
    // 左右两边匹配模式相同就会被赋值
    let [a,[[b],c]] = [1,[[2],3]]
    // 解构不成功
    let [x] = [];
    console.log(x) //undefined
    // 允许指定默认值
    let [y = 1] = []
    console.log(y) //1
}

// 2.对象的解构赋值
function obj1(){
    // 变量名和属性名一致就可以被解构赋值
    // a,b前后位置没有影响
    let {a,b} = {b:'bbb',a:'aaa'}
    console.log(a,b) //aaa bbb
}
function obj2(){
    // 先找到同名的属性，再赋值给对应的变量
    let {a:b} = {a:1}
    console.log(b) //1
    console.log(a) //报错
}

// 3.基本类型的解构赋值
function type(){
    let [a,b,c,d] = '1234';
    console.log(a,b,c,d) //1 2 3 4

    let {length:len} = 'miaov'
    console.log(len) //5

    // null和undefined不能进行解构赋值
    let [a] = null; //报错
}