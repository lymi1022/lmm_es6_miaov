// function fn1() {
//     console.log(this.a)
// }

const fn1 = () => {
    console.log(this.a)
}

const fn2 = fn1.bind({
    a: 1
})

fn2()
