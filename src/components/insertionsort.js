<h2>
    does it work well on big data or small collection? 

    how do we psuedo code? 

    how do we handle the first item? can we say its sorteD? 

    what do we do next? how do we look at the next element? do we treat it as unsorted? what does that mean? what do we do with it? 

    can we insert the element into the sorted portion? do we evalute which? do we evalute the sorted portion? where does the sorted portion go? 

    how do we pull elements out and compare it? how do we put it back into place? 

    what does it mean to consider the first item in the array as sorted in context of the insertion sort? what does this assume? if the first item in the array is sorted, what is the rest of the array? 

    is a single element by itself inherently sorted?  
    what are we doing with the unsorted portion? how do we insert them into the sorted portion?
    how do we compare it to the sorted section? can we sort it backwards? How does that work? how do we move backwards? 
    what determines the correct position? the unsorted element is greater than or less than the sorted elemtns. shift the sorted lements one psotion to right to make space. shifting continues until. 

    what is the time complexity? space complexity? why? 






</h2>


function insertionSort (arr){

    //start sorting by looping through, but start at one because first element is already considered sorted 
    for ( let i = 1; i < arr.length; i++ ) {
       //take where we are at in the array and store it in the current element
        let currentElement = arr[i];

        //create the compairson ability for the current element to the most recent sorted element 

        let j = i -1;

        //if the most recent sorted element is greater than the current element than we need to move it to right  to make space for current element. We need to loop through the sorted . Rememebr your edge case.

        while(j >=0 && arr[j] > currentElement) {
            //move the j to the right
            arr[j+ 1] = arr[j];
            //move to next comparison for the sorted to the current element 
            j--
        }

        //if the current elmeent is greater than the sorted element we are comparing to, we add one index to the sorted area and store the current element there. 
        arr[j+ 1] = currentElement;
    }
    return arr;
}

const myArray = [22, 11, 99, 88, 9, 7, 42];
console.log("Original array:", myArray);
insertionSort(myArray);
console.log("Sorted array:", myArray);



