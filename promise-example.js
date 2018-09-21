const wait = s => new Promise(resolve => {
    setTimeout(() => {
      resolve()
    }, s)
  })
  function resolveAfter2Seconds(x) {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(x);
      }, 1000);
    });
  }
  
  async function f1() {
    const x = await resolveAfter2Seconds(10)
    console.log(x);
  }
  f1();

function doAsync(a) {
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            resolve('one sec passed' + a)
            // reject(new Error('errored'))
        }, 2000);
    })
}


// Promise.reject
const PromiseReject = err => {
    return new Promise((resolve, reject) => {
        reject(err)
    })
}

const promise1 = doAsync('1')
    .then(data => {
        console.log(data)
        return doAsync(data)
    })

// wait(100)
return promise1.then(data => {
        console.log(22+ ' * ' + data)
        return 1
    }).catch(err => {
        console.log(err)
        return Promise.reslove(err)
    })
    .then(data => {
        console.log(data)
        return 2
    })
  
    // async function f1() {
    //     var x = await doAsync(10);
    //     console.log(x); // 10
    //   }
    //   f1();
  

//     .then(data => {
//         console.log(data+"你好")
//         return '你好a'
//     })
//     .then(data => {
//         console.log(data)
//     })
//     .then(data => {
//         console.log(data)
//     })
//     .then(data => {
//         console.log(data)
//     })
//     .catch(err => {
//         console.log(err)
//     })

// // =====================================
// // PENDING -> FULLFILLED, REJECTED


// var p1 = Promise.resolve(5);
// function doAsync1(v){
//     return new Promise((resolve,reject) =>{
//         setTimeout(function(){
//             resolve('2323哈哈'+v)
//         },200)
//     });
// }
// var p2 = doAsync1(4).then(res => {
//     console.log('p2:'+res)
//     return res
// })
// var p3 = new Promise((resolve, reject) => {
//   setTimeout(resolve, 100, "foo");
// }); 

// Promise.all([p1, p2, p3]).then(values => { 
//   console.log(values); // [3, 1337, "foo"] 
// });

// Promise.all([3,5,6]).then(v=>{
//     console.log(v)
// })

// var m1 = new Promise(function(resolve, reject) {
//     resolve('Success');
//   });
  
// //   m1.then(function(value) {
// //     console.log(value); // "成功!"
// //     throw 'oh, no!';
// //   }).catch(function(e) {
// //     console.log(e); // "oh, no!"
// //   }).then(function(){
// //     console.log('after a catch the chain is restored');
// //   }, function () {
// //     console.log('Not fired due to the catch');
// //   });

//   var m2 = new Promise(function(resolve, reject) {
//     resolve('Lmm');
//   });
//   m2.then(function(value){
//     console.log(value)
//     return Promise.reject('errs33')
//   }).catch( errs => {
//       console.log(errs)
//   }).then(res => {
//     console.log('22222after a catch the chain is restored')
    
//   },function () {
//     console.log('22222Not fired due to the catch');
//   })