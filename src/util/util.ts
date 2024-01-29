/**
 * 防抖函数
 *
 * */
const debounceFn = (fn: Function, delay: number = 1500, ) => {
    let timer: number ;
    return function(...args: any){
        const context = this;
        if(timer){
            clearTimeout(timer)
        }
        timer = setTimeout(function(){
            console.log(context)
            fn.call(context,...args)
        },delay)
    }
}
/**
 * 节流函数
 * 期望：点击多次，都根据delay时间持续输出
 * 点击进来，创建定时器，只有当定时器执行完毕时，才会执行下一个传入的函数
 * */
const throttle = (fn: Function, delay: number = 1500) => {
    let timer: number | null;
    return function(...args: any){
        const context = this;
        if(!timer){
            timer = setTimeout(function(){
                fn.apply(context, args);
                timer = null
            },delay)
        }
    }
}

/**
 * 函数柯里化
 * 1. 如果参数到达length,直接进行计算结果
 * 2. 如果没有到达length，返回一个函数
 * call接受逗号分隔
 * apply接受数组
 * */


const currey = (fn) => {
    return function curried(...args){
        if(args.length >= fn.length){
            return fn.apply(this, args)
        }else{
            return function(...arg2){
                return curried.apply(this,args.concat(arg2))
            }
        }
    }
}

const sum = (x: number, y: number, z: number) => {
    return x + y + z
}



let processList: any;
let timer: any;
function start(id: number) {
    if (!processList) processList = [];
    processList.push({ id })
    clearTimeout(timer);
    timer = setTimeout(() => {
        (async () => {
            // 删除第一个值
            let target = processList.shift();
            while (target) {
                await execute(target.id);
                target = processList.shift();
            }
        })()
    }, 0)
}

// 测试代码 (请勿更改):
for (let i = 0; i < 5; i++) {
    // start(i);
}

function sleep(duration: number) {
    return new Promise(resolve => setTimeout(resolve, duration));
}

function execute(id: number) {
    const duration = Math.floor(Math.random() * 500);
    return sleep(duration).then(() => {
        console.log("id", id);
    });
}

/**
 * 两个数组，如果b数组的元素包含于a数组中，返回a中不存在b中的元素，否则返回空数组
 * 判断b的每一项是否存在与a中
 * 如果存在,找出a中不存在于b中的元素
 * 如果不存在，返回空元素
 * 【1，2，3，4，5，6】
 * 【1，2，3，4，5，6，7，8，9，10】
 *  a.filter(item => b.indexOf(item) === -1)
 *
 *  @params arr2 = [1, 2, 3, 4, 5, 6];
 *  @params arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
 * */

function chatArry(arrA,arrB){
    const setA = new Set(arrA);
    const setB = new Set(arrB);

    const isSub = [...setB].every((bItem) => setA.has(bItem))
    if(isSub){
        const result = [...setA].filter((aItem) => !setB.has(aItem))
        return result
    }
    return []

}
// const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const arr2 = [1, 2, 3, 4, 5, 6];
//
// chatArry(arr1, arr2)

/**
 * 给定两个数组，要求合并为一个，并去重排序
 * */

function rebaseArray(arrA, arrB){
    const setObj = new Set([...arrA, ...arrB])
    const result = [...setObj].sort((a, b) => a - b)
    return result
}
// const arr1 = [1,9,3,6,12];
// const arr2 = [0,2,10,3,12,12];

/**
 * 找出和最大的三个子数组
 * [[1, 2, 3], [4, 5, 6], [-1, 12, 13], [6, 18, 0], [5, 5, 5], [6, 9, 3]]
 * */

function findMaxSubArr(arr){
    const sortedArray = arr.sort((a,b) => calmSum(b) - calmSum(a))
    return sortedArray.slice(0, 3)
}
// 计算子数组的和
function calmSum(arr){
    return arr.reduce((pre, cur) => pre + cur,0)
}

const testArray = [[1, 2, 3], [4, 5, 6], [-1, 12, 13], [6, 18, 0], [5, 5, 5], [6, 9, 3]]
const result = findMaxSubArr(testArray)
console.log("check", result)






export { debounceFn, throttle, currey, sum, chatArry }