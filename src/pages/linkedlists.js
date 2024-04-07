//create n1 as an object with a key value pair of data  100 
//repeat this process 
//addd in a next pair on n1 and store n2 in there 

//console log n1 
//what did we just do? 
//try something a little new 
//meet with emre about the end of the week and be like im through on wednesday i did this whole thing for LL and then be like this is what im prepping for the next one and I'm getting code a lot more-- I think a theme for me in my adolensce through now has been over thinking coupled with an excellent memory not photographic bu tyeah. 


//prehomewoork, review classes lab from unit 1 
//terminiology// review that first lets review classes 



// const n1 = {
//     data: 100
// }

// const n2 ={
//     data: 200
// }

// n1.next = n2; 


// console.log(n1);
//we are making nodes as classes 
class Node{
    //TF we need constructor with data and next stored as null
    constructor(data, next = null){
        //were calling this dot data whatever data is

        this.data = data;
        //we're callig this dot next whatever next is //whenever we're pointing to next in the instance of this we're saying next is going to be whatever next is becuase we have a next value. sometimes its null.
        this.next = next;

    }
}

// const n1 = new Node(100);
// console.log(n1)
//create a class called linkedlists
class LinkedLists {
//can you call a constructor function that call this dot head null and this dot size zero so we have a a basically empty linked lists except its not empty it just has a size of zero and a head of null

    constructor() {
        this.head = null;
        this.size= 0;


    }


//insert frst node

//create a function called insert first and use data to store in the this.head a new node with data and a this dot head 
//remember node is is a class with a constructor passing data and next being null with data being the the current data at this and same for next 
//so when we run this insert first we will pass a number lets say and it will become the new node with 100 where teh data is now 100 and so this dot data is this dot data  and now were sayiang this new node is now going to be the head of? our linked list. 
    insertFirst(data){


        this.head = new Node(data, this.head);
        //add size
        this.size++;
    }



//insert last node

    insertLast(data){
        // this.head - new Node(data, this.head);
        let node = new Node(data);
        let current;

        //if empty, make head 
        if(!this.head){
            this.head = node;
        }else {
            current = this.head;

            while(current.next){
                current = current.next;
            }

            current.next =node;
        }

        this.size++
    }

//insert at index 

insertAt(data, index){
    //if index is out of range
    if(index > 0 && index > this.size){
        return;


    }
    //if first index
    if(index===0){
        this.head = new Node(data, this.head);
        return;
    }


    const node = new Node(data);
    let current, previous;


    //Set current to first
    current = this.head;
    let count = 0;

    while(count < index){
        previous = current  

    }
}

// get at index

// remove at index

//clear list

//print list data

printListData(){
    let current = this.head; 

    //while you have something in current which you derive from the head therefore you 
    while(current){
        //make sure to see if the data can get into this while loop 
        console.log(current.data);
        //rename what current is by saying what the current next part of the node is and send that through 
        current = current.next;
    }
}
}

const ll = new LinkedLists();

ll.insertFirst(100)
ll.insertFirst(200)
ll.insertFirst(300)


ll.insertLast(400)

ll.printListData();
