
    // 添加元素 返回值是数组长度
    var arr =[1,2,3]
    console.log(arr.push('abc'))
    console.log(arr)

    var arr2 = ['tm','lymi','hah']
    // 去除数组的最后一个元素 返回值是被扔掉的元素
    arr.pop();
    console.log(arr.pop()) 

    // 去除数组的第一个一个元素 返回值是被扔掉的元素
    arr.shift()
    console.log(arr.shift())

    // 把最后一个元素放到第一位，其余的王后移一位
    var arr3 = ['tm','lymi','hah', 'nihao']
    // 拿掉最后一个
    arr3.pop()
    // 往第一个里面塞进去
    arr3.unshift(arr3.pop())
    console.log(arr3)


    var str ='abcdefg'
    
    console.log(str.substring(2,3))


    console.log(Math.round(Math.random()*10))
    console.log(Math.round(Math.random()*5+5))