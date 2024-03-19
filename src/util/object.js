const obj = {}
let bValue = 38;
Object.defineProperty(obj, 'foo', {
    get() {
        console.log(bValue)
        return bValue
    },
    set(newVal) {
        console.log(newVal)
        bValue = newVal
    }
})

obj.foo;
// obj.foo = 'hello';
// 添加属性并不会触发响应式
obj.bar = 'world'