// const n1 = {
//     data: 100
// }

// const n2 ={
//     data: 200
// }

// n1.next = n2; 


// console.log(n1);

class Node{
    constructor(data, next = null){
        this.data = data;
        this.next = next;
    }
}

// const n1 = new Node(100);
// console.log(n1)

class LinkedLists {
    constructor() {
        this.head = null;
        this.size= 0;


    }


//insert frst node
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
