<h2>

    what is the role of the pivot? why is it importnat? what do we do with elmeents less than the pivot and with elmeents greater? why does it help? how are smaller sub problems better? can it be solved recursively? what is recursively? 

    where would you choose to pivot? is there a bad palce? 

    what is the partioning process? how do we rearrange the aray? does it fully sort it? can we do this subeseuently? 

    why is recursion used? how is it applied? what are we effectively doing? divide and conquer! 

    what is the base condition for recursive calls? when is an array inherently sorted? 

    what factors influence quick sort performance? 

    what is worst case? why? how do we mitigate? 

    what is random pivot selection? what is median of the three? what is intro sort? 


</h2>

//create function and pass the array itself and then the subarray marked by a low index and high indx
function quickSort(array, low, high) {

    //if low is correctly lower than high
    if (low < high) {
        // Partition the array and get the pivot index
        let pivotIndex = partition(array, low, high);

        // Recursively apply the same logic to the sub-array before the pivot
        quickSort(array, low, pivotIndex - 1);

        // Recursively apply the same logic to the sub-array after the pivot
        quickSort(array, pivotIndex + 1, high);
    }
}

function partition(array, low, high) {
    // Choose the high element as pivot
    let pivot = array[high];

    // Pointer for greater element
    let i = low - 1;

    // Traverse through all elements, compare each with pivot
    for (let j = low; j <= high - 1; j++) {
        // If current element is smaller than or equal to pivot
        if (array[j] <= pivot) {
            // Increment index of smaller element
            i++;
            swap(array, i, j);
        }
    }
    swap(array, i + 1, high);
    return (i + 1);
}

function swap(array, i, j) {
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
}

// Example usage
const arr = [10, 7, 8, 9, 1, 5];
let n = arr.length;
quickSort(arr, 0, n-1);
console.log("Sorted array: ");
console.log(arr);


//so in this we have a function swap, partition, , quick sort

//what does swpa do? it passes the array, and two variables i and j. we are passing them all through on one another storing them wihtin, why? why are we doing this? probably because the item are not in the right spot. what does partition do? it has an array, and low and high number -- we have a variable called pivot of array at the high number, we have a i variable that is lower than a low number,  

//what is quick sort? 
//what is a divide and conquer strategy? 
//how can we break down an array? how do we keep track of where we cut into? 
//what is recursion? 
//can we keep breaking this down? 

//why is it o n log n

//imagine youre developing an invnetory management system for a large online retailer. you need to implement a feature that sorts a list of products by their price and then by their rating in descending order to display on the website front page. 

//so a product array might have objects with two key value pairs, price and rating. 

//so lets sort, quicksort what are we passing, now ulitmately we're going to be doing our sorting on a left of a point and the right of point, so does it make sense to decalre it as left and right? 
//now  as long as their are more than 1 thing in the array, we have to count that we want to create that point, that pivot. so we are going to stay to create that we'll need to do something to the array and the left and the right which well call a parition function. 
//once we have that pivot index we now know the limits of our left and right where they end or start. 
//draw!
//and we'll run our sort our quick sort on both. 
//return the arr as its updated. 

//so we can set up how to parition the pivot index
//so we have the pivot Index but we need to get into the values
//so we'll start with the worst case scenario 
//now remember we're going to be swapping things so how do we have comparitive values besdies just where we are int he array? 
//why is pivot arr[right]? Because that's where we cut off from the larger before so in the context, this is pivot but here is the right most thign. 
//so we have a variable for whats on the right and then we have a vairable for allt he way to the left minus one? because we are going to go through each value in the array and we'll need to see if the value needs to move back or forward or stay. so we have a variable tos tore for the left and the right. 
//so that's i
//then let's loop, j starts at the elft of the array, and we go until the right. why not j.length? 
//if the value of index where j i is less than the price of pivot price or the price is equali to the pivot's price and the value of the rating is greater than the rating, we need to move it. if there price is the same, we need to 

//so we have j at left. and we're saying 


//ultimatley we are reutn photos 

//ultimately we are storing a pivot Index by taking our data and running it through a function with a left and a right.  we want to divde and conquer so so those division are made with barriers called left and right

// Why Do Nothing for j > pivot?
// Efficiency: By only moving elements that are less than the pivot, we minimize the number of swaps required, which contributes to the efficiency of the algorithm.
// Preservation of Partition Goals: Since the partitioning aims to ensure all elements greater than the pivot end up on its right, there's no need to move elements already satisfying this condition. The algorithm is designed to achieve its partitioning goal with minimal operations.
// Preparation for Recursion: Quick Sort is a recursive algorithm. After partitioning, it recursively sorts the sub-arrays formed to the left and right of the pivot's final position. Elements greater than the pivot are inherently in the correct segment for further sorting. Thus, leaving them untouched is part of strategically preparing the array for these recursive steps.



// where the last point plus one of where we swapped value is where right is greater than all values to left so this is where right should be 


//how do we create subarrays? 
//we need to create left and right boundaries, so how do we do that? well we start with the original array. 
//to divide it we srtore the value of the right most value in a pivot. if the value of a different index is less than the right we will move it to the left and increment a pointer so that when there are no more values to move left when can move the  photo at right value to the closest positon to everything less then. we now have a pivot index where we can send subarrays into by saying okay from left ot one less than the pivot index lets get into it and everything to the right. 
//because there is some sorting that relady took place we're comparing less and less things because we dont' care elements within each other, its all in comparison ot the pivot so the subarrays boudnaries will be good but within it we need to get some things sorted. 
//so how do we quick sort? 
//we need to compare 

//okay so we have moved everything -- now what? need to do the other algorithims - know them this well! 
//selection sort, bubble, insertion, merge. 
