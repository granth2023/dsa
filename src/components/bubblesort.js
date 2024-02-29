

<h2>
    what is bubble sort? what does it do? how does it bubble up higher values? How does it push down lower values? 

    what is a swap counter? it increments when you compare adjacent values. if it stays at zero then we're there.  

    how does it detect completion/

    why ever use it? 

    how would you code? 
    



</h2>

function bubbleSort(arr) {
    //create a swap counter   
    let swapCounter;

    do {
        //start the count at zero 
        swapCounter = 0;
        //start sorting through the data through the data  
        for ( let i = 0; i < arr.length -1; i++ ) {

            // if the current number we are looped at, is greater than the next number -- 
            if( arr[i] > arr[i + 1] ) {
                //set the current number inside the temp variable  and --
                let temp = arr[i]
                //set the bigger number to the location of the current number aka swap so temp
                arr[i] = arr[i +1];
                //goes to the place where it belongs sorted wise 
                arr[i + 1] = temp;
                //increase the swap counter for this occuring 
                swapCounter++;
            }
    }
    //continue the looping while the counter does not equal zero
    } while (swapCounter !== 0);

    return arr;

}