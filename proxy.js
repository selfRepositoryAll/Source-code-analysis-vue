var proxy = new Proxy({}, {
    get: function(target, property) {
        console.log('target',target)
        console.log('property',property)
        return 35;
    }
});

let obj = Object.create(proxy);
console.dir('obj',obj)
obj.time //