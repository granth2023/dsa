{/* <h2>
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

    } */}

    //to do -- break down all these arrays, then set up a cross like here are all the arrays, here are problems that go with them-- merge sort and what else? I mean merge sort? are we working our way up to merge srot? wuick sort? 
    

//terminology what is a paramter or argument -- use it three times upon declaration to pass, call the length and return for less than 1 so that goes up top 
    // function mergeSortPhotos(photos) {
    //     if (photos.length <= 1) {
    //       return photos;
    //     }
    //   //call 3 variables for the merge, call 3 params and 2 slice methods with 2 middle mpases an a zero,  with a photos length again over two 
    //     // Divide the array into two halves
    //     const middle = Math.floor(photos.length / 2);
    //     const left = photos.slice(0, middle);
    //     const right = photos.slice(middle);
      
    //     // Recursively sort each half and merge them back together
    //     //2 merge sort photos one left one right and merge 
    //     return merge(mergeSortPhotos(left), mergeSortPhotos(right));
    //   }
    //   //one left one right 
    //   //3 let variables 
    //   //2 set to zero one set to array 
    //   function merge(left, right) {
    //     let result = [];
    //     let leftIndex = 0;
    //     let rightIndex = 0;
      
    //     // Compare each element of the left and right arrays and merge them into result

    //     //a while loop a if else 2 dot lenghts a left index a right index left and right 
    //     //2 timestamps, 2 left index 2 right index 2 left 2 right 2 push 2 result a third left and right index with incrementor for each 3 less then signs one and sign
    //     while (leftIndex < left.length && rightIndex < right.length) {
    //         //we just want to put the least value in the array first 
    //       if (left[leftIndex].timestamp < right[rightIndex].timestamp) {
    //         result.push(left[leftIndex]);
    //         leftIndex++; // Move to the next element in the left array
    //       } else {
    //         result.push(right[rightIndex]);
    //         rightIndex++; // Move to the next element in the right array
    //       }
    //     }
      
    //     // If there are remaining elements in left or right arrays, add them to the result
    //     //what does this line do? 
    //     //what is concat does

    //     //1 result, 2 conccat, 2 slice, left left index right right index 
    //     return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
    //   }
      
    //   // Example usage
    //   const photos = [
    //     { timestamp: '2021-03-25T15:00:00Z', photoId: 1 },
    //     { timestamp: '2019-06-14T09:30:00Z', photoId: 2 },
    //     { timestamp: '2020-12-01T12:15:00Z', photoId: 3 },
    //     { timestamp: '2018-01-20T07:45:00Z', photoId: 4 },
    //     // Add more photos if needed
    //   ];
      
    //   const sortedPhotos = mergeSortPhotos(photos);
    //   console.log(sortedPhotos);
      
// function mergeSortPhotos(photos){
//   if(photos.length <= 1){

// return photos 
//   }
//     const midpoint = math.floor(photos.length/2);
//     const left = photos.slice(0, midpoint)
//     const right = photos.slice(midpoint)

// return merge(mergeSortPhotos(left), mergeSortPhotos(right))
// }

//   function merge(left, right){
    
//     let result = [];
//     let leftIndex = 0;
//    let rightIndex = 0;
//          while( leftIndex < left.length  && rightIndex < right.length){
//             if( left[leftIndex].timestamp < right[rightIndex].timestamp){
//                 result.push(left[leftIndex])
//                 leftIndex++;
//               }else{
//                 result.push(right[rightIndex])
//                 rightIndex++;
//               }
//             }


  

//   return result.concat(left.slice(leftIndex)).concact(right.slice(rightIndex))

// }


// function mergeSortPhotos(photos){
// if(photos.length <= 1){
// return photos
// }
// let midpoint = math.floor(photos.length/2)
// let left  = photos.slice(0, midpoint)
// let right = photos.slice(midpoint)

// return merge((mergeSortPhotos(left), mergeSortPhotos(right)))
// }

// function merge (left, right){
//   let result = []
//   let leftIndex = 0
//   let rightIndex = 0



//   while (leftIndex < left.length && rightIndex  < right.length){

//     if(left[leftIndex].timestamp < right[rightIndex].timestamp){
//       result.push(left[leftIndex])
//       leftIndex++;
//     }else {

//       result.push(right[rightIndex])
//       rightIndex++
//     }


//   }

//   return result.concact(left.slice(leftIndex)).concat(right.slice(rightIndex))


// }

function mergeSortPhotos(photos){
  if(photos.length <= 1){
    return photos
  }

  let midpoint = math.floor(photos.length / 2)
  const left = photos.slice(0,midpoint)
  const right = photos.slice(midpoint)

  return merge((mergeSortPhotos(left), mergeSortPhotos(right)))
}

function merge(left, right){
  let result = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while(leftIndex < left.length && rightIndex < right.length){
    if(left[leftIndex].timestamp < right[rightIndex].timestamp){
      result.push(left[leftIndex])
      leftIndex++;
    } else{
      result.push(right[rightIndex])
      rightIndex++;
    }

    return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex))

  }



}








 


//       [ Array ]
//       // mergeSortPhotos(array)
//          |
// -----------------------------------
// |                                   |
// [ Sub-array ]                     [ Sub-array ]
// // mergeSortPhotos(left)          // mergeSortPhotos(right)
// |                                   |
// -------------                      -------------
// |             |                    |             |
// [Sub-sub]     [Sub-sub]            [Sub-sub]     [Sub-sub]
// // Further recursive calls       // Further recursive calls
// |             |                    |             |
// -------        -------              -------        -------
// |  |  |  |    |  |  |  |            |  |  |  |    |  |  |  |
// [1] [1] [1] [1] [1] [1] [1] [1]    [1] [1] [1] [1] [1] [1] [1] [1]
// -------        -------              -------        -------
// |             |                    |             |
// |          [ Merged ]              |          [ Merged ]
// |        // merge(left, right)     |        // merge(left, right)
// |    [Compare elements & swap]     |    [Compare elements & swap]
// |             |                    |             |
// -------------                      -------------
// |                                   |
// |                                [ Merged ]
// |                             // merge(left, right)
// |                         [Compare elements & swap]
// |                                   |
// -----------------------------------
//          |
//       [ Merged ]
// // merge(left, right)
// [Compare elements & swap]
//          |
//       [ Sorted ]
