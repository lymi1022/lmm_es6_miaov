

let b = {
    name:'bb'
}
b.a = function(){
    let a = () => {
        return this;
    }
    return a();
}
console.log(b.a())
