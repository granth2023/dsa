//linear search is what? how is a for loop linear? what about finding a value wihtin an array for loop is linear? 

// what are some characteristics of a linear search? 

//why o of n? 

//can they be done on sorted or unsorted? why? 

// can binary be done on sorted or unsorted? why? 

// first, get the starting index and ending index of a collection -- how do we do that? 
//what do we pass in the binary serach? is it the array and the value we want to find? 
// function binarySearch(arr, x){
//     let start = 0 
//     let end = arr.length -1


//     //how do we finthe midpoint by adding idnexes together and diving by 2? 
//     let midpoint = (start +end)/2;

//     if (x = midpoint[x]){
//         return x;
//     }
//     while (midpoint != x || start != x || end !=x){


//     if ( x < midpoint ){
//         midpoint = (start + midpoint -1)/2

//     } else  {
//         midpoint = (midpoint +1 + end)/ 2

//     }
//     }
//     return arr[x];
// }

//     //how do we write the fact that while we have no found the element and not exhauseted the serach


//     while( x != arr[i]){

//         function find(x) {

//     // how do we serach to the left of the midpoint? to the right? 
//     if(x !=  arr[0] || x != midpoint -1 ){
//         submidpoint = (arr[0] / midpoint -1 )/ 2 
//         find()
//     }

//     //why repeat athe midpoint calucalition start and end index over 2? 

//     //how do we return the idnex if found? if not how do we return the bitwise not of the start index? 

//     }
// }


//what are characteristics of binary? 
//why only to sorted? what is the big o runt ime? why is ist fast? do we do it on unsorted tacked on? 

//how can we add andd delted elemnts froma sorted colelction? 
//how do we index and serach mroe complex elemnts in a colelction? 
//what is interpolation? 

//second attempt 


//declare and pass the specific value and where it belongs to 
// function binarySearch (array, x){




// //save the first value and the last value in the set 
// first = 0 
// last  = array[array.length - 1]

// // while our start is less than or equal to our end, we want to divide the data set in half and save that 
// while (first <= last ){
//     midpoint = (first + last)/2


// //if the value of our midpoint is our value then we can return that midpoint
// if (array[midpoint] == x ) {
//     return midpoint



// //if our value at midpoint is less than our value we want to look to the right of the midpoint and keep dividng 
// } else if (array[midpoint] < x) {
//     start = array[midpoint + 1]



// //if our value is greater than x we want to look to the left and resave the end value 
// } else if ( array[midpoint] > x ){
//     end = array[midpoint - 1]


// //if the value is not there is the data set just give us bitwise
// } else {
//     return -1 
// }
// }
// }

// issues because you're pulling values into the variables and then just using these values and creating a broken code. Try again before moving on. 

// function binarySearch(array, x){
//     let start = 0
//     let end = array.length - 1

//     while ( start <= end) {
//     let midpoint = Math.floor((start + end)/2)
//     if ( array[midpoint] == x){
//         return midpoint
//     } else if ( array[midpoint] < x ){
        
//         end = midpoint - 1;
//         //youre saying the value of midpoint is less than x which mean we eliminate the left half so we need to look at the right half 
//     } else if (array[midpoint] > x){
//         start = midpoint + 1;
//         //we need ot look at the left half if the midpoint's value is greater than x 
//     } else{
//         return -1 
//     }

//     }

// }

//remember, binary can only work with sorted algorithims! we can't do this if for example well, its unsorted! 

//4th

function binary(array, x) {
  let start = 0;
  let finish = array.length - 1;

  while (start <= finish) {
    let midpoint = Math.floor((start + finish) / 2);

    if (array[midpoint] == x) {
      return midpoint;
    } else if (array[midpoint] > x) {
      end = midpoint - 1;
    } else if (array[midpoint] < x) {
      starat = midpoint + 1;
    } else {
      return -1;
    }
  }
}


//binary search algo 

//you come to a precipe with 7 different options each with a weighted options each in order

//

function binary(array, x){
  let start = 0
  let finish = array.length - -1 

  while( start <= finish){
    let midpoint = Math.floor((start + finish)/2)
    if( array[midpoint] == x ){
      return midpoint
    } else if ( array[midpoint] < x){
      start = midpoint + 1
    } else {
      finish = midpoint -1 
    }


  }
  return -1
}


//
// Linear Search
// Clarification on Use Cases: Can you provide more examples of scenarios where a linear search would be preferable over other search methods, even in a sorted array?
// Efficiency Questions: For linear search, is the Big O runtime always O(N), or are there any edge cases where it could be more efficient?
// Comparison with Other Search Methods: How does linear search performance compare to other search algorithms when dealing with small datasets?
// Binary Search
// Midpoint Calculation: Could you explain why finding the midpoint involves adding the start and end indexes together and then dividing by 2? Are there cases where this calculation could lead to issues, such as overflow in some programming languages?
// Behavior of Bitwise NOT: In the pseudocode for binary search, if the element is not found, it returns the bitwise NOT of the start index. Can you explain the rationale behind this and how it might be used in practice?
// Search Space Reduction Logic: How exactly does reducing the search space to the left or right of the midpoint improve efficiency? Can you explain the intuition behind this choice?
// Practical Application: In a real-world application, how significant is the performance difference between binary search and linear search? Could you give an example with actual numbers?
// Level Up 🚀
// Modifying Sorted Collections: When adding or deleting elements from a sorted collection, what strategies can be employed to maintain the sorted order efficiently?
// Complex Elements: How does indexing and searching change when dealing with more complex elements in a collection, such as objects or dictionaries, rather than simple data types like numbers or strings?
// Interpolation Search: Can you explain what interpolation search is and how it compares to binary search? When might it be more effective to use interpolation search over binary search?
// Whiteboarding
// Whiteboarding Practice: Could you suggest a few problems that would be particularly good for practicing binary and linear searches on a whiteboard?
// Transitioning Concepts to Code: How would you recommend transitioning the understanding of these search algorithms from theoretical to practical, especially in a whiteboarding context?