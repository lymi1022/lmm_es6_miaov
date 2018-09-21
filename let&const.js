/* 例子一 let只有在代码块中才能访问到 */
function let1(){
    {
        let a = 1;
        var b = 2;
        console.log(a) //1
    }
    console.log(a) //a is not defined
    console.log(b) //2

    /* 例子二 let声明的变量在域解析时不会被提升 */

    console.log(a) //underfind
    var a = 2; 

    console.log(b) //b in not defined
    let b = 10;

    /* 例子三 let暂时性死区 */
    let f =10;
    function fn(){
        f = 7;
        let f =2;
    }
    fn(); //f is not defined

    /* 例子四 let不允许在同一作用域下声明已经存在的变量 */
    var a = 1;
    let a; // a has alreay been declared

    let b =1;
    let b =2; // b has alreay been declared
}

function let2(){
    /* 例子五 let 在for循环的应用 */
    var btns = document.querySelectorAll('button');
    for(var i=0;i<btns.length;i++){
        btns[i].onclick = function(){
            console.log(i)
        }
    } // 打印5 为i循环完之后的值
    // 解决方案
    for(let i=0;i<btns.length;i++){
        btns[i].onclick = function(){
            console.log(i)
        }
    } // 分别打印 0 1 2 3 4
}

function let3(){
    /* 例子六 let 在循环语句之内是一个父作用域，在循环体之中室一个字作用域 */ 
    for(let i = 0;i<3;i++){
        let i=10;
        console.log(i) // 10 10 10
    }
    console.log(i) //i is not defined
    // i只在for循环中有作用，不会泄露到外部
}

function const1(){
    // 与上面let的特点一样，还额外具备以下  
    // 1。声明的常量只在其代码块中有作用
    // 2。声明的常量不会被提升
    // 3。不能声明已经被声明过的常量

    // q1。声明的时候必须幅值
    var a; //正常
    let b;  //正常
    const c; //报错
    // q2。声明的常量储存简单的数据的时候不可改变其值，如果储存的是对象，那么引用不可改变，至于对象里的数据如何变化，是没有关系的
    const obj = {a:10};
    obj.a=20;
    console.log(obj)

}


