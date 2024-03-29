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
function binarySearch (array, x){
    
}
//save the first value and the last value in the set 


// while our start is less than or equal to our end, we want to divide the data set in half and save that 

//if the value of our midpoint is our value then we can return that midpoint

//if our value at midpoint is less than our value we want to look to the right of the midpoint and keep dividng 

//if our value is greater than x we want to look to the left and resave the end value 

//if the value is not there is the data set just give us bitwise