//how to find if a parenthesis matches 

// 2 const one for 2 if 1 else two brack calls 2 return empty array an object 

// function valid(s){
//     const stack = [];
//     const bracket = { 
//         '(': ')',
//         '{': '}',
//         '[': ']'
//     }

//     for( char of s){
//         if(bracket[char]){
//             stack.push(bracket[char])
//         } else {
//             if(stack.pop() !== char) return false 
//         }
//     }
//     return stack.length === 0
// }


// function validate(s){
//     const stack = []
//     const bracket = {
//         '(': ')',
//         '{': '}',
//          '[': ']',
//     }
        
//          for (char of s) {
//             if(bracket[char]){
//                 stack.push(bracket[char])
//             } else{
//                 if(stack.pop() !== {)
//             }

//     }
// }
//is the string valid 
function isValid(s){
    //create a stack 
    stack = []
    //create object of validity to compare
    brackets = {
        '(': ')',
       '{': '}',
       '[': ']',
    }
    //go through each character in a string via for of stamenet
    for(char of s){
        //
        if(bracket[char]){
            stack.push(bracket[char])
        }else {
            if(stack.pop() !== char){
                return false
            }
        }
    }
    return stack.length === 0
}

// what is the funciton saying? waht are we testing? 
//what makes it stacking conceptually? 
//why matching pairs first order 

//stack is more about behavior and operations it supports than about specific implemenation. are we treating it as a stack. think like a stack of pancakes. 



//daily temps 

// one function, one return, 2 lets, an empty array, a new array command, 1 param we pass five times, the stack, 6 times, a push, a pop, a for loop, index value, 4 lengths, an index, a greater than 0 a minus 1, another minus, 3 use of i, double sarray, 



// function dailyTemps(temperatures){
//     let answer = new Array(temperatures.length).fill(0);
//     let stack = []

//         for( let i = 0; i < temperatures.length; i++){
//             if(      > 0            -1       ){
//                 const index = 
//             }
//         }



//     return answer 
// }


// function, a return,  push, a pop, a fill, 2 param dot length, a new array saved to the return variable, an empty stack, two stack dot length, a greater than 0, a stack at its length minus 1, a temperature at i, a const variable, the const variable value at return variable storing i - index, push the i 


// function dailyTemperature(temperature){
//     let answer = new Array(temperature.length).fill(0);
//     let stack = []

//     for( let i = 0; i < temperature.length; i++){
//         if ( stack.length > 0 &&  tempature[i] >    stack[stack.length - 1]){

//         const index = stack.pop();
//         answer[index] = i - index 
//         }else{

//         }
//         stack.push(i)
//     }


//     return answer 
// }


//function, 2 let, a new, a for, a while, a const, a pop, a push, a return, a fill, 2 greater than signs, , one param, 4 dot lengths, 2 minus, 

function temeratureGet(temperatures){
    let answer = new Array(temperatures.length).fill(0);
    let stack =  [];

    for(let i = 0; i < temperatures.length; i){
        while(stack.length > 0 && temperatures[i] > temperature[stack[stack.length - 1]]){
            const index = stack.pop();
            answer[index]= i - index;
        }
        stack.push(i);
    }
    return answer;
}

//create a stack class 

// one class, one constructor, a push, a pop. a peek, an isempty, 7 this dot items, an empy array, 3 items dot lenght, 2 0's a minus 1, a underflow, 3 returns 

// class Stack {
//     constructor(){
//         this.items = [];
//     }

//     push(element){
//         this.items.push(element);
//     }

//     pop(element){
//         if( this.items.length == 0){
//             return 'underflow'
//             return this.items.pop()
//         }
//     }
//         peek(){
//             return this.items[this.items.length -1]
//         }
//         isEmpty(){
//             return this.items.length ===0;
//         }
    //}
//what are some other methods to include? 


class Stacks{
    constructor(){
        this.items = []
    }
    push(element){
         this.items.push(element)
    }

    pop() {
        if(this.items.length == 0)
            return 'underflow'
        return this.items.pop()
        }
    peek() {
        return this.items[this.items.length-1]
    }
    isEmpty(){
        return this.items.length === 0;
    }
        
}
let myStack = new Stacks();
console.log(myStack.isEmpty());

myStack.push(10);
myStack.push(20)
console.log(myStack.peek())

console.log(myStack.pop());
console.log(myStack.peek())
console.log(myStack.isEmpty());


//queue mindset -- push, and shift! 

class Queue {
    constructor(){
        this.items = [];
    }

    enqueue(element){
        this.items.push(element);
    }

    dequeue(){
        if(this.isEmpty())
            return "underflow";
        return this.items.shift();
    }
    front(){
        return this.item[0]
    }
    isEmpty(){
        return this.items.length===0;
    }
}

class set{
    constructor(){
        this.items = {}

    }
    add(element){
        //if element isn't there then add it
        if(!this.has(element)){
            this.items[element] = true;
            return true
    }
    return false;

}
    has(element){
        //hand wave: class for all objects method using a method to compare if element is already present 
        return Object.prototype.hasOwnProperty.call(this.items, element)
    }
    delete(element){
        //if element is there then remove
        if(this.has(element)){
            delete this.items[element]
            return true;
    }
    return false;
}
}


//

// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

//2 variables, one function, one new Set, one for loop, one if, 2 return, one hadd, one add, 3 uses of individual piece of whole, one true one false 

// const  containDupes =    function(nums){

//     const seen =  new Set()
//        for(let num of nums){
//        if(seen.has(num)){
//         return true
//        }
//        seen.add(num)
//     }
//     return false 


// }

const hasDupes = function(nums) {
    const seen = new Set();

    for(let num of nums){
        if(seen.has(num)){
            return true
        }
        seen.add(num)
    }

    return false
}
nums = [4,5,6,7,8,9,10,11,12,13,14,14]

var findAllDuplicates = function(nums) {
    let counts = new Map();
    let duplicates = [];

    // Count each number's occurrences
    for (let num of nums) {
        if (counts.has(num)) {
            counts.set(num, counts.get(num) + 1);
        } else {
            counts.set(num, 1);
        }
    }

    // Collect numbers that appear more than once
    for (let [num, count] of counts) {
        if (count > 1) {
            duplicates.push(num);
        }
    }

    return duplicates;
};
//Implement Stack using Queues
//MyStack stack = new MyStack();
// stack.push(1);
// stack.push(2);  
// stack.top();   // returns 2
// stack.pop();   // returns 2
// stack.empty(); // returns false

// a calss, constructor, 2 empty array, push, pop, top empty, shift, temp, while, first empty array greater then zero, 2 this.queie1.shift 2 thisqueue2.push,  [0], this.queue1.lenght two times, one === 0

// class MyStack{
//     constructor(){
//         this.queue1 = []
//         this.queue2 = []

//     }

//     push(x){
//             //missing pushing x to queue 2 
//         while(this.queue1.length > 0){
//             this.queue2.push(this.queue1.shift())



//         }
//         let temp = this.queue1
//         this.queue1 = this.queue2
//         this.queue2 = temp

//     }

//     pop(){
//         // return shift off queue 1 

//     }
//     top(){
//         return this.queue1[0]
//     }
//     empty(){
//         return this.queue1.length === 0

//     }
    
// }

class stackViaQueue{
    constructor(){
        this.queue1 =[]
        this.queue2 = []
    }

    push(x){
        this.queue2.push(x)
        while(this.queue1.length >0){
            this.queue2.push(this.queueA.shift())
        }
        let temp = this.queue1   
        this.queue1 = this.queue2
        this.queue2 = temp

    }
       

    pop(){
        return this.queue1.shift();
    }

    top(){
        return this.queue1[0]
    }

    isEmpty(){
        return this.queueA.length === 0
    }
}



class Stacky {
    constructor(){
        this.items =[];

    }

    push(element){
        this.items.push(element)

    }
    pop(){
        if(this.items.length == 0){
            return 'underflow';
        }
        return this.items.pop()
        
    }
    isEmpty(){
        return this.items.length === 0;
    }
    peek(){
        return this.items[this.items.length-1]
    }
}




class 


//UPDATE 