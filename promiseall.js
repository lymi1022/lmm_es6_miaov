const asyncTask = (taskName) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(taskName)
    }, 800)
  })
}
const asyncTask2 = (taskName) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(taskName)
    }, 800)
  })
}
let asyncTask3 = new Promise((resolve, reject) => {
  resolve('444')
})

const tasks = [asyncTask3, asyncTask2('task1'), asyncTask2('task2'), asyncTask2('task3')]

Promise.all(tasks).then(res => {
  console.log(res, 'no catch')
})
const func = () => {
  return asyncTask().catch(() => {}).then(() => {
    Promise.all(tasks).catch(errs => undefined).then(res => {
      console.log(res)
    })
  })
}
// p()
// func()
// [ 'task1', 'task2', 'task3' ]

// new Promise((resolve, reject) => {
//   tasks.map(i => {
//     resolve(i)
//   })
// }).then(res => {
//   console.log(res)
// })
// 只会打印出第一个Promise，task1