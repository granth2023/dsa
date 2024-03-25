

<h2>
    what is bubble sort? what does it do? how does it bubble up higher values? How does it push down lower values? 

    what is a swap counter? it increments when you compare adjacent values. if it stays at zero then we're there.  

    how does it detect completion/

    why ever use it? 

    how would you code? 
    

    what is the time complexity? what is the space complexity? what is the stability? what is the type? 



</h2>

function bubbleSort(arr) {
    //how do we keep track of how many times we swap? also we need to go through this a bunch of times and then  
    let swapCounter;

    do {
        //swhat do we start the count at? 
        swapCounter = 0;
        //how do we start going through the data?   
        for ( let i = 0; i < arr.length -1; i++ ) {

            //what are we comparing? 
            if( arr[i] > arr[i + 1] ) {
               //how do we create the possibility of change? 
                let temp = arr[i]
                //what do we do with something we need to move closer to zero in the index? 
                arr[i] = arr[i +1];
               //how do we take the change item and put it back into the array? 
                arr[i + 1] = temp;
                //if this occurs do we increment our swapcounter? 
                swapCounter++;
            }
    }
    //how do we keep this going? what if we need to keep swapping? when do we stop swapping? 
    } while (swapCounter !== 0);

    return arr;

}