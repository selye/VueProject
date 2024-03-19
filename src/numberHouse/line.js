/**
 * 链表
 * **/

function createArray(){
    const arr = new Array(7)
    for(let i = 0; i < arr.length; i++){
        arr[i] = [Math.floor(Math.random()*10)]
    }
    return arr
}

const result =  createArray()
console.log(result)
for(let i =0; i< result.length;i++){
    const len = result[i].length;

    for(let j = 0; j < len; j++){
        console.log(result[i][j],i,j)
    }
}

/**
 * 栈 Stack：后进先出 push pop LIFO
 * 队列 Queue: 先进先出 push shift FIFO
 */



/**
 * call（thisOrg,arg1,arg2,....）
 * **/

function getPerson(){
    console.log(`Hello,${this.name}`)
}
const person = {name:'shijie'};

getPerson.call(person,'15','boy')

/**
 * apply(thisOrg,[...])
 * **/

function fakeApply(){
    console.log(`Hello,${this.name}`)
}
// const person = 'mossa'


/**
 * bind(thisArg);
 * bind返回一个方法
 * **/

function greet() {
    console.log(`Hello, ${this.name}!`);
}

var personBind = { name: 'Alice' };
var greetPerson = greet.bind(personBind); // 创建新函数 greetPerson
greetPerson(); // 输出 "Hello, Alice!"

