// completed above) Define a function, as a function declaration, maxOfTwoNumbers that takes two numbers as arguments and returns the largest of them. If they are the same, return that number. Use the if-else construct or a ternary expression - the Math.max method is not allowed.

// Define a function, as a function expression, maxOfThree that takes three numbers as arguments and returns the largest of them. Again, the Math.max method is not allowed.

function maxOfThree(x, y, z) {
    if( x > y && x > z){
        return x;
    } if ( y > z && y > x){
        return y;
    } else {
        return z;
    }
}
console.log(maxOfThree(1, 2, 3))
// Define a function, as a function declaration, isCharAVowel that takes a character as an argument and returns true if it is a vowel, false otherwise.

function isCharAVowel(char){
    char = char.toLowerCase();
    if ( char == 'a' || 'i' || 'e' || 'o' || 'u' || 'y'){
        return true;
} else{
    return false ;
}

}
console.log(isCharAVowel('b'))

// Define a function, as a function expression, sumArray that takes an array of numbers and returns the sum of those numbers. For example, sumArray([2, 4, 5]); would return 11.
let sum = 0;

function sumArray(nums){
    for(let i  = 0; i < nums.length; i++){
    sum += nums[i];

}
return sum;
}
nums = [ 5, 4, 5 ];
console.log(sumArray(nums))


// Define a function, as a function declaration, multiplyArray that takes an array of numbers and returns the product those numbers. For example, multiplyArray([2, 4, 5]); would return 40.

let product = 1;
function multiplyArray(newNums){
    for(let i = 0; i < newNums.length; i++){
        product *= newNums[i]
    }
    return product;
}
newNums = [2, 4, 5 ]
console.log(multiplyArray(newNums))
// Define a function, as a function expression, numArgs that returns the number of arguments passed to the function when called.
function numArgs(){
    

    return arguments.length
}
console.log(numArgs('1', '3', '4', '5'))
// Define a function, as a function declaration, reverseString that takes a string, reverses the characters, and returns it. For example, reverseString('rockstar'); would return the string "ratskcor".

//split method for the type and then reverse method to manipulate the arguments and then join to complete the process. 

function reverseString(s){
        reversed = []
        for( let i =0 ; i  > s.length; i-- ){
            reversed.push(s[i])

        }
        reversed.join();
        return reversed;
}
console.log(reverseString('rockstar'))

// Define a function, as a function expression, longestStringInArray that takes an array of strings as an argument and returns the length of the longest string.

// how do oyu break down a string into its characters? and then we want to count how many characters are there and we want to break those into a thing. its jsut how do oyou do that i like the logic of the has table but what are we to do with it. 

function longestStringInArray(arr){
    //hash table? 
    comparison = arr[0];
    for ( let i = 1; i < arr.length; i++ ){
        //break down value into characters 
        if(arr[i] > comparison)
        {
            comparison = arr[i];
        }
    }
    return comparison;
}



// Define a function, as a function declaration, stringsLongerThan that takes an array of strings and a number as arguments; and returns an array of the strings that are longer than the number passed in. For example, stringsLongerThan(['say', 'hello', 'in', 'the', 'morning'], 3); would return ["hello", "morning"].

function stringsLongerThan(arr, x){
    //how do we get the amount of characters in a string? 

    for ( let i = 0; i < arr.length; i++ ){
        results = [];
       newArr =  [arr[i].split("")]
        if( newArr.length > x ){
            
            results.push(newArr[i].join(""));
        }
        return results; 
    }


}