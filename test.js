var Watch=function () {
    console.log(this)
}
new Watch()
var str = "1a1b1c";
var reg = new RegExp("1.", "g");
console.log(str.match(reg));