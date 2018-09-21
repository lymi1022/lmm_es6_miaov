const map = new Map([
    ['a',1],
    ['b',2]
])
// map数据结构的属性
// 添加
console.log(map.size)
map.set('miaov','ketang').set('new','fq')
console.log(map)
// 获取key对应的键值
console.log(map.get('miaov'))
// 删除
console.log(map.delete('a'))

// 是否存在
console.log(map.has('a'))

// values 返回键值的遍历器
console.log(map.values())

map.forEach(function(key,value,map){
    console.log(key+':'+value)
})