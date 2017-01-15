var Watch=function () {
    console.log(this)
}
new Watch()
var str = "1a1b1c";
var reg = new RegExp("1.", "g");
console.log(str.match(reg));
var data={name:'match',age:'3',configurable:false}
let keys=Object.keys(data)
for (let i=0;i<keys.length;i++){
    console.log(keys[i])
}
//console.log(keys)
var hasOwnProperty = Object.prototype.hasOwnProperty;

function hasOwn(obj, key) {
    return hasOwnProperty.call(obj, key)
}
var ob;
function test(value) {
    console.log(hasOwn(value, '__ob__'))
}
test(data)

var rr
console.log(rr)
var inBrowser = typeof window !== 'undefined';
console.log(inBrowser)
Object.freeze(data)
let value=Object.isExtensible(data)//来验证对象是否可以进行操作
console.log('value',value)

var obj={name:'ycd',age:'1',"__ob__":{obvers:'c'}}
console.log(Object.keys(obj))
var property = Object.getOwnPropertyDescriptor(obj, 'name')
console.log(property)//属性
/*
* { value: 'ycd',
 writable: true,
 enumerable: true,
 configurable: true
*
* */
