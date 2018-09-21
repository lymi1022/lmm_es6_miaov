/*
    集合的基本概念：
    特点：key和value相同，没有重复的value
    应用场景：数组去重等
*/
// 1 如何创建set
const s = new Set([1,2,3])
console.log(s) // 储存到数据结构中{1, 2, 3}
// 2  set 类的属性
console.log(s.size) //3
// 3 set 类的方法
set.add(value) //添加一个数据，返回Set本身
s.add('a').add('b').add('c') //{1,2,3,a,b,c}
s.set.delete(value) //删除指定数据，返回布尔值
console.log(s.delete('a')) //ture
console.log(s.has('a')) //false
console.log(s.has('1')) //true
s.clear() //数据被清空
//---------------------
// 不允许重复数据
s.add(1) //只能有一个
console.log(s) //还是只有一个1