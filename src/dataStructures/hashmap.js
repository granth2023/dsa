
//two sum 
// one function, 2 params, 2 variables, one condition, one for loop, a has own promperty, 2 calls on the value of array, 5 calls on the index, an empty array, 2 returns, another array of the variable,   variable 4 times, the 2nd variable, 3 times


// function twoSum(nums, target){
//     let hasmap={}

//     for( let i = 0; i<nums.length; i++){
//         const complement =  target - nums[i]
//         if(hasmap.hasOwnProperty.complement){
//             return [hasmap[complement], i]
//         }
//         hashMap[nums[i]]= i;
//     }
//     return [];
// }


// function two(nums, target){
//     let hashMap = {};


//     for(let i = 0; i < nums.length; i++){
//         let complement = target - nums[i]
//         if( hashMap.hasOwnProperty(complement)){
//             return [hashMap[complement], i]
//         }
//         hashMap[nums[i]]=i





//     }
//     return [];

// // }


// function tooSum(numbers, target){
//     let hasher = {}

//     for(let i=0; i < numbers.length; i++){
//         let complement = target - numbers[i]
//         if(hasher.hasOwnProperty(complement)){
//             return [hasher[complement], i]
//         }
//             hasher[numbers[i]]= i;
//     }
//     return [];
// }


function two(array, target){
    let hasmap ={}

    for(let i = 0; i < array.length; i++){
        let complmeent = target - array[i]
        if(hasmap.hasOwnProperty(complement)){
            reutrn [hasmap[complement], i]
        }
        hasmap[array[i]] = i
    }
return []


}