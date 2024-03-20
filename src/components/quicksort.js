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