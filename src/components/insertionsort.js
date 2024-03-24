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

    //how do we insert in the loop? where do we know where to do it? 
    for ( let i = 1; i < arr.length; i++ ) {
       //how do we look at each element on its own? 
        let currentElement = arr[i];

        //we need to know where to insert, so how do we know if between two things works? 

        let j = i -1;

        //what do we do if the last elemeent we were looking at is greater than the current element? how do we move the j into the next index point? 

        while(j >=0 && arr[j] > currentElement) {
            //move the j to the right
            arr[j+ 1] = arr[j];
            //move to next comparison for the sorted to the current element 
            j--
        }

        //how do we create the next comparison for arr[j] and current element? 
        arr[j+ 1] = currentElement;
    }
    return arr;
}

//To do: review this one 

const myArray = [22, 11, 99, 88, 9, 7, 42];
console.log("Original array:", myArray);
insertionSort(myArray);
console.log("Sorted array:", myArray);



