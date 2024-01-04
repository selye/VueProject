// 栈：先进后出，函数的调用
// 堆：对象被分配在堆中，通常用来表示一大块内存区域
function foo(b) {
    let a = 10;
    return a + b + 11;
}
function bar(x){
    let y = 3;
    return foo(x * y)
}

// console.log(bar(7))

async function async1() {
    console.log('async1 start');
    await async2();
    console.log('async1 end');
}
async function async2() {
    console.log('async2');
}

console.log('script start');

setTimeout(function() {
    console.log('setTimeout');
}, 0)

async1();

new Promise(function(resolve) {
    console.log('promise1');
    resolve();
}).then(function() {
    console.log('promise2');
});
console.log('script end');


/**
 * script start
 * async1 start
 * async2
 * promise1
 * script end
 * async1 end
 * promise2
 * setTimeout
 */













