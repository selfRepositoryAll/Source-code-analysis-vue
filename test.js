// var Watch=function () {
//     console.log(this)
// }
// new Watch()
// var str = "1a1b1c";
// var reg = new RegExp("1.", "g");
// console.log(str.match(reg));
// var data={name:'match',age:'3',configurable:false}
// let keys=Object.keys(data)
// for (let i=0;i<keys.length;i++){
//     console.log(keys[i])
// }
// //console.log(keys)
// var hasOwnProperty = Object.prototype.hasOwnProperty;

// function hasOwn(obj, key) {
//     return hasOwnProperty.call(obj, key)
// }
// var ob;
// function test(value) {
//     console.log(hasOwn(value, '__ob__'))
// }
// test(data)

// var rr
// console.log(rr)
// var inBrowser = typeof window !== 'undefined';
// console.log(inBrowser)
// Object.freeze(data)
// let value=Object.isExtensible(data)//来验证对象是否可以进行操作
// console.log('value',value)

// var obj={name:'ycd',age:'1',"__ob__":{obvers:'c'}}
// console.log(Object.keys(obj))
// var property = Object.getOwnPropertyDescriptor(obj, 'name')
// console.log(property)//属性
/*
* { value: 'ycd',
 writable: true,
 enumerable: true,
 configurable: true
*
* */

/**
 *  模板解析
 */

// var ncname = '[a-zA-Z_][\\w\\-\\.]*';
// var qnameCapture = '((?:' + ncname + '\\:)?' + ncname + ')';
// var startTagOpen = new RegExp('^<' + qnameCapture);
// var html = '"<div id="btn">
// <p>{{name}}</p>
// <button @click="handleClick">button</button>
// </div>'
// var start = html.match(startTagOpen);




// var obj = {
//   age: 10
//   // name: 
// }
// Object.defineProperty(obj, 'name', {
//   value: 'cd',
//   writable: true, // 是否能够更改
//   enumerable: false, // 枚举
//   configurable: true // 配置
// })
// obj.name = '33'
// var data = obj.hasOwnProperty('name');
// console.log(data);
// for (const key in obj) {
//   console.log(obj[key]);
//   if (obj.hasOwnProperty(key)) {
//     const element = object[key];

//   }
// }
// console.log(obj.name);



// class Observer {
//   // 将observe实例
//   constructor(data) {
//     Object.defineProperties(data,'__ob__',{
//       value:this,

//     })
//   }
// }

function makeFunction(code) {
  try {
    return new Function(code)
  } catch (e) {
    return noop
  }
}

function Lakers() {
  this.name = "kobe bryant";
  this.age = "28";
  this.gender = "boy";
}
var people = new Lakers();
makeFunction(`with (people) {
  var str = "姓名: " + name + "<br>";
  str += "年龄：" + age + "<br>";
  str += "性别：" + gender;
  document.write(str);
}`)

{/* <div id="btn">
<p>{{count}}</p>
<p>{{test1}}</p>
<button @click="handleClick">button</button>
</div> */}

with (this) {
  return _c('div', {
    attrs: {
      "id": "btn"
    }
  }, [_c('p', [_v(_s(count))]),
  _v(" "),
  _c('p', [_v(_s(test1))]),
  _v(" "),
  _c('button', {
    on: {
      "click": handleClick
    }
  }, 
  [_v("button")])])
}

// new Watcher(vm, function () {
//   vm._update(vm._render(), hydrating);
// }, noop);