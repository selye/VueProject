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

// console.log('script start');

setTimeout(function() {
    console.log('setTimeout');
}, 0)

// async1();

new Promise(function(resolve) {
    console.log('promise1');
    resolve();
}).then(function() {
    console.log('promise2');
});
// console.log('script end');


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


// 斐波那契数列
/**
 * 斐波那契额数列
 * 1、1、2、3、5、8、13、21、34
 * f7 - f6 -f5 - f4 - f3 - f2 - f1
 * f6 - 5 - 4 - 3 - 2 - 1
 */

function fibList(n) {

   if(n <= 1) return 1;
       let fibPrev = 1;
       let fibCurrent = 1;
       for(let i = 2; i < n; i++){
           const temp = fibCurrent;
           fibCurrent += fibPrev;
           fibPrev = temp
       }
   return fibCurrent
}


const sum = (x,y,z) => {
    return x + y + z
};

function Currey(fn){
    return function curried(...arg){
        if(arg.length >= fn.length){
            fn.apply(this,arg)
        }else{
            return function(...arg2){
                return curried.apply(this,arg.concat(arg2))
            }
        }
    }
}

const sourceArray =  [1,2,3,4,[5,[6,[7,[8,[9]]]]]];

/**
 * 将数组打平
 * 展开递归判断
 * return [1,2,3,4,5,6,7....]
 * */

function flatArray(arr){
    if(!arr.length) return null
    const result = arr.reduce((preVal,curVal) => {
        return preVal.concat(Array.isArray(curVal) ? flatArray(curVal)  : curVal)
    },[])
    return result
}

// console.log(flatArray(sourceArray))














