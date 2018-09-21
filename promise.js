let imgs = ['http://www.w3school.com.cn/i/tulip_flaming_club.jpg', 'https://truth.bahamut.com.tw/s01/201804/b1cf82ec8116322410025dd5a15bab8a.JPG', 'https://vignette.wikia.nocookie.net/powerpuff/images/d/d4/IMG_0954.png/revision/latest?cb=20161016093414']

function loadImg(url) {
    const p = new Promise(function (resolve, reject) {
        const img = new Image()
        img.src = url
        // img.src = ''
        img.onload = function () {
            resolve(this)
        }
        img.onerror = function (err) {
            reject(new Error('图片加载失败'))
        }
    })
    return p
}
// p.then(function (img) {
//     document.body.appendChild(img)
// }).catch(function (err) {
//     console.log(err)
// })

// 对歌promise实例封装成新的
Promise.all([loadImg(imgs[0]), loadImg(imgs[1]), loadImg(imgs[2])]).then(res => {
    res.forEach(i => {
        document.body.appendChild(i)
    })
})