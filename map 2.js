const map = (list, func) => {
    let i = 0
    const list2 = []
    for(item of list) {
        list2.push(func(item, i))
        i++
    }
    return list2
}

const list2 = [1, 2, 3]
console.log(map(list2, n => {
    return n + 1
}))






const filter = (list, func) => {
	// todo
}

// reduce, every, some
