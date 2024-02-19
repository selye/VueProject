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

// const testArray = [[1, 2, 3], [4, 5, 6], [-1, 12, 13], [6, 18, 0], [5, 5, 5], [6, 9, 3]]
// const result = findMaxSubArr(testArray)
// console.log("check", result)

/**
 * 树结构转换
 *
 * */

let arr = [{
    id: 1,
    pid: 0,
    name: 'body'
}, {
    id: 2,
    pid: 1,
    name: 'title'
}, {
    id: 3,
    pid: 2,
    name: 'div'
}]

function toTree(data){
    let result = [];
    let map = {}
    data.forEach((item) => {
        map[item.id] = item
    })
    data.forEach((item) => {
        let parent = map[item.pid];
        if(parent){
            (parent.children || (parent.children = [])).push(item)
        }else{
            result.push(item)
        }
    })
    return result
}


/**
 * 树转数组
 *
 * */

const tree = [
    {
        id:1,
        name:'body',
        pId:0,
        children: [
            {
                id:2,
                name:'title',
                pId:1,
                children: [
                    {
                        id:3,
                        name:'div',
                        pId:2,
                    }
                ]
            }
        ]
    }
]

/**
 * 树状转数组
 * 递归调用
 * */

function toArray(data){
    const result = [];
    function flatten(node){
        console.log('node', node)
        result.push(node)
        if(node.children && node.children.length > 0){
            node.children.forEach(child => flatten(child))
        }
    }
    data.forEach(node => flatten(node))
    return result
}


/**
 * 递归
 * */

/**
 * 多维数组拉平
 * @param {[type]} sourceArr:
 * input: [
 *   ['戴尔', '苹果', '联想'],
 *   ['笔记本', '平板电脑', 'PC机', '上网本'],
 *   ['黑色', '银色', '白色'],
 * ]
 *
 * @output {[type]} targetArr: ['戴尔-笔记本-黑色', '戴尔-笔记本-银色', '戴尔-笔记本-白色', '戴尔-平板电脑-黑色', '戴尔-平板电脑-银色', ...];
 */

const sourceArr = [
    ['戴尔', '苹果', '联想'],
    ['笔记本', '平板电脑', 'PC机', '上网本'],
    ['黑色', '银色', '白色'],
]

function flatduceArray(data: string[][]){
   const res = data.reduce((prev :string[],cur  :string[]) => {
       const arr = [];
       prev.forEach((sub1) => {
           cur.forEach((sub2) => {
               arr.push(`${sub1}-${sub2}`)
           })
       })
       return arr
   })

    return res
}
//
const flatResult = flatduceArray(sourceArr)
console.log(flatResult)

/**
 * 有序数组合并
 *
 * @param {Array} arr1 有序数组1
 * @param {Array} arr2 有序数组2
 * @param {Array}
 */


function merge(arr2) {
let len = arr2.length

for(let i = 0; i< len - 1 ; i++){
    for(let j = 0; j < len - 1 - i; j++){
        if(arr2[j] > arr2[j + 1]){
            let temp = arr2[j];
            arr2[j] = arr2[j+1]
            arr2[j+1] = temp
        }
    }
}

    return arr2;
}

// const arr1 = [1,3,5];
// const arr2 = [2,4,6,1,3,5];
// const checkResult =  merge(arr2)
// console.log("check", checkResult)




/**
 * 冒泡排序
 *
 * [3,2,1,4]
 *
 *
 * */



function bubbleSort(arr: number[]): number[]{
    const len = arr.length;

    for(let i = 0; i < len; i++){
        for(let j = 0; j < len - 1 - i; j++){
            if(arr[j] > arr[j+1]){
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp
            }
        }
    }
    return arr
}

// const testArr = [3,2,4,1]
// const result =  bubbleSort(testArr)
// console.log(result)




export { debounceFn, throttle, currey, sum, chatArry, toTree, toArray, flatduceArray, bubbleSort }