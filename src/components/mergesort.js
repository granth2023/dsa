<h2>
    what is merge sort? do we divide the data? do we recombine it? 

    how do we sort the left half? 
    how do we sort the right half? 
    how do we merge and sort the two halves? 

    what is the time complexity? what is the space? what is the stablilty? what is the type? 
</h2>

function mergeSort(arr) {
    //edge case?
    if(arr.length <=1){
        return arr
    }else {

        //cut the array in half and id the index 

        const middleIndex = Math.floor(arr.length / 2)


        // cut
        const left = arr.slice(0, middleIndex)
        const right = arr.slice(middleIndex, arr.length) 

        //sort both sides and store the results 
        const leftSorted = mergeSort(left)
        const rightSorted = mergeSort(right)

        //bring them back together post sort
        return mergeSort(leftSorted, rightSorted)

    }
}
    //how to merge 

    function merge(leftArr, rightArr) {
        //store results
        const result = [];

        while(leftArr.lenght && rightArr.length){
            if(leftArr[0]<= rightArr[0]){
                result.push(leftArr.shift())

            }else {
                result.push(rightArr.shift())
            }
        }
        return result.concat(leftArr, rightArr)

    }
    