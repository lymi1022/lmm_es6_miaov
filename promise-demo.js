const pro = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({
      hasPermission: true
    })
    reject({
      hasPermission: false
    })
  }, 2000)
})

pro.then(data => {
  console.log(data, 22)
}).catch(e => {
  console.log(e, 44)
}).then(data => {
  console.log(data, 21)
})


