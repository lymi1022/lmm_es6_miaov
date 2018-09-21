// 展开，可以把数组展开也可以把对象展开
function fn(normal,...re){
    ott(...re)
}
fn(1,2,3,4)

function ott(a,b,c){
    console.log(a+b+c)
}