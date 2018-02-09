/**
 * has
 * get
 * set 
 * 都可以做事情
 */

var proxy = new Proxy({}, {
  get: function (target, property) {
    console.log('target', target)
    console.log('property', property)
    return 35;
  }
});

let obj = Object.create(proxy);
console.dir('obj', obj)
obj.time //

let stu1 = { name: '张三', score: 59 };
let stu2 = { name: '李四', score: 99 };

let handler = {
  has(target, prop) {
    if (prop === 'score' && target[prop] < 60) {
      console.log(`${target.name} 不及格`);
      return false;
    }
    return prop in target;
  }
}

let oproxy1 = new Proxy(stu1, handler);
let oproxy2 = new Proxy(stu2, handler);

// 'score' in oproxy1
var data = 'score' in oproxy2;
console.log(data);

// 张三 不及格
// false

// 'score' in oproxy2
// true

// for (let a in oproxy1) {
//   console.log(oproxy1[a]);
// }
// 张三
// 59

// for (let b in oproxy2) {
//   console.log(oproxy2[b]);
// }
// 李四
// 99