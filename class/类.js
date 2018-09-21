class Animal {
  // setFields(fields, group) {
  //   this.fields = {
  //     ...this.fields,
  //     ..._.mapValues(fields, field => {
  //       return {
  //         ...field,
  //         group
  //       }
  //     })
  //   }
  // }
  // setContentFields(fields) {
  //   this.setFields(fields, 'content')
  // }
  // setStyleFields(fields) {
  //   this.setFields(fields, 'style')
  // }
  // 类的构造函数 
  constructor(a, b, c) {
    this.a = a;
    this.b = b;
    this.c = c;
    this.uuid = 333
  }
  move() {
    console.log('l am 爷爷 move')
  }
}
let a1 = new Animal(1, 2, 3)
// console.log(a1.a, a1.b, a1.c)


class Human extends Animal {
  constructor(name, cc) {
    // super 让父类的构造函数执行一遍
    super(3, 6, 2)
    this.name = name;
    this.cc = cc;
  }
  // 可以覆盖父类的方法
  move() {
    console.log('父亲把爷爷的move覆盖了')
  }

}
let a2 = new Human('我是父亲', '哈哈')
a2.move()
console.log(a2.a)
console.log(a2.name)
console.log(a2.cc)


class Human2 extends Human {
  constructor(age) {
    super('我是继承的父亲的', '再哈哈');
    this.age = age
  }
}

let a3 = new Human2(23)
// console.log(a3.a)
// console.log(a3.age)
// console.log(a3.name)
// console.log(a3.cc)
// console.log(a3.b)
// console.log(a3.move())