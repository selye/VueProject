/**
 * 实现一个bind函数
 *
 * **/

function fakeBind(obj,...arg){
    return (rest) => this.call(obj,...arg,...rest)
}

/**
 * 判断是否是回文数
 * [1,2,3,2,1]
 * **/

function isBackNumber(str){
    if(str.length % 2 === 0) return false;
    const pre = str.substring(0, Math.ceil(str.length/2) -1 );
    const cur = str.substring(Math.ceil(str.length/2));
    const curResult = cur.split("").reverse().join("")
    if(curResult === pre){
        console.log('pre', pre)
        console.log('cur', curResult)
        return true
    }
    return false
}
// 树状数据打平
const flatTree = (tree) => {
    const result = [];
    function flatFn(node){
        const {children, ...resetNode} = node;
        result.push(resetNode);
        if(Array.isArray(node.children) && node.children?.length > 0){
            node.children.forEach(flatFn)
        }
    }
    tree.forEach(flatFn);
    return result
}

const treeData = [
    {
        id:1,
        name:'设计部',
        pid: 0,
        children: [
            {
                id:2,
                pid: 1,
                name:"前端组"
            },
            {
                id:3,
                pid:1,
                name:"支持组"
            }
        ]
    },
    {
        id: 4,
        pid: 0,
        name: '财务部',
        children: [
            {
                id: 5,
                pid: 4,
                name:'人事组',
                children: [
                    {
                        id: 7,
                        pid: 5,
                        name:'小明'
                    },
                    {
                        id: 8,
                        pid: 5,
                        name:'小红'
                    }
                ]
            },
            {
                id: 6,
                pid: 4,
                name:'销售组'
            }
        ]
    }
]
const r1 = flatTree(treeData);

console.log('r1', r1)
//一维数组转树
const toTree = (data) => {
    const result = [];
    const map = new Map()
    data.forEach((node) => {
        node.children = []; // 初始化 children 属性
        map.set(node.id, node)
    })
    console.log(map)
    data.forEach((node) => {
        let parent = map.get(node.pid);
        if(parent){
            parent.children?.push(node)
        }else{
            result.push(node)
        }
    })
    return result
}

const r2 = toTree([...r1]);
console.log('tree', r2)


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 * 两数之和
 */
var twoSum = function(nums, target) {
    const numsMap = new Map();
    for(let i = 0; i < nums.length; i++){
        if(numsMap.has(target - nums[i])){
            return [numsMap.get(target - nums[i]), i]
        }else{
            numsMap.set(nums[i], i)
        }
    }
    return []
};

/**
 * @param {number} x
 * @return {boolean}
 * 回文数
 */
var isPalindrome = function(x) {
    // if(x < 0) return false;
    // const str = String(x);
    // let left = 0; // 左侧指针
    // let right = str.length -1; // 右侧指针
    // while (left < right){
    //     if(str[left] !== str[right]){
    //         return false
    //     }
    //     left++;
    //     right--;
    // }
    // return true

    const str = String(x);
    const len = str.length;
    for(let i =0; i< len; i++){
        if(str[i] !== str[len -i -1]){
            return false
        }
    }
    return true
};

/**
 * @param {string} s
 * @return {number}
 * 罗马数字转整数
 */
var romanToInt = function(s) {
    const romanObj = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000,
    }
    var result = 0;

    for(let i = 0; i< s.length; i++){
        if(i+1 < s.length && romanObj[s[i]] < romanObj[s[i+1]]){
            result -= romanObj[s[i]]
        }else{
            result += romanObj[s[i]]
        }
    }

    return result
};

// console.log(romanToInt('III'));


/**
 * @params {array} list
 * @return {number}
 * */

var getMiddleIndex = (nums) => {
    // 得到总和
    const sum = nums.reduce((pre, cur) => {
        return pre+cur;
    })
    console.log('sum', sum);
    let leftNumber = 0;
    for(let i = 0; i < nums.length; i++){
        const rightNumber = sum - leftNumber - nums[i];
        if(leftNumber === rightNumber){
            return i
        }else{
            leftNumber += nums[i]
        }

    }
    return -1
}
// console.log(getMiddleIndex([1,7,3,6,5,6]));

/**
 * searchInput
 * @params {array} list
 * @params {number} x
 * @return {array} list
 * */

var searchInsert = function(nums, target) {
    for(let i =0; i< nums.length; i++){
        if(nums[i] >= target){
            return i
        }
    }
    return nums.length
    
};