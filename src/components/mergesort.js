<h2>
    what is merge sort? do we divide the data? do we recombine it? 

    how do we sort the left half? 
    how do we sort the right half? 
    how do we merge and sort the two halves? 

    what is the time complexity? what is the space? what is the stablilty? what is the type? 
</h2>
//what goes through a merge? 
function mergeSort(arr) {
    //what if the array is 1 or less? can we merge it? 
    if(arr.length <=1){
    // if it is how do we break out? 
        return arr
    }else {

        //how do we break the array in half? what would be the middle index? can we call the point we cut on something? 

        const middleIndex = Math.floor(arr.length / 2)


        //how do we create two new arrays? 
        const left = arr.slice(0, middleIndex)
        const right = arr.slice(middleIndex, arr.length) 

        //how do we then have an after for the two new arrays? 
        const leftSorted = mergeSort(left)
        const rightSorted = mergeSort(right)

        //what would our after after be? 
        return mergeSort(leftSorted, rightSorted)

    }
}
    //what is the merge function? 

    function merge(leftArr, rightArr) {
        //how do take two things that exist and merge them? where do we put the results? 
        const result = [];
//what are we trying to do in the new array? what order do we want? How are we comparing them? 
        while(leftArr.length && rightArr.length){
            //if we determine something should go into the results how do we? 
            if(leftArr[0]<= rightArr[0]){
                result.push(leftArr.shift())

            }else {
                result.push(rightArr.shift())
            }
        }
        //how do we get out? 
        return result.concat(leftArr, rightArr)

    }

    //to do -- break down all these arrays, then set up a cross like here are all the arrays, here are problems that go with them-- merge sort and what else? I mean merge sort? are we working our way up to merge srot? wuick sort? 
    