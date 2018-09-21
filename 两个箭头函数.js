const valueArr = [{
        name: 'Widget协议',
        value: 'widget://'
    },
    {
        name: 'http协议',
        value: 'http://'
    },
    {
        name: 'QQ',
        value: 'qq://'
    },
    {
        name: '微信',
        value: 'weixin://'
    },
]
let validateUri = uri => value => {
    if (uri) {
        return '这个是true'
    }
    return value.some(item => {
        return (item.value.indexOf('http://') === 0)
    }) ? '一切正常没有输错' : '必须包含错误提示'
}
console.log(validateUri(false)(valueArr))
var handler = {
    id: '123456',
  
    init: function() {
      document.addEventListener('click',
        event => this.doSomething(event.type), false);
    },
  
    doSomething: function(type) {
      console.log('Handling ' + type  + ' for ' + this.id);
    }
  };
  console.log(handler.doSomething())
  